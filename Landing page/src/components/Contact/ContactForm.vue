<script setup lang="ts">
    import { ref } from 'vue'
    import emailjs from '@emailjs/browser'

    const nombre = ref('')
    const email = ref('')
    const consulta = ref('')

    const enviar = async () => {
        try {
            await emailjs.send(
                'service_cuair1s',
                'template_irktq96',
                {
                    nombre: nombre.value,
                    email: email.value,
                    consulta: consulta.value,
                },
                't90KCBgtljw5Ygs1X'
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
                <input v-model="nombre" placeholder="Ingrese su nombre aqui..." />

                <p>Correo electrónico</p>
                <input v-model="email" placeholder="Ingrese su correo electrónico aqui..." />
            </div>
            <div id="consultaContainer">
                <p>Consulta</p>
                <textarea v-model="consulta" placeholder="Ingrese su consulta aqui..."></textarea>
            </div>
        </div>
        <button id="sendButton" @click="enviar">Enviar</button>
    </div>
    
</template>

<style scoped>
    #formularioConsulta{
        display: flex;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.466);
        padding-left: 5%;
        padding-right: 10%;
        padding-bottom: 5%;
        border-radius: 10px;
    }

    #inputContainer{
        display: flex;
        gap: 10%;
    }

    

    input, textarea{
        width: 110%;
    }

    h3{
        margin-bottom: 0%;
    }

    button{
        margin-top: 5%;
    }
</style>