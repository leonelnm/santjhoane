type Plato = {
  tipo: string
  nombre: string;
  precio: string;
  ingreditens?: string;
}


export const getPlatos = async (): Promise<Plato[]> => {
  const data = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSyUe7GhG9-vPHZV1dQY5Ctazj6xOpq0oMS8btOC_f-hztLVx-FTkoka3YT7LenWIGZvMofpSXGFOOD/pub?output=csv")
  const csv = await data.text()
  return csvToPlatos(csv);
}


const csvToPlatos = (csv: string): Plato[] => {
  const lines = csv.split("\n")
  return lines.map((line) => {
    const [tipo, nombre, precio, ingredientes] = line.split(",")
    return {
      tipo: tipo.trim(),
      nombre: nombre.trim(),
      precio: precio.trim(),
      ingredientes: ingredientes ? ingredientes.trim(): undefined,
    }
  })

}


