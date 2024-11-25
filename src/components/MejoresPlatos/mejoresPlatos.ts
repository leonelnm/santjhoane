interface Dish {
  nombre: string;
  descripcion: string;
  imagen: string;
}

const platos: Dish[] = [
  {
    nombre: "Encebollado",
    descripcion: "Pescado, yuca, cebolla, tomate, cilantro, limón, chifles.",
    imagen: "/images/encebollado.webp",
  },
  {
    nombre: "Hornado",
    descripcion: "Cerdo al horno, patata cocida, maduro, mote, ensalada.",
    imagen: "/images/hornado.webp",
  },
  {
    nombre: "Hornado con tortillas",
    descripcion: "Cerdo al horno,llapingachos, maduro, mote, ensalada,aguacate.",
    imagen: "/images/hornado-tortillas.webp",
  },
  {
    nombre: "Llapingachos",
    descripcion: "Llapingachos, chorizo, ternera, salsa de maní, huevo, aguacate, ensalada.",
    imagen: "/images/llapingacho.webp",
  },
];

export default platos;