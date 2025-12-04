<template>
  <section class="eras-section">
    <div class="container">
      <h2>Las Eras del Software</h2>
      <div class="eras-grid">
        <EraCard 
          v-for="era in eras" 
          :key="era.id" 
          :era="era"
          @select="$emit('select-era', era)"
        />
      </div>
    </div>
  </section>
</template>

<script>
import EraCard from './EraCard.vue'

export default {
  name: 'ErasSection',
  components: {
    EraCard
  },
  props: {
    eras: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.eras-section {
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

.eras-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .eras-section {
    padding: 3rem 0;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  .eras-grid {
    grid-template-columns: 1fr;
  }
}
</style>
