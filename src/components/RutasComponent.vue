<template>
  <div>
    <!-- <MainButton inner-text="Rutas buton"/>
    <SecondaryButton inner-text="Secondary rutas"/> -->
    <!-- <BirdListLocation></BirdListLocation> -->
    <RutasCard class="rutas"></RutasCard>
  </div>
</template>

<style lang="scss" scoped>
.rutas{
  animation-name: fade;
  animation-duration: 500ms;

  @keyframes fade {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1
  }
}
}
</style>

<script setup>
import MainButton from "./atoms/buttons/MainButton.vue";
import SecondaryButton from "./atoms/buttons/SecondaryButton.vue";
import BirdListLocation from "./organism/BirdListLocation.vue";
import RutasCard from './molecules/cards/RutasCard.vue';
</script>
