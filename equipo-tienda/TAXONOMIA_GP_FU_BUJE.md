# Taxonomía visual — Catálogo completo Cauchos Vencedor (282 págs)

## Definiciones (no mezclar)

| Tipo | Qué es | Etiqueta típica en PDF | Forma visual |
|------|--------|------------------------|--------------|
| **Guardapolvo** | Bota de eje / junta homocinética o triceta | `G/POLVO EJE L/C`, `G/POLVO EJE L/R`, `GUARDAPOLVO EJE` | Copa/cono corto acordeón, boca ancha para eje |
| **Fuelle** | Fuelles de cremallera / caja de dirección | `FUELLE CAJA DIRECCIÓN` | Tubo largo y delgado, muchas nervaduras, para dirección |
| **Fuelle amortiguador** | Protector de amortiguador (familia fuelles, no eje) | `FUELLE AMORTIGUADOR` | Tubo corto sobre vástago; **no** es guardapolvo de eje |
| **Buje** | Casquillo/tope de caucho (tijera, barra, motor…) | `BUJE TIJERA`, `BUJE BARRA`, etc. | Pieza maciza/cilíndrica, **sin** fuelle acordeón de eje |
| **Pedal** | Forro de pedal freno/embrague | `CAUCHOS DE PEDAL`, P001… | Placa de pisada con nervaduras |

## Regla de clasificación en la tienda web
- `type: guardapolvos` ⇔ texto PDF menciona G/POLVO / GUARDAPOLVO EJE (no “FUELLE CAJA”).
- `type: fuelles` ⇔ `FUELLE CAJA DIRECCIÓN` (y opcionalmente fuelle amortiguador como subtipo).
- `type: bujes` ⇔ `BUJE…` como pieza; si solo hay compuesto, sección Mezclas.
- Refs: prefijo `GP-` solo guardapolvos; `FU-` solo fuelles; `P-` pedales; `BJ-` bujes.

## Error que se corrige
Mezcla en data/imagenes: productos etiquetados FU- con foto de G/POLVO o viceversa. Auditoría visual página a página del PDF completo.
