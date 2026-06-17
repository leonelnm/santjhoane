export type FAQItem = {
  question: string;
  answer: string;
};

const faqData: Record<Lang, FAQItem[]> = {
  es: [
    {
      question: "¿Dónde está ubicado Sant Jhoan'e?",
      answer:
        "Estamos en la Calle Zapadores, 45, en el barrio de Ruzafa, Valencia. Estamos cerca del centro y con fácil acceso en transporte público.",
    },
    {
      question: "¿Cuál es el horario de apertura?",
      answer:
        "Abrimos de lunes a sábado de 09:00 a 21:15, y los domingos y festivos de 09:00 a 19:15. Ofrecemos servicio continuo durante todo el día.",
    },
    {
      question: "¿Qué tipo de cocina ofrecen?",
      answer:
        "Somos un restaurante de cocina ecuatoriana y latina. Ofrecemos desde desayunos tradicionales hasta platos combinados, sopas, batidos, postres caseros y una amplia variedad de bebidas.",
    },
    {
      question: "¿Hacen entregas a domicilio?",
      answer:
        "No ofrecemos entregas a domicilio actualmente. Sin embargo, tenemos disponible la opción de comida para llevar (Take Away). ¡Haz tu pedido y recógelo en el local!",
    },
    {
      question: "¿Aceptan reservas?",
      answer:
        "No, pero disponemos de un salón amplio, por lo que no es necesario reservar. Sin embargo, si tienes un grupo grande o un evento especial, no dudes en contactarnos para coordinar los detalles.",
    },
    {
      question: "¿Cuáles son los platos más populares?",
      answer:
        "Nuestros platos más populares incluyen el encebollado, el llapingacho, la bandeja paisa y nuestros batidos tropicales. Todos preparados con recetas auténticas y productos frescos.",
    },
    {
      question: "¿Ofrecen menú del día?",
      answer:
        "Sí, ofrecemos menú diario de lunes a viernes con opciones variadas que incluyen primero, segundo y bebida. Un menú completo a un precio inmejorable.",
    },
  ],
  en: [
    {
      question: "Where is Sant Jhoan'e located?",
      answer:
        "We are located at Calle Zapadores, 45, in the Ruzafa neighborhood of Valencia. We are close to the city center with easy access via public transportation.",
    },
    {
      question: "What are your opening hours?",
      answer:
        "We are open Monday to Saturday from 09:00 to 21:15, and Sundays and holidays from 09:00 to 19:15. We offer continuous service throughout the day.",
    },
    {
      question: "What type of cuisine do you serve?",
      answer:
        "We are an Ecuadorian and Latin cuisine restaurant. We serve everything from traditional breakfasts to combo platters, soups, smoothies, homemade desserts, and a wide variety of beverages.",
    },
    {
      question: "Do you offer delivery?",
      answer:
        "We do not currently offer delivery. However, we have takeaway service available. Place your order and pick it up at the restaurant!",
    },
    {
      question: "Do you accept reservations?",
      answer:
        "No, but we have a spacious dining area, so reservations are not required. However, if you have a large group or a special event, feel free to contact us to coordinate details.",
    },
    {
      question: "What are the most popular dishes?",
      answer:
        "Our most popular dishes include encebollado, llapingacho, bandeja paisa, and our tropical smoothies. All prepared with authentic recipes and fresh ingredients.",
    },
    {
      question: "Do you offer a daily menu?",
      answer:
        "Yes, we offer a daily menu Monday through Friday with varied options including starter, main course, and a drink. A complete menu at an unbeatable price.",
    },
  ],
};

export const faqList: FAQItem[] = faqData.es;

export function getFaqList(lang: Lang = "es"): FAQItem[] {
  return faqData[lang];
}


