# Taxonomía visual — Catálogo completo Cauchos Vencedor (282 págs)

## Definiciones (no mezclar)

| Tipo | Qué es | Etiqueta típica en PDF | Forma visual |
|------|--------|------------------------|--------------|
| **Guardapolvo** | Bota de eje / junta homocinética o triceta | `G/POLVO EJE L/C`, `G/POLVO EJE L/R`, `GUARDAPOLVO EJE` | Copa/cono corto acordeón, boca ancha para eje |
| **Fuelle** | Fuelles de cremallera / caja de dirección | `FUELLE CAJA DIRECCIÓN` | Tubo largo y delgado, muchas nervaduras, para dirección |
| **Fuelle amortiguador** | Protector de amortiguador (familia fuelles, no eje) | `FUELLE AMORTIGUADOR` | Tubo corto sobre vástago; **no** es guardapolvo de eje ni fuelle de caja |
| **Buje** | Casquillo/tope de caucho (tijera, barra, motor…) | `BUJE TIJERA`, `BUJE BARRA`, etc. | Pieza maciza/cilíndrica, **sin** fuelle acordeón de eje |
| **Pedal** | Forro de pedal freno/embrague | `CAUCHOS DE PEDAL`, P001… | Placa de pisada con nervaduras |

## Regla de clasificación en la tienda web
- `type: guardapolvos` ⇔ texto PDF menciona G/POLVO / GUARDAPOLVO EJE (no “FUELLE CAJA”).
- `type: fuelles` ⇔ `FUELLE CAJA DIRECCIÓN` (lado pasajero/conductor cuando aplique).
- `type: bujes` ⇔ `BUJE…` como pieza individual; si solo hay compuesto, sección Mezclas.
- Refs: prefijo `GP-` solo guardapolvos; `FU-` solo fuelles; `P-` pedales; `BJ-` bujes.
- **Nunca** usar logo de marca como thumb de producto.

## Ejemplos en PDF completo (`catalogo-completo/p-*.png`)
| Página | COD | Etiqueta PDF | Tipo |
|--------|-----|--------------|------|
| 12 (Renault R4) | 31101 / 31104 | G/POLVO EJE … TRICETA | guardapolvos |
| 12 | 31141 / 31145 | FUELLE CAJA DIRECCIÓN | fuelles |
| 12 | 31201+ | BUJE TIJERA / CARACOL… | bujes (o mezclas) |
| 15 (R9) | 31105–31112 | G/POLVO EJE … | guardapolvos |
| 15 | 31142 | FUELLE CAJA DIRECCIÓN | fuelles |
| 23 (Clio) | 31146 | FUELLE CAJA DIRECCIÓN | fuelles |
| 23 | 31120 | FUELLE AMORTIGUADOR | no es fuelle de caja / no GP |
| 25 (Duster) | 31180 / 31181 | G/POLVO EJE L/R · SOLO L/C | guardapolvos |
| 61 (Chevy Alto) | 33103 / 33104 | G/POLVO EJE | guardapolvos |
| 61 | 33155 / 33156 | FUELLE CAJA … PASAJERO / CONDUCTOR LH | fuelles |

## Error que se corrige (2026-09-14)
Archivos `gpfu-*.png` usados como `FU-*` eran en realidad G/POLVO (cono corto). Se re-extraen fuelles reales desde págs. 12/15/23/61 y se reemplazan thumbs GP que apuntaban a fotos de fuelle (`gpfu-ren-01/05/06`). Se eliminó producto inventado FU-HYU-I10 (págs. i10 del PDF no listan fuelle caja).
