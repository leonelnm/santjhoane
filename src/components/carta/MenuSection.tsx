import { CategoriasOrdenadas } from "../../api/platos";
import Batidos from "./Batidos";
import Plato from "./Plato";

export default function MenuSection({ products, title }: { products: Plato[], title: string }) {

    if (title === 'Todas') {
        const mapProductsByCategoria = new Map<Categoria, Plato[]>()
        CategoriasOrdenadas.forEach((_, categoria) => {
            mapProductsByCategoria.set(categoria, products.filter(plato => plato.categoria.includes(categoria)))
        })

        return (
            <div class="space-y-12">
                {Array.from(mapProductsByCategoria.entries()).map(([categoria, platos]) => (
                    <CategoriaPlatos categoria={CategoriasOrdenadas.get(categoria) ?? ''} platos={platos} />
                ))}
            </div>
        )


    }

    return (
        <CategoriaPlatos categoria={title} platos={products} />
    )
}

function CategoriaPlatos({ categoria, platos }: { categoria: string, platos: Plato[] }) {

    return (
        <section class="flex flex-col gap-4">
            <h2 class="text-3xl font-bold text-amber-500 font-['Syne'] border-b border-white/10 pb-4 mb-6">{categoria}</h2>

            {
                categoria === 'Batidos/Jugos'
                    ? (<Batidos batidos={platos} />)
                    : (
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {platos.map((plato) => (
                                <Plato plato={plato} />
                            ))}
                        </div>
                    )


            }
        </section>
    )

}
