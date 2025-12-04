# 📱 Historia del Software - PWA

Una Aplicación Web Progresiva (PWA) que cuenta la evolución del software desde los primeros mainframes hasta la era moderna de IA y cloud computing.

## 🚀 Características

- **6 Eras Principales**: Explora la historia del software desde 1950 hasta 2025
- **Interfaz Interactiva**: Navega entre diferentes secciones (Inicio, Eras, Detalles, Timeline, Hitos)
- **Timeline Visual**: Visualiza cronológicamente los eventos más importantes
- **Hitos Históricos**: Descubre los momentos clave que transformaron la industria
- **Progressive Web App**: 
  - Funciona sin conexión a Internet
  - Instalable en dispositivos móviles
  - Rápida y responsiva
  - Experiencia similar a una aplicación nativa

## 📋 Contenido

### Las 6 Eras del Software

1. **Era de Mainframe (1950s-1960s)** 🖥️
   - Primeros sistemas computacionales
   - Lenguajes de bajo nivel
   - Acceso limitado

2. **Era de Minicomputadoras (1970s)** 💾
   - Democratización de la informática
   - Surgimiento de Unix y C
   - Sistemas de tiempo compartido

3. **Era de Computadoras Personales (1980s)** 🖱️
   - Computadoras para el hogar
   - Interfaces gráficas
   - Revolución personal

4. **Era de Internet (1990s)** 🌐
   - Auge de la World Wide Web
   - JavaScript y navegadores
   - Comercio electrónico

5. **Era de Dispositivos Móviles (2000s-2010)** 📱
   - Revolución del iPhone
   - Aplicaciones nativas
   - Cloud computing

6. **Era Moderna (2011-Presente)** ⚡
   - Inteligencia Artificial y Machine Learning
   - DevOps y automatización
   - Aplicaciones Web Progresivas (PWA)

### 10 Hitos Históricos Incluidos

- Primer programa compilado (1952)
- Crisis del Software (1968)
- Lenguaje C (1972)
- Apple II (1977)
- World Wide Web (1991)
- JavaScript (1995)
- iPhone (2007)
- Node.js (2011)
- React (2015)
- PWAs (2018)

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Vue 3**: Framework progresivo
- **Vite**: Bundler moderno ultrarrápido
- **CSS3**: Estilos modernos con variables CSS

### PWA
- **Vite PWA Plugin**: Para generar Service Worker automáticamente
- **Web App Manifest**: Configuración de la aplicación web
- **Service Worker**: Soporte offline y caché inteligente

## 📦 Instalación y Uso

### Requisitos
- Node.js 20.19.0 o superior (o 22.12.0+)
- npm o yarn

### Pasos de instalación

1. **Clonar o descargar el proyecto**
```bash
cd am_landing
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

4. **Compilar para producción**
```bash
npm run build
```

5. **Previsualizar la compilación**
```bash
npm run preview
```

## 📱 Instalación como PWA

### En Chrome/Edge (Desktop)
1. Abre la aplicación en el navegador
2. Haz clic en el icono de instalación (arriba a la derecha)
3. Selecciona "Instalar"

### En Mobile (iOS)
1. Abre Safari
2. Toca el icono Compartir
3. Selecciona "Añadir a pantalla de inicio"

### En Mobile (Android)
1. Abre Chrome
2. Toca el menú (⋮)
3. Selecciona "Instalar aplicación"

## 🎨 Diseño y Estilos

- **Paleta de colores**:
  - Primario: Indigo (#6366f1)
  - Secundario: Pink (#ec4899)
  - Fondo: Slate light (#f8fafc)
  - Texto: Slate dark (#1e293b)

- **Características de diseño**:
  - Responsive design (mobile-first)
  - Gradientes modernos
  - Animaciones suaves
  - Accesibilidad mejorada

## 🌐 Funcionalidad Offline

Gracias al Service Worker, la aplicación:
- Se carga desde caché cuando no hay conexión
- Sincroniza datos cuando la conexión se restaura
- Proporciona una experiencia fluida incluso sin Internet

## 📊 Estructura del Proyecto

```
am_landing/
├── public/
│   ├── manifest.json       # Configuración PWA
│   ├── icon-192x192.png    # Icono pequeño
│   ├── icon-512x512.png    # Icono grande
│   └── favicon.ico         # Favicon
├── src/
│   ├── App.vue            # Componente principal
│   ├── main.js            # Punto de entrada
│   ├── assets/            # Estilos globales
│   └── components/        # Componentes reutilizables
├── index.html             # HTML principal
├── vite.config.js         # Configuración Vite + PWA
├── package.json           # Dependencias
└── README.md             # Este archivo
```

## 🔧 Configuración PWA

El archivo `vite.config.js` incluye la configuración completa de PWA:
- Manifest automático
- Service Worker generado automáticamente
- Caché inteligente con Workbox
- Icono y metadata para múltiples plataformas

## 🖼️ Generación de Iconos

Para generar los iconos PNG necesarios, puedes usar:

1. **PWA Asset Generator** (Recomendado)
   ```bash
   npm install -g pwa-asset-generator
   pwa-asset-generator ./icon.svg ./public --favicon
   ```

2. **Herramientas Online**:
   - https://www.favicon-generator.org/
   - https://www.pwa-asset-generator.com/
   - https://favicon.io/

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto y Soporte

Para reportar bugs o sugerir mejoras, por favor abre un issue en el repositorio.

---

**Nota**: Para una experiencia PWA completa en producción, asegúrate de:
- Usar HTTPS
- Generar los iconos PNG en los tamaños especificados
- Probar en diferentes navegadores y dispositivos
- Validar con herramientas como Lighthouse en Chrome DevTools

¡Disfruta explorando la historia del software! 🚀
