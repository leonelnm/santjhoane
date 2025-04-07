type Props = {
  categorías: CategoriaNombre
  onSelect: (cat: string) => void
  seleccionada: string
}

export default function FiltroTipos({ categorías, onSelect, seleccionada }: Props){

  const categoriasArray = Array.from(categorías.entries());
  

  return (
    <div className="flex flex-row gap-2 overflow-x-auto overflow-y-hidden">
      <button
        className={`rounded-lg px-4 py-2 text-sm font-medium ${seleccionada === 'Todas' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
        onClick={() => onSelect('Todas')}
        >
        Todas
      </button>
      {categoriasArray.map(([categoria, nombre]) => (
        <button
          key={categoria}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${seleccionada === categoria ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          onClick={() => onSelect(categoria)}
        >
          {nombre}
        </button>
      ))}
    </div>
  )


}

