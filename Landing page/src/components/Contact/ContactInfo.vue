<script setup lang="ts">
    import { ref } from 'vue'

    const mailVisible = ref(false)
</script>

<template>
    <div id="container">
        <div class="contactElement">
            <img src="../../../assets/images/linkedin.png" alt="Icono Linkedin">
            <p>https://www.linkedin.com/in/s-g-ortega</p>
        </div>
        <div class="contactElement">
            <img src="../../../assets/images/mail.png" alt="Icono email">
            <div>
                <p v-if="!mailVisible" @click="mailVisible = true" class="reveal">
                    Haga clic para revelar correo electrónico
                </p>
                <p v-else>ortegasebastiangaston@gmail.com</p>
            </div>
        </div>
    </div>  
</template>

<style scoped>
    #container{
        display: block;
        flex-direction: column;
    }

    .contactElement {
    display: flex;
    align-items: center;
    gap: 8px;
    }

    .contactElement img {
        width: 1em;
        height: 1em;
    }

    .reveal {
        cursor: pointer;
    }
</style>