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
        <article class=" flex rounded-xl bg-white text-sm shadow hover:shadow-md transition-shadow overflow-hidden items-center">
          {/* <!-- Imagen del plato --> */}
          {
            batido.img && (
              <figure class="relative">
                <img
                  class="w-full h-20 object-cover rounded-l-xl"
                  src={batido.img.url}
                  alt={`Imagen de ${batido.nombre}`}
                  loading="lazy"
                />
              </figure>
            )
          }

          {/* <!-- Información --> */}
          <section class="p-3 space-y-2 flex-1">
            {/* <!-- Nombre y precio --> */}
            <header class="flex justify-between items-center">
              <h2 class="text-base font-semibold leading-tight line-clamp-2 text-[#78350f]" aria-label={`Nombre del batido: ${batido.nombre}`}>{batido.nombre}</h2>
              <div class={"flex flex-col gap-1"}>
                {batido.variantes.map(({ ingredientes, precio }) => (
                  <div class="flex gap-2 items-center justify-between">
                    <p class="text-xs font-semibold text-[#78350f]" aria-label={ingredientes}>{ingredientes}</p>
                    <span class="text-sm font-semibold text-amber-600" aria-label={`Precio: ${precio}`}>{precio}</span>
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