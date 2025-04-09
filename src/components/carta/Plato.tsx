export default function Plato({ plato }: { plato: Plato }) {
  console.log({ plato });

  return (
    <article class="flex flex-col justify-center gap-2 rounded-lg bg-[#FDF6E3] p-4 shadow-md">
      {plato.img && <img
        src={plato.img.url}
        alt={plato.img.nombre}
          class="h-32 w-32 rounded-lg object-cover"
      />}
      <div class="flex justify-between">
        <h3 class="text-xl font-semibold">{plato.nombre}</h3>
        <span>{plato.precio}</span>
      </div>
      
      <p class="text-lg">{plato.ingredientes}</p>
    </article>
  )
}