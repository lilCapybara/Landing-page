<script setup lang="ts">
  import AboutSection from './components/AboutSection.vue';
  import ContactSection from './components/Contact/ContactSection.vue';
  import Education from './components/Education.vue';
  import Front from './components/Front.vue';
  import LaboralXP from './components/LaboralXP.vue';
  import NavBar from './components/NavBar.vue';
  import TecnoStack from './components/TecnoStack/TecnoStack.vue';
  import Footer from './components/Footer.vue';
  import ProjectsSection from './components/ProjectsSection/ProjectsSection.vue';
</script>

<template>
  
  <Front></Front>
  <NavBar></NavBar>

  <div id="generalContainer">
    <div id="sobre-mi"><AboutSection></AboutSection></div>
    
    <div id="formacion"><Education></Education></div>
    
    <div id="experiencia"><LaboralXP></LaboralXP></div>
    
    <div id="stack"><TecnoStack ></TecnoStack></div>
    
    <div id="proyectos"><ProjectsSection></ProjectsSection></div>
    
    <div id="contacto"><ContactSection></ContactSection></div>
    
    <Footer></Footer>
  </div>
  
</template>

<style scoped>

  #generalContainer{
    margin-left: 2%;
  }

  
  
</style>
