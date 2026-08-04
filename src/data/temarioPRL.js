// src/data/temarioPRL.js

export const barajarArray = (array) => {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
};

export const TIEMPO_POR_DEFECTO_SEGUNDOS = 30;

export const TEXTOS_UI = {
  gl: {
    titulo: "PRL Challenge",
    subtitulo: "Capacitación Nivel Básico de Prevención de Riscos Laborais",
    nombreEquipo: "Nome do Alumno ou Equipo",
    codigoSalaOpcional: "Código de Aula (Opcional)",
    entrarJugar: "Acceder ao Xogo",
    abrirProyector: "Abrir Modo Proxector Aula",
    equipo: "Participante",
    puntuacion: "Puntuación",
    pantallaAula: "PRL Arcade • Pantalla Aula",
    instruccionesQR: "Escanea o código QR dende o móbil para unirte á sesión",
    codigoSala: "Código de Sala",
    accesoQR: "Acceso Rápido",
    apuntaCamara: "Apunta coa cámara do móbil para acceder directamente",
    clasificacionClase: "Clasificación da Sesión",
    esperandoRespuestas: "Agardando respostas dos participantes...",
    eligeUnidad: "Selecciona a Unidade Didáctica ou Test Xeral",
    seleccionaTemaDesc: "Escolle un tema específico ou realiza o exame xeral",
    testGeneralTitulo: "EXAME XERAL (Preguntas Aleatorias)",
    testGeneralDesc: "Preguntas do temario seleccionado polo profesor.",
    preguntasDisponibles: "preguntas dispoñibles",
    cambiarTema: "Cambiar de Tema",
    pregunta: "Pregunta",
    de: "de",
    tiempoGlobal: "Tempo Global Exame:",
    seAgototiempo: "Tempo esgotado. Non se suman puntos nesta pregunta.",
    seAgototiempoGlobal: "Remataron os 10 minutos do Exame Xeral.",
    correctoBonus: "CORRECTO. Puntuación sumada:",
    puntosBase: "pts base",
    bonusTiempo: "bonus tempo",
    incorrectoRespuesta: "INCORRECTO. A resposta válida era:",
    unidadCompletada: "Unidade completada con éxito.",
    siguientePregunta: "Seguinte Pregunta",
    volverMenu: "Finalizar e Volver ao Menú",
    sala: "Sala",
    preguntasTab: "Preguntas",
    rankingTab: "Clasificación",
    tuEres: "(Ti)",
    justificacionDidactica: "Xustificación Normativa e Técnica:",
    verResultados: "Ver Resultados Finais",
    examenFinalizado: "Exame Xeral Rematado",
    unidadFinalizada: "Unidade Didáctica Rematada",
    aciertos: "Aciertos",
    aciertoPorcentaje: "Taxa de Acierto %",
    repetirTest: "Repetir Proba",
    menuPrincipal: "Menú Principal",
    ocultarDesglose: "Ocultar desglose de respostas",
    revisarHistorial: "Revisar historial e xustificacións",
    tuRespuesta: "A túa resposta:",
    respuestaCorrectaLabel: "Resposta correcta:",
    tiempoAgotado: "Tempo esgotado",
    abandonarExamen: "¿Abandonar a proba?",
    avisoAbandono: "Se saes agora perderás o progreso e a puntuación acumulada.",
    continuarJugando: "Continuar proba",
    siSalir: "Si, saír",
    aprobadoMsg: "Proba superada satisfactoriamente.",
    suspensoMsg: "Precisa repasar os conceptos fundamentais do temario.",
    seleccionaModoJuego: "Selecciona a Modalidade de Proba",
    modoClasicoTitulo: "Modo Puntuación Clásica",
    modoClasicoDesc: "Acumulación de puntos e bonus por rapidez sen límite de erros.",
    modoJuicioTitulo: "Modo Eliminatoria (3 Vidas)",
    modoJuicioDesc: "Superación con 3 oportunidades máximas. Cada erro ou tempo límite resta unha vida.",
    gestionTemarioProfesor: "Configuración da Sesión do Profesor",
    guardarConfiguracion: "Gardar Configuración na Sala",
    todasUnidadesSeleccionadas: "Todas as unidades seleccionadas",
    numeroPreguntas: "Número de Preguntas:",
    tiempoPregunta: "Tempo por Pregunta (segundos):"
  },
  es: {
    titulo: "PRL Challenge",
    subtitulo: "Capacitación Nivel Básico de Prevención de Riesgos Laborales",
    nombreEquipo: "Nombre del Alumno o Equipo",
    codigoSalaOpcional: "Código de Aula (Opcional)",
    entrarJugar: "Acceder al Juego",
    abrirProyector: "Abrir Modo Proyector Aula",
    equipo: "Participante",
    puntuacion: "Puntuación",
    pantallaAula: "PRL Arcade • Pantalla Aula",
    instruccionesQR: "Escanee el código QR desde el móvil para unirse a la sesión",
    codigoSala: "Código de Sala",
    accesoQR: "Acceso Rápido",
    apuntaCamara: "Apunte con la cámara del móvil para acceder directamente",
    clasificacionClase: "Clasificación de la Sesión",
    esperandoRespuestas: "Esperando respuestas de los participantes...",
    eligeUnidad: "Seleccione la Unidad Didáctica o Test General",
    seleccionaTemaDesc: "Elija un tema específico o realice el examen general",
    testGeneralTitulo: "EXAMEN GENERAL (Preguntas Aleatorias)",
    testGeneralDesc: "Preguntas del temario seleccionado por el profesor.",
    preguntasDisponibles: "preguntas disponibles",
    cambiarTema: "Cambiar de Tema",
    pregunta: "Pregunta",
    de: "de",
    tiempoGlobal: "Tiempo Global Examen:",
    seAgototiempo: "Tiempo agotado. No se suman puntos en esta pregunta.",
    seAgototiempoGlobal: "Han finalizado los 10 minutos del Examen General.",
    correctoBonus: "CORRECTO. Puntuación sumada:",
    puntosBase: "pts base",
    bonusTiempo: "bonus tiempo",
    incorrectoRespuesta: "INCORRECTO. La respuesta válida era:",
    unidadCompletada: "Unidad completada con éxito.",
    siguientePregunta: "Siguiente Pregunta",
    volverMenu: "Finalizar y Volver al Menú",
    sala: "Sala",
    preguntasTab: "Preguntas",
    rankingTab: "Clasificación",
    tuEres: "(Tú)",
    justificacionDidactica: "Justificación Normativa y Técnica:",
    verResultados: "Ver Resultados Finales",
    examenFinalizado: "Examen General Finalizado",
    unidadFinalizada: "Unidad Didáctica Completada",
    aciertos: "Aciertos",
    aciertoPorcentaje: "Tasa de Acierto %",
    repetirTest: "Repetir Prueba",
    menuPrincipal: "Menú Principal",
    ocultarDesglose: "Ocultar desglose de respuestas",
    revisarHistorial: "Revisar historial y justificaciones",
    tuRespuesta: "Tu respuesta:",
    respuestaCorrectaLabel: "Respuesta correcta:",
    tiempoAgotado: "Tiempo agotado",
    abandonarExamen: "¿Abandonar la prueba?",
    avisoAbandono: "Si sale ahora perderá el progreso y la puntuación acumulada.",
    continuarJugando: "Continuar prueba",
    siSalir: "Sí, salir",
    aprobadoMsg: "Prueba superada satisfactoriamente.",
    suspensoMsg: "Precisa repasar los conceptos fundamentales del temario.",
    seleccionaModoJuego: "Seleccione la Modalidad de Prueba",
    modoClasicoTitulo: "Modo Puntuación Clásica",
    modoClasicoDesc: "Acumulación de puntos y bonificación por rapidez sin límite de errores.",
    modoJuicioTitulo: "Modo Eliminatoria (3 Vidas)",
    modoJuicioDesc: "Superación con 3 oportunidades máximas. Cada error o tiempo límite resta una vida.",
    gestionTemarioProfesor: "Configuración de la Sesión del Profesor",
    guardarConfiguracion: "Guardar Configuración en Sala",
    todasUnidadesSeleccionadas: "Todas las unidades seleccionadas",
    numeroPreguntas: "Número de Preguntas:",
    tiempoPregunta: "Tiempo por Pregunta (segundos):"
  }
};

export const generarTestGeneral50 = (unidadesFiltradasIds = null, cantidadTotal = 50) => {
  let todasLasPreguntas = [];
  TEMARIO_PRL.forEach((mod) => {
    mod.unidades.forEach((ud) => {
      if (!unidadesFiltradasIds || unidadesFiltradasIds.length === 0 || unidadesFiltradasIds.includes(ud.id)) {
        todasLasPreguntas = [...todasLasPreguntas, ...ud.preguntas];
      }
    });
  });
  const barajadas = barajarArray(todasLasPreguntas);
  return barajadas.slice(0, cantidadTotal);
};

export const TEMARIO_PRL = [
  {
    moduloId: 1,
    tituloModulo: {
      gl: "Módulo 1: Conceptos Básicos sobre Seguridade e Saúde",
      es: "Módulo 1: Conceptos Básicos sobre Seguridad y Salud"
    },
    unidades: [
      {
        id: "m1_ud1",
        titulo: {
          gl: "UD 1: Introdución á Prevención de Riscos Laborais",
          es: "UD 1: Introducción a la Prevención de Riesgos Laborales"
        },
        preguntas: [
          {
            id: 101,
            pregunta: { gl: "Como define a Organización Mundial da Saúde (OMS) o concepto de 'Saúde'?", es: "¿Cómo define la Organización Mundial de la Salud (OMS) el concepto de 'Salud'?" },
            opciones: {
              gl: ["A simple ausencia de dano ou enfermidade corporal", "O estado de benestar físico, mental e social completo", "A capacidade de traballar sen sufrir baixas médicas", "O equilibrio biolóxico fronte a contaminantes químicos"],
              es: ["La simple ausencia de daño o enfermedad corporal", "El estado de bienestar físico, mental y social completo", "La capacidad de trabajar sin sufrir bajas médicas", "El equilibrio biológico frente a contaminantes químicos"]
            },
            respuestaCorrecta: 1,
            explicacion: {
              gl: "A OMS define a saúde non só como a ausencia de enfermidades, senón como un estado de completo benestar físico, mental e social.",
              es: "La OMS define la salud no solo como la ausencia de enfermedades, sino como un estado de completo bienestar físico, mental y social."
            },
            tiempo: 30, puntos: 100
          },
          {
            id: 102,
            pregunta: { gl: "Cal é o primeiro principio xeral da acción preventiva segundo o art. 15 da LPRL?", es: "¿Cuál es el primer principio general de la acción preventiva según el art. 15 de la LPRL?" },
            opciones: {
              gl: ["Avaliar os riscos que non se poidan evitar", "Combater os riscos na orixe", "Evitar os riscos", "Antepoñer a protección colectiva á individual"],
              es: ["Evaluar los riesgos que no se puedan evitar", "Combatir los riesgos en el origen", "Evitar los riesgos", "Anteponer la protección colectiva a la individual"]
            },
            respuestaCorrecta: 2,
            explicacion: {
              gl: "O artigo 15 da LPRL establece como primeiro principio fundamental 'Evitar os riscos'. Se non se poden evitar, débense avaliar.",
              es: "El artículo 15 de la LPRL establece como primer principio fundamental 'Evitar los riesgos'. Si no se pueden evitar, deben evaluarse."
            },
            tiempo: 30, puntos: 100
          },
          {
            id: 103,
            pregunta: { gl: "Desde o punto de vista técnico-preventivo, que é un accidente de traballo?", es: "Desde el punto de vista técnico-preventivo, ¿qué es un accidente de trabajo?" },
            opciones: {
              gl: ["Toda lesión corporal sufrida con ocasión ou a consecuencia do traballo", "Un suceso anormal, brusco e inesperado que interrompe o traballo e pode causar lesións", "Un deterioro lento e paulatino da saúde por exposición crónica", "Calquera enfermidade contraída no centro de traballo"],
              es: ["Toda lesión corporal sufrida con ocasión o a consecuencia del trabajo", "Un suceso anormal, brusco e inesperado que interrumpe el trabajo y puede causar lesiones", "Un deterioro lento de la salud por exposición crónica", "Cualquier enfermedad contraída en el centro de trabajo"]
            },
            respuestaCorrecta: 1,
            explicacion: {
              gl: "Tecnicamente é un suceso imprevisto que interrompe o proceso normal de traballo. A definición legal exixe ademais lesión corporal.",
              es: "Técnicamente es un suceso imprevisto que interrumpe el proceso normal de trabajo. La definición legal exige además lesión corporal."
            },
            tiempo: 30, puntos: 100
          },
          {
            id: 104,
            pregunta: { gl: "Que son os accidentes chamados 'in itinere'?", es: "¿Qué son los accidentes llamados 'in itinere'?" },
            opciones: {
              gl: ["Os ocorridos ao desprazarse entre centros de traballo da mesma empresa", "Os producidos no traxecto habitual entre o domicilio e o centro de traballo", "Os sufridos durante as pausas de descanso dentro da xornada", "Os accidentes graves producidos por maquinaria itinerante"],
              es: ["Los ocurridos al desplazarse entre centros de trabajo de la misma empresa", "Los producidos en el trayecto habitual entre el domicilio y el centro de trabajo", "Los sufridos durante las pausas de descanso en la jornada", "Los accidentes graves producidos por maquinaria itinerante"]
            },
            respuestaCorrecta: 1,
            explicacion: {
              gl: "Son os accidentes que sufre o traballador ao ir ou volver do lugar de traballo pola ruta habitual e sen interrupcións.",
              es: "Son los accidentes que sufre el trabajador al ir o volver del lugar de trabajo por la ruta habitual y sin interrupciones."
            },
            tiempo: 30, puntos: 100
          },
          {
            id: 105,
            pregunta: { gl: "Que especialidade preventiva busca a adaptación entre o traballo e a persoa?", es: "¿Qué especialidad preventiva busca la adecuación entre el trabajo y la persona?" },
            opciones: {
              gl: ["Hixiene Industrial", "Seguridade no Traballo", "Ergonomía", "Psicoloxía Aplicada"],
              es: ["Higiene Industrial", "Seguridad en el Trabajo", "Ergonomía", "Psicología Aplicada"]
            },
            respuestaCorrecta: 2,
            explicacion: {
              gl: "A Ergonomía adapta o posto, as ferramentas e o contorno de traballo ás características físicas e psicolóxicas da persoa.",
              es: "La Ergonomía adapta el puesto, las herramientas y el entorno de trabajo a las características físicas y psicológicas de la persona."
            },
            tiempo: 30, puntos: 100
          },
          {
            id: 106,
            pregunta: { gl: "Como se consideran a efectos legais as enfermidades derivadas do traballo non incluídas no cadro oficial?", es: "¿Cómo se consideran a efectos legales las enfermedades derivadas del trabajo no incluidas en el cuadro oficial?" },
            opciones: {
              gl: ["Patoloxías comúns agudizadas", "Accidentes de traballo", "Enfermidades de orixe incerta", "Novedades biolóxicas"],
              es: ["Patologías comunes agudizadas", "Accidentes de trabajo", "Enfermedades de origen incierto", "Novedades biológicas"]
            },
            respuestaCorrecta: 1,
            explicacion: {
              gl: "A lexislación española equipara a accidente de traballo aquelas enfermidades que, non sendo consideradas profesionais, se demostren contraídas pola labor.",
              es: "La legislación española equipara a accidente de trabajo aquellas enfermedades que, no siendo consideradas profesionales, se demuestren contraídas por la labor."
            },
            tiempo: 30, puntos: 100
          },
          {
            id: 107,
            pregunta: { gl: "Que é un 'incidente' ou accidente en baleiro?", es: "¿Qué es un 'incidente' o accidente en vacío?" },
            opciones: {
              gl: ["Un accidente grave que non produce baixa", "Un suceso imprevisto que non causa lesións pero si danos materiais ou perda de tempo", "Un accidente fóra da empresa", "Un erro administrativo"],
              es: ["Un accidente grave que no produce baja", "Un suceso imprevisto que no causa lesiones pero sí daños materiales o pérdida de tiempo", "Un accidente fuera de la empresa", "Un error administrativo"]
            },
            respuestaCorrecta: 1,
            explicacion: {
              gl: "O incidente é unha alerta preventiva moi importante porque evidencia fallos no sistema sen chegar a producir danos persoais.",
              es: "El incidente es una alerta preventiva muy importante porque evidencia fallos en el sistema sin llegar a producir daños personales."
            },
            tiempo: 30, puntos: 100
          },
          {
            id: 108,
            pregunta: { gl: "Que disciplina preventiva encárgase de estudar a contorna ambiental de traballo (ruído, po, substancias químicas)?", es: "¿Qué disciplina preventiva se encarga de estudiar el entorno ambiental de trabajo (ruido, polvo, sustancias químicas)?" },
            opciones: {
              gl: ["Seguridade no Traballo", "Hixiene Industrial", "Ergonomía", "Psicosocioloxía Aplicada"],
              es: ["Seguridad en el Trabajo", "Higiene Industrial", "Ergonomía", "Psicosociología Aplicada"]
            },
            respuestaCorrecta: 1,
            explicacion: {
              gl: "A Hixiene Industrial estuda, avalía e controla os contaminantes físicos, químicos e biolóxicos presentes no posto de traballo.",
              es: "La Higiene Industrial estudia, evalúa y controla los contaminantes físicos, químicos y biológicos presentes en el puesto de trabajo."
            },
            tiempo: 30, puntos: 100
          },
          {
            id: 109,
            pregunta: { gl: "Segundo o art. 15 da LPRL, que é preferible ante un risco inevitable: a protección colectiva ou a individual?", es: "Según el art. 15 de la LPRL, ¿qué es preferible ante un riesgo inevitable: la protección colectiva o la individual?" },
            opciones: {
              gl: ["A protección individual sempre", "A protección colectiva debe antepoñerse á individual", "Son totalmente equivalentes", "Depende do criterio do traballador"],
              es: ["La protección individual siempre", "La protección colectiva debe anteponerse a la individual", "Son totalmente equivalentes", "Depende del criterio del trabajador"]
            },
            respuestaCorrecta: 1,
            explicacion: {
              gl: "A lei obriga a antepoñer a protección colectiva (como barandillas ou extractores) fronte á individual (EPIs).",
              es: "La ley obliga a anteponer la protección colectiva (como barandillas o extractores) frente a la individual (EPIs)."
            },
            tiempo: 30, puntos: 100
          },
          {
            id: 110,
            pregunta: { gl: "Que se entende por 'condición de traballo' segundo a LPRL?", es: "¿Qué se entiende por 'condición de trabajo' según la LPRL?" },
            opciones: {
              gl: ["Únicamente o salario mensual percibido", "Calquera característica do traballo que poida influir na rixidez ou seguridade", "Soamente o horario de entrada e saída", "O tipo de contrato mercantil"],
              es: ["Únicamente el salario mensual percibido", "Cualquier característica del trabajo que pueda influir en la seguridad y salud", "Solamente el horario de entrada y salida", "El tipo de contrato mercantil"]
            },
            respuestaCorrecta: 1,
            explicacion: {
              gl: "Inclúe locais, equipos, produtos químicos, organización e calquera factor que afecte ao benestar laboral.",
              es: "Incluye locales, equipos, productos químicos, organización y cualquier factor que afecte al bienestar laboral."
            },
            tiempo: 30, puntos: 100
          }
        ]
      },
      {
        id: "m1_ud2",
        titulo: {
          gl: "UD 2: Marco Normativo Básico en materia de PRL",
          es: "UD 2: Marco Normativo Básico en materia de PRL"
        },
        preguntas: [
          {
            id: 111,
            pregunta: { gl: "En que consiste a 'trasposición' dunha Directiva Europea?", es: "¿En qué consiste la 'trasposición' de una Directiva Europea?" },
            opciones: {
              gl: ["En traducila ao castelán sen cambios legais", "En adaptala e convertela nunha norma legal de obrigado cumprimento no país", "En anular os convenios colectivos rexeitados pola UE", "En enviar a lei española ao Consello Europeo para a súa aprobación"],
              es: ["En traducirla al castellano sin cambios legales", "En adaptarla y convertirla en norma legal de obligado cumplimiento en el país", "En anular los convenios colectivos rechazados por la UE", "En enviar la ley española al Consejo Europeo para su aprobación"]
            },
            respuestaCorrecta: 1,
            explicacion: {
              gl: "As directivas europeas fixan obxectivos. Cada Estado membro debe traspolas aprobando leis nacionais que garantan o seu cumprimento.",
              es: "Las directivas europeas fijan objetivos. Cada Estado miembro debe trasponerlas aprobando leyes nacionales que garanticen su cumplimiento."
            },
            tiempo: 30, puntos: 100
          },
          {
            id: 112,
            pregunta: { gl: "A partir de cantos traballadores é obrigatoria a constitución do Comité de Seguridade e Saúde?", es: "¿A partir de cuántos trabajadores es obligatoria la constitución del Comité de Seguridad y Salud?" },
            opciones: {
              gl: ["6 traballadores", "30 traballadores", "50 traballadores", "100 traballadores"],
              es: ["6 trabajadores", "30 trabajadores", "50 trabajadores", "100 trabajadores"]
            },
            respuestaCorrecta: 2,
            explicacion: {
              gl: "O Comité de Seguridade e Saúde constitúese obrigatoriamente en empresas ou centros con 50 ou máis traballadores (art. 38 LPRL).",
              es: "El Comité de Seguridad y Salud se constituye obligatoriamente en empresas o centros con 50 o más trabajadores (art. 38 LPRL)."
            },
            tiempo: 30, puntos: 100
          },
          {
            id: 113,
            pregunta: { gl: "Cantos Delegados de Prevención corresponden nunha empresa de entre 50 e 100 traballadores?", es: "¿Cuántos Delegados de Prevención corresponden en una empresa de entre 50 y 100 trabajadores?" },
            opciones: {
              gl: ["1 delegado", "2 delegados", "3 delegados", "4 delegados"],
              es: ["1 delegado", "2 delegados", "3 delegados", "4 delegados"]
            },
            respuestaCorrecta: 1,
            explicacion: {
              gl: "Segundo a escala do art. 35 da LPRL, de 50 a 100 traballadores correspóndenlles 2 Delegados de Prevención.",
              es: "Según la escala del art. 35 de la LPRL, de 50 a 100 trabajadores corresponden 2 Delegados de Prevención."
            },
            tiempo: 30, puntos: 100
          },
          {
            id: 114,
            pregunta: { gl: "Que indica o marcado 'CE' estampado sobre un producto ou equipo de traballo?", es: "¿Qué indica el marcado 'CE' estampado sobre un producto o equipo de trabajo?" },
            opciones: {
              gl: ["Que foi fabricado integramente en España", "Que ten unha garantía de calidade de 5 anos", "Que cumpre os requisitos esenciais de seguridade establecidos pola UE", "Que é un Equipo de Protección Individual de Categoría III"],
              es: ["Que ha sido fabricado íntegramente en España", "Que tiene una garantía de calidad de 5 años", "Que cumple los requisitos esenciales de seguridad establecidos por la UE", "Que es un Equipo de Protección Individual de Categoría III"]
            },
            respuestaCorrecta: 2,
            explicacion: {
              gl: "O marcado CE acredita que o fabricante cumpre cos estándares esenciais de seguridade e saúde esixidos pola Unión Europea.",
              es: "El marcado CE acredita que el fabricante cumple con los estándares esenciales de seguridad y salud exigidos por la Unión Europea."
            },
            tiempo: 30, puntos: 100
          },
          {
            id: 115,
            pregunta: { gl: "Cal é a lei fundamental que regula a prevención de riscos laborais en España?", es: "¿Cuál es la ley fundamental que regula la prevención de riesgos laborales en España?" },
            opciones: {
              gl: ["O Estatuto dos Traballadores", "A Lei 31/1995 de Prevención de Riscos Laborais", "O Real Decreto 39/1997", "A Lei Xeral da Seguridade Social"],
              es: ["El Estatuto de los Trabajadores", "La Ley 31/1995 de Prevención de Riesgos Laborales", "El Real Decreto 39/1997", "La Ley General de la Seguridad Social"]
            },
            respuestaCorrecta: 1,
            explicacion: {
              gl: "A Lei 31/1995 de Prevención de Riscos Laborais (LPRL) constitúe a norma básica e central en materia preventiva no Estado español.",
              es: "La Ley 31/1995 de Prevención de Riesgos Laborales (LPRL) constituye la norma básica y central en materia preventiva en el Estado español."
            },
            tiempo: 30, puntos: 100
          },
          {
            id: 116,
            pregunta: { gl: "Que dereito ten o traballador ante un risco grave e inminente para a súa vida ou saúde?", es: "¿Qué derecho tiene el trabajador ante un riesgo grave e inminente para su vida o salud?" },
            opciones: {
              gl: ["Interromper a súa actividade e abandonar o posto sen sufrir prexuízo", "Exixir un plus económico inmediato", "Modificar unilateralmente a maquinaria", "Acatar a orde do empresario obrigatoriamente"],
              es: ["Interrumpir su actividad y abandonar el puesto sin sufrir perjuicio", "Exigir un plus económico inmediato", "Modificar unilateralmente la maquinaria", "Acatar la orden del empresario obligatoriamente"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O art. 21 da LPRL recoñece o dereito de interrupción de actividade e abandono do posto ante perigo inminente.", es: "El art. 21 de la LPRL reconoce el derecho de interrupción de actividad y abandono del puesto ante peligro inminente." }, tiempo: 30, puntos: 100
          },
          {
            id: 117,
            pregunta: { gl: "Que son os Reales Decretos de desenvolvemento da LPRL?", es: "¿Qué son los Reales Decretos de desarrollo de la LPRL?" },
            opciones: {
              gl: ["Normas técnicas específicas que complementan a Lei marco en áreas concretas", "Simples recomendacións sen valor xurídico", "Convenios colectivos sectoriais", "Directivas europeas sen aplicar"],
              es: ["Normas técnicas específicas que complementan la Ley marco en áreas concretas", "Simples recomendaciones sin valor jurídico", "Convenios colectivos sectoriales", "Directivas europeas sin aplicar"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Os Reales Decretos detallan aspectos técnicos en seguridade en máquinas, lugares de traballo, EPIs, etc.", es: "Os Reales Decretos detallan aspectos técnicos en seguridad en máquinas, lugares de traballo, EPIs, etc." }, tiempo: 30, puntos: 100
          },
          {
            id: 118,
            pregunta: { gl: "A quen representan principalmente os Delegados de Prevención?", es: "¿A quién representan principalmente los Delegados de Prevención?" },
            opciones: {
              gl: ["Á dirección da empresa", "Aos traballadores en materia de prevención de riscos", "Á Inspección de Traballo", "Ás Mutuas colaboradoras"],
              es: ["A la dirección de la empresa", "A los trabajadores en materia de prevención de riesgos", "A la Inspección de Trabajo", "A las Mutuas colaboradoras"]
            },
            respuestaCorrecta: 1,
            explicacion: { gl: "Son os representantes do persoal con funcións específicas en materia de protección da seguridade e saúde.", es: "Son os representantes do persoal con funcións específicas en materia de protección da seguridade e saúde." }, tiempo: 30, puntos: 100
          },
          {
            id: 119,
            pregunta: { gl: "O principio de responsabilidade empresarial en PRL implica que:", es: "El principio de responsabilidad empresarial en PRL implica que:" },
            opciones: {
              gl: ["O empresario garante a seguridade e saúde dos traballadores ao seu servizo", "O empresario só responde se hai denuncia previa", "A responsabilidade é exclusivamente do traballador", "O Estado paga todas as sancións"],
              es: ["O empresario garante a seguridade e saúde dos traballadores ao seu servizo", "O empresario só responde se hai denuncia previa", "A responsabilidade é exclusivamente do traballador", "O Estado paga todas as sancións"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O empresario ten o deber de protección eficaz frente aos riscos laborais na empresa (art. 14 LPRL).", es: "O empresario ten o deber de protección eficaz frente aos riscos laborais na empresa (art. 14 LPRL)." }, tiempo: 30, puntos: 100
          },
          {
            id: 120,
            pregunta: { gl: "Cal é o carácter da formación que o empresario debe impartir aos traballadores en materia de PRL?", es: "¿Cuál es el carácter de la formación que el empresario debe impartir a los trabajadores en materia de PRL?" },
            opciones: {
              gl: ["Teórica e práctica, suficiencia e gratuíta dentro da xornada", "Facultativa e custeada polo traballador", "Soamente online e fóra de horas", "Opcional para menores de 30 anos"],
              es: ["Teórica e práctica, suficiencia e gratuíta dentro da xornada", "Facultativa e custeada polo traballador", "Soamente online e fóra de horas", "Opcional para menores de 30 anos"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "A formación debe ser teórica e práctica, adaptada ao posto, impartida durante a xornada e sen custo para o operario.", es: "A formación debe ser teórica e práctica, adaptada ao posto, impartida durante a xornada e sen custo para o operario." }, tiempo: 30, puntos: 100
          }
        ]
      }
    ]
  },
  {
    moduloId: 2,
    tituloModulo: {
      gl: "Módulo 2: Riscos Xerais e a súa Prevención",
      es: "Módulo 2: Riesgos Generales y su Prevención"
    },
    unidades: [
      {
        id: "m2_ud1",
        titulo: {
          gl: "UD 1: Os Riscos ligados ás Condicións de Seguridade",
          es: "UD 1: Los Riesgos ligados a las Condiciones de Seguridad"
        },
        preguntas: [
          {
            id: 201,
            pregunta: { gl: "Un contacto eléctrico producido coa masa dunha máquina posta accidentalmente en tensión é:", es: "Un contacto eléctrico producido con la masa de una máquina puesta accidentalmente en tensión es:" },
            opciones: {
              gl: ["Contacto directo", "Contacto indirecto", "Contacto de alta tensión", "Derivación en orixe"],
              es: ["Contacto directo", "Contacto indirecto", "Contacto de alta tensión", "Derivación en orixe"]
            },
            respuestaCorrecta: 1,
            explicacion: { gl: "O contacto indirecto acontece ao tocar elementos que non deberían estar en tensión pero que o están por un fallo.", es: "O contacto indirecto acontece ao tocar elementos que non deberían estar en tensión pero que o están por un fallo." }, tiempo: 30, puntos: 100
          },
          {
            id: 202,
            pregunta: { gl: "Cada canto tempo debe realizarse o retimbrado dun extintor portátil?", es: "¿Cada cuánto tiempo debe realizarse el retimbrado de un extintor portátil?" },
            opciones: {
              gl: ["Cada ano", "Cada 3 anos", "Cada 5 anos", "Cada 10 anos"],
              es: ["Cada ano", "Cada 3 anos", "Cada 5 anos", "Cada 10 anos"]
            },
            respuestaCorrecta: 2,
            explicacion: { gl: "A proba de presión ou retimbrado de extintores realízase cada 5 anos segundo o Regulamento de Protección Contra Incendios.", es: "A proba de presión ou retimbrado de extintores realízase cada 5 anos segundo o Regulamento de Protección Contra Incendios." }, tiempo: 30, puntos: 100
          },
          {
            id: 203,
            pregunta: { gl: "Cal é a primeira Regla de Ouro para traballos en instalacións eléctricas sen tensión?", es: "¿Cuál es la primera Regla de Oro para trabajos en instalaciones eléctricas sin tensión?" },
            opciones: {
              gl: ["Verificar a ausencia de tensión", "Facer o corte visible de todas as fontes de tensión", "Poñer a terra e en curtocircuíto", "Delimitar e sinalizar a zona de traballo"],
              es: ["Verificar a ausencia de tensión", "Facer o corte visible de todas as fontes de tensión", "Poñer a terra e en curtocircuíto", "Delimitar e sinalizar a zona de traballo"]
            },
            respuestaCorrecta: 1,
            explicacion: { gl: "A 1ª regla é o corte efectivo (ou corte visible) das fontes de alimentación de enerxía eléctrica.", es: "A 1ª regla é o corte efectivo (ou corte visible) das fontes de alimentación de enerxía eléctrica." }, tiempo: 30, puntos: 100
          },
          {
            id: 204,
            pregunta: { gl: "Que dispositivo eléctrico protexe fundamentalmente contra contactos indirectos cortando a corrente?", es: "¿Qué dispositivo eléctrico protege fundamentalmente contra contactos indirectos cortando la corriente?" },
            opciones: {
              gl: ["O fusible calibrado", "O interruptor diferencial", "O magnetotérmico de alta potencia", "O cable de cobre ríxido"],
              es: ["O fusible calibrado", "O interruptor diferencial", "O magnetotérmico de alta potencia", "O cable de cobre ríxido"]
            },
            respuestaCorrecta: 1,
            explicacion: { gl: "O interruptor diferencial detecta fugas de corrente cara a terra e desconecta a instalación ao instante.", es: "O interruptor diferencial detecta fugas de corrente cara a terra e desconecta a instalación ao instante." }, tiempo: 30, puntos: 100
          },
          {
            id: 205,
            pregunta: { gl: "En sinalización de seguridade, unha forma xeométrica REDONDA cun bordo vermello e barra diagonal indica:", es: "En señalización de seguridad, una forma geométrica REDONDA con un borde rojo y barra diagonal indica:" },
            opciones: {
              gl: ["Obligación", "Prohibición", "Información de salvamento", "Advertencia de perigo"],
              es: ["Obligación", "Prohibición", "Información de salvamento", "Advertencia de perigo"]
            },
            respuestaCorrecta: 1,
            explicacion: { gl: "Os sinais de prohibición caracteríza-se por ser circulares cun pictograma negro sobre fondo branco, bordo vermello e banda transversal.", es: "Os sinais de prohibición caracteríza-se por ser circulares cun pictograma negro sobre fondo branco, bordo vermello e banda transversal." }, tiempo: 30, puntos: 100
          },
          {
            id: 206,
            pregunta: { gl: "Un incendio clasificado como Clase C ten como combustible principal:", es: "Un incendio clasificado como Clase C tiene como combustible principal:" },
            opciones: {
              gl: ["Sólidos que producen brasas", "Líquidos inflamables", "Gases inflamables (propano, butano, metano)", "Metais combustibles"],
              es: ["Sólidos que producen brasas", "Líquidos inflamables", "Gases inflamables (propano, butano, metano)", "Metais combustibles"]
            },
            respuestaCorrecta: 2,
            explicacion: { gl: "A Clase C corresponde a incendios de gases inflamables como o gas natural, butano ou propano.", es: "A Clase C corresponde a incendios de gases inflamables como o gas natural, butano ou propano." }, tiempo: 30, puntos: 100
          },
          {
            id: 207,
            pregunta: { gl: "Que é un espazo confinado no ámbito laboral?", es: "¿Qué es un espacio confinado en el ámbito laboral?" },
            opciones: {
              gl: ["Calquera despacho con aire acondicionado", "Un recinto con aberturas limitadas de entrada e ventilación natural deficiente onde poden acumularse gases", "Un almacén exterior aberto", "Unha oficina sen ventás"],
              es: ["Calquera despacho con aire acondicionado", "Un recinto con aberturas limitadas de entrada e ventilación natural deficiente onde poden acumularse gases", "Un almacén exterior aberto", "Unha oficina sen ventás"]
            },
            respuestaCorrecta: 1,
            explicacion: { gl: "Os espazos confinados (tanques, arquetas, silos) presentan grandes riscos de intoxicación, asfixia ou explosión.", es: "Os espazos confinados (tanques, arquetas, silos) presentan grandes riscos de intoxicación, asfixia ou explosión." }, tiempo: 30, puntos: 100
          },
          {
            id: 208,
            pregunta: { gl: "Como se denominan os traballadores realizados a unha altura superior a 2 metros con respecto ao nivel inferior?", es: "¿Cómo se denominan los trabajos realizados a una altura superior a 2 metros con respecto al nivel inferior?" },
            opciones: {
              gl: ["Traballos en altura", "Traballos verticais sinxelos", "Manexo de cargas elevadas", "Operacións en andamios móbiles"],
              es: ["Traballos en altura", "Traballos verticais sinxelos", "Manexo de cargas elevadas", "Operacións en andamios móbiles"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Calquera labor a máis de 2 metros de altura considérase traballo en altura con risco de caída libre.", es: "Calquera labor a máis de 2 metros de altura considérase traballo en altura con risco de caída libre." }, tiempo: 30, puntos: 100
          },
          {
            id: 209,
            pregunta: { gl: "A consignación dunha máquina ou elemento de enerxía comprende:", es: "La consignación de una máquina o elemento de energía comprende:" },
            opciones: {
              gl: ["Cortar, bloquear, verificar ausencia de tensión e sinalizar", "Limpar con aire a presión", "Poñer en marcha en baleiro", "Avisar por teléfono"],
              es: ["Cortar, bloquear, verificar ausencia de tensión e sinalizar", "Limpar con aire a presión", "Poñer en marcha en baleiro", "Avisar por teléfono"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "A consignación asegura que a máquina non poida ser reativada accidentalmente mentres se opera nela.", es: "A consignación asegura que a máquina non poida ser reativada accidentalmente mentres se opera nela." }, tiempo: 30, puntos: 100
          },
          {
            id: 210,
            pregunta: { gl: "Cal é a causa principal das caídas de persoas ao mesmo nivel?", es: "¿Cuál es la causa principal de las caídas de personas al mismo nivel?" },
            opciones: {
              gl: ["Falta de orde, limpeza, chans esvaradíos ou obstáculos nos pasos", "Defectos estruturais nos teitos", "Fallo no sistema de elevación", "Falta de iluminación exterior en noites de verán"],
              es: ["Falta de orde, limpeza, chans esvaradíos ou obstáculos nos pasos", "Defectos estruturais nos teitos", "Fallo no sistema de elevación", "Falta de iluminación exterior en noites de verán"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "A desorde, os vertidos de líquidos e os cables soltos son os principais responsables de tropezóns e esvaróns.", es: "A desorde, os vertidos de líquidos e os cables soltos son os principais responsables de tropezóns e esvaróns." }, tiempo: 30, puntos: 100
          }
        ]
      },
      {
        id: "m2_ud2",
        titulo: {
          gl: "UD 2: Os Riscos ligados ao Medio Ambiente de Traballo",
          es: "UD 2: Los Riesgos ligados al Medio Ambiente de Trabajo"
        },
        preguntas: [
          {
            id: 211,
            pregunta: { gl: "Cal é a vía de entrada de contaminantes químicos máis importante e frecuente no ámbito laboral?", es: "¿Cuál es la vía de entrada de contaminantes químicos más importante y frecuente en el ámbito laboral?" },
            opciones: {
              gl: ["Vía dérmica", "Vía inhalatoria ou respiratoria", "Vía dixestiva", "Vía parenteral"],
              es: ["Vía dérmica", "Vía inhalatoria ou respiratoria", "Vía dixestiva", "Vía parenteral"]
            },
            respuestaCorrecta: 1,
            explicacion: { gl: "A inhalación de gases, vapores ou aerosols é a vía pola que penetran maioritariamente os tóxicos químicos nos pulmóns.", es: "A inhalación de gases, vapores ou aerosols é a vía pola que penetran maioritariamente os tóxicos químicos nos pulmóns." }, tiempo: 30, puntos: 100
          },
          {
            id: 212,
            pregunta: { gl: "A partir de que nivel de exposición diaria ao ruído (LAeq,d) é obrigatorio o uso de protectores auditivos?", es: "¿A partir de qué nivel de exposición diaria al ruido (LAeq,d) es obligatorio el uso de protectores auditivos?" },
            opciones: {
              gl: ["80 dBA", "85 dBA", "90 dBA", "95 dBA"],
              es: ["80 dBA", "85 dBA", "90 dBA", "95 dBA"]
            },
            respuestaCorrecta: 1,
            explicacion: { gl: "Os valores superiores que fan obrigatorio o uso de protectores auditivos sitúanse nos 85 dBA (RD 286/2006).", es: "Os valores superiores que fan obrigatorio o uso de protectores auditivos sitúanse nos 85 dBA (RD 286/2006)." }, tiempo: 30, puntos: 100
          },
          {
            id: 213,
            pregunta: { gl: "En que unidade se mide o nivel de iluminación dunha superficie de traballo?", es: "¿En qué unidad se mide el nivel de iluminación de una superficie de trabajo?" },
            opciones: {
              gl: ["Candela por metro", "Lux", "Lumen segundo", "Vatio fotométrico"],
              es: ["Candela por metro", "Lux", "Lumen segundo", "Vatio fotométrico"]
            },
            respuestaCorrecta: 1,
            explicacion: { gl: "O lux é a unidade de iluminancia que mide o fluxo luminoso recibido por unidade de superficie.", es: "O lux é a unidade de iluminancia que mide o fluxo luminoso recibido por unidade de superficie." }, tiempo: 30, puntos: 100
          },
          {
            id: 214,
            pregunta: { gl: "En cantos grupos se clasifican os axentes biolóxicos segundo o risco de infección?", es: "¿En cuántos grupos se clasifican los agentes biológicos según el riesgo de infección?" },
            opciones: {
              gl: ["En 2 grupos", "En 3 grupos", "En 4 grupos (Grupo 1 ao Grupo 4)", "En 5 grupos"],
              es: ["En 2 grupos", "En 3 grupos", "En 4 grupos (Grupo 1 ao Grupo 4)", "En 5 grupos"]
            },
            respuestaCorrecta: 2,
            explicacion: { gl: "O RD 664/1997 categoriza os axentes biolóxicos en 4 grupos crecentes segundo a súa patoxenicidade.", es: "O RD 664/1997 categoriza os axentes biolóxicos en 4 grupos crecentes segundo a súa patoxenicidade." }, tiempo: 30, puntos: 100
          },
          {
            id: 215,
            pregunta: { gl: "Que técnica de hixiene industrial se aplica directamente sobre o foco para evitar a dispersión de contaminants?", es: "¿Qué técnica de higiene industrial se aplica directamente sobre el foco para evitar la dispersión de contaminantes?" },
            opciones: {
              gl: ["Ventilación xeral por dilución", "Extracción localizada", "Rotación de persoal", "Uso obrigatorio de máscaras FFP2"],
              es: ["Ventilación xeral por dilución", "Extracción localizada", "Rotación de persoal", "Uso obrigatorio de máscaras FFP2"]
            },
            respuestaCorrecta: 1,
            explicacion: { gl: "A extracción localizada capta o contaminante químico no mesmo punto onde se xera.", es: "A extracción localizada capta o contaminante químico no mesmo punto onde se xera." }, tiempo: 30, puntos: 100
          },
          {
            id: 216,
            pregunta: { gl: "O chamado 'dedo branco' ou síndrome de Raynaud está causado por:", es: "El llamado 'dedo blanco' o síndrome de Raynaud está causado por:" },
            opciones: {
              gl: ["Exposición prolongada a vibracións man-brazo", "Contacto con produtos ácidos", "Baixas temperaturas en cámaras sen abrigo", "Inhalación de po de sílice"],
              es: ["Exposición prolongada a vibracións man-brazo", "Contacto con produtos ácidos", "Baixas temperaturas en cámaras sen abrigo", "Inhalación de po de sílice"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "As vibracións mecánicas transmitidas ao sistema man-brazo provocan trastornos vasculares e circulatorios periféricos.", es: "As vibracións mecánicas transmitidas ao sistema man-brazo provocan trastornos vasculares e circulatorios periféricos." }, tiempo: 30, puntos: 100
          },
          {
            id: 217,
            pregunta: { gl: "Que son as radiacións ionizantes?", es: "¿Qué son las radiaciones ionizantes?" },
            opciones: {
              gl: ["Ondas electromagnéticas con enerxía suficiente para ionizar átomos (como rayos X)", "A luz visible dunha bombilla LED", "O calor emitido por un radiador", "As microondas dun forno doméstico"],
              es: ["Ondas electromagnéticas con enerxía suficiente para ionizar átomos (como rayos X)", "A luz visible dunha bombilla LED", "O calor emitido por un radiador", "As microondas dun forno doméstico"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Teñen capacidade de arrancar electróns da materia e alterar o ADN celular, como raios X ou radiación gamma.", es: "Teñen capacidade de arrancar electróns da materia e alterar o ADN celular, como raios X ou radiación gamma." }, tiempo: 30, puntos: 100
          },
          {
            id: 218,
            pregunta: { gl: "O estrés térmico por calor excessivo pode derivar nunha situación crítica coñecida como:", es: "El estrés térmico por calor excesivo puede derivar en una situación crítica conocida como:" },
            opciones: {
              gl: ["Golpe de calor", "Hipotermia aguda", "Congelación periférica", "Edema pulmonar estival"],
              es: ["Golpe de calor", "Hipotermia aguda", "Congelación periférica", "Edema pulmonar estival"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O golpe de calor supón un fallo total do sistema de termorregulación corporal cunha alta taxa de mortalidade se non se trata.", es: "O golpe de calor supón un fallo total do sistema de termorregulación corporal cunha alta taxa de mortalidade se non se trata." }, tiempo: 30, puntos: 100
          },
          {
            id: 219,
            pregunta: { gl: "Como se avalía o ambiente térmico en locais de traballo calorosos?", es: "¿Cómo se evalúa el ambiente térmico en locales de trabajo calurosos?" },
            opciones: {
              gl: ["Mediante o índice Wet Bulb Globe Temperature (WBGT) ou índice de temperatura de globo e bulbo húmido", "Contando os ventiladores instalados", "Mide exclusivamente a humidade relativa", "Mediante sensores de luz ultravioleta"],
              es: ["Mediante o índice Wet Bulb Globe Temperature (WBGT) ou índice de temperatura de globo e bulbo húmido", "Contando os ventiladores instalados", "Mide exclusivamente a humidade relativa", "Mediante sensores de luz ultravioleta"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O índice WBGT combina temperatura do aire, humidade e radiación térmica para estimar a carga de calor.", es: "O índice WBGT combina temperatura do aire, humidade e radiación térmica para estimar a carga de calor." }, tiempo: 30, puntos: 100
          },
          {
            id: 220,
            pregunta: { gl: "O po en suspensión con partículas respirables moi finas pode provocar no pulmón unha enfermidade crónica chamada:", es: "El polvo en suspensión con partículas respirables muy finas puede provocar en el pulmón una enfermedad crónica llamada:" },
            opciones: {
              gl: ["Silicose ou neumoconiosis", "Dermatite de contacto", "Conjuntivite aguda", "Otose tinitus"],
              es: ["Silicose ou neumoconiosis", "Dermatite de contacto", "Conjuntivite aguda", "Otose tinitus"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "A inhalación continuada de po de sílice cristalina orixina a silicose, unha alteración pulmonar fibrótica irreversible.", es: "A inhalación continuada de po de sílice cristalina orixina a silicose, unha alteración pulmonar fibrótica irreversible." }, tiempo: 30, puntos: 100
          }
        ]
      },
      {
        id: "m2_ud3",
        titulo: {
          gl: "UD 3: A Carga de Traballo, a Fatiga e a Insatisfacción Laboral",
          es: "UD 3: La Carga de Trabajo, la Fatiga y la Insatisfacción Laboral"
        },
        preguntas: [
          {
            id: 221,
            pregunta: { gl: "Segundo a Guía Técnica do INSHT, cal é o peso máximo recomendado en condicións ideais para a manipulación manual de cargas?", es: "Según la Guía Técnica del INSHT, ¿cuál es el peso máximo recomendado en condiciones ideales para la manipulación manual de cargas?" },
            opciones: {
              gl: ["15 kg", "25 kg", "40 kg", "50 kg"],
              es: ["15 kg", "25 kg", "40 kg", "50 kg"]
            },
            respuestaCorrecta: 1,
            explicacion: { gl: "O peso xeral de referencia recomendado é de 25 kg, reduciéndose a 15 kg para mulleres, traballadores novos ou maiores.", es: "O peso xeral de referencia recomendado é de 25 kg, reduciéndose a 15 kg para mulleres, traballadores novos ou maiores." }, tiempo: 30, puntos: 100
          },
          {
            id: 222,
            pregunta: { gl: "Cando se considera que un traballo muscular é de tipo 'estático'?", es: "¿Cuándo se considera que un trabajo muscular es de tipo 'estático'?" },
            opciones: {
              gl: ["Cando hai movementos rítmicos continuados", "Cando se mantén un esforzo muscular sostido no tempo sen períodos de relaxación", "Cando se camiña longas distancias sen carga", "Cando se empregan ferramentas lixeiras"],
              es: ["Cando hai movementos rítmicos continuados", "Cando se mantén un esforzo muscular sostido no tempo sen períodos de relaxación", "Cando se camiña longas distancias sen carga", "Cando se empregan ferramentas lixeiras"]
            },
            respuestaCorrecta: 1,
            explicacion: { gl: "O traballo estático comprime os vasos sanguíneos, dificultando a achega de osíxeno e xerando fatiga muscular moi intensa.", es: "O traballo estático comprime os vasos sanguíneos, dificultando a achega de osíxeno e xerando fatiga muscular moi intensa." }, tiempo: 30, puntos: 100
          },
          {
            id: 223,
            pregunta: { gl: "Cal é a técnica correcta para levantar unha carga pesada do chan?", es: "¿Cuál es la técnica correcta para levantar una carga pesada del suelo?" },
            opciones: {
              gl: ["Dobrar o lombo mantendo as pernas ríxidas", "Facer un xiro brusco de cintura para gañar impulso", "Dobrar os xeonllos, manter o lombo recto e achegar a carga ao corpo", "Levantar cun único brazo lateralmente"],
              es: ["Dobrar o lombo mantendo as pernas ríxidas", "Facer un xiro brusco de cintura para gañar impulso", "Dobrar os xeonllos, manter o lombo recto e achegar a carga ao corpo", "Levantar cun único brazo lateralmente"]
            },
            respuestaCorrecta: 2,
            explicacion: { gl: "Flexionar as pernas protexe a columna vertebral, delegando o esforzo nos muslos e mantendo a carga pegada ao centro de gravidade.", es: "Flexionar as pernas protexe a columna vertebral, delegando o esforzo nos muslos e mantendo a carga pegada ao centro de gravidade." }, tiempo: 30, puntos: 100
          },
          {
            id: 224,
            pregunta: { gl: "A carga mental de traballo está condicionada principalmente por:", es: "La carga mental de trabajo está condicionada principalmente por:" },
            opciones: {
              gl: ["O peso das ferramentas manuais", "A cantidade de información que se procesa e o tempo dispoñible", "A temperatura ambiental do local", "O tipo de calzado de seguridade"],
              es: ["O peso das ferramentas manuais", "A cantidade de información que se procesa e o tempo dispoñible", "A temperatura ambiental do local", "O tipo de calzado de seguridade"]
            },
            respuestaCorrecta: 1,
            explicacion: { gl: "A esixencia cognitiva, a complexidade e a velocidade de resposta determinan a fatiga mental ou sobrecarga.", es: "A esixencia cognitiva, a complexidade e a velocidade de resposta determinan a fatiga mental ou sobrecarga." }, tiempo: 30, puntos: 100
          },
          {
            id: 225,
            pregunta: { gl: "O termo tecnolóxico 'Burnout' fai referencia a:", es: "El término tecnológico 'Burnout' hace referencia a:" },
            opciones: {
              gl: ["Unha queimadura química laboral", "A síndrome do traballador queimado ou esgotamento profesional crónico", "Unha avería eléctrica por sobrecarga", "Un tipo de fatiga estival"],
              es: ["Unha queimadura química laboral", "A síndrome do traballador queimado ou esgotamento profesional crónico", "Unha avería eléctrica por sobrecarga", "Un tipo de fatiga estival"]
            },
            respuestaCorrecta: 1,
            explicacion: { gl: "O Burnout é unha resposta ao estrés laboral crónico caracterizada por esgotamento emocional e cinismo profesional.", es: "O Burnout é unha resposta ao estrés laboral crónico caracterizada por esgotamento emocional e cinismo profesional." }, tiempo: 30, puntos: 100
          },
          {
            id: 226,
            pregunta: { gl: "Que son os factores psicosociais no traballo?", es: "¿Qué son los factores psicosociales en el trabajo?" },
            opciones: {
              gl: ["Condicións organizativas e sociais que inflúen na saúde e no benestar", "Exclusivamente os exames médicos de vista", "As instalacións sanitarias da empresa", "Os plans de pensiones privados"],
              es: ["Condicións organizativas e sociais que inflúen na saúde e no benestar", "Exclusivamente os exames médicos de vista", "As instalacións sanitarias da empresa", "Os plans de pensiones privados"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Refírense á organización do tempo, ritmo, autonomía, relacións e contido das tarefas que impactan na psique.", es: "Refírense á organización do tempo, ritmo, autonomía, relacións e contido das tarefas que impactan na psique." }, tiempo: 30, puntos: 100
          },
          {
            id: 227,
            pregunta: { gl: "Como se avalia o consumo enerxético nun traballo físico dinámico?", es: "¿Cómo se evalúa el consumo energético en un trabajo físico dinámico?" },
            opciones: {
              gl: ["Mide a frecuencia cardíaca e o gasto en quilocalorías", "Contando as horas de descanso", "Mediante radiografías de tórax", "Avaliando o peso do calzado"],
              es: ["Mide a frecuencia cardíaca e o gasto en quilocalorías", "Contando as horas de descanso", "Mediante radiografías de tórax", "Avaliando o peso do calzado"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O gasto enerxético establécese calculando o incremento das pulsacións por minuto e o metabolismo da tarefa.", es: "O gasto enerxético establécese calculando o incremento das pulsacións por minuto e o metabolismo da tarefa." }, tiempo: 30, puntos: 100
          },
          {
            id: 228,
            pregunta: { gl: "Cal é o obxectivo principal da ergonomía física no deseño de postos de traballo con pantallas de visualización?", es: "¿Cuál es o objetivo principal de la ergonomía física en el diseño de puestos de trabajo con pantallas de visualización?" },
            opciones: {
              gl: ["Reducir posturas forzadas, fatiga visual e trastornos musculoesqueléticos", "Aumentar a velocidade de tecleo sen importar a postura", "Reducir o consumo eléctrico dos monitores", "Eliminar por completo a necesidade de facer pausas"],
              es: ["Reducir posturas forzadas, fatiga visual e trastornos musculoesqueléticos", "Aumentar a velocidade de tecleo sen importar a postura", "Reducir o consumo eléctrico dos monitores", "Eliminar por completo a necesidade de facer pausas"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Busca a perfecta harmonía entre pantalla, teclado, cadeira e mesa para evitar lesións de pescozo e costas.", es: "Busca a perfecta harmonía entre pantalla, teclado, cadeira e mesa para evitar lesións de pescozo e costas." }, tiempo: 30, puntos: 100
          },
          {
            id: 229,
            pregunta: { gl: "O mobbing ou acoso laboral caracterízase por:", es: "El mobbing o acoso laboral se caracteriza por:" },
            opciones: {
              gl: ["Unha conduta hostil e sistemática contra un traballador no seo da empresa", "Unha única discusión puntual entre compañeiros", "Un desacordo salarial coa xerencia", "Unha inspección laboral rutinaria"],
              es: ["Unha conduta hostil e sistemática contra un traballador no seo da empresa", "Unha única discusión puntual entre compañeiros", "Un desacordo salarial coa xerencia", "Unha inspección laboral rutinaria"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Trátase dun comportamento de maltracto psicolóxico reiterado e prolongado no tempo que dana a saúde do empregado.", es: "Trátase dun comportamento de maltracto psicolóxico reiterado e prolongado no tempo que dana a saúde do empregado." }, tiempo: 30, puntos: 100
          },
          {
            id: 230,
            pregunta: { gl: "Que recomendación se debe seguir respecto ás pausas nun traballo sedentario prolongado ante ordenador?", es: "¿Qué recomendación se debe seguir respecto a las pausas en un trabajo sedentario prolongado ante ordenador?" },
            opciones: {
              gl: ["Realizar pequenas interrupcións ou cambios de postura cada certo tempo (por exemplo, 10 min por cada hora)", "Non levantarse ata finalizar a xornada laboral completa", "Traballar de pé as 8 horas seguidas", "Aumentar a velocidade para marchar antes"],
              es: ["Realizar pequenas interrupcións ou cambios de postura cada certo tempo (por exemplo, 10 min por cada hora)", "Non levantarse ata finalizar a xornada laboral completa", "Traballar de pé as 8 horas seguidas", "Aumentar a velocidade para marchar antes"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "As pausas axudan a reactivar a circulación, relaxar a vista e previr dores musculares estáticas.", es: "As pausas axudan a reactivar a circulación, relaxar a vista e previr dores musculares estáticas." }, tiempo: 30, puntos: 100
          }
        ]
      },
      {
        id: "m2_ud4",
        titulo: {
          gl: "UD 4: Sistemas Elementais de Control. Protección Colectiva e Individual",
          es: "UD 4: Sistemas Elementales de Control. Protección Colectiva e Individual"
        },
        preguntas: [
          {
            id: 231,
            pregunta: { gl: "A qué categoría pertencen os Equipos de Protección Individual (EPI) que protexen contra riscos mortais ou irreversibles?", es: "¿A qué categoría pertenecen los Equipos de Protección Individual (EPI) que protegen contra riesgos mortales o irreversibles?" },
            opciones: {
              gl: ["Categoría I", "Categoría II", "Categoría III", "Categoría Especial"],
              es: ["Categoría I", "Categoría II", "Categoría III", "Categoría Especial"]
            },
            respuestaCorrecta: 2,
            explicacion: { gl: "A Categoría III abarca os EPIs de deseño complexo destinados a protexer contra perigos mortais ou lesións graves permanentes.", es: "A Categoría III abarca os EPIs de deseño complexo destinados a protexer contra perigos mortais ou lesións graves permanentes." }, tiempo: 30, puntos: 100
          },
          {
            id: 232,
            pregunta: { gl: "Cal é a diferenza fundamental entre a protección colectiva e a protección individual?", es: "¿Cuál es la diferencia fundamental entre la protección colectiva y la protección individual?" },
            opciones: {
              gl: ["A colectiva protexe a varios traballadores simultaneamente e a individual protexe unicamente ao portador", "A individual é máis barata e obrigatoria", "A colectiva só serve para oficinas", "Non hai diferenza legal entre ambas"],
              es: ["A colectiva protexe a varios traballadores simultaneamente e a individual protexe unicamente ao portador", "A individual é máis barata e obrigatoria", "A colectiva só serve para oficinas", "Non hai diferenza legal entre ambas"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Os sistemas colectivos (redes, barandillas, extractores) actúan sobre o contorno protexendo a todos por igual.", es: "Os sistemas colectivos (redes, barandillas, extractores) actúan sobre o contorno protexendo a todos por igual." }, tiempo: 30, puntos: 100
          },
          {
            id: 233,
            pregunta: { gl: "Cando se deben utilizar os Equipos de Protección Individual (EPI)?", es: "¿Cuándo se deben utilizar los Equipos de Protección Individual (EPI)?" },
            opciones: {
              gl: ["Sempre como primeira opción preventiva", "Cando os riscos non se poidan evitar ou limitar suficientemente mediante protección colectiva ou métodos organizativos", "Unicamente cando o traballador o desexe voluntariamente", "Cando o visite un cliente importante"],
              es: ["Sempre como primeira opción preventiva", "Cando os riscos non se poidan evitar ou limitar suficientemente mediante protección colectiva ou métodos organizativos", "Unicamente cando o traballador o desexe voluntariamente", "Cando o visite un cliente importante"]
            },
            respuestaCorrecta: 1,
            explicacion: { gl: "Os EPIs teñen carácter subsidiario: empréganse cando non é posible eliminar o risco por outros medios técnicos.", es: "Os EPIs teñen carácter subsidiario: empréganse cando non é posible eliminar o risco por outros medios técnicos." }, tiempo: 30, puntos: 100
          },
          {
            id: 234,
            pregunta: { gl: "Cal dos seguintes elementos constitúe un medio de protección colectiva?", es: "¿Cuál de los siguientes elementos constituye un medio de protección colectiva?" },
            opciones: {
              gl: ["Unha barandilla de seguridade nun oco de escaleira", "Unhas botas de seguridade con puntera de aceiro", "Unha máscara autofiltrante FFP2", "Un casco de obra con barbuqueixo"],
              es: ["Unha barandilla de seguridade nun oco de escaleira", "Unhas botas de seguridade con puntera de aceiro", "Unha máscara autofiltrante FFP2", "Un casco de obra con barbuqueixo"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "A barandilla evita que calquera persoa caia ao baleiro sen necesidade de portar ningún elemento persoal.", es: "A barandilla evita que calquera persoa caia ao baleiro sen necesidade de portar ningún elemento persoal." }, tiempo: 30, puntos: 100
          },
          {
            id: 235,
            pregunta: { gl: "Quen debe asumir o coste económico de adquisición dos EPIs necesarios para os traballadores?", es: "¿Quién debe asumir el coste económico de adquisición de los EPIs necesarios para los trabajadores?" },
            opciones: {
              gl: ["O traballador mediante retencións de nómina", "O empresario de forma totalmente gratuíto para o empregado", "A Seguridade Social ao 50%", "O comité de empresa con fondos sindicais"],
              es: ["O traballador mediante retencións de nómina", "O empresario de forma totalmente gratuíto para o empregado", "A Seguridade Social ao 50%", "O comité de empresa con fondos sindicais"]
            },
            respuestaCorrecta: 1,
            explicacion: { gl: "O empresario está obrigado a proporcionar aos seus traballadores os equipos de protección adecuados sen coste para eles.", es: "O empresario está obrigado a proporcionar aos seus traballadores os equipos de protección adecuados sen coste para eles." }, tiempo: 30, puntos: 100
          },
          {
            id: 236,
            pregunta: { gl: "Que significa que un EPI dispoña de marcado 'CE'?", es: "¿Qué significa que un EPI disponga de marcado 'CE'?" },
            opciones: {
              gl: ["Que foi testado e cumpre cos requisitos esenciais de saúde e comercialización na UE", "Que ten unha garantía comercial de 10 anos", "Que foi fabricado exclusivamente en países comunitarios", "Que é un produto de categoría menor"],
              es: ["Que foi testado e cumpre cos requisitos esenciais de saúde e comercialización na UE", "Que ten unha garantía comercial de 10 anos", "Que foi fabricado exclusivamente en países comunitarios", "Que é un produto de categoría menor"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O selo CE garante que o modelo superou os ensaios normativos de homologación europea.", es: "O selo CE garante que o modelo superou os ensaios normativos de homologación europea." }, tiempo: 30, puntos: 100
          },
          {
            id: 237,
            pregunta: { gl: "A que categoría de EPI pertencen unhas gafas de protección fronte a proxeccións mecánicas habituais?", es: "¿A qué categoría de EPI pertenecen unas gafas de protección frente a proyecciones mecánicas habituales?" },
            opciones: {
              gl: ["Categoría I", "Categoría II (Riscos intermedios)", "Categoría III", "Categoría Especial alta tensión"],
              es: ["Categoría I", "Categoría II (Riscos intermedios)", "Categoría III", "Categoría Especial alta tensión"]
            },
            respuestaCorrecta: 1,
            explicacion: { gl: "A maioría de equipos de protección ocular, auditiva e calzado básico sitúanse na Categoría II.", es: "A maioría de equipos de protección ocular, auditiva e calzado básico sitúanse na Categoría II." }, tiempo: 30, puntos: 100
          },
          {
            id: 238,
            pregunta: { gl: "Cal é a obriga principal do traballador respecto aos EPIs que lle entrega a empresa?", es: "¿Cuál es la obligación principal del trabajador respecto a los EPIs que le entrega la empresa?" },
            opciones: {
              gl: ["Utilizalos correctamente e coidalos segundo as instrucións do fabricante", "Vendelos se non os utiliza", "Modificalos esteticamente ao seu gusto", "Gardalos na súa casa permanentemente"],
              es: ["Utilizalos correctamente e coidalos segundo as instrucións do fabricante", "Vendelos se non os utiliza", "Modificalos esteticamente ao seu gusto", "Gardalos na súa casa permanentemente"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O traballador debe empregar os EPIs conforme ás pautas formativas e avisar de calquera anomalía ou deterioro.", es: "O traballador debe empregar os EPIs conforme ás pautas formativas e avisar de calquera anomalía ou deterioro." }, tiempo: 30, puntos: 100
          },
          {
            id: 239,
            pregunta: { gl: "Unha rede de seguridade colocada para evitar caídas en obras de construción considérase:", es: "¿Una red de seguridad colocada para evitar caídas en obras de construcción se considera:" },
            opciones: {
              gl: ["Un medio de protección colectiva", "Un EPI de categoría III", "Unha ferramenta de transporte", "Un elemento auxiliar sen validez legal"],
              es: ["Un medio de protección colectiva", "Un EPI de categoría III", "Unha ferramenta de transporte", "Un elemento auxiliar sen validez legal"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Protexe de forma pasiva a calquera operario que traballe na zona de influencia da rede.", es: "Protexe de forma pasiva a calquera operario que traballe na zona de influencia da rede." }, tiempo: 30, puntos: 100
          },
          {
            id: 240,
            pregunta: { gl: "Que se debe facer cun EPI que sufriu un impacto grave ou presenta caducidade vencida?", es: "¿Qué se debe hacer con un EPI que sufrió un impacto grave o presenta caducidad vencida?" },
            opciones: {
              gl: ["Darllemos de baixa e rexeitalo para evitar o seu uso", "Reparalo con cinta adhesiva na casa", "Seguir utilizándolo se parece intacto", "Vendelo a un compañareiro"],
              es: ["Darllemos de baixa e rexeitalo para evitar o seu uso", "Reparalo con cinta adhesiva na casa", "Seguir utilizándolo se parece intacto", "Vendelo a un compañareiro"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Un equipo danado ou caducado perde as súas propiedades de resistencia, polo que debe destruírse e substituírse.", es: "Un equipo danado ou caducado perde as súas propiedades de resistencia, polo que debe destruírse e substituírse." }, tiempo: 30, puntos: 100
          }
        ]
      },
      {
        id: "m2_ud5",
        titulo: {
          gl: "UD 5: Nocións Básicas de Actuación en Emerxencias e Evacuación",
          es: "UD 5: Nociones Básicas de Actuación en Emergencias y Evacuación"
        },
        preguntas: [
          {
            id: 241,
            pregunta: { gl: "Como se denomina un accidente ou conato de incendio que pode ser neutralizado de forma inmediata cos medios do lugar?", es: "¿Cómo se denomina un accidente o conato de incendio que puede ser neutralizado de forma inmediata con los medios del lugar?" },
            opciones: {
              gl: ["Conato de emerxencia", "Emerxencia parcial", "Emerxencia xeral", "Evacuación masiva"],
              es: ["Conato de emerxencia", "Emerxencia parcial", "Emerxencia xeral", "Evacuación masiva"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O conato é a fase inicial dunha emerxencia que se domina facilmente cos extintores portátiles dispoñibles no sector.", es: "O conato é a fase inicial dunha emerxencia que se domina facilmente cos extintores portátiles dispoñibles no sector." }, tiempo: 30, puntos: 100
          },
          {
            id: 242,
            pregunta: { gl: "Que equipo de traballadores ten a misión de intervir de forma avanzada cando o conato supera os medios básicos?", es: "¿Qué equipo de trabajadores tiene la misión de intervenir de forma avanzada cuando el conato supera los medios básicos?" },
            opciones: {
              gl: ["Equipos de Primeira Intervención (EPI)", "Equipos de Segunda Intervención (ESI)", "Equipos de Alarma e Evacuación (EAE)", "Equipos de Primeiros Auxilios"],
              es: ["Equipos de Primeira Intervención (EPI)", "Equipos de Segunda Intervención (ESI)", "Equipos de Alarma e Evacuación (EAE)", "Equipos de Primeiros Auxilios"]
            },
            respuestaCorrecta: 1,
            explicacion: { gl: "Os ESI están formados por persoal con adestramentos específicos e equipos pesados de loita contra incendios.", es: "Os ESI están formados por persoal con adestramentos específicos e equipos pesados de loita contra incendios." }, tiempo: 30, puntos: 100
          },
          {
            id: 243,
            pregunta: { gl: "Cal é a frecuencia mínima esixida para a realización de simulacros de evacuación nun centro de traballo?", es: "¿Cuál es la frecuencia mínima exigida para la realización de simulacros de evacuación en un centro de trabajo?" },
            opciones: {
              gl: ["Unha vez ao ano", "Unha vez cada mes", "Unha vez cada 5 anos", "Soamente cando o solicite un sindicato"],
              es: ["Unha vez ao ano", "Unha vez cada mes", "Unha vez cada 5 anos", "Soamente cando o solicite un sindicato"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Os plans de emerxencia debuxan a obriga de realizar polo menos un simulacro anual para comprobar tempos e eficacias.", es: "Os plans de emerxencia debuxan a obriga de realizar polo menos un simulacro anual para comprobar tempos e eficacias." }, tiempo: 30, puntos: 100
          },
          {
            id: 244,
            pregunta: { gl: "Ante unha orde de evacuación dun edificio por incendio, que elemento NUNCA se debe utilizar baixo ningún concepto?", es: "¿Ante una orden de evacuación de un edificio por incendio, qué elemento NUNCA se debe utilizar bajo ningún concepto?" },
            opciones: {
              gl: ["Os ascensores e montacargas", "As escaleiras de emerxencia exteriores", "As portas batentes sinalizadas con luz verde", "O punto de reunión exterior"],
              es: ["Os ascensores e montacargas", "As escaleiras de emerxencia exteriores", "As portas batentes sinalizadas con luz verde", "O punto de reunión exterior"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O uso de ascensores está prohibido porque poden quedar sen electricidade ou converterse en chimeneas de fume.", es: "O uso de ascensores está prohibido porque poden quedar sen electricidade ou converterse en chimeneas de fume." }, tiempo: 30, puntos: 100
          },
          {
            id: 245,
            pregunta: { gl: "Cal é a finalidade principal do Punto de Encontro ou Reunión exterior nunha evacuación?", es: "¿Cuál es la finalidad principal del Punto de Encuentro o Reunión exterior en una evacuación?" },
            opciones: {
              gl: ["Realizar o reconto de persoas e comprobar que non falta ninguén", "Esperar o reparto de comida", "Facer chamadas telefónicas persoais", "Aparcar os vehículos corporativos"],
              es: ["Realizar o reconto de persoas e comprobar que non falta ninguén", "Esperar o reparto de comida", "Facer chamadas telefónicas persoais", "Aparcar os vehículos corporativos"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Garante a seguridade de todos os ocupantes e facilita información aos servizos de emerxencia externos se falta alguén.", es: "Garante a seguridade de todos os ocupantes e facilita información aos servizos de emerxencia externos se falta alguén." }, tiempo: 30, puntos: 100
          },
          {
            id: 246,
            pregunta: { gl: "Que é un Plan de Autoprotección?", es: "¿Qué es un Plan de Autoprotección?" },
            opciones: {
              gl: ["Un documento que planifica as medidas de prevención e actuación ante situacións de emerxencia", "Un manual de contabilidade empresarial", "Un contrato de mantemento de impresoras", "Unha póliza de seguro de automóbiles"],
              es: ["Un documento que planifica as medidas de prevención e actuación ante situacións de emerxencia", "Un manual de contabilidade empresarial", "Un contrato de mantemento de impresoras", "Unha póliza de seguro de automóbiles"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O Plan de Autoprotección integra a análise de riscos e a resposta organizada fronte a calquera sinistro.", es: "O Plan de Autoprotección integra a análise de riscos e a resposta organizada fronte a calquera sinistro." }, tiempo: 30, puntos: 100
          },
          {
            id: 247,
            pregunta: { gl: "Unha emerxencia parcial caracterízase por:", es: "Una emergencia parcial se caracteriza por:" },
            opciones: {
              gl: ["Afectar a un sector ou área concreta do centro, exixindo a actuación dos equipos especiais sen requirir a evacuación total", "Afectar a toda a rexión xeográfica do país", "Ser un simple susto sen consecuencias", "Non requirir ningún tipo de acción"],
              es: ["Afectar a un sector ou área concreta do centro, exixindo a actuación dos equipos especiais sen requirir a evacuación total", "Afectar a toda a rexión xeográfica do país", "Ser un simple susto sen consecuencias", "Non requirir ningún tipo de acción"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O sinistro circunscribese a unha zona pero supera os medios do conato, mobilizando equipos de intervención parcial.", es: "O sinistro circunscribese a unha zona pero supera os medios do conato, mobilizando equipos de intervención parcial." }, tiempo: 30, puntos: 100
          },
          {
            id: 248,
            pregunta: { gl: "Que debemos facer se nos atbarcamos nunha escaleira chea de fume denso durante a evacuación?", es: "¿Qué debemos hacer si nos atascamos en una escalera llena de humo denso durante la evacuación?" },
            opciones: {
              gl: ["Avanzar agachados preto do chan onde o aire é máis limpo e respirable", "Correr de pé o máis rápido posible", "Quitar a roupa para respirar mellor", "Subir ao tellado do edificio"],
              es: ["Avanzar agachados preto do chan onde o aire é máis limpo e respirable", "Correr de pé o máis rápido posible", "Quitar a roupa para respirar mellor", "Subir ao tellado do edificio"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O fume quente e tóxico tende a acumularse nas capas altas do espazo, polo que respirar preto do chan reduce a intoxicación.", es: "O fume quente e tóxico tende a acumularse nas capas altas do espazo, polo que respirar preto do chan reduce a intoxicación." }, tiempo: 30, puntos: 100
          },
          {
            id: 249,
            pregunta: { gl: "Cales son os tres elementos esenciais que compoñen o coñecido como 'Triángulo do Fogo'?", es: "¿Cuáles son los tres elementos esenciales que componen el conocido como 'Triángulo del Fuego'?" },
            opciones: {
              gl: ["Combustible, Aporte de osíxeno e Enerxía de activación (calor)", "Auga, Vento e Terra", "Electricidade, Aceite e Madeira", "Metal, Plástico e Gas"],
              es: ["Combustible, Aporte de osíxeno e Enerxía de activación (calor)", "Auga, Vento e Terra", "Electricidade, Aceite e Madeira", "Metal, Plástico e Gas"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Para que se inicie e manteña o lume precísase a presenza simultánea de combustible, comburente (osíxeno) e calor.", es: "Para que se inicie e manteña o lume precísase a presenza simultánea de combustible, comburente (osíxeno) e calor." }, tiempo: 30, puntos: 100
          },
          {
            id: 250,
            pregunta: { gl: "Como actúa un extintor de po químico seco sobre un incendio?", es: "¿Cómo actúa un extintor de polvo químico seco sobre un incendio?" },
            opciones: {
              gl: ["Interrompe a reacción química en cadea e abafa as chamas", "Enfría bruscamente o local mediante xeo seco", "Aumenta a cantidade de osíxeno do ambiente", "Crea electricidade estática"],
              es: ["Interrompe a reacción química en cadea e abafa as chamas", "Enfría bruscamente o local mediante xeo seco", "Aumenta a cantidade de osíxeno do ambiente", "Crea electricidade estática"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O po actúa por achegamento e interrompendo a reacción en cadea do lume nos sólidos e líquidos.", es: "O po actúa por achegamento e interrompendo a reacción en cadea do lume nos sólidos e líquidos." }, tiempo: 30, puntos: 100
          }
        ]
      },
      {
        id: "m2_ud6",
        titulo: {
          gl: "UD 6: Primeiros Auxilios",
          es: "UD 6: Primeros Auxilios"
        },
        preguntas: [
          {
            id: 251,
            pregunta: { gl: "Cal é a secuencia correcta de actuación en primeiros auxilios resumida na regra PAS?", es: "¿Cuál es la secuencia correcta de actuación en primeros auxilios resumida en la regla PAS?" },
            opciones: {
              gl: ["Protexer, Avisar, Socorrer", "Parar, Analizar, Sanar", "Previr, Actuar, Suster", "Procurar asistencia, Asumir, Salvar"],
              es: ["Protexer, Avisar, Socorrer", "Parar, Analizar, Sanar", "Previr, Actuar, Suster", "Procurar asistencia, Asumir, Salvar"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Protexer o lugar para evitar novos accidentes, Avisar aos servizos de emerxencia (112) e Socorrer á vítima.", es: "Protexer o lugar para evitar novos accidentes, Avisar aos servizos de emerxencia (112) e Socorrer á vítima." }, tiempo: 30, puntos: 100
          },
          {
            id: 252,
            pregunta: { gl: "En que posición lateral se debe colocar a un accidentado que está inconsciente pero si respira e non presenta lesión medular?", es: "¿En qué posición lateral se debe colocar a un accidentado que está inconsciente pero sí respira y no presenta lesión medular?" },
            opciones: {
              gl: ["Posición Lateral de Seguridade (PLS)", "Decúbito supino estrito", "Posición de Trendelenburg", "Sentado nunha cadeira"],
              es: ["Posición Lateral de Seguridade (PLS)", "Decúbito supino estrito", "Posición de Trendelenburg", "Sentado nunha cadeira"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "A PLS mantén a vía aérea permeable evitando que a lingua caia cara atrás ou a persoa se afogue co seu vómito.", es: "A PLS mantén a vía aérea permeable evitando que a lingua caia cara atrás ou a persoa se afogue co seu vómito." }, tiempo: 30, puntos: 100
          },
          {
            id: 253,
            pregunta: { gl: "Cal é a proporción estándar de compresións torácicas e insuflacións nunha RCP básica de adultos?", es: "¿Cuál es la proporción estándar de compresiones torácicas e insuflaciones en una RCP básica de adultos?" },
            opciones: {
              gl: ["30 compresións e 2 insuflacións", "15 compresións e 1 insuflación", "5 compresións e 5 insuflacións", "100 compresións continuas sen insuflar"],
              es: ["30 compresións e 2 insuflacións", "15 compresións e 1 insuflación", "5 compresións e 5 insuflacións", "100 compresións continuas sen insuflar"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O ciclo recomendado polas guías internacionais de reanimación é de 30 masaxes cardíacas por cada 2 respiracións.", es: "O ciclo recomendado polas guías internacionais de reanimación é de 30 masaxes cardíacas por cada 2 respiracións." }, tiempo: 30, puntos: 100
          },
          {
            id: 254,
            pregunta: { gl: "Ante unha hemorraxia externa abundante nunha extremidade, cal debe ser a primeira medida de emerxencia?", es: "¿Ante una hemorragia externa abundante en una extremidad, cuál debe ser la primera medida de emergencia?" },
            opciones: {
              gl: ["Aplicar compresión directa sobre a ferida cunha gasa estéril e elevar a extremidade", "Colocar un torniquete de inmediato", "Lavar con auga osixenada a presión", "Aplicar xofre medicinal"],
              es: ["Aplicar compresión directa sobre a ferida cunha gasa estéril e elevar a extremidade", "Colocar un torniquete de inmediato", "Lavar con auga osixenada a presión", "Aplicar xofre medicinal"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "A compresión directa mantida detén a gran maioría de hemorragias sen necesidade de recorrer a torniquetes.", es: "A compresión directa mantida detén a gran maioría de hemorragias sen necesidade de recorrer a torniquetes." }, tiempo: 30, puntos: 100
          },
          {
            id: 255,
            pregunta: { gl: "Como se debe proceder ante unha queimadura química na pel provocada por salpicadura de produtos corrosivos?", es: "¿Cómo se debe proceder ante una quemadura química en la piel provocada por salpicadura de productos corrosivos?" },
            opciones: {
              gl: ["Lavar con abundante auga limpa a baixa presión durante polo menos 15-20 minutos", "Untar graxa ou manteiga vexetal", "Aplicar alcohol de 96 graos", "Fregar a zona con escovola dura"],
              es: ["Lavar con abundante auga limpa a baixa presión durante polo menos 15-20 minutos", "Untar graxa ou manteiga vexetal", "Aplicar alcohol de 96 graos", "Fregar a zona con escovola dura"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O lavado copioso con auga dilúe e retira o axente químico corrosivo, mitigando a profundidade da lesión.", es: "O lavado copioso con auga dilúe e retira o axente químico corrosivo, mitigando a profundidade da lesión." }, tiempo: 30, puntos: 100
          },
          {
            id: 256,
            pregunta: { gl: "Que debemos facer se un accidentado sofre un forte golpe na cabeza e comeza a sangrar polo oído (otorraxia)?", es: "¿Qué debemos hacer si un accidentado sufre un fuerte golpe en la cabeza y comienza a sangrar por el oído (otorragia)?" },
            opciones: {
              gl: ["Non taponar o oído baixo ningún concepto e deixar saír o fluído", "Taponar herméticamente con algodón apertado", "Inxectar analxésicos líquidos no conduto", "Tender ao paciente boca abaixo"],
              es: ["Non taponar o oído baixo ningún concepto e deixar saír o fluído", "Taponar herméticamente con algodón apertado", "Inxectar analxésicos líquidos no conduto", "Tender ao paciente boca abaixo"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Taponar un sangrado cranial pode xerar presión intracraneal moi perigosa; debe deixarse fluír libremente.", es: "Taponar un sangrado cranial pode xerar presión intracraneal moi perigosa; debe deixarse fluír libremente." }, tiempo: 30, puntos: 100
          },
          {
            id: 257,
            pregunta: { gl: "Ante un corpo estraño que obstruíde totalmente a vía aérea nun adulto consciente, que maniobra se debe aplicar?", es: "¿Ante un cuerpo extraño que obstruye totalmente la vía aérea en un adulto consciente, qué maniobra se debe aplicar?" },
            opciones: {
              gl: ["Manobra de Heimlich (compresións abdominais)", "RCP completa", "Poñer ao paciente boca abaixo e sacudir", "Darlle a beber un vaso de auga rápida"],
              es: ["Manobra de Heimlich (compresións abdominais)", "RCP completa", "Poñer ao paciente boca abaixo e sacudir", "Darlle a beber un vaso de auga rápida"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "As compresións abdominais bruscas (Heimlich) xeran un fluxo de aire residual que expulsa o obxecto encavado.", es: "As compresións abdominais bruscas (Heimlich) xeran un fluxo de aire residual que expulsa o obxecto encavado." }, tiempo: 30, puntos: 100
          },
          {
            id: 258,
            pregunta: { gl: "Que é un desmaio ou lipotimia?", es: "¿Qué es un desmayo o lipotimia?" },
            opciones: {
              gl: ["Unha perda de conciencia breve, superficial e transitoria por falta temporal de achegamento sanguíneo ao cerebro", "Un paro cardiorrespiratorio irreversible", "Unha fractura ósea pechada", "Un ataque de epilepsia crónica"],
              es: ["Unha perda de conciencia breve, superficial e transitoria por falta temporal de achegamento sanguíneo ao cerebro", "Un paro cardiorrespiratorio irreversible", "Unha fractura ósea pechada", "Un ataque de epilepsia crónica"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "A lipotimia recuperase rapidamente tumbando á persoa e elevando lixeiramente as súas pernas para favorecer o retorno venoso.", es: "A lipotimia recuperase rapidamente tumbando á persoa e elevando lixeiramente as súas pernas para favorecer o retorno venoso." }, tiempo: 30, puntos: 100
          },
          {
            id: 259,
            pregunta: { gl: "Cando se debe empregar un Desfibrilador Externo SemiAutomático (DESA)?", es: "¿Cuándo se debe emplear un Desfibrilador Externo SemiAutomático (DESA)?" },
            opciones: {
              gl: ["Ante unha parada cardiorrespiratoria cando a persoa non respira con normalidade", "Soamente en feridas abertas con hemorraxia", "Para tratar queimaduras solares graves", "En calquera dor de cabeza leve"],
              es: ["Ante unha parada cardiorrespiratoria cando a persoa non respira con normalidade", "Soamente en feridas abertas con hemorraxia", "Para tratar queimaduras solares graves", "En calquera dor de cabeza leve"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O DESA analiza o ritmo cardíaco e aplica descargas eléctricas se detecta fibrilación ventricular desfibrilable.", es: "O DESA analiza o ritmo cardíaco e aplica descargas eléctricas se detecta fibrilación ventricular desfibrilable." }, tiempo: 30, puntos: 100
          },
          {
            id: 260,
            pregunta: { gl: "Cal é a primeira actuación ante unha fractura ósea nunha extremidade antes da chegada sanitaria?", es: "¿Cuál es la primera actuación ante una fractura ósea en una extremidad antes de la llegada sanitaria?" },
            opciones: {
              gl: ["Inmobilizar a articulación ou óso afectado tal e como se atope sen tentar recolocalo", "Tentar encaixar o óso roto á forza", "Aplicar masaxe profunda", "Facer camiñar ao paciente para probar a resistencia"],
              es: ["Inmobilizar a articulación ou óso afectado tal e como se atope sen tentar recolocalo", "Tentar encaixar o óso roto á forza", "Aplicar masaxe profunda", "Facer camiñar ao paciente para probar a resistencia"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "A inmobilización evita que os extremos rotos do óso garden lesións nos vasos sanguíneos ou nervios veciños.", es: "A inmobilización evita que os extremos rotos do óso garden lesións nos vasos sanguíneos ou nervios veciños." }, tiempo: 30, puntos: 100
          }
        ]
      },
      {
        id: "m2_ud7",
        titulo: {
          gl: "UD 7: O Control da Saúde dos Traballadores",
          es: "UD 7: El Control de la Salud de los Trabajadores"
        },
        preguntas: [
          {
            id: 261,
            pregunta: { gl: "Cal é o carácter xeral dos recoñecementos médicos de Vixilancia da Saúde segundo o art. 22 da LPRL?", es: "¿Cuál es el carácter general de los reconocimientos médicos de Vigilancia de la Salud según el art. 22 de la LPRL?" },
            opciones: {
              gl: ["Voluntario para o traballador, salvo excepcións legais específicas", "Obrigatorio en calquera circunstancia sen excepción", "Decidido por votación na asemblea de empregados", "Opcional só para directivos"],
              es: ["Voluntario para o traballador, salvo excepcións legais específicas", "Obrigatorio en calquera circunstancia sen excepción", "Decidido por votación na asemblea de empregados", "Opcional só para directivos"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O consentimento do traballador rexe a vixilancia, agás que existan perigos graves para terceiros ou disposición legal expresa.", es: "O consentimento do traballador rexe a vixilancia, agás que existan perigos graves para terceiros ou disposición legal expresa." }, tiempo: 30, puntos: 100
          },
          {
            id: 262,
            pregunta: { gl: "Pode o empresario acceder aos resultados clínicos detallados dun exame médico preventivo?", es: "¿Puede el empresario acceder a los resultados clínicos detallados de un examen médico preventivo?" },
            opciones: {
              gl: ["Non, o empresario só recibe un informe de aptitude ou limitacións sen detalles médicos", "Si, ten dereito a ver todo o historial clínico", "Soamente se o traballador firma un permiso por escrito", "Si, o servizo de prevención remite o expediente completo a recursos humanos"],
              es: ["Non, o empresario só recibe un informe de aptitude ou limitacións sen detalles médicos", "Si, ten dereito a ver todo o historial clínico", "Soamente se o traballador firma un permiso por escrito", "Si, o servizo de prevención remite o expediente completo a recursos humanos"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O segredo profesional médico impide que a empresa coñeza patoloxías íntimas, limitando a comunicación a se o empregado é apte.", es: "O segredo profesional médico impide que a empresa coñeza patoloxías íntimas, limitando a comunicación a se o empregado é apte." }, tiempo: 30, puntos: 100
          },
          {
            id: 263,
            pregunta: { gl: "Quen debe asumir o custo económico dos exames de Vixilancia da Saúde?", es: "¿Quién debe asumir el coste económico de los exámenes de Vigilancia de la Salud?" },
            opciones: {
              gl: ["O empresario na súa totalidade", "O traballador mediante copago na nómina", "A Seguridade Social", "As mutuas ao 50% co empregado"],
              es: ["O empresario na súa totalidade", "O traballador mediante copago na nómina", "A Seguridade Social", "As mutuas ao 50% co empregado"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O custo das probas médicas preventivas recae enteiramente sobre o empresario, sendo gratuítas para o persoal.", es: "O custo das probas médicas preventivas recae enteiramente sobre o empresario, sendo gratuítas para o persoal." }, tiempo: 30, puntos: 100
          },
          {
            id: 264,
            pregunta: { gl: "En que horario deben realizarse preferentemente as revisións médicas laborais?", es: "¿En qué horario deben realizarse preferentemente las revisiones médicas laborales?" },
            opciones: {
              gl: ["Dentro da xornada de traballo ou computarse como tempo efectivo", "Exclusivamente fóra de horas e fins de semana", "Durante os días de vacacións anuais", "Pola noite mentres o traballador descansa"],
              es: ["Dentro da xornada de traballo ou computarse como tempo efectivo", "Exclusivamente fóra de horas e fins de semana", "Durante os días de vacacións anuais", "Pola noite mentres o traballador descansa"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "A lexislación esixe que as probas médicas formen parte do tempo de traballo ou sexan compensadas se ocorren fóra.", es: "A lexislación esixe que as probas médicas formen parte do tempo de traballo ou sexan compensadas se ocorren fóra." }, tiempo: 30, puntos: 100
          },
          {
            id: 265,
            pregunta: { gl: "En que supostos se prolonga a vixilancia da saúde máis alá da finalización da relación laboral?", es: "¿En qué supuestos se prolonga la vigilancia de la salud más allá de la finalización de la relación laboral?" },
            opciones: {
              gl: ["Cando houbo exposición a axentes con efectos a longo prazo (como canceríxenos)", "En calquera tipo de contrato temporal", "Soamente para directivos con antigüidade", "Nunca se pode prolongar"],
              es: ["Cando houbo exposición a axentes con efectos a longo prazo (como canceríxenos)", "En calquera tipo de contrato temporal", "Soamente para directivos con antigüidade", "Nunca se pode prolongar"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Riscos como o amianto ou substancias canceríxenas exixen controis médicos posteriores debido á latencia das enfermidades.", es: "Riscos como o amianto ou substancias canceríxenas exixen controis médicos posteriores debido á latencia das enfermidades." }, tiempo: 30, puntos: 100
          },
          {
            id: 266,
            pregunta: { gl: "Quen é o responsable legal de custodiar a documentación médica derivada da vixilancia da saúde?", es: "¿Quién es el responsable legal de custodiar la documentación médica derivada de la vigilancia de la salud?" },
            opciones: {
              gl: ["O persoal sanitario do servizo de prevención", "O departamento de administración de recursos humanos", "O comité de empresa sindical", "A policía local do concello"],
              es: ["O persoal sanitario do servizo de prevención", "O departamento de administración de recursos humanos", "O comité de empresa sindical", "A policía local do concello"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "A custodia rigorosa dos expedientes clínicos correspónde-lle estritamente aos médicos e enfermeiros do servizo.", es: "A custodia rigorosa dos expedientes clínicos correspónde-lle estritamente aos médicos e enfermeiros do servizo." }, tiempo: 30, puntos: 100
          },
          {
            id: 267,
            pregunta: { gl: "Que finalidade preventiva principal persegue a vixilancia da saúde?", es: "¿Qué finalidad preventiva principal persigue la vigilancia de la salud?" },
            opciones: {
              gl: ["Detectar danos precozmente e comprobar a eficacia das medidas preventivas adoptadas", "Despedir traballadores con baixa forma física", "Aumentar a recaudación fiscal da mutua", "Xerar estatísticas sen aplicación práctica"],
              es: ["Detectar danos precozmente e comprobar a eficacia das medidas preventivas adoptadas", "Despedir traballadores con baixa forma física", "Aumentar a recaudación fiscal da mutua", "Xerar estatísticas sen aplicación práctica"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Busca recoñecer sinais temperáns de alteración da saúde e avaliar se a prevención do posto está funcionando.", es: "Busca recoñecer sinais temperáns de alteración da saúde e avaliar se a prevención do posto está funcionando." }, tiempo: 30, puntos: 100
          },
          {
            id: 268,
            pregunta: { gl: "Cando debe realizarse un recoñecemento médico específico a un traballador segundo a normativa?", es: "¿Cuándo debe realizarse un reconocimiento médico específico a un trabajador según la normativa?" },
            opciones: {
              gl: ["Tras a incorporación ao posto, tras ausencias prolongadas por motivos de saúde e periodicamente", "Soamente cando o traballador se xubila", "Unha vez cada 20 anos", "Cando a empresa o decida no mes de agosto"],
              es: ["Tras a incorporación ao posto, tras ausencias prolongadas por motivos de saúde e periodicamente", "Soamente cando o traballador se xubila", "Unha vez cada 20 anos", "Cando a empresa o decida no mes de agosto"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "A periodicidade axústase ao risco e inclúe a vixilancia tras baixas longas ou mudanzas de tarefas con novos perigos.", es: "A periodicidade axústase ao risco e inclúe a vixilancia tras baixas longas ou mudanzas de tarefas con novos perigos." }, tiempo: 30, puntos: 100
          },
          {
            id: 269,
            pregunta: { gl: "Que sucede se un traballador se nega por completo a calquera revisión médica nun posto con riscos especiais obrigatorios?", es: "¿Qué sucede si un trabajador se niega por completo a cualquier revisión médica en un puesto con riesgos especiales obligatorios?" },
            opciones: {
              gl: ["Emítese un informe de non aptitude por falta de comprobación se o impón a lexislación ou a xustificación sanitaria", "O traballador é ascendido automaticamente", "A empresa non pode tomar ningunha medida", "A Seguridade Social paga unha indemnización"],
              es: ["Emítese un informe de non aptitude por falta de comprobación se o impón a lexislación ou a xustificación sanitaria", "O traballador é ascendido automaticamente", "A empresa non pode tomar ningunha medida", "A Seguridade Social paga unha indemnización"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Se a lexislación o declara obrigatorio por risco crítico para terceiros, a negativa inxustificada impide ocupar o posto.", es: "Se a lexislación o declara obrigatorio por risco crítico para terceiros, a negativa inxustificada impide ocupar o posto." }, tiempo: 30, puntos: 100
          },
          {
            id: 270,
            pregunta: { gl: "A planificación da acción preventiva en materia de saúde laboral baséase fundamentalmente en:", es: "La planificación de la acción preventiva en materia de salud laboral se basa fundamentalmente en:" },
            opciones: {
              gl: ["Os resultados derivados da avaliación de riscos e da vixilancia da saúde", "O orzamento dispoñible en publicidade", "As ordes directas dos provedores externos", "Os gustos estéticos da xerencia"],
              es: ["Os resultados derivados da avaliación de riscos e da vixilancia da saúde", "O orzamento dispoñible en publicidade", "As ordes directas dos provedores externos", "Os gustos estéticos da xerencia"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Os datos epidemiolóxicos e clínicos orientan a corrección de deficiencias nas condicións de traballo.", es: "Os datos epidemiolóxicos e clínicos orientan a corrección de deficiencias nas condicións de traballo." }, tiempo: 30, puntos: 100
          }
        ]
      }
    ]
  },
  {
    moduloId: 3,
    tituloModulo: {
      gl: "Módulo 3: Elementos Básicos de Xestión da PRL",
      es: "Módulo 3: Elementos Básicos de Gestión de la PRL"
    },
    unidades: [
      {
        id: "m3_ud1",
        titulo: {
          gl: "UD 1: A Organización da Prevención na Empresa",
          es: "UD 1: La Organización de la Prevención en la Empresa"
        },
        preguntas: [
          {
            id: 301,
            pregunta: { gl: "A partir de cantos traballadores é obrigatorio dispoñer dun Servizo de Prevención Propio?", es: "¿A partir de cuántos trabajadores es obligatorio disponer de un Servicio de Prevención Propio?" },
            opciones: {
              gl: ["100 traballadores", "250 traballadores", "500 traballadores", "1000 traballadores"],
              es: ["100 traballadores", "250 traballadores", "500 traballadores", "1000 traballadores"]
            },
            respuestaCorrecta: 2,
            explicacion: { gl: "O art. 14 do Regulamento dos Servizos de Prevención fixa en 500 traballadores o limiar para servizo propio (ou 250 en actividades perigosas).", es: "O art. 14 do Regulamento dos Servizos de Prevención fixa en 500 traballadores o limiar para servizo propio (ou 250 en actividades perigosas)." }, tiempo: 30, puntos: 100
          },
          {
            id: 302,
            pregunta: { gl: "En que condicións pode o empresario asumir persoalmente a actividade preventiva na súa empresa?", es: "¿En qué condiciones puede el empresario asumir personalmente la actividad preventiva en su empresa?" },
            opciones: {
              gl: ["En empresas de ata 10 traballadores (ou 25 nun único centro) sempre que desenvolva a súa labor alí e teña formación requirida", "En calquera empresa sen límite de persoal", "Soamente se a empresa se dedica á construción pesada", "Está prohibido en todos os casos"],
              es: ["En empresas de ata 10 traballadores (ou 25 nun único centro) sempre que desenvolva a súa labor alí e teña formación requirida", "En calquera empresa sen límite de persoal", "Soamente se a empresa se dedica á construción pesada", "Está prohibido en todos os casos"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O empresario individual pode asumir a prevención se traballa habitualmente no centro e posúe a capacitación de nivel básico.", es: "O empresario individual pode asumir a prevención se traballa habitualmente no centro e posúe a capacitación de nivel básico." }, tiempo: 30, puntos: 100
          },
          {
            id: 303,
            pregunta: { gl: "Que é unha auditoría do Sistema de Xestión da Prevención de Riscos Laborais?", es: "¿Qué es una auditoría del Sistema de Gestión de la Prevención de Riesgos Laborales?" },
            opciones: {
              gl: ["Unha revisión externa, sistemática e obxectiva para avaliar a eficacia do sistema preventivo", "Unha inspección fiscal de impostos", "Un control de stock de materiais", "Un exame médico anual aos directivos"],
              es: ["Unha revisión externa, sistemática e obxectiva para avaliar a eficacia do sistema preventivo", "Unha inspección fiscal de impostos", "Un control de stock de materiais", "Un exame médico anual aos directivos"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "A auditoría legal externa axuda a comprobar se a integración da prevención na empresa é real e eficiente.", es: "A auditoría legal externa axuda a comprobar se a integración da prevención na empresa é real e eficiente." }, tiempo: 30, puntos: 100
          },
          {
            id: 304,
            pregunta: { gl: "Cando se debe actualizar obrigatoriamente a Avaliación de Riscos dun posto de traballo?", es: "¿Cuándo se debe actualizar obligatoriamente la Evaluación de Riesgos de un puesto de trabajo?" },
            opciones: {
              gl: ["Cando cambien as condicións de traballo, se introduzan equipos novos ou se detecten danos á saúde", "Cada 10 anos de xeito automático", "Soamente se o pide un sindicato maioritario", "Nunhca despois de facela por primeira vez"],
              es: ["Cando cambien as condicións de traballo, se introduzan equipos novos ou se detecten danos á saúde", "Cada 10 anos de xeito automático", "Soamente se o pide un sindicato maioritario", "Nunhca despois de facela por primeira vez"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Calquera modificación tecnolóxica, de materias primas ou accidentes rexistrados obriga a revisar a vixencia da avaliación.", es: "Calquera modificación tecnolóxica, de materias primas ou accidentes rexistrados obriga a revisar a vixencia da avaliación." }, tiempo: 30, puntos: 100
          },
          {
            id: 305,
            pregunta: { gl: "Que é un Servizo de Prevención Alleo (SPA)?", es: "¿Qué es un Servicio de Prevención Ajeno (SPA)?" },
            opciones: {
              gl: ["Unha entidade especializada acreditada que a empresa contrata para cubrir as disciplinas preventivas", "Un departamento interno da propia empresa", "Un organismo de control público da policía", "Unha mutua de seguros de coches"],
              es: ["Unha entidade especializada acreditada que a empresa contrata para cubrir as disciplinas preventivas", "Un departamento interno da propia empresa", "Un organismo de control público da policía", "Unha mutua de seguros de coches"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O SPA substitúe ou complementa os recursos cando a empresa non dispón de servizo propio nin modalidade designada.", es: "O SPA substitúe ou complementa os recursos cando a empresa non dispón de servizo propio nin modalidade designada." }, tiempo: 30, puntos: 100
          },
          {
            id: 306,
            pregunta: { gl: "Cal é o documento básico que reflicte a planificación da prevención na empresa?", es: "¿Cuál es el documento básico que refleja la planificación de la prevención en la empresa?" },
            opciones: {
              gl: ["O Plan de Prevención de Riscos Laborais", "O libro de contabilidade xeral", "O rexistro de visitas comerciais", "O contrato mercantil de arrendamento"],
              es: ["O Plan de Prevención de Riscos Laborais", "O libro de contabilidade xeral", "O rexistro de visitas comerciais", "O contrato mercantil de arrendamento"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O Plan de Prevención é a ferramenta a través da cal se integra a prevención no sistema xeral de xestión.", es: "O Plan de Prevención é a ferramenta a través da cal se integra a prevención no sistema xeral de xestión." }, tiempo: 30, puntos: 100
          },
          {
            id: 307,
            pregunta: { gl: "Que son os traballadores designados para a prevención?", es: "¿Qué son los trabajadores designados para la prevención?" },
            opciones: {
              gl: ["Traballadores da propia empresa con capacidade e formación adecuada aos que se lles asignan tarefas preventivas", "Empregados externos dunha subcontrata", "Infectores de traballo temporais", "Membros da directiva financeira"],
              es: ["Traballadores da propia empresa con capacidade e formación adecuada aos que se lles asignan tarefas preventivas", "Empregados externos dunha subcontrata", "Infectores de traballo temporais", "Membros da directiva financeira"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Constitúean unha modalidade preventiva interna cando o tamaño da empresa non xustifica un servizo propio.", es: "Constitúean unha modalidade preventiva interna cando o tamaño da empresa non xustifica un servizo propio." }, tiempo: 30, puntos: 100
          },
          {
            id: 308,
            pregunta: { gl: "O Plan de Seguridade e Saúde na Construción é obrigatorio en:", es: "¿El Plan de Seguridad y Salud en la Construcción es obligatorio en:" },
            opciones: {
              gl: ["Obras de construción suxeitas a estudo básico ou proxecto de seguridade", "Calquera reparación doméstica menor", "Soamente na construción de autovías estatais", "No sector naval exclusivamente"],
              es: ["Obras de construción suxeitas a estudo básico ou proxecto de seguridade", "Calquera reparación doméstica menor", "Soamente na construción de autovías estatais", "No sector naval exclusivamente"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O Real Decreto 1627/1997 esixe este plan específico redactado polo contratista a partir do estudo de seguridade.", es: "O Real Decreto 1627/1997 esixe este plan específico redactado polo contratista a partir do estudo de seguridade." }, tiempo: 30, puntos: 100
          },
          {
            id: 309,
            pregunta: { gl: "Cal é o prazo xeral en que debe realizarse a primeira auditoría dun sistema de prevención se a empresa está obrigada?", es: "¿Cuál es el plazo general en que debe realizarse la primera auditoría de un sistema de prevención si la empresa está obligada?" },
            opciones: {
              gl: ["No prazo de 12 meses desde que se dispoña do Plan de Prevención", "Aos 10 anos de actividade", "Soamente cando o ordene o xulgado penal", "Aos 30 días de iniciar o negocio"],
              es: ["No prazo de 12 meses desde que se dispoña do Plan de Prevención", "Aos 10 anos de actividade", "Soamente cando o ordene o xulgado penal", "Aos 30 días de iniciar o negocio"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O RD 39/1997 marca os prazos de control e revisión, debendo auditarse por primeira vez no primeiro ano de vixencia.", es: "O RD 39/1997 marca os prazos de control e revisión, debendo auditarse por primeira vez no primeiro ano de vixencia." }, tiempo: 30, puntos: 100
          },
          {
            id: 310,
            pregunta: { gl: "Que papel xoga a coordinación de actividades empresariais (CAE)?", es: "¿Qué papel juega la coordinación de actividades empresariales (CAE)?" },
            opciones: {
              gl: ["Garantir a aplicación segura da normativa cando traballaran varias empresas nun mesmo centro", "Fixar os prezos de mercado dos materiais", "Xestionar as nóminas conxuntas dos subcontratados", "Organizar eventos festivos corporativos"],
              es: ["Garantir a aplicación segura da normativa cando traballaran varias empresas nun mesmo centro", "Fixar os prezos de mercado dos materiais", "Xestionar as nóminas conxuntas dos subcontratados", "Organizar eventos festivos corporativos"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "A CAE (art. 24 LPRL) obriga ao intercambio de información e instrucións entre empresas concurrentes para evitar accidentes cruzados.", es: "A CAE (art. 24 LPRL) obriga ao intercambio de información e instrucións entre empresas concurrentes para evitar accidentes cruzados." },
            tiempo: 30, puntos: 100
          }
        ]
      },
      {
        id: "m3_ud2",
        titulo: {
          gl: "UD 2: Organismos Públicos relacionados coa Seguridade e Saúde",
          es: "UD 2: Organismos Públicos relacionados con la Seguridad y Salud"
        },
        preguntas: [
          {
            id: 311,
            pregunta: { gl: "Cal é o órgano científico-técnico especializado da Administración Xeral do Estado en materia de PRL?", es: "¿Cuál es el órgano científico-técnico especializado de la Administración General del Estado en materia de PRL?" },
            opciones: {
              gl: ["O Instituto Nacional de Seguridade e Saúde no Traballo (INSST)", "A Inspección de Traballo e Seguridade Social", "A Garda Civil de Tráfico", "A Axencia Tributaria"],
              es: ["O Instituto Nacional de Seguridade e Saúde no Traballo (INSST)", "A Inspección de Traballo e Seguridade Social", "A Garda Civil de Tráfico", "A Axencia Tributaria"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O INSST (antigo INSHT) é o organismo autónomo encargado do asesoramento técnico, investigación e divulgación preventiva.", es: "O INSST (antigo INSHT) é o organismo autónomo encargado do asesoramento técnico, investigación e divulgación preventiva." }, tiempo: 30, puntos: 100
          },
          {
            id: 312,
            pregunta: { gl: "A quen corresponde a función de vixilancia e control do cumprimento da normativa laboral e de PRL con capacidade sancionadora?", es: "¿A quién corresponde la función de vigilancia y control del cumplimiento de la normativa laboral y de PRL con capacidad sancionadora?" },
            opciones: {
              gl: ["Á Inspección de Traballo e Seguridade Social (ITSS)", "Ao INSST exclusivamente", "Aos colexios de médicos", "Ás mutuas de accidentes"],
              es: ["Á Inspección de Traballo e Seguridade Social (ITSS)", "Ao INSST exclusivamente", "Aos colexios de médicos", "Ás mutuas de accidentes"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "A ITSS é a autoridade con potestade inspectora e sancionadora en caso de infraccións de seguridade.", es: "A ITSS é a autoridade con potestade inspectora e sancionadora en caso de infraccións de seguridade." }, tiempo: 30, puntos: 100
          },
          {
            id: 313,
            pregunta: { gl: "Onde se atopa a sede da Axencia Europea para a Seguridade e a Saúde no Traballo (EU-OSHA)?", es: "¿Dónde se encuentra la sede de la Agencia Europea para la Seguridad y la Salud en el Trabajo (EU-OSHA)?" },
            opciones: {
              gl: ["En Bilbao (España)", "En París (Francia)", "En Berlín (Alemaña)", "En Roma (Italia)"],
              es: ["En Bilbao (España)", "En París (Francia)", "En Berlín (Alemaña)", "En Roma (Italia)"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "A axencia comunitaria EU-OSHA ten a súa sede central situada na cidade de Bilbao.", es: "A axencia comunitaria EU-OSHA ten a súa sede central situada na cidade de Bilbao." }, tiempo: 30, puntos: 100
          },
          {
            id: 314,
            pregunta: { gl: "Que organismo internacional especializado da ONU elabora convenios e recomendacións sobre seguridade laboral a nivel mundial?", es: "¿Qué organismo internacional especializado de la ONU elabora convenios y recomendaciones sobre seguridad laboral a nivel mundial?" },
            opciones: {
              gl: ["A Organización Internacional do Traballo (OIT)", "A Organización Mundial da Saúde (OMS)", "A Organización Mundial do Comercio", "O Banco Mundial"],
              es: ["A Organización Internacional do Traballo (OIT)", "A Organización Mundial da Saúde (OMS)", "A Organización Mundial do Comercio", "O Banco Mundial"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "A OIT promove dereitos laborais e seguridade global mediante a aprobación de convenios internacionais.", es: "A OIT promove dereitos laborais e seguridade global mediante a aprobación de convenios internacionais." }, tiempo: 30, puntos: 100
          },
          {
            id: 315,
            pregunta: { gl: "En Galicia, cal é o instituto técnico autónomo da Xunta adscrito á prevención e saúde laboral?", es: "En Galicia, ¿cuál es el instituto técnico autónomo de la Xunta adscrito a la prevención y salud laboral?" },
            opciones: {
              gl: ["O ISSGA (Instituto Galego de Seguridade e Saúde Laboral)", "O SERGAS", "A CRTVG", "O IGAPE"],
              es: ["O ISSGA (Instituto Galego de Seguridade e Saúde Laboral)", "O SERGAS", "A CRTVG", "O IGAPE"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "O ISSGA é o órgano técnico da Xunta de Galicia que fomenta a mellora das condicións de traballo na comunidade.", es: "O ISSGA é o órgano técnico da Xunta de Galicia que fomenta a mellora das condicións de traballo na comunidade." }, tiempo: 30, puntos: 100
          },
          {
            id: 316,
            pregunta: { gl: "Que é a Comisión Nacional de Seguridade e Saúde no Traballo (CNSST)?", es: "¿Qué es la Comisión Nacional de Seguridad y Salud en el Trabajo (CNSST)?" },
            opciones: {
              gl: ["Un órgano colegiado asesor das Administracións Públicas formado por representantes estatais, sindicatos e empresarios", "Un sindicato de traballadores autónomos", "Un tribunal de xustiza laboral", "Un centro de formación de mutuas"],
              es: ["Un órgano colegiado asesor das Administracións Públicas formado por representantes estatais, sindicatos e empresarios", "Un sindicato de traballadores autónomos", "Un tribunal de xustiza laboral", "Un centro de formación de mutuas"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "A CNSST canaliza a participación institucional e o diálogo social en políticas de prevención en España.", es: "A CNSST canaliza a participación institucional e o diálogo social en políticas de prevención en España." }, tiempo: 30, puntos: 100
          },
          {
            id: 317,
            pregunta: { gl: "Qué capacidade especial ten a Inspección de Traballo ante un risco grave e inminente detectado nun centro de obra?", es: "¿Qué capacidad especial tiene la Inspección de Trabajo ante un riesgo grave e inminente detectado en un centro de obra?" },
            opciones: {
              gl: ["Ordenar a paralización inmediata dos traballos", "Conceder vacacións pagadas aos empregados", "Modificar os estatutos da empresa", "Embargar contas bancarias persoalmente"],
              es: ["Ordenar a paralización inmediata dos traballos", "Conceder vacacións pagadas aos empregados", "Modificar os estatutos da empresa", "Embargar contas bancarias persoalmente"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Ante perigo inminente para a vida, os inspectores poden ordenar a paralización instantánea das faenas.", es: "Ante perigo inminente para a vida, os inspectores poden ordenar a paralización instantánea das faenas." }, tiempo: 30, puntos: 100
          },
          {
            id: 318,
            pregunta: { gl: "As Mutuas Colaboradoras coa Seguridade Social colaboran en PRL mediante:", es: "¿Las Mutuas Colaboradoras con la Seguridad Social colaboran en PRL mediante:" },
            opciones: {
              gl: ["O asesoramento, formación e asistencia na xestión de accidentes de traballo e enfermidades profesionais", "O cobro de multas de tráfico", "A emisión de pasaportes laborais", "A xestión de pensións de xubilación ordinaria"],
              es: ["O asesoramento, formación e asistencia na xestión de accidentes de traballo e enfermidades profesionais", "O cobro de multas de tráfico", "A emisión de pasaportes laborais", "A xestión de pensións de xubilación ordinaria"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "As mutuas son entidades privadas asociadas á Seguridade Social que cobren continxencias profesionais e apoian ás empresas asociadas.", es: "As mutuas son entidades privadas asociadas á Seguridade Social que cobren continxencias profesionais e apoian ás empresas asociadas." }, tiempo: 30, puntos: 100
          },
          {
            id: 319,
            pregunta: { gl: "Cal é o propósito principal da Fundación Estatal para a Prevención de Riscos Laborais?", es: "¿Cuál es el propósito principal de la Fundación Estatal para la Prevención de Riesgos Laborales?" },
            opciones: {
              gl: ["Promover accións de redución de sinistralidade e axudas a pequenas empresas en materia preventiva", "Subministrar maquinaria pesada gratuíta", "Organizar torneos deportivos empresariais", "Tramitar visados de estranxeiría"],
              es: ["Promover accións de redución de sinistralidade e axudas a pequenas empresas en materia preventiva", "Subministrar maquinaria pesada gratuíta", "Organizar torneos deportivos empresariais", "Tramitar visados de estranxeiría"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Fomenta a divulgación e a formación en prevención especialmente orientada a autónomos e pemes.", es: "Fomenta a divulgación e a formación en prevención especialmente orientada a autónomos e pemes." }, tiempo: 30, puntos: 100
          },
          {
            id: 320,
            pregunta: { gl: "Que papel xogan os Comités de Seguridade e Saúde autonómicos ou sectoriais?", es: "¿Qué papel juegan los Comités de Seguridad y Salud autonómicos o sectoriales?" },
            opciones: {
              gl: ["Canalizar o debate territorial e sectorial de mellora das condicións de traballo", "Emitir sentenzas penais xudiciais", "Suxerir aumentos de capital de sociedades anónimas", "Dirixir equipos de bomberos municipais"],
              es: ["Canalizar o debate territorial e sectorial de mellora das condicións de traballo", "Emitir sentenzas penais xudiciais", "Suxerir aumentos de capital de sociedades anónimas", "Dirixir equipos de bomberos municipais"]
            },
            respuestaCorrecta: 0,
            explicacion: { gl: "Son foros de participación e estudo descentralizados para adaptar políticas preventivas ás características de cada zona.", es: "Son foros de participación e estudo descentralizados para adaptar políticas preventivas ás características de cada zona." },
            tiempo: 30, puntos: 100
          }
        ]
      }
    ]
  }
];
