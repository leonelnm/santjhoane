# Sant Jhoan'e — Restaurante Ecuatoriano

## Stack & comandos

Ver `AGENTS.md`.

## Convención de días en `data.json`

El campo `availableDays` usa las siguientes abreviaturas:

| Abreviatura | Significado |
|-------------|-------------|
| `friday`    | Viernes     |
| `saturday`  | Sábado      |
| `sunday`    | Domingo     |

En los datos originales `Días` usaba:

- `V` → Viernes (`friday`)
- `F` → Fin de semana (sábado y domingo: `saturday`, `sunday`) y festivos

Un array vacío `[]` significa que el plato está disponible todos los días.

## Estructura de datos

`src/api/data.json` usa el schema `Dish` (definido en `src/env.d.ts`):

- `category`: array de slugs en inglés (ej. `["combo-platters", "starters"]`)
- `name`: objeto `{ es: string, en: string }`
- `ingredients`: objeto `{ es: string[], en: string[] }`
- `images.default`: imagen principal desde Cloudinary
- `images.featured`: imagen destacada (usada en home) — puede ser ruta local `/images/*.webp`
