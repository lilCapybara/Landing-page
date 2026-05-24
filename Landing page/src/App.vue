<script setup lang="ts">
  import AboutSection from './components/AboutSection.vue';
  import ContactSection from './components/Contact/ContactSection.vue';
  import Front from './components/Front.vue';
import LaboralXP from './components/LaboralXP.vue';
  import NavBar from './components/NavBar.vue';
  import ProjectCard from './components/ProjectCard.vue';
  import TecnoStack from './components/TecnoStack/TecnoStack.vue';
</script>

<template>
  
  <Front></Front>
  <NavBar></NavBar>

  <div id="generalContainer">
    <AboutSection></AboutSection>

    <LaboralXP></LaboralXP>

    <TecnoStack></TecnoStack>

    <h2>Proyectos</h2>
    <div id="projectCardContainer">
      <ProjectCard 
        titulo="Sitio web realizado en Angular"

        descripcion="Sitio web para venta de maquetas que contiene
        una lista de productos, un carrito de compra y una
        pagina de contacto."

        link="https://github.com/lilCapybara/Koda-CraftAngular.git" 
      />
      <ProjectCard 
        titulo="League of Legends API"

        descripcion="API con endpoints para operaciones CRUD,
        incluyendo ademas una autenticacion con usuario
        y contraseña y token JWT."

        link="https://github.com/workerCapybara/LeagueOfLegendsAPI" 
      />
      <ProjectCard 
        titulo="Browser de videojuegos para Android"

        descripcion="Aplicacion para Android que consume datos de la
        API RAWG para mostrar una lista de videojuegos." 

        link="https://github.com/workerCapybara/vgbrowser.git" 
      />
    </div>
    <ContactSection></ContactSection>
  </div>
  
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
    margin-bottom: 10%;
  }
  
</style>
