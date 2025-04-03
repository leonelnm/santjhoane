export const getAllPlatos = async (): Promise<Plato[]> => {
  //const data = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSyUe7GhG9-vPHZV1dQY5Ctazj6xOpq0oMS8btOC_f-hztLVx-FTkoka3YT7LenWIGZvMofpSXGFOOD/pub?output=csv")
  const data = await fetch("/data/products.csv");
  const csv = await data.text()
  return csvToPlatos(csv);
}

export const getPlatosByTipo = async (tipo: TipoPlato): Promise<Plato[]> => {
  const platos = await getAllPlatos()
  return platos.filter(plato => plato.tipo.includes(tipo));
}

const csvToPlatos = (csv: string): Plato[] => {
  const lines = csv.split("\n").filter(line => line.trim() !== ""); // Elimina líneas vacías

  return lines.map((line) => {

    const [tipo, nombre, precio, ingredientes, dias] = line.match(/(".*?"|[^",\n]+)(?=\s*,|\s*$)/g) || [];

    if (!tipo) {
      return null;
    }

    // Convertir 'tipo' a un array de tipos sencillos
    const tipos = tipo.trim().split('|').map(t => t.trim() as TipoPlato);

    // Convertir 'dias' a un array (puede ser undefined, 'V' o 'V|F')
    const diasArray = dias ? dias.split('|').map(d => d.trim()) : undefined;

    return {
      tipo: tipos,
      nombre: nombre.trim(),
      precio: removerComillas(precio),
      ingredientes: ingredientes ? ingredientes.replace(/"/g, "").trim() : undefined,
      dias: diasArray
    };
  })
    .filter(p => p !== null);

}

const removerComillas = (str: string): string => {
  return str.replace(/"/g, "");
}


