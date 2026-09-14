# Diseño Visual v3 — embudo: logo PDF + tarjetas marca (no FAB)

Orden: `ORDEN_EMBUDO_MARCA_LINEA.md` · Tokens base: `VISUAL_TOKENS_ML_AZUL.md` (azul/gris; **cero negro/dorado**).

## Logo (obligatorio)
| Archivo | Uso |
|---|---|
| `assets/logo/va-logo-pdf-slide1.png` | Fuente canónica (diapositiva 1) |
| `assets/logo/va-logo-pdf-nav.png` | Nav / header (versión recortada) |

Nav: logo ≥ 48–64px alto, fondo gris claro o azul suave — contraste alto. Retirar mula/dorado/ámbar.

## Tarjetas de marca (paso 1 `#tienda`) — NO FAB circulares
El subtítulo “Venta de pedales, fuelles y guardapolvos” es largo → **tarjeta rectangular**, no botón flotante circular.

```
┌──────────────────────────┐
│  [Nombre marca]          │  navy bold · o wordmark texto (sin logo OEM como endoso)
│  Venta de pedales,       │  muted 13–14px · 2 líneas OK
│  fuelles y guardapolvos  │
└──────────────────────────┘
```

- Grid: 1 col móvil · 2 tablet · 3–4 desktop.
- Fondo `--bg-card` blanco · borde `--border` · hover borde `--blue` + sombra suave.
- Activa: borde `--blue` 2px + `--blue-soft` fill.
- 7 marcas embudo: Chevrolet · Kia · Mazda · Toyota · Nissan · Hyundai · Renault.
- **No** logos OEM oficiales como endoso (texto o monograma neutro VA).

## Pasos 2–4 (misma pestaña)
| Paso | UI |
|---|---|
| Línea | Chips/tarjetas modelo (Sail, Aveo…) — solo líneas con producto PDF |
| Tipo | Chips Pedales · Guardapolvos · Fuelles · Bujes — ocultar si vacío |
| Grilla | Card foto contain + titleHuman + ref (plantilla ML azul) |
| Ficha | Foto grande + desc + ref + WA 311 |

Breadcrumbs visual: `Marca › Línea › Tipo › Producto` — tipografía navy; paso actual bold azul.

## Mezclas
Bloque aparte `#mezclas`: cards azul/gris (sin embudo marca). Misma paleta.

## Prohibido
FAB con texto largo · tema negro/dorado · distorsionar fotos PDF · inventar imagen de producto.
