# Biblia del proyecto — Tienda / Catálogo Web Vencedores Autopartes

Documento canónico para el equipo de dominios y tienda virtual. Ejecutar **fielmente**; ante duda, no inventar.

## Negocio
- **Nombre:** Vencedores Autopartes (hoy persona natural; SAS = meta).
- **Sede:** Bosa, Bogotá, Colombia. ~30 años en caucho.
- **Figura Quiénes somos:** **Don Jacobo Salinas**, conocido como **el Ingeniero** — emprendedor con más de 30 años en el mundo del caucho. Foto de Jacobo (no Esteban) en esa sección.
- **Canal:** B2B — almacenes de cauchos/repuestos y fabricantes que usan compuesto.
- **Operador del proyecto digital:** Esteban Salinas (equipo); WhatsApp comercial principal = Jacobo.

## Orden fijo de la página (inquebrantable)
1. **Quiénes somos** (resumen + Jacobo el Ingeniero) — **nunca** pedales/hero de producto arriba.
2. **Productos y servicios** (pedales, guardapolvos/fuelles, mezclas).
3. **Tienda / catálogos** — flyers por marca/vehículo, visuales, descripción, contacto WhatsApp; luego PDFs y contacto.

## WhatsApp
- **Principal:** +57 311 456 0990 (Jacobo Salinas) — `wa.me/573114560990`
- **Secundario (enlace normal, no CTA principal):** +57 317 632 3054
- Prefills por **línea** (no por cada CV):
  - Pedales → `Hola estoy muy interesado en sus productos. Pedales`
  - Fuelles → `Hola estoy muy interesado en sus productos. Guardapolvos y fuelles`
  - Mezclas → `Hola estoy muy interesado en sus productos. Mezclas`
  - General → `Hola estoy muy interesado en sus productos.`

## Reglas de contenido
- **Sin precios** en web. Cotización solo por WhatsApp.
- **Sin inventar** SKU, OEM, dimensiones, certificaciones, NIT ni stock.
- Solo datos de catálogos oficiales: pedales CV-01…CV-12, PDFs guardapolvos/fuelles y cauchos Vencedor, mezclas listadas.
- Wording: **mercado colombiano** (no “aftermarket” genérico).
- No distorsionar fotos de producto. Pedales públicos = PDF CV + previews de páginas; no kits de 3 piezas/empaque dudosos.
- Flyers: plantilla tipo flyer de referencia (header + foto vehículo + 4 beneficios + grilla refs + CTA WA). Acento VA ámbar `#F59E0B` / dark. **No** copiar marca Motorduz ni su teléfono.
- Fotos de vehículos: preferir Wikimedia Commons u otra licencia libre; documentar fuente en `assets/vehiculos/manifest.json`.
- Logo: siluetas doradas huecas (mula + carro + camioneta).

## Stack / repos vivos
- Sitio: https://idesteban.github.io/vencedores-autopartes-catalogo/
- Repo: `idesteban/vencedores-autopartes-catalogo` (GitHub Pages desde `main`)
- Box: `/workspace/vencedores/web/` (+ `web-deploy/`)
- PC: `Documents\VENCEDORES AUTOPARTES SAS\CATALOGO_WEB\`
- Datos: `catalogo-data.js` → `window.VA_CATALOG`
- UI tienda: `#tienda` — búsqueda marca/tipo/fuzzy + flyers + panel expandido
- Auditoría: `auditoria/MAPA_MARCAS_CATALOGO.md`

## Roles del equipo (canal Tienda Virtual VA)
| Rol | Responsabilidad |
|-----|-----------------|
| Arquitecto Dominio Digital VA | Taxonomía, mapa de secciones, reglas de negocio web |
| UX Tienda Virtual B2B VA | Flujos, búsqueda, flyer→detalle, conversión WA |
| Diseño Visual Tienda VA | Sistema visual, flyers, assets |
| Ing. Datos Catálogo Web VA | VA_CATALOG, sinónimos, auditoría producto a producto |
| QA Lanzamiento Web VA | Checklist de fidelidad antes de publicar |
| analista e investigador… (lead) | Orquestación, priorización, publicación |

Aliados existentes (fuera del canal si no caben): Diseño y Arquitectura Web VA (logo/identidad), Radar, Arquitecto Comercial, Auditor Orden, Ing. Química Caucho.

## Definición de “hecho”
- Cumple orden de página y Quiénes somos con Jacobo.
- Buscador filtra marca, tipo y palabras similares.
- Cada flyer solo lista refs reales del catálogo.
- WA principal 311; sin precios; PDFs descargables.
- Publicado en GitHub Pages + copia en CATALOGO_WEB cuando aplique.
