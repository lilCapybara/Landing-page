<script setup lang="ts">
import LanguageCard from './Languages/LanguageCard.vue';
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<template>
    <h2>{{ t('aboutSection.title') }}</h2>
    <div id="generalContainer">
        <div id="textContainer">
            <p>{{ t('aboutSection.p1') }}</p>
            <p>{{ t('aboutSection.p2') }}</p>
            <p>{{ t('aboutSection.p3') }}</p>
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