import data from "./data.json"

export const TipoPlatos: Map<TipoPlato, string> = new Map([
  ['Desayuno', 'Desayunos'],
  ['Entrantes', 'Entrantes'],
  ['Combinados', 'Platos Combinados'],
  ['Porción', 'Porciones'],
  ['Sopas', 'Sopas'],
  ['Bebida', 'Bebidas'],
  ['Batidos', 'Batidos/Jugos'],
  ['Postre', 'Postre'],
  ['Café', 'Café'],
])



export const getAllPlatosAsMap = async (): Promise<MapPlato> => {
  const platos = await getAllPlatos()
  const platosMap: MapPlato = {} as MapPlato  
  platos.forEach(plato => {
    plato.tipo.forEach(tipo => {
      if (!platosMap[tipo]) {
        platosMap[tipo] = []
      }
      platosMap[tipo].push(plato)
    })
  })
  return platosMap
}

export const getAllPlatos = async (): Promise<Plato[]> => {
  return getPlatosFromJson(data)
}

export const getPlatosByTipo = async (tipo: TipoPlato): Promise<Plato[]> => {
  const platos = await getAllPlatos()
  return platos.filter(plato => plato.tipo.includes(tipo));
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
  const tiposArray = tipo.split('|').map((t: string) => t.trim() as TipoPlato);
  // convertir "Dias": "V|F" en un array
  const diasArray = dias ? dias.split('|').map((d: string) => d.trim()) : '';

  return {
    tipo: tiposArray,
    nombre,
    precio,
    ingredientes,
    dias: diasArray,
  };
}