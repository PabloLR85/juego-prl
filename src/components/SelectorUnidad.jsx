import React from 'react';
import { TEMARIO_PRL, TEXTOS_UI, generarTestGeneral50 } from '../data/temarioPRL';

export default function SelectorUnidad({ lang, onSelectUnidad }) {
  const txt = TEXTOS_UI[lang];

  const handleIniciarTestGeneral = () => {
    const preguntas50 = generarTestGeneral50();
    const unidadTestGeneral = {
      id: "test_general_50",
      isTestGeneral: true,
      titulo: {
        gl: "🔥 TEST XERAL (50 Preguntas Aleatorias - 10 Minutos)",
        es: "🔥 TEST GENERAL (50 Preguntas Aleatorias - 10 Minutos)"
      },
      preguntas: preguntas50
    };
    onSelectUnidad(unidadTestGeneral);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-black text-white uppercase tracking-wider mb-2">
          {txt.eligeUnidad}
        </h2>
        <p className="text-slate-400 text-sm">
          {txt.seleccionaTemaDesc}
        </p>
      </div>

      <div className="bg-gradient-to-r from-amber-500/20 via-blue-600/20 to-amber-500/20 border-2 border-amber-500/50 rounded-2xl p-6 shadow-2xl text-center space-y-4">
        <h3 className="text-2xl font-black text-amber-300 uppercase tracking-wide">
          {txt.testGeneralTitulo}
        </h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          {txt.testGeneralDesc}
        </p>
        <button
          onClick={handleIniciarTestGeneral}
          className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-lg uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all transform hover:scale-105"
        >
          🚀 Comenzar Examen 50 Preguntas (10 Min)
        </button>
      </div>

      <div className="space-y-6">
        {TEMARIO_PRL.map((modulo) => (
          <div key={modulo.moduloId} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-blue-400 mb-4 pb-2 border-b border-slate-800 uppercase tracking-wide">
              {modulo.tituloModulo[lang]}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {modulo.unidades.map((unidade) => (
                <button
                  key={unidade.id}
                  onClick={() => onSelectUnidad(unidade)}
                  className="p-4 rounded-xl border border-slate-700/60 bg-slate-800/60 hover:bg-blue-600/20 hover:border-blue-500 text-left transition-all duration-200 group flex items-center justify-between"
                >
                  <div>
                    <div className="font-bold text-slate-200 group-hover:text-white text-sm">
                      {unidade.titulo[lang]}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      {unidade.preguntas.length} {txt.preguntasDisponibles}
                    </div>
                  </div>
                  <span className="text-xl group-hover:translate-x-1 transition-transform">➡️</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}