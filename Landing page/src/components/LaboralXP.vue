<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    const { t, locale } = useI18n()
</script>

<template>
    <h2>{{ t('laboralXP.title') }}</h2>

    <ul>
        <li>
            <h3>{{ t('laboralXP.subtitle1') }}</h3>
            <p>{{ t('laboralXP.p1') }}</p>
        </li>
    </ul>
</template>

<style scoped>
    li{
        list-style: none;
    }
</style>