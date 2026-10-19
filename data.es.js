// Spanish content for the voter guide. i18n.js applies, in order: a race's own
// entry below, then a shared phrase (exact English match), then the English text.
// Office titles follow the official bilingual Collin County ballot.
const ES_NO_REASON = "La guía citada no informó una razón específica para postularse.";
const ES_NO_SITE = "No se encontró un sitio web oficial de campaña verificado al 18 de octubre de 2026.";
const ES_NO_PLATFORM = "No se encontró una plataforma ni una razón para postularse específicas del candidato en los registros oficiales, materiales de campaña o guías citadas que se revisaron.";
const ES_JUDICIAL_NOTE = "Los candidatos judiciales generalmente describen su experiencia y su filosofía judicial en lugar de prometer resultados en los casos.";
const ES_SOCIAL_PAGE = "La página del candidato que se encontró es una página de redes sociales, no un sitio web de campaña independiente.";
const ES_BOND_TAX_NOTE = "La ley estatal exige que las proposiciones de bonos que se pagan con impuestos a la propiedad incluyan las palabras \"ESTO ES UN AUMENTO DE IMPUESTOS\", cambie o no la tasa de impuestos al final.";

const GUIDE_ES = {
  phrases: {
    // Terms and jurisdictions
    "2 years": "2 años",
    "4 years": "4 años",
    "6 years": "6 años",
    "Up to 4 years": "Hasta 4 años",
    "One-time authorization": "Autorización única",
    "All Texas voters": "Todos los votantes de Texas",
    "Collin County": "Condado de Collin",
    "All Collin County voters": "Todos los votantes del condado de Collin",
    "Collin County judicial district": "Distrito judicial del condado de Collin",
    "Fifth Court district: Collin, Dallas, Grayson, Hunt, Kaufman, and Rockwall counties": "Distrito de la Quinta Corte: condados de Collin, Dallas, Grayson, Hunt, Kaufman y Rockwall",
    "City of Princeton; elected citywide": "Ciudad de Princeton; elegido en toda la ciudad",

    // Party labels
    "Republican": "Republicano",
    "Democratic": "Demócrata",
    "Libertarian": "Libertario",
    "Green": "Verde",
    "Nonpartisan": "No partidista",
    "Republican - incumbent": "Republicano - titular",
    "Republican - incumbent; unopposed": "Republicano - titular; sin oponente",
    "Republican; unopposed": "Republicano; sin oponente",
    "Republican - appointed incumbent": "Republicano - titular designado",
    "Nonpartisan - incumbent": "No partidista - titular",
    "Nonpartisan - incumbent; unopposed": "No partidista - titular; sin oponente",
    "Nonpartisan; unopposed": "No partidista; sin oponente",

    // Office descriptions used by more than one race
    "Reviews civil appeals and major questions of Texas law.": "Revisa apelaciones civiles y cuestiones importantes de la ley de Texas.",
    "Hears appeals involving the state, challenges to state laws, and business-court appeals.": "Escucha apelaciones que involucran al estado, impugnaciones a leyes estatales y apelaciones de las cortes comerciales.",
    "Reviews criminal appeals and statewide questions of criminal procedure.": "Revisa apelaciones penales y cuestiones de procedimiento penal de alcance estatal.",
    "Writes and votes on state laws and the state budget; district residents elect one representative.": "Redacta y vota leyes estatales y el presupuesto estatal; los residentes del distrito eligen a un representante.",
    "Oversees the Collin Central Appraisal District's budget and operations and hires the chief appraiser. The board does not set individual property values.": "Supervisa el presupuesto y las operaciones del Distrito Central de Tasación de Collin y contrata al tasador principal. La junta no fija el valor de propiedades individuales.",
    "Presides over felony, major civil, and/or family matters assigned to this district court.": "Preside casos de delitos graves, casos civiles mayores o asuntos de familia asignados a esta corte de distrito.",
    "Presides over the statutory county court's assigned criminal, civil, probate, or appellate docket.": "Preside los casos penales, civiles, de herencias o de apelación asignados a esta corte del condado.",
    "Handles lower-dollar civil cases, evictions, Class C misdemeanors, warrants, and certain inquests.": "Atiende demandas civiles de montos menores, desalojos, faltas menores de clase C (como multas de tránsito), órdenes judiciales y ciertas investigaciones de muertes.",
    "Reviews civil and criminal trial-court decisions for legal error.": "Revisa si las decisiones de las cortes de primera instancia, civiles y penales, tienen errores legales.",
    "Only addresses inside Princeton city limits. Some homes with a Princeton mailing address are outside the city and will not see this race.": "Solo direcciones dentro de los límites de la ciudad de Princeton. Algunas viviendas con dirección postal de Princeton están fuera de la ciudad y no verán esta contienda.",

    // Reasons and notes used by more than one candidate
    "The cited guide did not report a specific reason for running.": ES_NO_REASON,
    "He is seeking a fourth term. The cited guide did not report a specific reason for running.": "Busca un cuarto mandato. " + ES_NO_REASON,
    "This is his first election to the court. The cited guide did not report a specific reason for running.": "Es su primera elección a la corte. " + ES_NO_REASON,
    "The candidate is seeking the listed bench without a general-election opponent.": "El candidato busca este cargo judicial sin oponente en la elección general.",
    "The candidate is seeking reelection without a general-election opponent.": "El candidato busca la reelección sin oponente en la elección general.",
    "No candidate-specific platform or reason for running was located in the reviewed official filings, campaign materials, or cited guides.": ES_NO_PLATFORM,
    "Judicial candidates generally describe experience and judicial philosophy rather than promising outcomes in cases.": ES_JUDICIAL_NOTE,
    "No verified official campaign website was located as of Oct. 18, 2026.": ES_NO_SITE,
    "No verified official campaign website was located as of Oct. 18, 2026. Judicial candidates generally describe experience and judicial philosophy rather than promising outcomes in cases.": ES_NO_SITE + " " + ES_JUDICIAL_NOTE,
    "No verified official campaign website was located as of Oct. 18, 2026. No candidate-specific platform or reason for running was located in the reviewed official filings, campaign materials, or cited guides. Judicial candidates generally describe experience and judicial philosophy rather than promising outcomes in cases.": ES_NO_SITE + " " + ES_NO_PLATFORM + " " + ES_JUDICIAL_NOTE,
    "No candidate-specific platform or reason for running was located in the reviewed official filings, campaign materials, or cited guides. Judicial candidates generally describe experience and judicial philosophy rather than promising outcomes in cases.": ES_NO_PLATFORM + " " + ES_JUDICIAL_NOTE,
    "The located candidate page is a social-media page, not a standalone campaign website. Judicial candidates generally describe experience and judicial philosophy rather than promising outcomes in cases.": ES_SOCIAL_PAGE + " " + ES_JUDICIAL_NOTE,
    "Judicial independence": "Independencia judicial",
    "Judicial restraint": "Prudencia judicial (no legislar desde el tribunal)",

    // Proposition text shared across propositions
    "The county may not issue these bonds.": "El condado no podrá emitir estos bonos.",
    "Shares the county debt-service projection described under Proposition A. State law requires bond propositions repaid with property taxes to carry the words \"THIS IS A TAX INCREASE,\" whether or not the tax rate ultimately changes.": "Comparte la proyección de servicio de la deuda del condado descrita en la Proposición A. " + ES_BOND_TAX_NOTE,
    "Authorizes $296.5 million in county bonds for court and detention facilities, including adult detention, medical and mental-health detention, and adult probation facilities.": "Autoriza $296.5 millones en bonos del condado para instalaciones de tribunales y de detención, incluidas la detención de adultos, la detención médica y de salud mental, y las instalaciones de libertad condicional para adultos.",
    "Authorizes $475 million in county bonds for non-tolled roads and bridges in Collin County, including land and rights-of-way.": "Autoriza $475 millones en bonos del condado para caminos y puentes sin peaje en el condado de Collin, incluidos terrenos y derechos de paso.",
    "Authorizes $6 million in county bonds for park and open-space land and improvements, including joint county-city projects.": "Autoriza $6 millones en bonos del condado para terrenos y mejoras de parques y espacios abiertos, incluidos proyectos conjuntos entre el condado y las ciudades.",
    "Authorizes $40 million in county bonds for a new elections and storage facility.": "Autoriza $40 millones en bonos del condado para una nueva instalación de elecciones y almacenamiento.",
    "Authorizes $600 million in Collin College bonds for facilities used for workforce training, career and technical education, and academic instruction.": "Autoriza $600 millones en bonos de Collin College para instalaciones de capacitación laboral, educación profesional y técnica, e instrucción académica.",

    // Link labels
    "Sourced candidate guide": "Guía de candidatos con fuentes",
    "Sourced judicial profile": "Perfil judicial con fuentes",
    "Candidate Q&A and sourced positions": "Preguntas y respuestas del candidato y posiciones con fuentes",
    "Official sample ballot": "Boleta de muestra oficial",
    "Judicial experience comparison": "Comparación de experiencia judicial",
    "Independent experience review": "Revisión independiente de experiencia",
    "LWV forum page": "Página del foro de la Liga de Mujeres Votantes",
    "Candidate profile": "Perfil del candidato",
    "Candidate Q&A": "Preguntas y respuestas del candidato",
    "Sept. 26 forum report": "Reportaje del foro del 26 de septiembre",
    "Sept. 26 candidate forum report": "Reportaje del foro de candidatos del 26 de septiembre",
    "Candidate issues page": "Página de temas del candidato",
    "District race coverage": "Cobertura de la contienda del distrito",
    "Official office biography": "Biografía oficial de la oficina",
    "County election page": "Página electoral del condado",
    "Campaign reporting": "Reportajes de la campaña",
    "Campaign event coverage": "Cobertura de eventos de campaña",
    "Candidate video archive": "Archivo de videos de candidatos",
    "Official Texas House profile": "Perfil oficial en la Cámara de Texas",
    "Official county biography": "Biografía oficial del condado",
    "Official office profile": "Perfil oficial de la oficina",
    "Sourced city comparison": "Comparación municipal con fuentes",
    "City candidate list": "Lista de candidatos de la ciudad",
    "Forum attendance report": "Reportaje sobre la asistencia al foro",
    "Race overview": "Resumen de la contienda",
    "Long-form candidate interview": "Entrevista extensa con la candidata",
    "League of Women Voters primary judicial questionnaire": "Cuestionario judicial de las primarias de la Liga de Mujeres Votantes",
    "Recorded candidate interview": "Entrevista grabada con el candidato",
    "Candidate priorities page": "Página de prioridades del candidato",
    "Campaign website": "Sitio web de campaña",
  },

  sources: {
    sampleBallot: { label: "Boleta de muestra oficial de todas las contiendas del condado de Collin (3 de nov. de 2026)", date: "Revisado el 18 de oct. de 2026" },
    sos: { label: "Secretaría de Estado de Texas - elección general de 2026", date: "Revisado el 18 de oct. de 2026" },
    ballot: { label: "Boleta personalizada del Texas Tribune", date: "Actualizado el 24 de sept. de 2026" },
    collin: { label: "Portal de boletas de muestra del condado de Collin", date: "Revisado el 18 de oct. de 2026" },
    countyFaq: { label: "Preguntas frecuentes de Elecciones del condado de Collin (centros de votación en todo el condado)", date: "Revisado el 18 de oct. de 2026" },
    princeton: { label: "Elecciones de la ciudad de Princeton", date: "Revisado el 18 de oct. de 2026" },
    heraldBallot: { label: "Resumen del Princeton Herald sobre las contiendas del área de Princeton", date: "15 de oct. de 2026" },
    senate: { label: "Preguntas y respuestas de candidatos al Senado de EE. UU. (Texas Tribune)", date: "13 de oct. de 2026" },
    governor: { label: "Guía del Texas Tribune sobre la contienda para gobernador", date: "Actualizado el 6 de oct. de 2026" },
    ltgov: { label: "Guía del Texas Tribune sobre la contienda para vicegobernador", date: "28 de sept. de 2026" },
    ag: { label: "Guía del Texas Tribune sobre la contienda para procurador general", date: "5 de oct. de 2026" },
    comptroller: { label: "Guía del Texas Tribune sobre la contienda para contralor", date: "29 de sept. de 2026" },
    land: { label: "Guía del Texas Tribune sobre la contienda para comisionado de tierras", date: "18 de sept. de 2026" },
    agriculture: { label: "Guía del Texas Tribune sobre la contienda para comisionado de agricultura", date: "24 de sept. de 2026" },
    railroad: { label: "Guía del Texas Tribune sobre la Comisión de Ferrocarriles", date: "15 de sept. de 2026" },
    supreme: { label: "Guía del Texas Tribune sobre la Corte Suprema de Texas", date: "1 de oct. de 2026" },
    cca: { label: "Guía del Texas Tribune sobre la Corte de Apelaciones Criminales", date: "29 de sept. de 2026" },
    coa15: { label: "Guía del Texas Tribune sobre la Corte de Apelaciones del 15.º Distrito", date: "16 de feb. de 2026" },
    debate: { label: "Reportaje del Texas Tribune sobre invitaciones a debates estatales", date: "7 de oct. de 2026" },
    collinGuide: { label: "Resumen del condado de Collin de The Ballot Brief (resumen asistido por IA; fuente secundaria)", date: "Actualizado el 16 de oct. de 2026" },
    localVideos: { label: "Entrevistas a candidatos de Collin County Votes", date: "Revisado el 18 de oct. de 2026" },
    lwvForums: { label: "Foros de candidatos del 3 de octubre de la Liga de Mujeres Votantes del condado de Collin", date: "Revisado el 18 de oct. de 2026" },
    tx03: { label: "Reportajes de la campaña del Distrito 3 de Texas", date: "11 de oct. de 2026" },
    hd89: { label: "Cobertura de candidatos del Distrito 89 de la Cámara de Texas", date: "Oct. de 2026" },
    cityForum: { label: "Reportaje del Princeton Herald sobre el foro del concejo municipal y la junta escolar del 26 de septiembre", date: "1 de oct. de 2026" },
    cityGuide: { label: "Comparación con fuentes del Concejo Municipal de Princeton", date: "Actualizado el 5 de oct. de 2026" },
    judicialCompare: { label: "Comparación de candidatos judiciales de la Texas Civil Justice League", date: "Revisado el 18 de oct. de 2026" },
    johnRussell: { label: "Perfil del candidato John Russell", date: "Revisado el 18 de oct. de 2026" },
    countyBond: { label: "Información sobre la elección de bonos del condado de Collin", date: "Revisado el 18 de oct. de 2026" },
    countyBondNews: { label: "Reportaje de NBC DFW sobre el bono del condado de $817.5 millones", date: "Revisado el 18 de oct. de 2026" },
    collegeBond: { label: "Reportaje de Community Impact sobre el bono de Collin College de $600 millones", date: "Revisado el 18 de oct. de 2026" },
    ccad: { label: "Página del condado sobre la elección de la junta del distrito de tasación", date: "Revisado el 18 de oct. de 2026" },
    ccadQa: { label: "Preguntas y respuestas de Community Impact con los candidatos al Lugar 2 de la junta de tasación", date: "Revisado el 18 de oct. de 2026" },
    tlcCongress: { label: "Consejo Legislativo de Texas: distritos del Congreso por ciudad (PLANC2333)", date: "Límites municipales del Censo 2020" },
    tlcHouse: { label: "Consejo Legislativo de Texas: distritos de la Cámara de Texas por ciudad (PLANH2316)", date: "Límites municipales del Censo 2020" },
    tlcSenate: { label: "Consejo Legislativo de Texas: distritos del Senado de Texas por ciudad (PLANS2168)", date: "Límites municipales del Censo 2020" },
    countyMaps: { label: "Mapas de precintos y distritos del condado de Collin", date: "Mapas del 19 de ene. de 2024" },
    ccadSos: { label: "Guía de la Secretaría de Estado de Texas sobre elecciones de distritos de tasación", date: "Revisado el 18 de oct. de 2026" },
  },

  races: {
    "us-senate": {
      title: "Senador de los Estados Unidos",
      duty: "Vota leyes y gastos federales, confirma a jueces y funcionarios del poder ejecutivo, y considera tratados.",
      candidates: {
        "Ken Paxton": {
          background: "Procurador general de Texas desde 2015; antes sirvió 10 años en la Cámara de Texas y dos años en el Senado de Texas, representando el área de McKinney.",
          why: "Ganó la candidatura republicana frente al senador titular John Cornyn. " + ES_NO_REASON,
          priorities: ["Derogación permanente del impuesto federal a la gasolina", "Se opone a la atención de transición de género para menores", "Apoya las acciones del presidente en la guerra con Irán y respaldó los aranceles de 2025", "Apoya el desarrollo de centros de datos \"con condiciones\""],
          note: "Paxton no respondió el cuestionario del Tribune; las posiciones que se presentan provienen de sus declaraciones públicas anteriores, recopiladas por el Tribune.",
        },
        "James Talarico": {
          background: "Miembro de la Cámara de Texas en su cuarto mandato, del norte de Austin; exmaestro de escuela intermedia (middle school) en San Antonio ISD que también trabajó para organizaciones educativas.",
          why: "Dice que se enfocará en combatir la corrupción y hacer la vida más asequible.",
          priorities: ["Derogar los aranceles y suspender el impuesto federal a la gasolina", "Votar a favor de una resolución de poderes de guerra sobre Irán", "Legalizar el uso de marihuana para adultos", "Regulación más estricta de los centros de datos y normas de seguridad para la inteligencia artificial"],
        },
        "Ted Brown": {
          background: "Ajustador de seguros independiente por cuenta propia; graduado en ciencias políticas de UCLA; activista del Partido Libertario durante casi 50 años.",
          why: ES_NO_REASON + " Sus respuestas siguen una plataforma de gobierno limitado y libertades civiles.",
          priorities: ["Retirar la marihuana de la lista federal de sustancias controladas", "Derogar el impuesto federal a la gasolina", "Oponerse a la guerra con Irán y retirar las tropas de EE. UU. del Medio Oriente", "Oponerse a los aranceles presidenciales y favorecer el libre comercio"],
        },
      },
    },

    governor: {
      title: "Gobernador",
      duty: "Firma o veta leyes estatales, propone prioridades, dirige la respuesta a emergencias y hace nombramientos importantes.",
      candidates: {
        "Greg Abbott": {
          background: "Gobernador desde 2015; antes fue procurador general de Texas, juez de la Corte Suprema de Texas y juez de distrito estatal en el condado de Harris.",
          priorities: ["Eliminar los impuestos escolares a la propiedad para propietarios de vivienda y bajar el límite de aumento de tasación del 10% al 3%", "Programa fronterizo Operación Estrella Solitaria (Operation Lone Star)", "Pausó nuevas conexiones de centros de datos a la red eléctrica hasta completar una auditoría; apoya eliminar los incentivos fiscales para centros de datos", "Enmienda constitucional para negar la fianza a algunos acusados de delitos violentos"],
        },
        "Gina Hinojosa": {
          background: "Miembro de la Cámara de Texas en su quinto mandato; expresidenta de la junta de Austin ISD y abogada de derechos civiles y sindicatos.",
          why: "Ha hecho campaña sobre las escuelas públicas, la asequibilidad y los costos de la atención médica.",
          priorities: ["Moratoria a nuevos centros de datos hasta que la Legislatura apruebe más protecciones para las comunidades", "Mayor salario para los maestros, fin de las pruebas estandarizadas y oposición a los vales escolares", "Un pago único de $1,500 del fondo de reserva del estado", "Limitar el capital privado en la atención médica"],
        },
        "Pat Dixon": {
          background: "Dueño de una empresa de servicios de automatización; miembro del concejo de Lago Vista durante dos mandatos y expresidente del Partido Libertario de Texas.",
          why: "Dice que los contribuyentes no deberían pagar por el crecimiento ni por negocios favorecidos.",
          priorities: ["Eliminar los incentivos fiscales dirigidos a empresas, incluidos los de centros de datos", "Bajar el impuesto estatal sobre las ventas", "Exigir causa probable para buscar en la red estatal de cámaras de vigilancia", "Libertad de los adultos para usar cannabis, con sanciones por conducir bajo sus efectos"],
        },
      },
    },

    "attorney-general": {
      title: "Procurador General (fiscal general del estado)",
      duty: "Representa a Texas en litigios civiles, emite opiniones legales, hace cumplir ciertas leyes estatales y administra los servicios de manutención infantil.",
      candidates: {
        "Mayes Middleton": {
          background: "Senador estatal desde 2023 y representante estatal de 2019 a 2023; abogado y presidente de una empresa petrolera familiar.",
          why: "Se describe como un aliado firme del presidente Trump y dice que usaría la oficina para hacer cumplir prioridades conservadoras.",
          priorities: ["Hacer cumplir las políticas federales de deportación y frontera", "Defender las restricciones al aborto en Texas y oponerse a lo que llama la agenda de género de la izquierda", "Buscar autoridad para que la oficina procese cualquier violación de la ley estatal, incluidos los casos electorales", "Proteger los empleos del petróleo y el gas e impedir la compra de terrenos por adversarios extranjeros"],
        },
        "Nathan Johnson": {
          background: "Senador de Texas desde 2019; litigante y mediador en Dallas.",
          why: "Critica el uso que Ken Paxton ha hecho de la oficina y dice que impugnaría las políticas federales que, a su juicio, perjudican a los texanos.",
          priorities: ["Demandar por políticas fronterizas federales que considera inconstitucionales", "Hacer cumplir las leyes de protección al consumidor y de competencia", "Investigar la corrupción pública sin importar el partido", "Trabajar con los fiscales de distrito locales en lugar de buscar más poder de procesamiento para la oficina"],
        },
        "Tom Oxford": {
          background: "Abogado en práctica privada en el condado de Jefferson desde 1982, en lesiones personales, inmigración y derechos civiles.",
          note: "El Tribune informó que no encontró información pública que describa las posiciones políticas de Oxford.",
        },
      },
    },

    "lieutenant-governor": {
      title: "Gobernador Teniente (vicegobernador)",
      duty: "Preside el Senado de Texas y tiene un poder considerable sobre las asignaciones a comités y sobre qué proyectos de ley se someten a votación.",
      candidates: {
        "Dan Patrick": {
          background: "Vicegobernador desde 2015; senador estatal de 2007 a 2015; exlocutor de radio y comentarista deportivo en Houston.",
          priorities: ["Aumentar la exención escolar de vivienda (homestead) y bajar la edad para la exención de personas mayores", "Ampliar los vales escolares", "Prohibir la venta de productos con THC", "Mantener la prohibición estatal del aborto"],
        },
        "Vikki Goodwin": {
          background: "Miembro de la Cámara de Texas por Austin desde 2019; autora o patrocinadora de leyes sobre seguridad infantil y violencia doméstica.",
          why: "Ha hecho campaña sobre el financiamiento de las escuelas públicas y la asequibilidad.",
          priorities: ["Aumentar el financiamiento de las escuelas públicas y el salario de los maestros", "Invertir en infraestructura y reciclaje de agua", "Incentivos para alquileres y expansión de Medicaid", "Derogar la prohibición estatal del aborto y regular, en lugar de prohibir, el THC"],
        },
        "Anthony Cristo": {
          background: "Maestro de escuela secundaria (high school) en San Antonio y excandidato al Congreso.",
          why: ES_NO_REASON + " Sus posiciones siguen una plataforma de gobierno limitado.",
          priorities: ["Bajar los impuestos a la propiedad reduciendo el gasto", "Políticas de libre mercado y apertura a los inmigrantes que trabajan", "Legalizar la marihuana en Texas"],
        },
        "Kevin McCormick": {
          background: "Graduado de la facultad de derecho, exmaestro de matemáticas de escuela secundaria (high school) y excandidato al Congreso.",
          why: "Dice que su campaña se centra en el interés público y en la salud de las personas, la sociedad y el medio ambiente.",
          priorities: ["Ampliar el transporte público y la infraestructura rural", "Votación por orden de preferencia (ranked-choice) y límites a la manipulación de los distritos electorales (gerrymandering)", "Conservación del agua y reducción de la contaminación", "Más maestros, mejores planes de estudio y desarrollo de energía renovable"],
        },
      },
    },

    comptroller: {
      title: "Contralor de Cuentas Públicas",
      duty: "Recauda los principales impuestos estatales, pronostica los ingresos, supervisa contratos y administra el programa de vales escolares.",
      candidates: {
        "Don Huffines": {
          background: "Desarrollador inmobiliario, senador estatal de 2015 a 2019 y candidato a gobernador en 2022; designado por el gobernador Abbott, juramentó como contralor interino el 1 de agosto de 2026.",
          why: "Dice que auditaría el gasto estatal para encontrar desperdicio, y se ha comprometido a renunciar al salario estatal si es elegido.",
          priorities: ["Auditar el gasto estatal y los contratos de construcción de carreteras", "Reducir regulaciones que son una carga para las empresas", "Estudiar los costos estatales relacionados con la inmigración no autorizada", "Implementar el programa de vales escolares con transparencia"],
        },
        "Sarah Eckhardt": {
          background: "Senadora de Texas desde 2020; exjueza del condado de Travis y exfiscal.",
          why: "Dice que serviría como \"vigilante del gobierno\" independiente, enfocada en asuntos fiscales y no en temas sociales polarizantes.",
          priorities: ["Auditar los vales escolares y eliminar los contratos sin licitación", "Dar a conocer los costos de no ampliar Medicaid", "Reforzar las revisiones contra la corrupción", "Apoya una moratoria al desarrollo de centros de datos"],
        },
        "V. Alonzo Echavarria-Garza": {
          background: "Administrador municipal de Hearne desde 2022 y exdirector financiero de la ciudad; también se postuló para contralor en 2022.",
          why: ES_NO_REASON + " Las fuentes revisadas contienen pocos detalles de plataforma específicos del cargo, más allá de la plataforma del Partido Libertario.",
        },
        "Shehla Faizi": {
          background: "Presentadora de pódcast con posgrados en periodismo y comunicación estratégica; fue voluntaria en la campaña presidencial del Partido Verde de 2024.",
          priorities: ["Mayor transparencia en el gasto de los impuestos", "Ningún incentivo fiscal para centros de datos", "Retirar inversiones en bonos extranjeros e impugnar las leyes estatales de contratación contra boicots", "Administrar los vales escolares sin sesgo religioso"],
        },
      },
    },

    "land-commissioner": {
      title: "Comisionado de la Oficina General de Tierras",
      duty: "Administra las tierras estatales y los derechos minerales, los fondos de recuperación de desastres, los programas para veteranos y el Álamo; sus ingresos apoyan a las escuelas públicas.",
      candidates: {
        "Dawn Buckingham": {
          background: "Cirujana de reconstrucción de párpados; senadora estatal de 2017 a 2023; comisionada de tierras desde 2023.",
          why: "Busca un segundo mandato. " + ES_NO_REASON,
          priorities: ["Explorar proyectos geotérmicos, nucleares pequeños y de gas natural en tierras estatales", "Dedicar recursos de la Oficina de Tierras a la seguridad fronteriza", "Apoyar a la industria del petróleo y el gas", "Continuar el cuidado del Álamo"],
        },
        "Benjamin Flores": {
          background: "Profesional de ciberseguridad y cumplimiento normativo para gobiernos de condado, pequeño criador de cerdos y miembro del concejo de Bay City desde 2023.",
          why: "Dice que se opone a la forma en que el comisionado actual ha usado los recursos de la Oficina de Tierras para la seguridad fronteriza y migratoria.",
          priorities: ["Arrendar tierras estatales a desarrolladores de centros de datos e intercambiar terrenos para vivienda asequible", "Proteger los ingresos del fondo escolar y oponerse a los vales escolares", "Precalificar a contratistas para desastres y acelerar la recuperación", "Ampliar los programas para veteranos, incluidos los esfuerzos para acabar con la falta de vivienda entre veteranos"],
        },
        "Neill Snider": {
          background: "Contratista mecánico de Waco y dueño de una pequeña operación ganadera, con cuatro décadas en los oficios.",
          why: ES_NO_REASON + " Sus posiciones siguen la plataforma del Partido Libertario.",
          priorities: ["Aumentar los rendimientos de las tierras estatales, o venderlas, para reducir impuestos", "Apoyar la producción responsable de energía y arrendamientos justos", "Aumentar la transparencia de la agencia"],
        },
      },
    },

    "agriculture-commissioner": {
      title: "Comisionado de Agricultura",
      duty: "Dirige el Departamento de Agricultura, que regula partes de la economía agrícola y administra programas de nutrición escolar y desarrollo rural.",
      candidates: {
        "Nate Sheets": {
          background: "Fundador de la empresa de miel Nature Nate's; dueño de un rancho; sirvió seis años en la Reserva Naval de EE. UU.",
          why: "Renunció como director ejecutivo de Nature Nate's en 2024 para postularse al cargo.",
          priorities: ["Crear empleos rurales y un mercado que conecte a los consumidores con productores locales", "Eliminar los incentivos fiscales para centros de datos y exigirles invertir en fondos de agua y agricultura", "Dar al estado poder para investigar el agroterrorismo", "Apoyar E-Verify y reducir los costos de transporte de los agricultores"],
        },
        "Clayton Tucker": {
          background: "Organizador criado en un rancho, investigador de agua y agricultura, exmaestro de kínder (kindergarten) y secretario de la Texas Farmers Union.",
          priorities: ["Crear distritos de desarrollo agrícola para que las localidades puedan oponerse a los centros de datos", "Apoyar a las granjas familiares, a los agricultores jóvenes y a las cooperativas", "Regular los PFAS (químicos que no se degradan) y reducir los microplásticos", "Permitir el cultivo de cáñamo y ampliar los programas de salud mental para agricultores"],
        },
        "Austin R. Kelly": {
          background: "Consultor en manejo de recursos naturales, dueño de una pequeña empresa y exprofesor de Texas A&M.",
          priorities: ["Reducir la regulación del cáñamo, los alimentos caseros, el procesamiento de carne y los pequeños productores", "Proteger los derechos de propiedad y limitar la expropiación", "Auditar el departamento y bajar las tarifas", "Publicar investigaciones sobre agua y control de maleza, y financiar el monitoreo de bioseguridad"],
        },
      },
    },

    "railroad-commissioner": {
      title: "Comisionado de Ferrocarriles",
      duty: "Uno de tres comisionados que regulan la producción de petróleo y gas, los oleoductos y gasoductos, los servicios de gas, el sellado de pozos y el almacenamiento subterráneo relacionado. La agencia ya no regula los ferrocarriles.",
      candidates: {
        "Bo French": {
          background: "Presidente del Partido Republicano del condado de Tarrant, inversionista del sector energético y dueño de un negocio petrolero familiar en Midland.",
          why: "Derrotó al comisionado titular Jim Wright en la segunda vuelta republicana. " + ES_NO_REASON,
          priorities: ["Eliminar las prácticas de DEI (diversidad, equidad e inclusión) en la comisión", "Eliminar la influencia del gobierno chino en la industria petrolera", "Promover alianzas energéticas entre EE. UU. e Israel", "Crear una credencial \"pro familia\" para los operadores"],
        },
        "Jon Rosenthal": {
          background: "Miembro de la Cámara de Texas durante cuatro mandatos e ingeniero mecánico de campos petroleros con más de 20 años en la industria.",
          why: "Dice que la comisión no ha hecho cumplir adecuadamente sus reglas y quiere aplicar las leyes existentes y medir los resultados.",
          priorities: ["Enlaces comunitarios regionales y una línea de quejas las 24 horas", "Examinar las tarifas de los servicios de gas", "Eliminar la quema y la liberación rutinarias de gas a la atmósfera y exigir la detección de fugas", "Ampliar el sellado de pozos abandonados y negar nuevos permisos a infractores reincidentes"],
        },
        "Arthur DiBianca": {
          background: "Jubilado; activista libertario de Austin y excandidato a la Cámara estatal, al Senado estatal y al Congreso.",
          priorities: ["Ningún subsidio ni mandato que favorezca alguna fuente de energía", "Acceso competitivo a los oleoductos y gasoductos", "Proteger a los dueños de minerales y de superficie contra la expropiación", "Que los operadores, y no los contribuyentes, asuman el riesgo y el costo de la limpieza"],
        },
      },
    },

    "supreme-chief": {
      title: "Corte Suprema de Texas - Juez Presidente",
      duty: "Dirige la corte civil más alta de Texas, que interpreta la ley estatal y la Constitución de Texas en asuntos civiles.",
      candidates: {
        "Jimmy Blacklock": {
          background: "Juez presidente desde enero de 2025 (designado) y juez de la corte desde 2018; exconsejero jurídico general del gobernador Abbott; graduado de derecho de Yale y exasistente judicial del 5.º Circuito.",
          why: "Es su primera elección como juez presidente. " + ES_NO_REASON,
          priorities: ["Enfoque originalista con apego estricto al texto de la Constitución"],
        },
        "Maggie Ellis": {
          background: "Jueza de la Tercera Corte de Apelaciones desde enero de 2025; exjueza de derecho administrativo, exfiscal del condado de Travis, exmaestra de escuela pública y madre de crianza.",
          why: "Dijo que decidió postularse después de que la corte emitió una guía según la cual los jueces no están obligados a oficiar bodas entre personas del mismo sexo, guía que ella criticó.",
          priorities: ["Sacar la política del poder judicial", "Ampliar el acceso a la justicia"],
        },
      },
    },

    "supreme-2": {
      title: "Corte Suprema de Texas - Lugar Núm. 2 (duración restante del cargo)",
      term: "Resto del mandato, hasta 2030",
      duty: "Revisa apelaciones civiles y cuestiones importantes de la ley de Texas. Esta elección cubre el resto del mandato que Jimmy Blacklock ganó en 2024 antes de convertirse en juez presidente.",
      candidates: {
        "James P. Sullivan": {
          background: "Juez desde enero de 2025 (designado); exconsejero jurídico general del gobernador Abbott, exabogado del estado ante las cortes de apelación (assistant solicitor general), exasistente judicial del Circuito de D.C. y graduado de derecho de Harvard.",
          priorities: ["Describe su enfoque como un \"juzgar conservador, audaz e implacable\"", "Énfasis en el Estado de derecho"],
        },
        "Chari Kelly": {
          background: "Jueza de la Tercera Corte de Apelaciones desde 2019; exfiscal, exprocuradora general adjunta, exabogada de la Corte de Apelaciones Criminales y exoficial del Cuerpo Jurídico (JAG) del Ejército.",
          why: ES_NO_REASON + " Se describe como una defensora comprometida de la Constitución.",
          priorities: ["Fidelidad a la Constitución", "Experiencia como fiscal, en la aplicación de leyes civiles y en apelaciones"],
        },
      },
    },

    "supreme-7": {
      title: "Corte Suprema de Texas - Lugar Núm. 7",
      candidates: {
        "Kyle Hawkins": {
          background: "Juez desde octubre de 2025 (designado); exabogado principal del estado ante las cortes de apelación (solicitor general de Texas), exasistente judicial de la Corte Suprema de EE. UU. y litigante de apelaciones.",
          priorities: ["Interpretación constitucional conservadora", "Como abogado, litigó casos importantes contra la Ley de Cuidado de Salud a Bajo Precio (Affordable Care Act) y Planned Parenthood"],
        },
        "Kristen Hawkins": {
          background: "Jueza de distrito en Houston desde 2017; exabogada en práctica privada en casos de discapacidad y exfuncionaria judicial de casos de impuestos (tax master).",
          why: "Sostiene que la corte más alta necesita la perspectiva de una jueza de primera instancia.",
          priorities: ["Acceso a juicios con jurado", "Cautela antes de anular veredictos de jurados", "Perspectiva práctica de una corte de primera instancia"],
        },
      },
    },

    "supreme-8": {
      title: "Corte Suprema de Texas - Lugar Núm. 8",
      candidates: {
        "Brett Busby": {
          background: "Juez desde 2019; exjuez de la Corte de Apelaciones del 14.º Distrito, abogado de apelaciones y exasistente judicial de la Corte Suprema de EE. UU.",
          why: "Busca la reelección con base en su historial en apelaciones. " + ES_NO_REASON,
          priorities: ["Trabajó con grupos jurídicos conservadores antes de ser juez", "Promueve un mayor acceso a servicios legales", "Educación cívica"],
        },
        "Gisela D. Triana": {
          background: "Jueza de la Tercera Corte de Apelaciones desde 2019; antes fue jueza de distrito, jueza de una corte de ley del condado y jueza de paz.",
          why: ES_NO_REASON + " En su candidatura de 2020 a este cargo, criticó a la corte, toda republicana, por orientarse a resultados.",
          priorities: ["Independencia judicial", "Preocupación por decisiones orientadas a resultados y por la influencia de intereses especiales", "Experiencia en varios niveles del poder judicial de Texas"],
        },
      },
    },

    "cca-3": {
      title: "Corte de Apelaciones Criminales - Lugar Núm. 3",
      duty: "Forma parte de la corte penal más alta de Texas, que revisa condenas penales, sentencias de muerte y casos de habeas corpus. Puesto abierto: el juez Bert Richardson no busca la reelección.",
      candidates: {
        "Thomas Smith": {
          background: "Exprocurador general adjunto de Texas; exasesor de Ken Paxton cuando Paxton era senador estatal; exabogado en práctica privada.",
          why: "Dice que se postula para mantener seguros a las mujeres y los niños.",
          priorities: ["Énfasis en la trata de personas y la seguridad pública", "Trabajo con la Legislatura sobre la trata y la prohibición de ciudades santuario"],
        },
        "Okey Anyiam": {
          background: "Abogado defensor penal en práctica privada.",
          why: "Dice que los jueces deben hacer cumplir la ley sin legislar desde el tribunal.",
          priorities: ["Aplicación neutral de las leyes", "Prudencia judicial (no legislar desde el tribunal)"],
        },
        "Mark Ash": {
          background: "Abogado defensor penal desde 1992 y candidato judicial estatal en varias ocasiones.",
          why: ES_NO_REASON + " Se describe como un abogado defensor penal a favor de la libertad.",
          priorities: ["Libertades civiles", "Poder gubernamental limitado", "Experiencia en derecho penal desde la defensa"],
        },
      },
    },

    "cca-4": {
      title: "Corte de Apelaciones Criminales - Lugar Núm. 4",
      candidates: {
        "Kevin Patrick Yeary": {
          background: "Juez de la Corte de Apelaciones Criminales desde 2015; exfiscal de apelaciones, abogado defensor y asistente judicial.",
          why: "Dice que los jueces no deben crear políticas desde el tribunal. " + ES_NO_REASON,
          priorities: ["Prudencia judicial (no legislar desde el tribunal)", "Larga experiencia en apelaciones penales", "Su historial incluye votos disidentes en un fallo de 2021 sobre procesamiento de casos electorales y en la suspensión de la ejecución de Robert Roberson"],
        },
        "Audra Riley": {
          background: "Jueza de una corte penal de distrito del condado de Dallas desde 2021; exfiscal y exabogada defensora penal.",
          why: "La guía revisada documenta su experiencia en la corte, pero no ofrece una justificación detallada de su campaña ni una declaración de filosofía judicial.",
        },
      },
    },

    "cca-9": {
      title: "Corte de Apelaciones Criminales - Lugar Núm. 9",
      duty: "Revisa apelaciones penales y cuestiones de procedimiento penal de alcance estatal. Puesto abierto: el juez David Newell no busca la reelección.",
      candidates: {
        "John Messinger": {
          background: "Exfiscal estatal adjunto; exfiscal del condado de McLennan y candidato a una corte de apelaciones en 2024.",
          why: "Dice que la corte debe aplicar las leyes tal como están escritas, seguir sus propios precedentes y decidir los casos con más rapidez.",
          priorities: ["Juzgar con base en el texto", "Coherencia con los precedentes", "Revisión de apelaciones más rápida"],
        },
        "Holly Taylor": {
          background: "Abogada de apelaciones; exdirectora de la división de integridad pública del condado de Travis y exabogada de reglamentos de la Corte de Apelaciones Criminales.",
          why: "Dice que aportaría una voz independiente a la corte.",
          priorities: ["Independencia judicial", "Enfoque en la Constitución y el Estado de derecho", "Experiencia en apelaciones y reglamentos de la corte"],
        },
      },
    },

    "coa15-chief": {
      title: "Corte de Apelaciones del 15.º Distrito - Juez Presidente",
      duty: "Dirige la corte de apelaciones estatal creada en 2023, que escucha casos que involucran al estado, impugnaciones a leyes estatales y apelaciones de las cortes comerciales.",
      candidates: {
        "Scott Brister": {
          background: "Juez presidente desde 2024 (designado); exjuez de la Corte Suprema de Texas (2003-2009), exjuez y juez presidente de cortes de apelaciones, y exjuez de distrito en el condado de Harris; graduado de derecho de Harvard.",
          why: "Es su primera elección a esta corte. Se describe como un juez imparcial que aplica la ley, no sus creencias personales.",
          priorities: ["Aplicación imparcial de la ley"],
        },
        "Jerry Zimmerer": {
          background: "Juez de la Corte de Apelaciones del 14.º Distrito de 2019 a 2024; abogado en práctica privada y exgerente de proyectos de AT&T Mobility.",
          why: "Dice que quiere promover los valores democráticos y mejorar la eficiencia de la corte.",
          priorities: ["Eficiencia de la corte", "Valores democráticos"],
        },
      },
    },

    "coa15-2": {
      title: "Corte de Apelaciones del 15.º Distrito - Lugar Núm. 2",
      candidates: {
        "Scott K. Field": {
          background: "Juez desde 2024 (designado); exjuez de la Corte de Distrito 480 del condado de Williamson, exjuez de la Tercera Corte de Apelaciones (2013-2018) y exsocio de una firma de abogados en Austin.",
          why: "Es su primera elección a esta corte. Dice que aplicará la ley tal como está escrita.",
          priorities: ["Aplicar la ley tal como está escrita"],
        },
        "Tom Baker": {
          background: "Juez de la Tercera Corte de Apelaciones de 2019 a 2024; exsocio en práctica privada, exabogado adjunto del condado de Bee y exoficial del Cuerpo Jurídico (JAG) de la Reserva Naval.",
          why: "Dice que la afiliación partidista y la filosofía política no deben influir en los fallos.",
          priorities: ["Decisiones no partidistas"],
        },
      },
    },

    "coa15-3": {
      title: "Corte de Apelaciones del 15.º Distrito - Lugar Núm. 3",
      candidates: {
        "April Farris": {
          background: "Jueza desde 2024 (designada); exjueza de la Primera Corte de Apelaciones (2021-2024), exsocia de una firma de abogados de apelaciones y exabogada del estado ante las cortes de apelación (assistant solicitor general); graduada de derecho de Harvard.",
          why: "Es su primera elección a esta corte. Dice que basa sus fallos en la Constitución de Texas y el Estado de derecho.",
          priorities: ["Enfoque en la Constitución y el Estado de derecho"],
        },
        "Marc M. Meyer": {
          background: "Abogado en práctica privada, certificado en derecho administrativo; excapitán y paramédico del Departamento de Bomberos de Houston y enfermero registrado; candidato a una corte de distrito en 2020.",
          why: "Dice que será imparcial y protegerá los derechos individuales frente al poder del estado.",
          priorities: ["Imparcialidad", "Derechos individuales frente al poder del estado"],
        },
      },
    },

    "us-house-3": {
      title: "Representante de los Estados Unidos - Distrito Núm. 3",
      jurisdiction: "Distrito 3 del Congreso",
      duty: "Representa al distrito en la Cámara de Representantes de EE. UU. y vota sobre leyes federales, impuestos, gastos y supervisión.",
      candidates: {
        "Keith Self": {
          background: "Representante de EE. UU. desde 2023; teniente coronel retirado del Ejército y exjuez del condado de Collin.",
          why: "Busca un tercer mandato con una agenda conservadora centrada en la seguridad fronteriza, la contención del gasto y la política exterior.",
          priorities: ["Construcción del muro fronterizo y aplicación de las leyes de inmigración", "Impuestos más bajos, menos gasto federal y menos regulaciones", "Más producción nacional de petróleo y gas", "Identificación con foto para votar, derecho a portar armas, políticas contra el aborto y su Sharia-Free America Caucus"],
        },
        "Evan Hunt": {
          background: "Teniente coronel retirado de la Fuerza Aérea y oficial de sistemas de armas del B-1 con unos 20 años de servicio; ejecutivo de las industrias de defensa y aeroespacial; residente de McKinney.",
          why: "Dice que se postula para restablecer los contrapesos constitucionales, reducir la división y dar al distrito una representación que responda mejor.",
          priorities: ["Transparencia de precios en la atención médica y medicamentos recetados más baratos", "Escuelas públicas; se opone a los vales escolares", "Límites de mandato en el Congreso, prohibición de que los legisladores compren y vendan acciones, y redistribución de distritos solo una vez por década", "Seguridad fronteriza junto con más fondos para las cortes de inmigración"],
        },
      },
    },

    "tx-house-67": {
      title: "Representante Estatal - Distrito Núm. 67",
      jurisdiction: "Distrito 67 de la Cámara de Texas",
      area: "Solo direcciones de Princeton en el Distrito 67 de la Cámara de Texas. Princeton está dividido entre los distritos 67 y 89; el norte de Princeton generalmente está en el Distrito 67.",
      candidates: {
        "Jeff Leach": {
          background: "Representante estatal desde 2013; abogado criado en Plano que trabaja en la firma de abogados Gray Reed; graduado de Baylor y de derecho de SMU.",
          why: "Busca otro mandato con base en su historial legislativo.",
          priorities: ["Alivio de los impuestos a la propiedad, incluidas exenciones de vivienda más altas para personas mayores y propietarios con discapacidad", "Fondos estatales para la seguridad fronteriza y apoyo a las fuerzas del orden", "Aumentos al financiamiento de las escuelas públicas y al salario de los maestros en la ley de financiamiento escolar de 2025", "Coautor de la ley de 2021 que permite portar armas sin licencia"],
        },
        "Jordan Wheatley": {
          background: "Maestro de cuarto grado en una escuela pública de Dallas y residente de McKinney; exterapeuta de niños con autismo; maestría en neurociencia de UT Dallas.",
          why: "Dice que se postula para nivelar el terreno para que todos los texanos tengan una oportunidad justa.",
          priorities: ["Bajar los costos de alimentos, vivienda, servicios públicos y seguros", "Acabar con los beneficios del gobierno a grandes corporaciones e invertir en pequeños negocios", "Limitar el efecto del capital privado en los costos de la atención médica", "Invertir en las escuelas públicas, los maestros y los jubilados; se opone a los vales escolares"],
        },
      },
    },

    "tx-house-89": {
      title: "Representante Estatal - Distrito Núm. 89",
      jurisdiction: "Distrito 89 de la Cámara de Texas",
      area: "Solo direcciones de Princeton en el Distrito 89 de la Cámara de Texas. Princeton está dividido entre los distritos 67 y 89; el centro y el sur de Princeton, a lo largo de la U.S. 380, generalmente están en el Distrito 89.",
      candidates: {
        "Candy Noble": {
          background: "Representante estatal desde 2019; graduada en educación de Hardin-Simmons, a quien su campaña describe como exeducadora; exmiembro de la Junta de Justicia Juvenil de Texas.",
          why: "Busca otro mandato. " + ES_NO_REASON,
          priorities: ["Patrocinadora en la Cámara de la ley de 2025 que exige exhibir los Diez Mandamientos en los salones de clase", "Copatrocinadora de la ley de 2025 de cuentas de ahorro para la educación (vales escolares)", "Autora en la Cámara de un proyecto de ley para garantizar que solo los ciudadanos estadounidenses voten en las elecciones de Texas", "Políticas de impuestos a la propiedad y tasación a través del Comité de Medios y Arbitrios"],
        },
        "Angie Carraway": {
          background: "Maestra de estudios sociales de escuela intermedia (middle school) en su 15.º año, incluidos 10 años en Lovejoy ISD y un tiempo en Princeton ISD; graduada de la Universidad del Norte de Texas con maestría en currículo e instrucción.",
          why: "Dice que su experiencia en el salón de clases la llevó a postularse para fortalecer las escuelas públicas, bajar los costos de los hogares y tener una representación más transparente.",
          priorities: ["Eliminar el programa de vales escolares y aumentar el financiamiento de las escuelas de barrio", "Bajar los costos de vivienda, servicios públicos y seguros", "Derogar el requisito de exhibir los Diez Mandamientos en los salones de clase", "Atención a los ciudadanos transparente y centrada en la comunidad"],
        },
      },
    },

    "collin-da": {
      title: "Procurador Criminal del Distrito del Condado de Collin (fiscal de distrito)",
      duty: "Dirige la acusación de delitos graves en el condado y los programas alternativos a la cárcel, los servicios a víctimas y la investigación de corrupción pública.",
      candidates: {
        "Greg Willis": {
          background: "Procurador criminal del distrito del condado de Collin desde 2011; exjuez de una corte de ley del condado y exfiscal; graduado de Baylor y de derecho de la Universidad de Virginia.",
          why: "Busca otro mandato sin oponente en la elección general.",
          priorities: ["Continuar el programa alternativo para acusados elegibles de delitos no violentos", "Continuar el programa alternativo de tratamiento de opioides"],
        },
      },
    },

    "collin-judge": {
      title: "Juez del Condado de Collin (jefe del gobierno del condado)",
      duty: "Preside la Corte de Comisionados y ayuda a dirigir el presupuesto, la infraestructura, el manejo de emergencias y la administración del condado; es principalmente un cargo ejecutivo.",
      candidates: {
        "Chris Hill": {
          background: "Juez del condado desde 2019; excomisionado del condado por el Precinto 3; contador público certificado y expastor ejecutivo y excontralor corporativo.",
          why: "Busca un tercer mandato y destaca una de las tasas de impuestos de condado más bajas de Texas.",
          priorities: ["Mantener baja la tasa de impuestos a la propiedad del condado", "Se opuso a los cierres y mandatos durante la pandemia", "Votó con la Corte de Comisionados para incluir el paquete de bonos de $817.5 millones en esta boleta"],
        },
        "John R. 'Buster' Brown": {
          background: "Abogado de Plano con muchos años de experiencia.",
          why: "Dice que el condado necesita un liderazgo que planifique el crecimiento con anticipación y rinda cuentas.",
          priorities: ["Planificar con anticipación el agua, las carreteras y los servicios de salud mental", "Fijar prioridades presupuestarias y obtener valor por los impuestos", "Atender la falta de personal e instalaciones de seguridad pública", "Critica el gasto de Hill en el cambio a boletas de papel y la disputa sobre el pago a los fiscales especiales del caso Paxton"],
        },
      },
    },

    "commissioner-2": {
      title: "Comisionado del Condado - Precinto Núm. 2",
      jurisdiction: "Solo el Precinto 2 de comisionados del condado de Collin; Princeton está dividido entre los precintos 2 y 3",
      duty: "Uno de cuatro comisionados que, junto con el juez del condado, fijan el presupuesto y la tasa de impuestos del condado y supervisan las carreteras y los servicios del condado. El Precinto 3 no está en la boleta este año, así que esta contienda aparece solo para las direcciones de Princeton en el Precinto 2.",
      area: "Solo direcciones de Princeton en el Precinto 2 de comisionados, generalmente al sur de la U.S. 380. La mayor parte de Princeton está en el Precinto 3, que no tiene contienda este año.",
      candidates: {
        "Michael Slaughter": {
          background: "Exalcalde pro tem (alcalde suplente) y exmiembro del concejo de Parker; teniente de la reserva policial en el condado de Collin; corredor de bienes raíces, inversionista y contratista.",
          why: "Dice que se postula para mantener bajos los impuestos y ofrecer un liderazgo transparente. La comisionada titular Cheryl Williams no busca la reelección.",
          priorities: ["Disciplina fiscal", "Seguridad pública", "Crecimiento responsable", "Transparencia electoral"],
        },
      },
    },

    "district-clerk": {
      title: "Secretario del Distrito de Collin",
      duty: "Mantiene los registros y las operaciones administrativas de las cortes de distrito del condado.",
      candidates: {
        "Mike Gould": {
          background: "Secretario del distrito del condado de Collin desde 2023; exgerente de tienda y exagente de bienes raíces.",
          why: "Busca la reelección sin oponente en la elección general.",
          priorities: ["Historial: restableció los servicios de solicitud de pasaportes en la oficina del secretario"],
        },
      },
    },

    "county-clerk": {
      title: "Secretario del Condado de Collin",
      duty: "Mantiene los registros vitales, de propiedad, de las cortes y de la Corte de Comisionados, y emite licencias de matrimonio.",
      candidates: {
        "Stacey Kemp": {
          background: "Secretaria del condado desde 2007; trabaja en la oficina desde 1987, incluso como subsecretaria principal.",
          why: "Busca otro mandato para continuar los proyectos de digitalización y acceso a servicios.",
          priorities: ["Notificaciones de Alerta de Fraude de Propiedad", "Mayor acceso a registros en línea", "Presentación electrónica y sistemas automatizados de registros"],
        },
        "John Russell": {
          background: "Evaluador de riesgos de terceros en Amazon; exvicepresidente de JPMorgan Chase. Es su primera campaña a un cargo público.",
          why: "Dice que la oficina debe ser más accesible y dar más importancia a la ciberseguridad y a un servicio inclusivo.",
          priorities: ["Horario de atención por la tarde o con cita", "Mejor acceso para residentes con discapacidades y personas que hablan otros idiomas", "Puestos de ciberseguridad en el condado para proteger los registros públicos"],
        },
      },
    },

    "ccad-1": {
      title: "Junta Directiva del Distrito de Tasación - Lugar 1",
      duty: "Supervisa el presupuesto y las operaciones del Distrito Central de Tasación (avalúos) de Collin y contrata al tasador principal. La junta no fija el valor de propiedades individuales. Uno de los tres directores elegidos este año será sorteado para un mandato de dos años.",
      candidates: {
        "Randal Shinn": {
          background: "Director actual del Lugar 1 y secretario de la junta; corredor de bienes raíces según su solicitud de candidatura.",
        },
      },
    },

    "ccad-2": {
      title: "Junta Directiva del Distrito de Tasación - Lugar 2",
      candidates: {
        "Michael G. Smith": {
          background: "Ejecutivo de empresas y contador público certificado con experiencia en impuestos y gobernanza.",
          why: "Dice que quiere aportar a la junta la experiencia de supervisión de un contador público y que los propietarios merecen tasaciones precisas y explicaciones claras.",
          priorities: ["Tasaciones precisas y consistentes, y gasto eficiente", "Explicaciones claras de los valores", "Supervisión con indicadores medibles, como la precisión de las tasaciones y las tendencias de las protestas"],
        },
        "Andrew Cook": {
          background: "Consultor de bienes raíces; director de la junta de tasación desde 2024, actualmente en el Lugar 3.",
          why: "Dice que quiere dar continuidad y, al mismo tiempo, fortalecer la supervisión, la transparencia y la rendición de cuentas.",
          priorities: ["Supervisión cuidadosa del presupuesto", "Avances medibles en el plan de nuevos avalúos (retasación)", "Procedimientos de quejas justos y transparentes", "Nombramientos calificados a la Junta de Revisión de Tasaciones"],
        },
      },
    },

    "ccad-3": {
      title: "Junta Directiva del Distrito de Tasación - Lugar 3",
      candidates: {
        "Joe Corcoran": {
          background: "Miembro del Concejo Municipal de Richardson desde 2021 y presidente de su comité de auditoría; experiencia en auditoría interna y cumplimiento corporativo.",
          why: "Su campaña destaca el manejo cuidadoso del presupuesto y el acercamiento a los propietarios y a las entidades tributarias más pequeñas.",
          priorities: ["Reuniones periódicas con asociaciones de propietarios, agentes inmobiliarios y grupos cívicos", "Manejo cuidadoso del presupuesto del distrito", "Una voz para las entidades tributarias más pequeñas"],
        },
      },
    },

    "princeton-6": {
      title: "Concejo Municipal de Princeton - Lugar 6",
      duty: "Fija las políticas, el presupuesto, la tasa de impuestos y las reglas de uso de suelo de la ciudad, y orienta al administrador municipal. Puesto abierto: Ben Long no se postula.",
      candidates: {
        "Sumbel 'Susan' Zeb": {
          background: "Directora actual de la junta del Distrito Central de Tasación de Collin (Lugar 2); exmiembro del comité que redactó la Carta Municipal de Princeton (Home Rule Charter); socia administradora de una pequeña empresa; exintegrante del personal de proyectos distritales de una oficina del Congreso; maestría en administración pública.",
          why: "Dice que Princeton está en una encrucijada de crecimiento y necesita mejor planificación, un gobierno accesible y una administración profesional.",
          priorities: ["Auditoría independiente externa e información de facturación más clara para los residentes", "Dar seguimiento a los proyectos de capital según necesidad, costo, calendario e impacto a largo plazo", "Atracción selectiva de comercios; se opone a un centro de datos como proyecto de desarrollo económico", "Relación de colaboración con el administrador municipal y acercamiento a través de grupos vecinales"],
        },
        "Kenneth Seligman": {
          background: "Ingeniero petrolero jubilado; cofundador del grupo ciudadano de vigilancia SafeGuard Princeton; organizó peticiones para cambiar la Carta Municipal (Home Rule Charter).",
          why: "Dice que años de participación en el gobierno local lo llevaron a buscar un papel formal en la planificación, la transparencia y el desarrollo comercial.",
          priorities: ["Participación pública más temprana en el presupuesto y un registro de cheques en línea", "Terminar los proyectos de capital comprometidos antes de empezar otros nuevos", "Atraer más desarrollo comercial para ampliar la base tributaria", "Un papel más fuerte del concejo para orientar al administrador municipal"],
        },
      },
    },

    "princeton-7": {
      title: "Concejo Municipal de Princeton - Lugar 7",
      duty: "Fija las políticas, el presupuesto, la tasa de impuestos y las reglas de uso de suelo de la ciudad, y orienta al administrador municipal. Puesto abierto: Carolyn David-Graves no se postula.",
      candidates: {
        "DeShawyna Walker": {
          background: "Miembro de la junta de la Corporación de Desarrollo Económico de Princeton (designada en marzo de 2026); excoordinadora de desarrollo económico y comunitario de la ciudad.",
          why: "No se encontró una plataforma detallada para 2026.",
          note: ES_NO_SITE + " Walker asistió al foro del 26 de septiembre, pero no participó en el panel de candidatos.",
        },
      },
    },

    "princeton-isd": {
      title: "Consejo escolar de Princeton ISD (2 puestos)",
      jurisdiction: "Princeton ISD; elegido en todo el distrito. Vote hasta por dos.",
      term: "3 años",
      duty: "Fija las políticas, el presupuesto y la tasa de impuestos del distrito escolar y contrata al superintendente. Ganan los dos candidatos con más votos; no hay segunda vuelta. Aplica a direcciones dentro de Princeton ISD.",
      area: "Solo direcciones dentro de Princeton ISD, que cubre la mayor parte de Princeton. Las direcciones en las orillas de la ciudad pueden estar en otro distrito escolar.",
      candidates: {
        "Charlotte Wilson": {
          background: "Exmaestra en Princeton; candidata al consejo escolar en 2025.",
          why: "En el foro del 26 de septiembre dijo que la educación especial es la mayor necesidad del distrito.",
          priorities: ["Se opone a los vales escolares", "Mejorar el acceso a programas avanzados y la preparación académica", "Mejor currículo, materiales y maestros capacitados para educación especial", "Preocupación de que los cambios en las zonas de asistencia escolar alarguen los trayectos de los alumnos de primaria"],
        },
        "Ricky Gillespie": {
          background: "No se encontró una biografía verificada.",
          note: ES_NO_SITE + " Gillespie no asistió al foro del 26 de septiembre.",
        },
        "Cyndi Darland": {
          background: "Miembro del consejo escolar desde 2020.",
          why: "En el foro del 26 de septiembre mencionó el nivel de lectura de los alumnos, la disciplina en el salón de clases y la defensa de los alumnos con necesidades especiales.",
          priorities: ["Se opone al programa estatal de vales escolares, pero espera efectos locales limitados", "Nivel de lectura de los alumnos y disciplina en el salón de clases", "Apoya los cursos de crédito doble (preparatorios para la universidad), los cursos de tecnología y el ROTC", "Llama a los cambios en las zonas de asistencia escolar un \"mal necesario\" frente a escuelas con exceso de estudiantes"],
        },
        "Starla Sharpe": {
          background: "Miembro del consejo escolar desde 2023; vicepresidenta del consejo.",
          why: "En el foro del 26 de septiembre destacó la educación especial y los programas profesionales.",
          priorities: ["Se opone a los vales escolares porque desvían recursos de las escuelas públicas", "Atender las necesidades de educación especial sin exigir que los padres tengan conocimientos legales", "Ampliar los programas profesionales y técnicos, como calefacción y aire acondicionado (HVAC) y reparación de autos", "Basar los cambios en las zonas de asistencia escolar en datos de inscripción"],
        },
      },
    },

    "county-prop-a": {
      title: "Condado de Collin, Proposición A - Tribunales y cárcel ($296.5 millones)",
      measure: {
        funds: ["Ampliación de la cárcel con unas 550 camas, además de mejoras a puertas de celdas, elevadores y aire acondicionado", "Unos $90 millones para el tribunal: terminar salas de audiencias sin acabar, elevadores y escaleras eléctricas, techo y renovaciones", "Instalaciones de libertad condicional para adultos"],
        taxNote: "El condado proyecta que su tasa de servicio de la deuda podría subir de 4.18 a unos 4.95 centavos por cada $100 de valor durante el programa de seis años (años fiscales 2027-2032) si se aprueban las cuatro proposiciones del condado, suponiendo un crecimiento anual de ingresos del 3%. El administrador del condado dijo que el paquete \"no necesariamente implicaría un aumento de impuestos\". " + ES_BOND_TAX_NOTE,
        forMeans: "El condado podrá emitir hasta $296.5 millones en bonos para estas instalaciones y cobrar impuestos para pagarlos.",
      },
    },

    "county-prop-b": {
      title: "Condado de Collin, Proposición B - Carreteras ($475 millones)",
      measure: {
        funds: ["Caminos de servicio del Dallas North Tollway y un segundo camino de servicio del Outer Loop al oeste de la U.S. 75", "Un camino de servicio de Farmersville hacia el condado de Rockwall", "Ampliación de carreteras existentes y mejoras a intersecciones"],
        forMeans: "El condado podrá emitir hasta $475 millones en bonos para carreteras y cobrar impuestos para pagarlos.",
      },
    },

    "county-prop-c": {
      title: "Condado de Collin, Proposición C - Parques ($6 millones)",
      measure: {
        funds: ["Compra de terrenos para parques y espacios abiertos", "Mejoras a parques existentes", "Proyectos de parques conjuntos entre el condado y las ciudades"],
        forMeans: "El condado podrá emitir hasta $6 millones en bonos para parques y cobrar impuestos para pagarlos.",
      },
    },

    "county-prop-d": {
      title: "Condado de Collin, Proposición D - Instalación de elecciones y registros ($40 millones)",
      measure: {
        funds: ["Oficinas del departamento de elecciones, espacio de capacitación y almacenamiento de equipo", "Almacenamiento de registros del condado y documentos históricos", "El personal del condado recomendó construirla en un terreno del condado en Bloomdale Road, en McKinney"],
        forMeans: "El condado podrá emitir hasta $40 millones en bonos para esta instalación y cobrar impuestos para pagarlos.",
      },
    },

    "collin-college-a": {
      title: "Collin College, Proposición A ($600 millones)",
      jurisdiction: "Todos los votantes del distrito de Collin College (condado de Collin)",
      measure: {
        funds: ["Ampliaciones en los campus de McKinney, Frisco, Wylie y Farmersville, el campus técnico de Allen y el Courtyard Center de Plano", "Una nueva Academia de Aviación en el Aeropuerto Nacional de McKinney", "Nuevos campus planeados en Anna y Royse City"],
        taxNote: "El colegio dice que no espera que el bono aumente su tasa de impuestos, que ha sido de $0.08122 por cada $100 de valor desde 2018. " + ES_BOND_TAX_NOTE,
        forMeans: "El colegio podrá emitir hasta $600 millones en bonos para estas instalaciones y cobrar impuestos para pagarlos.",
        againstMeans: "El colegio no podrá emitir estos bonos.",
      },
    },

    "fifth-3": {
      title: "Corte de Apelaciones del 5.º Distrito - Lugar Núm. 3",
      duty: "Revisa si las decisiones de las cortes de primera instancia, civiles y penales, tienen errores legales; no vuelve a evaluar las pruebas.",
      candidates: {
        "Matthew Kolodoski": {
          background: "Litigante civil en Dallas y socio de una firma de abogados, exasistente judicial de una corte federal de distrito y abogado con certificación de especialidad.",
          why: "Presenta su experiencia en litigios privados y como asistente judicial como preparación para la corte.",
          priorities: ["Revisión de apelaciones basada en el texto y los precedentes", "Experiencia en derecho comercial, del consumidor y de seguros"],
        },
        "Amanda Reichek": {
          background: "Exjueza de la Corte de Apelaciones del 5.º Distrito (2019-2024) y abogada en práctica privada; su campaña dice que redactó más de 500 opiniones de apelación.",
          why: "Busca regresar a la corte con base en su historial previo en apelaciones.",
          priorities: ["Experiencia previa como jueza de apelaciones", "Aplicación justa de los precedentes y acceso a la justicia"],
        },
      },
    },

    "fifth-6": {
      title: "Corte de Apelaciones del 5.º Distrito - Lugar Núm. 6",
      candidates: {
        "Ben Smith": {
          background: "Juez de la Corte de Distrito 380 del condado de Collin desde 2012; exfiscal de los condados de Collin y Kaufman y exabogado en práctica privada.",
          why: "Busca pasar de una corte de primera instancia de jurisdicción general a la corte regional de apelaciones.",
          priorities: ["Experiencia de primera instancia en asuntos penales, de familia y civiles", "Experiencia como fiscal y en práctica privada"],
        },
        "Monica Purdy": {
          background: "Jueza de la Corte de Distrito 95 del condado de Dallas desde 2021; exjueza asociada de las cortes civiles de distrito del estado (2013-2020) y de la ciudad de Dallas (2010-2013); exabogada en práctica privada.",
          why: "Dice que su experiencia en juicios civiles, la educación legal comunitaria y su temperamento judicial la preparan para servir en apelaciones.",
          priorities: ["Experiencia en derecho civil y en cortes de primera instancia", "Educación legal para el público", "Administración de la corte justa, neutral y equilibrada"],
        },
      },
    },

    "fifth-8": {
      title: "Corte de Apelaciones del 5.º Distrito - Lugar Núm. 8",
      duty: "Revisa si las decisiones de las cortes de primera instancia, civiles y penales, tienen errores legales. Puesto abierto: la jueza Dennise Garcia se jubila.",
      candidates: {
        "Ashley Wysocki": {
          background: "Jueza que preside la Corte de Distrito 301 del condado de Dallas; antes fue designada por el gobernador Abbott a las cortes de distrito 162, 44 y 254; exabogada en práctica privada.",
          why: "No se encontró en las fuentes revisadas una justificación detallada ni una plataforma de campaña para 2026.",
        },
        "Andrea D. Plumlee": {
          background: "Jueza de la Corte de Familia de Distrito 330 del condado de Dallas desde 2011, con experiencia previa en cortes de familia y litigios.",
          why: "Menciona el servicio, la independencia judicial, las opiniones oportunas y la revisión cuidadosa del expediente como sus razones para buscar un cargo de apelaciones.",
          priorities: ["Aplicar los precedentes con imparcialidad al expediente", "Mejorar la ayuda a quienes se representan a sí mismos, sin dar asesoría legal", "Proteger la independencia judicial y emitir opiniones a tiempo"],
        },
      },
    },

    "district-219": {
      title: "Juez del Distrito - 219.º Distrito Judicial",
      candidates: {
        "Jennifer Edgeworth": {
          background: "Jueza en funciones; título conjunto en derecho y administración de empresas (JD/MBA) de Baylor; 19 años de práctica antes de llegar al tribunal.",
          priorities: ["Continuar una corte especializada en salud mental financiada con subvenciones", "Educación legal y mentoría para estudiantes"],
        },
      },
    },
    "district-296": {
      title: "Juez del Distrito - 296.º Distrito Judicial",
      candidates: {
        "Piper McCraw": {
          background: "Jueza de la Corte de Distrito 469 desde 2015; exabogada en práctica privada y exfiscal adjunta del condado de Collin. El titular de la Corte 296, John Roach Jr., no busca la reelección.",
        },
      },
    },
    "district-366": {
      title: "Juez del Distrito - 366.º Distrito Judicial",
      candidates: {
        "Tom Nowak": { background: "Juez en funciones, certificado en derecho penal y miembro de la Reserva de la Fuerza Aérea." },
      },
    },
    "district-417": {
      title: "Juez del Distrito - 417.º Distrito Judicial",
      candidates: {
        "Cyndi McCrann Wheless": { background: "Jueza en funciones de la Corte del 417.º Distrito Judicial." },
      },
    },
    "district-429": {
      title: "Juez del Distrito - 429.º Distrito Judicial",
      candidates: {
        "Jill Willis": { background: "Jueza en funciones de la Corte del 429.º Distrito Judicial." },
      },
    },
    "district-471": {
      title: "Juez del Distrito - 471.º Distrito Judicial",
      candidates: {
        "Bryan Gantt": { background: "Juez en funciones de la Corte del 471.º Distrito Judicial." },
      },
    },
    "district-494": {
      title: "Juez del Distrito - 494.º Distrito Judicial",
      candidates: {
        "Kathryn Pruitt": {
          background: "Jueza de derecho familiar con más de 31 años de experiencia legal; certificada en derecho familiar desde 2009.",
          priorities: ["Continuar la resolución alternativa de disputas y la administración de la corte de familia"],
        },
      },
    },

    "ccal-1": { title: "Corte de Ley del Condado Núm. 1", candidates: { "Corinne Mason": { background: "Jueza en funciones de la Corte de Ley del Condado Núm. 1." } } },
    "ccal-2": { title: "Corte de Ley del Condado Núm. 2", candidates: { "Barnett Walker": { background: "Juez en funciones de la Corte de Ley del Condado Núm. 2." } } },
    "ccal-3": { title: "Corte de Ley del Condado Núm. 3", candidates: { "Lance S. Baxter": { background: "Juez en funciones de la Corte de Ley del Condado Núm. 3." } } },
    "ccal-4": { title: "Corte de Ley del Condado Núm. 4", candidates: { "David Rippel": { background: "Juez en funciones de la Corte de Ley del Condado Núm. 4." } } },
    "ccal-5": { title: "Corte de Ley del Condado Núm. 5", candidates: { "Randy Johnson": { background: "Juez desde 2023, después de 38 años litigando casos civiles y penales; tiene tres certificaciones de especialidad." } } },
    "ccal-6": { title: "Corte de Ley del Condado Núm. 6", candidates: { "Jay A. Bender": { background: "Juez en funciones de la Corte de Ley del Condado Núm. 6." } } },
    "ccal-7": { title: "Corte de Ley del Condado Núm. 7", candidates: { "David Waddill": { background: "Juez en funciones de la Corte de Ley del Condado Núm. 7." } } },

    probate: {
      title: "Juez del Tribunal de Sucesiones (herencias) del Condado de Collin",
      duty: "Preside casos de herencias (sucesiones), tutelas y asuntos relacionados.",
      candidates: {
        "Sarah R. Duff": {
          background: "Jueza en funciones del Tribunal de Sucesiones del Condado de Collin.",
          why: "Busca la reelección sin oponente en la elección general.",
        },
      },
    },

    "jp-1": {
      title: "Juez de Paz - Precinto Núm. 1",
      jurisdiction: "Precinto 1 de jueces de paz del condado de Collin",
      area: "Solo direcciones en el Precinto 1 de jueces de paz. La mayor parte de Princeton está en el Precinto 2; el Precinto 1 colinda con el borde oeste de la ciudad.",
      candidates: {
        "Paul M. Raleeh": {
          background: "Juez de paz del Precinto 1 desde hace unos 27 años.",
          why: "Señala el crecimiento de la población y los cambios tecnológicos como los principales retos de la corte.",
          priorities: ["Modernizar el manejo de casos y adoptar herramientas de inteligencia artificial con protecciones de privacidad y revisión independiente", "Contrataciones específicas y personal con capacitación cruzada", "Informes públicos periódicos y un presupuesto sólido", "Mejorar el sitio web de la corte y añadir traducción en vivo"],
        },
      },
    },

    "jp-2": {
      title: "Juez de Paz - Precinto Núm. 2",
      jurisdiction: "Precinto 2 de jueces de paz del condado de Collin",
      area: "Direcciones en el Precinto 2 de jueces de paz, que cubre la mayor parte de Princeton.",
      candidates: {
        "Ellen Kinnebrew": {
          background: "Jueza de paz en funciones del Precinto 2.",
          why: "Busca la reelección a la corte.",
          note: ES_NO_SITE + " No se encontró una plataforma ni una entrevista detallada para 2026.",
        },
        "Darsell E. Johnson": {
          background: "Se verificó su inclusión en la lista oficial y su participación en el foro, pero no se encontró una biografía profesional detallada.",
          why: "Johnson participó en el foro del 3 de octubre de la Liga de Mujeres Votantes y grabó una entrevista como candidato.",
          note: ES_NO_SITE + " Las fuentes escritas revisadas no ofrecieron suficientes detalles verificados para resumir sus posiciones.",
        },
      },
    },

    "jp-3": {
      title: "Juez de Paz - Precinto Núm. 3",
      jurisdiction: "Precinto 3 de jueces de paz del condado de Collin",
      area: "Solo direcciones en el Precinto 3 de jueces de paz. La mayor parte de Princeton está en el Precinto 2; el Precinto 3 colinda con la ciudad por el suroeste.",
      candidates: {
        "Mike Missildine": {
          background: "Juez de paz del Precinto 3 desde 2019; más de 20 años en las fuerzas del orden, incluidas la Patrulla Fronteriza de EE. UU. y oficinas de alguaciles de condado; doctorado en psicología.",
          why: "Busca un tercer mandato.",
          priorities: ["Ampliar el acceso a la corte con un buzón de 24 horas, audiencias por la tarde y audiencias virtuales", "Mediación en línea para resolver casos sin juicio", "Hacer cumplir las leyes contra las faltas injustificadas a la escuela, en coordinación con los distritos escolares"],
        },
        "Irvin Lynn Barrett": {
          background: "Pastor de Allen con más de 34 años de liderazgo pastoral; excapellán de hospicio, agente de seguros con licencia y dueño de una pequeña empresa; candidato a este cargo en 2022.",
          why: "Su campaña destaca la equidad, el acceso y la ayuda temprana a los estudiantes en riesgo.",
          priorities: ["Trabajar con los distritos escolares para identificar a tiempo a los estudiantes en riesgo", "Servicio comunitario y tutorías como alternativas a la detención juvenil por faltar a la escuela", "Audiencias los fines de semana y continuar las audiencias virtuales", "Mediación justa de disputas entre inquilinos y propietarios y de reclamos menores"],
        },
      },
    },
  },
};

window.GUIDE_ES = GUIDE_ES;
