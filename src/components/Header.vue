<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">📱 Historia del Software</h1>
      <nav class="nav">
        <button 
          v-for="section in sections" 
          :key="section" 
          @click="$emit('change-section', section)"
          :class="['nav-btn', { active: activeSection === section }]"
        >
          {{ section }}
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    activeSection: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      sections: ['Inicio', 'Eras', 'Detalles', 'Timeline', 'Hitos']
    }
  }
}
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #1e1e2e 0%, #6366f1 100%);
  color: white;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.nav {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.nav-btn {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 2px solid transparent;
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.nav-btn.active {
  background: #ec4899;
  border-color: white;
  box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

@media (max-width: 768px) {
  .header .container {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .nav {
    width: 100%;
    justify-content: flex-start;
    gap: 0.25rem;
  }

  .nav-btn {
    padding: 0.5rem 0.9rem;
    font-size: 0.85rem;
  }

  .logo {
    font-size: 1.2rem;
  }
}
</style>
