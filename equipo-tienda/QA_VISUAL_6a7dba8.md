# QA visual rápido — live `6a7dba8`

**URL:** https://idesteban.github.io/vencedores-autopartes-catalogo/

## Esteban visual — PASS

| Check | Resultado |
|---|---|
| Favicon V (`va-favicon-v-32/64.png`) HTTP 200, no globo | PASS |
| Logo HD nav (`va-logo-oficial-hd.png`) | PASS |
| Logos marca (7 PNG en `assets/logo/`) | PASS |
| Chips atajo Pedales / Guardapolvos / Bujes / Fuelles | PASS (en `script.js`) |
| Paleta azul/gris | PASS |
| Fotos producto contain + fondo claro en assets | PASS (53 assets productos) |

## Contrato congelado vs live Pages

| Check | Live `6a7dba8` | Box (post-UX) |
|---|---|---|
| `tipo=` plural | PASS | PASS |
| Refs P/GP/FU | PASS | PASS |
| Prefill WA por línea (biblia) | **FAIL** (sigue título+ref) | PASS |
| Grilla vacía + CTA WA 311 | **FAIL** | PASS |
| Hash `#tienda?paso=` | pendiente | pendiente |

**Veredicto:** visual Esteban **PASS**. Prefill WA + empty CTA listos en box — **pendiente deploy del lead**.
