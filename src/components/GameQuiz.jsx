// src/components/GameQuiz.jsx
import React, { useState, useEffect } from 'react';
import { barajarArray, TIEMPO_POR_DEFECTO_SEGUNDOS, TEXTOS_UI } from '../data/temarioPRL';

export default function GameQuiz({ unidade, lang, onAddPoints, onVolver, onReportScore, equipo }) {
  const [preguntasBarajadas, setPreguntasBarajadas] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [globalTimeLeft, setGlobalTimeLeft] = useState(unidade.isTestGeneral ? 600 : null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [aciertos, setAciertos] = useState(0);
  const [puntosTotalesIntento, setPuntosTotalesIntento] = useState(0);
  const [historialRespuestas, setHistorialRespuestas] = useState([]);
  const [mostrarRevision, setMostrarRevision] = useState(false);
  const [mostrarModalConfirmacion, setMostrarModalConfirmacion] = useState(false);

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
    setMostrarRevision(false);
    setTimeLeft(listaFinal[0]?.tiempo || TIEMPO_POR_DEFECTO_SEGUNDOS);
    setGlobalTimeLeft(unidade.isTestGeneral ? 600 : null);
  };

  const reiniciarTest = () => {
    inicializarPreguntas(unidade.preguntas);
  };

  useEffect(() => {
    if (!unidade.isTestGeneral || globalTimeLeft === null || isQuizFinished) return;

    if (globalTimeLeft === 0) {
      setIsQuizFinished(true);
      return;
    }

    const globalTimer = setInterval(() => setGlobalTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(globalTimer);
  }, [globalTimeLeft, unidade.isTestGeneral, isQuizFinished]);

  const preguntaActual = preguntasBarajadas[currentIdx];

  useEffect(() => {
    if (isAnswered || isQuizFinished || !preguntaActual) return;
    if (timeLeft === 0) {
      handleTimeout();
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isAnswered, isQuizFinished, preguntaActual]);

  const handleTimeout = () => {
    setIsAnswered(true);
    
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
      text: txt.seAgototiempo
    });
  };

  const handleSelectOption = (index) => {
    if (isAnswered) return;
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
      const totalPuntos = preguntaActual.puntos + bonus;
      onAddPoints(totalPuntos);
      setPuntosTotalesIntento((prev) => prev + totalPuntos);
      setAciertos((prev) => prev + 1);
      if (onReportScore) onReportScore(equipo, totalPuntos);

      setFeedback({
        type: 'success',
        text: `${txt.correctoBonus} ${totalPuntos} pts (${preguntaActual.puntos} ${txt.puntosBase} + ${bonus} ${txt.bonusTiempo})`
      });
    } else {
      setFeedback({
        type: 'error',
        text: `${txt.incorrectoRespuesta} ${opActuales[corrActual]}`
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
      setTimeLeft(preguntasBarajadas[nextIdx]?.tiempo || TIEMPO_POR_DEFECTO_SEGUNDOS);
    } else {
      setIsQuizFinished(true);
    }
  };

  const formatMinutos = (seg) => {
    const min = Math.floor(seg / 60);
    const s = seg % 60;
    return `${min}:${s < 10 ? '0' : ''}${s}`;
  };

  if (isQuizFinished) {
    const porcentajeAciertos = Math.round((aciertos / preguntasBarajadas.length) * 100) || 0;
    const aprobado = porcentajeAciertos >= 50;

    return (
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto text-center space-y-6">
        <div className="w-20 h-20 bg-blue-600/20 border-2 border-blue-500 rounded-full flex items-center justify-center text-4xl mx-auto">
          {aprobado ? '🏆' : '📚'}
        </div>

        <h2 className="text-3xl font-black text-white uppercase tracking-wider">
          {unidade.isTestGeneral ? txt.examenFinalizado : txt.unidadFinalizada}
        </h2>

        <div className="grid grid-cols-3 gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-center">
          <div>
            <div className="text-xs text-slate-400 uppercase font-bold">{txt.puntuacion}</div>
            <div className="text-2xl font-black text-amber-400">{puntosTotalesIntento} pts</div>
          </div>
          <div>
            <div className="text-xs text-slate-400 uppercase font-bold">{txt.aciertos}</div>
            <div className="text-2xl font-black text-emerald-400">{aciertos} / {preguntasBarajadas.length}</div>
          </div>
          <div>
            <div className="text-xs text-slate-400 uppercase font-bold">{txt.aciertoPorcentaje}</div>
            <div className={`text-2xl font-black ${aprobado ? 'text-emerald-400' : 'text-red-400'}`}>
              {porcentajeAciertos}%
            </div>
          </div>
        </div>

        <div className={`p-4 rounded-xl font-bold border text-sm ${
          aprobado ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' : 'bg-red-500/20 text-red-300 border-red-500/40'
        }`}>
          {aprobado ? txt.aprobadoMsg : txt.suspensoMsg}
        </div>

        <div className="pt-2">
          <button
            onClick={() => setMostrarRevision(!mostrarRevision)}
            className="text-xs font-bold text-blue-400 hover:text-blue-300 underline uppercase tracking-wider"
          >
            {mostrarRevision ? txt.ocultarDesglose : txt.revisarHistorial}
          </button>

          {mostrarRevision && (
            <div className="mt-4 text-left space-y-4 max-h-96 overflow-y-auto pr-2 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
              {historialRespuestas.map((h, i) => {
                const esCorrecta = h.seleccionada === h.correcta;
                return (
                  <div key={i} className={`p-4 rounded-xl border ${esCorrecta ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-red-500/30 bg-red-500/5'}`}>
                    <p className="font-bold text-sm text-white mb-2">{i + 1}. {h.pregunta}</p>
                    <p className="text-xs text-slate-300">
                      <strong>{txt.tuRespuesta}</strong> {h.seleccionada === -1 ? txt.tiempoAgotado : h.opciones[h.seleccionada]}
                    </p>
                    {!esCorrecta && (
                      <p className="text-xs text-emerald-400 mt-1">
                        <strong>{txt.respuestaCorrectaLabel}</strong> {h.opciones[h.correcta]}
                      </p>
                    )}
                    {h.explicacion && (
                      <p className="text-xs text-slate-400 mt-2 bg-slate-900 p-2 rounded border border-slate-800 italic">
                        {txt.justificacionDidactica} {h.explicacion}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <button
            onClick={reiniciarTest}
            className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-md uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
          >
            <span>🔄</span> {txt.repetirTest}
          </button>
          <button
            onClick={onVolver}
            className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-black rounded-xl text-md uppercase tracking-wider border border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <span>🏠</span> {txt.menuPrincipal}
          </button>
        </div>
      </div>
    );
  }

  if (!preguntaActual) return null;

  const maxTiempo = preguntaActual.tiempo || TIEMPO_POR_DEFECTO_SEGUNDOS;
  const porcentajeTiempo = (timeLeft / maxTiempo) * 100;

  const textoPreguntaActual = lang === 'gl' ? preguntaActual.textoGl : preguntaActual.textoEs;
  const opcionesActuales = lang === 'gl' ? preguntaActual.opcionesGl : preguntaActual.opcionesEs;
  const correctaActual = lang === 'gl' ? preguntaActual.corrGl : preguntaActual.corrEs;
  const explicacionActual = lang === 'gl' ? preguntaActual.explGl : preguntaActual.explEs;

  return (
    <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl max-w-3xl mx-auto relative">
      {mostrarModalConfirmacion && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl max-w-sm w-full text-center space-y-4 shadow-2xl">
            <h3 className="text-lg font-bold text-white uppercase">{txt.abandonarExamen}</h3>
            <p className="text-xs text-slate-400">{txt.avisoAbandono}</p>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setMostrarModalConfirmacion(false)}
                className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold border border-slate-700"
              >
                {txt.continuarJugando}
              </button>
              <button
                onClick={onVolver}
                className="flex-1 py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-bold"
              >
                {txt.siSalir}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => setMostrarModalConfirmacion(true)}
          className="text-xs font-bold text-slate-400 hover:text-white bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700"
        >
          {txt.cambiarTema}
        </button>

        <span className="text-xs font-black text-blue-400 uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-lg">
          {txt.pregunta} {currentIdx + 1} {txt.de} {preguntasBarajadas.length}
        </span>

        {unidade.isTestGeneral && globalTimeLeft !== null && (
          <div className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-xl font-mono font-bold text-xs">
            {txt.tiempoGlobal} {formatMinutos(globalTimeLeft)}
          </div>
        )}

        <div className={`px-4 py-1.5 rounded-xl font-mono font-black text-lg border ${
          timeLeft <= 5 ? 'bg-red-500/20 text-red-400 border-red-500/40 animate-pulse' : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
        }`}>
          ⏱️ {timeLeft}s
        </div>
      </div>

      <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden mb-8 border border-slate-700/50">
        <div
          className={`h-full transition-all duration-1000 ${
            porcentajeTiempo > 50 ? 'bg-emerald-500' : porcentajeTiempo > 20 ? 'bg-amber-500' : 'bg-red-500'
          }`}
          style={{ width: `${porcentajeTiempo}%` }}
        />
      </div>

      <h2 className="text-2xl font-bold text-white mb-8 text-center leading-relaxed">
        {textoPreguntaActual}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {opcionesActuales.map((opcion, idx) => {
          let btnStyle = "bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-blue-500";
          if (isAnswered) {
            if (idx === correctaActual) {
              btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-200 font-bold";
            } else if (idx === selectedOption) {
              btnStyle = "bg-red-500/20 border-red-500 text-red-200";
            } else {
              btnStyle = "bg-slate-800/30 border-slate-800 text-slate-600";
            }
          }

          return (
            <button
              key={idx}
              disabled={isAnswered}
              onClick={() => handleSelectOption(idx)}
              className={`p-5 rounded-xl border text-left text-lg font-medium transition-all flex items-center gap-4 ${btnStyle}`}
            >
              <span className="w-8 h-8 rounded-lg bg-slate-700 text-white flex items-center justify-center font-bold text-sm">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="flex-1">{opcion}</span>
            </button>
          );
        })}
      </div>

      {feedback && (
        <div className="space-y-4">
          <div className={`p-4 rounded-xl text-center font-bold text-lg border ${
            feedback.type === 'success' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
            feedback.type === 'error' ? 'bg-red-500/20 text-red-300 border-red-500/30' : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
          }`}>
            <div>{feedback.text}</div>
            
            {explicacionActual && (
              <div className="mt-3 pt-3 border-t border-slate-700/50 text-xs font-normal text-slate-300 text-left bg-slate-950/40 p-3 rounded-lg">
                {txt.justificacionDidactica} {explicacionActual}
              </div>
            )}
          </div>

          <button
            onClick={nextQuestion}
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl text-lg transition-colors shadow-lg shadow-blue-600/30 uppercase tracking-wider"
          >
            {currentIdx < preguntasBarajadas.length - 1 ? txt.siguientePregunta : txt.verResultados}
          </button>
        </div>
      )}
    </div>
  );
}