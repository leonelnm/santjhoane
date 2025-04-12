type Props = {
  categorías: CategoriaNombre
  onSelect: (cat: string) => void
  seleccionada: string
}

export default function FiltroTipos({ categorías, onSelect, seleccionada }: Props) {

  const categoriasArray = Array.from(categorías.entries());

  return (
    <div class="w-full overflow-x-auto">
      <nav aria-label="Filtros para ver platos por tipo" class="flex space-x-3 overflow-x-auto pb-1">
        <ul class="flex space-x-3 items-center p-1">
          <li>
            <button
              onClick={() => onSelect('Todas')}
              class={`px-4 py-2 text-sm font-semibold text-nowrap rounded-full transition-colors outline-hidden ring-2 ring-opacity-50 ring-amber-500 ${seleccionada === 'Todas' ? 'bg-amber-600 text-amber-50' : 'text-amber-600'}`}
              aria-label="Filtro para mostrar todos los platos">
              Todos
            </button>
          </li>
          {
            categoriasArray.map(([categoria, nombre]) => (
              <li key={categoria}>
                <button
                  onClick={() => onSelect(categoria)}
                  class={`px-4 py-2 text-sm font-semibold text-nowrap rounded-full transition-colors outline-hidden ring-2 ring-opacity-50 ring-amber-500 ${seleccionada === categoria ? 'bg-amber-600 text-amber-50' : 'text-amber-600'}`}
                  aria-label={"Filtrar para mostrar platos por tipo " + nombre}>
                  {nombre}
                </button>
              </li>
            ))

          }

        </ul>
      </nav>
    </div>
  )


}

