<script setup lang="ts">
    import { ref } from 'vue'

    const mailVisible = ref(false)
</script>

<template>
    <div id="container">
        <h4>O envie un mensaje a mi correo electrónico:</h4>
        <div class="contactElement">
            <img src="/images/mail.png" alt="Icono email">
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
    #container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h4{
        margin-bottom: 0;
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
        transition: color 0.3s ease-in-out;
    }

    .reveal:hover{
        color: aliceblue;
    }
</style>