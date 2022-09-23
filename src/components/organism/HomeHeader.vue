<template>
  <div class="background">
    <div class="home-header">
      <!-- <h1>Bienvenido a Birdway</h1>
          <p>Miles de rutas para encontrar millones de aves</p> -->
      <img
        src="../../assets/map/home- banner-white.png"
        alt="banner-birdway"
        class="main-icon"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/style.scss";

.background{
  background-image: url("../../assets/map/background-blue.png");
  background-size: cover;
}
.home-header {
  /* background-image: url("../../assets/map/background-blue.png"); */
  background-image: linear-gradient(rgba(255,0,0,0),rgba(39, 86, 218,10));
  background-blend-mode:lighten;
  background-size: cover;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
</style>

<script setup>
import BirdCard from "../molecules/cards/BirdCard.vue";
</script>
