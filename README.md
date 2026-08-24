# SkizoDev90 - Portfolio

> Francisco M. Carrillo | Desarrollador Full-Stack & Técnico Informático

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=flat&logo=bootstrap&logoColor=white)

---

## Portfolio Web Personal

Sitio web estático con diseño dark y animaciones interactivas. Incluye presentación personal, proyectos destacados con carruseles de imágenes y lightbox para ver capturas en pantalla completa. Disponible en español, inglés y catalán.

### Estructura

```
.
├── index.html              # Página principal con fondo Vanta.NET
├── views/
│   ├── menu.html           # Navegación entre secciones
│   ├── about.html          # Sobre mí + descarga de CV
│   ├── proyect.html        # Showcase de proyectos con carruseles
│   └── contact.html        # Contacto y redes sociales
├── css/
│   ├── layout.css          # Estilos compartidos + fondo animado
│   ├── proyects.css        # Estilos del carrusel y tarjetas de proyecto
│   └── about.css           # Estilos de la sección "Sobre mí"
├── js/
│   ├── theme.js            # Tema claro / oscuro
│   ├── animations.js       # Animaciones de entrada
│   ├── particles.js        # Partículas al hacer clic
│   ├── vanta.js            # Configuración del fondo animado Vanta.NET
│   ├── proyects.js         # Carruseles Swiper + lightbox PhotoSwipe
│   └── i18n.js             # Motor de traducciones ES / EN / CA
├── json/
│   └── translations.json   # Textos traducidos ES / EN / CA
├── img/                    # Capturas de proyectos y foto de perfil
└── files/
    └── CV_Francisco-Carrillo_IT.pdf
```

### Tecnologías usadas en el sitio

- **Vanta.NET** - Fondo animado interactivo con Three.js
- **Bootstrap 5.3** - Layout responsive
- **Swiper 11** - Carruseles de imágenes
- **PhotoSwipe 5** - Lightbox para ver capturas a pantalla completa
- **Lordicon** - Iconos animados
- **Google Fonts (Sekuya)** - Tipografía personalizada

---

## Proyectos Destacados

### Gestión de Guardias (TFG)

Sistema completo para la gestión de guardias y ausencias del profesorado. Incluye panel de admin con analíticas, calendario interactivo, notificaciones por email y app móvil para profesores.

**Stack:** PHP, MySQL, Bootstrap, jQuery, FullCalendar, DataTables, PHPMailer

### Proyecto MedioAmbiental THB Hotels

Aplicación web para análisis medioambiental en hoteles con IA. CRUD de prompts, gestión de facturas (agua, gas, luz), informes generados por inteligencia artificial.

**Stack:** Laravel 12, PHP, MySQL, Bootstrap, jQuery, FullCalendar, DataTables

### Asociaciondle

Juego web al estilo Wordle para dar a conocer asociaciones humanitarias. Panel de admin para gestión completa y modo juego con pistas, rankings y información de ONGs.

**Stack:** PHP, MySQL, HTML5, CSS3, JavaScript

---
