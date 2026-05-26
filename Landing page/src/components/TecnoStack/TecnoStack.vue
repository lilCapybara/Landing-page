<script setup lang="ts">
    import StackCard from './StackCard.vue';
</script>

<template>
    <h2>Mi stack</h2>
    <div class="container">
        <div class="stackCategory">
            <h3>Lenguajes de programación</h3>
            <div class="stackCardsContainer">
                <StackCard
                TecnoIcono="../../../assets/images/javaIcon.png"
                TecnoAlt="Icono Java"
                TecnoNombre="Java">
                </StackCard>
                <StackCard
                TecnoIcono="../../../assets/images/jsIcon.png"
                TecnoAlt="Icono Javascript"
                TecnoNombre="Javascript">
                </StackCard>
                <StackCard
                TecnoIcono="../../../assets/images/kotlinIcon.png"
                TecnoAlt="Icono Kotlin"
                TecnoNombre="Kotlin">
                </StackCard>
            </div>
        </div>
        <div class="stackCategory">
            <h3>Gestion de bases de datos</h3>
            <div class="stackCardsContainer">
                <StackCard
                TecnoIcono="../../../assets/images/sqlIcon.png"
                TecnoAlt="Icono SQL"
                TecnoNombre="SQL">
                </StackCard>
                <StackCard
                TecnoIcono="../../../assets/images/postgreIcon.png"
                TecnoAlt="Icono PostgreSQL"
                TecnoNombre="PostgreSQL">
                </StackCard>
            </div>
        </div>
        <div class="stackCategory">
            <h3>Frontend</h3>
            <div class="stackCardsContainer">
                <StackCard
                TecnoIcono="../../../assets/images/htmlIcon.png"
                TecnoAlt="Icono HTML"
                TecnoNombre="HTML">
                </StackCard>
                <StackCard
                TecnoIcono="../../../assets/images/cssIcon.png"
                TecnoAlt="Icono CSS"
                TecnoNombre="CSS">
                </StackCard>
                <StackCard
                TecnoIcono="../../../assets/images/figmaIcon.png"
                TecnoAlt="Icono Figma"
                TecnoNombre="Figma">
                </StackCard>
            </div>
        </div>
        <div class="stackCategory">
            <h3>QA</h3>
            <div class="stackCardsContainer">
                <StackCard
                TecnoIcono="../../../assets/images/testngIcon.png"
                TecnoAlt="Icono TestNG"
                TecnoNombre="TestNG">
        </StackCard>
            </div>
        </div>
        <div class="stackCategory">
            <h3>DevOps</h3>
            <div class="stackCardsContainer">
                <StackCard
                TecnoIcono="../../../assets/images/gitIcon.png"
                TecnoAlt="Icono Git"
                TecnoNombre="Git">
                </StackCard>
            </div>
        </div>
        <div class="stackCategory">
            <h3>Frameworks</h3>
            <div class="stackCardsContainer">
                <StackCard
                TecnoIcono="../../../assets/images/angular.png"
                TecnoAlt="Icono Angular"
                TecnoNombre="Angular">
                </StackCard>
                <StackCard
                TecnoIcono="../../../assets/images/vueIcon.png"
                TecnoAlt="Icono Vue"
                TecnoNombre="Vue">
                </StackCard>
                <StackCard
                TecnoIcono="../../../assets/images/springbootIcon.png"
                TecnoAlt="Icono Springboot"
                TecnoNombre="Springboot">
                </StackCard>
            </div>
        </div>
        <div class="stackCategory">
            <h3>Entornos de ejecución</h3>
            <div class="stackCardsContainer">
                <StackCard
                TecnoIcono="../../../assets/images/nodejsIcon.png"
                TecnoAlt="Icono NodeJS"
                TecnoNombre="NodeJS">
                </StackCard>
            </div>
        </div>    
    </div>
</template>

<style scoped>

.container{
    display: flex;
}

</style>