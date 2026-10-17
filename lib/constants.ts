export const SITE = {
  name: "SOLCA Decoraciones",
  shortName: "SOLCA",
  tagline: "Diseñamos espacios que inspiran.",
  description:
    "Decoración de interiores, ambientación de eventos y manualidades con acabados de alta calidad. Regalos personalizados y maquetas hechas a mano, con diseño cuidado en cada detalle.",
  url: "https://solca-decoraciones.vercel.app",
  locale: "es_PY",
  instagram: "https://www.instagram.com/solcamila_manualidades",
  instagramHandle: "@solcamila_manualidades",
  phone: "+595 983 888009",
  phoneHref: "tel:+595983888009",
  whatsapp: "https://wa.me/595983888009",
  email: "evitamespinola@gmail.com",
  location: "Paraguay",
};

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export type Service = {
  title: string;
  description: string;
  icon: "sofa" | "sparkles" | "gift" | "compass";
};

export const SERVICES: Service[] = [
  {
    title: "Decoración de interiores",
    description:
      "Ambientación integral de espacios que combina estética, funcionalidad y confort para transformar cada estancia.",
    icon: "sofa",
  },
  {
    title: "Ambientación de eventos",
    description:
      "Arcos de globos, flores y ambientaciones a medida para cumpleaños, baby showers y celebraciones inolvidables.",
    icon: "sparkles",
  },
  {
    title: "Manualidades y regalos personalizados",
    description:
      "Piezas artesanales y regalos a medida, cuidados en cada detalle para hacer único cualquier momento.",
    icon: "gift",
  },
  {
    title: "Asesoramiento y maquetas",
    description:
      "Acompañamiento cercano y maquetas personalizadas para visualizar tu proyecto antes de hacerlo realidad.",
    icon: "compass",
  },
];

export type GalleryItem = {
  title: string;
  category: string;
  image: string;
};

export const GALLERY: GalleryItem[] = [
  { title: "Ambientación rosa y dorado", category: "Eventos", image: "/images/work-3.jpg" },
  { title: "Arco dorado y girasoles", category: "Eventos", image: "/images/work-4.jpg" },
  { title: "Baby shower Pequeño Príncipe", category: "Eventos", image: "/images/work-5.jpg" },
  { title: "Cumpleaños esmeralda y dorado", category: "Eventos", image: "/images/work-6.jpg" },
  { title: "Ambientación dorada", category: "Eventos", image: "/images/work-7.jpg" },
  { title: "Cumpleaños temático La Granja", category: "Eventos", image: "/images/work-8.jpg" },
  { title: "Cumpleaños temático trenes", category: "Eventos", image: "/images/work-9.jpg" },
  { title: "Cumpleaños temático fútbol", category: "Eventos", image: "/images/work-10.jpg" },
  { title: "Cumpleaños temático capibara", category: "Eventos", image: "/images/work-11.jpg" },
  { title: "Ambientación dorada con neón", category: "Eventos", image: "/images/work-12.jpg" },
  { title: "Cumpleaños elegante negro y plata", category: "Eventos", image: "/images/work-13.jpg" },
  { title: "Cumpleaños temático Mujer Maravilla", category: "Eventos", image: "/images/work-14.jpg" },
  { title: "Cumpleaños temático fresas", category: "Eventos", image: "/images/work-15.jpg" },
  { title: "Evento glam rosa y plata", category: "Eventos", image: "/images/work-16.jpg" },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consulta",
    description: "Escuchamos tu visión, tus necesidades y el espíritu del espacio que quieres crear.",
  },
  {
    number: "02",
    title: "Diseño",
    description: "Desarrollamos una propuesta a medida, con moodboards, materiales y una dirección clara.",
  },
  {
    number: "03",
    title: "Ejecución",
    description: "Coordinamos cada detalle de la producción con proveedores y artesanos de confianza.",
  },
  {
    number: "04",
    title: "Entrega",
    description: "Presentamos el espacio terminado, cuidado hasta el último detalle.",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

// The Testimonials section hides itself while this list is empty: add real reviews here.
export const TESTIMONIALS: Testimonial[] = [];

export const SERVICE_OPTIONS = [
  "Decoración de interiores",
  "Ambientación de eventos",
  "Manualidades y regalos personalizados",
  "Asesoramiento y maquetas",
];
