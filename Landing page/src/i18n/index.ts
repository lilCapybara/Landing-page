import { createI18n } from 'vue-i18n'

const messages = {
    es: {
        nav: {
            sobreMi: 'Sobre mí',
            formacion: 'Formación académica',
            experiencia: 'Experiencia laboral',
             idiomas: 'Idiomas',
            stack: 'Mi stack',
            proyectos: 'Proyectos',
            contacto: 'Contacto',
            verCv: 'Ver CV'
        },
        front: {
            CV: 'Ver CV'   
        },
        aboutSection: {
            title: 'Sobre mí',
            p1: 'Empleado de comercio y estudiante de la Tecnicatura Universitaria en Desarrollo de Aplicaciones Informaticas (TUDAI) en la UNICEN (Universidad Nacional del Centro de la provincia de Buenos Aires).',
            p2: 'Me considero una persona que presta especial atencion al detalle y busca mantener su entorno de trabajo lo mas ordenado posible.',
            p3: 'Siempre estoy interesado en adquirir nuevos conocimientos, lo que me facilita el adaptarme a los desafios que se me presenten.'
        },
        laboralXP: {
            title: 'Experiencia laboral',
            subtitle1: 'Lubricantes Canning (2022-Actualidad)',
            p1: 'Encargado de atencion al cliente, control de inventario, toma de pedidos y tareas de limpieza.'
        },
        education: {
            title: 'Formacion académica',
            subtitle1: 'Universidad Nacional del centro de la provincia de Buenos Aires (2023-Actualidad)',
            p1: 'Tecnicatura Universitaria en Desarrollo de Aplicaciones Informaticas (Todas las materias aprobadas).',
            subtitle2: 'Universidad Nacional de Mar del Plata (2018-2022)',
            p2: 'Ingenieria Electronica (Incompleta).'
        },
        languageSection: {
            title: 'Idiomas',
            es: 'Español',
            en: 'Inglés',
            de: 'Alemán',
            native: 'Nativo',
            C1: 'C1',
            A2: 'A2'
        },
        tecnoStack: {
            title: 'Mi Stack',
            languages: 'Lenguajes de programación',
            db: 'Gestión de bases de datos',
            frontend: 'Frontend',
            qa: 'QA',
            devops: 'DevOps',
            frameworks: 'Frameworks',
            environments: 'Entornos de ejecución',
        },
        projectsSection: {
            title: 'Proyectos',
            subtitle1: 'Sitio web realizado en Angular',
            p1: 'Sitio web para venta de maquetas que contiene una lista de productos, un carrito de compra y una página de contacto.',
            subtitle2: 'League of Legends API',
            p2: 'API con endpoints para operaciones CRUD, incluyendo ademas una autenticación con usuario y contraseña y token JWT.',
            subtitle3: 'Browser de videojuegos para Android',
            p3: 'Aplicación para Android que consume datos de la API RAWG para mostrar una lista de videojuegos.',
            subtitle4: 'Mi portfolio realizado en Vue',
            p4: 'El portfolio en el que ahora está navegando fue creado utilizando el framework Vue. Cuenta con un navbar que lleva a las distintas secciones de la página y un formulario de contacto para enviar mensajes directamente a mi correo electrónico. La página también cuenta en su navbar con un botón que permite cambiar el idioma entre inglés y español, así como otro botón que permite cambiar el tema de la página entre claro y oscuro',
        },
        contactSection: {
            title: 'Contacto',
            formTitle: '¡Envie su consulta!',
            name: 'Nombre',
            namePlaceholder: 'Ingrese su nombre aquí...',
            email: 'Correo electrónico',
            emailPlaceholder: 'Ingrese su correo aquí...',
            inquiry: 'Consulta',
            inquiryPlaceholder: 'Ingrese su consulta aquí...',
            sendButton: 'Enviar',
            subtitle: 'O envie un mensaje a mi correo electrónico:',
            emailreveal: 'Haga clic para revelar correo electrónico',
            messageSent: 'Consulta enviada correctamente.',
            errorMessage: 'Hubo un error al enviar. Intente nuevamente.'
        }
    },

    en: {
        nav: {
            sobreMi: 'About me',
            formacion: 'Academic background',
            experiencia: 'Work experience',
            idiomas: 'Languages',
            stack: 'My stack',
            proyectos: 'Projects',
            contacto: 'Contact',
            verCv: 'View CV'
        },
        front: {
            CV: 'My CV'   
        },
        aboutSection: {
            title: 'About me',
            p1: 'Retail employee and student of the University Technical Program in Computer Application Development (TUDAI) at UNICEN (National University of the Center of Buenos Aires Province).',
            p2: 'I consider myself someone who pays close attention to detail and seeks to keep their work environment as organized as possible.',
            p3: 'I am always interested in acquiring new knowledge, which makes it easier for me to adapt to the challenges I face.'
        },
        laboralXP: {
            title: 'Work experience',
            subtitle1: 'Lubricantes Canning (2022–Present)',
            p1: 'Responsible for customer service, inventory control, taking orders, and cleaning tasks.'
        },
        education: {
            title: 'Academic background',
            subtitle1: 'National University of the Center of Buenos Aires Province (2023-Present)',
            p1: 'University Technical Program in Computer Application Development (All courses completed).',
            subtitle2: 'National University of Mar del Plata (2018-2022)',
            p2: 'Electronic Engineering (not finished).'
        },
        languageSection: {
            title: 'Languages',
            es: 'Spanish',
            en: 'English',
            de: 'German',
            native: 'Native',
            C1: 'C1',
            A2: 'A2'
        },
        tecnoStack: {
            title: 'My stack',
            languages: 'Programming languages',
            db: 'Database management',
            frontend: 'Frontend',
            qa: 'QA',
            devops: 'DevOps',
            frameworks: 'Frameworks',
            environments: 'Runtime environments',
        },
        projectsSection: {
            title: 'Projects',
            subtitle1: 'Website built with Angular',
            p1: 'A website for selling scale models, featuring a product list, a shopping cart, and a contact page.',
            subtitle2: 'League of Legends API',
            p2: 'An API with endpoints for CRUD operations, also including authentication via username/password and JWT tokens.',
            subtitle3: 'Android Video Game Browser',
            p3: 'An Android application that consumes data from the RAWG API to display a list of video games.',
            subtitle4: 'My portfolio built with Vue',
            p4: 'The portfolio you are currently viewing was built using the Vue framework. It features a navigation bar that links to the page\'\s various sections and a contact form for sending messages directly to my email. The navigation bar also includes a button to toggle the language between English and Spanish, as well as a button to switch the page theme between light and dark modes.',
        },
        contactSection: {
            title: 'Contact',
            formTitle: 'Send your inquiry!',
            name: 'Name',
            namePlaceholder: 'Enter your name here...',
            email: 'Email',
            emailPlaceholder: 'Enter your email here...',
            inquiry: 'Inquiry',
            inquiryPlaceholder: 'Enter your inquiry here...',
            sendButton: 'Send',
            subtitle: 'Or send a message to my email address:',
            emailreveal: 'Click to reveal email address',
            messageSent: 'Inquiry sent successfully',
            errorMessage: 'There was an error. Please try again.'
        }
    },
    
}

const i18n = createI18n({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'en',
    messages
})

export default i18n