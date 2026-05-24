<script setup lang="ts">
defineProps<{
  TecnoIcono: string
  TecnoAlt: string
  TecnoNombre: string
}>()
</script>

<template>
  <div class="card">
    <div class="iconContainer">
      <img :src="TecnoIcono" :alt="TecnoAlt">
    </div>
    <h3>{{ TecnoNombre }}</h3>
  </div>
  
</template>

<style scoped>

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2%;

  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.iconContainer {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  width: 60%;
  height: 60%;
  object-fit: contain;
}

h3{
  margin-top: 7px;
}

</style>