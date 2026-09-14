# Investigación compatibilidad — expansión de líneas VA
**Fecha:** 2026-09-14 (America/Bogota)  
**Fuentes:** `/workspace/vencedores/web/equipo-tienda/catalogo-completo/texto.txt` (PDF INR-style completo), `catalogo-data.js` live, [INR Catálogo de partes 2025](https://blog.inr.com.co/wp-content/uploads/2025/02/Catalogodepartes.pdf), [inr.com.co](https://inr.com.co/inr-co/), OEM/mercado CO (chevrolet.com.co, ANDEMOS / rankings 2024-2026).

## Método (sin inventar SKUs)
1. Inventario de `brands[]` + `brandLines` + `products[].fits` en `catalogo-data.js`.
2. TOC INR local + PDF 2025: todas las líneas por marca.
3. Cruce COD/REF G/POLVO · FUELLE CAJA · pedales: solo se propone **cablear** línea→`relatedRefs` cuando hay evidencia de mismo COD/REF o familia ya publicada.
4. Líneas INR sin producto VA = candidatas a **extracción futura** (lista vacía `relatedRefs`), no SKU inventado.
5. Tags: `sedan` · `suv` · `pickup` · `taxi` · `hibrido` · `ev` · `offroad` · `family`.

## Embudo hoy
| Capa | Estado |
|------|--------|
| Marcas embudo | **7**: chevrolet · kia · mazda · toyota · nissan · hyundai · renault |
| **Mitsubishi** | Presente en PDF INR (L200, Lancer, Montero, Nativa, Outlander…) y en texto de **P007**, **ausente** de `brands[]` embudo |
| brandLines | Ya incluye muchas líneas TOC INR; **gran parte EMPTY** (sin `fits`) |
| Productos con fitment real | Ver matriz abajo |

### Líneas CON producto (cableadas hoy)
- **chevrolet** (19): Alto, Aveo, Captiva, Chevy C2, Corsa, LUV, D-Max, NKR, NNR, NPR, NQR, Onix, Optra, Sail, Spark, Sprint, Swift, Trooper, Vitara
- **kia** (5): Picanto, Eko Taxi, Ion, Morning, Rio
- **mazda** (6): 323, 626, B2600, Mazda3, Mazda5, MX-6
- **toyota** (5): Hilux, Prado, Fortuner, Land Cruiser, 4Runner
- **nissan** (3): Frontier, Navara, NP300
- **hyundai** (10): Accent, Atos, Elantra, Excel, Getz, i30, Santa Fe, Sonata, Tucson, Vision
- **renault** (23): R4, R6, R9, R12, R18, R19, Captur, Clio, Express Taxi, Duster, Oroch, Fluence, Kangoo, Laguna, Logan, Megane, Sandero, Scenic, Stepway, Symbol, Citius Taxi, Trafic, Twingo

### Líneas en brandLines sin producto (EMPTY) — prioridad de cableado o extracción
Ver detalle por marca. Regla UX: chip de línea sin producto no debe vender vacío; o se cablea a refs existentes o se oculta hasta extracción.

---

## Hallazgos por marca

### Chevrolet (prioridad)
**Con producto:** Alto, Aveo, Captiva, Chevy C2, Corsa, LUV, D-Max, NKR/NNR/NPR/NQR, Onix, Optra, Sail, Spark, Sprint, Swift, Trooper, Vitara.  
**EMPTY en brandLines:** Astra, Cobalt, Cruze, Epica, Joy, NHR, N200, N300, Rodeo, Sonic, Spark GT, Trailblazer, Tracker, Wagon R, Super Carry, Jimny, Samurai.

| Línea | Vs VA | Evidencia | Confianza | Tags |
|-------|-------|-----------|-----------|------|
| Spark GT | EMPTY→cablear | Mismos GP Spark COD 33103/33104; GP-CHEV-SP-* | alta | sedan, family |
| Rodeo | EMPTY→cablear | Familia Trooper COD 33213; GP-CHEV-LUV-*, P009 | alta | suv, offroad, pickup |
| Joy | EMPTY→fuelle Onix | INR 2025 JOY; plataforma Onix/Joy | media | sedan, family |
| Sonic | EMPTY | Incolca TRACKER/SONIC/ONIX; INR sin GP propio | media | sedan, family |
| Tracker | EMPTY | Top SUV CO; INR bujes; aftermarket agrupado Onix | media | suv, family |
| N200/N300 | EMPTY | INR GP COD 33524 — falta producto VA | media | family |
| Trailblazer | EMPTY | INR solo bujes | baja | suv, offroad |
| Captiva EV/Híbrida | sublínea Captiva | chevrolet.com.co 2026; no asumir mismo GP | baja | suv, hibrido, ev |
| Spark EUV | nueva | EV 2026; no reusar Spark Chronos | baja | suv, ev |

**Shared COD notables:** Sail+Aveo (33242); Alto+Sprint (33155); LUV+D-Max; Trooper+Rodeo (33213).

### Kia
**Con producto:** Picanto, Eko Taxi, Ion, Morning, Rio.  
**EMPTY:** Besta, Carnival, Cerato, K2500/K2700, Pregio, Pride, Sedona, Sephia, Spectra, Sportage, Soul, Sorento, Optima, Master.

| Línea | Evidencia | Confianza | Tags |
|-------|-----------|-----------|------|
| Ion / Morning | COD 37228 con Picanto/Eko — ya cableados | alta | sedan, taxi |
| Sportage | INR bujes; top SUV CO — sin GP VA | media | suv, offroad |
| Cerato | INR Forte/Koup/Geo/Pro | media | sedan |
| K2500/K2700/Master | pickups INR | media | pickup |

### Hyundai
**Con producto:** Accent, Atos, Elantra, Excel, Getz, i30, Santa Fe, Sonata, Tucson, Vision.  
**EMPTY:** Azera, Eon, Grace, i10, Grand i10, Grand Metro Taxi, i25/i35/i40/i45, Porter, Santro, Starex, Terracan, Veloster, Veracruz.

| Línea | Evidencia | Confianza | Tags |
|-------|-----------|-----------|------|
| Santro | Comparte COD 39282 con Atos → GP-HYKIA | alta | sedan, taxi, family |
| Grand i10 / Grand Metro Taxi / i10 | INR + inr.com.co Grand Metro Taxi | media | sedan, taxi |
| Starex / Porter | vans INR | media | family |

### Toyota
**Con producto (solo pedales P008/P011):** Hilux, Prado, Fortuner, Land Cruiser, 4Runner.  
**EMPTY:** Avalon, Camry, Celica, Coaster, **Corolla**, Corona, RAV4, Starlet, Tercel, Yaris, T100.  
**Nota:** No hay GP/FU Toyota en `catalogo-data.js` hoy.

| Línea | Evidencia | Confianza | Tags |
|-------|-----------|-----------|------|
| Corolla | INR GP 39703–39706 (+ listados TRA CO) — **extraer**, no inventar | alta | sedan, family, hibrido |
| Yaris / RAV4 | INR secciones | media | sedan / suv, hibrido |
| Tacoma/Tundra/TXL/Burbuja | Familia pedales Hilux si fits lo incluyen | alta | pickup, offroad |

### Nissan
**Con producto:** Frontier, Navara, NP300 (pedales).  
**EMPTY:** Almera, Altima, Juke, Kicks, March, Micra, Murano, Note, Patrol, Pathfinder, Qashqai, Sentra, Tiida, Urvan, Versa, X-Trail, Xterra, Sunny.

| Línea | Evidencia | Confianza | Tags |
|-------|-----------|-----------|------|
| NP300 | Ya OK; REF C9241-EA000 compartido Alaskan/Navara | alta | pickup, offroad |
| Kicks / March | Mismos bujes 41420–41422; volumen CO | media | suv / sedan, taxi |
| Versa / Sentra | INR; Sentra B13 tiene GP en catálogo | media | sedan, taxi |

### Renault
**Con producto:** mayoría clásica + Logan/Sandero/Stepway/Duster/Oroch/Clio/…  
**EMPTY:** R21, **Alaskan**, Koleos, Kwid, Scala.

| Línea | Evidencia | Confianza | Tags |
|-------|-----------|-----------|------|
| Alaskan | REF C9241-EA000/C9741-EB70B = Navara/NP300; cablear **P008/P011** | alta | pickup, offroad |
| Express/Citius Taxi | Ya cableados; tags taxi | alta | taxi |
| Kwid / Koleos | INR NUEVO bujes/fuelles amort | media | sedan / suv |
| Logan=Sandero=Stepway | COD 31161 / GP-REN-LC-02 ya compartido | alta (ya hecho) | sedan, family |

### Mazda
**Con producto:** 323, 626, B2600, Mazda3, Mazda5, MX-6.  
**EMPTY:** 121, Allegro, B1600/2000/2200, BT-50, CX-3/5/7, Mazda2, Mazda6, MX-5, MX-3.

| Línea | Evidencia | Confianza | Tags |
|-------|-----------|-----------|------|
| BT-50 | Cruza bujes con B2600; validar GP-MAZ-B2600 | media | pickup, offroad |
| Allegro | Cruce 323 → P001 media | media | sedan |
| Mazda2 / CX-5 / CX-3 | Top mercado CO; INR bujes | media | sedan / suv |

### Mitsubishi — FLAG embudo
**No está en `brands[]`.** Sí en PDF INR completo y en descripción P007 (L200/Pajero).

| Línea | Evidencia | Confianza | Tags |
|-------|-----------|-----------|------|
| L200 | INR + P007 | alta | pickup, offroad |
| Pajero/Montero | INR MONTERO + P007 | alta | suv, offroad |
| Nativa | INR | media | suv, offroad |
| Lancer | INR; gap histórico embudo | media | sedan |
| Outlander | INR | media | suv, family, hibrido |

### Otras marcas INR (fuera embudo 7)
Ford (Ranger↔Mazda B/BT-50), Suzuki (Swift/Jimny/Vitara), VW, BYD (F3/Flyer/Movil3 Taxi), Chery, Daewoo, Honda, Hino (pesados). Solo documentar; no expandir embudo sin decisión de negocio.

---

## Top 20 líneas alta/media confianza (acción)

1. chevrolet/Rodeo [alta] refs=['GP-CHEV-LUV-LR', 'GP-CHEV-LUV-LC', 'P009']
2. chevrolet/Spark GT [alta] refs=['GP-CHEV-SP-LC', 'GP-CHEV-SP-LR', 'P001', 'P005']
3. hyundai/Santro [alta] refs=['GP-HYKIA-LC', 'GP-HYKIA-LR', 'P002']
4. kia/Ion [alta] refs=['GP-HYKIA-LC', 'GP-HYKIA-LR', 'P005', 'P007']
5. kia/Morning [alta] refs=['GP-HYKIA-LC', 'GP-HYKIA-LR', 'P005', 'P007']
6. mitsubishi/L200 [alta] refs=['P007']
7. mitsubishi/Pajero / Montero [alta] refs=['P007']
8. nissan/NP300 [alta] refs=['P008', 'P011']
9. renault/Alaskan [alta] refs=['P008', 'P011']
10. renault/Citius Taxi [alta] refs=['FU-REN-CLIO', 'GP-REN-LH-01']
11. renault/Express Taxi [alta] refs=['FU-REN-CLIO']
12. toyota/Corolla [alta] refs=INR-only/extracción
13. toyota/Tacoma / Tundra / TXL / Burbuja [alta] refs=['P008', 'P011']
14. chevrolet/Joy [media] refs=['FU-CHEV-SER11006']
15. chevrolet/Sonic [media] refs=['FU-CHEV-SER11006']
16. chevrolet/Tracker [media] refs=['FU-CHEV-SER11006']
17. ford/Ranger [media] refs=['GP-MAZ-B2600']
18. hyundai/Grand Metro Taxi [media] refs=['GP-HYKIA-LC', 'GP-HYKIA-LR']
19. hyundai/Grand i10 [media] refs=['GP-HYKIA-LC', 'GP-HYKIA-LR', 'P005']
20. hyundai/i10 [media] refs=['GP-HYKIA-LC', 'GP-HYKIA-LR']

---

## Ya en VA vs propuesto

| Marca | Ya con producto | Propuesto cablear YA (alta) | Propuesto media / extracción |
|-------|-----------------|----------------------------|------------------------------|
| Chevrolet | 19 líneas | Spark GT, Rodeo | Joy, Sonic, Tracker, N200/N300 |
| Kia | 5 | Ion/Morning (verificar UI) | Sportage, Cerato, pickups K |
| Hyundai | 10 | Santro | Grand i10 / Metro Taxi / i10 |
| Toyota | 5 (pedales) | Tacoma/TXL/Burbuja si faltan fits | **Corolla GP extracción**, Yaris, RAV4 |
| Nissan | 3 | NP300 (ok) | Kicks, March, Versa, Sentra |
| Renault | 23 | **Alaskan→P008/P011** | Kwid, Koleos, R21 |
| Mazda | 6 | — | BT-50, Allegro, Mazda2, CX-5 |
| Mitsubishi | **0 (sin marca)** | **Añadir marca + L200/Pajero→P007** | Nativa, Lancer, Outlander |

## Entregables
- `INVESTIGACION_COMPATIBILIDAD_LINEAS.md` (este archivo)
- `PROPUESTA_NUEVAS_LINEAS.json` (estructura `{ brandId: [ { line, typeTags, evidence, confidence, relatedRefs } ] }`)

## No hecho (por alcance)
- Deploy sitio / cambios a `catalogo-data.js`
- Inventar refs GP/FU nuevos


## Fase 2 aplicada (2026-09-14)
Marcas añadidas al embudo desde INR 2025 (líneas navegables; productos se amarran con COD):
- **Mitsubishi** (9): Colt, Lancer, L200, L200 Advancer, L200 Sportero, L300, Montero, Nativa, Outlander
- **Ford** (9): EcoSport, Edge, Escape, Explorer, Festiva, Fiesta, Fusion, Laser, Ranger
- **Suzuki** (3): Grand Vitara, Jimny, Swift

Cache: `?v=20260914i`
