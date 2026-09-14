# UX — Embudo v3: Marca → Línea → Tipo → Grilla → Ficha + WA

Fuente: `ORDEN_EMBUDO_MARCA_LINEA.md` + mapa dominio v3. Misma pestaña, carga dinámica. Móvil-first. Logo PDF slide1 · azul/gris · sin negro/dorado.

## Breadcrumbs (4 pasos visibles)

```
Marca  ›  Línea  ›  Tipo  ›  Producto
Chevy     Aveo      Pedal     CV-02
```

- Siempre visibles en `#tienda` tras salir de paso marca.
- Cada crumb es tap → vuelve a ese paso (limpia hijos).
- Paso actual en navy bold; anteriores clicables; futuros muted.
- En ficha el 4º crumb = `ref` o título corto.

## Flujo (wireframe prosa móvil)

**0. Landing** — Logo V PDF grande en nav · `#nosotros` Jacobo · luego `#tienda`.

**1. Marca** — Grid de **tarjetas** (no FAB circulares; el subtítulo es largo):
```
┌──────────────┐
│  [logo/nombre]│
│  Chevrolet    │
│  Venta de     │
│  pedales,     │
│  fuelles y    │
│  guardapolvos │
└──────────────┘
```
7 marcas: Chevy · Kia · Mazda · Toyota · Nissan · Hyundai · Renault.  
Entrada aparte: chip/link **Mezclas** → `#mezclas` (fuera del embudo).

**2. Línea** — Tras clic marca: lista/chips de modelos **solo con producto real** (Aveo, Sail, Spark…).  
Vacío marca: “Aún no hay líneas en catálogo para esta marca” + WA.

**3. Tipo** — Chips: Pedales · Guardapolvos · Fuelles · Bujes.  
Mostrar chip **solo si** hay ≥1 producto para marca+línea.  
Bujes sin ficha por modelo → empty + enlace `#mezclas` o WA.

**4. Grilla** — Cards: foto contain + `titleHuman` + `ref`.

**5. Ficha** — Foto · desc · ref · compatibles · CTA sticky WA 311 (prefill por línea).

## Microcopy vacíos

| Caso | Copy | Acción |
|---|---|---|
| Línea sin tipos | “Para este modelo aún no hay repuestos en el catálogo web.” | WA + Volver a líneas |
| Tipo sin productos | “No hay [pedales] para [Aveo] en el PDF aún.” | WA + crumbs |
| Hilux / Lancer / Hino | Honesto: no inventar | WA general |
| Sin foto | “Ver imagen en catálogo PDF” | `#descargas` si existe |

## Criterios de aceptación UX

- [ ] Embudo completo sin abrir pestaña nueva
- [ ] Breadcrumbs 4 pasos + back/crumb funcionan
- [ ] Tarjetas marca con subtítulo completo legible en móvil
- [ ] Chips tipo/línea solo con datos reales
- [ ] Ficha → WA 311; Jacobo primero; mezclas aparte
- [ ] Cero negro/dorado; logo PDF visible

## Fuera de alcance UX
Extracción imgs/metadata → Datos. Tokens/logo SVG→PNG → Visual. Pass/fail → QA.
