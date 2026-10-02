<script setup lang="ts">
    import ProjectCard from './ProjectCard.vue';
    import { useI18n } from 'vue-i18n'

    const { t, locale } = useI18n()
</script>

<template>

    <h2>{{ t('projectsSection.title') }}</h2>
    <div id="projectCardContainer">
      <ProjectCard 
        :titulo="t('projectsSection.subtitle1')"

        :descripcion="t('projectsSection.p1')"

        link="https://github.com/lilCapybara/Koda-CraftAngular.git" 
      />
      <ProjectCard 
        :titulo="t('projectsSection.subtitle2')"

        :descripcion="t('projectsSection.p2')"

        link="https://github.com/workerCapybara/LeagueOfLegendsAPI" 
      />
      <ProjectCard 
        :titulo="t('projectsSection.subtitle3')"

        :descripcion="t('projectsSection.p3')"

        link="https://github.com/workerCapybara/vgbrowser.git" 
      />
      <ProjectCard 
        :titulo="t('projectsSection.subtitle4')"

        :descripcion="t('projectsSection.p4')"

        link="https://github.com/lilCapybara/Landing-page.git" 
      />
    </div>
</template>

<style scoped>
    #projectCardContainer{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10%;
}
</style>