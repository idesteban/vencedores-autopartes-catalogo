# UX — Flujo ML: buscar → grilla → ficha → WA (orden azul/gris)

Fuente: `ORDEN_REDISENO_ML_AZUL.md` + mapa dominio v2. Sustituye prioridad del flyer Motorduz: **unidad canónica = PRODUCTO**. Móvil-first. Sin carrito ni precios.

## Flujo feliz (tipo Mercado Libre, ≤3 taps)

1. **Entrada limpia** — Tras `#nosotros` (Jacobo) y `#servicios` (4 chips: Pedales · Guardapolvos · Fuelles · Mezclas), `#tienda` abre con:
   - Campo único: placeholder `Ej. pedal Aveo, guardapolvo Spark, Duster…`
   - Chips de línea + fila de marcas vivas (logo/texto, no OEM endoso)
2. **Grilla de resultados** — Cards producto (no flyer primero):
   - Foto (PDF/`image` o placeholder honesto)
   - `titleHuman` (ej. “Pedal de embrague Chevrolet Aveo / Sail”)
   - `ref` visible (CV-02, GP-CHEV-…)
   - 1 línea de compatibles
3. **Ficha 1:1** `#tienda?ref=CV-02` — foto grande + título + descripción + ref + marcas/modelos documentados + CTA WA sticky.
4. **CTA** `wa.me/573114560990` prefill por **línea** (pedales / guardapolvos y fuelles / mezclas / general).

URL filtros (Dominio): `#tienda?q=&marca=&modelo=&tipo=&ref=`

## Wireframe prosa (móvil)

```
[ V  CAUCHOS VENCEDOR ]          ← logo grande, contraste
Quiénes somos → … Jacobo …

[ Pedales | Guardapolvos | Fuelles | Mezclas ]
[ Buscar marca, modelo o tipo…              ]

Resultados · Pedales · Chevrolet
┌────────┐  ┌────────┐
│ foto   │  │ foto   │
│ Pedal… │  │ Pedal… │
│ CV-01  │  │ CV-02  │
│ Aveo…  │  │ Spark… │
└────────┘  └────────┘

—— Ficha ——
[ foto producto ]
Pedal embrague Aveo / Sail
Ref: CV-02
Sirve: Chevrolet Aveo, Sail…
[ Cotizar por WhatsApp ]
```

## Microcopy vacíos (honesto, cero invento)

| Caso | Mensaje | Acción |
|---|---|---|
| 0 hits (ej. `hilux guardapolvo`, `pedal lancer`) | “Ese modelo aún no está en catálogo web. Escríbenos y Jacobo te confirma.” | CTA WA general + chips |
| Tipo sin marca (mezclas) | “Las mezclas no van por vehículo.” | Chip Mezclas |
| Sin imagen | Placeholder “Foto en catálogo PDF” + link `#descargas` | No inventar foto |
| Query solo código | Si matchea ref → ficha; si no → vacío útil | — |

## Criterios de aceptación UX

- [ ] Buscar “pedal chevrolet aveo” / “guardapolvo spark” → cards con foto+titleHuman+ref+desc
- [ ] Tap card → ficha 1:1 con mismos datos + WA 311
- [ ] `hilux guardapolvo` / `pedal lancer` → vacío + WA, **sin** ficha inventada
- [ ] Flyer Motorduz-dark no es camino principal (secundario o rediseño azul)
- [ ] Densidad baja: una grilla, sin bloques ruidosos encima de resultados
- [ ] Logo V legible en nav; Jacobo sigue primero; sin precios

## Dependencias

Visual: tokens azul/gris + card/ficha. Datos: `image`, `titleHuman`, `searchText`. Dominio: URLs v2. QA: checklist orden ML.
