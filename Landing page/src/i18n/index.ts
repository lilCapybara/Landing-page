import { createI18n } from 'vue-i18n'

const messages = {
    es: {
        nav: {
            sobreMi: 'Sobre mí',
            formacion: 'Formación académica',
            experiencia: 'Experiencia laboral',
            stack: 'Mi stack',
            proyectos: 'Proyectos',
            contacto: 'Contacto',
            verCv: 'Ver CV'
        }
    },
    en: {
        nav: {
            sobreMi: 'About me',
            formacion: 'Academic background',
            experiencia: 'Work experience',
            stack: 'My stack',
            proyectos: 'Projects',
            contacto: 'Contact',
            verCv: 'View CV'
        }
    }
}

const i18n = createI18n({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'en',
    messages
})

export default i18n