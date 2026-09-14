# QA Lanzamiento — embudo v3 (live Pages `635a6ad`)

**URL:** https://idesteban.github.io/vencedores-autopartes-catalogo/  
**Cruce:** `MAPA_EMBUDO.md` + orden Esteban + checklist QA  
**Veredicto:** **PASS condicional** (bloqueantes OK; 4 fails menores)

## Bloqueantes — PASS

| Check | Resultado |
|---|---|
| Orden `#nosotros` → `#tienda` → `#mezclas` → `#descargas` → `#contacto` | PASS |
| Jacobo = el Ingeniero (~30 años caucho) | PASS |
| WA principal `573114560990` / +57 311 456 0990 (no 317) | PASS |
| Sin precios / sin carrito | PASS |
| Logo nav PDF (`va-logo-pdf-nav.png` 64px; og = slide1) | PASS |
| Paleta azul/gris `#0033A0` / `#050B61` / `#E9EBEF` — cero negro/dorado/ámbar | PASS |
| Embudo misma pestaña Marca → Línea → Tipo → Grilla → Ficha + WA | PASS |
| Tarjetas marca + “Venta de pedales, fuelles y guardapolvos” (no FAB) | PASS |
| Chip tipo solo con stock (`typesFor`) | PASS |
| Datos 7 marcas · 75 líneas · 47 productos · 47/47 `image` en disco | PASS |
| Mezclas fuera del embudo (`#mezclas`) | PASS |
| PDFs descargables | PASS |
| GitHub Pages HTTPS | PASS |
| Fotos producto `object-fit: contain` | PASS |
| Copy mercado colombiano / Bosa | PASS |

## Fails menores (no bloquean lanzamiento)

| # | Severidad | Hallazgo | Evidencia | Fix sugerido |
|---|---|---|---|---|
| 1 | Menor | Sin deep-link `#tienda?paso=` — refresh pierde estado | `script.js` state en memoria; mapa pide query | Persistir `paso/marca/modelo/tipo/ref` en hash |
| 2 | Menor | Prefill WA por título+ref, no por `waLine` | `waMessage(p)` genérico | Prefill Pedales / Fuelles / Mezclas según tipo |
| 3 | Menor | Grilla vacía sin CTA WA | `renderProducts` empty solo texto | Mismo empty+WA que líneas/tipos |
| 4 | Nit | Favicon aún legado | `va-favicon-32.png` ≠ V PDF | Favicon desde slide1 |

## Notas alineadas a Datos/UX (no reabren Motorduz)

- `bujes` en `types[]` pero 0 products por línea → chip no aparece (correcto); ruta = `#mezclas`.
- Hilux/etc. sin guardapolvo PDF → vacío honesto vía `typesFor` (PASS comportamiento).
- Mapa `tipo=pedal` singular vs data `pedales` plural — irrelevante hasta existir hash.

## Bloqueo inventos

Sin inventar SKU/OEM/precios en este rebuild. Refs vivas = P/GP/FU del PDF.

**QA no bloquea publicar.** Corregir fails 1–3 en el siguiente commit si hay capacidad.
