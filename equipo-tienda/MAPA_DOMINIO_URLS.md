# Mapa de dominio — Vencedores Autopartes (v3 · embudo marca→línea→tipo)

**Estado:** vigente bajo `ORDEN_EMBUDO_MARCA_LINEA.md` (supersede v2 ML).  
**Plataforma:** HTML/CSS/JS desde cero. Fuente de artículos = **único PDF** catálogo.  
**Identidad:** logo `assets/logo/va-logo-pdf-slide1.png` (+ slide2). Paleta azul/gris. **Sin** negro/dorado.

Conservar solo: celulares · `#nosotros` Jacobo · sección mezclas.

---

## 1. Embudo canónico (misma pestaña)

```
#nosotros (Jacobo)
    ↓
#tienda paso=marca     → tarjetas marca + subtítulo fijo
    ↓
#tienda paso=linea     → líneas/modelos de ESA marca
    ↓
#tienda paso=tipo      → Pedales · Guardapolvos · Fuelles · Bujes
    ↓
#tienda paso=grilla    → cards foto + título + ref
    ↓
#tienda paso=ficha     → imagen · desc · ref · WhatsApp
```

Mezclas = **fuera del embudo** (`#mezclas`), organización libre azul/gris.

Subtítulo obligatorio bajo cada marca: **"Venta de pedales, fuelles y guardapolvos"**.

---

## 2. Entidades

| Entidad | id | Regla |
|---|---|---|
| Marca (botón) | `chevrolet`, `kia`, `mazda`, `toyota`, `nissan`, `hyundai`, `renault` | Solo las 7 del pedido Esteban en el embudo primario |
| Línea / modelo | slug corto (`sail`, `aveo`, `spark`…) | Solo modelos con ≥1 producto real en PDF |
| Tipo | `pedal` \| `guardapolvo` \| `fuelle` \| `buje` | Chip visible **solo** si hay productos para marca+línea; si no → empty + WA |
| Producto | `ref` + `image` + `titleHuman` + `desc` | Extraído del PDF; cero inventos |
| Mezcla | `MEZ-*` | Sección aparte; no cuelga de marca |
| WA | `waLine` por tipo | Prefill línea; principal `573114560990` |

Marcas extra del PDF viejo (Suzuki, Mitsubishi, Mercedes-Benz): **no** botones del embudo primario. Si aparecen refs, se indexan en búsqueda interna o como línea bajo Chevy/Nissan según PDF — no inventar tarjeta de marca.

---

## 3. URLs (hash, misma pestaña)

| Paso | URL |
|---|---|
| Marcas | `#tienda` o `#tienda?paso=marca` |
| Líneas | `#tienda?paso=linea&marca=chevrolet` |
| Tipos | `#tienda?paso=tipo&marca=chevrolet&modelo=aveo` |
| Grilla | `#tienda?paso=grilla&marca=chevrolet&modelo=aveo&tipo=pedal` |
| Ficha | `#tienda?paso=ficha&ref=CV-02` |
| Mezclas | `#mezclas` |
| Nosotros | `#nosotros` |
| Contacto | `#contacto` |

Back del embudo = cambiar `paso` (breadcrumbs Marca / Línea / Tipo), sin `window.open`.

---

## 4. Taxonomía por marca (solo lo documentado)

### Chevrolet `chevrolet`
Líneas vitrina: Sail · Optra · Aveo · Spark · Sprint · Corsa · LUV · D-Max · Trooper · NPR…  
Tipos con stock tipico: pedal, guardapolvo, fuelle. **Bujes:** solo si PDF trae pieza por modelo; si no, empty→mezclas/WA.

### Kia · Mazda · Hyundai · Renault
Líneas = modelos ya en extractos PDF (Rio/Picanto; 323/626/Mazda3; Accent/Atos/i10; Logan/Sandero/Duster…).  
Tipos según refs reales.

### Toyota `toyota` · Nissan `nissan`
Hoy en datos previos: **solo pedales** (CV-12; CV-10/11).  
`toyota hilux guardapolvo` / líneas sin PDF → empty + WA. **No** inventar Hilux ni Lancer.

### Tipo `buje`
En PDF de mezclas existe compuesto bujes (`MEZ-BUJES`). En embudo por vehículo: mostrar chip solo con producto `type=buje` ligado a marca/modelo. Sin ficha → “Consultar bujes / compuesto por WhatsApp” → `#mezclas` o WA mezclas.

---

## 5. Mapa de secciones (rebuild)

| Orden | Ancla | Contenido |
|---|---|---|
| 1 | `#nosotros` | Jacobo = el Ingeniero |
| 2 | `#tienda` | Embudo 4 pasos (marca→…→ficha) |
| 3 | `#mezclas` | 7 compuestos / organización libre |
| 4 | `#descargas` | PDF(s) oficiales (opcional) |
| 5 | `#contacto` | WA 311 principal; 315/fijo secundarios del PDF |

Eliminar del IA: dark/ámbar, flyer Motorduz, siluetas doradas, anclas `#catalogo/#pedales` como estante principal.

---

## 6. Contratos

- **UX:** UI 4 pasos + breadcrumbs + empty honestos; tarjetas marca (no FAB circulares con texto largo).
- **Visual:** logo PDF slide1 en nav; tokens azul/gris; cards claras.
- **Datos:** poblar solo desde PDF; `image` en `assets/productos/`; no crear Hilux/Lancer/Hino; bujes por modelo solo con evidencia.
- **QA:** logo PDF visible; sin negro/dorado; embudo completo misma pestaña; Jacobo #1; mezclas; WA 311; sin precios.
