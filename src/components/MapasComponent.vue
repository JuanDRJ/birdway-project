<template>
  <div class="main-maps">
    <!-- <GetLocation></GetLocation> -->
    <div class="map">
      <h1>Mapa Interactivo Birdway</h1>
      <MapaCaldas></MapaCaldas>
      <!-- <MapaColombia></MapaColombia> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../assets/style.scss';
.main-maps{
  background-color: none;
  background-image: url('../assets/map/tophograpic.png');
  background-size: cover;
}
.map{
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 3em;
  h1{
    text-align: center;
    color:$dark-blue
  }
}
</style>

<script setup>
import GetLocation from './organism/GetLocation.vue';
import MapaCaldas from './organism/MapaCaldas.vue';
import MapaColombia from './organism/MapaColombia.vue';</script>
