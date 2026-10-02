<script setup lang="ts">
    import { useI18n } from 'vue-i18n'

    const { t, locale } = useI18n()
</script>

<template>
    <h2>{{ t('education.title') }}</h2>

    <ul>
        <li>
            <h3>{{ t('education.subtitle1') }}</h3>
            <p>{{ t('education.p1') }}</p>
        </li>
        <li>
            <h3>{{ t('education.subtitle2') }}</h3>
            <p>{{ t('education.p2') }}</p>
        </li>
    </ul>
</template>

<style scoped>
    li{
        list-style: none;
    }
     h2, h3 {
        text-align: center;
    }
</style>