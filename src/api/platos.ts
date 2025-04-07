import data from "./data.json"

export const CategoriasOrdenadas: CategoriaNombre = new Map([
  ['Desayuno', 'Desayunos'],
  ['Entrantes', 'Entrantes'],
  ['Combinados', 'Platos Combinados'],
  ['Porción', 'Porciones'],
  ['Sopas', 'Sopas'],
  ['Batidos', 'Batidos/Jugos'],
  ['Postre', 'Postres'],
  ['Bebida', 'Bebidas'],
  ['Café', 'Café'],
])

export const getAllPlatos = async (): Promise<Plato[]> => {
  return getPlatosFromJson(data)
}

export const getPlatosByCategoria = async (tipo: Categoria): Promise<Plato[]> => {
  const platos = await getAllPlatos()
  return platos.filter(plato => plato.categoria.includes(tipo));
}

const getPlatosFromJson = async (json: any): Promise<Plato[]> => {
  if(json !== undefined) {
    const platos = json.map((plato: any) => {
      return objectToPlato(plato)
    })
    return platos
  }
  return []
}

const objectToPlato = (obj: any): Plato => {
  const { Tipo: tipo, Nombre: nombre, Precio: precio, Ingredientes: ingredientes, Días: dias } = obj;

  // convertir "Tipo": "Desayuno|Entrantes" en un array
  const tiposArray = tipo.split('|').map((t: string) => t.trim() as Categoria);
  // convertir "Dias": "V|F" en un array
  const diasArray = dias ? dias.split('|').map((d: string) => d.trim()) : '';

  return {
    categoria: tiposArray,
    nombre,
    precio,
    ingredientes,
    dias: diasArray,
  };
}