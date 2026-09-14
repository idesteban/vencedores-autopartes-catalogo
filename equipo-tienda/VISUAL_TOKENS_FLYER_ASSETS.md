# Diseño Visual — tokens + plantilla flyer + assets

Fuente: `styles.css`, `script.js` (BENEFITS), `assets/`, biblia. Base en producción; no reinventar.

## Tokens (CSS `:root`)
| Token | Valor |
|---|---|
| `--bg` | `#070708` |
| `--bg-elev` | `#101012` |
| `--bg-card` | `rgba(22,22,26,.72)` |
| `--text` | `#F5F5F4` |
| `--muted` | `#A8A29E` |
| `--amber` | `#F59E0B` (acento VA) |
| `--amber-2` | `#D97706` |
| `--wa` | `#25D366` |
| `--font` | Inter, system-ui |
| `--radius` | `16px` |
| `--max` | `1120px` |

Prohibido: precios en UI, branding Motorduz, logos OEM como endoso, distorsionar fotos de producto.

## Plantilla flyer (layout Motorduz → skin VA)
1. **Header / hero** (`.flyer-hero`): marca (`.flyer-brand`), título modelos, slogan, splash ámbar + foto real (`.flyer-hero-photo`).
2. **4 beneficios** fijos (`.flyer-benefits`): Alta durabilidad · Ajuste perfecto · Calidad VA · Envíos Colombia.
3. **Grilla refs** (`.flyer-grid` / `.flyer-prod`): solo productos que matchean el flyer — tipo + `ref` + modelos (máx. 5 +N). Sin precios.
4. **CTA** (`.flyer-cta`): WhatsApp Jacobo `wa.me/573114560990`, prefill por **línea** (no por CV).

Vitrina: `.flyer-card` (thumb + badge marca + modelsLabel + conteo refs).

## Lista de assets (estado)
| Carpeta | Estado |
|---|---|
| `assets/logo/` | Logo mula + wordmark SVG/PNG en uso (nav/favicon). Meta biblia: siluetas doradas huecas mula+carro+camioneta — pendiente canónico. |
| `assets/vehiculos/` | 26 JPG; **21 heroes de flyer OK**. Manifest documenta solo 9 → gap atribución (17 sin fuente en manifest). |
| `assets/catalogo/` | Previews pedales CV + `nuevo/cv-1..3`; `fuelles/` vacío (línea va por PDF). |
| `assets/fotos/` | Planta/producto reales + webp `optimized/`. |
| `assets/descargas/` | 3 PDF oficiales (pedales, guardapolvos/fuelles, cauchos). |

## Gaps visuales (prioridad)
1. Completar `vehiculos/manifest.json` (licencia/fuente) para las 17 fotos sin documentar.
2. Logo canónico 3 siluetas doradas (aliado: Diseño y Arquitectura Web VA).
3. No inventar flyer/foto para gap Hino (vacío UX + PDF).
