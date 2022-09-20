<template>
    <div class="home-header">
        <h1>Bienvenido a Birdway</h1>
        <p>Miles de rutas para encontrar millones de aves</p>
    </div>
</template>


<style lang="scss" scoped>
    .home-header{
        background-color:rgb(114, 114, 158);
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        h1{
            color: white;
            text-align: center;
        }
    }

</style>

<script setup>
import BirdCard from '../molecules/cards/BirdCard.vue';

</script>