# Investigación de compatibilidad — líneas / subcategorías por marca

**Fuente principal:** Catálogo INR *Catalogodepartes.pdf* (29 ene 2025, 319 págs)  
https://blog.inr.com.co/wp-content/uploads/2025/02/Catalogodepartes.pdf  

**También:** PDF VA/INR local 282 págs + sitio inr.com.co (app de búsqueda por marca/modelo).

## Método
1. Inventario de líneas actuales en `brandLines` del embudo web.
2. Extracción del índice INR 2025 por marca.
3. Clasificación por tipo de vehículo (sedán, SUV, pickup, taxi, familiar, off-road).
4. Regla dura: **no inventar SKUs**. Las líneas nuevas entran al embudo; el producto solo se enlaza si hay COD/REF compartido en INR o evidencia de plataforma.

## Conteo de líneas en embudo (actualizado)

| Marca | Antes (aprox.) | Ahora (INR 2025 curado) |
|-------|----------------|-------------------------|
| Chevrolet | 19 | **36** |
| Renault | 24 | **28** |
| Hyundai | 12 | **26** |
| Kia | 3 | **20** |
| Mazda | 6 | **19** |
| Toyota | 9 | **16** |
| Nissan | 2 | **21** |

## Chevrolet — huecos que entraron (alta confianza INR)
Cruze, Tracker, Trailblazer, Sonic, Joy, N200, N300, Spark GT, Rodeo, Cobalt, Epica, Wagon R, Super Carry, Jimny, Samurai, Astra…

**Tipos:** sedán (Aveo/Sail/Cruze/Sonic), SUV (Captiva/Tracker/Trailblazer/Vitara), pickup/camioneta (LUV/D-Max), camión liviano (NHR/NKR/NPR/NQR/N200/N300), taxi urbano (Spark/Spark GT).

## Renault — altas
Alaskan (pickup), Kwid, Koleos (SUV), Scala, Express Taxi, Citius Taxi, Oroch (ya parcial).  
Plataformas compartidas documentadas en INR: Logan/Sandero/Stepway; Duster/Oroch; Clio/Kangoo/Symbol/taxi.

## Kia / Hyundai
INR separa Picanto / Eko Taxi / Ion / Morning; Sportage, Sorento, Soul, Cerato, Carnival; i10 / Grand i10 / Grand Metro Taxi (taxi).  
**Nota taxi CO:** Grand Metro Taxi [Grand i10] aparece en novedades INR 2025.

## Mazda
CX-3, CX-5, CX-7 (SUV), BT-50 (pickup), Mazda2/3/5/6, Allegro.

## Toyota / Nissan
Ampliación de sedán/SUV/van: Corolla, Yaris, RAV4, Camry; Kicks, Versa, March, Qashqai, X-Trail, Urvan, Tiida, Sentra, NP300.  
Evitar mezclar Hilux↔Frontier en la misma marca sin evidencia.

## Fase 2 (en INR, aún no en embudo VA)
Mitsubishi (L200/Montero/Outlander), Ford (Ranger/EcoSport), Suzuki, VW, BYD (F3/Flyer/Movil3 Taxi), Chery, Great Wall/Haval, JAC — candidatos cuando haya refs de caucho VA o decisión comercial.

## EV / híbridos
INR 2025 **no** publica líneas EV/híbridas separadas para G/POLVO o FUELLE CAJA. No afirmar compatibilidad EV sin REF OEM. Plataformas ICE compartidas (Onix, Tracker, Kwid, Versa) requieren validación caso a caso.

## Próximo paso técnico
Enlazar productos existentes a las líneas nuevas solo cuando el mismo COD INR liste ese modelo; el resto queda navegable con vacío + WhatsApp.
