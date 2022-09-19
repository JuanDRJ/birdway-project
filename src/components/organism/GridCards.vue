<template>
  <div class="cards-container">
    <BirdCard v-for="item in items" 
     :key="item.id"
     bird-name="nombre del ave" 
     bird-description="Esta es la descripcion del ave" 
      />
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
}
</style>

<script setup>
import BirdCard from "../molecules/cards/BirdCard.vue";

var items = [
  {
    name: "cacique candela",
    description: "Ave negra de plumas rojas endémica de Colombia",
  },
  {
    name: "Condor Andino",
    description: "El majestuoso cóndor de los Andes",
  },
  {
    name: "Pato de torrente",
    description: "Ave emblema de el departamento de caldas",
  },
];
</script>
