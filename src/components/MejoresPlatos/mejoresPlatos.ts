interface Dish {
  nombre: string;
  descripcion: string;
  imagen: string;
}

const platos: Dish[] = [
  {
    nombre: "Encebollado",
    descripcion: "Delicioso plato tradicional ecuatoriano",
    imagen: "/images/encebollado.webp",
  },
  {
    nombre: "Hornado",
    descripcion: "Delicioso plato tradicional ecuatoriano",
    imagen: "/images/hornado.webp",
  },
  {
    nombre: "Hornado con tortillas",
    descripcion: "Delicioso plato tradicional ecuatoriano",
    imagen: "/images/hornado-tortillas.webp",
  },
  {
    nombre: "Llapingachos",
    descripcion: "Delicioso plato tradicional ecuatoriano",
    imagen: "/images/llapingacho.webp",
  },
];

export default platos;