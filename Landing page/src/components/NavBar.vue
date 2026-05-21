<script setup lang="ts">
    import downloadIcon from '../../assets/downloadIcon.svg'
</script>

<template>
    <div id="container">
        <img :src="downloadIcon" alt="descargarCV" class="barItem">
        <h3 class="barItem">Sobre mi</h3>
        <h3 class="barItem">Proyectos</h3>
        <h3 class="barItem">Contacto</h3>
        <img src="" alt="seleccionarIdioma" class="barItem">
    </div>
</template>

<style scoped>

    #container{
        height: 60px;
        background-color: rgb(27, 44, 100);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .barItem{
        margin-right: 2%;
        color: rgb(228, 228, 228);
    }

    img{
        height: 100%;
    }
    
</style>

