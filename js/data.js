/* ==========================================================================
   NEXUS PC & TECH LAB - Data Store
   ========================================================================== */

const PRODUCTS_DATA = [
  {
    id: 1,
    title: "PC Gamer Titan Nexus RTX 4070",
    category: "gamer",
    badge: "Top Ventas",
    badgeClass: "badge-top",
    specs: ["Intel Core i7 14700F", "32GB DDR5 6000MHz", "RTX 4070 Super 12GB", "1TB SSD NVMe Gen4", "Refrigeración Líquida 240mm"],
    price: 1399,
    oldPrice: 1550,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=700&q=80",
    description: "Diseñada para gaming competitivo en 1440p/4K, renderizado de video y streaming en ultra. Ensamblada con gestión de cables profesional y test de estrés térmico 24 horas."
  },
  {
    id: 2,
    title: "Laptop ASUS ROG Zephyrus G16",
    category: "laptops",
    badge: "Gamer Pro",
    badgeClass: "badge-gamer",
    specs: ["Intel Core Ultra 9", "16-core CPU", "RTX 4080 12GB", "32GB LPDDR5X", "Pantalla OLED 2.5K 240Hz", "1TB PCIe 4.0 SSD"],
    price: 2199,
    oldPrice: 2399,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=700&q=80",
    description: "Potencia gráfica sin límites en un chasis de aluminio ultrafino. Pantalla OLED ROG Nebula para creadores de contenido y gamers de élite."
  },
  {
    id: 3,
    title: "Workstation Pro AMD Threadripper",
    category: "gamer",
    badge: "Arquitectura & 3D",
    badgeClass: "badge-pro",
    specs: ["Ryzen 9 7950X", "64GB DDR5 ECC", "RTX 4090 24GB", "2TB NVMe Samsung 990 Pro", "Fuente 1000W 80+ Gold"],
    price: 2890,
    oldPrice: 3100,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=700&q=80",
    description: "Estación de trabajo especializada para Unreal Engine, Blender, AutoCAD y cálculo científico intensivo con estabilidad de grado militar."
  },
  {
    id: 4,
    title: "Laptop Lenovo ThinkPad E14 Gen 5",
    category: "laptops",
    badge: "Oficina & Negocios",
    badgeClass: "badge-top",
    specs: ["AMD Ryzen 7 7730U", "16GB RAM DDR4", "512GB SSD NVMe", "Pantalla IPS 14' FHD Antirreflejo", "Batería 10 Horas"],
    price: 699,
    oldPrice: 799,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=700&q=80",
    description: "Rendimiento confiable para ejecutivos, programadores y estudiantes. Construcción resistente a impactos y teclado ergonómico de alta precisión."
  },
  {
    id: 5,
    title: "Tarjeta Gráfica ASUS TUF RTX 4070 Ti Super",
    category: "componentes",
    badge: "Hardware Nuevo",
    badgeClass: "badge-gamer",
    specs: ["16GB GDDR6X", "DLSS 3.5 & Frame Gen", "Triple Fan Axial-tech", "Dual BIOS", "Conectores Reforzados"],
    price: 849,
    oldPrice: 920,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=700&q=80",
    description: "Gráfica ideal para máxima fidelidad visual y Ray Tracing activo. 3 años de garantía oficial con soporte directo de fabricante."
  },
  {
    id: 6,
    title: "SSD Kingston KC3000 2TB PCIe 4.0 NVMe",
    category: "componentes",
    badge: "Alta Velocidad",
    badgeClass: "badge-top",
    specs: ["Lectura 7000 MB/s", "Escritura 7000 MB/s", "Disipador de Grafeno", "MTBF 2M Horas", "Garantía 5 años"],
    price: 145,
    oldPrice: 175,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=700&q=80",
    description: "Carga tus juegos y software en milisegundos. Compatible con PCs, laptops gaming y PlayStation 5."
  },
  {
    id: 7,
    title: "Monitor Gamer Samsung Odyssey G7 28' 4K",
    category: "perifericos",
    badge: "144Hz IPS",
    badgeClass: "badge-pro",
    specs: ["Resolución 3840 x 2160", "144Hz Tasa Refresco", "1ms GTG", "G-Sync Compatible", "HDR400"],
    price: 520,
    oldPrice: 599,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=700&q=80",
    description: "Claridad 4K cinematográfica con tiempo de respuesta ultrarrápido para una experiencia visual inmersiva sin ghosting ni tearing."
  },
  {
    id: 8,
    title: "Kit Teclado Mecánico RGB + Mouse 26K DPI",
    category: "perifericos",
    badge: "Combo Pro",
    badgeClass: "badge-gamer",
    specs: ["Switches Hot-Swap Lineales", "Conexión Inalámbrica 2.4GHz", "Iluminación RGB por tecla", "Sensor Óptico PixArt"],
    price: 0,
    oldPrice: 149,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=700&q=80",
    description: "Combo ergonómico diseñado para largas sesiones de juego y trabajo de oficina con latencia casi nula."
  }
];

const REPAIR_DATA = {
  devices: {
    laptop: { name: "Laptop / Portátil", baseCost: 25 },
    desktop: { name: "PC de Escritorio", baseCost: 20 },
    gamer: { name: "PC Gamer / Workstation", baseCost: 30 },
    allinone: { name: "All-in-One (Todo en Uno)", baseCost: 28 }
  },
  issues: {
    slow: { label: "Lenta / Virus / Formateo", cost: 20, time: "3 - 5 horas", desc: "Limpieza de malware, optimización del SO, respaldo de datos y reinstalación con drivers actualizados." },
    thermal: { label: "Sobrecalentamiento / Ruidos", cost: 25, time: "2 - 4 horas", desc: "Mantenimiento preventivo integral, limpieza de ventiladores y sustitución por pasta térmica de alta conductividad." },
    power: { label: "No Enciende / Cortocircuito", cost: 45, time: "24 - 48 horas", desc: "Revisión en banco de pruebas con osciloscopio y cámara térmica para detección y reemplazo de componentes electrónicos dañados." },
    screen: { label: "Pantalla Rota / Sin Video", cost: 35, time: "24 horas", desc: "Diagnóstico de GPU, flex de video o reemplazo directo de panel LED/IPS con repuestos grado A+." },
    liquid: { label: "Derrame de Líquidos", cost: 50, time: "24 - 48 horas", desc: "Desensamble completo urgente, limpieza por baño de ultrasonido de placa madre y secado químico anti-corrosión." },
    upgrade: { label: "Mejora de Hardware (SSD/RAM)", cost: 15, time: "1 - 2 horas", desc: "Instalación de unidades de alta velocidad, clonación bit a bit del sistema y test de compatibilidad." }
  },
  urgencies: {
    standard: { label: "Estándar (24 - 48h)", multiplier: 1.0 },
    express: { label: "Express Prioritario (Mismo Día)", multiplier: 1.35 }
  }
};

const MOCK_ORDERS = {
  "NX-4821": {
    client: "Carlos Mendoza",
    device: "Laptop HP Omen 16",
    issue: "Mantenimiento térmico & Cambio pasta térmica",
    stage: 4, // 1 to 5
    stageLabel: "Control de Calidad & Pruebas de Estrés",
    technician: "Ing. Roberto M.",
    date: "Hoy, 14:30 hs",
    statusBadge: "En Fase Final"
  },
  "NX-3950": {
    client: "Andrea Gómez",
    device: "PC Gamer Ryzen 7 / RTX 3070",
    issue: "Reparación de Fuente de Poder & Placa Madre",
    stage: 3,
    stageLabel: "En Taller de Microsoldadura",
    technician: "Téc. Samuel V.",
    date: "Ayer, 10:15 hs",
    statusBadge: "En Proceso"
  },
  "NX-5100": {
    client: "Javier Paredes",
    device: "MacBook Pro M1",
    issue: "Reemplazo de Teclado y Batería",
    stage: 5,
    stageLabel: "Listo para Entrega en Tienda",
    technician: "Ing. Laura P.",
    date: "Hace 2 días",
    statusBadge: "Listo"
  }
};
