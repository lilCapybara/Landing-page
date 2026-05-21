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
    border-color: black;
    margin-top: 2%;
    margin-bottom: 2%;
    margin-right: 2%;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
    border-radius: 10px;
    background-color: rgb(115, 179, 223);

    transition: transform 0.2s ease-in-out, background-color 0.4s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
  background-color: rgb(55, 87, 109);
}

#title{
    text-align: center;
    color: aliceblue;
}

</style>