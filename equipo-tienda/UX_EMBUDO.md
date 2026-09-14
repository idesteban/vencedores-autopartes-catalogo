# UX_EMBUDO — wire + microcopy (5 pasos) · v3

Canónico: `ORDEN_EMBUDO_MARCA_LINEA.md` · `MAPA_EMBUDO.md`.  
Live: Pages commit lead · logo PDF · azul/gris · misma pestaña.

## Wire (móvil)

```
[Logo PDF slide1]  Quiénes somos · Tienda · Mezclas · Contacto

#nosotros — Jacobo = el Ingeniero

#tienda
Breadcrumbs: Marca › Línea › Tipo › Producto   [← Volver]

PASO 1 MARCA — grid tarjetas (no FAB)
┌─────────────────┐
│ CH · Chevrolet  │
│ Venta de pedales│
│ fuelles y       │
│ guardapolvos    │
└─────────────────┘  ×7

PASO 2 LÍNEA — chips/cards solo con ≥1 producto PDF
[ Aveo ] [ Sail ] [ Spark ] …

PASO 3 TIPO — chip solo si stock marca+línea
[ Pedales ] [ Guardapolvos ] [ Fuelles ] [ Bujes? ]

PASO 4 GRILLA
┌────┐ ┌────┐
│foto│ │foto│  ref + titleHuman
└────┘ └────┘

PASO 5 FICHA
foto · desc · ref · compatibles
[ Cotizar por WhatsApp ]  sticky · 311
```

Mezclas = `#mezclas` (fuera del embudo). Bujes sin ficha por modelo → link mezclas/WA.

## Microcopy

| Paso / vacío | Copy |
|---|---|
| Subtítulo marca | “Venta de pedales, fuelles y guardapolvos” |
| Línea vacía | “Sin líneas documentadas aún para esta marca en el catálogo PDF.” + WA |
| Tipo vacío | “No hay tipos listados para esta línea en el PDF. Escríbanos por WhatsApp.” |
| Grilla vacía | “Sin productos en este filtro. Cotice por WhatsApp.” + WA 311 |
| Ficha inválida | “Producto no encontrado.” + WA general |
| Bujes sin stock | “Los bujes se cotizan como compuesto.” → `#mezclas` o WA mezclas |
| Prefill WA (canónico biblia) | Pedales / Guardapolvos y fuelles / Mezclas / general — **por línea**, no por CV |

## Criterios UX (pass)

- [x] Embudo 5 pasos misma pestaña
- [x] Tarjetas marca + subtítulo; chips tipo filtrados por stock (`typesFor`)
- [x] Líneas sin productos huérfanos (auditoría: 0 empty lines)
- [ ] Hash `#tienda?paso=…` sync (mapa) — **gap live**
- [ ] Prefill WA por línea (biblia) — live usa título+ref
- [ ] Grilla/ficha vacía con CTA WA — grilla hoy sin botón

## Gaps live vs mapa (concretos)

1. **URL:** estado interno `brands|lines|…`; no escribe/lee `paso=marca|linea|tipo|grilla|ficha` → no deep-link ni refresh.
2. **WA prefill:** `waMessage` = título+ref; biblia pide prefill por línea.
3. **Empty grilla:** sin botón WA (sí hay copy).

Sin Motorduz. No reabrir dark/ámbar.

## Alineación contrato congelado (2026-09-14)

- `tipo=` **plural**: `pedales|guardapolvos|fuelles|bujes` (singular = alias dominio).
- Refs públicas = **P/GP/FU** (no CV en este rebuild).
- Bujes por línea = 0 → sin chip; vía `#mezclas`.
- **Prefill WA por línea (biblia)** aplicado en `catalogo-data.js` `waMessage`.
- Grilla vacía → copy + CTA WA 311.
- Hash `#tienda?paso=` sigue **pendiente** (no Motorduz).
