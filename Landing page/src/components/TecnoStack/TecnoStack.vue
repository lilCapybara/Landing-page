<script setup lang="ts">
    import StackCard from './StackCard.vue';
    import { useI18n } from 'vue-i18n'

    const { t, locale } = useI18n()
</script>

<template>
    <h2>{{ t('tecnoStack.title') }}</h2>
    <div class="container">
        <div class="stackCategory">
            <h3>{{ t('tecnoStack.languages') }}</h3>
            <div class="stackCardsContainer">
                <StackCard
                TecnoIcono="/images/javaIcon.png"
                TecnoAlt="Icono Java"
                TecnoNombre="Java">
                </StackCard>
                <StackCard
                TecnoIcono="/images/jsIcon.png"
                TecnoAlt="Icono Javascript"
                TecnoNombre="Javascript">
                </StackCard>
                <StackCard
                TecnoIcono="/images/kotlinIcon.png"
                TecnoAlt="Icono Kotlin"
                TecnoNombre="Kotlin">
                </StackCard>
                <StackCard
                TecnoIcono="/images/phpIcon.png"
                TecnoAlt="Icono PHP"
                TecnoNombre="PHP">
                </StackCard>
            </div>
        </div>
        <div class="stackCategory">
            <h3>{{ t('tecnoStack.db') }}</h3>
            <div class="stackCardsContainer">
                <StackCard
                TecnoIcono="/images/sqlIcon.png"
                TecnoAlt="Icono SQL"
                TecnoNombre="SQL">
                </StackCard>
                <StackCard
                TecnoIcono="/images/postgreIcon.png"
                TecnoAlt="Icono PostgreSQL"
                TecnoNombre="PostgreSQL">
                </StackCard>
            </div>
        </div>
        <div class="stackCategory">
            <h3>{{ t('tecnoStack.frontend') }}</h3>
            <div class="stackCardsContainer">
                <StackCard
                TecnoIcono="/images/htmlIcon.png"
                TecnoAlt="Icono HTML"
                TecnoNombre="HTML">
                </StackCard>
                <StackCard
                TecnoIcono="/images/cssIcon.png"
                TecnoAlt="Icono CSS"
                TecnoNombre="CSS">
                </StackCard>
                <StackCard
                TecnoIcono="/images/figmaIcon.png"
                TecnoAlt="Icono Figma"
                TecnoNombre="Figma">
                </StackCard>
            </div>
        </div>
        <div class="stackCategory">
            <h3>{{ t('tecnoStack.qa') }}</h3>
            <div class="stackCardsContainer">
                <StackCard
                TecnoIcono="/images/testngIcon.png"
                TecnoAlt="Icono TestNG"
                TecnoNombre="TestNG">
        </StackCard>
            </div>
        </div>
        <div class="stackCategory">
            <h3>{{ t('tecnoStack.devops') }}</h3>
            <div class="stackCardsContainer">
                <StackCard
                TecnoIcono="/images/gitIcon.png"
                TecnoAlt="Icono Git"
                TecnoNombre="Git">
                </StackCard>
            </div>
        </div>
        <div class="stackCategory">
            <h3>{{ t('tecnoStack.frameworks') }}</h3>
            <div class="stackCardsContainer">
                <StackCard
                TecnoIcono="/images/angular.png"
                TecnoAlt="Icono Angular"
                TecnoNombre="Angular">
                </StackCard>
                <StackCard
                TecnoIcono="/images/vueIcon.png"
                TecnoAlt="Icono Vue"
                TecnoNombre="Vue">
                </StackCard>
                <StackCard
                TecnoIcono="/images/springbootIcon.png"
                TecnoAlt="Icono Springboot"
                TecnoNombre="Springboot">
                </StackCard>
            </div>
        </div>
        <div class="stackCategory">
            <h3>{{ t('tecnoStack.environments') }}</h3>
            <div class="stackCardsContainer">
                <StackCard
                TecnoIcono="/images/nodejsIcon.png"
                TecnoAlt="Icono NodeJS"
                TecnoNombre="NodeJS">
                </StackCard>
            </div>
        </div>    
    </div>
</template>

<style scoped>

.container {
    justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem 0;
}

.stackCategory {
    
  min-width: 180px;
  background-color: rgba(0, 0, 0, 0.466);
  border-radius: 8px;
  padding: 1rem 1.25rem;
  text-align: center;
  align-items: center; 
}

.stackCardsContainer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

</style>