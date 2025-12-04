<template>
  <div class="app">
    <Header :activeSection="activeSection" @change-section="activeSection = $event" />

    <HeroSection v-if="activeSection === 'Inicio'" @navigate="activeSection = $event" />
    
    <ErasSection 
      v-if="activeSection === 'Eras'" 
      :eras="eras"
      @select-era="handleSelectEra"
    />
    
    <DetailsSection 
      v-if="activeSection === 'Detalles'" 
      :selectedEra="selectedEra"
    />
    
    <TimelineSection 
      v-if="activeSection === 'Timeline'" 
      :eras="eras"
    />
    
    <MilestonesSection 
      v-if="activeSection === 'Hitos'" 
      :milestones="milestones"
    />

    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import ErasSection from './components/ErasSection.vue'
import DetailsSection from './components/DetailsSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import MilestonesSection from './components/MilestonesSection.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    HeroSection,
    ErasSection,
    DetailsSection,
    TimelineSection,
    MilestonesSection,
    Footer
  },
  data() {
    return {
      activeSection: 'Inicio',
      selectedEra: null,
      eras: [
        {
          id: 1,
          title: 'Era de Mainframe (1950s-1960s)',
          year: '1950 - 1960',
          icon: '🖥️',
          summary: 'Los primeros sistemas computacionales',
          description: 'La era de mainframe marcó el comienzo de la computación moderna. Las computadoras ocupaban habitaciones completas y solo las grandes corporaciones y gobiernos podían permitirse usarlas. El software se escribía en lenguajes de bajo nivel como ensamblador, y el desarrollo era un proceso manual y tedioso.',
          highlights: [
            'Computadoras ocupaban habitaciones completas',
            'Lenguajes de programación primitivos',
            'Acceso limitado a usuarios privilegiados',
            'Costo extremadamente elevado',
            'Procesamiento por lotes (batch processing)'
          ],
          technologies: ['Ensamblador', 'FORTRAN', 'COBOL', 'Tarjetas Perforadas']
        },
        {
          id: 2,
          title: 'Era de Minicomputadoras (1970s)',
          year: '1970 - 1979',
          icon: '💾',
          summary: 'Democratización de la informática',
          description: 'Las minicomputadoras trajeron la computación a más lugares de trabajo. Aunque aún eran grandes y costosas, eran mucho más accesibles que los mainframes. Surgieron nuevos lenguajes como C y Unix, revolucionando la industria.',
          highlights: [
            'Computadoras del tamaño de refrigeradores',
            'Surgimiento de Unix',
            'Lenguaje C revolucionario',
            'Primeros sistemas de tiempo compartido',
            'Mayor acceso a programadores'
          ],
          technologies: ['C', 'Unix', 'Pascal', 'PDP-11', 'BASIC']
        },
        {
          id: 3,
          title: 'Era de Computadoras Personales (1980s)',
          year: '1980 - 1989',
          icon: '🖱️',
          summary: 'La revolución personal',
          description: 'Las computadoras personales llevaron la tecnología a los hogares. Apple II, IBM PC y Commodore 64 democratizaron el acceso a la computación. El software se volvió más accesible y surgieron aplicaciones prácticas para usuarios finales.',
          highlights: [
            'Computadoras para el hogar',
            'Surgimiento de interfaces gráficas',
            'Primeros sistemas operativos comerciales',
            'Software de productividad (word processors)',
            'Videojuegos como aplicación principal'
          ],
          technologies: ['MS-DOS', 'Apple II', 'IBM PC', 'C', 'BASIC']
        },
        {
          id: 4,
          title: 'Era de Internet (1990s)',
          year: '1990 - 1999',
          icon: '🌐',
          summary: 'Conexión global y web',
          description: 'El auge de Internet transformó fundamentalmente el desarrollo de software. La World Wide Web, HTML y JavaScript permitieron crear aplicaciones accesibles desde navegadores. El comercio electrónico y la comunicación digital revolucionaron los negocios.',
          highlights: [
            'Auge de Internet y WWW',
            'Surgimiento de navegadores web',
            'JavaScript transforma la web',
            'Primeras tiendas en línea',
            'Correo electrónico masivo',
            'Bases de datos en línea'
          ],
          technologies: ['HTML', 'JavaScript', 'CSS', 'PHP', 'Java', 'MySQL']
        },
        {
          id: 5,
          title: 'Era de Dispositivos Móviles (2000s-2010)',
          year: '2000 - 2010',
          icon: '📱',
          summary: 'Software en tu bolsillo',
          description: 'La llegada del iPhone en 2007 revolucionó la computación móvil. Aplicaciones nativas se convirtieron en la norma. El desarrollo de software ahora tenía que considerar pantallas táctiles, baterías limitadas y conectividad móvil.',
          highlights: [
            'Nacimiento del App Store',
            'Android abre el desarrollo móvil',
            'Aplicaciones nativas optimizadas',
            'Cloud computing se expande',
            'APIs RESTful se vuelven estándar',
            'Social media y redes sociales'
          ],
          technologies: ['Objective-C', 'Java (Android)', 'iOS SDK', 'REST APIs', 'Cloud Computing']
        },
        {
          id: 6,
          title: 'Era Moderna (2011-Presente)',
          year: '2011 - 2025',
          icon: '⚡',
          summary: 'Inteligencia, automatización y escalabilidad',
          description: 'La era moderna se caracteriza por la inteligencia artificial, machine learning, DevOps y arquitecturas en la nube. El software se ha vuelto más accesible con frameworks modernos, y la automatización es fundamental. Las PWAs y tecnologías progresivas permiten experiencias web similares a aplicaciones nativas.',
          highlights: [
            'Inteligencia Artificial y Machine Learning',
            'DevOps y automatización continua',
            'Arquitecturas serverless',
            'Aplicaciones Web Progresivas (PWA)',
            'Microservicios y contenedores',
            'Real-time collaboration tools',
            'Blockchain y criptografía'
          ],
          technologies: ['Python', 'JavaScript/TypeScript', 'React', 'Vue', 'Kubernetes', 'TensorFlow', 'Rust', 'Go']
        }
      ],
      milestones: [
        {
          id: 1,
          year: '1952',
          title: 'Primer Programa de Computadora',
          description: 'Grace Hopper ejecuta el primer programa compilado en la UNIVAC.'
        },
        {
          id: 2,
          year: '1968',
          title: 'Crisis del Software',
          description: 'Nace la ingeniería del software como respuesta a la crisis de desarrollo.'
        },
        {
          id: 3,
          year: '1972',
          title: 'C Programming Language',
          description: 'Dennis Ritchie publica el lenguaje C, revolucionando la programación.'
        },
        {
          id: 4,
          year: '1977',
          title: 'Apple II',
          description: 'Apple lanza el Apple II, primer computadora personal exitosa.'
        },
        {
          id: 5,
          year: '1991',
          title: 'World Wide Web',
          description: 'Tim Berners-Lee publica la WWW, transformando Internet.'
        },
        {
          id: 6,
          year: '1995',
          title: 'JavaScript Nace',
          description: 'Brendan Eich crea JavaScript en 10 días, revolucionando el desarrollo web.'
        },
        {
          id: 7,
          year: '2007',
          title: 'iPhone Lanzado',
          description: 'Steve Jobs presenta el iPhone, iniciando la era del software móvil.'
        },
        {
          id: 8,
          year: '2011',
          title: 'Node.js Auge',
          description: 'Node.js permite JavaScript en backend, unificando el desarrollo web.'
        },
        {
          id: 9,
          year: '2015',
          title: 'React Predomina',
          description: 'React se convierte en el framework frontend dominante.'
        },
        {
          id: 10,
          year: '2018',
          title: 'Surge de PWA',
          description: 'Las Aplicaciones Web Progresivas se vuelven viables y populares.'
        }
      ]
    }
  },
  methods: {
    handleSelectEra(era) {
      this.selectedEra = era;
      this.activeSection = 'Detalles';
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: #f8fafc;
  color: #1e293b;
  line-height: 1.6;
}

.app {
  min-height: 100vh;
  width: 100%;
  padding-bottom: 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  overflow-x: hidden;
  box-sizing: border-box;
}
</style>


