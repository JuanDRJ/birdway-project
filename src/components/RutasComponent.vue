<template>
  <div>
    <!-- <MainButton inner-text="Rutas buton"/>
    <SecondaryButton inner-text="Secondary rutas"/> -->
    <!-- <BirdListLocation></BirdListLocation> -->
    <RutasCard></RutasCard>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  color: black;
}
</style>

<script setup>
import MainButton from "./atoms/buttons/MainButton.vue";
import SecondaryButton from "./atoms/buttons/SecondaryButton.vue";
import BirdListLocation from "./organism/BirdListLocation.vue";
import RutasCard from './molecules/cards/RutasCard.vue';
</script>
