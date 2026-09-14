# BRIEF_SITIO — Vencedores Autopartes (decisiones)

Fecha: 2026-09-11 (America/Bogota) · Sitio en `/workspace/vencedores/web/`

## 1. Negocio

| Pregunta | Decisión |
|---|---|
| Nombre comercial | **Vencedores Autopartes** |
| Forma jurídica en web | Persona natural — **no** se inventa NIT ni SAS |
| Antigüedad | 30 años operando |
| Ubicación | Bosa, Bogotá, Colombia |
| Audiencia | **B2B**: almacenes de cauchos/repuestos y fabricantes que usan MP/compuesto de caucho. **No** foco B2C retail |
| Canal de cotización | Solo WhatsApp |
| Maquinaria comunicada | Molino mezclador abierto + moldeo; capacidad volumen B2B |
| Certificaciones | Ninguna inventada. Texto: **control de lote / dureza** |
| Diferenciación | Calidad reproducible, molino propio, reposición cercana, 30 años, pedales+fuelles+mezclas, precio de almacén/industria (no el más barato del pasillo) |

## 2. Catálogo

### Pedales P001–P011
- Producto: forro pedal freno/embrague, material **100% caucho**
- Aplicaciones tomadas del listado interno (nombres de marcas normalizados: Accent, Navara, D-Max, etc.)
- Cada tarjeta: ref, título, material, usos, foto real (ciclo de `assets/fotos/`), CTA WhatsApp «Cotizar P00X»
- Galería lightbox de `assets/catalogo/pedales_p1.jpg` … `p4.jpg` como ficha técnica visual
- **Cero precios**

### Guardapolvos y fuelles
- Agrupados en **líneas** (no cada SKU): guardapolvos de eje L/C–L/R, fuelles de caja dirección, kits multi-marca
- Marcas mencionadas: Renault, Chevrolet, Hyundai, Mazda, Kia (según catálogo real)
- CTA WhatsApp por línea

### Compuestos / mezclas (lista del cliente)
1. Caucho pedal  
2. **Caucho Capmana** — se conserva ortografía del cliente; copy: dureza y aguante 100  
3. Caucho nitrilo (NBR)  
4. **Caucho plomo Rayox X** — nombre comercial del cliente; cotización con muestra/ficha  
5. Caucho diafragmas  
6. Caucho bujes  
7. Compuestos a medida / maquila  

Descripciones técnicas honestas (rangos Shore típicos de planta donde aplica); sin ISO inventada.

## 3. Tres productos ganadores (sección web)

Basado en `03_productos_ganadores_caucho.md` — **sin cifras de mercado inventadas**:

1. **Forros de pedal** — ancla de rotación; moldeo propio; ticket recurrente almacén  
2. **Guardapolvos/fuelles** — reposición suspensión/dirección; multi-marca  
3. **Compuestos NBR / especiales (NR–SBR + NBR)** — margen técnico vs NR commodity; maquila B2B  

Encuadre en sitio: «líneas con mejor potencial de margen/rotación para nuestro perfil».

## 4. Contacto y assets

| Ítem | Decisión |
|---|---|
| WhatsApp | **+57 317 6323054** → `https://wa.me/573176323054` + textos ES prellenados |
| Email / redes | **Omitidos** (desconocidos) |
| Logo | Wordmark SVG industrial negro/ámbar en `assets/logo/va-logo.svg` (provisional) |
| Fotos | Reales en `assets/fotos/`; WebP opcional en `optimized/` |
| Idioma | Español (Colombia) |
| Diseño | Dark industrial + amber; Inter (Google Fonts); sticky nav; glass cards; botón WA flotante |
| Estructura | Single page: Hero · Nosotros · 3 ganadores · Pedales · Guardapolvos · Mezclas · Por qué VA · Contacto |

## 5. Supuestos explícitos

- «Capmana» y «Rayox X» se dejan como los nombró el cliente (no se “corrigen” a marcas de terceros).
- Rangos Shore citados son **orientativos de planta / dossier interno**, no promesa contractual en web.
- Guardapolvos: se muestran líneas, no inventario SKU completo (catálogo PDF incompleto en texto extraído).
- Offline-first: assets relativos; Google Fonts requiere red (sistema tipográfico de respaldo).
