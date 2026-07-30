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

  const txt = TEXTOS_UI[lang];

  // Carga inicial y barajado de preguntas
  const cargarYBarajar = () => {
    if (unidade && unidade.preguntas) {
      const preguntasConOpcionesBarajadas = unidade.preguntas.map((p) => {
        const opcionesIdioma = p.opciones[lang];
        const opcionCorrectaTexto = opcionesIdioma[p.respuestaCorrecta];
        const opcionesMezcladas = barajarArray(opcionesIdioma);
        const nuevaRespuestaCorrecta = opcionesMezcladas.indexOf(opcionCorrectaTexto);

        return {
          ...p,
          preguntaTexto: p.pregunta[lang],
          opciones: opcionesMezcladas,
          respuestaCorrecta: nuevaRespuestaCorrecta
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
      setTimeLeft(listaFinal[0]?.tiempo || TIEMPO_POR_DEFECTO_SEGUNDOS);
      setGlobalTimeLeft(unidade.isTestGeneral ? 600 : null);
    }
  };

  useEffect(() => {
    cargarYBarajar();
  }, [unidade, lang]);

  // Temporizador global de 10 minutos (Test General)
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

  // Temporizador individual de 30s por pregunta
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
    setFeedback({
      type: 'error',
      text: txt.seAgototiempo
    });
  };

  const handleSelectOption = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const esCorrecta = index === preguntaActual.respuestaCorrecta;

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
        text: `${txt.incorrectoRespuesta} ${preguntaActual.opciones[preguntaActual.respuestaCorrecta]}`
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

  // --- PANTALLA FINAL DE RESULTADOS ---
  if (isQuizFinished) {
    const porcentajeAciertos = Math.round((aciertos / preguntasBarajadas.length) * 100) || 0;
    const aprobado = porcentajeAciertos >= 50;

    return (
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto text-center space-y-6">
        <div className="w-20 h-20 bg-blue-600/20 border-2 border-blue-500 rounded-full flex items-center justify-center text-4xl mx-auto">
          {aprobado ? '🏆' : '📚'}
        </div>

        <h2 className="text-3xl font-black text-white uppercase tracking-wider">
          {unidade.isTestGeneral ? 'Examen General Finalizado' : 'Unidad Didáctica Completada'}
        </h2>

        <div className="grid grid-cols-3 gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-center">
          <div>
            <div className="text-xs text-slate-400 uppercase font-bold">Puntuación</div>
            <div className="text-2xl font-black text-amber-400">{puntosTotalesIntento} pts</div>
          </div>
          <div>
            <div className="text-xs text-slate-400 uppercase font-bold">Aciertos</div>
            <div className="text-2xl font-black text-emerald-400">{aciertos} / {preguntasBarajadas.length}</div>
          </div>
          <div>
            <div className="text-xs text-slate-400 uppercase font-bold">Acierto %</div>
            <div className={`text-2xl font-black ${aprobado ? 'text-emerald-400' : 'text-red-400'}`}>
              {porcentajeAciertos}%
            </div>
          </div>
        </div>

        <div className={`p-4 rounded-xl font-bold border text-sm ${
          aprobado ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' : 'bg-red-500/20 text-red-300 border-red-500/40'
        }`}>
          {aprobado
            ? '🎉 ¡Buen trabajo! Has superado el test con éxito.'
            : '⚠️ Necesitas repasar un poco más los conceptos del temario.'}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <button
            onClick={cargarYBarajar}
            className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-md uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
          >
            <span>🔄</span> Repetir Test
          </button>
          <button
            onClick={onVolver}
            className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-white font-black rounded-xl text-md uppercase tracking-wider border border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            <span>🏠</span> Menú Principal
          </button>
        </div>
      </div>
    );
  }

  if (!preguntaActual) return null;

  const maxTiempo = preguntaActual.tiempo || TIEMPO_POR_DEFECTO_SEGUNDOS;
  const porcentajeTiempo = (timeLeft / maxTiempo) * 100;

  return (
    <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onVolver}
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
        {preguntaActual.preguntaTexto}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {preguntaActual.opciones.map((opcion, idx) => {
          let btnStyle = "bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-blue-500";
          if (isAnswered) {
            if (idx === preguntaActual.respuestaCorrecta) {
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
            {feedback.text}
          </div>

          <button
            onClick={nextQuestion}
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl text-lg transition-colors shadow-lg shadow-blue-600/30 uppercase tracking-wider"
          >
            {currentIdx < preguntasBarajadas.length - 1 ? txt.siguientePregunta : 'Ver Resultados del Test 🏆'}
          </button>
        </div>
      )}
    </div>
  );
}