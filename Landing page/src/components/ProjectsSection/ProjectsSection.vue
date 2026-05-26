<script setup lang="ts">
    import ProjectCard from './ProjectCard.vue';
</script>

<template>

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
</template>

<style scoped>
    #projectCardContainer{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10%;
}
</style>