# Auditoría fotos de producto — Vencedores Autopartes

Fecha: 2026-09-14 (America/Bogota)

## Criterio (imagen 6)
- Pieza real de caucho centrada
- Fondo **blanco** limpio
- Sin logo de marca como foto de producto
- Sin rectángulo negro + texto overlay
- Sin crop grano/text-only

## Resumen
| Estado | Cantidad |
|--------|----------|
| Productos en catálogo | 47 |
| Re-extraídos / fondo (fondo blanco) | 14 |
| Placeholders “Foto en catálogo PDF” | 0 |
| Siguen con logo de marca como imagen | 0 |

## Corregidos (recorte PDF → fondo blanco)
| Ref | Archivo | Acción |
|-----|---------|--------|
| P002 | `p002.png` | Recorte página PDF pedales (fondo blanco) |
| P008 | `p008.png` | Recorte página PDF pedales (fondo blanco) |
| GP-MAZ-626-LR | `gpfu-maz-01.png` | Recorte page-08 (solo pieza) |
| GP-MAZ-626-LC | `gpfu-maz-02.png` | Recorte page-08 |
| GP-MAZ-626-KIT | `gpfu-maz-03.png` | Recorte page-08 |
| FU-MAZ-32113 | `gpfu-maz-04.png` | Recorte page-08 |
| GP-MAZ-M3-LC | `gpfu-maz-05.png` | Recorte page-08 |
| GP-MAZ-B2600 | `gpfu-maz-06.png` | Recorte page-08 (archivo nuevo; data actualizada) |
| GP-HYKIA-LR | `gpfu-hykia-03.png` | Recorte page-09 |
| GP-HYKIA-LC | `gpfu-hykia-04.png` | Recorte page-09 |
| FU-HYU-I10 | `gpfu-hykia-05.png` | Recorte page-09 |
| GP-REN-LH-01 | `gp-ren-01.png` | Flood negro→blanco |
| GP-REN-HOMO-03 | `gp-ren-03.png` | Flood negro→blanco |
| GP-REN-LR-04 | `gp-ren-04.png` | Flood negro→blanco |
| GP-REN-LR-LOG | `gpfu-ren-03.png` | Flood negro→blanco |
| FU-CHEV-PAS | `gpfu-chev-07.png` | Flood negro→blanco |
| FU-CHEV-LH | `gpfu-chev-08.png` | Flood negro→blanco |

## Placeholders
Ninguno. Todas las refs tienen foto de pieza usable.

## CSS
`.product-card .thumb` / `img`: `background: #fff; object-fit: contain; min-height` — sin letterboxing negro.

## Nota
Backups de originales problemáticos en `assets/productos/raw/_audit_bak/` cuando existían.
