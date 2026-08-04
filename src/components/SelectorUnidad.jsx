import React, { useState } from 'react';
import { TEMARIO_PRL, TEXTOS_UI, generarTestGeneral50 } from '../data/temarioPRL';

export default function SelectorUnidad({ lang, onSelectUnidad, onFiltrarUnidades }) {
  const txt = TEXTOS_UI[lang];
  const [unidadesSeleccionadas, setUnidadesSeleccionadas] = useState([]);
  const [modoFiltradoActivo, setModoFiltradoActivo] = useState(false);

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
        gl: unidadesSeleccionadas.length > 0 ? "EXAMEN XERAL (Unidades Seleccionadas)" : "EXAME XERAL (50 Preguntas Aleatorias - 10 Minutos)",
        es: unidadesSeleccionadas.length > 0 ? "EXAMEN GENERAL (Unidades Seleccionadas)" : "EXAMEN GENERAL (50 Preguntas Aleatorias - 10 Minutos)"
      },
      preguntas: preguntas50
    };
    onSelectUnidad(unidadTestGeneral);
  };

  const handleSeleccionarUnidadIndividual = (unidade) => {
    onSelectUnidad(unidade);
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
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-md space-y-3">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => setModoFiltradoActivo(!modoFiltradoActivo)}>
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <span>⚙️</span> {txt.gestionTemarioProfesor} ({unidadesSeleccionadas.length === 0 ? txt.todasUnidadesSeleccionadas : `${unidadesSeleccionadas.length} sel.`})
          </div>
          <span className="text-xs text-slate-400">{modoFiltradoActivo ? '▲ Ocultar' : '▼ Filtrar Temario'}</span>
        </div>

        {modoFiltradoActivo && (
          <div className="pt-2 border-t border-slate-800 space-y-2">
            <p className="text-[11px] text-slate-400">Selecciona que unidades formarán parte do Examen Xeral o aleatorias:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
              {todasLasUnidades.map((u) => {
                const seleccionada = unidadesSeleccionadas.includes(u.id);
                return (
                  <label key={u.id} className={`flex items-center gap-2 p-2 rounded-lg border text-xs cursor-pointer transition-colors ${seleccionada ? 'bg-blue-600/20 border-blue-500 text-white' : 'bg-slate-800/50 border-slate-700/60 text-slate-300'}`}>
                    <input
                      type="checkbox"
                      checked={seleccionada}
                      onChange={() => toggleUnidad(u.id)}
                      className="rounded border-slate-700 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
                    />
                    <span className="truncate">{u.titulo}</span>
                  </label>
                );
              })}
            </div>
            {unidadesSeleccionadas.length > 0 && (
              <button
                onClick={() => setUnidadesSeleccionadas([])}
                className="text-[10px] text-red-400 hover:underline uppercase font-bold"
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
          {txt.testGeneralDesc}
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
                const isFilteredOut = unidadesSeleccionadas.length > 0 && !unidadesSeleccionadas.includes(unidade.id);
                return (
                  <button
                    key={unidade.id}
                    onClick={() => handleSeleccionarUnidadIndividual(unidade)}
                    className={`p-3 rounded-xl border text-left transition-all duration-200 flex items-center justify-between ${
                      isFilteredOut ? 'opacity-40 bg-slate-900/40 border-slate-800' : 'border-slate-700/60 bg-slate-800/60 hover:bg-blue-600/20 hover:border-blue-500 group'
                    }`}
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