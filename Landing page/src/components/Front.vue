<script setup lang="ts"></script>
<template>

    <div id="container">
        <h1>Sebastián Ortega</h1>
        <h2>Software developer</h2>
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
</style>