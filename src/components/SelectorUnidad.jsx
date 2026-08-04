// src/components/SelectorUnidad.jsx
import React from 'react';
import { TEMARIO_PRL, TEXTOS_UI, generarTestGeneral50 } from '../data/temarioPRL';

export default function SelectorUnidad({ lang, onSelectUnidad }) {
  const txt = TEXTOS_UI[lang];

  const handleIniciarTestGeneral = () => {
    const preguntas50 = generarTestGeneral50(null);
    const unidadTestGeneral = {
      id: "test_general_50",
      isTestGeneral: true,
      titulo: {
        gl: "EXAME XERAL (Todas as unidades)",
        es: "EXAMEN GENERAL (Todas las unidades)"
      },
      preguntas: preguntas50
    };
    onSelectUnidad(unidadTestGeneral);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-5 px-2 text-sm">
      <div className="text-center">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-1">
          {txt.eligeUnidad}
        </h2>
        <p className="text-slate-400 text-xs">
          {txt.seleccionaTemaDesc}
        </p>
      </div>

      <div className="bg-gradient-to-r from-amber-500/10 via-blue-600/10 to-amber-500/10 border border-amber-500/40 rounded-2xl p-5 shadow-xl text-center space-y-3">
        <h3 className="text-lg font-bold text-amber-300 uppercase tracking-wide">
          {txt.testGeneralTitulo}
        </h3>
        <p className="text-slate-300 text-xs max-w-lg mx-auto">
          {txt.testGeneralDesc}
        </p>
        <button
          onClick={handleIniciarTestGeneral}
          className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow-md transition-all transform hover:scale-105"
        >
          Iniciar Examen 50 Preguntas (10 Min)
        </button>
      </div>

      <div className="space-y-3 pt-2">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          O seleccione una Unidad Didáctica Individual:
        </h3>

        {TEMARIO_PRL.map((modulo) => (
          <div key={modulo.moduloId} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-md">
            <h4 className="text-xs font-bold text-blue-400 mb-2 pb-1.5 border-b border-slate-800 uppercase tracking-wide">
              {modulo.tituloModulo[lang]}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {modulo.unidades.map((unidade) => {
                return (
                  <button
                    key={unidade.id}
                    onClick={() => onSelectUnidad(unidade)}
                    className="p-2.5 rounded-xl border border-slate-700/60 bg-slate-800/60 hover:bg-blue-600/20 hover:border-blue-500 text-left transition-all duration-200 flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-bold text-slate-200 group-hover:text-white text-xs">
                        {unidade.titulo[lang]}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {unidade.preguntas.length} {txt.preguntasDisponibles}
                      </div>
                    </div>
                    <span className="text-xs group-hover:translate-x-1 transition-transform">➡️</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}