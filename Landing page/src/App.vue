<script setup lang="ts">
  import AboutSection from './components/AboutSection.vue';
import ContactSection from './components/Contact/ContactSection.vue';
import Front from './components/Front.vue';
  import NavBar from './components/NavBar.vue';
  import ProjectCard from './components/ProjectCard.vue';
import TecnoStack from './components/TecnoStack/TecnoStack.vue';
</script>

<template>
  <Front></Front>
  <NavBar></NavBar>

  <div id="generalContainer">
    <AboutSection></AboutSection>

    <TecnoStack></TecnoStack>

    <h2>Proyectos</h2>
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
      <ProjectCard 
        titulo="Otro proyecto"
        descripcion="Proyecto 2" 
        link="https://github.com/sebas/otro" 
      />
      <ProjectCard 
        titulo="Otro proyecto"
        descripcion="Proyecto 2" 
        link="https://github.com/sebas/otro" 
      />
    </div>
  </div>
  
  <ContactSection></ContactSection>
  
</template>

<style scoped>

  #generalContainer{
    margin-left: 2%;
  }

  #projectCardContainer{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    align-items: stretch;
  }
  
  
</style>
