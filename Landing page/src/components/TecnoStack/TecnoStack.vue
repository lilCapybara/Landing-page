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
    </div>
</template>

<style scoped>

.stackCardsContainer{
    display: flex;
}

</style>