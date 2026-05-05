// ============================================================================
// HS CODE KNOWLEDGE BASE — China & Indonesia
// ============================================================================
// Structure:
//   - The first 6 digits are the HS (Harmonized System) anchor — globally shared
//   - Digits 7-8 in Indonesia follow AHTN (ASEAN Harmonised Tariff Nomenclature)
//     extended into BTKI (Buku Tarif Kepabeanan Indonesia), typically 8 digits
//   - China uses 8-10 digit national extensions on top of the 6-digit HS
//
// Tariff rates: MFN (Most Favoured Nation) applied rates as commonly published.
// These are illustrative; real-time rates require the official tariff books
// (China Customs Tariff Implementation Plan 2025 / BTKI 2022 + amendments).
//
// Sources used for compilation (referenced in the UI):
//   [1] WCO HS 2022 nomenclature
//   [2] China Customs Tariff Implementation Plan (海关进出口税则)
//   [3] Indonesia BTKI 2022 (Permenkeu 26/2022)
//   [4] ASEAN Harmonised Tariff Nomenclature (AHTN 2022)
//   [5] WTO Tariff Download Facility
// ============================================================================

const HS_DATABASE = [
  // ---- TEXTILES & APPAREL ----
  {
    hs6: "610910",
    description: "T-shirts, singlets and other vests, knitted or crocheted, of cotton",
    keywords: ["t-shirt", "tshirt", "tee shirt", "singlet", "vest", "cotton shirt", "kaos", "kaos katun", "棉T恤", "T恤", "汗衫"],
    china: {
      code: "6109100010",
      description: "棉制针织T恤衫、汗衫及其他背心 (Knitted cotton T-shirts and singlets)",
      mfn: "16%",
      vat: "13%",
      notes: "Subject to textile labelling requirements"
    },
    indonesia: {
      code: "6109.10.00",
      description: "Kaos oblong (T-shirt), singlet dan kaos kutang lainnya, dirajut atau dikait, dari kapas",
      mfn: "25%",
      vat: "11% (PPN)",
      notes: "Import permit (LS) may apply; SNI certification for some sub-categories"
    }
  },
  {
    hs6: "620342",
    description: "Men's or boys' trousers, breeches and shorts, of cotton (not knitted)",
    keywords: ["men trousers", "men's pants", "cotton trousers", "shorts", "breeches", "celana pria", "celana katun", "男裤", "棉裤"],
    china: {
      code: "6203420010",
      description: "男式棉制长裤、马裤及短裤",
      mfn: "16%",
      vat: "13%"
    },
    indonesia: {
      code: "6203.42.00",
      description: "Celana panjang, celana pendek dan celana setengah lutut, untuk pria atau anak laki-laki, dari kapas",
      mfn: "25%",
      vat: "11% (PPN)"
    }
  },
  {
    hs6: "640299",
    description: "Footwear with outer soles and uppers of rubber or plastics, other",
    keywords: ["footwear", "shoes", "sneakers", "sepatu", "sepatu karet", "鞋", "塑料鞋", "橡胶鞋"],
    china: {
      code: "6402990000",
      description: "其他橡胶或塑料制外底及鞋面的鞋靴",
      mfn: "10%",
      vat: "13%"
    },
    indonesia: {
      code: "6402.99.90",
      description: "Alas kaki lainnya dengan sol luar dan bagian atas dari karet atau plastik",
      mfn: "25%",
      vat: "11% (PPN)",
      notes: "SNI mandatory for certain footwear categories"
    }
  },

  // ---- ELECTRONICS ----
  {
    hs6: "851712",
    description: "Telephones for cellular networks or other wireless networks (smartphones)",
    keywords: ["smartphone", "mobile phone", "cell phone", "iphone", "android phone", "telepon seluler", "ponsel", "hp", "智能手机", "手机", "移动电话"],
    china: {
      code: "8517130000",
      description: "智能手机 (Smartphones)",
      mfn: "0%",
      vat: "13%",
      notes: "ITA product — 0% MFN"
    },
    indonesia: {
      code: "8517.13.00",
      description: "Telepon pintar (smartphone)",
      mfn: "0%",
      vat: "11% (PPN)",
      notes: "TKDN (local content) requirement: minimum 35% for 4G/5G devices; IMEI registration mandatory"
    }
  },
  {
    hs6: "847130",
    description: "Portable automatic data processing machines, weighing not more than 10 kg (laptops)",
    keywords: ["laptop", "notebook", "portable computer", "macbook", "komputer jinjing", "笔记本电脑", "便携计算机"],
    china: {
      code: "8471300000",
      description: "便携式自动数据处理设备，重量不超过10千克",
      mfn: "0%",
      vat: "13%",
      notes: "ITA product"
    },
    indonesia: {
      code: "8471.30.20",
      description: "Komputer jinjing portabel beratnya tidak lebih dari 10 kg",
      mfn: "0%",
      vat: "11% (PPN)",
      notes: "SNI compliance required"
    }
  },
  {
    hs6: "852872",
    description: "Reception apparatus for television, colour, other (LED/LCD TVs)",
    keywords: ["television", "tv", "led tv", "lcd tv", "smart tv", "televisi", "电视", "彩色电视机", "液晶电视"],
    china: {
      code: "8528720000",
      description: "彩色电视接收机",
      mfn: "30%",
      vat: "13%"
    },
    indonesia: {
      code: "8528.72.92",
      description: "Pesawat penerima televisi warna lainnya",
      mfn: "10%",
      vat: "11% (PPN)",
      notes: "SNI mandatory; TKDN for 4K and above"
    }
  },
  {
    hs6: "850440",
    description: "Static converters (power adapters, UPS, inverters)",
    keywords: ["power adapter", "charger", "ups", "inverter", "static converter", "adaptor", "充电器", "适配器", "逆变器"],
    china: {
      code: "8504400000",
      description: "静止式变流器",
      mfn: "5%",
      vat: "13%"
    },
    indonesia: {
      code: "8504.40.90",
      description: "Pengubah statis lainnya",
      mfn: "5%",
      vat: "11% (PPN)"
    }
  },

  // ---- MACHINERY ----
  {
    hs6: "841830",
    description: "Freezers of the chest type, capacity not exceeding 800 litres",
    keywords: ["freezer", "chest freezer", "cold storage", "lemari pendingin", "卧式冷柜", "冷冻柜"],
    china: {
      code: "8418300000",
      description: "卧式冷藏箱，容量不超过800升",
      mfn: "10%",
      vat: "13%"
    },
    indonesia: {
      code: "8418.30.10",
      description: "Lemari pembeku tipe peti, kapasitas tidak melebihi 800 liter",
      mfn: "5%",
      vat: "11% (PPN)",
      notes: "SNI mandatory; energy efficiency labelling required"
    }
  },
  {
    hs6: "842111",
    description: "Cream separators",
    keywords: ["cream separator", "centrifuge", "milk separator", "pemisah krim", "奶油分离机", "离心分离机"],
    china: {
      code: "8421110000",
      description: "奶油分离机",
      mfn: "8%",
      vat: "13%"
    },
    indonesia: {
      code: "8421.11.00",
      description: "Mesin pemisah krim",
      mfn: "5%",
      vat: "11% (PPN)"
    }
  },

  // ---- CHEMICALS & PHARMACEUTICALS ----
  {
    hs6: "300490",
    description: "Medicaments consisting of mixed or unmixed products for therapeutic uses, in measured doses, other",
    keywords: ["medicine", "medicament", "pharmaceutical", "drug", "tablet", "capsule", "obat", "obat-obatan", "药品", "成药", "药物"],
    china: {
      code: "3004900000",
      description: "其他配药用的混合或未混合产品制成的药品",
      mfn: "4%",
      vat: "13%",
      notes: "NMPA registration required"
    },
    indonesia: {
      code: "3004.90.99",
      description: "Obat-obatan lainnya",
      mfn: "5%",
      vat: "11% (PPN)",
      notes: "BPOM registration mandatory; halal certification for certain categories"
    }
  },
  {
    hs6: "330499",
    description: "Beauty or make-up preparations and preparations for the care of the skin, other",
    keywords: ["cosmetics", "skincare", "moisturizer", "lotion", "make-up", "skin care", "kosmetik", "perawatan kulit", "化妆品", "护肤品", "面霜"],
    china: {
      code: "3304990000",
      description: "其他美容品或化妆品及护肤品",
      mfn: "1%",
      vat: "13%",
      notes: "NMPA filing required for non-special cosmetics"
    },
    indonesia: {
      code: "3304.99.90",
      description: "Sediaan rias lainnya dan sediaan untuk perawatan kulit lainnya",
      mfn: "10%",
      vat: "11% (PPN)",
      notes: "BPOM notification mandatory; halal certification phase-in"
    }
  },

  // ---- FOOD & AGRICULTURE ----
  {
    hs6: "090111",
    description: "Coffee, not roasted, not decaffeinated",
    keywords: ["coffee beans", "green coffee", "raw coffee", "kopi", "kopi mentah", "biji kopi", "咖啡豆", "未烘焙咖啡"],
    china: {
      code: "0901110000",
      description: "未焙炒、未浸除咖啡因的咖啡",
      mfn: "8%",
      vat: "9%"
    },
    indonesia: {
      code: "0901.11.10",
      description: "Kopi tidak digongseng, tidak dihilangkan kafeinnya, Arabika",
      mfn: "5%",
      vat: "11% (PPN)",
      notes: "Phytosanitary certificate required"
    }
  },
  {
    hs6: "151110",
    description: "Crude palm oil",
    keywords: ["palm oil", "crude palm oil", "cpo", "minyak sawit", "minyak kelapa sawit", "棕榈油", "毛棕榈油"],
    china: {
      code: "1511100000",
      description: "棕榈油毛油",
      mfn: "9%",
      vat: "9%"
    },
    indonesia: {
      code: "1511.10.00",
      description: "Minyak kelapa sawit mentah",
      mfn: "0%",
      vat: "11% (PPN)",
      notes: "Export levy applies; ISPO certification"
    }
  },
  {
    hs6: "180310",
    description: "Cocoa paste, not defatted",
    keywords: ["cocoa paste", "cocoa mass", "chocolate liquor", "pasta kakao", "可可浆", "可可膏"],
    china: {
      code: "1803100000",
      description: "未脱脂的可可酱",
      mfn: "10%",
      vat: "13%"
    },
    indonesia: {
      code: "1803.10.00",
      description: "Pasta kakao, tidak dihilangkan lemaknya",
      mfn: "5%",
      vat: "11% (PPN)"
    }
  },

  // ---- AUTOMOTIVE ----
  {
    hs6: "870321",
    description: "Motor cars with spark-ignition engine, cylinder capacity not exceeding 1,000 cc",
    keywords: ["car", "passenger vehicle", "small car", "compact car", "mobil", "mobil kecil", "汽车", "小排量汽车", "小轿车"],
    china: {
      code: "8703211090",
      description: "排气量不超过1000毫升的轿车",
      mfn: "15%",
      vat: "13%",
      notes: "Consumption tax applies based on engine size"
    },
    indonesia: {
      code: "8703.21.29",
      description: "Kendaraan bermotor lainnya, kapasitas silinder tidak melebihi 1.000 cc",
      mfn: "50%",
      vat: "11% (PPN)",
      notes: "PPnBM (luxury tax) 15-40% depending on emissions; TKDN considerations"
    }
  },
  {
    hs6: "870880",
    description: "Suspension systems and parts thereof for motor vehicles",
    keywords: ["suspension", "shock absorber", "strut", "car suspension", "suspensi", "peredam kejut", "悬挂系统", "减震器"],
    china: {
      code: "8708800000",
      description: "机动车辆悬挂系统及其零件",
      mfn: "6%",
      vat: "13%"
    },
    indonesia: {
      code: "8708.80.90",
      description: "Sistem suspensi dan bagiannya untuk kendaraan bermotor",
      mfn: "10%",
      vat: "11% (PPN)"
    }
  },

  // ---- METALS & MINERALS ----
  {
    hs6: "720839",
    description: "Flat-rolled products of iron or non-alloy steel, not in coils, hot-rolled, thickness less than 3mm",
    keywords: ["hot rolled steel", "steel sheet", "iron sheet", "flat steel", "baja canai panas", "热轧钢", "钢板"],
    china: {
      code: "7208390000",
      description: "厚度小于3毫米的非合金钢热轧扁平材",
      mfn: "3%",
      vat: "13%"
    },
    indonesia: {
      code: "7208.39.00",
      description: "Produk canai lantaian dari besi atau baja bukan paduan, tidak dalam gulungan, dicanai panas",
      mfn: "5%",
      vat: "11% (PPN)",
      notes: "Anti-dumping duties apply for some origins; SNI mandatory"
    }
  },
  {
    hs6: "740311",
    description: "Refined copper cathodes and sections of cathodes",
    keywords: ["copper cathode", "refined copper", "copper", "tembaga", "katoda tembaga", "电解铜", "精炼铜", "阴极铜"],
    china: {
      code: "7403110000",
      description: "电解精炼铜阴极及阴极型材",
      mfn: "0%",
      vat: "13%"
    },
    indonesia: {
      code: "7403.11.00",
      description: "Katoda dan bagian katoda dari tembaga halus",
      mfn: "0%",
      vat: "11% (PPN)"
    }
  },

  // ---- PLASTICS ----
  {
    hs6: "392321",
    description: "Sacks and bags of polymers of ethylene",
    keywords: ["plastic bags", "polyethylene bags", "pe bags", "kantong plastik", "kantung plastik", "聚乙烯袋", "塑料袋"],
    china: {
      code: "3923210000",
      description: "乙烯聚合物制的包装袋及小袋",
      mfn: "10%",
      vat: "13%"
    },
    indonesia: {
      code: "3923.21.99",
      description: "Karung dan kantong dari polimer etilena lainnya",
      mfn: "15%",
      vat: "11% (PPN)"
    }
  },

  // ---- TOYS & SPORTING GOODS ----
  {
    hs6: "950300",
    description: "Tricycles, scooters, dolls, toys, puzzles and other amusement articles",
    keywords: ["toys", "doll", "puzzle", "tricycle", "scooter", "mainan", "boneka", "玩具", "娃娃", "拼图"],
    china: {
      code: "9503009000",
      description: "其他玩具、缩小尺寸的全套模型及类似娱乐用模型",
      mfn: "0%",
      vat: "13%",
      notes: "CCC mandatory for certain electrical toys"
    },
    indonesia: {
      code: "9503.00.99",
      description: "Mainan lainnya",
      mfn: "10%",
      vat: "11% (PPN)",
      notes: "SNI mandatory for many toy categories (SNI 8124)"
    }
  },

  // ---- FURNITURE ----
  {
    hs6: "940360",
    description: "Other wooden furniture",
    keywords: ["wooden furniture", "wood furniture", "table", "chair", "cabinet", "furnitur kayu", "perabot kayu", "木家具", "木制家具"],
    china: {
      code: "9403600000",
      description: "其他木家具",
      mfn: "0%",
      vat: "13%"
    },
    indonesia: {
      code: "9403.60.90",
      description: "Furnitur kayu lainnya",
      mfn: "20%",
      vat: "11% (PPN)",
      notes: "V-Legal certificate for export; SVLK system"
    }
  },

  // ---- RUBBER ----
  {
    hs6: "400122",
    description: "Technically specified natural rubber (TSNR)",
    keywords: ["natural rubber", "tsnr", "rubber", "karet alam", "karet", "天然橡胶", "标准胶"],
    china: {
      code: "4001220000",
      description: "技术分类天然橡胶",
      mfn: "20%",
      vat: "13%"
    },
    indonesia: {
      code: "4001.22.00",
      description: "Karet alam yang dispesifikasikan secara teknis (TSNR)",
      mfn: "0%",
      vat: "11% (PPN)"
    }
  },

  // ============================================================================
  // ENERGY & MINERAL FUELS — chapter 27 (highest-value CN-ID trade flow)
  // ============================================================================
  {
    hs6: "270111",
    description: "Anthracite coal, whether or not pulverised, but not agglomerated",
    keywords: ["coal", "anthracite", "anthracite coal", "hard coal", "batubara", "batubara antrasit", "batubara keras", "煤", "无烟煤"],
    china: {
      code: "2701110000",
      description: "无烟煤，未制成型",
      mfn: "3%",
      vat: "13%",
      notes: "Import quota and licensing under coal supply policy"
    },
    indonesia: {
      code: "2701.11.00",
      description: "Antrasit, dihancurkan atau tidak dihancurkan, tetapi tidak diaglomerasi",
      mfn: "0%",
      vat: "11% (PPN)",
      notes: "DMO (Domestic Market Obligation) policy applies to Indonesian producers; export royalty"
    }
  },
  {
    hs6: "270112",
    description: "Bituminous coal, whether or not pulverised, but not agglomerated",
    keywords: ["coal", "bituminous coal", "thermal coal", "steam coal", "coking coal", "batubara", "batubara bituminous", "batubara termal", "煤", "烟煤", "炼焦煤"],
    china: {
      code: "2701120000",
      description: "烟煤，未制成型",
      mfn: "3%",
      vat: "13%",
      notes: "Most common coal import category from Indonesia; subject to coal import licensing"
    },
    indonesia: {
      code: "2701.12.10",
      description: "Batubara bituminous, untuk pembuatan kokas (coking coal)",
      mfn: "0%",
      vat: "11% (PPN)",
      notes: "Indonesia's #1 export to China by volume; HBA reference price applies; DMO 25% for power"
    }
  },
  {
    hs6: "270119",
    description: "Other coal (sub-bituminous, lignite-derived), whether or not pulverised",
    keywords: ["coal", "sub-bituminous coal", "other coal", "low rank coal", "batubara", "batubara sub-bituminous", "煤", "其他煤", "次烟煤"],
    china: {
      code: "2701190000",
      description: "其他煤",
      mfn: "5%",
      vat: "13%"
    },
    indonesia: {
      code: "2701.19.00",
      description: "Batubara lainnya",
      mfn: "0%",
      vat: "11% (PPN)"
    }
  },
  {
    hs6: "270200",
    description: "Lignite, whether or not agglomerated, excluding jet",
    keywords: ["lignite", "brown coal", "batubara muda", "lignit", "褐煤"],
    china: {
      code: "2702100000",
      description: "褐煤，不论是否制成型",
      mfn: "0%",
      vat: "13%"
    },
    indonesia: {
      code: "2702.10.00",
      description: "Lignit, dihancurkan atau tidak, tetapi tidak diaglomerasi",
      mfn: "0%",
      vat: "11% (PPN)"
    }
  },
  {
    hs6: "270900",
    description: "Petroleum oils and oils obtained from bituminous minerals, crude",
    keywords: ["crude oil", "petroleum", "crude petroleum", "minyak mentah", "minyak bumi", "原油", "石油"],
    china: {
      code: "2709000000",
      description: "石油原油及从沥青矿物提取的原油",
      mfn: "0%",
      vat: "9%",
      notes: "Strategic commodity; managed via state-owned importers"
    },
    indonesia: {
      code: "2709.00.10",
      description: "Minyak mentah dari minyak bumi",
      mfn: "0%",
      vat: "11% (PPN)"
    }
  },
  {
    hs6: "271019",
    description: "Petroleum oils, refined, other (diesel, fuel oil, lubricants)",
    keywords: ["diesel", "gasoil", "fuel oil", "lubricant", "refined petroleum", "minyak diesel", "minyak pelumas", "柴油", "燃料油", "润滑油"],
    china: {
      code: "2710199900",
      description: "其他石油和从沥青矿物提取的油（不包括原油）",
      mfn: "6%",
      vat: "13%",
      notes: "Consumption tax applies based on product type"
    },
    indonesia: {
      code: "2710.19.83",
      description: "Minyak bahan bakar lainnya",
      mfn: "5%",
      vat: "11% (PPN)",
      notes: "BBM (fuel) regulations under MEMR; subsidies for certain grades"
    }
  },
  {
    hs6: "271111",
    description: "Liquefied natural gas (LNG)",
    keywords: ["lng", "liquefied natural gas", "natural gas", "gas alam cair", "液化天然气", "天然气"],
    china: {
      code: "2711110000",
      description: "液化天然气",
      mfn: "0%",
      vat: "9%",
      notes: "Strategic energy import"
    },
    indonesia: {
      code: "2711.11.00",
      description: "Gas alam, dicairkan",
      mfn: "0%",
      vat: "11% (PPN)",
      notes: "Indonesia is a major LNG exporter (Bontang, Tangguh)"
    }
  },
  {
    hs6: "271112",
    description: "Liquefied propane (LPG)",
    keywords: ["lpg", "propane", "liquefied propane", "elpiji", "gas propana", "丙烷", "液化石油气"],
    china: {
      code: "2711120000",
      description: "液化丙烷",
      mfn: "1%",
      vat: "13%"
    },
    indonesia: {
      code: "2711.12.00",
      description: "Propana, dicairkan",
      mfn: "0%",
      vat: "11% (PPN)",
      notes: "Subsidized LPG (3kg) regulated separately"
    }
  },

  // ============================================================================
  // ORES & SLAGS — chapter 26 (Indonesia → China nickel/bauxite is huge)
  // ============================================================================
  {
    hs6: "260111",
    description: "Iron ore and concentrates, non-agglomerated",
    keywords: ["iron ore", "iron concentrate", "bijih besi", "konsentrat besi", "铁矿石", "铁精矿"],
    china: {
      code: "2601110000",
      description: "未烧结的铁矿砂及其精矿",
      mfn: "0%",
      vat: "13%"
    },
    indonesia: {
      code: "2601.11.00",
      description: "Bijih besi dan konsentratnya, tidak diaglomerasi",
      mfn: "0%",
      vat: "11% (PPN)"
    }
  },
  {
    hs6: "260400",
    description: "Nickel ores and concentrates",
    keywords: ["nickel ore", "nickel concentrate", "laterite", "bijih nikel", "konsentrat nikel", "镍矿", "镍矿石", "红土镍矿"],
    china: {
      code: "2604000000",
      description: "镍矿砂及其精矿",
      mfn: "0%",
      vat: "13%",
      notes: "Critical battery-supply mineral; major China import need"
    },
    indonesia: {
      code: "2604.00.00",
      description: "Bijih nikel dan konsentratnya",
      mfn: "0%",
      vat: "11% (PPN)",
      notes: "EXPORT BAN since Jan 2020 — Indonesia prohibits raw nickel ore export to force downstream processing (smelter requirement)"
    }
  },
  {
    hs6: "260600",
    description: "Aluminium ores and concentrates (bauxite)",
    keywords: ["bauxite", "aluminium ore", "aluminum ore", "bijih bauksit", "bauksit", "铝矿", "铝土矿"],
    china: {
      code: "2606000000",
      description: "铝矿砂及其精矿",
      mfn: "0%",
      vat: "13%"
    },
    indonesia: {
      code: "2606.00.00",
      description: "Bijih aluminium (bauksit) dan konsentratnya",
      mfn: "0%",
      vat: "11% (PPN)",
      notes: "Raw bauxite EXPORT BAN since June 2023; only processed alumina/aluminium permitted"
    }
  },
  {
    hs6: "260300",
    description: "Copper ores and concentrates",
    keywords: ["copper ore", "copper concentrate", "bijih tembaga", "konsentrat tembaga", "铜矿", "铜精矿"],
    china: {
      code: "2603000000",
      description: "铜矿砂及其精矿",
      mfn: "0%",
      vat: "13%"
    },
    indonesia: {
      code: "2603.00.00",
      description: "Bijih tembaga dan konsentratnya",
      mfn: "0%",
      vat: "11% (PPN)",
      notes: "Export limited; downstream processing requirement under Mining Law (Freeport, Amman Mineral)"
    }
  },
  {
    hs6: "261610",
    description: "Silver ores and concentrates",
    keywords: ["silver ore", "silver concentrate", "bijih perak", "银矿", "银精矿"],
    china: {
      code: "2616100000",
      description: "银矿砂及其精矿",
      mfn: "0%",
      vat: "13%"
    },
    indonesia: {
      code: "2616.10.00",
      description: "Bijih perak dan konsentratnya",
      mfn: "0%",
      vat: "11% (PPN)"
    }
  },

  // ============================================================================
  // PROCESSED METALS — chapter 72/74/75/76 (downstream nickel/steel)
  // ============================================================================
  {
    hs6: "720260",
    description: "Ferro-nickel",
    keywords: ["ferro-nickel", "ferronickel", "fenickel", "fe-ni", "镍铁", "费罗镍"],
    china: {
      code: "7202600000",
      description: "镍铁",
      mfn: "1%",
      vat: "13%",
      notes: "Major Indonesia → China stainless-steel feedstock"
    },
    indonesia: {
      code: "7202.60.00",
      description: "Fero-nikel",
      mfn: "0%",
      vat: "11% (PPN)",
      notes: "Indonesia is world's #1 ferronickel exporter (Morowali, Weda Bay smelters)"
    }
  },
  {
    hs6: "750120",
    description: "Nickel oxide sinters and other intermediate products of nickel metallurgy",
    keywords: ["nickel oxide sinter", "nickel pig iron", "npi", "sinter nikel", "镍氧化物烧结", "镍生铁"],
    china: {
      code: "7501200000",
      description: "氧化镍烧结物及镍冶炼的其他中间产品",
      mfn: "1%",
      vat: "13%"
    },
    indonesia: {
      code: "7501.20.00",
      description: "Sinter nikel oksida dan produk antara metalurgi nikel lainnya",
      mfn: "0%",
      vat: "11% (PPN)"
    }
  },
  {
    hs6: "281820",
    description: "Aluminium oxide (alumina), other than artificial corundum",
    keywords: ["alumina", "aluminium oxide", "aluminum oxide", "alumina kalsinasi", "氧化铝"],
    china: {
      code: "2818200000",
      description: "氧化铝（人造刚玉除外）",
      mfn: "8%",
      vat: "13%"
    },
    indonesia: {
      code: "2818.20.00",
      description: "Aluminium oksida, selain korundum buatan",
      mfn: "0%",
      vat: "11% (PPN)"
    }
  },

  // ============================================================================
  // PALM-OIL DERIVATIVES — chapter 15 (Indonesia is world #1 exporter)
  // ============================================================================
  {
    hs6: "151190",
    description: "Palm oil and its fractions, refined (RBD palm oil, palm olein)",
    keywords: ["palm oil refined", "rbd palm oil", "palm olein", "palm stearin", "minyak sawit olahan", "minyak goreng sawit", "棕榈油精炼", "精炼棕榈油"],
    china: {
      code: "1511909000",
      description: "其他棕榈油及其分离品（精炼）",
      mfn: "9%",
      vat: "9%"
    },
    indonesia: {
      code: "1511.90.92",
      description: "RBD palm olein dalam kemasan dengan berat bersih 25 kg atau kurang",
      mfn: "0%",
      vat: "11% (PPN)",
      notes: "Pungutan Ekspor (Export Levy) and BK (Export Duty) apply; CPO Fund"
    }
  },
  {
    hs6: "151321",
    description: "Crude palm kernel oil",
    keywords: ["palm kernel oil", "crude pko", "minyak inti sawit", "minyak kelapa sawit mentah", "棕榈仁油", "毛棕榈仁油"],
    china: {
      code: "1513210000",
      description: "棕榈仁油及巴巴苏棕榈油毛油",
      mfn: "9%",
      vat: "9%"
    },
    indonesia: {
      code: "1513.21.00",
      description: "Minyak inti kelapa sawit dan minyak babassu, mentah",
      mfn: "0%",
      vat: "11% (PPN)"
    }
  },

  // ============================================================================
  // SEAFOOD — chapter 03 (significant ID → CN trade)
  // ============================================================================
  {
    hs6: "030617",
    description: "Other shrimps and prawns, frozen",
    keywords: ["shrimp", "prawn", "frozen shrimp", "udang beku", "udang", "冷冻虾", "虾", "对虾"],
    china: {
      code: "0306170000",
      description: "冷冻的其他虾",
      mfn: "5%",
      vat: "9%"
    },
    indonesia: {
      code: "0306.17.00",
      description: "Udang dan udang galah lainnya, beku",
      mfn: "5%",
      vat: "11% (PPN)",
      notes: "Health certificate required; Indonesia is a major shrimp exporter (vannamei)"
    }
  },
  {
    hs6: "030487",
    description: "Frozen tuna fillets (Thunnus species, skipjack)",
    keywords: ["tuna fillet", "frozen tuna", "skipjack", "filet tuna", "tuna beku", "金枪鱼片", "冷冻金枪鱼"],
    china: {
      code: "0304870000",
      description: "冷冻金枪鱼鱼片",
      mfn: "10%",
      vat: "9%"
    },
    indonesia: {
      code: "0304.87.00",
      description: "Daging fillet tuna, beku",
      mfn: "5%",
      vat: "11% (PPN)"
    }
  },

  // ============================================================================
  // CHEMICALS & POLYMERS — chapters 28-39 (high-value CN → ID flows)
  // ============================================================================
  {
    hs6: "390110",
    description: "Polyethylene, low-density (LDPE / LLDPE), in primary forms",
    keywords: ["polyethylene", "ldpe", "lldpe", "low density polyethylene", "polietilena", "聚乙烯", "低密度聚乙烯"],
    china: {
      code: "3901100090",
      description: "其他比重小于0.94的聚乙烯，初级形状",
      mfn: "6.5%",
      vat: "13%"
    },
    indonesia: {
      code: "3901.10.92",
      description: "Polietilena dengan berat jenis kurang dari 0,94, dalam bentuk primer",
      mfn: "10%",
      vat: "11% (PPN)",
      notes: "Anti-dumping investigation history for some origins"
    }
  },
  {
    hs6: "390210",
    description: "Polypropylene, in primary forms",
    keywords: ["polypropylene", "pp resin", "polipropilena", "polypropylene resin", "聚丙烯"],
    china: {
      code: "3902100090",
      description: "其他初级形状的聚丙烯",
      mfn: "6.5%",
      vat: "13%"
    },
    indonesia: {
      code: "3902.10.40",
      description: "Polipropilena, dalam bentuk primer",
      mfn: "10%",
      vat: "11% (PPN)"
    }
  },
  {
    hs6: "310221",
    description: "Ammonium sulphate (fertilizer)",
    keywords: ["ammonium sulphate", "ammonium sulfate", "as fertilizer", "amonium sulfat", "pupuk za", "硫酸铵"],
    china: {
      code: "3102210000",
      description: "硫酸铵",
      mfn: "1%",
      vat: "9%"
    },
    indonesia: {
      code: "3102.21.00",
      description: "Amonium sulfat",
      mfn: "0%",
      vat: "11% (PPN)",
      notes: "Subsidized fertilizer regulations apply"
    }
  },
  {
    hs6: "310210",
    description: "Urea, whether or not in aqueous solution",
    keywords: ["urea", "urea fertilizer", "pupuk urea", "尿素", "尿素肥料"],
    china: {
      code: "3102100090",
      description: "其他尿素",
      mfn: "1%",
      vat: "9%",
      notes: "Export quota system; affects global pricing"
    },
    indonesia: {
      code: "3102.10.00",
      description: "Urea, dalam larutan air atau tidak",
      mfn: "0%",
      vat: "11% (PPN)",
      notes: "Indonesia self-sufficient (Pupuk Indonesia group); HET subsidized"
    }
  },

  // ============================================================================
  // AUTO BATTERIES & EV COMPONENTS — chapter 85 (China → Indonesia growth)
  // ============================================================================
  {
    hs6: "850760",
    description: "Lithium-ion accumulators (batteries)",
    keywords: ["lithium battery", "li-ion battery", "ev battery", "baterai litium", "baterai lithium", "锂离子电池", "锂电池", "动力电池"],
    china: {
      code: "8507600090",
      description: "锂离子蓄电池",
      mfn: "10%",
      vat: "13%",
      notes: "Critical export; CCC mandatory"
    },
    indonesia: {
      code: "8507.60.10",
      description: "Akumulator lithium-ion",
      mfn: "5%",
      vat: "11% (PPN)",
      notes: "TKDN considerations for EV adoption; SNI mandatory"
    }
  },
  {
    hs6: "854140",
    description: "Photosensitive semiconductor devices including photovoltaic cells (solar panels)",
    keywords: ["solar panel", "photovoltaic", "pv module", "solar cell", "panel surya", "sel surya", "太阳能板", "光伏组件", "光伏电池"],
    china: {
      code: "8541430000",
      description: "光伏电池组件",
      mfn: "0%",
      vat: "13%",
      notes: "Major export category; ITA product"
    },
    indonesia: {
      code: "8541.43.00",
      description: "Sel fotovoltaik dirakit dalam modul atau dibuat menjadi panel",
      mfn: "5%",
      vat: "11% (PPN)",
      notes: "TKDN required for state-funded solar projects"
    }
  },

  // ============================================================================
  // PAPER & PULP — chapter 47-48
  // ============================================================================
  {
    hs6: "470321",
    description: "Chemical wood pulp, soda or sulphate, semi-bleached or bleached, coniferous",
    keywords: ["wood pulp", "kraft pulp", "bleached pulp", "bubur kayu", "pulp kayu kimia", "纸浆", "化学木浆"],
    china: {
      code: "4703210000",
      description: "针叶木的半漂白或漂白化学木浆",
      mfn: "0%",
      vat: "13%"
    },
    indonesia: {
      code: "4703.21.00",
      description: "Pulp kayu kimia, soda atau sulfat, dikelantang sebagian atau dikelantang, dari kayu konifera",
      mfn: "0%",
      vat: "11% (PPN)"
    }
  },

  // ============================================================================
  // SPICES — chapter 09 (Indonesian specialty exports)
  // ============================================================================
  {
    hs6: "090411",
    description: "Pepper of the genus Piper, neither crushed nor ground",
    keywords: ["pepper", "black pepper", "white pepper", "lada", "lada hitam", "merica", "胡椒", "黑胡椒"],
    china: {
      code: "0904110000",
      description: "未碾磨或粉碎的胡椒",
      mfn: "20%",
      vat: "9%"
    },
    indonesia: {
      code: "0904.11.10",
      description: "Lada, hitam, tidak dihancurkan atau ditumbuk",
      mfn: "5%",
      vat: "11% (PPN)"
    }
  },
];

// ASEAN-China FTA (ACFTA) preferential rates — most goods qualify for 0% under ACFTA
// when accompanied by Form E certificate of origin. This is a critical practical note.
const ACFTA_NOTE = "Under ACFTA (ASEAN-China FTA), most products qualify for 0% preferential tariff with Form E Certificate of Origin. Always check ACFTA eligibility — the MFN rate shown is the non-preferential fallback.";

// Export for use in app.js (browser global)
if (typeof window !== 'undefined') {
  window.HS_DATABASE = HS_DATABASE;
  window.ACFTA_NOTE = ACFTA_NOTE;
}
