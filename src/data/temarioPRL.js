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
    eligeUnidad: "Elixe a Unidade Didáctica ou o Exame General",
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
            pregunta: {
              gl: "Como define a Organización Mundial da Saúde (OMS) o concepto de 'Saúde'?",
              es: "¿Cómo define la Organización Mundial de la Salud (OMS) el concepto de 'Salud'?"
            },
            opciones: {
              gl: [
                "A simple ausencia de dano ou enfermidade corporal",
                "O estado de benestar físico, mental e social completo",
                "A capacidade de traballar sen sufrir baixas médicas",
                "O equilibrio biolóxico fronte a contaminantes químicos"
              ],
              es: [
                "La simple ausencia de daño o enfermedad corporal",
                "El estado de bienestar físico, mental y social completo",
                "La capacidad de trabajar sin sufrir bajas médicas",
                "El equilibrio biológico frente a contaminantes químicos"
              ]
            },
            respuestaCorrecta: 1,
            tiempo: 30,
            puntos: 100
          },
          {
            id: 102,
            pregunta: {
              gl: "Cal é o primeiro principio xeral da acción preventiva segundo o art. 15 da LPRL?",
              es: "¿Cuál es el primer principio general de la acción preventiva según el art. 15 de la LPRL?"
            },
            opciones: {
              gl: [
                "Avaliar os riscos que non se poidan evitar",
                "Combater os riscos na orixe",
                "Evitar os riscos",
                "Antepoñer a protección colectiva á individual"
              ],
              es: [
                "Evaluar los riesgos que no se puedan evitar",
                "Combatir los riesgos en el origen",
                "Evitar los riesgos",
                "Anteponer la protección colectiva a la individual"
              ]
            },
            respuestaCorrecta: 2,
            tiempo: 30,
            puntos: 100
          },
          {
            id: 103,
            pregunta: {
              gl: "Desde o punto de vista técnico-preventivo, que é un accidente de traballo?",
              es: "Desde el punto de vista técnico-preventivo, ¿qué es un accidente de trabajo?"
            },
            opciones: {
              gl: [
                "Toda lesión corporal sufrida con ocasión ou a consecuencia do traballo",
                "Un suceso anormal, brusco e inesperado que interrompe o traballo e pode causar lesións",
                "Un deterioro lento e paulatino da saúde por exposición crónica",
                "Calquera enfermidade contraída no centro de traballo"
              ],
              es: [
                "Toda lesión corporal sufrida con ocasión o a consecuencia del trabajo",
                "Un suceso anormal, brusco e inesperado que interrumpe el trabajo y puede causar lesiones",
                "Un deterioro lento de la salud por exposición crónica",
                "Cualquier enfermedad contraída en el centro de trabajo"
              ]
            },
            respuestaCorrecta: 1,
            tiempo: 30,
            puntos: 100
          },
          {
            id: 104,
            pregunta: {
              gl: "Que son os accidentes chamados 'in itinere'?",
              es: "¿Qué son los accidentes llamados 'in itinere'?"
            },
            opciones: {
              gl: [
                "Os ocorridos ao desprazarse entre centros de traballo da mesma empresa",
                "Os producidos no traxecto habitual entre o domicilio e o centro de traballo",
                "Os sufridos durante as pausas de descanso dentro da xornada",
                "Os accidentes graves producidos por maquinaria itinerante"
              ],
              es: [
                "Los ocurridos al desplazarse entre centros de trabajo de la misma empresa",
                "Los producidos en el trayecto habitual entre el domicilio y el centro de trabajo",
                "Los sufridos durante las pausas de descanso en la jornada",
                "Los accidentes graves producidos por maquinaria itinerante"
              ]
            },
            respuestaCorrecta: 1,
            tiempo: 30,
            puntos: 100
          },
          {
            id: 105,
            pregunta: {
              gl: "Que especialidade preventiva busca a adaptación entre o traballo e a persoa?",
              es: "¿Qué especialidad preventiva busca la adecuación entre el trabajo y la persona?"
            },
            opciones: {
              gl: ["Hixiene Industrial", "Seguridade no Traballo", "Ergonomía", "Psicoloxía Aplicada"],
              es: ["Higiene Industrial", "Seguridad en el Trabajo", "Ergonomía", "Psicología Aplicada"]
            },
            respuestaCorrecta: 2,
            tiempo: 30,
            puntos: 100
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
            pregunta: {
              gl: "En que consiste a 'trasposición' dunha Directiva Europea?",
              es: "¿En qué consiste la 'trasposición' de una Directiva Europea?"
            },
            opciones: {
              gl: [
                "En traducila ao castelán sen cambios legais",
                "En adaptala e convertela nunha norma legal de obrigado cumprimento no país",
                "En anular os convenios colectivos rexeitados pola UE",
                "En enviar a lei española ao Consello Europeo para a súa aprobación"
              ],
              es: [
                "En traducirla al castellano sin cambios legales",
                "En adaptarla y convertirla en norma legal de obligado cumplimiento en el país",
                "En anular los convenios colectivos rechazados por la UE",
                "En enviar la ley española al Consejo Europeo para su aprobación"
              ]
            },
            respuestaCorrecta: 1,
            tiempo: 30,
            puntos: 100
          },
          {
            id: 108,
            pregunta: {
              gl: "A partir de cantos traballadores é obrigatoria a constitución do Comité de Seguridade e Saúde?",
              es: "¿A partir de cuántos trabajadores es obligatoria la constitución del Comité de Seguridad y Salud?"
            },
            opciones: {
              gl: ["6 traballadores", "30 traballadores", "50 traballadores", "100 traballadores"],
              es: ["6 trabajadores", "30 trabajadores", "50 trabajadores", "100 trabajadores"]
            },
            respuestaCorrecta: 2,
            tiempo: 30,
            puntos: 100
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
            pregunta: {
              gl: "Un contacto eléctrico producido coa masa dunha máquina posta accidentalmente en tensión é:",
              es: "Un contacto eléctrico producido con la masa de una máquina puesta accidentalmente en tensión es:"
            },
            opciones: {
              gl: ["Contacto directo", "Contacto indirecto", "Contacto de alta tensión", "Derivación en orixe"],
              es: ["Contacto directo", "Contacto indirecto", "Contacto de alta tensión", "Derivación galvánica"]
            },
            respuestaCorrecta: 1,
            tiempo: 30,
            puntos: 100
          },
          {
            id: 202,
            pregunta: {
              gl: "Cada canto tempo debe realizarse o retimbrado (comprobación de presión) dun extintor?",
              es: "¿Cada cuánto tiempo debe realizarse el retimbrado (comprobación de presión) de un extintor?"
            },
            opciones: {
              gl: ["Cada ano", "Cada 3 anos", "Cada 5 anos (ata un máximo de 3 veces)", "Cada 10 anos"],
              es: ["Cada año", "Cada 3 años", "Cada 5 años (hasta un máximo de 3 veces)", "Cada 10 años"]
            },
            respuestaCorrecta: 2,
            tiempo: 30,
            puntos: 100
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
            pregunta: {
              gl: "Cal é a vía de entrada de contaminantes químicos máis importante no ámbito laboral?",
              es: "¿Cuál es la vía de entrada de contaminantes químicos más importante en el ámbito laboral?"
            },
            opciones: {
              gl: ["Vía dérmica", "Vía inhalatoria ou respiratoria", "Vía dixestiva", "Vía parenteral"],
              es: ["Vía dérmica", "Vía inhalatoria o respiratoria", "Vía digestiva", "Vía parenteral"]
            },
            respuestaCorrecta: 1,
            tiempo: 30,
            puntos: 100
          },
          {
            id: 209,
            pregunta: {
              gl: "A partir de que nivel de ruído diario (LAeq,d) é de uso OBRIGATORIO o protector auditivo segundo o RD 1316/1989?",
              es: "¿A partir de qué nivel de ruido diario (LAeq,d) es de uso OBLIGATORIO el protector auditivo según el RD 1316/1989?"
            },
            opciones: {
              gl: ["80 dBA", "85 dBA", "90 dBA", "95 dBA"],
              es: ["80 dBA", "85 dBA", "90 dBA", "95 dBA"]
            },
            respuestaCorrecta: 2,
            tiempo: 30,
            puntos: 100
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
            pregunta: {
              gl: "Segundo a Guía Técnica do INSHT, cal é o peso máximo xeral recomendado para a manipulación manual de cargas en condicións óptimas?",
              es: "Según la Guía Técnica del INSHT, ¿cuál es el peso máximo general recomendado para la manipulación de cargas?"
            },
            opciones: {
              gl: ["15 kg", "25 kg", "40 kg", "50 kg"],
              es: ["15 kg", "25 kg", "40 kg", "50 kg"]
            },
            respuestaCorrecta: 1,
            tiempo: 30,
            puntos: 100
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
            pregunta: {
              gl: "Os Equipos de Protección Individual (EPI) destinados a protexer contra riscos mortais ou irreversible pertencen á:",
              es: "Los Equipos de Protección Individual (EPI) destinados a proteger contra riesgos mortales o irreversibles pertenecen a la:"
            },
            opciones: {
              gl: ["Categoría I", "Categoría II", "Categoría III", "Categoría Especial"],
              es: ["Categoría I", "Categoría II", "Categoría III", "Categoría Especial"]
            },
            respuestaCorrecta: 2,
            tiempo: 30,
            puntos: 100
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
            pregunta: {
              gl: "Unha emerxencia que pode ser neutralizada cos medios do lugar polo persoal presente é un:",
              es: "Una emergencia que puede ser neutralizada con los medios del lugar por el personal presente es un:"
            },
            opciones: {
              gl: ["Conato de emerxencia", "Emerxencia parcial", "Emerxencia xeral", "Evacuación preventiva"],
              es: ["Conato de emergencia", "Emergencia parcial", "Emergencia general", "Evacuación preventiva"]
            },
            respuestaCorrecta: 0,
            tiempo: 30,
            puntos: 100
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
            pregunta: {
              gl: "Na exploración primaria dos signos vitais dun accidentado, cal é a orde correcta?",
              es: "En la exploración primaria de los signos vitales de un accidentado, ¿cuál es el orden correcto?"
            },
            opciones: {
              gl: [
                "Pulso -> Conciencia -> Respiración",
                "Respiración -> Pulso -> Conciencia",
                "Conciencia -> Respiración -> Pulso",
                "Conciencia -> Pulso -> Hemorraxias"
              ],
              es: [
                "Pulso -> Conciencia -> Respiración",
                "Respiración -> Pulso -> Conciencia",
                "Conciencia -> Respiración -> Pulso",
                "Conciencia -> Pulso -> Hemorragias"
              ]
            },
            respuestaCorrecta: 2,
            tiempo: 30,
            puntos: 100
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
            pregunta: {
              gl: "Cal é o carácter xeral da Vixilancia da Saúde segundo o artigo 22 da LPRL?",
              es: "¿Cuál es el carácter general de la Vigilancia de la Salud según el artículo 22 de la LPRL?"
            },
            opciones: {
              gl: [
                "Obrigatorio en absolutamente tódolos casos",
                "Voluntaria, salvocepcións legais ou avaliación indispensable",
                "Decidida exclusivamente polos Representantes dos Traballadores",
                "Obrigatoria só para maiores de 50 anos"
              ],
              es: [
                "Obligatorio en absolutamente todos los casos",
                "Voluntaria, salvo excepciones legales o evaluación indispensable",
                "Decidida exclusivamente por los Representantes de los Trabajadores",
                "Obligatoria solo para mayores de 50 años"
              ]
            },
            respuestaCorrecta: 1,
            tiempo: 30,
            puntos: 100
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
            pregunta: {
              gl: "As empresas con máis de cantos traballadores deben constituír un Servizo de Prevención Propio?",
              es: "¿Las empresas con más de cuántos trabajadores deben constituir un Servicio de Prevención Propio?"
            },
            opciones: {
              gl: ["100 traballadores", "250 traballadores", "500 traballadores", "1000 traballadores"],
              es: ["100 trabajadores", "250 trabajadores", "500 trabajadores", "1000 trabajadores"]
            },
            respuestaCorrecta: 2,
            tiempo: 30,
            puntos: 100
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
            pregunta: {
              gl: "Cal é o órgano científico-técnico especializado da Administración Xeral do Estado en prevención?",
              es: "¿Cuál es el órgano científico-técnico especializado de la Administración General del Estado en prevención?"
            },
            opciones: {
              gl: [
                "Inspección de Traballo e Seguridade Social (ITSS)",
                "Comisión Nacional de Seguridade e Saúde no Traballo (CNSST)",
                "Instituto Nacional de Seguridade e Hixiene no Traballo (INSHT)",
                "Axencia Europea para a Seguridade e Saúde"
              ],
              es: [
                "Inspección de Trabajo y Seguridad Social (ITSS)",
                "Comisión Nacional de Seguridad y Salud en el Trabajo (CNSST)",
                "Instituto Nacional de Seguridad e Higiene en el Trabajo (INSHT)",
                "Agencia Europea para la Seguridad y Salud"
              ]
            },
            respuestaCorrecta: 2,
            tiempo: 30,
            puntos: 100
          }
        ]
      }
    ]
  }
];
