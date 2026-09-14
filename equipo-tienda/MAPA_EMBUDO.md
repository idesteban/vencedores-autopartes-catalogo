# MAPA_EMBUDO — estados y anclas (v3 final)

**Canónico:** `ORDEN_EMBUDO_MARCA_LINEA.md` · Dominio: este archivo supersede detalle de navegación en `MAPA_DOMINIO_URLS.md` v3.  
**Sin Motorduz. Sin negro/dorado. Sin precios/carrito.**

Sitio SPA misma pestaña. Logo nav: `assets/logo/va-logo-pdf-slide1.png`.

---

## Secciones globales (orden fijo)

| Orden | Ancla | Estado UI |
|---|---|---|
| 1 | `#nosotros` | Quiénes somos · Don Jacobo Salinas = el Ingeniero |
| 2 | `#tienda` | Embudo (máquina de estados abajo) |
| 3 | `#mezclas` | Compuestos (fuera del embudo) |
| 4 | `#descargas` | PDF(s) opcionales |
| 5 | `#contacto` | WA **311 456 0990** principal; 315/fijo secundarios si se muestran |

---

## Máquina de estados `#tienda`

Query string canónica (todos opcionales excepto al entrar a un paso):

```
#tienda?paso={marca|linea|tipo|grilla|ficha}&marca={id}&modelo={slug}&tipo={pedales|guardapolvos|fuelles|bujes}&ref={REF}
```

| `paso` | Qué muestra | Params requeridos | Acción al elegir |
|---|---|---|---|
| `marca` (default) | 7 tarjetas marca + subtítulo fijo *“Venta de pedales, fuelles y guardapolvos”* | — | → `paso=linea&marca=` |
| `linea` | Chips/lista de **líneas con ≥1 producto PDF** de esa marca | `marca` | → `paso=tipo&marca=&modelo=` |
| `tipo` | Chips Pedales · Guardapolvos · Fuelles · Bujes **solo si hay stock** marca+modelo | `marca`, `modelo` | → `paso=grilla&…&tipo=` |
| `grilla` | Cards: foto + titleHuman + ref | `marca`, `modelo`, `tipo` | → `paso=ficha&ref=` |
| `ficha` | Imagen · desc · ref · compatibles · CTA WA | `ref` | WA `wa.me/573114560990` + prefill por `waLine` |

Breadcrumbs: `Marca › Línea › Tipo › Producto` — cada segmento vuelve a su `paso` (misma pestaña, sin `window.open`).

### Marcas embudo (ids)

`chevrolet` · `kia` · `mazda` · `toyota` · `nissan` · `hyundai` · `renault`

### Tipos (`tipo`) — **plural vivo** (canónico)

| Valor URL (live) | Alias aceptado | Label UI | `waLine` |
|---|---|---|---|
| `pedales` | `pedal` | Pedales | pedales |
| `guardapolvos` | `guardapolvo` | Guardapolvos | fuelles |
| `fuelles` | `fuelle` | Fuelles de dirección | fuelles |
| `bujes` | `buje` | Bujes | mezclas |

Chip oculto si `count === 0`. Hoy **0 products bujes por línea** → no chip; entrada = `#mezclas` / `mez-bujes`.

Hash-router (pendiente): escribir **plural**; leer también singular.

### `ref`

Del PDF de este rebuild: **P001…P011**, `GP-…`, `FU-…`. No usar CV-* como slug público aquí. Ficha inválida → empty + WA general.

### Prefill WA (biblia, no negociable)

`wa.me/573114560990` + texto de **línea** (`pedales` / `fuelles` / `mezclas` / general). Título+ref en el live = gap menor, no nuevo contrato.

---

## Vacíos honestos (cero invento)

| Caso | UI |
|---|---|
| Marca sin líneas en data | “Aún no hay líneas publicadas” + WA |
| Línea/tipo sin productos | “Ese modelo/tipo aún no está en el catálogo web” + WA |
| Hilux, Lancer, Hino, etc. sin PDF | No crear línea ni ficha |
| Bujes sin producto por modelo | Enlace a `#mezclas` o WA mezclas |
| Sin `image` | Placeholder + link PDF descargas |

---

## Fuera de alcance del embudo

- Flyers Motorduz / dark-ámbar / mula dorada  
- Marcas botones extra (Suzuki, Mitsubishi, MB) — no en paso `marca`  
- Búsqueda libre tipo ML (opcional futura; no bloquea v3)  
- Precios, Shopify, WordPress  

---

## Contratos rápidos

- **UX:** wire 5 pasos + microcopy vacíos → `UX_EMBUDO.md`  
- **Visual:** tokens azul/gris + nav logo slide1  
- **Datos:** `brands[].lines[]` → `products[]` filtrables por marca/modelo/tipo/ref; solo PDF  
- **QA:** pass si marca→…→ficha→WA311 + Jacobo #1 + mezclas + logo + sin dorado/negro  

**Hecho dominio:** este mapa es la especificación de estados para integrar en `script.js` / data.
