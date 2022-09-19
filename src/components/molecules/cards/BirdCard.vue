<template>
  <div class="bird-card">
    
    <div class="img-container">
      <img
        src="https://images.unsplash.com/photo-1620588280212-bf1d2b23b112?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlyZCUyMGluJTIwZmxpZ2h0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        alt="bird-img"
      />
    </div>
    <h2>{{birdName}}</h2>
    <p>{{birdDescription}} descripcion</p>

    <SecondaryButton class="card-button" inner-text="leer más"/>
  </div>
</template>

<style lang="scss" scoped>
.bird-card {
  background-color: rgb(236, 236, 236);
  width: 320px;
  height: 400px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  .img-container {
    img {
      width: 100%;
      padding: 5px;
      border-radius: 20px;
    }
  }
  p{
    padding: 0 10px;
    text-align: left;
  }
  h2{
    text-align: left;
    margin: 2px 8px;
  }
  .card-button{
    justify-self: center;
    margin: 0px 0px 0px 200px;
    position: relative;
    bottom: 20px;
  }
}
</style>

<script setup>
import SecondaryButton from '../../atoms/buttons/SecondaryButton.vue';

const props = defineProps({
  birdName: String,
  birdDescription: String,
})
</script>
