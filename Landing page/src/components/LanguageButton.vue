<script setup lang="ts">
    import { useI18n } from 'vue-i18n'

    const { locale } = useI18n()

    function toggleIdioma() {
    locale.value = locale.value === 'es' ? 'en' : 'es'
    }
</script>

<template>
    <button @click="toggleIdioma">
    {{ locale === 'es' ? 'ES' : 'EN' }}
    </button>
</template>

<style></style>