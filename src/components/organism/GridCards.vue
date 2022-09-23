<template>
  <div class="cards-container">
    <BirdCard
      v-for="item in items"
      :key="item.id"
      bird-name="nombre del ave"
      bird-img="https://birdsofcolombia.com/images/editor-content/804a0f11051f476ddc7b8299952965d4_multicoloredtanager.jpg"
      bird-description="Esta es la descripcion del ave"
      class="bird-card"
    />
  </div>
</template>

<style scoped lang="scss">
  @import '../../assets/style.scss';
.cards-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10px 0;
  transition: 300ms ease-out;
  border-radius: 20px;
  :hover{
    background-color: $main-color;
    transition: 300ms ease-out;
    color:$white;
}
}

.bird-card {
  background: rgb(229, 229, 229);
 
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
  {
    name: "Pato de torrente",
    description: "Ave emblema de el departamento de caldas",
  },
];
</script>
