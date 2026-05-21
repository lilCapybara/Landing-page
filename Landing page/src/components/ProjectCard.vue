<script setup lang="ts">
defineProps<{
  titulo: string
  descripcion: string
  link: string
}>()
</script>

<template>
  <div class="card">
    <h2 id="title">{{ titulo }}</h2>
    <p>{{ descripcion }}</p>
    <a :href="link" target="_blank">Ver proyecto</a>
  </div>
</template>

<style scoped>
.card{
    border-color: black;
    margin-top: 2%;
    margin-bottom: 2%;
    margin-right: 2%;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
    border-radius: 10px;
    background-color: rgb(115, 179, 223);
}
#title{
    text-align: center;
}
</style>