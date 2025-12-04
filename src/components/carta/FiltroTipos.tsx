type Props = {
    categorías: CategoriaNombre
    onSelect: (cat: string) => void
    seleccionada: string
}

export default function FiltroTipos({ categorías, onSelect, seleccionada }: Props) {

    const categoriasArray = Array.from(categorías.entries());

    return (
        <div class="w-full overflow-x-auto">
            <nav aria-label="Filtros para ver platos por tipo" class="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide">
                <ul class="flex space-x-3 items-center p-1">
                    <li>
                        <button
                            onClick={() => onSelect('Todas')}
                            class={`px-6 py-2.5 text-sm font-bold text-nowrap rounded-full transition-all duration-300 border ${seleccionada === 'Todas' ? 'bg-amber-600 border-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 'glass border-white/10 text-gray-300 hover:bg-white/10'}`}
                            aria-label="Filtro para mostrar todos los platos">
                            Todos
                        </button>
                    </li>
                    {
                        categoriasArray.map(([categoria, nombre]) => (
                            <li key={categoria}>
                                <button
                                    onClick={() => onSelect(categoria)}
                                    class={`px-6 py-2.5 text-sm font-bold text-nowrap rounded-full transition-all duration-300 border ${seleccionada === categoria ? 'bg-amber-600 border-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 'glass border-white/10 text-gray-300 hover:bg-white/10'}`}
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
