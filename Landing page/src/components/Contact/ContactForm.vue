<script setup lang="ts">
    import { ref } from 'vue'
    import emailjs from '@emailjs/browser'
    import ContactInfo from './ContactInfo.vue'
    import { useI18n } from 'vue-i18n'

    const { t, locale } = useI18n()

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
            alert(t('contactSection.messageSent'))
        } catch (error) {
            alert(t('contactSection.errorMessage'))
            console.error(error)
        }
    }
</script>

<template>
    <div id="formularioConsulta">
        <h3>{{ t('contactSection.title') }}</h3>
        <div id="inputContainer">
            <div>
                <p>{{ t('contactSection.name') }}</p>
                <textarea v-model="nombre" :placeholder="t('contactSection.namePlaceholder')"></textarea>

                <p>{{ t('contactSection.email') }}</p>
                <textarea v-model="email" :placeholder="t('contactSection.emailPlaceholder')"></textarea>
            </div>
            <div id="consultaContainer">
                <p>{{ t('contactSection.inquiry') }}</p>
                <textarea v-model="consulta" :placeholder="t('contactSection.inquiryPlaceholder')"></textarea>
            </div>
        </div>
        <button id="sendButton" @click="enviar">{{ t('contactSection.sendButton') }}</button>
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