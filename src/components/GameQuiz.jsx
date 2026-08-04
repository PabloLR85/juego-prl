import React, { useState, useEffect } from 'react';
import { barajarArray, TEXTOS_UI } from '../data/temarioPRL';
import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export default function GameQuiz({ unidade, lang, onAddPoints, onVolver, onReportScore, equipo, codigoSala, modoJuego, tiempoPersonalizado }) {
  const [preguntasBarajadas, setPreguntasBarajadas] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  
  const tiempoInicialPregunta = tiempoPersonalizado || 30;
  const [timeLeft, setTimeLeft] = useState(tiempoInicialPregunta);

  const [isAnswered, setIsAnswered] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [aciertos, setAciertos] = useState(0);
  const [puntosTotalesIntento, setPuntosTotalesIntento] = useState(0);
  const [historialRespuestas, setHistorialRespuestas] = useState([]);
  const [mostrarModalConfirmacion, setMostrarModalConfirmacion] = useState(false);
  
  const [vidas, setVidas] = useState(3);
  const [eliminadoJuicioFinal, setEliminadoJuicioFinal] = useState(false);

  const txt = TEXTOS_UI[lang];

  useEffect(() => {
    if (unidade && unidade.preguntas && preguntasBarajadas.length === 0) {
      inicializarPreguntas(unidade.preguntas);
    }
  }, [unidade]);

  const inicializarPreguntas = (rawPreguntas) => {
    const preguntasConOpcionesBarajadas = rawPreguntas.map((p) => {
      const opcionesGl = p.opciones.gl;
      const opcionesEs = p.opciones.es;
      const opcionCorrectaTextoGl = opcionesGl[p.respuestaCorrecta];
      const opcionCorrectaTextoEs = opcionesEs[p.respuestaCorrecta];

      const opMezcladasGl = barajarArray(opcionesGl);
      const nuevaCorrectaGl = opMezcladasGl.indexOf(opcionCorrectaTextoGl);

      const opMezcladasEs = barajarArray(opcionesEs);
      const nuevaCorrectaEs = opMezcladasEs.indexOf(opcionCorrectaTextoEs);

      return {
        ...p,
        textoGl: p.pregunta.gl,
        textoEs: p.pregunta.es,
        explGl: p.explicacion ? p.explicacion.gl : null,
        explEs: p.explicacion ? p.explicacion.es : null,
        opcionesGl: opMezcladasGl,
        opcionesEs: opMezcladasEs,
        corrGl: nuevaCorrectaGl,
        corrEs: nuevaCorrectaEs
      };
    });

    const listaFinal = barajarArray(preguntasConOpcionesBarajadas);
    setPreguntasBarajadas(listaFinal);
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setFeedback(null);
    setIsQuizFinished(false);
    setAciertos(0);
    setPuntosTotalesIntento(0);
    setHistorialRespuestas([]);
    setVidas(3);
    setEliminadoJuicioFinal(false);
    if (modoJuego === 'juicio') sincronizarVidasFirebase(3, false);
    setTimeLeft(tiempoPersonalizado || 30);
  };

  const sincronizarVidasFirebase = (numVidas, estadoEliminado) => {
    if (!codigoSala || !equipo || modoJuego !== 'juicio') return;
    const keyEquipo = equipo.trim().replace(/[.#$\[\]]/g, "_");
    const vidasRef = ref(db, `salas/${codigoSala.trim()}/vidas/${keyEquipo}`);
    set(vidasRef, { vidas: numVidas, eliminado: estadoEliminado });
  };

  const reiniciarTest = () => {
    inicializarPreguntas(unidade.preguntas);
  };

  const preguntaActual = preguntasBarajadas[currentIdx];

  useEffect(() => {
    if (isAnswered || isQuizFinished || !preguntaActual || eliminadoJuicioFinal) return;
    if (timeLeft === 0) {
      handleTimeout();
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isAnswered, isQuizFinished, preguntaActual, eliminadoJuicioFinal]);

  const restarVidaPorFallo = () => {
    if (modoJuego !== 'juicio') return;
    const novasVidas = vidas - 1;
    setVidas(novasVidas);
    if (novasVidas <= 0) {
      setEliminadoJuicioFinal(true);
      sincronizarVidasFirebase(0, true);
      setIsQuizFinished(true);
    } else {
      sincronizarVidasFirebase(novasVidas, false);
    }
  };

  const handleTimeout = () => {
    setIsAnswered(true);
    restarVidaPorFallo();
    
    const opActuales = lang === 'gl' ? preguntaActual.opcionesGl : preguntaActual.opcionesEs;
    const corrActual = lang === 'gl' ? preguntaActual.corrGl : preguntaActual.corrEs;
    const explActual = lang === 'gl' ? preguntaActual.explGl : preguntaActual.explEs;

    setHistorialRespuestas((prev) => [
      ...prev,
      {
        pregunta: lang === 'gl' ? preguntaActual.textoGl : preguntaActual.textoEs,
        opciones: opActuales,
        seleccionada: -1,
        correcta: corrActual,
        explicacion: explActual
      }
    ]);

    setFeedback({
      type: 'error',
      text: modoJuego === 'juicio' ? `${txt.seAgototiempo} (-1 vida)` : txt.seAgototiempo
    });
  };

  const handleSelectOption = (index) => {
    if (isAnswered || eliminadoJuicioFinal) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const corrActual = lang === 'gl' ? preguntaActual.corrGl : preguntaActual.corrEs;
    const opActuales = lang === 'gl' ? preguntaActual.opcionesGl : preguntaActual.opcionesEs;
    const explActual = lang === 'gl' ? preguntaActual.explGl : preguntaActual.explEs;
    const preguntaTextoActual = lang === 'gl' ? preguntaActual.textoGl : preguntaActual.textoEs;

    const esCorrecta = index === corrActual;

    setHistorialRespuestas((prev) => [
      ...prev,
      {
        pregunta: preguntaTextoActual,
        opciones: opActuales,
        seleccionada: index,
        correcta: corrActual,
        explicacion: explActual
      }
    ]);

    if (esCorrecta) {
      const bonus = timeLeft * 5;
      const totalPuntos = 100 + bonus;
      onAddPoints(totalPuntos);
      setPuntosTotalesIntento((prev) => prev + totalPuntos);
      setAciertos((prev) => prev + 1);
      if (onReportScore) onReportScore(equipo, totalPuntos);

      setFeedback({
        type: 'success',
        text: `${txt.correctoBonus} ${totalPuntos} pts (100 ${txt.puntosBase} + ${bonus} ${txt.bonusTiempo})`
      });
    } else {
      restarVidaPorFallo();
      setFeedback({
        type: 'error',
        text: modoJuego === 'juicio' ? `${txt.incorrectoRespuesta} ${opActuales[corrActual]} (-1 vida)` : `${txt.incorrectoRespuesta} ${opActuales[corrActual]}`
      });
    }
  };

  const nextQuestion = () => {
    if (currentIdx < preguntasBarajadas.length - 1) {
      const nextIdx = currentIdx + 1;
      setCurrentIdx(nextIdx);
      setSelectedOption(null);
      setIsAnswered(false);
      setFeedback(null);
      setTimeLeft(tiempoPersonalizado || 30);
    } else {
      setIsQuizFinished(true);
    }
  };

  if (isQuizFinished) {
    const porcentajeAciertos = Math.round((aciertos / preguntasBarajadas.length) * 100) || 0;
    const aprobado = porcentajeAciertos >= 50 && !eliminadoJuicioFinal;

    return (
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl max-w-lg mx-auto text-center space-y-4">
        <div className="w-14 h-14 bg-blue-600/20 border border-blue-500 rounded-full flex items-center justify-center text-2xl mx-auto">
          {eliminadoJuicioFinal ? '⚠️' : aprobado ? '🏆' : '📚'}
        </div>

        <h2 className="text-xl font-bold text-white uppercase tracking-wider">
          {eliminadoJuicioFinal ? 'Eliminado na Proba' : txt.unidadFinalizada}
        </h2>

        {eliminadoJuicioFinal && (
          <p className="text-slate-400 text-xs">Quedou sen oportunidades nesta modalidade. Consulte a clasificación xeral na pestana superior.</p>
        )}

        <div className="grid grid-cols-3 gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 text-center text-xs">
          <div>
            <div className="text-slate-500 uppercase font-bold">{txt.puntuacion}</div>
            <div className="text-base font-bold text-amber-400">{puntosTotalesIntento} pts</div>
          </div>
          <div>
            <div className="text-slate-500 uppercase font-bold">{txt.aciertos}</div>
            <div className="text-base font-bold text-emerald-400">{aciertos} / {preguntasBarajadas.length}</div>
          </div>
          <div>
            <div className="text-slate-500 uppercase font-bold">{txt.aciertoPorcentaje}</div>
            <div className={`text-base font-bold ${aprobado ? 'text-emerald-400' : 'text-red-400'}`}>{porcentajeAciertos}%</div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 pt-2">
          {(!eliminadoJuicioFinal || modoJuego === 'clasico') && (
            <button onClick={reiniciarTest} className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all">
              {txt.repetirTest}
            </button>
          )}
          <button onClick={onVolver} className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider border border-slate-700 transition-all">
            {txt.menuPrincipal}
          </button>
        </div>
      </div>
    );
  }

  if (!preguntaActual) return null;

  const maxTiempo = tiempoPersonalizado || 30;
  const porcentajeTiempo = (timeLeft / maxTiempo) * 100;

  const textoPreguntaActual = lang === 'gl' ? preguntaActual.textoGl : preguntaActual.textoEs;
  const opcionesActuales = lang === 'gl' ? preguntaActual.opcionesGl : preguntaActual.opcionesEs;
  const correctaActual = lang === 'gl' ? preguntaActual.corrGl : preguntaActual.corrEs;
  const explicacionActual = lang === 'gl' ? preguntaActual.explGl : preguntaActual.explEs;

  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-xl max-w-2xl mx-auto relative text-sm">
      <div className="flex justify-between items-center mb-3 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
        <button onClick={() => setMostrarModalConfirmacion(true)} className="text-xs font-bold text-slate-400 hover:text-white bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700">
          {txt.cambiarTema}
        </button>

        {modoJuego === 'juicio' && (
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
            <span>Vidas:</span>
            <span>{vidas === 3 ? '3 / 3' : vidas === 2 ? '2 / 3' : '1 / 3'}</span>
          </div>
        )}

        <div className={`px-3 py-1 rounded-lg font-mono font-bold text-xs border ${timeLeft <= 5 ? 'bg-red-500/20 text-red-400 border-red-500/40 animate-pulse' : 'bg-amber-500/10 text-amber-400 border-amber-500/30'}`}>
          {timeLeft}s
        </div>
      </div>

      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-4 border border-slate-700/50">
        <div className={`h-full transition-all duration-1000 ${porcentajeTiempo > 50 ? 'bg-emerald-500' : porcentajeTiempo > 20 ? 'bg-amber-500' : 'bg-red-500'}`} style={{ width: `${porcentajeTiempo}%` }} />
      </div>

      <h2 className="text-base font-bold text-white mb-4 text-center leading-snug">
        {textoPreguntaActual}
      </h2>

      <div className="grid grid-cols-1 gap-2 mb-4">
        {opcionesActuales.map((opcion, idx) => {
          let btnStyle = "bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-blue-500";
          if (isAnswered) {
            if (idx === correctaActual) btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-200 font-bold";
            else if (idx === selectedOption) btnStyle = "bg-red-500/20 border-red-500 text-red-200";
            else btnStyle = "bg-slate-800/30 border-slate-800 text-slate-600";
          }

          return (
            <button key={idx} disabled={isAnswered} onClick={() => handleSelectOption(idx)} className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center gap-3 ${btnStyle}`}>
              <span className="w-6 h-6 rounded-lg bg-slate-700 text-white flex items-center justify-center font-bold text-xs shrink-0">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="flex-1">{opcion}</span>
            </button>
          );
        })}
      </div>

      {feedback && (
        <div className="space-y-3">
          <div className={`p-3 rounded-xl text-center font-bold text-xs border ${feedback.type === 'success' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 'bg-red-500/20 text-red-300 border-red-500/30'}`}>
            <div>{feedback.text}</div>
            {explicacionActual && (
              <div className="mt-2 pt-2 border-t border-slate-700/50 text-[11px] font-normal text-slate-300 text-left bg-slate-950/40 p-2 rounded-lg leading-normal">
                {txt.justificacionDidactica} {explicacionActual}
              </div>
            )}
          </div>

          <button onClick={nextQuestion} className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs transition-colors uppercase tracking-wider shadow-md">
            {currentIdx < preguntasBarajadas.length - 1 ? txt.siguientePregunta : txt.verResultados}
          </button>
        </div>
      )}
    </div>
  );
}