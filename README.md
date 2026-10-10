# ⚡ NEXUS PC & TECH LAB - Landing Page Profesional (Tema Claro)

Sitio web corporativo y responsivo para un local comercial de **venta y servicio técnico especializado de computadoras, laptops y armado de estaciones de trabajo**.

Diseñado bajo un enfoque corporativo y moderno (**Tema Claro / Corporate Tech**), con tipografía nítida (*Outfit* y *Plus Jakarta Sans*), iconos vectoriales SVG en lugar de emojis, paleta sobria de azul cobalto y pizarra, y herramientas dinámicas orientadas a la conversión de clientes.

---

## 📁 Estructura del Proyecto (Archivos Modulares)

El proyecto cuenta con una estructura limpia de **10 archivos**:

```text
Landig_page/
│
├── index.html                  # Estructura semántica HTML5, metadatos SEO e iconos vectoriales SVG
│
├── css/
│   ├── variables.css           # Tokens de diseño en tema claro, paleta azul/pizarra y sombras de elevación
│   ├── styles.css              # Layout base, navbar, hero, secciones institucionales y responsive design
│   └── components.css          # Tarjetas de servicio, cotizador, línea de tiempo, catálogo y modales
│
├── js/
│   ├── data.js                 # Catálogo de hardware, especificaciones, matriz de costos y órdenes demo
│   ├── calculator.js           # Lógica del cotizador interactivo con cálculo en tiempo real y WhatsApp
│   └── main.js                 # Búsqueda, filtros de tienda, visor modal, rastreo de órdenes y FAQ
│
├── assets/
│   └── img/
│       ├── hero.jpg            # Fotografía en alta resolución de laboratorio y ensamble de equipos
│       └── store.jpg           # Fotografía en alta resolución del showroom y tienda física
│
└── README.md                   # Documentación técnica del proyecto
```

---

## 🚀 Características Principales

1. **Paleta Profesional en Tema Claro**:
   - Fondos limpios en blanco y gris suave (`#ffffff`, `#f8fafc`, `#f1f5f9`).
   - Jerarquía visual con texto en azul pizarra profundo (`#0f172a`, `#475569`).
   - Acentos en azul cobalto técnico (`#1e40af`, `#2563eb`).
   - Sombras suaves de elevación natural y bordes definidos.

2. **Iconografía Vectorial SVG (Sin Emojis)**:
   - Sustitución de todos los emoticones por iconos SVG vectoriales de estilo profesional (Feather / Lucide).
   - Iconos integrados en la barra de navegación, tarjetas de servicio, opciones de equipos, fallas del cotizador, catálogo, testimonios, acordeón FAQ y botones de contacto.

3. **Cotizador Técnico Express en Tiempo Real**:
   - Selección interactiva de categoría de equipo (Laptop, PC de Escritorio, PC Gamer, All-in-One).
   - Selección de síntomas comunes (Lentitud, Sobrecalentamiento, No enciende, Pantalla rota, Líquidos, Upgrade).
   - Selección de prioridad de servicio (Estándar o Express).
   - Estimación instantánea de costo y botón para transferir el requerimiento a WhatsApp con mensaje formal pre-redactado.

4. **Rastreo Digital de Órdenes de Servicio**:
   - Formulario de consulta de avance de reparación.
   - Órdenes precargadas de prueba: `NX-4821`, `NX-3950` y `NX-5100`.
   - Visualización por fases: *Recepción → Diagnóstico → Reparación → Control de Calidad → Listo para Entrega*.

5. **Catálogo de Equipos y Hardware**:
   - Filtros de categorías (*Todos, PCs Gamer, Portátiles, Componentes, Monitores y Periféricos*).
   - Barra de búsqueda interactiva en tiempo real.
   - Ventana modal con ficha técnica detallada y botón para consultar disponibilidad.

6. **Acordeón Interactivo de Preguntas Frecuentes**:
   - Despliegue suave con vector animado.

7. **Botón Flotante de WhatsApp**:
   - Acceso inmediato con el icono vectorial oficial.

---

## 💻 Visualización y Servidor Local

El servidor de pruebas local se ejecuta en:
👉 **`http://localhost:4321`**

O abriendo directamente el archivo [index.html](file:///c:/Users/Usuario/Desktop/Landig_page/index.html) en cualquier navegador moderno.


## Rastreo de órdenes

La sección de rastreo permite consultar el estado de una orden
mediante la información de seguimiento disponible en el sistema.
