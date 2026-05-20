<script setup lang="ts">
  import NavBar from './components/NavBar.vue';
  import ProjectCard from './components/ProjectCard.vue';
</script>

<template>
  <NavBar></NavBar>
  <div id="projectCardContainer">
    <ProjectCard 
      titulo="Mi portfolio" 
      descripcion="Proyecto 1"
      link="https://github.com/sebas/portfolio" 
    />
    <ProjectCard 
      titulo="Otro proyecto"
      descripcion="Proyecto 2" 
      link="https://github.com/sebas/otro" 
    />
  </div>
  
</template>

<style scoped>
  #projectCardContainer{
    display: flex;
  }
</style>
