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
    titulo: "PRL Challenge Arcade",
    subtitulo: "Capacitación Nivel Básico de Prevención de Riscos Laborais",
    nombreEquipo: "Nome do Equipo ou Alumno",
    codigoSalaOpcional: "Código de Aula (Opcional)",
    entrarJugar: "¡Entrar a Xogar!",
    abrirProyector: "📺 Abrir Modo Proyector Aula",
    equipo: "Equipo",
    puntuacion: "Puntuación",
    pantallaAula: "PRL Arcade • Pantalla Aula",
    instruccionesQR: "Escanea o código QR dende o teu móbil para unirte á competición",
    codigoSala: "Código de Sala",
    accesoQR: "Acceso Rápido Móbil",
    apuntaCamara: "Apunta coa cámara do móbil para entrar directamente ao xogo",
    clasificacionClase: "🏆 Clasificación da Clase",
    esperandoRespuestas: "Esperando respostas dos alumnos...",
    eligeUnidad: "Elixe a Unidade Didáctica ou o Exame Xeral",
    seleccionaTemaDesc: "Selecciona un tema específico ou atrévete co Test Xeral de 50 preguntas",
    testGeneralTitulo: "🔥 TEST XERAL EXAMEN (50 Preguntas Aleatorias)",
    testGeneralDesc: "Preguntas de todo o temario baralladas. Máximo 10 minutos de tempo global.",
    preguntasDisponibles: "preguntas dispoñibles",
    cambiarTema: "⬅️ Cambiar de Tema",
    pregunta: "Pregunta",
    de: "de",
    tiempoGlobal: "⏱️ Tempo Global Exam:",
    seAgototiempo: "⏱️ ¡Agotouse o tempo! Non sumas puntos nesta pregunta.",
    seAgototiempoGlobal: "⏰ ¡Agotáronse os 10 minutos do Examen Xeral!",
    correctoBonus: "🎉 ¡CORRECTO! Sumas",
    puntosBase: "pts base",
    bonusTiempo: "bonus tempo",
    incorrectoRespuesta: "❌ INCORRECTO. A resposta correcta era:",
    unidadCompletada: "🏆 ¡Examen/Unidade completada con éxito!",
    siguientePregunta: "Seguinte Pregunta ➡️",
    volverMenu: "Finalizar e Volver ao Menú (Reset de Puntos) 🔄"
  },
  es: {
    titulo: "PRL Challenge Arcade",
    subtitulo: "Capacitación Nivel Básico de Prevención de Riesgos Laborales",
    nombreEquipo: "Nombre del Equipo o Alumno",
    codigoSalaOpcional: "Código de Aula (Opcional)",
    entrarJugar: "¡Entrar a Jugar!",
    abrirProyector: "📺 Abrir Modo Proyector Aula",
    equipo: "Equipo",
    puntuacion: "Puntuación",
    pantallaAula: "PRL Arcade • Pantalla Aula",
    instruccionesQR: "Escanea el código QR desde tu móvil para unirte a la competición",
    codigoSala: "Código de Sala",
    accesoQR: "Acceso Rápido Móvil",
    apuntaCamara: "Apunta con la cámara del móvil para entrar directamente al juego",
    clasificacionClase: "🏆 Clasificación de la Clase",
    esperandoRespuestas: "Esperando respuestas de los alumnos...",
    eligeUnidad: "Elige la Unidad Didáctica o el Examen General",
    seleccionaTemaDesc: "Selecciona un tema específico o atrévete con el Test General de 50 preguntas",
    testGeneralTitulo: "🔥 TEST GENERAL EXAMEN (50 Preguntas Aleatorias)",
    testGeneralDesc: "Preguntas de todo el temario barajadas. Máximo 10 minutos de tiempo global.",
    preguntasDisponibles: "preguntas disponibles",
    cambiarTema: "⬅️ Cambiar de Tema",
    pregunta: "Pregunta",
    de: "de",
    tiempoGlobal: "⏱️ Tiempo Global Examen:",
    seAgototiempo: "⏱️ ¡Se agotó el tiempo! No sumas puntos en esta pregunta.",
    seAgototiempoGlobal: "⏰ ¡Se agotaron los 10 minutos del Examen General!",
    correctoBonus: "🎉 ¡CORRECTO! Sumas",
    puntosBase: "pts base",
    bonusTiempo: "bonus tiempo",
    incorrectoRespuesta: "❌ INCORRECTO. La respuesta correcta era:",
    unidadCompletada: "🏆 ¡Examen/Unidad completada con éxito!",
    siguientePregunta: "Siguiente Pregunta ➡️",
    volverMenu: "Volver al Menú de Temas (Reset de Puntos) 🔄"
  }
};

export const generarTestGeneral50 = () => {
  let todasLasPreguntas = [];
  TEMARIO_PRL.forEach((mod) => {
    mod.unidades.forEach((ud) => {
      todasLasPreguntas = [...todasLasPreguntas, ...ud.preguntas];
    });
  });
  const barajadas = barajarArray(todasLasPreguntas);
  return barajadas.slice(0, 50);
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
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 102,
            pregunta: { gl: "Cal é o primeiro principio xeral da acción preventiva segundo o art. 15 da LPRL?", es: "¿Cuál es el primer principio general de la acción preventiva según el art. 15 de la LPRL?" },
            opciones: {
              gl: ["Avaliar os riscos que non se poidan evitar", "Combater os riscos na orixe", "Evitar os riscos", "Antepoñer a protección colectiva á individual"],
              es: ["Evaluar los riesgos que no se puedan evitar", "Combatir los riesgos en el origen", "Evitar los riesgos", "Anteponer la protección colectiva a la individual"]
            },
            respuestaCorrecta: 2, tiempo: 30, puntos: 100
          },
          {
            id: 103,
            pregunta: { gl: "Desde o punto de vista técnico-preventivo, que é un accidente de traballo?", es: "Desde el punto de vista técnico-preventivo, ¿qué es un accidente de trabajo?" },
            opciones: {
              gl: ["Toda lesión corporal sufrida con ocasión ou a consecuencia do traballo", "Un suceso anormal, brusco e inesperado que interrompe o traballo e pode causar lesións", "Un deterioro lento e paulatino da saúde por exposición crónica", "Calquera enfermidade contraída no centro de traballo"],
              es: ["Toda lesión corporal sufrida con ocasión o a consecuencia del trabajo", "Un suceso anormal, brusco e inesperado que interrumpe el trabajo y puede causar lesiones", "Un deterioro lento de la salud por exposición crónica", "Cualquier enfermedad contraída en el centro de trabajo"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 104,
            pregunta: { gl: "Que son os accidentes chamados 'in itinere'?", es: "¿Qué son los accidentes llamados 'in itinere'?" },
            opciones: {
              gl: ["Os ocorridos ao desprazarse entre centros de traballo da mesma empresa", "Os producidos no traxecto habitual entre o domicilio e o centro de traballo", "Os sufridos durante as pausas de descanso dentro da xornada", "Os accidentes graves producidos por maquinaria itinerante"],
              es: ["Los ocurridos al desplazarse entre centros de trabajo de la misma empresa", "Los producidos en el trayecto habitual entre el domicilio y el centro de trabajo", "Los sufridos durante las pausas de descanso en la jornada", "Los accidentes graves producidos por maquinaria itinerante"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 105,
            pregunta: { gl: "Que especialidade preventiva busca a adaptación entre o traballo e a persoa?", es: "¿Qué especialidad preventiva busca la adecuación entre el trabajo y la persona?" },
            opciones: {
              gl: ["Hixiene Industrial", "Seguridade no Traballo", "Ergonomía", "Psicoloxía Aplicada"],
              es: ["Higiene Industrial", "Seguridad en el Trabajo", "Ergonomía", "Psicología Aplicada"]
            },
            respuestaCorrecta: 2, tiempo: 30, puntos: 100
          },
          {
            id: 106,
            pregunta: { gl: "Como se consideran a efectos legais as enfermidades derivadas do traballo non incluídas no cadro oficial?", es: "¿Cómo se consideran a efectos legales las enfermedades derivadas del trabajo no incluidas en el cuadro oficial?" },
            opciones: {
              gl: ["Patoloxías comúns", "Accidentes de traballo", "Enfermidades de orixe incerta", "Novedades biolóxicas"],
              es: ["Patologías comunes", "Accidentes de trabajo", "Enfermedades de origen incierto", "Novedades biológicas"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 1061,
            pregunta: { gl: "Que é un 'incidente' ou 'accidente en baleiro' no ámbito laboral?", es: "¿Qué es un 'incidente' o 'accidente en vacío' en el ámbito laboral?" },
            opciones: {
              gl: ["Un accidente grave que non produce baixa médica", "Un suceso imprevisto que non causa lesións nas persoas pero si danos materiais ou perda de tempo", "Un accidente ocorrido fóra das instalacións da empresa", "Un erro administrativo na xestión do parte de baixa"],
              es: ["Un accidente grave que no produce baja médica", "Un suceso imprevisto que no causa lesiones en las personas pero sí daños materiales o pérdida de tiempo", "Un accidente ocurrido fuera de las instalaciones de la empresa", "Un error administrativo en la gestión del parte de baja"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 1062,
            pregunta: { gl: "Que disciplina preventiva ocúpase da identificación e control dos contaminantes ambientais presentes no posto de traballo?", es: "¿Qué disciplina preventiva se ocupa de la identificación y control de los contaminantes ambientales en el puesto?" },
            opciones: {
              gl: ["Seguridade no Traballo", "Hixiene Industrial", "Ergonomía", "Psicosocioloxía"],
              es: ["Seguridad en el Trabajo", "Higiene Industrial", "Ergonomía", "Psicosociología"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 1063,
            pregunta: { gl: "O principio de 'substituír o perigoso polo que entrañe pouco ou ningún perigo' é:", es: "El principio de 'sustituir lo peligroso por lo que entrañe poco o ningún peligro' es:" },
            opciones: {
              gl: ["Un principio básico da acción preventiva (art. 15 LPRL)", "Unha recomendación opcional dos fabricantes", "Un criterio exclusivo da Inspección de Traballo", "Unha norma aplicable só en laboratorios químicos"],
              es: ["Un principio básico de la acción preventiva (art. 15 LPRL)", "Una recomendación opcional de los fabricantes", "Un criterio exclusivo de la Inspección de Trabajo", "Una norma aplicable solo en laboratorios químicos"]
            },
            respuestaCorrecta: 0, tiempo: 30, puntos: 100
          },
          {
            id: 1064,
            pregunta: { gl: "A diferenza principal entre Enfermidade Profesional e Accidente de Traballo é que a Enfermidade Profesional:", es: "La diferencia principal entre Enfermedad Profesional y Accidente de Trabajo es que la Enfermedad Profesional:" },
            opciones: {
              gl: ["Prodúcese de forma brusca e con trauma visible", "Desenvólvese de forma lenta e paulatina por exposición continuada", "Só afecta a traballadores do sector servizos", "Non require asistencia médica especializada"],
              es: ["Se produce de forma brusca y con trauma visible", "Se desarrolla de forma lenta y paulatina por exposición continuada", "Solo afecta a trabajadores del sector servicios", "No requiere asistencia médica especializada"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
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
            id: 107,
            pregunta: { gl: "En que consiste a 'trasposición' dunha Directiva Europea?", es: "¿En qué consiste la 'trasposición' de una Directiva Europea?" },
            opciones: {
              gl: ["En traducila ao castelán sen cambios legais", "En adaptala e convertela nunha norma legal de obrigado cumprimento no país", "En anular os convenios colectivos rexeitados pola UE", "En enviar a lei española ao Consello Europeo para a súa aprobación"],
              es: ["En traducirla al castellano sin cambios legales", "En adaptarla y convertirla en norma legal de obligado cumplimiento en el país", "En anular los convenios colectivos rechazados por la UE", "En enviar la ley española al Consejo Europeo para su aprobación"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 108,
            pregunta: { gl: "A partir de cantos traballadores é obrigatoria a constitución do Comité de Seguridade e Saúde?", es: "¿A partir de cuántos trabajadores es obligatoria la constitución del Comité de Seguridad y Salud?" },
            opciones: {
              gl: ["6 traballadores", "30 traballadores", "50 traballadores", "100 traballadores"],
              es: ["6 trabajadores", "30 trabajadores", "50 trabajadores", "100 trabajadores"]
            },
            respuestaCorrecta: 2, tiempo: 30, puntos: 100
          },
          {
            id: 109,
            pregunta: { gl: "Cantos Delegados de Prevención lle corresponden a unha empresa de entre 50 e 100 traballadores?", es: "¿Cuántos Delegados de Prevención corresponden a una empresa de entre 50 y 100 trabajadores?" },
            opciones: {
              gl: ["1 delegado", "2 delegados", "3 delegados", "4 delegados"],
              es: ["1 delegado", "2 delegados", "3 delegados", "4 delegados"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 110,
            pregunta: { gl: "Que indica o marcado 'CE' estampado sobre un producto ou equipo?", es: "¿Qué indica el marcado 'CE' estampado sobre un producto o equipo?" },
            opciones: {
              gl: ["Que foi fabricado integramente en España", "Que ten unha garantía de calidade de 5 anos", "Que cumpre os requisitos esenciais de seguridade establecidos pola UE", "Que é un Equipo de Protección Individual de Categoría III"],
              es: ["Que ha sido fabricado íntegramente en España", "Que tiene una garantía de calidad de 5 años", "Que cumple los requisitos esenciales de seguridad establecidos por la UE", "Que es un Equipo de Protección Individual de Categoría III"]
            },
            respuestaCorrecta: 2, tiempo: 30, puntos: 100
          },
          {
            id: 111,
            pregunta: { gl: "A Directiva 'Marco' de Seguridade e Saúde (89/391/CEE) foi trasposta ao dereito español mediante:", es: "La Directiva 'Marco' de Seguridad y Salud (89/391/CEE) fue traspuesta al derecho español mediante:" },
            opciones: {
              gl: ["O Estatuto dos Traballadores", "A Lei de Prevención de Riscos Laborais (Lei 31/1995)", "O Regulamento dos Servizos de Prevención", "A Lei Xeral da Seguridade Social"],
              es: ["El Estatuto de los Trabajadores", "La Ley de Prevención de Riesgos Laborales (Ley 31/1995)", "El Reglamento de los Servicios de Prevención", "La Ley General de la Seguridad Social"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 112,
            pregunta: { gl: "Os Delegados de Prevención son os representantes dos traballadores con funcións específicas en materia de:", es: "Los Delegados de Prevención son los representantes de los trabajadores con funciones específicas en materia de:" },
            opciones: {
              gl: ["Negociación de salarios e complementos", "Prevención de riscos no traballo", "Xestión das vacacións e licenzas", "Contratación de persoal eventual"],
              es: ["Negociación de salarios y complementos", "Prevención de riesgos en el trabajo", "Gestión de las vacaciones y licencias", "Contratación de personal eventual"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 113,
            pregunta: { gl: "O Comité de Seguridade e Saúde é un órgano colexiado e paritario destinado á consulta regular e periódica de:", es: "El Comité de Seguridad y Salud es un órgano colegiado y paritario destinado a la consulta regular de:" },
            opciones: {
              gl: ["Las sancións disciplinarias da empresa", "As actuacións da empresa en materia de prevención de riscos", "O reparto de beneficios anuais", "Os horarios dos quendas de noite"],
              es: ["Las sanciones disciplinarias de la empresa", "Las actuaciones de la empresa en materia de prevención de riesgos", "El reparto de beneficios anuales", "Los horarios de los turnos de noche"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 114,
            pregunta: { gl: "Cal é o texto legal fundamental que regula os dereitos e deberes en materia preventiva en España?", es: "¿Cuál es el texto legal fundamental que regula los derechos y deberes en materia preventiva en España?" },
            opciones: {
              gl: ["O Real Decreto 486/1997", "A Lei 31/1995 de Prevención de Riscos Laborais", "A Constitución Española (Art. 10)", "O Código Penal"],
              es: ["El Real Decreto 486/1997", "La Ley 31/1995 de Prevención de Riesgos Laborales", "La Constitución Española (Art. 10)", "El Código Penal"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 115,
            pregunta: { gl: "Que dereito teñen os traballadores ante unha situación de risco grave e inminente no seu posto?", es: "¿Qué derecho tienen los trabajadores ante una situación de riesgo grave e inminente en su puesto?" },
            opciones: {
              gl: ["Abandonar o lugar de traballo sen poder ser sancionados", "Esixir un aumento de salario inmediato", "Modificar unilateralmente os protocolos da empresa", "Solicitar a baixa médica automática de 15 días"],
              es: ["Abandonar el lugar de trabajo sin poder ser sancionados", "Exigir un aumento de salario inmediato", "Modificar unilateralmente los protocolos de la empresa", "Solicitar la baja médica automática de 15 días"]
            },
            respuestaCorrecta: 0, tiempo: 30, puntos: 100
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
              es: ["Contacto directo", "Contacto indirecto", "Contacto de alta tensión", "Derivación galvánica"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 202,
            pregunta: { gl: "Cada canto tempo debe realizarse o retimbrado (comprobación de presión) dun extintor?", es: "¿Cada cuánto tiempo debe realizarse el retimbrado (comprobación de presión) de un extintor?" },
            opciones: {
              gl: ["Cada ano", "Cada 3 anos", "Cada 5 anos (ata un máximo de 3 veces)", "Cada 10 anos"],
              es: ["Cada año", "Cada 3 años", "Cada 5 años (hasta un máximo de 3 veces)", "Cada 10 años"]
            },
            respuestaCorrecta: 2, tiempo: 30, puntos: 100
          },
          {
            id: 203,
            pregunta: { gl: "Para traballos en instalacións eléctricas, cal é a 1ª Regla de Ouro de Seguridade?", es: "Para trabajos en instalaciones eléctricas, ¿cuál es la 1ª Regla de Oro de Seguridad?" },
            opciones: {
              gl: ["Verificar a ausencia de tensión", "Cortar todas as fontes en tensión", "Poñer a terra e en curtocircuíto", "Delimitar e sinalizar a zona"],
              es: ["Verificar la ausencia de tensión", "Cortar todas las fuentes en tensión", "Poner a tierra y en cortocircuito", "Delimitar y señalar la zona"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 204,
            pregunta: { gl: "Que mecanismo desvía a corrente eléctrica cara o terreo en caso de fallo de illamento?", es: "¿Qué mecanismo desvía la corriente eléctrica hacia el terreno en caso de fallo de aislamiento?" },
            opciones: {
              gl: ["Interruptor diferencial", "Posta a terra", "Fusible cerámico", "Envolvente illante"],
              es: ["Interruptor diferencial", "Puesta a tierra", "Fusible cerámico", "Envolvente aislante"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 205,
            pregunta: { gl: "En sinalización de seguridade, que significa a cor AMARELA?", es: "En señalización de seguridad, ¿qué significa el color AMARILLO?" },
            opciones: {
              gl: ["Parada, prohibición ou material de incendios", "Atención, zona de perigo ou sinalización de riscos", "Situación de seguridade ou primeiros auxilios", "Obrigación de uso dun EPI"],
              es: ["Parada, prohibición o material de incendios", "Atención, zona de peligro o señalización de riesgos", "Situación de seguridad o primeros auxilios", "Obligación de uso de un EPI"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 206,
            pregunta: { gl: "En que consiste a 'consignación' dunha máquina antes da súa reparación?", es: "¿En qué consiste la 'consignación' de una máquina antes de su reparación?" },
            opciones: {
              gl: ["En limpar a máquina con disolventes", "En illala das redes e bloquear os interruptores con candeado", "En avisar por escrito ao servizo técnico", "En poñer a máquina a funcionar en baleiro"],
              es: ["En limpiar la máquina con disolventes", "En aislarla de las redes y bloquear los interruptores con candado", "En avisar por escrito al servicio técnico", "En poner la máquina a funcionar en vacío"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 207,
            pregunta: { gl: "Como se chama o recinto con aberturas limitadas e ventilación natural desfavorable onde poden acumularse gases tóxicos?", es: "¿Cómo se llama el recinto con aberturas limitadas y ventilación desfavorable donde pueden acumularse gases tóxicos?" },
            opciones: {
              gl: ["Lugar de traballo illado", "Espazo confinado", "Almacén xeral", "Nave de proceso continuo"],
              es: ["Lugar de trabajo aislado", "Espacio confinado", "Almacén general", "Nave de proceso continuo"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 2071,
            pregunta: { gl: "Un incendio de Clase B é aquel no que o combustible é:", es: "Un incendio de Clase B es aquel en el que el combustible es:" },
            opciones: {
              gl: ["Un sólido orgánico que forma brasas (madeira, papel)", "Un líquido inflamable ou sólido licuable (gasolina, pintura)", "Un gas inflamable (butano, propano)", "Un metal combustible (magnesio, sodi)"],
              es: ["Un sólido orgánico que forma brasas (madera, papel)", "Un líquido inflamable o sólido licuable (gasolina, pintura)", "Un gas inflamable (butano, propano)", "Un metal combustible (magnesio, sodio)"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 2072,
            pregunta: { gl: "Para evitar caídas ao mesmo nivel nos pasillos do centro de traballo é fundamental:", es: "Para evitar caídas al mismo nivel en los pasillos del centro de trabajo es fundamental:" },
            opciones: {
              gl: ["Manter a orde, a limpeza e as vías despexadas", "Instalar redes de seguridade no teito", "Usar casco con barbiqueixo obligatoriamente", "Aumentar a velocidade de paso"],
              es: ["Mantener el orden, la limpieza y las vías despejadas", "Instalar redes de seguridad en el techo", "Usar casco con barboquejo obligatoriamente", "Aumentar la velocidad de paso"]
            },
            respuestaCorrecta: 0, tiempo: 30, puntos: 100
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
            id: 208,
            pregunta: { gl: "Cal é a vía de entrada de contaminantes químicos máis importante no ámbito laboral?", es: "¿Cuál es la vía de entrada de contaminantes químicos más importante en el ámbito laboral?" },
            opciones: {
              gl: ["Vía dérmica", "Vía inhalatoria ou respiratoria", "Vía dixestiva", "Vía parenteral"],
              es: ["Vía dérmica", "Vía inhalatoria o respiratoria", "Vía digestiva", "Vía parenteral"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 209,
            pregunta: { gl: "A partir de que nivel de ruído diario (LAeq,d) é de uso OBRIGATORIO o protector auditivo segundo o RD 1316/1989?", es: "¿A partir de qué nivel de ruido diario (LAeq,d) es de uso OBLIGATORIO el protector auditivo según el RD 1316/1989?" },
            opciones: {
              gl: ["80 dBA", "85 dBA", "90 dBA", "95 dBA"],
              es: ["80 dBA", "85 dBA", "90 dBA", "95 dBA"]
            },
            respuestaCorrecta: 2, tiempo: 30, puntos: 100
          },
          {
            id: 210,
            pregunta: { gl: "Cal é a unidade na que se mide o nivel de iluminación recibido nunha superficie?", es: "¿En qué unidad se mide el nivel de iluminación recibido en una superficie?" },
            opciones: {
              gl: ["Candela por metro cadrado (cd/m2)", "Lux", "Lumen por segundo", "Watt fotométrico"],
              es: ["Candela por metro cuadrado (cd/m2)", "Lux", "Lumen por segundo", "Watt fotométrico"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 211,
            pregunta: { gl: "En cantos grupos se clasifican os axentes biolóxicos segundo o seu perigo de infección e contaxio?", es: "¿En cuántos grupos se clasifican los agentes biológicos según su peligro de infección y contagio?" },
            opciones: {
              gl: ["En 2 categorías", "En 3 niveis", "En 4 grupos (Grupo 1 ao Grupo 4)", "En 5 clases"],
              es: ["En 2 categorías", "En 3 niveles", "En 4 grupos (Grupo 1 al Grupo 4)", "En 5 clases"]
            },
            respuestaCorrecta: 2, tiempo: 30, puntos: 100
          },
          {
            id: 212,
            pregunta: { gl: "Que tamaño teñen as partículas de po ou aerosol que chegan ata o fondo do pulmón?", es: "¿Qué tamaño tienen las partículas de polvo o aerosol que llegan hasta el fondo del pulmón?" },
            opciones: {
              gl: ["Menores de 2 micrómetros (µm)", "Entre 10 e 20 micrómetros", "Superiores a 50 micrómetros", "Calquera partícula visible ao ollo"],
              es: ["Menores de 2 micrómetros (µm)", "Entre 10 y 20 micrómetros", "Superiores a 50 micrómetros", "Cualquier partícula visible al ojo"]
            },
            respuestaCorrecta: 0, tiempo: 30, puntos: 100
          },
          {
            id: 213,
            pregunta: { gl: "O 'dedo branco' ou síndrome de Raynaud ten a súa orixe na exposición a:", es: "El 'dedo blanco' o síndrome de Raynaud tiene su origen en la exposición a:" },
            opciones: {
              gl: ["Radiacións ultravioleta", "Vibracións man-brazo de elevada frecuencia", "Ambientes de frío extremo sen humidade", "Ruidos superiores a 100 dBA"],
              es: ["Radiaciones ultravioleta", "Vibraciones mano-brazo de elevada frecuencia", "Ambientes de frío extremo sin humedad", "Ruidos superiores a 100 dBA"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 214,
            pregunta: { gl: "Que técnica de control ambiental consiste en captar o contaminante no mesmo punto onde se xera?", es: "¿Qué técnica de control ambiental consiste en captar el contaminante en el mismo punto donde se genera?" },
            opciones: {
              gl: ["Ventilación por dilución", "Extracción localizada", "Rotación de persoal", "Uso de alarmas"],
              es: ["Ventilación por dilución", "Extracción localizada", "Rotación de personal", "Uso de alarmas"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 2141,
            pregunta: { gl: "Os efectos das radiacións ionizantes (como os raios X) caracterízanse por:", es: "Los efectos de las radiaciones ionizantes (como los rayos X) se caracterizan por:" },
            opciones: {
              gl: ["Causar só calor superficial na pel", "Poder alterar a estrutura do ADN celular", "Ser inofensivas a calquera dose de exposición", "Producir unicamente fatiga visual temporal"],
              es: ["Causar solo calor superficial en la piel", "Poder alterar la estructura del ADN celular", "Ser inofensivas a cualquier dosis de exposición", "Producir únicamente fatiga visual temporal"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 2142,
            pregunta: { gl: "O golpe de calor é unha urxencia médica grave causada por:", es: "El golpe de calor es una urgencia médica grave causada por:" },
            opciones: {
              gl: ["Un fallo na termorregulación corporal ante altas temperaturas e traballo intenso", "A exposición prolongada a radiacións infrarroxas sen gafas", "A inxestión excesiva de líquidos fríos durante a xornada", "O contacto directo con superficies metálicas conxeladas"],
              es: ["Un fallo en la termorregulación corporal ante altas temperaturas y trabajo intenso", "La exposición prolongada a radiaciones infrarrojas sin gafas", "La ingestión excesiva de líquidos fríos durante la jornada", "El contacto directo con superficies metálicas congeladas"]
            },
            respuestaCorrecta: 0, tiempo: 30, puntos: 100
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
            id: 215,
            pregunta: { gl: "Segundo a Guía Técnica do INSHT, cal é o peso máximo xeral recomendado para a manipulación manual de cargas en condicións óptimas?", es: "Según la Guía Técnica del INSHT, ¿cuál es el peso máximo general recomendado para la manipulación de cargas?" },
            opciones: {
              gl: ["15 kg", "25 kg", "40 kg", "50 kg"],
              es: ["15 kg", "25 kg", "40 kg", "50 kg"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 216,
            pregunta: { gl: "Cando dicimos que un traballo muscular é 'estático'?", es: "¿Cuándo decimos que un trabajo muscular es 'estático'?" },
            opciones: {
              gl: ["Cando hai unha sucesión periódica de tensión e relaxación", "Cando se mantén un esforzo sostido e os músculos permanecen contraídos", "Cando se camiña mentres se transporta un obxecto", "Cando se utilizan ferramentas a motor de baja frecuencia"],
              es: ["Cuando hay una sucesión periódica de tensión y relajación", "Cuando se mantiene un esfuerzo sostenido y los músculos permanecen contraídos", "Cuando se camina mientras se transporta un objeto", "Cuando se utilizan herramientas a motor de baja frecuencia"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 217,
            pregunta: { gl: "Para valorar a penosidade dun traballo dinámico, cal é o criterio máis fiable?", es: "Para valorar la penosidad de un trabajo dinámico, ¿cuál es el criterio más fiable?" },
            opciones: {
              gl: ["A frecuencia cardíaca", "O consumo enerxético (quilocalorías)", "A presión arterial sistólica", "O número de pausas realizadas"],
              es: ["La frecuencia cardíaca", "El consumo energético (kilocalorías)", "La presión arterial sistólica", "El número de pausas realizadas"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 218,
            pregunta: { gl: "Como se chama a diminución da capacidade física e mental do traballador por sobrecarga prolongada?", es: "¿Cómo se llama la disminución de la capacidad física y mental del trabajador por sobrecarga prolongada?" },
            opciones: {
              gl: ["Insatisfacción laboral", "Fatiga", "Estrés por frío", "Burnout estacional"],
              es: ["Insatisfacción laboral", "Fatiga", "Estrés por frío", "Burnout estacional"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 219,
            pregunta: { gl: "Para levantar unha carga do chan de forma correcta debemos:", es: "Para levantar una carga del suelo de forma correcta debemos:" },
            opciones: {
              gl: ["Dobrar o lombo mantendo as pernas estiradas", "Facer xiros de tronco mentres se levanta a carga", "Dobrar os xeonllos, manter o lombo recto e a carga pega á corpo", "Cargar todo o peso sobre un único brazo"],
              es: ["Doblar la espalda manteniendo las piernas estiradas", "Hacer giros de tronco mientras se levanta la carga", "Doblar las rodillas, mantener la espalda recta y la carga pegada al cuerpo", "Cargar todo el peso sobre un único brazo"]
            },
            respuestaCorrecta: 2, tiempo: 30, puntos: 100
          },
          {
            id: 220,
            pregunta: { gl: "A insatisfacción laboral atópase orixinada principalmente por:", es: "La insatisfacción laboral se encuentra originada principalmente por:" },
            opciones: {
              gl: ["Problemas de iluminación no puesto", "Factores da organización do traballo e psicosociais", "Falta de uso de Equipos de Protección Individual", "Temperaturas ambiente extremas"],
              es: ["Problemas de iluminación en el puesto", "Factores de la organización del trabajo y psicosociales", "Falta de uso de Equipos de Protección Individual", "Temperaturas ambiente extremas"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 2201,
            pregunta: { gl: "A carga mental de traballo vén determinada fundamentalmente por:", es: "La carga mental de trabajo viene determinada fundamentalmente por:" },
            opciones: {
              gl: ["O peso dos obxectos manipulados na xornada", "A cantidade de información que debe procesarse e o tempo dispoñible para respondela", "O nivel de ruido ambiental medido en dBA", "A calidade do calzado de seguridade proporcionado"],
              es: ["El peso de los objetos manipulados en la jornada", "La cantidad de información que debe procesarse y el tiempo disponible para responderla", "El nivel de ruido ambiental medido en dBA", "La calidad del calzado de seguridad proporcionado"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 2202,
            pregunta: { gl: "A síndrome de estar queimado no traballo coñécese tecnicamente como:", es: "El síndrome de estar quemado en el trabajo se conoce técnicamente como:" },
            opciones: {
              gl: ["Estrés térmico por radiación", "Síndrome de Burnout", "Ergonomía preventiva", "Fatiga muscular aguda"],
              es: ["Estrés térmico por radiación", "Síndrome de Burnout", "Ergonomía preventiva", "Fatiga muscular aguda"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
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
            id: 221,
            pregunta: { gl: "Os Equipos de Protección Individual (EPI) destinados a protexer contra riscos mortais ou irreversible pertencen á:", es: "Los Equipos de Protección Individual (EPI) destinados a proteger contra riesgos mortales o irreversibles pertenecen a la:" },
            opciones: {
              gl: ["Categoría I", "Categoría II", "Categoría III", "Categoría Especial"],
              es: ["Categoría I", "Categoría II", "Categoría III", "Categoría Especial"]
            },
            respuestaCorrecta: 2, tiempo: 30, puntos: 100
          },
          {
            id: 222,
            pregunta: { gl: "Cal é a diferenza fundamental entre Protección Colectiva e Protección Individual?", es: "¿Cuál es la diferencia fundamental entre Protección Colectiva y Protección Individual?" },
            opciones: {
              gl: ["A colectiva elimina o risco e a individual aumenta a produtividade", "A colectiva protexe a varias persoas simultaneamente e a individual protexe só ao usuario", "A colectiva só se usa en construción e a individual en oficinas", "Non hai diferenza, ambos termos son sinónimos segundo a LPRL"],
              es: ["La colectiva elimina el riesgo y la individual aumenta la productividad", "La colectiva protege a varias personas simultáneamente y la individual protege solo al usuario", "La colectiva solo se usa en construcción y la individual en oficinas", "No hay diferencia, ambos términos son sinónimos según la LPRL"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 223,
            pregunta: { gl: "Cando deben utilizarse os Equipos de Protección Individual (EPI)?", es: "¿Cuándo deben utilizarse los Equipos de Protección Individual (EPI)?" },
            opciones: {
              gl: ["Sempre, antes de avaliar os riscos do posto", "Cando os riscos non se poidan evitar por medios de protección colectiva", "Soamente cando o traballador o solicite voluntariamente", "En canto o Inspector de Traballo visite a empresa"],
              es: ["Siempre, antes de evaluar los riesgos del puesto", "Cuando los riesgos no se puedan evitar por medios de protección colectiva", "Solamente cuando el trabajador lo solicite voluntariamente", "En cuanto el Inspector de Trabajo visite la empresa"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 224,
            pregunta: { gl: "Cal dos seguintes elementos é un medio de PROTECCIÓN COLECTIVA?", es: "¿Cuál de los siguientes elementos es un medio de PROTECCIÓN COLECTIVA?" },
            opciones: {
              gl: ["Calzado con puntera de aceiro", "Máscara autofiltrante FFP3", "Sistema de extracción localizada", "Guantes de neopreno"],
              es: ["Calzado con puntera de acero", "Mascarilla autofiltrante FFP3", "Sistema de extracción localizada", "Guantes de neopreno"]
            },
            respuestaCorrecta: 2, tiempo: 30, puntos: 100
          },
          {
            id: 225,
            pregunta: { gl: "Legalmente, que supón utilizar un EPI non certificado (sen marcado CE) ou caducado?", es: "Legalmente, ¿qué supone utilizar un EPI no certificado (sin marcado CE) o caducado?" },
            opciones: {
              gl: ["Unha falta leve do traballador", "Equivale a non usar ningunha protección", "Unha recomendación do fabricante", "Un desconto do 10% no prezo do equipo"],
              es: ["Una falta leve del trabajador", "Equivale a no usar ninguna protección", "Una recomendación del fabricante", "Un descuento del 10% en el precio del equipo"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 2251,
            pregunta: { gl: "Un casco de seguridade e unhas botas con puntera reforzada pertencen á categoría de EPIs de:", es: "Un casco de seguridad y unas botas con puntera reforzada pertenecen a la categoría de EPIs de:" },
            opciones: {
              gl: ["Categoría I (Riscos mínimos)", "Categoría II (Riscos intermedios)", "Categoría III (Riscos graves ou mortais)", "Categoría IV"],
              es: ["Categoría I (Riesgos mínimos)", "Categoría II (Riesgos intermedios)", "Categoría III (Riesgos graves o mortales)", "Categoría IV"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 2252,
            pregunta: { gl: "Quen ten a obrigación legal de proporcionar gratuítamente os EPIs aos traballadores?", es: "¿Quién tiene la obligación legal de proporcionar gratuitamente los EPIs a los trabajadores?" },
            opciones: {
              gl: ["O propio traballador", "O empresario", "O Servizo Público de Emprego", "O Comité de Empresa"],
              es: ["El propio trabajador", "El empresario", "El Servicio Público de Empleo", "El Comité de Empresa"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
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
            id: 226,
            pregunta: { gl: "Unha emerxencia que pode ser neutralizada cos medios do lugar polo persoal presente é un:", es: "Una emergencia que puede ser neutralizada con los medios del lugar por el personal presente es un:" },
            opciones: {
              gl: ["Conato de emerxencia", "Emerxencia parcial", "Emerxencia xeral", "Evacuación preventiva"],
              es: ["Conato de emergencia", "Emergencia parcial", "Emergencia general", "Evacuación preventiva"]
            },
            respuestaCorrecta: 0, tiempo: 30, puntos: 100
          },
          {
            id: 227,
            pregunta: { gl: "Como se chaman os grupos de traballadores con formación avanzada para a loita directa (bombeiros da empresa)?", es: "¿Cómo se llaman los grupos de trabajadores con formación avanzada para la lucha directa?" },
            opciones: {
              gl: ["Equipos de Primeira Intervención (EPI)", "Equipos de Segunda Intervención (ESI)", "Equipos de Alarma e Evacuación (EAE)", "Equipos de Primeiros Auxilios (EPA)"],
              es: ["Equipos de Primera Intervención (EPI)", "Equipos de Segunda Intervención (ESI)", "Equipos de Alarma y Evacuación (EAE)", "Equipos de Primeros Auxilios (EPA)"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 228,
            pregunta: { gl: "Cantas veces ao ano se deben realizar como mínimo os simulacros de emerxencia?", es: "¿Cuántas veces al año se deben realizar como mínimo los simulacros de emergencia?" },
            opciones: {
              gl: ["1 vez ao ano", "2 veces ao ano", "4 veces ao ano", "Cada 2 anos"],
              es: ["1 vez al año", "2 veces al año", "4 veces al año", "Cada 2 años"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 229,
            pregunta: { gl: "A diferenza entre o Plan de Evacuación e o Plan de Emerxencia Interior (PEI) é que o de evacuación:", es: "La diferencia entre el Plan de Evacuación y el Plan de Emergencia Interior (PEI) es que el de evacuación:" },
            opciones: {
              gl: ["Protexe só ás instalacións", "Protexe unicamente ás persoas", "Só se aplica en caso de terremoto", "Substitúe ao Plan de Autoprotección"],
              es: ["Protege solo a las instalaciones", "Protege únicamente a las personas", "Solo se aplica en caso de terremoto", "Sustituye al Plan de Autoprotección"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 230,
            pregunta: { gl: "Ante unha orde de evacuación nun edificio de varias plantas, NUNCA debemos utilizar:", es: "Ante una orden de evacuación en un edificio de varias plantas, NUNCA debemos utilizar:" },
            opciones: {
              gl: ["As vías de evacuación sinalizadas", "As escaleiras exteriores de emerxencia", "Os ascensores ou montacargas", "Os puntos de reunión exteriores"],
              es: ["Las vías de evacuación señalizadas", "Las escaleras exteriores de emergencia", "Los ascensores o montacargas", "Los puntos de reunión exteriores"]
            },
            respuestaCorrecta: 2, tiempo: 30, puntos: 100
          },
          {
            id: 2301,
            pregunta: { gl: "O Punto de Encontro ou Reunión nunha evacuación ten como finalidade principal:", es: "El Punto de Encuentro o Reunión en una evacuación tiene como finalidad principal:" },
            opciones: {
              gl: ["Recoller as pertenzas persoais esquecidas", "Recompoñer os grupos e verificar se falta algunha persoa", "Atender ás chamadas telefónicas da familia", "Esperar a que o lume se apague solo"],
              es: ["Recoger las pertenencias personales olvidadas", "Recomponer los grupos y verificar si falta alguna persona", "Atender a las llamadas telefónicas de la familia", "Esperar a que el fuego se apague solo"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 2302,
            pregunta: { gl: "Unha emerxencia xeral require a intervención de:", es: "Una emergencia general requiere la intervención de:" },
            opciones: {
              gl: ["Exclusivamente os servizos de mantemento da planta", "Todos os equipos de emerxencia propios e a axuda de medios externos (bombeiros, ambulancias)", "Unicamente do Delegado de Prevención de garda", "Do Director Xeral da empresa de xeito presencial"],
              es: ["Exclusivamente los servicios de mantenimiento de la planta", "Todos los equipos de emergencia propios y la ayuda de medios externos (bomberos, ambulancias)", "Únicamente del Delegado de Prevención de guardia", "Del Director General de la empresa de forma presencial"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
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
            id: 231,
            pregunta: { gl: "Na exploración primaria dos signos vitais dun accidentado, cal é a orde correcta?", es: "En la exploración primaria de los signos vitales de un accidentado, ¿cuál es el orden correcto?" },
            opciones: {
              gl: ["Pulso -> Conciencia -> Respiración", "Respiración -> Pulso -> Conciencia", "Conciencia -> Respiración -> Pulso", "Conciencia -> Pulso -> Hemorraxias"],
              es: ["Pulso -> Conciencia -> Respiración", "Respiración -> Pulso -> Conciencia", "Conciencia -> Respiración -> Pulso", "Conciencia -> Pulso -> Hemorragias"]
            },
            respuestaCorrecta: 2, tiempo: 30, puntos: 100
          },
          {
            id: 232,
            pregunta: { gl: "En que posición debemos colocar a un paciente inconsciente que SI respira e NON é traumático?", es: "¿En qué posición debemos colocar a un paciente inconsciente que SÍ respira y NO es traumático?" },
            opciones: {
              gl: ["Decúbito supino", "Posición Lateral de Seguridade (PLS)", "Posición de Trendelenburg", "Semisentado"],
              es: ["Decúbito supino", "Posición Lateral de Seguridad (PLS)", "Posición de Trendelenburg", "Semisentado"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 233,
            pregunta: { gl: "Cal é o ritmo de Reanimación Cardiopulmonar (RCP) para un único socorrista nun adulto?", es: "¿Cuál es el ritmo de Reanimación Cardiopulmonar (RCP) para un único socorrista en un adulto?" },
            opciones: {
              gl: ["5 compresións e 1 insuflación", "15 compresións e 2 insuflacións", "30 compresións e 2 insuflacións", "10 compresións e 5 insuflacións"],
              es: ["5 compresiones y 1 insuflación", "15 compresiones y 2 insuflaciones", "30 compresiones y 2 insuflaciones", "10 compresiones y 5 insuflaciones"]
            },
            respuestaCorrecta: 2, tiempo: 30, puntos: 100
          },
          {
            id: 234,
            pregunta: { gl: "Cal é o PRIMEIRO método que se debe empregar para deter unha hemorraxia externa nunha extremidade?", es: "¿Cuál es el PRIMER método que se debe emplear para detener una hemorragia externa en una extremidad?" },
            opciones: {
              gl: ["Aplicación dun torniquete", "Compresión directa sobre o punto de sangrado e elevación", "Compresión arterial na ingua", "Lavado abundante con alcohol"],
              es: ["Aplicación de un torniquete", "Compresión directa sobre el punto de sangrado y elevación", "Compresión arterial en la ingle", "Lavado abundante con alcohol"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 235,
            pregunta: { gl: "Cando pode un socorrista afrouxar un torniquete xa colocado?", es: "¿Cuándo puede un socorrista aflojar un torniquete ya colocado?" },
            opciones: {
              gl: ["Cada 10 minutos para que circule o sangue", "Cando a vítima diga que lle doe", "Endexamais: só debe afrouxalo o persoal médico", "Cando cese a hemorraxia visible"],
              es: ["Cada 10 minutos para que circule la sangre", "Cuando la víctima diga que le duele", "Jamás: solo debe aflojarlo el personal médico", "Cuando cese la hemorragia visible"]
            },
            respuestaCorrecta: 2, tiempo: 30, puntos: 100
          },
          {
            id: 236,
            pregunta: { gl: "Se despois dun golpe na cabeza o accidentado sangra polo oído (otorraxia), que debemos facer?", es: "Si tras un golpe en la cabeza el accidentado sangra por el oído (otorragia), ¿qué debemos hacer?" },
            opciones: {
              gl: ["Taponar o oído con gasas apertadas", "Non deter a hemorraxia e hixienizar a zona inclinando a cabeza cara o lado que sangra", "Lavar o oído con auga osixenada a presión", "Aplicar un torniquete no pescozo"],
              es: ["Taponar el oído con gasas apretadas", "No detener la hemorragia e higienizar la zona inclinando la cabeza hacia el lado que sangra", "Lavar el oído con agua oxigenada a presión", "Aplicar un torniquete en el cuello"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 237,
            pregunta: { gl: "Que significa a regra PAS en emerxencias?", es: "¿Qué significa la regla PAS en emergencias?" },
            opciones: {
              gl: ["Previr, Atender, Sanar", "Protexer, Avisar, Socorrer", "Parar, Auxiliar, Solucionar", "Prontitude, Atención, Seguridade"],
              es: ["Prevenir, Atender, Sanar", "Proteger, Avisar, Socorrer", "Parar, Auxiliar, Solucionar", "Prontitud, Atención, Seguridad"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 2371,
            pregunta: { gl: "Ante unha queimadura química producida por contacto con ácido en la pel debemos:", es: "Ante una quemadura química producida por contacto con ácido en la piel debemos:" },
            opciones: {
              gl: ["Aplicar crema hidratante ou graxa de inmediato", "Lavar a zona con auga abundante a baixa presión durante polo menos 15-20 minutos", "Cubrir con algodón seco apertado", "Aplicar alcohol para neutralizar o ácido"],
              es: ["Aplicar crema hidratante o grasa de inmediato", "Lavar la zona con agua abundante a baja presión durante al menos 15-20 minutos", "Cubrir con algodón seco apretado", "Aplicar alcohol para neutralizar el ácido"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
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
            id: 238,
            pregunta: { gl: "Cal é o carácter xeral da Vixilancia da Saúde segundo o artigo 22 da LPRL?", es: "¿Cuál es el carácter general de la Vigilancia de la Salud según el artículo 22 de la LPRL?" },
            opciones: {
              gl: ["Obrigatorio en absolutamente tódolos casos", "Voluntaria, salvocepcións legais ou avaliación indispensable", "Decidida exclusivamente polos Representantes dos Traballadores", "Obrigatoria só para maiores de 50 anos"],
              es: ["Obligatorio en absolutamente todos los casos", "Voluntaria, salvo excepciones legales o evaluación indispensable", "Decidida exclusivamente por los Representantes de los Trabajadores", "Obligatoria solo para mayores de 50 años"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 239,
            pregunta: { gl: "Pode o empresario coñecer os resultados médicos concretos dun recoñecemento sen consentimento do traballador?", es: "¿Puede el empresario conocer los resultados médicos concretos de un reconocimiento sin consentimiento?" },
            opciones: {
              gl: ["Sí, sempre ten acceso ao historial completo", "Non, só recibe as conclusións de APTITUDE e mellora de medidas", "Sí, pero só se a empresa ten máis de 50 traballadores", "Unicamente en caso de baixa médica por accidente"],
              es: ["Sí, siempre tiene acceso al historial completo", "No, solo recibe las conclusiones de APTITUD y mejora de medidas", "Sí, pero solo si la empresa tiene más de 50 trabajadores", "Únicamente en caso de baja médica por accidente"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 240,
            pregunta: { gl: "Quen debe pagar o custo económico dos recoñecementos de Vixilancia da Saúde?", es: "¿Quién debe pagar el coste económico de los reconocimientos de Vigilancia de la Salud?" },
            opciones: {
              gl: ["O traballador ao 50%", "A Seguridade Social", "O empresario (debe ser totalmente gratuíto para o traballador)", "O Comité de Empresa"],
              es: ["El trabajador al 50%", "La Seguridad Social", "El empresario (debe ser totalmente gratuito para el trabajador)", "El Comité de Empresa"]
            },
            respuestaCorrecta: 2, tiempo: 30, puntos: 100
          },
          {
            id: 241,
            pregunta: { gl: "Os recoñecementos médicos de Vixilancia da Saúde deben realizarse:", es: "Los reconocimientos médicos de Vigilancia de la Salud deben realizarse:" },
            opciones: {
              gl: ["Fora da xornada laboral sen compensación", "Dentro da xornada laboral ou descontando o tempo invertido", "Unicamente os fins de semana", "Durante as vacacións anuais do traballador"],
              es: ["Fuera de la jornada laboral sin compensación", "Dentro de la jornada laboral o descontando el tiempo invertido", "Únicamente los fines de semana", "Durante las vacaciones anuales del trabajador"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 242,
            pregunta: { gl: "En que casos se pode prolongar a Vixilancia da Saúde máis alá da relación laboral?", es: "¿En qué casos se puede prolongar la Vigilancia de la Salud más allá de la relación laboral?" },
            opciones: {
              gl: ["En ningún caso tras a baixa na empresa", "Cando se estivera exposto a axentes cancérxenos ou efectos a longo prazo", "Cando o traballador o solicite para cobrar o desemprego", "Só en empresas de máis de 500 traballadores"],
              es: ["En ningún caso tras la baja en la empresa", "Cuando se estuviera expuesto a agentes cancerígenos o efectos a largo plazo", "Cuando el trabajador lo solicite para cobrar el desempleo", "Solo en empresas de más de 500 trabajadores"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 2421,
            pregunta: { gl: "A documentación médica derivada da Vixilancia da Saúde debe ser custodiada por:", es: "La documentación médica derivada de la Vigilancia de la Salud debe ser custodiada por:" },
            opciones: {
              gl: ["El departamento de Recursos Humanos de la empresa", "El personal sanitario del servicio de prevención", "La Inspección de Trabajo", "El sindicato mayoritario"],
              es: ["El departamento de Recursos Humanos de la empresa", "El personal sanitario del servicio de prevención", "La Inspección de Trabajo", "El sindicato mayoritario"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
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
            pregunta: { gl: "As empresas con máis de cantos traballadores deben constituír un Servizo de Prevención Propio?", es: "¿Las empresas con más de cuántos trabajadores deben constituir un Servicio de Prevención Propio?" },
            opciones: {
              gl: ["100 traballadores", "250 traballadores", "500 traballadores", "1000 traballadores"],
              es: ["100 trabajadores", "250 trabajadores", "500 trabajadores", "1000 trabajadores"]
            },
            respuestaCorrecta: 2, tiempo: 30, puntos: 100
          },
          {
            id: 302,
            pregunta: { gl: "Cando pode o empresario asumir persoalmente a actividade preventiva?", es: "¿Cuándo puede el empresario asumir personalmente la actividad preventiva?" },
            opciones: {
              gl: ["En empresas de ata 100 traballadores", "Cando a empresa teña menos de 6 traballadores e non sexa actividade do Anexo I", "Cando o decida a Asemblea de Traballadores", "Nunca, a lei prohíbeo categoricamente"],
              es: ["En empresas de hasta 100 trabajadores", "Cuando la empresa tenga menos de 6 trabajadores y no sea actividad del Anexo I", "Cuando lo decida la Asamblea de Trabajadores", "Nunca, la ley lo prohíbe categóricamente"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 303,
            pregunta: { gl: "Que é unha auditoría do Sistema de Xestión da Prevención?", es: "¿Qué es una auditoría del Sistema de Gestión de la Prevención?" },
            opciones: {
              gl: ["Unha inspección da Policia Local", "Unha avaliación sistemática, periódica e obxectiva da eficacia do sistema", "Unha revisión médica de todos os operarios", "Unha recarga periódica de extintores"],
              es: ["Una inspección de la Policía Local", "Una evaluación sistemática, periódica y objetiva de la eficacia del sistema", "Una revisión médica de todos los operarios", "Una recarga periódica de extintores"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 304,
            pregunta: { gl: "Pode o empresario que asume a prevención realizar persoalmente a Vixilancia da Saúde?", es: "¿Puede el empresario que asume la prevención realizar personalmente la Vigilancia de la Salud?" },
            opciones: {
              gl: ["Sí, se fai un curso de 30 horas", "Non, a Vixilancia da Saúde debe cubrise por persoal sanitario cualificado", "Sí, en empresas de menos de 3 traballadores", "Unicamente se é un centro de oficinas"],
              es: ["Sí, si hace un curso de 30 horas", "No, la Vigilancia de la Salud debe cubrirse por personal sanitario cualificado", "Sí, en empresas de menos de 3 trabajadores", "Únicamente si es un centro de oficinas"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 305,
            pregunta: { gl: "Como se chama o documento básico que describe o sistema de xestión adoptado pola empresa?", es: "¿Cómo se llama el documento básico que describe el sistema de gestión adoptado por la empresa?" },
            opciones: {
              gl: ["Manual de Prevención de Riscos Laborais", "Libro de Visitas", "Parte de Accidentes", "Convenio Colectivo"],
              es: ["Manual de Prevención de Riesgos Laborales", "Libro de Visitas", "Parte de Accidentes", "Convenio Colectivo"]
            },
            respuestaCorrecta: 0, tiempo: 30, puntos: 100
          },
          {
            id: 3051,
            pregunta: { gl: "Un Servizo de Prevención Alleo (SPA) é unha entidade especializada concertada pola empresa cando:", es: "Un Servicio de Prevención Ajeno (SPA) es una entidad especializada concertada por la empresa cuando:" },
            opciones: {
              gl: ["A empresa non asume a prevención nin constitúe un servizo propio ou designado", "Soamente en empresas de máis de 1000 traballadores", "Unicamente para tramitar baixas médicas", "A Inspección de Traballo impón unha sanción grave"],
              es: ["La empresa no asume la prevención ni constituye un servicio propio o designado", "Solamente en empresas de más de 1000 trabajadores", "Únicamente para tramitar bajas médicas", "La Inspección de Trabajo impone una sanción grave"]
            },
            respuestaCorrecta: 0, tiempo: 30, puntos: 100
          },
          {
            id: 3052,
            pregunta: { gl: "A Avaliación de Riscos Laborais debe revisarse obligatoriamente cando:", es: "La Evaluación de Riesgos Laborales debe revisarse obligatoriamente cuando:" },
            opciones: {
              gl: ["Cambien as condicións de traballo ou se introduzan novas maquinarias/equipos", "Cambie a directiva do sindicato", "Cada 6 meses de xeito rutinario sen cambios", "Solo cando o decida a Policía Nacional"],
              es: ["Cambien las condiciones de trabajo o se introduzcan nuevas maquinarias/equipos", "Cambie la directiva del sindicato", "Cada 6 meses de forma rutinaria sin cambios", "Solo cuando lo decida la Policía Nacional"]
            },
            respuestaCorrecta: 0, tiempo: 30, puntos: 100
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
            id: 306,
            pregunta: { gl: "Cal é o órgano científico-técnico especializado da Administración Xeral do Estado en prevención?", es: "¿Cuál es el órgano científico-técnico especializado de la Administración General del Estado en prevención?" },
            opciones: {
              gl: ["Inspección de Traballo e Seguridade Social (ITSS)", "Comisión Nacional de Seguridade e Saúde no Traballo (CNSST)", "Instituto Nacional de Seguridade e Hixiene no Traballo (INSHT)", "Axencia Europea para a Seguridade e Saúde"],
              es: ["Inspección de Trabajo y Seguridad Social (ITSS)", "Comisión Nacional de Seguridad y Salud en el Trabajo (CNSST)", "Instituto Nacional de Seguridad e Higiene en el Trabajo (INSHT)", "Agencia Europea para la Seguridad y Salud"]
            },
            respuestaCorrecta: 2, tiempo: 30, puntos: 100
          },
          {
            id: 307,
            pregunta: { gl: "A quen lle corresponde a función de vixilancia e control do cumprimento da normativa sobre PRL con potestade sancionadora?", es: "¿A quién corresponde la función de vigilancia y control del cumplimiento de la normativa sobre PRL con potestad sancionadora?" },
            opciones: {
              gl: ["Ao INSHT", "Á Inspección de Traballo e Seguridade Social", "Ao Comité de Seguridade e Saúde", "Ás Mutuas de Accidentes"],
              es: ["Al INSHT", "A la Inspección de Trabajo y Seguridad Social", "Al Comité de Seguridad y Salud", "A las Mutuas de Accidentes"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 308,
            pregunta: { gl: "Onde se atopa a sede da Axencia Europea para a Seguridade e Saúde no Traballo?", es: "¿Dónde se encuentra la sede de la Agencia Europea para la Seguridad y Salud en el Trabajo?" },
            opciones: {
              gl: ["En Xenebra (Suíza)", "En Bilbao (España)", "En Dublín (Irlanda)", "En Bruxelas (Bélxica)"],
              es: ["En Ginebra (Suiza)", "En Bilbao (España)", "En Dublín (Irlanda)", "En Bruselas (Bélgica)"]
            },
            respuestaCorrecta: 1, tiempo: 30, puntos: 100
          },
          {
            id: 309,
            pregunta: { gl: "Que organismo internacional elabora e aproba os Convenios sobre seguridade no traballo a nivel mundial?", es: "¿Qué organismo internacional elabora y aprueba los Convenios sobre seguridad en el trabajo a nivel mundial?" },
            opciones: {
              gl: ["A Organización Internacional do Traballo (OIT)", "A Unión Europea", "A OMS", "A Comisión Nacional de PRL"],
              es: ["La Organización Internacional del Trabajo (OIT)", "La Unión Europea", "La OMS", "La Comisión Nacional de PRL"]
            },
            respuestaCorrecta: 0, tiempo: 30, puntos: 100
          },
          {
            id: 310,
            pregunta: { gl: "Que órgano da Administración ten a potestade de ordenar a paralización inmediata de traballos ante un risco grave e inminente?", es: "¿Qué órgano de la Administración tiene la potestad de ordenar la paralización inmediata de trabajos ante un riesgo grave?" },
            opciones: {
              gl: ["A Inspección de Traballo e Seguridade Social", "O INSHT", "A Axencia Europea", "A Fundación para a Prevención"],
              es: ["La Inspección de Trabajo y Seguridad Social", "El INSHT", "La Agencia Europea", "La Fundación para la Prevención"]
            },
            respuestaCorrecta: 0, tiempo: 30, puntos: 100
          },
          {
            id: 3101,
            pregunta: { gl: "En Galicia, o órgano técnico especializado da Xunta de Galicia en materia de seguridade e saúde laboral é o:", es: "En Galicia, el órgano técnico especializado de la Xunta en materia de seguridad y salud laboral es el:" },
            opciones: {
              gl: ["ISSGA (Instituto Galego de Seguridade e Saúde Laboral)", "INSHT", "Servizo Galego de Saúde (SERGAS)", "Consello Económico e Social"],
              es: ["ISSGA (Instituto Galego de Seguridade e Saúde Laboral)", "INSHT", "Servizo Galego de Saúde (SERGAS)", "Consello Económico e Social"]
            },
            respuestaCorrecta: 0, tiempo: 30, puntos: 100
          },
          {
            id: 3102,
            pregunta: { gl: "A Comisión Nacional de Seguridade e Saúde no Traballo (CNSST) é un órgano colexiado asesor formado por:", es: "La Comisión Nacional de Seguridad y Salud en el Trabajo (CNSST) es un órgano colegiado asesor formado por:" },
            opciones: {
              gl: ["Representantes da Administración Xeral, Comunidades Autónomas, Organizacións Empresariais e Sindicatos", "Exclusivamente inspectores de traballo en activo", "Médicos especialistas de mutuas de accidentes", "Representantes do Parlamento Europeo"],
              es: ["Representantes de la Administración General, Comunidades Autónomas, Organizaciones Empresariales y Sindicatos", "Exclusivamente inspectores de trabajo en activo", "Médicos especialistas de mutuas de accidentes", "Representantes del Parlamento Europeo"]
            },
            respuestaCorrecta: 0, tiempo: 30, puntos: 100
          }
        ]
      }
    ]
  }
];