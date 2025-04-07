import { CategoriasOrdenadas } from "../../api/platos";
import Plato from "./Plato";

export default function MenuSection({ products, title }: { products: Plato[], title: string }) {

  if (title === 'Todas') {
    const mapProductsByCategoria = new Map<Categoria, Plato[]>()
    CategoriasOrdenadas.forEach((_, categoria) => {
      mapProductsByCategoria.set(categoria, products.filter(plato => plato.categoria.includes(categoria)))
    })

    return (
      <>
        {Array.from(mapProductsByCategoria.entries()).map(([categoria, platos]) => (
          <CategoriaPlatos categoria={CategoriasOrdenadas.get(categoria) ?? ''} platos={platos} />
        ))}
      </>
    )


  }

  return (
    <CategoriaPlatos categoria={title} platos={products} />
  )
}

function CategoriaPlatos({ categoria, platos }: { categoria: string, platos: Plato[] }) {

  return (
    <section class="flex flex-col gap-4">
      <h2 class="text-2xl font-semibold">{categoria}</h2>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {platos.map((plato) => (
          <Plato plato={plato} />
        ))}
      </div>
    </section>
  )

}


