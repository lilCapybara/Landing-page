<script setup lang="ts">
import LanguageCard from './Languages/LanguageCard.vue';

</script>

<template>
    <h2>Sobre mi</h2>
    <div id="generalContainer">
        <div id="textContainer">
            <p>
                Empleado de comercio y estudiante de la
                Tecnicatura Universitaria en Desarrollo de
                Aplicaciones Informaticas (TUDAI) en la UNICEN 
                (Universidad Nacional del Centro de la provincia 
                de Buenos Aires).
            </p>
            <p>
                Me considero una persona que presta especial
                atencion al detalle y busca mantener su entorno
                de trabajo lo mas ordenado posible.
            </p> 
            <p>
                Siempre estoy interesado en adquirir nuevos
                conocimientos, lo que me facilita el adaptarme a
                los desafios que se me presenten.
            </p>
        </div>
        <div id="imageContainer">
            <img src="/images/me.jpg" alt="Sebastián Ortega">
            <div id="ubicacion">
                <LanguageCard
                BanderaIcono="/images/argentinaFlag.png"
                IdiomaNombre="Tandil, Buenos Aires"
                IdiomaNivel="Argentina">
                </LanguageCard>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #generalContainer {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    #textContainer {
        flex: 1;
    }

    #imageContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        flex-shrink: 0;
    }

    #imageContainer img:first-child {
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 50%;
    }

    #ubicacion {
        display: flex;
        align-items: center;
        gap: 0.1rem;
        transform: scale(0.8);
    }

    #ubicacion img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 50%;
    }

</style>