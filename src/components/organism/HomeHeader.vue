<template>
  <div>
    <div class="background">
      <div class="home-header">
        <!-- <h1>Bienvenido a Birdway</h1>
            <p>Miles de rutas para encontrar millones de aves</p> -->
        <div>Accede a la red global de Operadores Turísticos de Aves</div>
        <img
          src="../../assets/map/home-banner-white.png"
          alt="banner-birdway"
          class="main-icon"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/style.scss";

.background {
  background-color: $dark-blue;
  z-index: 1;
  
}
.home-header {
  background-size: cover;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  animation-name: fade;
  animation-duration: 1s;

  h1 {
    color: white;
    text-align: center;
  }
  .main-icon {
    width: 600px;
    animation-name: fade1;
    animation-duration: 1s;
    transition: 300ms ease;
  }
  .main-icon:hover {
    width: 620px;
    transition: 300ms ease-in-out;
  }
  @keyframes fade1 {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
}
svg {
  position: absolute;
  bottom: -10px;
  z-index: 2;
}
</style>

<script setup>
import BirdCard from "../molecules/cards/BirdCard.vue";
import BirdAnimation from "../molecules/cards/BirdAnimation.vue";
</script>
