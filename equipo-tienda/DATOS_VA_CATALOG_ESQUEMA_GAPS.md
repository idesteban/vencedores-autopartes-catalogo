# Ing. Datos — esquema VA_CATALOG + gaps + plan auditoría

Fuente viva: `catalogo-data.js` → `window.VA_CATALOG`.  
Alineado a `MAPA_DOMINIO_URLS.md` / UX / Visual. **Cero refs inventadas.**

## Esquema (contrato de datos)

```
VA_CATALOG = {
  brands[],          // id kebab, name, monogram, tagline, accent, highlights[], vehicleTypes[]
  products[],        // id, ref, type, brand, brands[], models[], title, desc, tags[], synonyms[], waLine, legacy?
  flyers[],          // id, brand, brandId, title, modelsLabel, models[], slogan, heroImage, heroAlt,
                     // heroCaption?, isBrandOverview?, productMatch{ brands[], modelKeywords[], includeRefs[] }
  waLines,           // pedales | fuelles | mezclas | general
  waNumber           // "573114560990"
}
```

| Campo producto | Regla |
|---|---|
| `type` | `pedal` \| `guardapolvo` \| `fuelle` \| `mezcla` |
| `ref` | Pública mayúsculas: `CV-01…12`, `GP-*`, `FU-*`, `33103/33104`, `MEZ-*` |
| `synonyms` | Fuzzy por producto (chevy, dimax, hyunday…). Sin URL nueva |
| `waLine` | Por **línea**, no por CV |
| `legacy` | Solo P001–P011 internos; no slug público |
| Flyer grilla | Solo lo que resuelve `productMatch` contra `products[]` |

**Conteo vivo:** 10 marcas · **43** productos (12 pedal + 18 guardapolvo + 6 fuelle + 7 mezcla) · ~21 flyers (vehículo + brand-*).

## Gaps conocidos (documentados, no inventar)

| Gap | Estado | Acción datos |
|---|---|---|
| **Hino** | Solo legacy P011 en PDF cauchos | Sin brand/flyer/URL; empty UX + WA general |
| **P001–P011** | Alias en fichas CV | No exponer como `ref` pública |
| **Nissan/Toyota/MB** | Sin GP/FU en extractos | Solo pedales CV documentados |
| **Mazda GP-MAZ-COTIZAR** | Catch-all PDF | Mantener; no inventar dims/OEM |
| **Fotos sibling / manifest** | 26 fotos vs ~9 en manifest | Completar atribución; no distorsionar |
| **`catalogo/fuelles/`** | Vacío en assets | No inventar páginas; PDF oficial en descargas |
| Ortografía | campana (no Capmana) | Ya en MEZ-CAMPANA |

## Plan auditoría producto a producto

Orden: **1)** CV-01…12 vs PDF pedales (models, legacy, sinonimos) → **2)** cada GP/FU vs PDF guardapolvos (L/C·L/R, grasa, abrazaderas, códigos 33103/33104) → **3)** 7 mezclas vs PDF cauchos → **4)** cada flyer: grilla ⊆ products reales → **5)** fuzzy smoke (chevy, dimax, benz, hyunday) → **6)** WA 311 + prefills por línea.

**Pass:** ref existe en PDF + aparece en ≤1 lugar coherente + flyer no lista orphan.  
**Fail:** ref web sin PDF, OEM/precio inventado, flyer con ref fuera de `products[]`, brand Hino.

Detalle operativo: `auditoria/MAPA_MARCAS_CATALOGO.md` (+ `AUDITORIA_PEDALES_IMAGENES.md`).
