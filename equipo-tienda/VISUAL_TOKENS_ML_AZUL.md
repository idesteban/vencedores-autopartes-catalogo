# Diseño Visual v2 — tokens azul/gris + logo V + card/ficha ML

Orden: `ORDEN_REDISENO_ML_AZUL.md` · Refs: `ref-pdf-p1-azul-gris.png`, `ref-pdf-p2-productos.png`.  
Reemplaza el tema dark/ámbar para UI tienda. Detalle assets: carpeta `assets/logo/`.

## Tokens CSS (propuesta `:root`)
| Token | Hex | Uso |
|---|---|---|
| `--blue` | `#0033A0` | Acento royal (bordes, chips activos, títulos) |
| `--blue-deep` | `#050B61` | Navy franja / tipografía fuerte |
| `--blue-soft` | `#E8EEF8` | Fondos chip / hover suave |
| `--bg` | `#E9EBEF` | Fondo página gris claro (textura sutil opcional) |
| `--bg-card` | `#FFFFFF` | Card producto / ficha |
| `--border` | `#C5CAD6` | Bordes card |
| `--text` | `#0B1B4D` | Texto principal navy |
| `--muted` | `#5A6270` | Secundario |
| `--wa` | `#25D366` | CTA WhatsApp |
| `--font` | Inter (fallback Montserrat/system) | Sans geométrica como PDF |
| `--radius` | `12px` | Cards ML (menos “glass”) |

Retirar en nav: siluetas doradas mula si compiten con el V. Ámbar `#F59E0B` = **fuera** del tema tienda (salvo legado).

## Logo (canónico PDF)
- Marca: **V** blocky + wordmark **CAUCHOS / VENCEDOR** + barra **FÁBRICA DE CAUCHOS**.
- Archivos nuevos:
  - `assets/logo/va-logo-vencedor.svg` — navy sobre fondo claro (nav default).
  - `assets/logo/va-logo-vencedor-on-blue.svg` — blanco sobre azul.
- Nav: altura ≥ **48–56px**, contraste alto; no favicon mula como marca principal.
- Nota: SVG es recreación fiel al PDF (no vector del PDF embebido). Si Esteban aporta AI/PDF vector, se sustituye 1:1.

## Plantilla card grilla (`#tienda`)
```
┌─────────────────────┐
│   [foto producto]   │  fondo blanco, object-fit contain, sin distorsión
│                     │
├─────────────────────┤
│ titleHuman          │  navy bold, 2 líneas máx
│ Pedal · CV-02       │  muted + ref mono/semibold
│ Chevy Aveo · Sail…  │  chips compatibles (máx 3 +N)
│ [WhatsApp cotizar]  │  verde, prefill por línea
└─────────────────────┘
```
Grid: 2 col móvil · 3–4 desktop. Sombra suave, borde `--border`. Sin precios.

## Plantilla ficha (`#tienda?ref=…`)
1. Foto grande (o placeholder + link PDF si falta `image`).
2. `titleHuman` + tipo + `ref` visible.
3. Descripción corta del catálogo (sin inventar OEM/dims).
4. Compatibles: lista marca → modelos.
5. CTA WA 311 por línea; secundario opcional.

## Densidad / anti-saturación
- Quiénes somos Jacobo: bloque limpio, foto + texto, sin grid de ruido.
- Una sola vitrina de productos (no flyer Motorduz dark).
- Hero PDF-like: diagonal azul/gris **solo** en cabecera corta o cover; el resto fondo gris claro.

## Entrega a Datos / UX / QA
- @Ing. Datos: `image` en `assets/productos/{ref}.jpg` (extracción P001–P011→CV cuando mapee).
- @UX: card/ficha = unidad; vacío honesto sin inventar Hilux/Lancer.
- @QA: logo V ≥ contraste AA; paleta ≠ ámbar; WA 311; Jacobo primero.

## Gaps visuales
1. Vector oficial del V (si existe en archivo fuente) > SVG recreado.
2. Extracción masiva fotos PDF → `assets/productos/` (Datos + Visual).
3. Textura concreto PDF: noise CSS ligero o PNG 2–4% opacity; no saturar.
