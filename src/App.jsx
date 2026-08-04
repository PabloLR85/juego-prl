// src/App.jsx
import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { ref, onValue, set, get, update } from 'firebase/database';
import { db } from './firebase';
import GameQuiz from './components/GameQuiz';
import { TEXTOS_UI, TEMARIO_PRL, generarTestGeneral50 } from './data/temarioPRL';

export default function App() {
  const [lang, setLang] = useState('gl');
  const [score, setScore] = useState(0);
  const [equipo, setEquipo] = useState('');
  const [codigoSala, setCodigoSala] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [isProyectorMode, setIsProyectorMode] = useState(false);
  const [unidadeSeleccionada, setUnidadeSeleccionada] = useState(null);
  const [rankingAula, setRankingAula] = useState({});
  const [vidasAula, setVidasAula] = useState({});
  const [tabAlumno, setTabAlumno] = useState('juego');

  const [unidadesSeleccionadasProfesor, setUnidadesSeleccionadasProfesor] = useState([]);
  const [modoJuegoProfesor, setModoJuegoProfesor] = useState('clasico');
  const [numPreguntasProfesor, setNumPreguntasProfesor] = useState(15);
  const [tiempoPreguntaProfesor, setTiempoPreguntaProfesor] = useState(30);

  const [configSesion, setConfigSesion] = useState({ modoJuego: 'clasico', tiempoPregunta: 30 });

  const txt = TEXTOS_UI[lang];
  const currentUrl = window.location.href;

  useEffect(() => {
    if (!codigoSala) return;

    const rankingRef = ref(db, `salas/${codigoSala}/ranking`);
    const unsubscribeRanking = onValue(rankingRef, (snapshot) => {
      setRankingAula(snapshot.val() || {});
    });

    const vidasRef = ref(db, `salas/${codigoSala}/vidas`);
    const unsubscribeVidas = onValue(vidasRef, (snapshot) => {
      setVidasAula(snapshot.val() || {});
    });

    const configRef = ref(db, `salas/${codigoSala}/config`);
    const unsubscribeConfig = onValue(configRef, (snapshot) => {
      const config = snapshot.val();
      if (config) {
        setConfigSesion(config);
        if (config.unidades && config.unidades.length >= 0) {
          const preguntasMix = generarTestGeneral50(config.unidades, config.numPreguntas || 15);
          setUnidadeSeleccionada({
            id: "mix_profesor",
            isTestGeneral: true,
            titulo: {
              gl: `EXAME CONFIGURADO (${config.unidades.length === 0 ? 'Todas' : config.unidades.length} unidades)`,
              es: `EXAMEN CONFIGURADO (${config.unidades.length === 0 ? 'Todas' : config.unidades.length} unidades)`
            },
            preguntas: preguntasMix
          });
        }
      }
    });

    return () => {
      unsubscribeRanking();
      unsubscribeVidas();
      unsubscribeConfig();
    };
  }, [codigoSala]);

  const handleEntrarAlumno = (e) => {
    e.preventDefault();
    if (equipo.trim() && codigoSala.trim()) {
      const keyEquipo = equipo.trim().replace(/[.#$\[\]]/g, "_");
      set(ref(db, `salas/${codigoSala.trim()}/ranking/${keyEquipo}`), 0);
      set(ref(db, `salas/${codigoSala.trim()}/vidas/${keyEquipo}`), { vidas: 3, eliminado: false });
      setIsStarted(true);
    }
  };

  const reportScore = (nombreEquipo, pts) => {
    if (!codigoSala) return;
    const keyEquipo = nombreEquipo.trim().replace(/[.#$\[\]]/g, "_");
    const puntosActuales = rankingAula[keyEquipo] || 0;
    set(ref(db, `salas/${codigoSala}/ranking/${keyEquipo}`), puntosActuales + pts);
  };

  const addPoints = (pts) => setScore((prev) => prev + pts);

  const handleVolverAlMenu = () => {
    setScore(0);
    setUnidadeSeleccionada(null);
  };

  const iniciarProyector = () => {
    const nuevoCodigo = codigoSala.trim() || Math.floor(1000 + Math.random() * 9000).toString();
    setCodigoSala(nuevoCodigo);
    setIsProyectorMode(true);
    setIsStarted(true);
  };

  const reiniciarPartidaGlobal = async () => {
    if (!codigoSala) return;
    const salaRef = ref(db, `salas/${codigoSala}`);
    const snapshot = await get(salaRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const updates = {};
      
      if (data.ranking) {
        Object.keys(data.ranking).forEach((k) => {
          updates[`ranking/${k}`] = 0;
        });
      }
      if (data.vidas) {
        Object.keys(data.vidas).forEach((k) => {
          updates[`vidas/${k}`] = { vidas: 3, eliminado: false };
        });
      }
      await update(salaRef, updates);
    }
  };

  const guardarConfiguracionSala = async () => {
    if (!codigoSala) return;
    const configRef = ref(db, `salas/${codigoSala}/config`);
    await set(configRef, {
      modoJuego: modoJuegoProfesor,
      unidades: unidadesSeleccionadasProfesor,
      numPreguntas: Number(numPreguntasProfesor),
      tiempoPregunta: Number(tiempoPreguntaProfesor)
    });
    alert("Configuración de la sesión guardada y aplicada a la sala.");
  };

  const toggleUnidadProfesor = (id) => {
    if (unidadesSeleccionadasProfesor.includes(id)) {
      setUnidadesSeleccionadasProfesor(unidadesSeleccionadasProfesor.filter(uId => uId !== id));
    } else {
      setUnidadesSeleccionadasProfesor([...unidadesSeleccionadasProfesor, id]);
    }
  };

  const rankingOrdenado = Object.entries(rankingAula).sort((a, b) => b[1] - a[1]);

  const todasLasUnidades = [];
  TEMARIO_PRL.forEach((m) => {
    m.unidades.forEach((u) => {
      todasLasUnidades.push({ id: u.id, titulo: u.titulo[lang] });
    });
  });

  const LanguageToggle = () => (
    <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700">
      <button onClick={() => setLang('gl')} className={`px-2 py-1 rounded text-[11px] font-bold transition-colors ${lang === 'gl' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}>Galego</button>
      <button onClick={() => setLang('es')} className={`px-2 py-1 rounded text-[11px] font-bold transition-colors ${lang === 'es' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}>Castellano</button>
    </div>
  );

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-3 relative text-sm">
        <div className="absolute top-3 right-3"><LanguageToggle /></div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl max-w-sm w-full text-center">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-xl mx-auto mb-3 shadow-md">🛡️</div>
          <h1 className="text-xl font-bold uppercase tracking-wider text-white mb-1">{txt.titulo}</h1>
          <p className="text-slate-400 text-xs mb-4">{txt.subtitulo}</p>
          <form onSubmit={handleEntrarAlumno} className="space-y-3">
            <input type="text" value={equipo} onChange={(e) => setEquipo(e.target.value)} placeholder={txt.nombreEquipo} className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-medium focus:outline-none focus:border-blue-500 text-center text-sm" required />
            <input type="text" value={codigoSala} onChange={(e) => setCodigoSala(e.target.value)} placeholder="Código de Aula (Ej. 1234)" maxLength={6} className="w-full p-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-300 font-mono text-center text-xs" required />
            <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl uppercase tracking-wider text-xs shadow-md transition-colors">{txt.entrarJugar}</button>
          </form>
          <div className="mt-4 pt-4 border-t border-slate-800">
            <button onClick={iniciarProyector} className="w-full py-2.5 bg-slate-800 border border-slate-700 text-slate-300 font-bold rounded-xl text-xs hover:bg-slate-700 transition-colors">
              {txt.abrirProyector}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isProyectorMode) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-4 md:p-6 flex flex-col justify-between text-sm">
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-lg">
          <div>
            <h1 className="text-lg font-bold text-blue-400 uppercase tracking-wider">{txt.pantallaAula}</h1>
            <p className="text-slate-400 text-xs">{txt.instruccionesQR}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={reiniciarPartidaGlobal} className="px-3 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold rounded-xl text-xs uppercase tracking-wider transition-all">
              🔄 Reiniciar Partida
            </button>
            <LanguageToggle />
            <div className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-center">
              <div className="text-[10px] uppercase text-slate-400 font-bold">{txt.codigoSala}</div>
              <div className="text-xl font-mono font-bold text-amber-400">{codigoSala}</div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 flex-1 items-start">
          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg">
              <h3 className="text-xs font-bold text-white mb-3 uppercase tracking-wide">{txt.accesoQR}</h3>
              <div className="bg-white p-3 rounded-xl shadow-md border-2 border-blue-500"><QRCodeSVG value={currentUrl} size={130} /></div>
              <p className="text-[11px] text-slate-400 mt-3">{txt.apuntaCamara}</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-lg space-y-3 text-xs">
              <h3 className="font-bold text-amber-400 uppercase tracking-wide flex items-center gap-1.5">
                <span>⚙️</span> {txt.gestionTemarioProfesor}
              </h3>
              
              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Modalidade de Proba:</label>
                <select 
                  value={modoJuegoProfesor} 
                  onChange={(e) => setModoJuegoProfesor(e.target.value)}
                  className="w-full p-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-xs font-bold"
                >
                  <option value="clasico">{txt.modoClasicoTitulo}</option>
                  <option value="juicio">{txt.modoJuicioTitulo}</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold block mb-1">{txt.numeroPreguntas}</label>
                  <input 
                    type="number" 
                    min="5" 
                    max="50" 
                    value={numPreguntasProfesor} 
                    onChange={(e) => setNumPreguntasProfesor(e.target.value)}
                    className="w-full p-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-xs font-bold text-center"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold block mb-1">{txt.tiempoPregunta}</label>
                  <input 
                    type="number" 
                    min="10" 
                    max="120" 
                    value={tiempoPreguntaProfesor} 
                    onChange={(e) => setTiempoPreguntaProfesor(e.target.value)}
                    className="w-full p-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-xs font-bold text-center"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Unidades Didácticas:</label>
                <div className="max-h-28 overflow-y-auto space-y-1 pr-1">
                  {todasLasUnidades.map((u) => {
                    const sel = unidadesSeleccionadasProfesor.includes(u.id);
                    return (
                      <label key={u.id} className={`flex items-center gap-2 p-1.5 rounded border cursor-pointer ${sel ? 'bg-blue-600/30 border-blue-500 text-white font-bold' : 'bg-slate-800 border-slate-700 text-slate-300'}`}>
                        <input type="checkbox" checked={sel} onChange={() => toggleUnidadProfesor(u.id)} className="rounded border-slate-700 text-blue-600 w-3.5 h-3.5" />
                        <span className="truncate text-[11px]">{u.titulo}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <button 
                onClick={guardarConfiguracionSala}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                {txt.guardarConfiguracion}
              </button>
            </div>
          </div>

          <div className="md:col-span-2 bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-lg">
            <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4">{txt.clasificacionClase}</h2>
            {rankingOrdenado.length === 0 ? (
              <div className="bg-slate-950 border border-slate-800 p-8 rounded-xl text-center text-slate-500 text-xs">{txt.esperandoRespuestas}</div>
            ) : (
              <div className="space-y-2">
                {rankingOrdenado.map(([nombre, pts], index) => {
                  const infoVidas = vidasAula[nombre] || { vidas: 3, eliminado: false };
                  return (
                    <div key={nombre} className="p-3 bg-slate-800/80 border border-slate-700/80 rounded-xl flex items-center justify-between shadow-sm text-xs">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-amber-400 w-6">{index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}º`}</span>
                        <div>
                          <span className="font-bold text-white">{nombre}</span>
                          <div className="text-[10px] text-slate-400">
                            {infoVidas.eliminado ? '⚠️ Eliminado (Sin vidas)' : `Oportunidades: ${infoVidas.vidas} / 3`}
                          </div>
                        </div>
                      </div>
                      <span className="text-base font-bold text-amber-400">{pts} <span className="text-[10px] text-slate-400 font-normal">pts</span></span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col text-sm">
      <header className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex justify-between items-center">
        <div>
          <h1 className="text-sm font-bold tracking-wide text-white uppercase">
            PRL <span className="text-blue-500">Challenge</span>
          </h1>
          <p className="text-[11px] text-slate-400">{txt.equipo}: <span className="text-emerald-400 font-bold">{equipo}</span></p>
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <div className="bg-slate-800 border border-slate-700 text-amber-400 px-2.5 py-1 rounded-lg font-bold flex items-center gap-1.5 text-xs">
            <span>🏆</span><span>{score} pts</span>
          </div>
        </div>
      </header>

      <div className="bg-slate-900 border-b border-slate-800 flex justify-center gap-2 py-1.5 px-3">
        <button onClick={() => setTabAlumno('juego')} className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${tabAlumno === 'juego' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}>
          {txt.preguntasTab}
        </button>
        <button onClick={() => setTabAlumno('ranking')} className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${tabAlumno === 'ranking' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}>
          {txt.rankingTab} ({rankingOrdenado.length})
        </button>
      </div>

      <main className="flex-1 p-4">
        <div className={tabAlumno === 'juego' ? 'block' : 'hidden'}>
          {!unidadeSeleccionada ? (
            <div className="max-w-md mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-4 shadow-xl my-8">
              <h2 className="text-base font-bold text-white uppercase tracking-wider">Agardando á configuración do profesor...</h2>
              <p className="text-xs text-slate-400">O profesor está a configurar a sesión para esta sala ({codigoSala}). O xogo comezará en breve.</p>
              <div className="animate-pulse text-blue-400 text-xs font-bold">Conectado á Sala • Sincronizando...</div>
            </div>
          ) : (
            <GameQuiz
              unidade={unidadeSeleccionada}
              lang={lang}
              equipo={equipo}
              codigoSala={codigoSala}
              modoJuego={configSesion.modoJuego || 'clasico'}
              tiempoPersonalizado={configSesion.tiempoPregunta || 30}
              onAddPoints={addPoints}
              onReportScore={reportScore}
              onVolver={handleVolverAlMenu}
            />
          )}
        </div>

        {tabAlumno === 'ranking' && (
          <div className="max-w-md mx-auto bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-xl">
            <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3 text-center">
              {txt.clasificacionClase}
            </h2>
            {rankingOrdenado.length === 0 ? (
              <p className="text-center text-slate-500 text-xs py-6">{txt.esperandoRespuestas}</p>
            ) : (
              <div className="space-y-2">
                {rankingOrdenado.map(([nombre, pts], index) => {
                  const esMiEquipo = nombre === equipo.trim().replace(/[.#$\[\]]/g, "_");
                  const infoVidas = vidasAula[nombre] || { vidas: 3, eliminado: false };
                  return (
                    <div key={nombre} className={`p-2.5 rounded-xl flex items-center justify-between border text-xs ${esMiEquipo ? 'bg-blue-600/20 border-blue-500 text-white font-bold' : 'bg-slate-800 border-slate-700 text-slate-300'}`}>
                      <div className="flex items-center gap-2.5">
                        <span className="font-bold w-5 text-amber-400">{index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}º`}</span>
                        <div>
                          <span>{nombre} {esMiEquipo && txt.tuEres}</span>
                          <div className="text-[10px] text-slate-400">
                            {infoVidas.eliminado ? '⚠️ Eliminado' : `Oportunidades: ${infoVidas.vidas}/3`}
                          </div>
                        </div>
                      </div>
                      <span className="font-bold text-amber-400">{pts} pts</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}