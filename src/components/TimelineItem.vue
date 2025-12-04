<template>
  <div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <h4>{{ era.title }}</h4>
      <p class="timeline-year">{{ era.year }}</p>
      <p>{{ era.summary }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimelineItem',
  props: {
    era: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.timeline-item {
  display: flex;
  margin-bottom: 4rem;
  position: relative;
}

.timeline-item:nth-child(odd) {
  flex-direction: row-reverse;
}

.timeline-marker {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
  background: white;
  border: 4px solid #6366f1;
  border-radius: 50%;
  top: 0;
  z-index: 10;
  box-shadow: 0 0 0 8px rgba(99, 102, 241, 0.1);
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-marker {
  border-color: #ec4899;
  box-shadow: 0 0 0 12px rgba(236, 72, 153, 0.15);
}

.timeline-content {
  width: 48%;
  padding: 2rem;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-right: auto;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-left: auto;
}

.timeline-content:hover {
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.15);
  transform: translateY(-3px);
}

h4 {
  color: #1e1e2e;
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
  font-weight: 700;
}

.timeline-year {
  color: #6366f1;
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
}

p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .timeline-item {
    flex-direction: column;
  }

  .timeline-item:nth-child(odd) {
    flex-direction: column;
  }

  .timeline-content {
    width: 100%;
    margin-left: 50px !important;
    margin-right: 0 !important;
  }
}
</style>
