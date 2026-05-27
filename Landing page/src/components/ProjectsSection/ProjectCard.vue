<script setup lang="ts">
defineProps<{
  titulo: string
  descripcion: string
  link: string
}>()
</script>

<template>
  <a :href="link" target="_blank">
    <div class="card">
      <h2 id="title">{{ titulo }}</h2>
      <p>{{ descripcion }}</p>
    </div>
  </a>
</template>

<style scoped>

a {
  text-decoration: none;
  color: aliceblue;
}

.card{
  height: 100%;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.466);

  transition: transform 0.2s ease-in-out, background-color 0.4s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
  background-color: rgb(126, 126, 126);
}

#title{
    text-align: center;
    color: aliceblue;
}

</style>