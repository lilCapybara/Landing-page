<script setup lang="ts">
    import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<template>
    
    <div id="container">
        <a class="barItem" href="#sobre-mi">{{ t('nav.sobreMi') }}</a>
        <a class="barItem" href="#formacion">{{ t('nav.formacion') }}</a>
        <a class="barItem" href="#experiencia">{{ t('nav.experiencia') }}</a>
        <a class="barItem" href="#stack">{{ t('nav.stack') }}</a>
        <a class="barItem" href="#proyectos">{{ t('nav.proyectos') }}</a>
        <a class="barItem" href="#contacto">{{ t('nav.contacto') }}</a>
        <h3>  
            <a class="downloadBtn" href="../../public/Sebastian Ortega CV (ES).pdf" target="_blank">Ver CV</a>
        </h3>
    </div>   
</template>

<style scoped>

#container {
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.466);
    gap: 5%;
}

.barItem {
    color: rgb(228, 228, 228);
    cursor: pointer;
    border-bottom: 2px solid transparent; /* reserva el espacio para evitar "salto" */
    transition: border-color 0.2s ease;
}

.barItem:hover {
    border-bottom: 2px solid rgb(228, 228, 228);
}

.downloadBtn {
    color: rgb(228, 228, 228);
    border: 2px solid rgb(228, 228, 228);
    padding: 6px 16px;
    border-radius: 6px;
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;
    align-self: center;
    white-space: nowrap;
}

.downloadBtn:hover {
    background-color: rgb(228, 228, 228);
    color: #000;
}
</style>

