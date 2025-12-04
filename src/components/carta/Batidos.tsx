interface Variante {
    ingredientes?: string;
    precio: string;
}

interface BatidoTransformado {
    nombre: string;
    categoria: string;
    variantes: Variante[];
    img?: Image;
}


export default function Batidos({ batidos }: { batidos: Plato[] }) {
    const batidosTransformados: BatidoTransformado[] = [];

    batidos.forEach(batido => {
        const existente = batidosTransformados.find(item => item.nombre === batido.nombre);
        const img = batido.img || batido.img2 || batido.img3;
        const variante: Variante = {
            ingredientes: batido.ingredientes && batido.ingredientes.charAt(0).toUpperCase() + batido.ingredientes.slice(1),
            precio: batido.precio
        };

        if (existente) {
            existente.variantes.push(variante);
        } else {
            batidosTransformados.push({
                nombre: batido.nombre,
                categoria: batido.categoria[0],
                variantes: [variante],
                img
            });
        }
    });

    return (
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {batidosTransformados.map((batido) => (
                <article class="flex rounded-2xl glass border border-white/5 overflow-hidden items-center hover:bg-white/5 transition-all duration-300 group">
                    {/* <!-- Imagen del plato --> */}
                    {
                        batido.img && (
                            <figure class="relative h-full w-24 shrink-0">
                                <img
                                    class="w-full h-full object-cover"
                                    src={batido.img.url}
                                    alt={`Imagen de ${batido.nombre}`}
                                    loading="lazy"
                                />
                            </figure>
                        )
                    }

                    {/* <!-- Información --> */}
                    <section class="p-4 flex-1 space-y-2">
                        {/* <!-- Nombre y precio --> */}
                        <header class="flex justify-between items-center gap-2">
                            <h2 class="text-base font-bold leading-tight text-white font-['Syne']" aria-label={`Nombre del batido: ${batido.nombre}`}>{batido.nombre}</h2>
                            <div class={"flex flex-col gap-1"}>
                                {batido.variantes.map(({ ingredientes, precio }) => (
                                    <div class="flex gap-3 items-center justify-end">
                                        <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider" aria-label={ingredientes}>{ingredientes}</p>
                                        <span class="text-sm font-bold text-amber-500" aria-label={`Precio: ${precio}`}>{precio}</span>
                                    </div>
                                ))}
                            </div>
                        </header>

                    </section>
                </article>
            ))}
        </div>
    )
}
