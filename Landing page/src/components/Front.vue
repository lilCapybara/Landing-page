<script setup lang="ts"></script>
<template>

    <div id="container">
        <h1>Sebastián Ortega</h1>
        <h2>Software developer</h2>
    </div>
    
</template>

<style scoped>
    h1 { margin-bottom: 1px; }
    h2 { margin-top: 1px; }

    #container {
        background-color: rgb(12, 42, 58);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        padding-bottom: 80px;
        
    }

    #container::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 60px;
        background: linear-gradient(to bottom, transparent, #292c2e);
        pointer-events: none;
    }
</style>