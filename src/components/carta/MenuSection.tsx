import { getCategorias } from "../../api/platos";
import Batidos from "./Batidos";
import Plato from "./Plato";

export default function MenuSection({ products, title, lang }: { products: DishView[], title: string, lang: Lang }) {
    const categorias = getCategorias(lang);

    if (title === 'Todas') {
        const mapProductsByCategoria = new Map<Category, DishView[]>()
        categorias.forEach((_, categoria) => {
            mapProductsByCategoria.set(categoria, products.filter(plato => plato.category.includes(categoria)))
        })

        return (
            <div class="space-y-12">
                {Array.from(mapProductsByCategoria.entries()).map(([categoria, platos]) => (
                    <CategoriaPlatos categoria={categorias.get(categoria) ?? ''} platos={platos} lang={lang} />
                ))}
            </div>
        )


    }

    return (
        <CategoriaPlatos categoria={title} platos={products} lang={lang} />
    )
}

function CategoriaPlatos({ categoria, platos, lang }: { categoria: string, platos: DishView[], lang: Lang }) {
    const categorias = getCategorias(lang);
    const smoothiesLabel = categorias.get('smoothies') ?? '';

    return (
        <section class="flex flex-col gap-4">
            <h2 class="text-3xl font-bold text-amber-500 font-['Syne'] border-b border-white/10 pb-4 mb-6">{categoria}</h2>

            {
                categoria === smoothiesLabel
                    ? (<Batidos batidos={platos} lang={lang} />)
                    : (
                        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {platos.map((plato) => (
                                <Plato plato={plato} lang={lang} />
                            ))}
                        </div>
                    )


            }
        </section>
    )

}
