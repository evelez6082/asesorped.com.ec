// Datos generales de ASESORPED S.A. — fuente: RUC, brochure "Red Educativa Santander" y catálogos.
// Todo lo marcado con "CONFIRMAR" debe validarse con el cliente antes de publicar.

export const site = {
  name: 'ASESORPED S.A.',
  tagline: 'Centro de Asesoramiento Pedagógico',
  network: 'Red Educativa Santander',
  networkSlogan: '¡Una sola institución, toda tu educación!',
  url: 'https://asesorped.com.ec',
  description:
    'ASESORPED S.A. es un centro de asesoramiento pedagógico de Guayaquil que integra la Red Educativa Santander: bachillerato para jóvenes y adultos, educación en línea para niños y adolescentes, idiomas, capacitación profesional y asesoría a instituciones educativas.',
  ruc: '0993021210001',
  founded: 2015,
  contact: {
    address: 'Alborada 12.ª etapa, Mz. 9, Villa 32',
    city: 'Guayaquil, Ecuador',
    phones: ['+593 95 868 7875', '+593 99 382 7299'],
    whatsapp: '593958687875',
    email: 'asesorped.sa@gmail.com',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Alborada+12va+etapa+Guayaquil',
  },
  // CONFIRMAR: enlaces a redes sociales
  social: [] as { label: string; href: string }[],
};

export const nav = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Red Educativa', href: '/#red' },
  { label: 'Asesoría', href: '/asesoria' },
  { label: 'EduTech', href: '/edutech' },
  { label: 'Contacto', href: '/contacto' },
];

export function waLink(message = 'Hola, quisiera información sobre los servicios de ASESORPED / Red Educativa Santander.') {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const stats = [
  { value: '2015', label: 'Año de constitución de ASESORPED S.A.' },
  { value: '6', label: 'Frentes educativos en la Red Santander' },
  { value: '30+', label: 'Años de experiencia de nuestra dirección' },
  { value: '170+', label: 'Ramas artesanales para titularse' },
];

export const timeline = [
  {
    year: '2015',
    title: 'Nace ASESORPED S.A.',
    text: 'Con la misión de fortalecer la educación mediante asesoría académica y legal a instituciones y centros de capacitación.',
  },
  {
    year: '2018',
    title: 'Fundamos nuestra unidad educativa',
    text: 'Abrimos la Unidad Educativa Particular Santander para jóvenes y adultos con escolaridad inconclusa (PCEI).',
  },
  {
    year: '2024',
    title: 'Educación formal para niños y jóvenes',
    text: 'Lanzamos Santander Online: de 2.º de Básica a 3.º de Bachillerato, en modalidad virtual.',
  },
  {
    year: '2025',
    title: 'Primera academia de idiomas',
    text: 'Abrimos AVLE, la Academia Virtual de Lenguas Extranjeras, con inglés, francés y chino mandarín y orientación para becas en el exterior.',
  },
  {
    year: 'Hoy',
    title: 'Red Educativa Santander',
    text: 'Un ecosistema que acompaña a cada persona desde la educación básica hasta su desarrollo profesional, el empleo y el emprendimiento.',
  },
];

export const leadership = [
  {
    name: 'MSc. José Acosta Zambrano',
    role: 'CEO y fundador · Rector de la U.E. Santander',
    bio: 'Magíster en Gerencia Educativa con más de tres décadas en educación. Fundador de ASESORPED S.A. y director del Centro de Formación ECUINNOVA 3000.',
  },
  { name: 'Lic. Marlon Salazar Berrones, Mgs.', role: 'Dirección Académica', bio: 'Coordinador académico, capacitador y docente del magisterio fiscal.' },
  { name: 'Víctor Hugo Rosado', role: 'Dirección de Adultos e Inicial', bio: '' },
  { name: 'Lic. Paula Acosta Moreno, MSc.', role: 'Academia Virtual de Lenguas Extranjeras (AVLE)', bio: '' },
  { name: 'Ruth Mora', role: 'Finanzas y control de pagos', bio: '' },
  { name: 'Judith Veloz', role: 'Marketing y comunicaciones', bio: '' },
  { name: 'Lic. María José Vives', role: 'Dirección comercial y fidelización', bio: '' },
];

export const trainers = [
  { name: 'Lic. Mónica Moreira Morán, Mgs.', role: 'Ex coordinadora zonal de educación · Ex directora distrital · Docente universitaria' },
  { name: 'Prof. Carlos Galabay Herrera, Mgs.', role: 'Formador de formadores · Vicerrector U.E. Montessori' },
  { name: 'Ab. Jack Vera Pozo, Mgs.', role: 'Formador de formadores · Docente universitario' },
  { name: 'Lic. Marlon Salazar Berrones, Mgs.', role: 'Coordinador académico · Capacitador' },
  { name: 'Lic. José Acosta Zambrano, Mgs.', role: 'Asesor educativo · Director de ECUINNOVA 3000' },
];
