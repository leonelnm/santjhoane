import { useState } from 'preact/hooks'
import FiltroTipos from './FiltroTipos'
import { getCategorias } from '../../api/platos'
import MenuSection from './MenuSection.tsx'

type Props = {
  productos: DishView[]
  lang: Lang
}

export default function MenuVista({productos, lang}: Props) {
  const [seleccionada, setSeleccionada] = useState('Todas')
  const categorias = getCategorias(lang)
  const filtrados = seleccionada === 'Todas' ? productos 
    : productos.filter(plato => plato.category.includes(seleccionada as Category))

  return (
    <div class="flex flex-col gap-6 mt-4">
      <FiltroTipos categorías={categorias} seleccionada={seleccionada} onSelect={setSeleccionada} lang={lang} />
      <MenuSection products={filtrados} title={categorias.get(seleccionada as Category) ?? 'Todas'} lang={lang} />
    </div>
  )
}
