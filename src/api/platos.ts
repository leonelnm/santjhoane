import data from "./data.json";

const dishes = data as Dish[];

export const CategoriasOrdenadas: CategoryName = new Map([
  ["breakfast", "Desayunos"],
  ["starters", "Entrantes"],
  ["combo-platters", "Platos Combinados"],
  ["sides", "Porciones"],
  ["soups", "Sopas"],
  ["smoothies", "Batidos/Jugos"],
  ["desserts", "Postres"],
  ["beverages", "Bebidas"],
  ["coffee", "Café"],
]);

export const getAllPlatos = async (lang: Lang = "es"): Promise<Plato[]> => {
  return dishes.map((dish) => dishToPlato(dish, lang));
};

export const getPlatosByCategoria = async (
  tipo: Category,
  lang: Lang = "es",
): Promise<Plato[]> => {
  const platos = await getAllPlatos(lang);
  return platos.filter((plato) => plato.category.includes(tipo));
};

export const getFeaturedPlatos = async (
  lang: Lang = "es",
): Promise<Plato[]> => {
  return dishes
    .filter((dish) => dish.isFeatured)
    .map((dish) => dishToPlato(dish, lang));
};

export const getMenuSectionsJsonLD = async (
  includePrices: boolean = false,
  lang: Lang = "es",
) => {
  return Array.from(CategoriasOrdenadas.entries()).map(
    ([categoriaKey, categoriaValue]) => {
      const menuItems = dishes
        .filter((dish) => dish.category.includes(categoriaKey))
        .map((dish) => ({
          "@type": "MenuItem",
          name: dish.name[lang],
          description:
            dish.ingredients[lang].length > 0
              ? dish.ingredients[lang].join(", ")
              : undefined,
          ...(includePrices &&
            dish.price != null && {
              offers: {
                "@type": "Offer",
                price: dish.price,
                priceCurrency: "EUR",
              },
            }),
        }));

      return {
        "@type": "MenuSection",
        name: categoriaValue,
        hasMenuItem: menuItems,
      };
    },
  );
};

function dishToPlato(dish: Dish, lang: Lang): Plato {
  const precio =
    dish.price != null ? dish.price.toFixed(2).replace(".", ",") + "€" : "";

  return {
    category: dish.category,
    isFeatured: dish.isFeatured,
    name: dish.name[lang],
    price: precio,
    ingredients:
      dish.ingredients[lang].length > 0
        ? dish.ingredients[lang].join(", ")
        : undefined,
    availableDays:
      dish.availableDays.length > 0 ? dish.availableDays : undefined,
    img: dish.images?.default,
  };
}
