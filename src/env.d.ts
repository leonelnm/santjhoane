/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type Category =
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

type CategoryName = Map<Category, string>;

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
  category: Category[];
  isFeatured: boolean;
  name: LocalizedString;
  price?: number;
  ingredients: LocalizedList;
  availableDays: string[];
  images?: DishImages;
}

type Image = CloudinaryImage;

type DishView = Omit<Dish, "id" | "name" | "price" | "ingredients" | "availableDays" | "images"> & {
  name: string;
  price: string;
  ingredients?: string;
  availableDays?: string[];
  img?: Image;
};
