<script setup lang="ts">
    import LanguageCard from './LanguageCard.vue';
    import { useI18n } from 'vue-i18n'

    const { t, locale } = useI18n()
    
</script>

<template>
    <h2>{{ t('languageSection.title') }}</h2>
    <div id="languagesContainer">
        <LanguageCard
        BanderaIcono="/images/spainFlag.png"
        :IdiomaNombre="t('languageSection.es')"
        :IdiomaNivel="t('languageSection.native')"
        ></LanguageCard>
        <LanguageCard
        BanderaIcono="/images/unitedKingdomFlag.png"
        :IdiomaNombre="t('languageSection.en')"
        :IdiomaNivel="t('languageSection.C1')"
        ></LanguageCard>
        <LanguageCard
        BanderaIcono="/images/germanyFlag.png"
        :IdiomaNombre="t('languageSection.de')"
        :IdiomaNivel="t('languageSection.A2')"
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