// Unidades de la Red Educativa Santander. Cada una genera una página en /unidades/[slug].

export type Program = { title: string; text: string; details?: string[] };

export type Unit = {
  slug: string;
  name: string;
  short: string;
  kicker: string;
  icon: 'cap' | 'screen' | 'globe' | 'spark';
  image: string;
  imageAlt: string;
  summary: string;
  intro: string[];
  highlights: { title: string; text: string }[];
  programs: Program[];
  audience: string[];
  waMessage: string;
};

export const units: Unit[] = [
  {
    slug: 'santander-pcei',
    name: 'Unidad Educativa Particular Santander PCEI',
    short: 'Santander PCEI',
    kicker: 'Bachillerato para jóvenes y adultos',
    icon: 'cap',
    image: '/img/graduados.jpg',
    imageAlt: 'Graduados de la Unidad Educativa Santander con toga y birrete',
    summary:
      'Termina tu bachillerato en ciencias en modalidad 100% virtual. Un período lectivo completo en solo 5 meses.',
    intro: [
      'Nuestros programas para personas con escolaridad inconclusa (PCEI) están diseñados para jóvenes y adultos mayores de 18 años que desean completar su bachillerato en ciencias, con clases 100% virtuales adaptadas a sus horarios y necesidades.',
      'Porque la educación no tiene edad, este modelo permite retomar los estudios en cualquier etapa de la vida y abre nuevas oportunidades personales, familiares y laborales.',
    ],
    highlights: [
      { title: '5 meses por período', text: 'Cursas un período lectivo completo en 5 meses: dos períodos en apenas 10 meses.' },
      { title: '100% virtual', text: 'Estudia desde casa o desde el trabajo, con horarios que se adaptan a tu vida.' },
      { title: 'Título de bachiller', text: 'Bachillerato en ciencias en modalidad extraordinaria a distancia.' },
      { title: 'Acompañamiento', text: 'Docentes y tutores que te guían de principio a fin.' },
    ],
    programs: [
      {
        title: 'Bachillerato en Ciencias — modalidad extraordinaria a distancia',
        text: 'Para personas mayores de 18 años que no terminaron el colegio.',
        details: ['Clases sincrónicas y material de repaso', 'Evaluación y seguimiento continuo', 'Proceso de matrícula guiado'],
      },
    ],
    audience: ['Mayores de 18 años con estudios inconclusos', 'Personas que trabajan y necesitan horarios flexibles', 'Quienes buscan ascender o acceder a la universidad'],
    waMessage: 'Hola, quiero información sobre el bachillerato PCEI en la Unidad Educativa Santander.',
  },
  {
    slug: 'santander-online',
    name: 'Unidad Educativa Particular S@ntander Online',
    short: 'Santander Online',
    kicker: 'Educación en línea para niños y adolescentes',
    icon: 'screen',
    image: '/img/robotica.jpg',
    imageAlt: 'Niños aprendiendo con kits de robótica',
    summary:
      'De 2.º de Educación Básica a 3.º de Bachillerato, en modalidad virtual, a tu ritmo y con acompañamiento personalizado.',
    intro: [
      'Estudiar en modalidad online es abrirse a un ámbito educativo sin límites. La educación virtual supera las barreras de tiempo y espacio, y permite que cada estudiante desarrolle sus conocimientos a su propio ritmo, con flexibilidad y acompañamiento personalizado.',
      'En la Red Educativa Santander creemos que la tecnología debe estar al servicio del aprendizaje. Por eso ofrecemos programas de alta calidad que aseguran que niños y jóvenes adquieran las competencias que necesitan para los retos del presente y del futuro.',
    ],
    highlights: [
      { title: '2.º EGB a 3.º BGU', text: 'Toda la trayectoria escolar en una sola institución.' },
      { title: 'A su ritmo', text: 'Flexibilidad para familias que viajan, deportistas o estudiantes con necesidades particulares.' },
      { title: 'Tecnología al servicio del aprendizaje', text: 'Plataforma académica virtual y recursos interactivos.' },
      { title: 'Acompañamiento cercano', text: 'Seguimiento personalizado del progreso de cada estudiante.' },
    ],
    programs: [
      { title: 'Educación General Básica', text: 'Desde 2.º hasta 10.º año de Básica.' },
      { title: 'Bachillerato General Unificado', text: 'De 1.º a 3.º de Bachillerato.' },
    ],
    audience: ['Familias que buscan una alternativa de educación en línea', 'Estudiantes que necesitan flexibilidad de horario', 'Familias ecuatorianas en otras ciudades o en el exterior'],
    waMessage: 'Hola, quiero información sobre la matrícula en Santander Online.',
  },
  {
    slug: 'avle',
    name: 'AVLE — Academia Virtual de Lenguas Extranjeras',
    short: 'AVLE Idiomas',
    kicker: 'Inglés, francés y chino mandarín',
    icon: 'globe',
    image: '/img/idiomas-globo.png',
    imageAlt: 'Globo terráqueo formado por banderas de distintos países',
    summary:
      'La academia en tu casa, proyecta tu futuro. Idiomas 100% en línea con preparación para certificaciones internacionales.',
    intro: [
      'En AVLE formamos personas con competencias lingüísticas sólidas para desenvolverse con éxito en entornos académicos, laborales y culturales a nivel internacional. Nuestra misión es abrir las puertas del mundo a través del aprendizaje de idiomas.',
      'Además del idioma, preparamos a nuestros estudiantes para certificaciones internacionales y los orientamos en becas universitarias, visados académicos y laborales, entrevistas y requisitos lingüísticos de universidades y empleadores.',
    ],
    highlights: [
      { title: '100% en línea', text: 'Clases en vivo y material grabado para repasar desde cualquier lugar.' },
      { title: 'Docentes certificados', text: 'Docentes nativos y con certificaciones internacionales.' },
      { title: 'Certificaciones', text: 'Preparación para TOEFL, IELTS, Cambridge, DELF/DALF y HSK con simuladores.' },
      { title: 'Becas y movilidad', text: 'Orientación sobre becas de grado y posgrado y oportunidades laborales en el exterior.' },
    ],
    programs: [
      {
        title: 'Inglés',
        text: 'Enfoque comunicativo alineado con los estándares de Cambridge University Press & Assessment.',
        details: ['Niños, adolescentes y adultos', '8 meses por nivel', 'Programa ejecutivo con horario a medida'],
      },
      {
        title: 'Francés',
        text: 'Enfoque comunicativo y por tareas, alineado con el MCER y con preparación DELF/DALF.',
        details: ['Niños (8 a 12 años), adolescentes y adultos', '8 a 18 meses por nivel según la edad', 'Programa ejecutivo con horario a medida'],
      },
      {
        title: 'Chino mandarín',
        text: 'Desarrollo integral de las cuatro habilidades del idioma, con ruta hacia el HSK.',
        details: ['Niños (8 a 12 años) y adultos', '8 a 12 meses por nivel', 'Niveles Kuài Lè Hànyǔ 1 y 2, y HSK2 en adelante'],
      },
    ],
    audience: ['Niños, adolescentes y adultos', 'Profesionales que buscan oportunidades internacionales', 'Estudiantes que aspiran a becas en el exterior'],
    waMessage: 'Hola, quiero información sobre los cursos de idiomas de AVLE.',
  },
  {
    slug: 'ecuinnova',
    name: 'ECUINNOVA 3000 — Centro de Formación Integral',
    short: 'ECUINNOVA',
    kicker: 'Aprende, emprende y trabaja',
    icon: 'spark',
    image: '/img/equipo.jpg',
    imageAlt: 'Grupo de profesionales trabajando en equipo',
    summary:
      'Nivelación académica y profesionalización ocupacional: cursos con certificación, preuniversitarios y titulación artesanal.',
    intro: [
      'La sociedad actual demanda preparación continua. ECUINNOVA 3000 es nuestro centro de capacitación integral: cursos prácticos con certificación, pensados para mejorar tu perfil profesional, conseguir empleo o emprender.',
      'También acompañamos a artesanos con experiencia en su proceso de titulación, junto a la Asociación de Artesanos de Pascuales.',
    ],
    highlights: [
      { title: 'Certificación', text: 'Certificado digital y material de apoyo en cada programa.' },
      { title: 'Virtual y presencial', text: 'Modalidad sincrónica, asincrónica o presencial.' },
      { title: 'Capacitadores con trayectoria', text: 'Ex autoridades educativas, docentes universitarios y formadores de formadores.' },
      { title: 'Orientado al empleo', text: 'Contenidos aplicables desde el primer día de trabajo.' },
    ],
    programs: [
      {
        title: 'Formación de Formadores',
        text: 'Didáctica, pedagogía, andragogía y planificación para profesionales que ejercen la docencia, especialmente quienes no tienen título en educación.',
        details: ['20 horas', 'Módulos: perfil docente, didáctica y pedagogía, andragogía, planificación', 'Examen de certificación'],
      },
      {
        title: 'Asistencia Administrativa con manejo de Ofimática',
        text: 'Gestión de información, archivo físico y digital, y comunicación interna y externa con herramientas de ofimática.',
      },
      {
        title: 'Auxiliar Contable',
        text: 'Proceso contable, cálculo de impuestos, nómina, control de bienes y costos, con base legal y tributaria.',
      },
      {
        title: 'Cursos preuniversitarios',
        text: 'Preparación para el examen de ingreso a la universidad, con refuerzo para Medicina e Ingeniería.',
      },
      {
        title: 'Titulación artesanal',
        text: 'Proceso virtual de titulación por práctica profesional para mayores de 22 años con al menos siete años de experiencia, con formación legal, tributaria, ética y empresarial.',
        details: ['Más de 170 ramas artesanales', 'Título legalizado por el Ministerio del Trabajo', 'Duración aproximada: 6 meses'],
      },
    ],
    audience: ['Docentes y capacitadores', 'Personas que buscan empleo o un mejor puesto', 'Bachilleres que se preparan para la universidad', 'Artesanos con experiencia que desean titularse'],
    waMessage: 'Hola, quiero información sobre los cursos de ECUINNOVA.',
  },
];

// Convenios de educación superior — CONFIRMAR alcance y uso de nombres/logos antes de publicar.
export const higherEd = [
  { name: 'UDET', text: 'Educación de tercer y cuarto nivel con clases 100% en línea.' },
  { name: 'Instituto Superior Tecnológico de Tecnologías Inteligentes', text: 'Carreras tecnológicas para continuar tu formación.' },
];
