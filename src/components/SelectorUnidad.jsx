import React from 'react';
import { TEMARIO_PRL } from '../data/temarioPRL';

export default function SelectorUnidad({ onSelectUnidad }) {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-black text-white uppercase tracking-wider mb-2">
          Elixe a Unidade Didáctica
        </h2>
        <p className="text-slate-400 text-sm">
          Selecciona o tema do manual que queres xogar e competir no proyector
        </p>
      </div>

      <div className="space-y-6">
        {TEMARIO_PRL.map((modulo) => (
          <div key={modulo.moduloId} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-lg font-bold text-blue-400 mb-4 pb-2 border-b border-slate-800 uppercase tracking-wide">
              {modulo.tituloModulo}
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
                      {unidade.titulo}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      {unidade.preguntas.length} preguntas dispoñibles
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