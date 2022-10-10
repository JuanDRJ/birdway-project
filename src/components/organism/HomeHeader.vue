<template>
  <div class="main">
    <div class="background">
      <div class="home-header">
        <!-- <h1>Bienvenido a Birdway</h1>
            <p>Miles de rutas para encontrar millones de aves</p> -->
        <div class="info">
          <h3>
            <hr />
            Conéctate con turistas extranjeros & guíalos a una aventura
            inimaginable
            <hr />
          </h3>
          <div class="rout">
            <RouterLink to="/login" class="button">Registrate ahora <span class="material-symbols-outlined">
arrow_forward
</span></RouterLink>
          </div>
        </div>
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

.main{
  font-family: 'Plus Jakarta Sans';
}
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

.info {
  padding: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .button {
    display: flex;
    justify-content: center;
    text-decoration: none;
    background-color: $main-color;
    padding: 1em;
    border-radius: 2em;
    width: fit-content;
    text-align: center;
    transition:all 300ms ;
    span{
      margin-left: 0.3em;
    }
  }
  .button:visited {
    color: $white;
  }

  .button:hover{
    background-color: $hover-color;
    transform: translateY(-10px);
    transition:all 300ms ;
  }
  h3 {
    color: $white;
    text-align: center;
  }
}
</style>

<script setup>
import BirdCard from "../molecules/cards/BirdCard.vue";
import BirdAnimation from "../molecules/cards/BirdAnimation.vue";
import MainButton from "../atoms/buttons/MainButton.vue";
</script>
