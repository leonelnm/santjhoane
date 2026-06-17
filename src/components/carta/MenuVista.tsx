import { useState } from 'preact/hooks'
import FiltroTipos from './FiltroTipos'
import { CategoriasOrdenadas } from '../../api/platos'
import MenuSection from './MenuSection.tsx'

type Props = {
  productos: DishView[]
}

export default function MenuVista({productos}: Props) {
  const [seleccionada, setSeleccionada] = useState('Todas')
  const filtrados = seleccionada === 'Todas' ? productos 
    : productos.filter(plato => plato.category.includes(seleccionada as Category))

  return (
    <div class="flex flex-col gap-6 mt-4">
      <FiltroTipos categorías={CategoriasOrdenadas} seleccionada={seleccionada} onSelect={setSeleccionada} />
      <MenuSection products={filtrados} title={CategoriasOrdenadas.get(seleccionada as Category) ?? 'Todas'} />
    </div>
  )
}