<template>
  <div class="milestone-card">
    <div class="milestone-year">{{ milestone.year }}</div>
    <h3>{{ milestone.title }}</h3>
    <p>{{ milestone.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'MilestoneCard',
  props: {
    milestone: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.milestone-card {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border-top: 4px solid #6366f1;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.milestone-card::before {
  content: '';
  position: absolute;
  top: -100%;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(236, 72, 153, 0.05));
  transition: top 0.3s ease;
  z-index: 0;
}

.milestone-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 35px rgba(99, 102, 241, 0.15);
}

.milestone-card:hover::before {
  top: 0;
}

.milestone-year {
  color: #ec4899;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 0.75rem;
  position: relative;
  z-index: 1;
}

h3 {
  color: #1e1e2e;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
}

p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.7;
  position: relative;
  z-index: 1;
}

@media (max-width: 480px) {
  .milestone-card {
    padding: 1.5rem;
  }

  .milestone-year {
    font-size: 1.5rem;
  }
}
</style>
