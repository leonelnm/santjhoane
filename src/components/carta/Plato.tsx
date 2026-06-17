import { useTranslations } from "../../i18n/utils";

export default function Plato({ plato, includePrices = false, lang }: { plato: DishView, includePrices?: boolean, lang: Lang }) {
    const t = useTranslations(lang);
    const imgAlt = t("dish.img-alt").replace("{name}", plato.name);
    const nameAria = t("dish.name-aria").replace("{name}", plato.name);
    const ingredientsAria = t("dish.ingredients-aria").replace("{ingredients}", plato.ingredients ?? "");

    return (
        <article class="rounded-2xl glass border border-white/5 overflow-hidden hover:bg-white/5 transition-all duration-300 group">
            {
                plato.img && (
                    <figure class="relative overflow-hidden">
                        <img
                            class="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                            src={plato.img.url}
                            alt={imgAlt}
                            loading="lazy"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>
                )
            }

            <section class="p-5 space-y-3">
                <header class="flex justify-between items-start gap-4">
                    <h2 class="font-['Syne'] text-lg font-bold leading-tight text-white group-hover:text-amber-500 transition-colors" aria-label={nameAria}>{plato.name}</h2>
                    {includePrices && <span class="text-lg font-bold text-amber-500 whitespace-nowrap">{plato.price}</span>}
                </header>

                {plato.ingredients && <p class="font-['Outfit'] text-sm text-gray-400 leading-relaxed" aria-label={ingredientsAria}>
                    {plato.ingredients}
                </p>}
            </section>
        </article>
    )
}
