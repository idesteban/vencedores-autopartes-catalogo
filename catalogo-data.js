// cache 20260914h
/**
 * Vencedores Autopartes — embudo marca → línea → tipo → producto
 * Fuente: REF_CATALOGO_USUARIO.pdf + CATALOGO_COMPLETO + LISTADO_PEDALES.
 * Sin inventar SKUs; líneas empty-state = PDF TOC sin GP/FU/pedal COD en embudo aún.
 */
(function (global) {
  const VA_CATALOG = {
    waNumber: "573114560990",
    waSecondary: "573155728160",
    contact: {
  "waPrimary": "573114560990",
  "waPrimaryLabel": "+57 311 456 0990",
  "waPrimaryName": "Jacobo Salinas",
  "waSecondary": "573155728160",
  "waSecondaryLabel": "+57 315 572 8160",
  "waSecondaryName": "Esteban Salinas",
  "tel": "811 73 57",
  "address": "Carrera 82H #73 F41 Sur",
  "city": "Bosa, Bogotá, Colombia"
},
    brandTagline: "Venta de pedales, fuelles y guardapolvos",
    brands: [
  {
    "id": "chevrolet",
    "name": "Chevrolet",
    "monogram": "C",
    "logo": "assets/marcas/chevrolet.png",
    "lines": [
      "Alto",
      "Aveo",
      "Captiva",
      "Chevy C2",
      "Corsa",
      "D-Max",
      "LUV",
      "NKR",
      "NNR",
      "NPR",
      "NQR",
      "NHR",
      "Onix",
      "Optra",
      "Sail",
      "Spark",
      "Spark GT",
      "Sprint",
      "Swift",
      "Tracker",
      "Trooper",
      "Vitara",
      "N200/N300"
    ]
  },
  {
    "id": "kia",
    "name": "Kia",
    "monogram": "K",
    "logo": "assets/marcas/kia.png",
    "lines": [
      "Picanto",
      "Rio",
      "Eko Taxi",
      "Ion"
    ]
  },
  {
    "id": "mazda",
    "name": "Mazda",
    "monogram": "M",
    "logo": "assets/marcas/mazda.png",
    "lines": [
      "323",
      "626",
      "Mazda3",
      "Mazda5",
      "MX-6",
      "B2600"
    ]
  },
  {
    "id": "toyota",
    "name": "Toyota",
    "monogram": "T",
    "logo": "assets/marcas/toyota.png",
    "lines": [
      "Hilux",
      "Prado",
      "Fortuner",
      "Land Cruiser",
      "4Runner",
      "Tacoma",
      "Tundra",
      "TXL",
      "Burbuja"
    ]
  },
  {
    "id": "nissan",
    "name": "Nissan",
    "monogram": "N",
    "logo": "assets/marcas/nissan.png",
    "lines": [
      "Frontier",
      "Navara"
    ]
  },
  {
    "id": "hyundai",
    "name": "Hyundai",
    "monogram": "H",
    "logo": "assets/marcas/hyundai.png",
    "lines": [
      "Atos",
      "Accent",
      "Elantra",
      "i30",
      "Tucson",
      "Santa Fe",
      "Eko Taxi",
      "Vision",
      "Excel",
      "Getz",
      "Genesis",
      "Scoupe",
      "Tiburon",
      "Sonata"
    ]
  },
  {
    "id": "renault",
    "name": "Renault",
    "monogram": "R",
    "logo": "assets/marcas/renault.png",
    "lines": [
      "Logan",
      "Sandero",
      "Stepway",
      "Duster",
      "Oroch",
      "Clio",
      "Megane",
      "Twingo",
      "Kangoo",
      "Scenic",
      "Symbol",
      "Citius",
      "Fluence",
      "Captur",
      "Vel Satis",
      "R4",
      "R6",
      "R9",
      "R12",
      "R18",
      "R19",
      "Express",
      "Laguna",
      "Espace",
      "Trafic"
    ]
  },
  {
    "id": "mitsubishi",
    "name": "Mitsubishi",
    "monogram": "Mi",
    "logo": "assets/marcas/mitsubishi.png",
    "lines": [
      "L200",
      "Pajero"
    ]
  }
],
    types: [
  {
    "id": "pedales",
    "name": "Pedales",
    "label": "Cauchos de pedal freno y embrague"
  },
  {
    "id": "guardapolvos",
    "name": "Guardapolvos",
    "label": "Guardapolvos de eje L/C y L/R"
  },
  {
    "id": "fuelles",
    "name": "Fuelles de dirección",
    "label": "Fuelles caja de dirección"
  },
  {
    "id": "bujes",
    "name": "Bujes",
    "label": "Bujes y topes de caucho (vía mezclas)"
  }
],
    brandLines: {
  "renault": [
    "R4",
    "R6",
    "R9",
    "R12",
    "R18",
    "R19",
    "R21",
    "Alaskan",
    "Captur",
    "Clio",
    "Express Taxi",
    "Duster",
    "Oroch",
    "Fluence",
    "Kangoo",
    "Koleos",
    "Kwid",
    "Laguna",
    "Logan",
    "Megane",
    "Sandero",
    "Scala",
    "Scenic",
    "Stepway",
    "Symbol",
    "Citius Taxi",
    "Trafic",
    "Twingo"
  ],
  "mazda": [
    "121",
    "323",
    "626",
    "Allegro",
    "B1600",
    "B2000",
    "B2200",
    "B2600",
    "BT-50",
    "CX-3",
    "CX-5",
    "CX-7",
    "Mazda2",
    "Mazda3",
    "Mazda5",
    "Mazda6",
    "MX-5",
    "MX-3",
    "MX-6"
  ],
  "chevrolet": [
    "Alto",
    "Astra",
    "Aveo",
    "Captiva",
    "Chevy C2",
    "Cobalt",
    "Corsa",
    "Cruze",
    "Epica",
    "Joy",
    "LUV",
    "D-Max",
    "NHR",
    "NKR",
    "NNR",
    "NPR",
    "NQR",
    "N200",
    "N300",
    "Onix",
    "Optra",
    "Rodeo",
    "Sail",
    "Sonic",
    "Spark",
    "Spark GT",
    "Sprint",
    "Swift",
    "Trailblazer",
    "Tracker",
    "Trooper",
    "Vitara",
    "Wagon R",
    "Super Carry",
    "Jimny",
    "Samurai"
  ],
  "hyundai": [
    "Accent",
    "Atos",
    "Azera",
    "Elantra",
    "Eon",
    "Excel",
    "Getz",
    "Grace",
    "i10",
    "Grand i10",
    "Grand Metro Taxi",
    "i25",
    "i30",
    "i35",
    "i40",
    "i45",
    "Porter",
    "Santa Fe",
    "Santro",
    "Sonata",
    "Starex",
    "Terracan",
    "Tucson",
    "Veloster",
    "Veracruz",
    "Vision"
  ],
  "kia": [
    "Besta",
    "Carnival",
    "Cerato",
    "K2500",
    "K2700",
    "Picanto",
    "Eko Taxi",
    "Ion",
    "Morning",
    "Pregio",
    "Pride",
    "Rio",
    "Sedona",
    "Sephia",
    "Spectra",
    "Sportage",
    "Soul",
    "Sorento",
    "Optima",
    "Master"
  ],
  "toyota": [
    "Avalon",
    "Camry",
    "Celica",
    "Coaster",
    "Corolla",
    "Corona",
    "Fortuner",
    "4Runner",
    "Hilux",
    "Land Cruiser",
    "Prado",
    "RAV4",
    "Starlet",
    "Tercel",
    "Yaris",
    "T100"
  ],
  "nissan": [
    "Almera",
    "Altima",
    "Frontier",
    "Navara",
    "NP300",
    "Juke",
    "Kicks",
    "March",
    "Micra",
    "Murano",
    "Note",
    "Patrol",
    "Pathfinder",
    "Qashqai",
    "Sentra",
    "Tiida",
    "Urvan",
    "Versa",
    "X-Trail",
    "Xterra",
    "Sunny"
  ]
},
    products: [
  {
    "id": "p001",
    "ref": "P001",
    "type": "pedales",
    "title": "Caucho pedal freno y embrague P001",
    "description": "Universal. Material 100% caucho goma. Chevrolet Sprint/Spark/Swift; Hyundai Accent; Mazda 323; entre otros.",
    "image": "assets/productos/p001.png",
    "pdfPage": 10,
    "fits": [
      {
        "brand": "chevrolet",
        "lines": [
          "Almera",
          "Altima",
          "Frontier",
          "Juke",
          "Kicks",
          "March",
          "Micra",
          "Murano",
          "Navara",
          "Note",
          "NP300",
          "Pathfinder",
          "Patrol",
          "Qashqai",
          "Sentra",
          "Sunny",
          "Tiida",
          "Urvan",
          "Versa",
          "X-Trail",
          "Xterra"
        ]
      },
      {
        "brand": "hyundai",
        "lines": [
          "Accent"
        ]
      },
      {
        "brand": "mazda",
        "lines": [
          "323"
        ]
      }
    ],
    "brands": [
      "chevrolet",
      "hyundai",
      "mazda"
    ],
    "lines": [
      "323",
      "Accent",
      "Almera",
      "Altima",
      "Frontier",
      "Juke",
      "Kicks",
      "March",
      "Micra",
      "Murano",
      "Navara",
      "Note",
      "NP300",
      "Pathfinder",
      "Patrol",
      "Qashqai",
      "Sentra",
      "Sunny",
      "Tiida",
      "Urvan",
      "Versa",
      "X-Trail",
      "Xterra"
    ],
    "material": "100% caucho"
  },
  {
    "id": "p002",
    "ref": "P002",
    "type": "pedales",
    "title": "Caucho pedal freno y embrague P002",
    "description": "Universal. Hyundai: Atos, Accent, Elantra, Genesis, i30, Santa Fe, Tucson; entre otros.",
    "image": "assets/productos/p002.png",
    "pdfPage": 11,
    "fits": [
      {
        "brand": "hyundai",
        "lines": [
          "Accent",
          "Atos",
          "Elantra",
          "Genesis",
          "i30",
          "Santa Fe",
          "Tucson"
        ]
      }
    ],
    "brands": [
      "hyundai"
    ],
    "lines": [
      "Accent",
      "Atos",
      "Elantra",
      "Genesis",
      "i30",
      "Santa Fe",
      "Tucson"
    ],
    "material": "100% caucho"
  },
  {
    "id": "p003",
    "ref": "P003",
    "type": "pedales",
    "title": "Caucho pedal freno y embrague P003",
    "description": "Universal. Renault Twingo; R19; Clio 1990–2009; Espace J11.",
    "image": "assets/productos/p003.png",
    "pdfPage": 12,
    "fits": [
      {
        "brand": "renault",
        "lines": [
          "Citius",
          "Citius Taxi",
          "Clio",
          "Espace",
          "Express",
          "Express Taxi",
          "Kangoo",
          "R19",
          "Symbol",
          "Twingo"
        ]
      }
    ],
    "brands": [
      "renault"
    ],
    "lines": [
      "Clio",
      "Espace",
      "R19",
      "Twingo"
    ],
    "material": "100% caucho"
  },
  {
    "id": "p004",
    "ref": "P004",
    "type": "pedales",
    "title": "Caucho pedal freno y embrague P004",
    "description": "Universal. Renault Duster, Captur, Clio, Megane, Trafic, Scenic, Vel Satis, Kangoo, Laguna, Espace.",
    "image": "assets/productos/p004.png",
    "pdfPage": 13,
    "fits": [
      {
        "brand": "renault",
        "lines": [
          "Captur",
          "Citius",
          "Citius Taxi",
          "Clio",
          "Duster",
          "Espace",
          "Express",
          "Express Taxi",
          "Kangoo",
          "Laguna",
          "Megane",
          "Oroch",
          "Scenic",
          "Symbol",
          "Trafic",
          "Vel Satis"
        ]
      }
    ],
    "brands": [
      "renault"
    ],
    "lines": [
      "Captur",
      "Clio",
      "Duster",
      "Espace",
      "Kangoo",
      "Laguna",
      "Megane",
      "Scenic",
      "Trafic",
      "Vel Satis"
    ],
    "material": "100% caucho"
  },
  {
    "id": "p005",
    "ref": "P005",
    "type": "pedales",
    "title": "Caucho pedal freno y embrague P005",
    "description": "Universal. Hyundai Accent/Vision/Elantra/Excel/Scoupe/Tiburón/Getz; Kia Picanto/Ion/Rio; Chevrolet Spark. Evidencia: LISTADO_PEDALES + PDF Kia Picanto/EkoTaxi/Ion.",
    "image": "assets/productos/p005.png",
    "pdfPage": 14,
    "fits": [
      {
        "brand": "hyundai",
        "lines": [
          "Accent",
          "Elantra",
          "Excel",
          "Getz",
          "Scoupe",
          "Tiburon",
          "Vision"
        ]
      },
      {
        "brand": "kia",
        "lines": [
          "Eko Taxi",
          "Ion",
          "Morning",
          "Picanto",
          "Rio"
        ]
      },
      {
        "brand": "chevrolet",
        "lines": [
          "Alto",
          "Spark",
          "Spark GT"
        ]
      }
    ],
    "brands": [
      "hyundai",
      "kia",
      "chevrolet"
    ],
    "lines": [
      "Accent",
      "Elantra",
      "Excel",
      "Getz",
      "Ion",
      "Picanto",
      "Rio",
      "Scoupe",
      "Spark",
      "Tiburon",
      "Vision"
    ],
    "material": "100% caucho"
  },
  {
    "id": "p006",
    "ref": "P006",
    "type": "pedales",
    "title": "Caucho pedal freno y embrague P006",
    "description": "Universal. Chevrolet Sail, Aveo, Optra; entre otros.",
    "image": "assets/productos/p006.png",
    "pdfPage": 15,
    "fits": [
      {
        "brand": "chevrolet",
        "lines": [
          "Aveo",
          "Optra",
          "Sail"
        ]
      }
    ],
    "brands": [
      "chevrolet"
    ],
    "lines": [
      "Aveo",
      "Optra",
      "Sail"
    ],
    "material": "100% caucho"
  },
  {
    "id": "p007",
    "ref": "P007",
    "type": "pedales",
    "title": "Caucho pedal freno y embrague P007",
    "description": "Universal. Hyundai Accent/Elantra/Excel/Scoupe/Tiburón/Genesis/Santa Fe/Tucson/i30/Sonata; Kia Picanto/Ion/Rio; Mitsubishi L200/Pajero (LISTADO_PEDALES).",
    "image": "assets/productos/p007.png",
    "pdfPage": 16,
    "fits": [
      {
        "brand": "hyundai",
        "lines": [
          "Accent",
          "Elantra",
          "Excel",
          "Genesis",
          "i30",
          "Santa Fe",
          "Scoupe",
          "Sonata",
          "Tiburon",
          "Tucson"
        ]
      },
      {
        "brand": "kia",
        "lines": [
          "Eko Taxi",
          "Ion",
          "Morning",
          "Picanto",
          "Rio"
        ]
      },
      {
        "brand": "mitsubishi",
        "lines": [
          "L200",
          "Pajero"
        ]
      }
    ],
    "brands": [
      "hyundai",
      "kia",
      "mitsubishi"
    ],
    "lines": [
      "Accent",
      "Elantra",
      "Excel",
      "Genesis",
      "i30",
      "Ion",
      "L200",
      "Pajero",
      "Picanto",
      "Rio",
      "Santa Fe",
      "Scoupe",
      "Sonata",
      "Tiburon",
      "Tucson"
    ],
    "material": "100% caucho"
  },
  {
    "id": "p008",
    "ref": "P008",
    "type": "pedales",
    "title": "Caucho pedal freno y embrague P008",
    "description": "Universal. Nissan Frontier y Navarra; camionetas Toyota.",
    "image": "assets/productos/p008.png",
    "pdfPage": 17,
    "fits": [
      {
        "brand": "nissan",
        "lines": [
          "Frontier",
          "Navara",
          "NP300"
        ]
      },
      {
        "brand": "toyota",
        "lines": [
          "4Runner",
          "Fortuner",
          "Hilux",
          "Land Cruiser",
          "Prado"
        ]
      }
    ],
    "brands": [
      "nissan",
      "toyota"
    ],
    "lines": [
      "4Runner",
      "Fortuner",
      "Frontier",
      "Hilux",
      "Land Cruiser",
      "Navara",
      "Prado"
    ],
    "material": "100% caucho"
  },
  {
    "id": "p009",
    "ref": "P009",
    "type": "pedales",
    "title": "Caucho pedal freno y embrague P009",
    "description": "Universal. Camionetas Chevrolet D-Max, Trooper, LUV.",
    "image": "assets/productos/p009.png",
    "pdfPage": 18,
    "fits": [
      {
        "brand": "chevrolet",
        "lines": [
          "D-Max",
          "LUV",
          "Trooper"
        ]
      }
    ],
    "brands": [
      "chevrolet"
    ],
    "lines": [
      "D-Max",
      "LUV",
      "Trooper"
    ],
    "material": "100% caucho"
  },
  {
    "id": "p010",
    "ref": "P010",
    "type": "pedales",
    "title": "Caucho pedal freno y embrague P010",
    "description": "Universal. Camiones de estaca Chevrolet NKR, NQR, NPR, NNR; entre otros.",
    "image": "assets/productos/p010.png",
    "pdfPage": 19,
    "fits": [
      {
        "brand": "chevrolet",
        "lines": [
          "NKR",
          "NNR",
          "NPR",
          "NQR"
        ]
      }
    ],
    "brands": [
      "chevrolet"
    ],
    "lines": [
      "NKR",
      "NNR",
      "NPR",
      "NQR"
    ],
    "material": "100% caucho"
  },
  {
    "id": "p011",
    "ref": "P011",
    "type": "pedales",
    "title": "Caucho pedal freno y embrague P011",
    "description": "Universal. Toyota Land Cruiser, 4Runner, Prado, Fortuner, TXL, Tacoma, Hilux, Tundra, Van, Burbuja; Nissan Frontier/Navarra; camiones Hino (PDF).",
    "image": "assets/productos/p011.png",
    "pdfPage": 20,
    "fits": [
      {
        "brand": "toyota",
        "lines": [
          "4Runner",
          "Burbuja",
          "Fortuner",
          "Hilux",
          "Land Cruiser",
          "Prado",
          "Tacoma",
          "Tundra",
          "TXL"
        ]
      },
      {
        "brand": "nissan",
        "lines": [
          "Frontier",
          "Navara",
          "NP300"
        ]
      }
    ],
    "brands": [
      "toyota",
      "nissan"
    ],
    "lines": [
      "4Runner",
      "Burbuja",
      "Fortuner",
      "Frontier",
      "Hilux",
      "Land Cruiser",
      "Navara",
      "Prado",
      "Tacoma",
      "Tundra",
      "TXL"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-ren-lh-01",
    "ref": "GP-REN-LH-01",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/C izquierdo LH",
    "description": "Megane I; Citius Taxi; Symbol I/II; Clio I/II; R9 (86/99).",
    "image": "assets/productos/gp-ren-01.png",
    "pdfPage": 3,
    "fits": [
      {
        "brand": "renault",
        "lines": [
          "Citius",
          "Citius Taxi",
          "Clio",
          "Express",
          "Express Taxi",
          "Kangoo",
          "Megane",
          "R9",
          "Symbol"
        ]
      }
    ],
    "brands": [
      "renault"
    ],
    "lines": [
      "Citius",
      "Clio",
      "Megane",
      "R9",
      "Symbol"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-ren-lc-02",
    "ref": "GP-REN-LC-02",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/C sin grasa / sin abrazaderas IZQ LH",
    "description": "Logan; Sandero I/II; Stepway I/II.",
    "image": "assets/productos/gp-ren-02.png",
    "pdfPage": 3,
    "fits": [
      {
        "brand": "renault",
        "lines": [
          "Logan",
          "Sandero",
          "Stepway"
        ]
      }
    ],
    "brands": [
      "renault"
    ],
    "lines": [
      "Logan",
      "Sandero",
      "Stepway"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-ren-homo-03",
    "ref": "GP-REN-HOMO-03",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/C junta tipo homocinética",
    "description": "R4 Master/Líder (86/92); R9 1.3/1.4/1.6 (86/99).",
    "image": "assets/productos/gp-ren-03.png",
    "pdfPage": 3,
    "fits": [
      {
        "brand": "renault",
        "lines": [
          "R4",
          "R9"
        ]
      }
    ],
    "brands": [
      "renault"
    ],
    "lines": [
      "R4",
      "R9"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-ren-lr-04",
    "ref": "GP-REN-LR-04",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/R caña gruesa",
    "description": "R9 1.3/1.4 (83/85).",
    "image": "assets/productos/gp-ren-04.png",
    "pdfPage": 3,
    "fits": [
      {
        "brand": "renault",
        "lines": [
          "R9"
        ]
      }
    ],
    "brands": [
      "renault"
    ],
    "lines": [
      "R9"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-ren-tri-lc",
    "ref": "GP-REN-TRI-LC",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/C junta tipo triceta",
    "description": "R4 850/Plus; R6; R12; R18 GTL/TS; R19; Clio I.",
    "image": "assets/productos/gpfu-ren-01.png",
    "pdfPage": 4,
    "fits": [
      {
        "brand": "renault",
        "lines": [
          "Citius",
          "Citius Taxi",
          "Clio",
          "Express",
          "Express Taxi",
          "Kangoo",
          "R12",
          "R18",
          "R19",
          "R4",
          "R6",
          "Symbol"
        ]
      }
    ],
    "brands": [
      "renault"
    ],
    "lines": [
      "Clio",
      "R12",
      "R18",
      "R19",
      "R4",
      "R6"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-ren-tri-lr",
    "ref": "GP-REN-TRI-LR",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/R junta tipo triceta",
    "description": "R4 850/Plus; R6; R12; R18 GTL/TS/GTX.",
    "image": "assets/productos/gpfu-ren-02.png",
    "pdfPage": 4,
    "fits": [
      {
        "brand": "renault",
        "lines": [
          "R12",
          "R18",
          "R4",
          "R6"
        ]
      }
    ],
    "brands": [
      "renault"
    ],
    "lines": [
      "R12",
      "R18",
      "R4",
      "R6"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-ren-lr-log",
    "ref": "GP-REN-LR-LOG",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/R",
    "description": "Logan; Megane II; Sandero I; Grand Scenic; Scenic II; Stepway I.",
    "image": "assets/productos/gpfu-ren-03.png",
    "pdfPage": 4,
    "fits": [
      {
        "brand": "renault",
        "lines": [
          "Logan",
          "Megane",
          "Sandero",
          "Scenic",
          "Stepway"
        ]
      }
    ],
    "brands": [
      "renault"
    ],
    "lines": [
      "Logan",
      "Megane",
      "Sandero",
      "Scenic",
      "Stepway"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-ren-homo-lr",
    "ref": "GP-REN-HOMO-LR",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/R junta tipo homocinética",
    "description": "R4 Master/Líder; R9 1.3/1.4/1.6.",
    "image": "assets/productos/gpfu-ren-04.png",
    "pdfPage": 4,
    "fits": [
      {
        "brand": "renault",
        "lines": [
          "R4",
          "R9"
        ]
      }
    ],
    "brands": [
      "renault"
    ],
    "lines": [
      "R4",
      "R9"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-ren-dus-lc",
    "ref": "GP-REN-DUS-LC",
    "type": "guardapolvos",
    "title": "G/Polvo eje solo L/C",
    "description": "Duster 1.6/2.0 2WD/4WD; Duster Oroch 2.0 (16-).",
    "image": "assets/productos/gpfu-ren-05.png",
    "pdfPage": 4,
    "fits": [
      {
        "brand": "renault",
        "lines": [
          "Duster",
          "Oroch"
        ]
      }
    ],
    "brands": [
      "renault"
    ],
    "lines": [
      "Duster",
      "Oroch"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-ren-dus-lr",
    "ref": "GP-REN-DUS-LR",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/R",
    "description": "Duster 1.6/2.0; Oroch; Fluence 1.6/2.0 (10/15).",
    "image": "assets/productos/gpfu-ren-06.png",
    "pdfPage": 4,
    "fits": [
      {
        "brand": "renault",
        "lines": [
          "Duster",
          "Fluence",
          "Oroch"
        ]
      }
    ],
    "brands": [
      "renault"
    ],
    "lines": [
      "Duster",
      "Fluence",
      "Oroch"
    ],
    "material": "100% caucho"
  },
  {
    "id": "fu-ren-r4",
    "ref": "FU-REN-R4",
    "type": "fuelles",
    "title": "Fuelle caja dirección",
    "description": "R4 Master/Líder (86/92); R18 GTL/TS.",
    "image": "assets/productos/fu-ren-r4.png",
    "pdfPage": 4,
    "fits": [
      {
        "brand": "renault",
        "lines": [
          "R18",
          "R4"
        ]
      }
    ],
    "brands": [
      "renault"
    ],
    "lines": [
      "R18",
      "R4"
    ],
    "material": "100% caucho"
  },
  {
    "id": "fu-ren-r9",
    "ref": "FU-REN-R9",
    "type": "fuelles",
    "title": "Fuelle caja dirección",
    "description": "R9 1.3/1.4/1.6; Twingo I/II.",
    "image": "assets/productos/fu-ren-r9.png",
    "pdfPage": 4,
    "fits": [
      {
        "brand": "renault",
        "lines": [
          "R9",
          "Twingo"
        ]
      }
    ],
    "brands": [
      "renault"
    ],
    "lines": [
      "R9",
      "Twingo"
    ],
    "material": "100% caucho"
  },
  {
    "id": "fu-ren-clio",
    "ref": "FU-REN-CLIO",
    "type": "fuelles",
    "title": "Fuelle caja dirección",
    "description": "Clio I/II/Campus/Style; Express Taxi; Kangoo; Megane I; Scenic I; Citius; Symbol I/II.",
    "image": "assets/productos/fu-ren-clio.png",
    "pdfPage": 4,
    "fits": [
      {
        "brand": "renault",
        "lines": [
          "Citius",
          "Citius Taxi",
          "Clio",
          "Express",
          "Express Taxi",
          "Kangoo",
          "Megane",
          "Scenic",
          "Symbol"
        ]
      }
    ],
    "brands": [
      "renault"
    ],
    "lines": [
      "Citius",
      "Clio",
      "Express",
      "Kangoo",
      "Megane",
      "Scenic",
      "Symbol"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-chev-sp-lc",
    "ref": "GP-CHEV-SP-LC",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/C",
    "description": "Alto 1.0; Spark I/II Chronos; Swift 1.0; Sprint SA310.",
    "image": "assets/productos/gpfu-chev-01.png",
    "pdfPage": 5,
    "fits": [
      {
        "brand": "chevrolet",
        "lines": [
          "Alto",
          "Spark",
          "Spark GT",
          "Sprint",
          "Swift"
        ]
      }
    ],
    "brands": [
      "chevrolet"
    ],
    "lines": [
      "Alto",
      "Spark",
      "Sprint",
      "Swift"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-chev-sp-lr",
    "ref": "GP-CHEV-SP-LR",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/R",
    "description": "Alto; Spark I/II; Sprint; Swift 1.0/1.3/1.6.",
    "image": "assets/productos/gpfu-chev-02.png",
    "pdfPage": 5,
    "fits": [
      {
        "brand": "chevrolet",
        "lines": [
          "Alto",
          "Spark",
          "Spark GT",
          "Sprint",
          "Swift"
        ]
      }
    ],
    "brands": [
      "chevrolet"
    ],
    "lines": [
      "Alto",
      "Spark",
      "Sprint",
      "Swift"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-chev-av-lr",
    "ref": "GP-CHEV-AV-LR",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/R",
    "description": "Aveo T200/T250; Captiva; Optra J200; Sail 1.4 (12-).",
    "image": "assets/productos/gpfu-chev-03.png",
    "pdfPage": 5,
    "fits": [
      {
        "brand": "chevrolet",
        "lines": [
          "Aveo",
          "Captiva",
          "Optra",
          "Sail"
        ]
      }
    ],
    "brands": [
      "chevrolet"
    ],
    "lines": [
      "Aveo",
      "Captiva",
      "Optra",
      "Sail"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-chev-av-lc",
    "ref": "GP-CHEV-AV-LC",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/C",
    "description": "Aveo T200/T250; Optra J200; Sail 1.4 (12-).",
    "image": "assets/productos/gpfu-chev-04.png",
    "pdfPage": 5,
    "fits": [
      {
        "brand": "chevrolet",
        "lines": [
          "Aveo",
          "Optra",
          "Sail"
        ]
      }
    ],
    "brands": [
      "chevrolet"
    ],
    "lines": [
      "Aveo",
      "Optra",
      "Sail"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-chev-co-lr",
    "ref": "GP-CHEV-CO-LR",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/R",
    "description": "Chevy C2 1.6 auto; Corsa 1.3/1.4/1.6; Corsa Diesel Taxi.",
    "image": "assets/productos/gpfu-chev-05.png",
    "pdfPage": 5,
    "fits": [
      {
        "brand": "chevrolet",
        "lines": [
          "Chevy C2",
          "Corsa"
        ]
      }
    ],
    "brands": [
      "chevrolet"
    ],
    "lines": [
      "Chevy C2",
      "Corsa"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-chev-co-lc",
    "ref": "GP-CHEV-CO-LC",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/C",
    "description": "Chevy C2; Corsa fases; Corsa Diesel Taxi.",
    "image": "assets/productos/gpfu-chev-06.png",
    "pdfPage": 5,
    "fits": [
      {
        "brand": "chevrolet",
        "lines": [
          "Chevy C2",
          "Corsa"
        ]
      }
    ],
    "brands": [
      "chevrolet"
    ],
    "lines": [
      "Chevy C2",
      "Corsa"
    ],
    "material": "100% caucho"
  },
  {
    "id": "fu-chev-pas",
    "ref": "FU-CHEV-PAS",
    "type": "fuelles",
    "title": "Fuelle caja dirección lado pasajero",
    "description": "Alto; Sprint SA310; Swift 1.0/1.3/1.6.",
    "image": "assets/productos/fu-chev-pas.png",
    "pdfPage": 5,
    "fits": [
      {
        "brand": "chevrolet",
        "lines": [
          "Sprint"
        ]
      }
    ],
    "brands": [
      "chevrolet"
    ],
    "lines": [
      "Alto",
      "Sprint",
      "Swift"
    ],
    "material": "100% caucho"
  },
  {
    "id": "fu-chev-lh",
    "ref": "FU-CHEV-LH",
    "type": "fuelles",
    "title": "Fuelle caja dirección lado conductor LH",
    "description": "Alto; Sprint SA310; Swift 1.0/1.3/1.6.",
    "image": "assets/productos/fu-chev-lh.png",
    "pdfPage": 5,
    "fits": [
      {
        "brand": "chevrolet",
        "lines": [
          "Sprint"
        ]
      }
    ],
    "brands": [
      "chevrolet"
    ],
    "lines": [
      "Alto",
      "Sprint",
      "Swift"
    ],
    "material": "100% caucho"
  },
  {
    "id": "fu-chev-corsa",
    "ref": "FU-CHEV-CORSA",
    "type": "fuelles",
    "title": "Fuelle caja dirección hidráulica Corsa",
    "description": "Chevrolet Corsa hidráulica.",
    "image": "assets/productos/fu-chev-02.png",
    "pdfPage": 6,
    "fits": [
      {
        "brand": "chevrolet",
        "lines": [
          "Corsa"
        ]
      }
    ],
    "brands": [
      "chevrolet"
    ],
    "lines": [
      "Corsa"
    ],
    "material": "100% caucho"
  },
  {
    "id": "fu-chev-ser",
    "ref": "FU-CHEV-SER11006",
    "type": "fuelles",
    "title": "Fuelle caja dirección IZQ/DER SER11006",
    "description": "Aveo / Spark / Captiva / Onix / Sail / Optra. Ref. SER11006.",
    "image": "assets/productos/fu-chev-03.png",
    "pdfPage": 6,
    "fits": [
      {
        "brand": "chevrolet",
        "lines": [
          "Alto",
          "Aveo",
          "Captiva",
          "Onix",
          "Optra",
          "Sail",
          "Spark",
          "Spark GT"
        ]
      }
    ],
    "brands": [
      "chevrolet"
    ],
    "lines": [
      "Aveo",
      "Captiva",
      "Onix",
      "Optra",
      "Sail",
      "Spark"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-chev-luv-lr",
    "ref": "GP-CHEV-LUV-LR",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/R",
    "description": "Trooper 2.6 4WD; LUV 2200/2300/2800 TFS 4WD.",
    "image": "assets/productos/gp-chevcam-01.png",
    "pdfPage": 7,
    "fits": [
      {
        "brand": "chevrolet",
        "lines": [
          "D-Max",
          "LUV",
          "Trooper"
        ]
      }
    ],
    "brands": [
      "chevrolet"
    ],
    "lines": [
      "LUV",
      "Trooper"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-chev-luv-lc",
    "ref": "GP-CHEV-LUV-LC",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/C",
    "description": "Trooper; Vitara SE416; LUV 1600/2200/2300/2800.",
    "image": "assets/productos/gp-chevcam-02.png",
    "pdfPage": 7,
    "fits": [
      {
        "brand": "chevrolet",
        "lines": [
          "D-Max",
          "LUV",
          "Trooper",
          "Vitara"
        ]
      }
    ],
    "brands": [
      "chevrolet"
    ],
    "lines": [
      "LUV",
      "Trooper",
      "Vitara"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-chev-dm-r",
    "ref": "GP-CHEV-DM-R",
    "type": "guardapolvos",
    "title": "Guardapolvo eje lado rueda",
    "description": "LUV D-Max RT-50 2.5 TD 4WD (14-).",
    "image": "assets/productos/gp-chevcam-03.png",
    "pdfPage": 7,
    "fits": [
      {
        "brand": "chevrolet",
        "lines": [
          "D-Max",
          "LUV"
        ]
      }
    ],
    "brands": [
      "chevrolet"
    ],
    "lines": [
      "D-Max",
      "LUV"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-chev-dm-c",
    "ref": "GP-CHEV-DM-C",
    "type": "guardapolvos",
    "title": "Guardapolvo eje lado caja",
    "description": "D-Max RT50 2.5 TD 4WD (14-).",
    "image": "assets/productos/gp-chevcam-04.png",
    "pdfPage": 7,
    "fits": [
      {
        "brand": "chevrolet",
        "lines": [
          "D-Max",
          "LUV"
        ]
      }
    ],
    "brands": [
      "chevrolet"
    ],
    "lines": [
      "D-Max"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-maz-626-lr",
    "ref": "GP-MAZ-626-LR",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/R con grasa + abrazaderas",
    "description": "626 Nueva Raza 1.8 (84/88); MX-6 2.0 16v (93/97).",
    "image": "assets/productos/gpfu-maz-01.png",
    "pdfPage": 8,
    "fits": [
      {
        "brand": "mazda",
        "lines": [
          "626",
          "MX-6"
        ]
      }
    ],
    "brands": [
      "mazda"
    ],
    "lines": [
      "626",
      "MX-6"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-maz-626-lc",
    "ref": "GP-MAZ-626-LC",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/C con grasa + abrazaderas",
    "description": "626 Nueva Raza 1.8 (84/88).",
    "image": "assets/productos/gpfu-maz-02.png",
    "pdfPage": 8,
    "fits": [
      {
        "brand": "mazda",
        "lines": [
          "626"
        ]
      }
    ],
    "brands": [
      "mazda"
    ],
    "lines": [
      "626"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-maz-626-kit",
    "ref": "GP-MAZ-626-KIT",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/R + L/C con grasa + abrazaderas",
    "description": "626 Asahi / Matsuri / Nuevo Milenio.",
    "image": "assets/productos/gpfu-maz-03.png",
    "pdfPage": 8,
    "fits": [
      {
        "brand": "mazda",
        "lines": [
          "626"
        ]
      }
    ],
    "brands": [
      "mazda"
    ],
    "lines": [
      "626"
    ],
    "material": "100% caucho"
  },
  {
    "id": "fu-maz-32113",
    "ref": "FU-MAZ-32113",
    "type": "fuelles",
    "title": "Fuelle caja dirección COD 32113 / REF GJ2232125",
    "description": "MX-6 2.0 16v (93/97).",
    "image": "assets/productos/fu-maz-32113.png",
    "pdfPage": 8,
    "fits": [
      {
        "brand": "mazda",
        "lines": [
          "MX-6"
        ]
      }
    ],
    "brands": [
      "mazda"
    ],
    "lines": [
      "MX-6"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-maz-m3",
    "ref": "GP-MAZ-M3-LC",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/C base hexagonal con grasa + abrazaderas",
    "description": "Mazda3 / All New; Mazda5 / All New (trans. automática).",
    "image": "assets/productos/gpfu-maz-05.png",
    "pdfPage": 8,
    "fits": [
      {
        "brand": "mazda",
        "lines": [
          "Mazda3",
          "Mazda5"
        ]
      }
    ],
    "brands": [
      "mazda"
    ],
    "lines": [
      "Mazda3",
      "Mazda5"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-maz-b2600",
    "ref": "GP-MAZ-B2600",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/R + L/C con grasa + abrazaderas",
    "description": "B2600 2.6 12v 4WD (92/07).",
    "image": "assets/productos/gpfu-maz-06.png",
    "pdfPage": 8,
    "fits": [
      {
        "brand": "mazda",
        "lines": [
          "B2600"
        ]
      }
    ],
    "brands": [
      "mazda"
    ],
    "lines": [
      "B2600"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-hykia-lr",
    "ref": "GP-HYKIA-LR",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/R",
    "description": "Atos I/II; Eko Taxi I/II; Picanto I / Picanto II Morning. Kia Ion agrupado PDF con Picanto/EkoTaxi.",
    "image": "assets/productos/gpfu-hykia-03.png",
    "pdfPage": 9,
    "fits": [
      {
        "brand": "hyundai",
        "lines": [
          "Atos",
          "Eko Taxi"
        ]
      },
      {
        "brand": "kia",
        "lines": [
          "Eko Taxi",
          "Ion",
          "Morning",
          "Picanto"
        ]
      }
    ],
    "brands": [
      "hyundai",
      "kia"
    ],
    "lines": [
      "Atos",
      "Eko Taxi",
      "Ion",
      "Picanto"
    ],
    "material": "100% caucho"
  },
  {
    "id": "gp-hykia-lc",
    "ref": "GP-HYKIA-LC",
    "type": "guardapolvos",
    "title": "G/Polvo eje L/C",
    "description": "Atos I/II; Eko Taxi I/II; Picanto I / II Morning. Kia Ion agrupado PDF con Picanto/EkoTaxi.",
    "image": "assets/productos/gpfu-hykia-04.png",
    "pdfPage": 9,
    "fits": [
      {
        "brand": "hyundai",
        "lines": [
          "Atos",
          "Eko Taxi"
        ]
      },
      {
        "brand": "kia",
        "lines": [
          "Eko Taxi",
          "Ion",
          "Morning",
          "Picanto"
        ]
      }
    ],
    "brands": [
      "hyundai",
      "kia"
    ],
    "lines": [
      "Atos",
      "Eko Taxi",
      "Ion",
      "Picanto"
    ],
    "material": "100% caucho"
  }
],
    mezclas: [
  {
    "id": "mez-bujes",
    "title": "Bujes",
    "desc": "Mezclas para bujes y topes de caucho."
  },
  {
    "id": "mez-guardapolvos",
    "title": "Guardapolvos",
    "desc": "Compuestos para guardapolvos de eje."
  },
  {
    "id": "mez-diafragmas",
    "title": "Diafragmas",
    "desc": "Mezclas para diafragmas y membranas."
  },
  {
    "id": "mez-fuelles",
    "title": "Fuelles",
    "desc": "Compuestos para fuelles de dirección."
  },
  {
    "id": "mez-nitrilo",
    "title": "Nitrilo y caucho de color",
    "desc": "Mezclas especiales nitrilo (NBR) y caucho de color."
  },
  {
    "id": "mez-pedal",
    "title": "Caucho pedal",
    "desc": "Compuesto para forros de pedal."
  },
  {
    "id": "mez-medida",
    "title": "Compuestos a medida",
    "desc": "Maquila según pieza o ficha. B2B Bogotá."
  }
],
    waMessage(p) {
      if (!p) return "Hola, quiero cotizar repuestos Vencedores Autopartes";
      var bits = [];
      if (p.ref) bits.push("Ref " + p.ref);
      if (p.title) bits.push(p.title);
      if (p.type) bits.push("tipo " + p.type);
      return "Hola, quiero cotizar: " + bits.join(" — ");
    },
    typeLabel(typeId) {
      var t = this.getType(typeId);
      return t ? t.name : typeId || "general";
    },
    waUrl(msg) {
      return "https://wa.me/" + this.waNumber + "?text=" + encodeURIComponent(msg || this.waMessage(null));
    },
    productFitsBrandLine(p, brandId, line) {
      if (!brandId) return true;
      var fit = (p.fits || []).find(function (f) { return f.brand === brandId; });
      if (!fit) return false;
      if (!line) return true;
      return fit.lines.indexOf(line) !== -1;
    },
    productsFor(brandId, line, typeId) {
      var self = this;
      return this.products.filter(function (p) {
        if (!self.productFitsBrandLine(p, brandId, line)) return false;
        if (typeId && p.type !== typeId) return false;
        return true;
      });
    },
    linesFor(brandId) {
      var b = this.getBrand(brandId);
      if (b && b.lines && b.lines.length) return b.lines;
      return this.brandLines[brandId] || [];
    },
    typesFor(brandId, line) {
      var set = {};
      this.productsFor(brandId, line, null).forEach(function (p) { set[p.type] = true; });
      return this.types.filter(function (t) { return set[t.id]; });
    },
    getProduct(id) {
      return this.products.find(function (p) { return p.id === id; });
    },
    getBrand(id) {
      return this.brands.find(function (b) { return b.id === id; });
    },
    getType(id) {
      return this.types.find(function (t) { return t.id === id; });
    }
  };
  global.VA_CATALOG = VA_CATALOG;
})(typeof window !== "undefined" ? window : globalThis);
