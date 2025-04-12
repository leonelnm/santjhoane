export default function Plato({ plato }: { plato: Plato }) {
  return (
    <article class="rounded-xl bg-white text-sm shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {/* <!-- Imagen del plato --> */}
      {
        plato.img && (
          <figure class="relative">
            <img
              class="w-full h-40 object-cover rounded-t-xl sm:h-60"
              src={plato.img.url}
              alt={`Imagen de ${plato.nombre}`}
              loading="lazy"
            />
            {/* <!-- Cubrir la imagen con un div tarnsparente --> */}
            <div class="absolute inset-0 bg-transparent"></div>

            {plato.etiquetas && <div class="absolute top-0 right-0 p-2 opacity-90">
              <div class="flex flex-col gap-2 items-end">
                {plato.etiquetas.map((etiqueta) => (
                  <span class="rounded-xl px-2 py-0.5 bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200" aria-label={`Este plato es ${etiqueta}`}>{etiqueta}</span>
                ))}
              </div>
            </div>}
          </figure>
        )
      }

      {/* <!-- Información --> */}
      <section class="p-3 space-y-2">
        {/* <!-- Nombre y precio --> */}
        <header class="flex justify-between items-start">
          <h2 class="font-[Poppins-SemiBold] text-base leading-tight line-clamp-2 text-[#78350f]" aria-label={`Nombre del plato: ${plato.nombre}`}>{plato.nombre}</h2>
          <span class="text-sm font-semibold text-amber-600">{plato.precio}</span>
        </header>

        {/* <!-- Ingredientes --> */}
        {plato.ingredientes && <p class="font-[Roboto] text-sm text-amber-700 line-clamp-2" aria-label={`Ingredientes del plato: ${plato.ingredientes}"`}>
          {plato.ingredientes}
        </p>}

        {/* <!-- Características --> */}
        {plato.horario && <div class="flex flex-wrap gap-1 text-xs">
          <span class="rounded-full px-2 py-0.5 bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200" aria-label={plato.horario}>{plato.horario}</span>

        </div>}
      </section>
    </article>

  )
}