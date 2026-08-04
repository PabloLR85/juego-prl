import React, { useState } from 'react';
import { TEMARIO_PRL, TEXTOS_UI, generarTestGeneral50 } from '../data/temarioPRL';

export default function SelectorUnidad({ lang, onSelectUnidad }) {
  const txt = TEXTOS_UI[lang];
  const [unidadesSeleccionadas, setUnidadesSeleccionadas] = useState([]);

  const todasLasUnidades = [];
  TEMARIO_PRL.forEach((m) => {
    m.unidades.forEach((u) => {
      todasLasUnidades.push({ id: u.id, titulo: u.titulo[lang] });
    });
  });

  const toggleUnidad = (id) => {
    if (unidadesSeleccionadas.includes(id)) {
      setUnidadesSeleccionadas(unidadesSeleccionadas.filter(uId => uId !== id));
    } else {
      setUnidadesSeleccionadas([...unidadesSeleccionadas, id]);
    }
  };

  const handleIniciarMixPersonalizado = () => {
    const idsFiltro = unidadesSeleccionadas.length > 0 ? unidadesSeleccionadas : null;
    const preguntasMix = generarTestGeneral50(idsFiltro, unidadesSeleccionadas.length > 0 ? 25 : 50);
    
    const unidadMixPersonalizado = {
      id: "mix_personalizado",
      isTestGeneral: true,
      titulo: {
        gl: unidadesSeleccionadas.length > 0 ? `MIX TEMARIO (${unidadesSeleccionadas.length} unidades seleccionadas)` : "EXAME XERAL (Todas as unidades)",
        es: unidadesSeleccionadas.length > 0 ? `MIX TEMARIO (${unidadesSeleccionadas.length} unidades seleccionadas)` : "EXAMEN GENERAL (Todas las unidades)"
      },
      preguntas: preguntasMix
    };
    onSelectUnidad(unidadMixPersonalizado);
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

      <div className="bg-slate-900 border border-blue-500/40 rounded-2xl p-4 shadow-lg space-y-3">
        <div className="flex justify-between items-center">
          <div className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
            <span>⚙️</span> Seleccionar Unidades (Mix)
          </div>
          <span className="text-xs text-amber-400 font-bold">
            {unidadesSeleccionadas.length === 0 ? txt.todasUnidadesSeleccionadas : `${unidadesSeleccionadas.length} unidades marcadas`}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
          {todasLasUnidades.map((u) => {
            const seleccionada = unidadesSeleccionadas.includes(u.id);
            return (
              <label key={u.id} className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-xs cursor-pointer transition-colors ${seleccionada ? 'bg-blue-600/30 border-blue-500 text-white font-bold' : 'bg-slate-800/80 border-slate-700 text-slate-300'}`}>
                <input
                  type="checkbox"
                  checked={seleccionada}
                  onChange={() => toggleUnidad(u.id)}
                  className="rounded border-slate-700 text-blue-600 focus:ring-blue-500 w-4 h-4"
                />
                <span className="truncate">{u.titulo}</span>
              </label>
            );
          })}
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-slate-800">
          {unidadesSeleccionadas.length > 0 ? (
            <button
              onClick={() => setUnidadesSeleccionadas([])}
              className="text-[11px] text-red-400 hover:underline uppercase font-bold"
            >
              Limpiar selección
            </button>
          ) : <span />}
          
          <button
            onClick={handleIniciarMixPersonalizado}
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-md transition-all"
          >
            Iniciar con Selección ➡️
          </button>
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          O bien, seleccione una Unidad Didáctica Individual:
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