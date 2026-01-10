export default function Plato({ plato }: { plato: Plato }) {
    return (
        <article class="rounded-2xl glass border border-white/5 overflow-hidden hover:bg-white/5 transition-all duration-300 group">
            {/* <!-- Imagen del plato --> */}
            {
                plato.img && (
                    <figure class="relative overflow-hidden">
                        <img
                            class="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                            src={plato.img.url}
                            alt={`Imagen de ${plato.nombre}`}
                            loading="lazy"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                        {plato.etiquetas && <div class="absolute top-2 right-2 flex flex-col gap-2 items-end">
                            {plato.etiquetas.map((etiqueta) => (
                                <span class="rounded-lg px-2 py-1 text-xs font-bold bg-amber-500/90 text-white backdrop-blur-sm shadow-sm" aria-label={`Este plato es ${etiqueta}`}>{etiqueta}</span>
                            ))}
                        </div>}
                    </figure>
                )
            }

            {/* <!-- Información --> */}
            <section class="p-5 space-y-3">
                {/* <!-- Nombre y precio --> */}
                <header class="flex justify-between items-start gap-4">
                    <h2 class="font-['Syne'] text-lg font-bold leading-tight text-white group-hover:text-amber-500 transition-colors" aria-label={`Nombre del plato: ${plato.nombre}`}>{plato.nombre}</h2>
                    {/* <span class="text-lg font-bold text-amber-500 whitespace-nowrap">{plato.precio}</span> */}
                </header>

                {/* <!-- Ingredientes --> */}
                {plato.ingredientes && <p class="font-['Outfit'] text-sm text-gray-400 leading-relaxed" aria-label={`Ingredientes del plato: ${plato.ingredientes}"`}>
                    {plato.ingredientes}
                </p>}

                {/* <!-- Características --> */}
                {plato.horario && <div class="flex flex-wrap gap-2 text-xs pt-2">
                    <span class="rounded-full px-3 py-1 bg-white/10 text-gray-300 border border-white/10" aria-label={plato.horario}>{plato.horario}</span>

                </div>}
            </section>
        </article>

    )
}
