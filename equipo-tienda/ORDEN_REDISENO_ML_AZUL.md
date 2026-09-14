# ORDEN DE EJECUCIÓN — Rediseno Tienda VA (prioridad Esteban)

**Estado:** ACTIVA · **Fecha:** 2026-09-14 · **Lead:** analista e investigador de mercados fiancieros  
**Referencia visual:** PDF adjunto en canal (págs. 1–2) + copias `ref-pdf-p1-azul-gris.png`, `ref-pdf-p2-productos.png`, `REF_CATALOGO_USUARIO.pdf`

## Problema (diagnóstico aceptado)
Sitio actual (dark + ámbar) se ve **saturado y disperso**; logo casi no se ve; demasiados bloques. El cliente no encuentra fácil “guardapolvo para Toyota Hilux” o “pedal para Mitsubishi …” — los códigos CV solos no bastan.

## Objetivo (definición de hecho)
Tienda/página tipo **Mercado Libre en claridad**: buscar por **marca + modelo + tipo de pieza**, ver **producto a producto** (foto + descripción + referencia), orden intuitivo por marcas. Look del **catálogo PDF**: paleta **azul + gris**, logo tipo **V / CAUCHOS VENCEDOR**.

## Conservar (no tocar el criterio)
1. Arranque **Quiénes somos** con **Don Jacobo Salinas = el Ingeniero** (historia del negocio).
2. Sin precios en web · cotización WhatsApp.
3. WA principal cotización: **+57 311 456 0990 (Jacobo)**. Prefills por línea.
4. Solo refs reales del catálogo (CV, GP/FU de PDFs, mezclas). **Cero inventos** (si no hay Hilux/Lancer en datos → vacío útil + WA, no inventar ficha).
5. Orden de narrativa: nosotros → oferta → tienda/catálogo.

## Cambiar (obligatorio)
| # | Cambio |
|---|--------|
| A | **Tema visual:** de dark/ámbar → **azul + gris** (págs. 1–2 del PDF). Fondo gris claro texturizado o limpio; tipografía navy; acentos royal/navy. |
| B | **Logo:** extraer/recrear **V + CAUCHOS VENCEDOR** del PDF; visible y grande en nav (contraste alto). Retirar o degradar siluetas doradas si compiten. |
| C | **Densidad:** menos secciones ruidosas; una grilla clara de productos; flyers Motorduz-dark quedan **reemplazados** o rediseñados al look PDF. |
| D | **Ficha producto 1:1:** imagen (extraída del PDF cuando exista) + título humano + descripción + `ref` + marcas/modelos compatibles + CTA WA. |
| E | **Navegación ML-like:** 1) chips/líneas Pedales · Guardapolvos · Fuelles · Mezclas  2) marcas  3) búsqueda texto “toyota hilux guardapolvo”, “pedal lancer”, “duster pedal” con fuzzy. Resultados ordenados por relevancia marca/modelo. |
| F | Extracción de imágenes del PDF catálogo a `assets/productos/` con mapeo ref→archivo (Datos + Visual). |

## Asignaciones
- **Arquitecto Dominio:** actualizar mapa URLs/anclas al layout azul; taxonomía búsqueda ML (query → tipo + marca + modelo).
- **UX:** wire flujo ML (home limpio → buscar/filtrar → grilla → ficha → WA); estados vacíos; microcopy.
- **Diseño Visual:** tokens azul/gris desde PDF; logo V en SVG/PNG; plantilla ficha y cards; nav legible.
- **Ing. Datos:** enriquecer `VA_CATALOG` con `image`, `titleHuman`, `searchText`; sinónimos (hilux, toyota, lancer si no hay stock → no crear producto falso); plan extracción imgs PDF.
- **QA:** checklist nuevo tema + logo visible + búsqueda por modelo + sin precios + WA 311 + Jacobo intacto.
- **Lead:** prioriza, integra en `/workspace/vencedores/web/`, publica Pages + CATALOGO_WEB.

## Fuera de alcance ahora
Carrito de pago, precios, inventar OEM/dimensiones, flyer Motorduz rojo, teléfono 315 como CTA principal (puede ir como secundario si Esteban lo pide explícito).

## Criterio de aceptación (QA)
- [ ] Logo V legible en desktop y móvil
- [ ] Paleta azul/gris reconocible vs PDF
- [ ] Quiénes somos / Jacobo sigue primero
- [ ] Buscar “pedal chevrolet aveo” o “guardapolvo spark” muestra fichas con imagen+ref+desc
- [ ] Buscar modelo sin cobertura → vacío + WA, sin ficha inventada
- [ ] WA 311 en CTAs principales
