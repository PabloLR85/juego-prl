// src/components/SelectorUnidad.jsx
import React, { useState } from 'react';
import { TEMARIO_PRL, TEXTOS_UI, generarTestGeneral50 } from '../data/temarioPRL';

export default function SelectorUnidad({ lang, onSelectUnidad }) {
  const txt = TEXTOS_UI[lang];
  const [unidadesSeleccionadas, setUnidadesSeleccionadas] = useState([]);
  const [modoFiltradoActivo, setModoFiltradoActivo] = useState(true); // Abierto por defecto para que sea visible

  // Obtener todas las unidades disponibles
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

  const handleIniciarTestGeneral = () => {
    const idsFiltro = unidadesSeleccionadas.length > 0 ? unidadesSeleccionadas : null;
    const preguntas50 = generarTestGeneral50(idsFiltro);
    
    const unidadTestGeneral = {
      id: "test_general_50",
      isTestGeneral: true,
      titulo: {
        gl: unidadesSeleccionadas.length > 0 ? "EXAME XERAL (Unidades Seleccionadas)" : "EXAME XERAL (50 Preguntas Aleatorias - 10 Minutos)",
        es: unidadesSeleccionadas.length > 0 ? "EXAMEN GENERAL (Unidades Seleccionadas)" : "EXAMEN GENERAL (50 Preguntas Aleatorias - 10 Minutos)"
      },
      preguntas: preguntas50
    };
    onSelectUnidad(unidadTestGeneral);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 px-2">
      <div className="text-center">
        <h2 className="text-2xl font-black text-white uppercase tracking-wider mb-1">
          {txt.eligeUnidad}
        </h2>
        <p className="text-slate-400 text-xs">
          {txt.seleccionaTemaDesc}
        </p>
      </div>

      {/* Panel de Configuración de Temario para el Profesor / Sesión */}
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-4 shadow-lg space-y-3">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => setModoFiltradoActivo(!modoFiltradoActivo)}>
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <span>⚙️</span> {txt.gestionTemarioProfesor} ({unidadesSeleccionadas.length === 0 ? txt.todasUnidadesSeleccionadas : `${unidadesSeleccionadas.length} sel.`})
          </div>
          <span className="text-xs text-slate-400">{modoFiltradoActivo ? '▲ Ocultar' : '▼ Amosar Filtrado'}</span>
        </div>

        {modoFiltradoActivo && (
          <div className="pt-3 border-t border-slate-800 space-y-3">
            <p className="text-[11px] text-slate-300">Selecciona que unidades formarán parte do Exame Xeral (Se non marcas ningunha, entraran todas):</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-52 overflow-y-auto pr-1">
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
            {unidadesSeleccionadas.length > 0 && (
              <button
                onClick={() => setUnidadesSeleccionadas([])}
                className="text-[11px] text-red-400 hover:underline uppercase font-bold"
              >
                Limpiar filtros (Seleccionar todo)
              </button>
            )}
          </div>
        )}
      </div>

      <div className="bg-gradient-to-r from-amber-500/10 via-blue-600/10 to-amber-500/10 border border-amber-500/40 rounded-2xl p-5 shadow-xl text-center space-y-3">
        <h3 className="text-lg font-bold text-amber-300 uppercase tracking-wide">
          {txt.testGeneralTitulo}
        </h3>
        <p className="text-slate-300 text-xs max-w-lg mx-auto">
          {txt.testGeneralDesc} {unidadesSeleccionadas.length > 0 && `(Filtrado por ${unidadesSeleccionadas.length} unidades)`}
        </p>
        <button
          onClick={handleIniciarTestGeneral}
          className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow-md transition-all transform hover:scale-105"
        >
          Iniciar Examen 50 Preguntas (10 Min)
        </button>
      </div>

      <div className="space-y-4">
        {TEMARIO_PRL.map((modulo) => (
          <div key={modulo.moduloId} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-lg">
            <h3 className="text-xs font-bold text-blue-400 mb-3 pb-2 border-b border-slate-800 uppercase tracking-wide">
              {modulo.tituloModulo[lang]}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {modulo.unidades.map((unidade) => {
                return (
                  <button
                    key={unidade.id}
                    onClick={() => onSelectUnidad(unidade)}
                    className="p-3 rounded-xl border border-slate-700/60 bg-slate-800/60 hover:bg-blue-600/20 hover:border-blue-500 text-left transition-all duration-200 flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-bold text-slate-200 group-hover:text-white text-xs">
                        {unidade.titulo[lang]}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {unidade.preguntas.length} {txt.preguntasDisponibles}
                      </div>
                    </div>
                    <span className="text-sm group-hover:translate-x-1 transition-transform">➡️</span>
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