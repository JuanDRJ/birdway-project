<template>
  <div class="home_about__container">
    <div class="home_about__container___background">
      <div class="info">
        <h1>¿Qué es Birdway?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          unde nisi pariatur asperiores veritatis consequatur delectus rerum
          inventore excepturi omnis in eveniet, dicta commodi harum optio ut
          blanditiis eaque ex.
        </p>
      </div>
      <div>
        <img src="../../assets/stock-images/black-bird-watcher.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/style.scss";
.home_about__container {
  display: flex;
  padding: 50px;
  background-color: $light-gray;
  animation-name: fade;
  animation-duration: 3s;
}
.info{
    padding: 40px;
    h1{
        text-align: center;
        color: $main-color;
    }
    p{
        text-align: justify;
        font-size: 20px;
        margin-top: 30px;
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
.home_about__container___background {
  background-color: $white;
  display: flex;
  border-radius: 10px;
  box-shadow: $box-shadow;
  img {
    border-radius: 0px 10px 10px 0px;
  }
}
</style>

<script setup></script>
