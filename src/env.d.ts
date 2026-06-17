/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type Categoria =
  | "breakfast"
  | "starters"
  | "combo-platters"
  | "sides"
  | "soups"
  | "smoothies"
  | "desserts"
  | "beverages"
  | "coffee";

type Lang = "es" | "en";

type CategoriaNombre = Map<Categoria, string>;

type LocalizedString = Record<Lang, string>;

type LocalizedList = Record<Lang, string[]>;

interface CloudinaryImage {
  name: string;
  url: string;
}

interface DishImages {
  default?: CloudinaryImage;
  featured?: CloudinaryImage;
}

interface Dish {
  id: string;
  category: Categoria[];
  isFeatured: boolean;
  name: LocalizedString;
  price?: number;
  ingredients: LocalizedList;
  availableDays: string[];
  images?: DishImages;
}

type Image = CloudinaryImage;

type Plato = {
  categoria: Categoria[];
  isFeatured: boolean;
  nombre: string;
  precio: string;
  ingredientes?: string;
  dias?: string[];
  img?: Image;
};
