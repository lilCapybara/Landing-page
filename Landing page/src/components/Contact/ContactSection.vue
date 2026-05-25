<script setup lang="ts">
import ContactForm from './ContactForm.vue';
import ContactInfo from './ContactInfo.vue';

</script>

<template>
    <h2>Contacto</h2>
    <div id="container">
        <ContactInfo></ContactInfo>
        <ContactForm></ContactForm>
    </div>   
</template>

<style scoped>
    #container{
        display: flex;
        gap: 15%;
    }
</style>