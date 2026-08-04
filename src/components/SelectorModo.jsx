import React from 'react';
import { TEXTOS_UI } from '../data/temarioPRL';

export default function SelectorModo({ lang, onSelectModo }) {
  const txt = TEXTOS_UI[lang];

  return (
    <div className="max-w-xl mx-auto space-y-4 text-center px-2">
      <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-1">
        {txt.seleccionaModoJuego}
      </h2>

      <div className="grid grid-cols-1 gap-3 pt-2">
        <button
          onClick={() => onSelectModo('clasico')}
          className="p-4 rounded-xl border border-slate-700 bg-slate-900 hover:bg-blue-600/10 hover:border-blue-500 text-left transition-all flex items-center justify-between shadow-md"
        >
          <div>
            <h3 className="text-sm font-bold text-white mb-1">
              {txt.modoClasicoTitulo}
            </h3>
            <p className="text-xs text-slate-400">
              {txt.modoClasicoDesc}
            </p>
          </div>
          <span className="text-blue-400 font-bold text-sm">➡️</span>
        </button>

        <button
          onClick={() => onSelectModo('juicio')}
          className="p-4 rounded-xl border border-slate-700 bg-slate-900 hover:bg-amber-500/10 hover:border-amber-500 text-left transition-all flex items-center justify-between shadow-md"
        >
          <div>
            <h3 className="text-sm font-bold text-white mb-1">
              {txt.modoJuicioTitulo}
            </h3>
            <p className="text-xs text-slate-400">
              {txt.modoJuicioDesc}
            </p>
          </div>
          <span className="text-amber-400 font-bold text-sm">➡️</span>
        </button>
      </div>
    </div>
  );
}