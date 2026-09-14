# Actualización líneas embudo — 2026-09-14 (cache `20260914h`)

## Qué se hizo
1. **`brandLines`** (fuente de verdad del embudo) **no se encogió**: conteos INR 2025 curados (Chevrolet 36 · Renault 28 · Hyundai 26 · Kia 20 · Mazda 19 · Toyota 16 · Nissan 21). Ver `INVESTIGACION_COMPATIBILIDAD_LINEAS.md` y `PROPUESTA_NUEVAS_LINEAS.json`.
2. **Limpieza de contaminación en `products[].fits`**: se restauró la base sana (`f38c4ed`) y se filtró cada `fit.lines` contra `brandLines[brand]`. Caso grave corregido: **P001** tenía modelos Nissan bajo `brand: chevrolet`.
3. **Expansiones de fit solo con evidencia** (mismo COD / sección PDF / LISTADO_PEDALES):
   | Producto | Cambio | Evidencia |
   |----------|--------|-----------|
   | P005 / P007 | Kia +Ion, +Morning, +Eko Taxi | PDF sección Picanto/EkoTaxi/Ion; Morning = Picanto Morning |
   | P007 | Hyundai +Sonata | LISTADO_PEDALES (“SANATA”) |
   | P008 / P011 | Nissan +NP300 | INR NP300 Frontier = familia Frontier/Navara del listado |
   | GP-HYKIA-LR/LC | Hyundai solo Atos; Kia Picanto/Eko Taxi/Ion/Morning | Eko Taxi es línea Kia en INR; sección conjunta PDF |
   | Renault GP/FU | Citius→**Citius Taxi**, Express→**Express Taxi** | Nombres canónicos `brandLines` |
4. **No enlazado sin COD compartido** (línea queda navegable → vacío + WhatsApp): Spark GT, Tracker, Trailblazer, N200, N300, NHR, Cruze, Sonic, Joy, etc. (G/POLVO 33103/33104 y SER11006 **no** listan Spark GT).
5. **Mitsubishi / Ford / VW / Suzuki**: fase 2 (nota en desc P007 para L200/Pajero); **no** se añadió marca al embudo de 7.
6. Helpers restaurados (`waLineForType`); `linesFor` lee solo `brandLines`.

## Conteos `brandLines` (post)
| Marca | Líneas | Con ≥1 producto | Vacías (WA) |
|-------|--------|-----------------|-------------|
| Chevrolet | 36 | 19 | 17 |
| Renault | 28 | 23 | 5 |
| Hyundai | 26 | 10 | 16 |
| Kia | 20 | 5 | 15 |
| Mazda | 19 | 6 | 13 |
| Toyota | 16 | 5 | 11 |
| Nissan | 21 | 3 | 18 |

## Contaminación corregida (ejemplos)
- Chevrolet **no** lista Picanto/Rio/Accent/Elantra ni modelos Nissan.
- Nissan **no** lista Hilux/Prado (solo Frontier/Navara/NP300 en pedales).
- Toyota **no** lista Frontier/Navara; quitados Tacoma/Tundra/TXL/Burbuja del fit (no están en `brandLines` INR).
- Hyundai **no** lleva Eko Taxi (pasa a Kia).

## Cache / deploy
- `catalogo-data.js` + `index.html` → `?v=20260914h`
- Sync `web/` → `web-deploy/` y push `origin main`.
