import { useTranslations } from "../../i18n/utils";

type Props = {
    categorías: CategoryName
    onSelect: (cat: string) => void
    seleccionada: string
    lang: Lang
}

export default function FiltroTipos({ categorías, onSelect, seleccionada, lang }: Props) {

    const t = useTranslations(lang);
    const categoriasArray = Array.from(categorías.entries());
    const allLabel = t("filter.all");
    const allKey = 'Todas';

    return (
        <div class="w-full overflow-x-auto">
            <nav aria-label={t("filter.aria")} class="flex space-x-3 overflow-x-auto pb-4 scrollbar-hide">
                <ul class="flex space-x-3 items-center p-1">
                    <li>
                        <button
                            onClick={() => onSelect(allKey)}
                            class={`px-6 py-2.5 text-sm font-bold text-nowrap rounded-full transition-all duration-300 border ${seleccionada === allKey ? 'bg-amber-600 border-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 'glass border-white/10 text-gray-300 hover:bg-white/10'}`}
                            aria-label={t("filter.all-aria")}>
                            {allLabel}
                        </button>
                    </li>
                    {
                        categoriasArray.map(([categoria, nombre]) => (
                            <li key={categoria}>
                                <button
                                    onClick={() => onSelect(categoria)}
                                    class={`px-6 py-2.5 text-sm font-bold text-nowrap rounded-full transition-all duration-300 border ${seleccionada === categoria ? 'bg-amber-600 border-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 'glass border-white/10 text-gray-300 hover:bg-white/10'}`}
                                    aria-label={t("filter.category-aria") + nombre}>
                                    {nombre}
                                </button>
                            </li>
                        ))

                    }

                </ul>
            </nav>
        </div>
    )


}

