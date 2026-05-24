<script setup lang="ts">
    import StackCard from './StackCard.vue';
</script>

<template>
    <h2>Mi stack</h2>
    <div class="stackCardsContainer">
        <StackCard
        TecnoIcono="../../../assets/images/javaIcon.png"
        TecnoAlt="Icono Java"
        TecnoNombre="Java">
        </StackCard>
        <StackCard
        TecnoIcono="../../../assets/images/angular.png"
        TecnoAlt="Icono Java"
        TecnoNombre="Angular">
        </StackCard>
        <StackCard
        TecnoIcono="../../../assets/images/gitIcon.png"
        TecnoAlt="Icono Git"
        TecnoNombre="Git">
        </StackCard>
        <StackCard
        TecnoIcono="../../../assets/images/htmlIcon.png"
        TecnoAlt="Icono HTML"
        TecnoNombre="HTML">
        </StackCard>
        <StackCard
        TecnoIcono="../../../assets/images/cssIcon.png"
        TecnoAlt="Icono CSS"
        TecnoNombre="CSS">
        </StackCard>
        <StackCard
        TecnoIcono="../../../assets/images/jsIcon.png"
        TecnoAlt="Icono Javascript"
        TecnoNombre="Javascript">
        </StackCard>
        <StackCard
        TecnoIcono="../../../assets/images/kotlinIcon.png"
        TecnoAlt="Icono Kotlin"
        TecnoNombre="Kotlin">
        </StackCard>
    </div>
</template>

<style scoped>

.stackCardsContainer{
    display: flex;
}

</style>