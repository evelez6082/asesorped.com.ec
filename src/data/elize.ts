// Rama "Asesoría EduTech" de ASESORPED S.A., en alianza con elize (ERP educativo).
// Marca elize: naranja #E97006, oliva #C8BF83, crema #F7F7ED. Nunca texto blanco sobre oliva.
// Logo: colocar los PNG oficiales del wordmark en /public/img/elize/ y poner aquí la ruta.
// No recrear el logo con una tipografía parecida.

export const elize = {
  // CONFIRMAR: ruta del wordmark oficial (p. ej. '/img/elize/elize-negro.png'). Vacío = se muestra el nombre en texto.
  logo: '',
  logoOnColor: '', // p. ej. '/img/elize/elize-blanco.png'
  url: 'https://www.elize.com.ec',
  tagline: 'ERP Educativo Inteligente',
  waMessage: 'Hola, represento a una institución educativa y quiero información sobre la Asesoría EduTech con elize.',
};

export const elizeModules = [
  {
    name: 'Elize Learn',
    kicker: 'Núcleo académico',
    items: ['Aula virtual y evaluaciones', 'Calificaciones y asistencias', 'Planificación curricular', 'Horarios con IA', 'DECE e inspección'],
  },
  {
    name: 'Elize Admin',
    kicker: 'Núcleo administrativo y financiero',
    items: ['Colecturía y pasarela de pagos', 'Facturación electrónica', 'Control de morosidad', 'Admisiones y gestión documental', 'Reportes'],
  },
  {
    name: 'Elize Academy',
    kicker: 'Capacitación del personal',
    items: ['Formación en el uso de la plataforma', 'Transformación digital de docentes y administrativos'],
  },
  {
    name: 'Elizio',
    kicker: 'Soporte 24/7',
    items: ['Asistente conversacional que responde dudas del personal a cualquier hora'],
  },
];

export const edutechServices = [
  {
    icon: 'target',
    title: 'Diagnóstico de madurez digital',
    text: 'Revisamos procesos académicos, administrativos y financieros para identificar qué digitalizar primero y con qué impacto.',
  },
  {
    icon: 'screen',
    title: 'Implementación de elize',
    text: 'Configuramos el ERP educativo según la realidad de su institución: oferta académica, pensiones, roles y reportes.',
  },
  {
    icon: 'users',
    title: 'Capacitación y adopción',
    text: 'Formamos a directivos, docentes y personal administrativo para que la herramienta se use todos los días, no solo el primer mes.',
  },
  {
    icon: 'book',
    title: 'Acompañamiento pedagógico-tecnológico',
    text: 'Alineamos la tecnología con la planificación, la evaluación y la normativa educativa vigente.',
  },
];
