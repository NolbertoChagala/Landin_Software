<template>
  <div class="era-card" @click="$emit('select')">
    <div class="era-icon">{{ era.icon }}</div>
    <h3>{{ era.title }}</h3>
    <p class="era-year">{{ era.year }}</p>
    <p class="era-summary">{{ era.summary }}</p>
  </div>
</template>

<script>
export default {
  name: 'EraCard',
  props: {
    era: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.era-card {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.era-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #6366f1, #ec4899);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.era-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 35px rgba(99, 102, 241, 0.15);
  border-color: #6366f1;
}

.era-card:hover::before {
  transform: scaleX(1);
}

.era-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  display: inline-block;
}

h3 {
  color: #1e1e2e;
  margin-bottom: 0.75rem;
  font-size: 1.4rem;
  font-weight: 700;
}

.era-year {
  color: #6366f1;
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.era-summary {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 480px) {
  .era-card {
    padding: 1.5rem;
  }

  h3 {
    font-size: 1.1rem;
  }
}
</style>
