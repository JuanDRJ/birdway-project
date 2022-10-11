<template>
  <div class="main-settings">
    <div class="title">
      <h3>Accede a la base de datos de eBird en tiempo real</h3>
     
    </div>
    <BirdListLocation></BirdListLocation>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/style.scss';
.main-settings{
  display: flex;
  justify-content: center;
  align-items: center ;
  flex-direction: column;
  background-color: $white;
  .title{
    color: $dark-blue;
    padding: 2em;
  }
}
</style>

<script setup>
import BirdListLocation from './organism/BirdListLocation.vue';</script>
