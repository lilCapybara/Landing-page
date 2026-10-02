<script setup lang="ts">
import { ref } from 'vue'

const isDark = ref(true)

function toggleTema() {
  isDark.value = !isDark.value
  document.body.className = isDark.value ? 'dark' : 'light'
}
</script>

<template>
  <button @click="toggleTema">
    {{ isDark ? '🌙' : '☀️' }}
  </button>
</template>