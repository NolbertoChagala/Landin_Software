<template>
  <section class="timeline-section">
    <div class="container">
      <h2>Timeline Interactivo</h2>
      <div class="timeline">
        <TimelineItem 
          v-for="(era, index) in eras" 
          :key="era.id"
          :era="era"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TimelineItem from './TimelineItem.vue'

export default {
  name: 'TimelineSection',
  components: {
    TimelineItem
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
.timeline-section {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
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

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg, #6366f1, #ec4899);
}

@media (max-width: 768px) {
  .timeline-section {
    padding: 3rem 0;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  .timeline::before {
    left: 12px;
  }
}
</style>
