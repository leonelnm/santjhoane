import data from "./data.json";

const dishes = data as Dish[];

const categoriasData: Record<Lang, [Category, string][]> = {
  es: [
    ["breakfast", "Desayunos"],
    ["starters", "Entrantes"],
    ["combo-platters", "Platos Combinados"],
    ["sides", "Porciones"],
    ["soups", "Sopas"],
    ["smoothies", "Batidos/Jugos"],
    ["desserts", "Postres"],
    ["beverages", "Bebidas"],
    ["coffee", "Café"],
  ],
  en: [
    ["breakfast", "Breakfast"],
    ["starters", "Appetizers"],
    ["combo-platters", "Combo Plates"],
    ["sides", "Side Dishes"],
    ["soups", "Soups & Ceviches"],
    ["smoothies", "Smoothies & Juices"],
    ["desserts", "Desserts"],
    ["beverages", "Drinks"],
    ["coffee", "Coffee"],
  ],
};

const categoriasMap: Record<Lang, CategoryName> = {
  es: new Map(categoriasData.es),
  en: new Map(categoriasData.en),
};

export const CategoriasOrdenadas: CategoryName = categoriasMap.es;

export function getCategorias(lang: Lang = "es"): CategoryName {
  return categoriasMap[lang];
}

export const getAllPlatos = async (lang: Lang = "es"): Promise<DishView[]> => {
  return dishes.map((dish) => toView(dish, lang));
};

export const getPlatosByCategoria = async (
  tipo: Category,
  lang: Lang = "es",
): Promise<DishView[]> => {
  const platos = await getAllPlatos(lang);
  return platos.filter((plato) => plato.category.includes(tipo));
};

export const getFeaturedPlatos = async (
  lang: Lang = "es",
): Promise<DishView[]> => {
  return dishes
    .filter((dish) => dish.isFeatured)
    .map((dish) => toView(dish, lang));
};

export const getMenuSectionsJsonLD = async (
  includePrices: boolean = false,
  lang: Lang = "es",
) => {
  const cats = getCategorias(lang);
  return Array.from(cats.entries()).map(
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

function toView(dish: Dish, lang: Lang): DishView {
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
