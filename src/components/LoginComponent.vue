<template>
  <div class="main-log-in">
    <LogCard class="logcard"></LogCard>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
.main-log-in {
  background-image: url("../assets/stock-images/quetzal.jpg");
  background-size: cover;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  .logcard {
    position: relative;
    right: -230px;
    animation-name: fade1;
    animation-duration: 1s;
    transition: 300ms ease;
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
import LogCard from "./organism/LogCard.vue";
</script>
