<script setup lang="ts">
defineProps<{
  BanderaIcono: string
  IdiomaNombre: string
  IdiomaNivel: string
}>()
</script>

<template>
    <div id="generalContainer">
        <img :src="BanderaIcono" alt="Bandera">
        <p>{{ IdiomaNombre }} ({{ IdiomaNivel }})</p>
    </div>
</template>

<style scoped>
    #generalContainer {
        background-color: rgba(0, 0, 0, 0.466);
        padding: 6px 16px;
        border-radius: 6px;
        text-align: center;
        text-decoration: none;
        font-size: 1rem;
        align-self: center;
        white-space: nowrap;
    }

    #generalContainer img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 4px;
    }
</style>