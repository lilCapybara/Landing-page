<script setup lang="ts">
defineProps<{
  TecnoIcono: string
  TecnoAlt: string
  TecnoNombre: string
}>()
</script>

<template>
    <img src="{{ TecnoIcono }}" alt="{{ TecnoAlt }}">
    <h3>{{ TecnoNombre }}</h3>
</template>
<style scoped></style>