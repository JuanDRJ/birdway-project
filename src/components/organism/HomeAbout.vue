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
        <img
          class="img1"
          src="../../assets/stock-images/black-bird-watcher.jpg"
          alt=""
        />
        <img class="img2" src="../../assets/stock-images/trogon.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/style.scss";
.home_about__container {
  display: flex;
  justify-content: center;
  padding: 50px;
  background-color: $light-gray;
  animation-name: fade;
  animation-duration: 1s;
  background-image: url(../../assets/map/tophograpic.png);
  background-size: cover;
}
.info {
  padding: 35px;
  width: 40%;
  h1 {
    text-align: center;
    color: $main-color;
    font-family: "Bree serif", serif;
    margin-left: 45px;
  }
  p {
    text-align: justify;
    font-size: 20px;
    margin-top: 30px;
    margin-left: 50px;
  }
  img {
    width: 100px;
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
  border-radius: 30px;
  box-shadow: $box-shadow;
  justify-content: space-evenly;
  align-items: center;
  width: 85%;
  border-bottom: 10px $main-color solid;
  transition: 0.5s;
  background-blend-mode:multiply;
  img {
    border-radius: 20px;
    width: 80%;
    position: relative;
    left: 50px;
  }
  .img2 {
    display: none;
  }
}

.home_about__container___background:hover {
  position: relative;
  border-bottom: 30px solid $main-color;
  margin-bottom: 20px;
  padding: 0px;
  background: $main-color;
  color: $white;
  background-color: #21882d;
  opacity: 0.9;
  background-image: radial-gradient(#6bae75 1px, #21882d 1px);
  background-size: 20px 20px;
  h1 {
    color: $white;
  }
  img {
    display: none;
  }
  .img2 {
    display: flex;
    transition: 500ms ease;
    border: $white 5px solid;
  }
}
</style>

<script setup></script>
