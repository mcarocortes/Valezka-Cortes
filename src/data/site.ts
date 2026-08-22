export const site = {
  name: 'Valezka Cortés',
  shortName: 'VC',
  role: 'Psicóloga y mediadora familiar',
  email: 'ps.valezka@gmail.com',
  phone: '+56 9 7746 8657',
  phoneLink: '56977468657',
  address: 'Av. Providencia 2330, oficina 21',
  city: 'Providencia, Santiago',
  hours: [
    { days: 'Lunes a viernes', time: '14:00 – 19:30' },
    { days: 'Sábados', time: '10:00 – 14:00' },
    { days: 'Domingos', time: '11:00 – 14:00' },
  ],
}

export const stats = [
  { value: '9', label: 'años de experiencia' },
  { value: '100+', label: 'personas acompañadas' },
  { value: '20+', label: 'acuerdos de mediación' },
  { value: 'Online', label: 'y presencial' },
]

export const values = [
  {
    title: 'Confidencialidad',
    text: 'Lo que se conversa queda en un espacio protegido. Es la base para que puedas hablar con calma.',
  },
  {
    title: 'Claridad',
    text: 'En mediación y en terapia nombro el proceso con simpleza: qué ocurre, qué se espera y cuáles son los siguientes pasos.',
  },
  {
    title: 'Cuidado',
    text: 'No se trata de apurar una solución. Se trata de sostener el conflicto o el malestar sin perder dignidad.',
  },
]

export type ServiceOption = {
  title: string
  detail: string
  price: string
}

export type Service = {
  id: string
  number: string
  name: string
  tag: string
  summary: string
  options: ServiceOption[]
  note?: string
}

export const services: Service[] = [
  {
    id: 'mediacion-familiar',
    number: '01',
    name: 'Mediación familiar',
    tag: 'Conflictos de familia',
    summary:
      'Un espacio neutral para conversar pensión de alimentos, visitas y cuidado personal, antes de llegar a un juicio.',
    options: [
      {
        title: 'Servicio completo',
        detail:
          'Mediación con o sin acuerdo: notificación de las partes, redacción del documento y tramitación ante el tribunal.',
        price: '$120.000',
      },
      {
        title: 'Acta de mediación frustrada',
        detail:
          'Cuando existe denuncia por violencia intrafamiliar. El documento se entrega el mismo día.',
        price: '$40.000',
      },
      {
        title: 'Mediación online · 1 sesión',
        detail:
          'Citación a las partes. Si no hay acuerdo, se entrega acta de mediación frustrada sin recargo extra.',
        price: '$50.000',
      },
    ],
  },
  {
    id: 'terapia',
    number: '02',
    name: 'Sesiones psicológicas',
    tag: 'Adultos, familia e infancia',
    summary:
      'Acompañamiento para depresión, ansiedad, rupturas, crianza y el malestar que a veces no tiene un nombre claro.',
    options: [
      {
        title: 'Sesión individual o familiar',
        detail:
          'Atención presencial en Providencia u online. La primera conversación sirve para entender el motivo y proponer un ritmo.',
        price: 'Consultar',
      },
    ],
  },
  {
    id: 'ados-2',
    number: '03',
    name: 'Evaluación ADOS-2',
    tag: 'Espectro autista',
    summary:
      'Evaluación estandarizada para orientar un diagnóstico de TEA en niñas, niños y personas adultas.',
    options: [
      {
        title: 'Servicio completo',
        detail:
          'Incluye entrevista inicial, sesión de evaluación, informe y devolución de resultados.',
        price: '$120.000',
      },
    ],
    note: 'Para agendar se solicita el pago anticipado de la mitad del servicio.',
  },
  {
    id: 'flores-de-bach',
    number: '04',
    name: 'Flores de Bach',
    tag: 'Apoyo complementario',
    summary:
      'Una terapia suave para momentos de ruptura, miedo, soledad, estrés u obsesiones. Acompaña el proceso emocional, no lo reemplaza.',
    options: [
      {
        title: 'Primera consulta',
        detail: 'Incluye un frasco. El retiro de cada frasco en las siguientes sesiones tiene un costo de $10.000.',
        price: '$25.000',
      },
    ],
  },
  {
    id: 'seleccion-personal',
    number: '05',
    name: 'Selección de personal',
    tag: 'Empresas',
    summary:
      'Evaluación psicológica para procesos de contratación: entrevistas, informes y una lectura clara del perfil.',
    options: [
      {
        title: 'Proceso a medida',
        detail: 'Se define según el cargo, el número de postulantes y el tipo de informe que necesita la empresa.',
        price: 'Consultar',
      },
    ],
  },
]

export type Article = {
  id: string
  kicker: string
  title: string
  excerpt: string
  body: string[]
}

export const articles: Article[] = [
  {
    id: 'mediacion-obligatoria',
    kicker: 'Mediación',
    title: 'Cuándo la mediación familiar es obligatoria en Chile',
    excerpt:
      'Antes de un juicio de familia, la ley pide un intento de mediación en tres materias concretas.',
    body: [
      'En Chile, si el conflicto tiene que ver con pensión de alimentos, relación directa y regular (visitas) o cuidado personal, el tribunal exige haber pasado por mediación antes de demandar.',
      'No es un trámite vacío. Es una conversación guiada, con una persona neutral, para ver si es posible un acuerdo escrito y válido.',
      'Si hay denuncia por violencia intrafamiliar, el camino cambia: no se fuerza un encuentro que ponga en riesgo a alguien. En esos casos se puede emitir un acta de mediación frustrada.',
      'Un acuerdo de mediación, bien redactado y tramitado, puede evitar meses de juicio y bajar la tensión entre las partes.',
    ],
  },
  {
    id: 'momento-terapia',
    kicker: 'Psicología',
    title: 'Cómo saber si es momento de iniciar una terapia',
    excerpt:
      'No hace falta estar en crisis. A veces basta con notar que algo se repite y ya no se sostiene solo.',
    body: [
      'Las personas suelen llegar cuando el cansancio, la ansiedad o una ruptura ya ocupan demasiado espacio. También llegan padres y madres que no quieren repetir patrones con sus hijos.',
      'Una señal frecuente: has hablado el tema con gente cercana y, aun así, la sensación no cambia. O evitas ciertas conversaciones porque duelen más de lo que puedes sostener.',
      'La primera sesión no obliga a un tratamiento largo. Sirve para poner en palabras lo que ocurre y decidir, con calma, si este espacio te sirve.',
      'El trabajo puede ser presencial u online. Lo importante es la continuidad y un ritmo que se pueda mantener.',
    ],
  },
  {
    id: 'ados-que-es',
    kicker: 'Evaluación',
    title: 'Qué es el ADOS-2 y para quién está indicado',
    excerpt:
      'Es una evaluación observacional, usada en niñas, niños y adultos cuando hay sospecha de TEA.',
    body: [
      'El ADOS-2 (Autism Diagnostic Observation Schedule) es una de las herramientas más utilizadas para orientar el diagnóstico del espectro autista. No es un test de preguntas: es una sesión estructurada de observación.',
      'Se indica cuando hay dudas sobre comunicación, juego, interacción social o patrones repetitivos, tanto en infancia como en adultez.',
      'El proceso completo incluye una entrevista inicial, la evaluación, un informe y una devolución. Esa conversación final es tan importante como el puntaje: traduce el resultado a un lenguaje útil para la familia o la persona evaluada.',
      'Una evaluación no define a nadie. Ofrece un mapa para pedir apoyos, entenderse mejor y tomar decisiones con más información.',
    ],
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Reservas o escribes',
    text: 'Eliges el servicio, un horario y dejas un breve motivo. También puedes escribir por WhatsApp.',
  },
  {
    number: '02',
    title: 'Confirmamos el espacio',
    text: 'Te respondo para confirmar fecha, modalidad y cualquier documento que haga falta.',
  },
  {
    number: '03',
    title: 'Sesión calmada',
    text: 'Presencial en Providencia u online. Un tiempo protegido para hablar, acordar o evaluar.',
  },
  {
    number: '04',
    title: 'Siguiente paso claro',
    text: 'Salimos con un acuerdo, un plan de sesiones o un informe. Nada queda en el aire.',
  },
]

export const weekdaySlots = ['14:00', '15:00', '16:00', '17:00', '18:00', '19:00']
export const saturdaySlots = ['10:00', '11:00', '12:00', '13:00']
export const sundaySlots = ['11:00', '12:00', '13:00']

export function slotsForDate(isoDate: string) {
  if (!isoDate) return []
  const day = new Date(`${isoDate}T12:00:00`).getDay()
  if (day === 0) return sundaySlots
  if (day === 6) return saturdaySlots
  return weekdaySlots
}
