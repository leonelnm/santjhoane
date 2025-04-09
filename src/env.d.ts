/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type Categoria =
  | 'Batidos'
  | 'Bebida'
  | 'Café'
  | 'Combinados'
  | 'Desayuno'
  | 'Entrantes'
  | 'Porción'
  | 'Postre'
  | 'Sopas';

type Plato = {
  categoria: Categoria[]
  nombre: string;
  precio: string;
  ingredientes?: string;
  dias?: string[];
  img?: Image
  img2?: Image
  img3?: Image
}

type Image = {
  nombre: string;
  url: string;
}

type CategoriaNombre = Map<Categoria, string>