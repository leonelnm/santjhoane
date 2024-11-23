interface Dish {
  nombre: string;
  descripcion: string;
  imagen: string;
}

const platos: Dish[] = [
  {
    nombre: "Encebollado",
    descripcion: "Delicioso plato tradicional ecuatoriano",
    imagen: "/images/dish1.avif",
  },
  {
    nombre: "Hornado",
    descripcion: "Delicioso plato tradicional ecuatoriano",
    imagen: "/images/dish2.avif",
  },
  {
    nombre: "Llapingachos",
    descripcion: "Delicioso plato tradicional ecuatoriano",
    imagen: "/images/dish3.avif",
  },
];

export default platos;