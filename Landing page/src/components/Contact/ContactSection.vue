<script setup lang="ts">
import ContactForm from './ContactForm.vue';
import ContactInfo from './ContactInfo.vue';
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

</script>

<template>
    <h2>{{ t('contactSection.title') }}</h2>
    <div id="container">
        <ContactForm></ContactForm>
    </div>   
</template>

<style scoped>
    #container{
        display: flex;
        justify-content: center;
    }
</style>