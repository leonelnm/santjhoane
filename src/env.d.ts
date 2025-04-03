/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type TipoPlato =
  | 'Bebida'
  | 'Café'
  | 'Combinados'
  | 'Desayuno'
  | 'Entrantes'
  | 'Porción'
  | 'CombinadosMenestra'
  | 'Batidos'
  | 'Postre'
  | 'Sopas';

type Plato = {
  tipo: TipoPlato[]
  nombre: string;
  precio: string;
  ingredientes?: string;
  dias?: string[];
}