<template>
  <section class="details-section">
    <div class="container">
      <h2>Detalles de las Eras</h2>
      <div v-if="selectedEra" class="era-detail">
        <div class="detail-header">
          <h3>{{ selectedEra.title }}</h3>
          <p class="detail-period">{{ selectedEra.year }}</p>
        </div>
        <p class="detail-description">{{ selectedEra.description }}</p>
        <div class="detail-highlights">
          <h4>Características Clave:</h4>
          <ul>
            <li v-for="highlight in selectedEra.highlights" :key="highlight">
              {{ highlight }}
            </li>
          </ul>
        </div>
        <div class="detail-technologies">
          <h4>Tecnologías Principales:</h4>
          <div class="tech-tags">
            <span v-for="tech in selectedEra.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
      <div v-else class="no-selection">
        <p>Selecciona una era en la sección anterior para ver más detalles</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DetailsSection',
  props: {
    selectedEra: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
.details-section {
  background: white;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
  padding: 5rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

h2 {
  font-size: 2.8rem;
  margin-bottom: 3.5rem;
  text-align: center;
  color: #1e1e2e;
  font-weight: 700;
}

.detail-header {
  border-bottom: 3px solid #6366f1;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}

.detail-header h3 {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
  color: #1e1e2e;
  font-weight: 700;
}

.detail-period {
  color: #6366f1;
  font-weight: 600;
  font-size: 1.1rem;
}

.detail-description {
  font-size: 1.1rem;
  color: #1e293b;
  margin-bottom: 2.5rem;
  line-height: 1.8;
  background: linear-gradient(135deg, #f0f4ff 0%, #fdf2f8 100%);
  padding: 2rem;
  border-radius: 0.75rem;
  border-left: 5px solid #6366f1;
}

.detail-highlights,
.detail-technologies {
  margin-bottom: 2.5rem;
}

.detail-highlights h4,
.detail-technologies h4 {
  color: #1e1e2e;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.detail-highlights ul {
  list-style: none;
}

.detail-highlights li {
  padding: 0.75rem 0;
  padding-left: 2.5rem;
  color: #1e293b;
  position: relative;
  font-size: 1rem;
}

.detail-highlights li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: bold;
  font-size: 1.4rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tech-tag {
  background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 3rem;
  font-size: 0.95rem;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.3);
}

.no-selection {
  text-align: center;
  padding: 4rem;
  background: linear-gradient(135deg, #f0f4ff 0%, #fdf2f8 100%);
  border-radius: 1rem;
  color: #64748b;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .details-section {
    padding: 3rem 0;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  .detail-header h3 {
    font-size: 1.8rem;
  }

  .detail-description {
    padding: 1.5rem;
  }
}
</style>
