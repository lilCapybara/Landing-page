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
  import LanguagesSection from "./components/Languages/LanguagesSection.vue";
</script>

<template>
  
  <Front></Front>
  <NavBar></NavBar>

  <div id="generalContainer">
    <div id="sobre-mi"><AboutSection></AboutSection></div>
    
    <div id="edTrabajoContainer">
      <div id="formacion"><Education></Education></div>
      <div class="divider"></div>
      <div id="experiencia"><LaboralXP></LaboralXP></div>
    </div>
    
    <div id="idiomas"><LanguagesSection></LanguagesSection></div>
    
    <div id="stack"><TecnoStack ></TecnoStack></div>
    
    <div id="proyectos"><ProjectsSection></ProjectsSection></div>
    
    <div id="contacto"><ContactSection></ContactSection></div>
    
  </div>
  <Footer></Footer>
</template>

<style scoped>

  #generalContainer {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 40px;
    text-align: justify;
    justify-content: center;
}

 #edTrabajoContainer {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        gap: 2rem;
        align-items: start;
    }

    .divider {
        width: 1px;
        background-color: #ccc;
        align-self: stretch;
    }
 
#sobre-mi, #formacion, #experiencia, #idiomas, #stack, #proyectos, #contacto {
  scroll-margin-top: 65px;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}  
  
</style>
