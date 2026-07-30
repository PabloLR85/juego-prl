// src/App.jsx
import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import SelectorUnidad from './components/SelectorUnidad';
import GameQuiz from './components/GameQuiz';
import { TEXTOS_UI } from './data/temarioPRL';

export default function App() {
  const [lang, setLang] = useState('gl');
  const [score, setScore] = useState(0);
  const [equipo, setEquipo] = useState('');
  const [codigoSala, setCodigoSala] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [isProyectorMode, setIsProyectorMode] = useState(false);
  const [unidadeSeleccionada, setUnidadeSeleccionada] = useState(null);
  const [rankingAula, setRankingAula] = useState({});
  const [tabAlumno, setTabAlumno] = useState('juego'); // 'juego' o 'ranking'

  const txt = TEXTOS_UI[lang];
  const currentUrl = window.location.href;

  // Escuchar actualizaciones de puntuación y sincronizar el ranking global
  useEffect(() => {
    const channel = new BroadcastChannel('prl_arcade_channel');
    
    channel.onmessage = (event) => {
      const { type, payload } = event.data;
      if (type === 'SCORE_UPDATE') {
        setRankingAula((prev) => {
          const nuevoRanking = {
            ...prev,
            [payload.equipo]: (prev[payload.equipo] || 0) + payload.pts
          };
          // Notificar a todos los dispositivos del nuevo estado del ranking
          channel.postMessage({ type: 'RANKING_SYNC', payload: nuevoRanking });
          return nuevoRanking;
        });
      } else if (type === 'RANKING_SYNC') {
        setRankingAula(payload);
      }
    };

    return () => channel.close();
  }, []);

  const reportScore = (nombreEquipo, pts) => {
    const channel = new BroadcastChannel('prl_arcade_channel');
    channel.postMessage({
      type: 'SCORE_UPDATE',
      payload: { equipo: nombreEquipo, pts }
    });
    channel.close();
  };

  const addPoints = (pts) => {
    setScore((prev) => prev + pts);
  };

  const iniciarProyector = () => {
    const nuevoCodigo = Math.floor(1000 + Math.random() * 9000).toString();
    setCodigoSala(nuevoCodigo);
    setIsProyectorMode(true);
    setIsStarted(true);
  };

  // Calcular la posición del alumno actual en el ranking
  const rankingOrdenado = Object.entries(rankingAula).sort((a, b) => b[1] - a[1]);
  const posicionAlumno = rankingOrdenado.findIndex(([nombre]) => nombre === equipo) + 1;

  const LanguageToggle = () => (
    <div className="flex bg-slate-800 p-1 rounded-xl border border-slate-700">
      <button
        onClick={() => setLang('gl')}
        className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
          lang === 'gl' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
        }`}
      >
        GAL
      </button>
      <button
        onClick={() => setLang('es')}
        className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
          lang === 'es' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
        }`}
      >
        CAS
      </button>
    </div>
  );

  // Pantalla de Inicio / Registro
  if (!isStarted) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 relative">
        <div className="absolute top-4 right-4">
          <LanguageToggle />
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg shadow-blue-600/30">
            🛡️
          </div>
          <h1 className="text-2xl font-black uppercase tracking-wider text-white mb-1">
            {txt.titulo}
          </h1>
          <p className="text-slate-400 text-sm mb-6">
            {txt.subtitulo}
          </p>

          <form onSubmit={(e) => { e.preventDefault(); if (equipo.trim()) setIsStarted(true); }} className="space-y-4">
            <input
              type="text"
              value={equipo}
              onChange={(e) => setEquipo(e.target.value)}
              placeholder={txt.nombreEquipo}
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white font-medium focus:outline-none focus:border-blue-500 text-center text-lg"
              required
            />
            <input
              type="text"
              value={codigoSala}
              onChange={(e) => setCodigoSala(e.target.value)}
              placeholder={txt.codigoSalaOpcional}
              maxLength={4}
              className="w-full p-3 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-300 font-mono text-center text-sm"
            />
            <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-colors">
              {txt.entrarJugar}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-800">
            <button
              onClick={iniciarProyector}
              className="w-full py-3 bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold rounded-xl text-sm hover:bg-amber-500/30 transition-colors flex items-center justify-center gap-2"
            >
              {txt.abrirProyector}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Vista Proyector Aula
  if (isProyectorMode) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-8 flex flex-col justify-between">
        <header className="flex justify-between items-center bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
          <div>
            <h1 className="text-2xl font-black text-blue-400 uppercase tracking-wider">
              {txt.pantallaAula}
            </h1>
            <p className="text-slate-400 text-sm">{txt.instruccionesQR}</p>
          </div>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <div className="bg-amber-500/20 border border-amber-500/40 text-amber-300 px-6 py-3 rounded-2xl text-center">
              <div className="text-xs uppercase text-amber-400 font-bold">{txt.codigoSala}</div>
              <div className="text-3xl font-mono font-black">{codigoSala}</div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8 flex-1 items-start">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl">
            <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">{txt.accesoQR}</h3>
            <div className="bg-white p-4 rounded-xl shadow-lg border-4 border-blue-500">
              <QRCodeSVG value={currentUrl} size={180} />
            </div>
            <p className="text-xs text-slate-400 mt-4">
              {txt.apuntaCamara}
            </p>
          </div>

          <div className="md:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
            <h2 className="text-xl font-bold text-slate-200 uppercase tracking-wider mb-6">
              {txt.clasificacionClase}
            </h2>

            {rankingOrdenado.length === 0 ? (
              <div className="bg-slate-950/50 border border-slate-800/80 p-12 rounded-xl text-center text-slate-500">
                {txt.esperandoRespuestas}
              </div>
            ) : (
              <div className="space-y-3">
                {rankingOrdenado.map(([nombre, pts], index) => (
                  <div key={nombre} className="p-4 bg-slate-800/80 border border-slate-700 rounded-xl flex items-center justify-between shadow-md">
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-black text-amber-400 w-8">
                        {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}º`}
                      </span>
                      <span className="font-bold text-white text-lg">{nombre}</span>
                    </div>
                    <span className="text-2xl font-black text-amber-400">{pts} <span className="text-xs text-slate-400 font-normal">pts</span></span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <footer className="text-center text-slate-600 text-xs">
          {txt.subtitulo}
        </footer>
      </div>
    );
  }

  // Vista Móvil del Alumno (Con Ranking sincronizado)
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Header del Alumno */}
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-black tracking-wide text-white uppercase flex items-center gap-2">
            PRL <span className="text-blue-500">Challenge</span>
          </h1>
          <p className="text-xs text-slate-400">{txt.equipo}: <span className="text-emerald-400 font-bold">{equipo}</span></p>
        </div>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <div className="bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3 py-1.5 rounded-xl font-bold flex items-center gap-2 text-sm">
            <span>🏆</span>
            <span>{score} pts</span>
            {posicionAlumno > 0 && (
              <span className="bg-amber-500/20 text-amber-300 text-xs px-2 py-0.5 rounded-md">
                #{posicionAlumno}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Navegación Móvil (Juego / Clasificación) */}
      <div className="bg-slate-900/80 border-b border-slate-800 flex justify-center gap-4 py-2 px-4">
        <button
          onClick={() => setTabAlumno('juego')}
          className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-colors ${
            tabAlumno === 'juego' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
          }`}
        >
          🎮 Preguntas
        </button>
        <button
          onClick={() => setTabAlumno('ranking')}
          className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-colors ${
            tabAlumno === 'ranking' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
          }`}
        >
          📊 Clasificación Clase ({rankingOrdenado.length})
        </button>
      </div>

      {/* Contenido según la pestaña elegida */}
      <main className="flex-1 p-6">
        {tabAlumno === 'ranking' ? (
          <div className="max-w-xl mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
            <h2 className="text-lg font-bold text-slate-200 uppercase tracking-wider mb-4 text-center">
              {txt.clasificacionClase}
            </h2>
            {rankingOrdenado.length === 0 ? (
              <p className="text-center text-slate-500 text-sm py-8">{txt.esperandoRespuestas}</p>
            ) : (
              <div className="space-y-2">
                {rankingOrdenado.map(([nombre, pts], index) => {
                  const esMiEquipo = nombre === equipo;
                  return (
                    <div
                      key={nombre}
                      className={`p-3 rounded-xl flex items-center justify-between border ${
                        esMiEquipo
                          ? 'bg-blue-600/20 border-blue-500 text-white font-bold'
                          : 'bg-slate-800/60 border-slate-700/60 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold w-6 text-amber-400">
                          {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}º`}
                        </span>
                        <span className="text-sm">{nombre} {esMiEquipo && '(Tú)'}</span>
                      </div>
                      <span className="font-bold text-amber-400 text-sm">{pts} pts</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          !unidadeSeleccionada ? (
            <SelectorUnidad lang={lang} onSelectUnidad={(ud) => setUnidadeSeleccionada(ud)} />
          ) : (
            <GameQuiz
              unidade={unidadeSeleccionada}
              lang={lang}
              equipo={equipo}
              onAddPoints={addPoints}
              onReportScore={reportScore}
              onVolver={() => setUnidadeSeleccionada(null)}
            />
          )
        )}
      </main>
    </div>
  );
}