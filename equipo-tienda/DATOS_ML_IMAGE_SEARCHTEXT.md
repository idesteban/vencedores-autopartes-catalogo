# Ing. Datos — mapeo imagen↔ref + searchText ML (orden azul)

Fuente: `catalogo-data.js` + `auditoria/AUDITORIA_PEDALES_IMAGENES.md` + extracción Claude `pedales_final/p00N.jpg`.  
Alineado a mapa dominio v2 / UX ML / Visual azul. **Cero fichas inventadas.**

## Contrato nuevo en `products[]`

| Campo | Uso |
|---|---|
| `image` | Ruta `assets/productos/{ref-slug}.jpg` o `null` → placeholder + PDF |
| `titleHuman` | Título ML: tipo + modelos clave (no solo “nervaduras…”) |
| `searchText` | String indexable: tipo + marcas + modelos + synonyms + fuzzy extras |
| `legacy` | Solo P001–P011 → foto PDF; **no** slug público |

Regla: `searchText` puede incluir términos de demanda (`hilux`, `lancer`) **solo** si NO hay producto — el match vacío lo resuelve UX. **No** crear product falso.

## Mapeo P→CV (fotos PDF pedales)

| Legacy | Archivo extracción | Ref pública canónica | Notas |
|---|---|---|---|
| P001 | `p001.jpg` | **CV-03** | burbujas/panal |
| P002 | `p002-a.jpg` (+b) | **CV-08** (Atos); CV-09 comparte legacy | preferir CV-08 para hero |
| P003 | `p003-a.jpg` (+b) | **CV-05** | horizontales Renault |
| P004 | `p004.jpg` | **CV-05** | 2ª vista CV-05 |
| P005 | `p005.jpg` | **CV-06** (espiga); CV-07/09 legacy | hero CV-06 |
| P006 | `p006.jpg` | **CV-02** | verticales Corsa/Sail/Aveo |
| P007 | `p007.jpg` | **CV-06** | 2ª vista |
| P008 | `p008.jpg` | **CV-10** | rejilla Nissan |
| P009 | `p009.jpg` | **CV-01** | horizontales LUV/D-Max |
| P010 | `p010.jpg` | **CV-04** | Brake/Clutch NPR |
| P011 | `p011.jpg` | **CV-12** | Toyota mixto (no Hino público) |
| — | — | **CV-11** | sin legacy PDF; `image:null` hasta extracción página bus |

Destino canónico: `assets/productos/cv-01.jpg` … `cv-12.jpg` (copiar desde `pedales_final` renombrando por tabla).  
**Prohibido** publicar WA juegos 3 piezas / empaque ajeno (auditoría pedales).

## GP / FU / Mezclas (imagen)

| Grupo | Estado imagen | Plan |
|---|---|---|
| Guardapolvos/fuelles | Sin crops 1:1 en `assets/productos/` | Extraer de PDF guardapolvos → `gp-*.jpg` / `fu-*.jpg` por `ref`; si no hay crop fiable → `null` + PDF |
| Mezclas | `molino-mezclas.png` genérico opcional | 1 hero línea; no inventar foto por MEZ-* |
| `catalogo/fuelles/` vacío | Documentado | No inventar páginas |

## `titleHuman` + `searchText` (ejemplos)

| ref | titleHuman | searchText (fragmento) |
|---|---|---|
| CV-02 | Pedal freno/embrague Aveo · Sail · Corsa | `pedal chevrolet chevy aveo sail corsa nervaduras verticales cv-02` |
| CV-01 | Pedal camioneta LUV · D-Max · Trooper | `pedal chevrolet luv d-max dimax dmax trooper cv-01` |
| CV-06 | Pedal Kia/Hyundai/Mitsubishi L300 | `pedal kia rio hyundai accent mitsubishi l300 espiga cv-06` |
| GP-CHEV-SPARK | Guardapolvo eje Spark · Alto · Swift | `guardapolvo eje spark alto swift chevrolet suzuki gp-chev-spark` |
| MEZ-CAMPANA | Caucho campana dureza 100 | `mezcla caucho campana dureza 100 compuesto` |

Fuzzy globales a indexar (sin crear producto): `chevy→chevrolet`, `dimax|dmax→d-max`, `hyunday→hyundai`, `benz→mercedes-benz`, `totoyo|toyota`, `hilux`, `lancer`.

## Vacíos honestos (demanda ≠ stock web)

| Query típica | Resultado datos |
|---|---|
| `toyota hilux guardapolvo` | 0 productos · Toyota solo CV-12 (Prado/4Runner pedal) |
| `pedal lancer` / `mitsubishi lancer` | 0 · Mitsubishi solo L300 vía CV-06 |
| `hino` | 0 brand · legacy P011 no público |

## Plan ejecución (Datos)

1. Crear `assets/productos/` y renombrar `p00N` → `cv-XX` según tabla.  
2. Patch `catalogo-data.js`: cada product recibe `image`, `titleHuman`, `searchText`.  
3. GP/FU: batch crops PDF o `image:null`.  
4. Smoke: queries “pedal aveo”, “guardapolvo spark”, “duster pedal”, “hilux guardapolvo” (vacío).  
5. PR datos; Visual/UX consumen campos; QA valida vacío honesto + WA 311.
