<template>
  <section class="milestones-section">
    <div class="container">
      <h2>Hitos Importantes</h2>
      <div class="milestones-grid">
        <MilestoneCard 
          v-for="milestone in milestones" 
          :key="milestone.id"
          :milestone="milestone" 
        />
      </div>
    </div>
  </section>
</template>

<script>
import MilestoneCard from './MilestoneCard.vue'

export default {
  name: 'MilestonesSection',
  components: {
    MilestoneCard
  },
  props: {
    milestones: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.milestones-section {
  padding: 2rem 0;
  margin-bottom: 0; /* ensure no extra space before footer */
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

.milestones-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .milestones-section {
    padding: 1.5rem 0;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  .milestones-grid {
    grid-template-columns: 1fr;
  }
}
</style>
