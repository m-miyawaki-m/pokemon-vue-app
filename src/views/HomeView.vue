<template>
  <div class="fullscreen-center">
    <div class="carousel">
      <div
        class="carousel-item"
        v-for="(item, index) in items"
        :key="index"
        :style="getStyle(index)"
      >
        <v-card class="pa-4 text-center" width="150" height="200" elevation="8">
          <v-card-title>{{ item.title }}</v-card-title>
        </v-card>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

const items = ref([
  { title: 'Card 1' },
  { title: 'Card 2' },
  { title: 'Card 3' },
  { title: 'Card 4' },
  { title: 'Card 5' },
])

const getStyle = (index) => {
  const total = items.value.length
  const angle = (360 / total) * index
  return {
    transform: `rotateY(${angle}deg) translateZ(400px)`,
    position: 'absolute',
  }
}
</script>


<style scoped>
.fullscreen-center {
  position: fixed;
  inset: 0; /* = top: 0; right: 0; bottom: 0; left: 0 */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5; /* 任意 */
  perspective: 800px;
  overflow: hidden;
}

.carousel {
  position: relative;
  width: 0px;
  height: 300px;
  transform-style: preserve-3d;
  animation: spin 20s linear infinite;
}

.carousel-item {
  top: 0;
  left: 0;
  transform-origin: center center;
  transform-style: preserve-3d;
}

@keyframes spin {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>
