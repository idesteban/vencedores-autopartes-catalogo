# ORDEN v3 — Tienda desde cero (embudo marca → línea → tipo → ficha)

**Estado:** ACTIVA SUPERSEDE · 2026-09-14  
**Fuente única de productos:** PDF catálogo adjunto (`REF_CATALOGO_USUARIO.pdf` / diapositivas del canal).  
**Plataforma:** desarrollo **desde cero** (HTML/CSS/JS estático). No Shopify / WordPress.

## Conservar únicamente
- Números celulares (WA principal **311 456 0990**; también los del PDF si aplica: 315 572 8160, 311, tel fijo si se muestra como secundario).
- Storytelling **Quiénes somos** (Don Jacobo Salinas / el Ingeniero).
- Sección **Mezclas de caucho** (organización libre del equipo, look azul/gris).

## Identidad (obligatorio)
1. Extraer y usar el **logo de la diapositiva 1** (y reforzar con diapositiva 2) → `assets/logo/va-logo-pdf-slide1.png`.
2. Paleta **azul + gris** de esas diapositivas. **Eliminar negro + dorado** del sitio actual.
3. Landing y nav con ese logo grande y legible.

## Catálogo
- Extraer **foto por foto** del PDF; cada producto = imagen + descripción + referencia + marca(s).
- Subir a `assets/productos/` vinculadas en `VA_CATALOG` / data JS.
- Cero inventos fuera del PDF (excepto mezclas organizadas aparte).

## Flujo de navegación (misma pestaña, carga dinámica)
```
[Landing: Quiénes somos Jacobo]
        ↓
[Botones/tarjetas por MARCA]  Chevrolet · Kia · Mazda · Toyota · Nissan · Hyundai · Renault
  (bajo cada una: "Venta de pedales, fuelles y guardapolvos")
        ↓ clic marca (ej. Chevrolet)
[Líneas de esa marca]  Sail · Optra · Aveo · Spark · Sprint · …
        ↓ clic línea (ej. Aveo)
[Tipos de repuesto]  Pedales · Guardapolvos · Fuelles de dirección · Bujes
        ↓ clic tipo
[Grilla de productos]  foto + título + ref
        ↓ clic producto
[Ficha]  imagen · descripción · referencia · WhatsApp
```
Mezclas: sección aparte (no dentro del embudo de marcas, o entrada “Mezclas” global).

## Asignaciones
- Diseño: tema azul/gris + logo PDF en nav.
- Datos: extracción imgs + metadata marca/modelo/tipo/ref desde PDF.
- UX/Dominio: UI embudo 4 pasos en `#tienda` sin cambiar de pestaña.
- QA: logo visible, sin dorado/negro, embudo completo, WA, Jacobo, mezclas.
- Lead: rebuild + publish Pages.

## Hecho cuando
Usuario puede: Marca → línea → tipo → producto → WA, con logo PDF y colores azul/gris, Jacobo al inicio, mezclas presentes.
