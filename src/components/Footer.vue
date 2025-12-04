<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="container">
        <div class="footer-wrapper">
          <!-- Sección 1: Branding -->
          <div class="footer-section">
            <h3 class="footer-title">📱 Historia del Software</h3>
            <p class="footer-description">
              Un viaje interactivo a través de la evolución del desarrollo de software, desde los primeros mainframes hasta la era de la IA.
            </p>
            <!-- <div class="pwa-badge" v-if="isPWA">
              <span>✅</span> Esta es una PWA
            </div> -->
          </div>

          <!-- Sección 2: Enlaces rápidos -->
          <div class="footer-section">
            <h4 class="footer-subtitle">Secciones</h4>
            <ul class="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#eras">Las Eras</a></li>
              <li><a href="#timeline">Timeline</a></li>
              <li><a href="#hitos">Hitos</a></li>
            </ul>
          </div>

          <!-- Sección 3: Tecnología -->
          <div class="footer-section">
            <h4 class="footer-subtitle">Construido con</h4>
            <ul class="footer-links">
              <li><a href="https://vuejs.org" target="_blank">Vue 3</a></li>
              <li><a href="https://vitejs.dev" target="_blank">Vite</a></li>
              <li><a href="https://web.dev/progressive-web-apps/" target="_blank">PWA</a></li>
              <li><a href="https://web.dev/service-workers/" target="_blank">Service Workers</a></li>
            </ul>
          </div>

          <!-- Sección 4: Social y contacto -->
          <div class="footer-section">
            <h4 class="footer-subtitle">Conecta</h4>
            <div class="social-links">
              <a href="#" class="social-icon" title="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" class="social-icon" title="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
                </svg>
              </a>
              <a href="#" class="social-icon" title="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="footer-divider"></div>

        <!-- Bottom Footer -->
        <div class="footer-bottom">
          <div class="footer-copyright">
            <p>&copy; 2025 Historia del Software. Todos los derechos reservados.</p>
          </div>
          <div class="footer-legal">
            <a href="#privacy">Privacidad</a>
            <a href="#terms">Términos</a>
            <a href="#contact">Contacto</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      isPWA: false
    }
  },
  mounted() {
    this.isPWA = window.matchMedia('(display-mode: standalone)').matches || 
                 navigator.standalone === true;
    
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        if (registrations.length > 0) {
          this.isPWA = true;
        }
      });
    }
  }
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1e1e2e 0%, #2d2d3d 100%);
  color: white;
  margin-top: 0; /* attach directly to previous section */
  border-top: 2px solid #6366f1;
  width: 100%;
}

.footer-content {
  padding: 3rem 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.footer-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-title {
  font-size: 1rem;
  font-weight: 700;
  color: white;
  margin: 0;
}

.footer-description {
  color: #cbd5e1;
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0;
}

.footer-subtitle {
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-links a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #6366f1;
}

.social-links {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 0.375rem;
  background: rgba(99, 102, 241, 0.1);
  color: #cbd5e1;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.social-icon:hover {
  background: #6366f1;
  color: white;
  transform: translateY(-2px);
}

.social-icon svg {
  width: 18px;
  height: 18px;
}

.pwa-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid #10b981;
  border-radius: 0.375rem;
  color: #10b981;
  font-weight: 600;
  font-size: 0.75rem;
}

.footer-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, #6366f1, transparent);
  margin: 0.75rem 0;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  gap: 2rem;
}

.footer-copyright p {
  color: #cbd5e1;
  font-size: 0.85rem;
  margin: 0;
}

.footer-legal {
  display: flex;
  gap: 1.5rem;
}

.footer-legal a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.3s ease;
}

.footer-legal a:hover {
  color: #6366f1;
}

.footer-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .footer-content {
    padding: 2rem 1rem 1rem 1rem;
  }

  .footer-wrapper {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .footer-legal {
    flex-direction: column;
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .footer-title {
    font-size: 0.95rem;
  }

  .footer-subtitle {
    font-size: 0.85rem;
  }

  .footer-description {
    font-size: 0.8rem;
  }

  .social-icon {
    width: 32px;
    height: 32px;
  }

  .social-links {
    justify-content: center;
  }
}
</style>
