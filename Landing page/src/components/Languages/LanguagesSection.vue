<script setup lang="ts">
    import LanguageCard from './LanguageCard.vue';
    
</script>

<template>
    <h2>Idiomas</h2>
    <div id="languagesContainer">
        <LanguageCard
        BanderaIcono="../../../assets/images/spainFlag.png"
        IdiomaNombre="Español"
        IdiomaNivel="Nativo"
        ></LanguageCard>
        <LanguageCard
        BanderaIcono="../../../assets/images/unitedKingdomFlag.png"
        IdiomaNombre="Ingles"
        IdiomaNivel="C1"
        ></LanguageCard>
        <LanguageCard
        BanderaIcono="../../../assets/images/germanyFlag.png"
        IdiomaNombre="Aleman"
        IdiomaNivel="A2"
        ></LanguageCard>
    </div>
    
</template>
<style scoped>
    #languagesContainer {
        justify-content: center;
        display: flex;
        gap: 10px
    }
</style>