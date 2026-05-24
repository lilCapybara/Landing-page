<script setup lang="ts">
    
</script>

<template>
    
    <div id="container">
        <details>
            <summary>Secciones</summary>
                <div id="menuOptions">
                    <ul>
                        <li><h3 class="barItem">Sobre mi</h3></li>
                        <li><h3 class="barItem">Experiencia laboral</h3></li>
                        <li><h3 class="barItem">Mi stack</h3></li>
                        <li><h3 class="barItem">Proyectos</h3></li>
                        <li><h3 class="barItem">Contacto</h3></li>
                    </ul>
                </div> 
        </details>     
    </div>
</template>

<style scoped>

#container {
    width: 150px;
    background-color: rgba(0, 0, 0, 0.466);
    display: flex;
    align-items: flex-start;
    position: fixed;
    left: 0.2%;
    top: 0;
    border-radius: 5%;
}

ul {
  list-style: none;
 
}

.barItem {
    color: rgb(228, 228, 228);
}

summary {

  color: rgb(228, 228, 228);
  cursor: pointer;
  padding: 1rem;
  width: 150px;
}



</style>

