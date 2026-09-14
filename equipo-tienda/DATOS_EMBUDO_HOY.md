# Ing. Datos — auditoría embudo v3 (HOY, live)

Fuente: `catalogo-data.js` publicado + `assets/productos/` + PDF único.  
Cruce vs `MAPA_EMBUDO.md` / `ORDEN_EMBUDO_MARCA_LINEA.md`.

## Conteos vivos

| Capa | N | Notas |
|---|---|---|
| Marcas embudo | **7** | chevrolet · kia · mazda · toyota · nissan · hyundai · renault |
| Líneas (`brandLines`) | **75** | 0 líneas huérfanas (toda línea tiene ≥1 product) |
| Productos | **47** | 11 pedales · 27 guardapolvos · 9 fuelles · **0 bujes** |
| Mezclas | **7** | fuera del embudo (`#mezclas`); incluye `mez-bujes` |
| Imágenes | **47/47** | `image` set + archivo existe en disco |

Estructura: `brands` → `brandLines[brandId]` → `products[]` con `brands[]`+`lines[]`+`type`+`ref`+`image`+`description`. Helpers: `linesFor` · `typesFor` · `productsFor` · `getProduct`.

## Refs = PDF (P / GP / FU)

Pedales públicos = **P001…P011** (no CV-* en este rebuild). GP/FU = códigos del PDF. Mitsubishi/Hino **fuera** del embudo de 7 (L200/Pajero solo nota en desc P donde el PDF lo menciona).

## Comportamiento embudo (datos)

| Query | Resultado datos |
|---|---|
| Chevrolet → Aveo → tipos | pedales + guardapolvos + fuelles |
| Toyota → Hilux → tipos | **solo pedales** (P008/P011) — sin guardapolvo/fuelle |
| `tipo=bujes` en cualquier línea | `typesFor` no ofrece chip (0 products) → UX debe vaciar o mandar a `#mezclas` |
| Lancer / Hino | sin marca en embudo |

## Gaps / nits (concretos)

1. **Bujes:** tipo declarado en `types[]` pero sin products por marca+línea — correcto no inventar; chip no debe aparecer (`typesFor` ya filtra). Entrada = `#mezclas` / `mez-bujes`.
2. **Toyota camioneta amplio:** líneas Hilux/Fortuner/Tacoma/Tundra/TXL/Burbuja cuelgan de pedales P008/P011 (universal PDF). **No** hay GP/FU Toyota en data — empty de tipo = honesto.
3. **IDs tipo:** data usa plural `pedales|guardapolvos|fuelles|bujes`; mapa escribe singular — alinear hash `#tienda?tipo=` al plural vivo.
4. **Prefill WA / deep-link:** gaps UX ya reportados (no datos).
5. **Sin Motorduz / sin inventar OEM.**

## Hecho Datos (esta pieza)

- Extracción foto→metadata poblada en live.  
- brand→lines→products coherente (0 huérfanas, 0 image missing).  
- Vacíos honestos tipados (Hilux guardapolvo, bujes por modelo, Lancer/Hino).

Siguiente opcional: renombrar archivos `p00N`→slug estable; documentar página PDF por cada `ref` en tabla auditoría.
