<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(true)

function applyTheme() {
  document.body.className = isDark.value ? 'dark' : 'light'
}

function toggleTema() {
  isDark.value = !isDark.value
  applyTheme()
}

onMounted(applyTheme)
</script>

<template>
  <button @click="toggleTema">
    {{ isDark ? '🌙' : '☀️' }}
  </button>
</template>