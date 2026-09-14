# UX — Flujo buscador → flyer → WhatsApp (≤1 pág)

Fuente: biblia + mapa de dominio. Móvil-first (almacenista en piso). Sin carrito, sin precios.

## Flujo feliz (≤3 taps)

1. **Entrada** `#tienda` — campo único “Buscar marca, modelo o tipo” + chips rápidos: Pedales | Guardapolvos/fuelles | Mezclas | marcas vivas.
2. **Resultados** — primero flyers que matchean; debajo refs sueltas del catálogo. Tap flyer → panel/expandido (no nueva página aún).
3. **Flyer** (layout Motorduz, branding VA): hero vehículo + 4 beneficios + grilla **solo refs reales** + CTA WA.
4. **CTA** → `wa.me/573114560990` con prefill por **línea** del flyer/producto:
   - pedales → `Hola estoy muy interesado en sus productos. Pedales`
   - fuelles/guardapolvos → `… Guardapolvos y fuelles`
   - mezclas → `… Mezclas`
   - ambiguo → general `Hola estoy muy interesado en sus productos.`

Fuzzy: chevy→chevrolet, dimax→d-max, hyunday→hyundai, benz→mercedes-benz (sinónimos de Datos). Mezclas: filtro por tipo, **sin** marca de vehículo.

## Wireframe prosa (móvil)

```
[ Buscar marca, modelo o tipo…     ]
[Pedales] [Fuelles] [Mezclas] [Chevy…]

Flyers
┌─────────────────────────┐
│ foto vehículo (libre)   │
│ Aveo / Sail / Corsa     │
│ ✓ ✓ ✓ ✓ beneficios      │
│ [CV-01][CV-02][GP-…]    │
│ [ Cotizar por WhatsApp ]│
└─────────────────────────┘
```

Ficha producto (si hay tap en ref): foto/preview + ref + compatibilidad documentada + mismo CTA por línea. Sin OEM inventado, sin precio, sin stock.

## Estados vacíos / error (microcopy CO)

| Estado | Mensaje | Acción |
|---|---|---|
| 0 resultados | “No encontramos eso en el catálogo. Prueba marca (Chevy), modelo (Aveo) o tipo (pedal).” | Limpiar + chips |
| Solo mezclas | “Las mezclas no van por vehículo. Mira la línea Mezclas.” | Chip Mezclas |
| Marca sin flyer (gap Hino) | “Aún no hay vitrina para esa marca. Cotiza por WhatsApp o mira el PDF.” | CTA WA general + #descargas |
| Sin red / WA falla | “Guarda el 311 456 0990 (Jacobo) y escríbenos: Pedales / Guardapolvos y fuelles / Mezclas.” | Mostrar número |
| Catálogo vacío (bug) | “Catálogo no cargó. Recarga o ve a Descargas.” | Recargar / #descargas |

## Criterios de aceptación

- [ ] Buscador filtra por marca, tipo y sinónimos fuzzy (Datos).
- [ ] Resultados: flyers primero; cada flyer solo refs de `VA_CATALOG`.
- [ ] CTA principal siempre 311 (nunca 317); prefill por línea, no por CV.
- [ ] Cero precios, carrito, NIT o logos OEM como endoso.
- [ ] Pedales/tienda nunca arriba de `#nosotros`.
- [ ] Vacío útil + chips; Hino no inventa flyer.
- [ ] Thumb-zone: CTA WA fijo o al final del flyer, ≥44px tap.
- [ ] Copy mercado colombiano; foto vehículo con atribución libre.

## Fuera de alcance UX (otros roles)

Tokens/plantilla visual → Diseño Visual. Esquema/gaps → Datos. URLs/anclas → Dominio. Pass/fail pre-pub → QA.
