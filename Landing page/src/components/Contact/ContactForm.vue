<script setup lang="ts">
    import { ref } from 'vue'
    import emailjs from '@emailjs/browser'
import ContactInfo from './ContactInfo.vue'

    const nombre = ref('')
    const email = ref('')
    const consulta = ref('')

    const enviar = async () => {
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    nombre: nombre.value,
                    email: email.value,
                    consulta: consulta.value,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            alert('Consulta enviada correctamente.')
        } catch (error) {
            alert('Hubo un error al enviar. Intente nuevamente.')
            console.error(error)
        }
    }
</script>

<template>
    <div id="formularioConsulta">
        <h3>¡Envie su consulta!</h3>
        <div id="inputContainer">
            <div>
                <p>Nombre</p>
                <input v-model="nombre" placeholder="Ingrese su nombre aquí..." />

                <p>Correo electrónico</p>
                <input v-model="email" placeholder="Ingrese su correo aquí..." />
            </div>
            <div id="consultaContainer">
                <p>Consulta</p>
                <textarea v-model="consulta" placeholder="Ingrese su consulta aquí..."></textarea>
            </div>
        </div>
        <button id="sendButton" @click="enviar">Enviar</button>
        <ContactInfo></ContactInfo>
    </div>
    
</template>

<style scoped>
    #formularioConsulta{
        display: flex;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.466);
        padding: 5%;
        border-radius: 10px;
        width: fit-content;
    }

    p{
        margin-bottom: 1%;
    }

    #inputContainer{
        display: flex;
        gap: 5%;
    }

    #inputContainer > div {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    input, textarea {
        width: 100%;
        box-sizing: border-box;
        background-color: rgba(44, 44, 44, 0.466);
        color: aliceblue
    }

    textarea {
        flex: 1;
    }

    h3{
        margin-bottom: 0%;
        margin-top: 0%;
    }

    button {
        margin-top: 5%;
        width: 100%;
        box-sizing: border-box;
    }
</style>