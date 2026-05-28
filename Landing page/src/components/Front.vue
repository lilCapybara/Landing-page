<script setup lang="ts"></script>
<template>

    <div id="container">
        <h1>Sebastián Ortega</h1>
        <h2>Software developer</h2>

        <div class="buttonContainer">
            
            <a class="Btn" href="https://www.linkedin.com/in/s-g-ortega">
                <img src="/images/linkedin.png" alt="Icono LinkedIN">    
                LinkedIN
            </a>
            <a class="Btn" href="/sebastianOrtegaCv.pdf" target="_blank">Ver CV</a>
            <a class="Btn" href="https://github.com/workerCapybara">
                <img src="/images/githubIcon.png" alt="Icono Github">
                Github
            </a>
        </div>
        
    </div>
    
</template>

<style scoped>
    h1 { 
        margin-bottom: 1px; 
        color: black;
    }
    h2 { 
        margin-top: 1px; 
        color: black;
    }

    #container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        min-height: 200px;

        background: linear-gradient(
		-45deg,
		#ffffff,
		#ffe4e9,
		#fcc8e2,
		#f6baed,
		#efb0ff,
		#d3a2ff,
		#8eb8ff,
		#91efff,
		#d5f9ff
	    );
	    background-size: 400% 400%;
	    animation: gradient 9s ease infinite;
    }
   

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .buttonContainer {
        display: flex;
        gap: 10px
    }

    .Btn {
        background-color: rgba(0, 0, 0, 0.466);
        padding: 6px 16px;
        border-radius: 6px;
        text-align: center;
        text-decoration: none;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.2s ease, color 0.2s ease;
        align-self: center;
        white-space: nowrap;
    }

    .Btn:hover {
        background-color: rgb(228, 228, 228);
        color: #000;
    }

    .Btn img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 4px;
    }

    a{
        color: rgb(228, 228, 228);
    }
</style>