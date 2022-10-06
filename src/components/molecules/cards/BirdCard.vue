<template>
  <div class="bird-card">
    <div class="img-container">
      <img :src="birdImg" alt="bird-img" />
    </div>
    <h2>{{ birdName }}</h2>
    <p>{{ birdDescription }}</p>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../../assets/style.scss';
.bird-card {
  background-color:$light-gray;
  width: 320px;
  height: 320px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: $box-shadow;
  :hover{
    
    transition: 300ms ease-in-out ;
  }

  .img-container {
    img {
      width: 100%;
      padding: 5px;
      border-radius: 20px;
      :hover{
      border: 1px $white dotted;
      }
    }
  }
  p {
    padding: 0 10px;
    text-align: left;
  }
  h2 {
    text-align: left;
    margin: 2px 5px;
  }
  
}
</style>

<script setup>
import SecondaryButton from "../../atoms/buttons/SecondaryButton.vue";

const props = defineProps({
  birdName: String,
  birdDescription: String,
  birdImg: String,
});

// variable
</script>
