import React, { useState } from 'react';
import SelectorUnidad from './components/SelectorUnidad';
import GameQuiz from './components/GameQuiz';

export default function App() {
  const [score, setScore] = useState(0);
  const [equipo, setEquipo] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [unidadeSeleccionada, setUnidadeSeleccionada] = useState(null);

  const addPoints = (pts) => setScore((prev) => prev + pts);

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg shadow-blue-600/30">
            🛡️
          </div>
          <h1 className="text-2xl font-black uppercase tracking-wider text-white mb-2">
            PRL Challenge Arcade
          </h1>
          <p className="text-slate-400 text-sm mb-6">
            Xogo Interactivo de Prevención de Riscos Laborais para Aula
          </p>
          <form onSubmit={(e) => { e.preventDefault(); if (equipo.trim()) setIsStarted(true); }} className="space-y-4">
            <input
              type="text"
              value={equipo}
              onChange={(e) => setEquipo(e.target.value)}
              placeholder="Nome do Equipo ou Alumno"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white font-medium focus:outline-none focus:border-blue-500 text-center text-lg"
              required
            />
            <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-colors">
              ¡Entrar a Competir!
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-black tracking-wide text-white uppercase flex items-center gap-2">
            PRL <span className="text-blue-500">Challenge</span>
          </h1>
          <p className="text-xs text-slate-400">Equipo: <span className="text-emerald-400 font-bold">{equipo}</span></p>
        </div>
        <div className="bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-xl font-bold flex items-center gap-3">
          <span className="text-2xl">🏆</span>
          <div>
            <div className="text-[10px] uppercase text-amber-500/80">Puntuación</div>
            <div className="text-2xl font-black leading-none">{score} <span className="text-xs font-normal">pts</span></div>
          </div>
        </div>
      </header>

      <main className="flex-1 p-6">
        {!unidadeSeleccionada ? (
          <SelectorUnidad onSelectUnidad={(ud) => setUnidadeSeleccionada(ud)} />
        ) : (
          <GameQuiz
            unidade={unidadeSeleccionada}
            onAddPoints={addPoints}
            onVolver={() => setUnidadeSeleccionada(null)}
          />
        )}
      </main>
    </div>
  );
}