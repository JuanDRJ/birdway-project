<template>
  <div class="home_about__container">
   <div class="title">
     <h1>Información en tiempo real</h1>
   </div>
    <div class="home_about__container___background">
    
      <div class="info">
        <h3>Encuentra información relevante de:</h3>
        <ul>
          <li>Avistamientos recientes en un lugar</li>
          <li>Sitios de interés para observar aves</li>
          <li>Avistamientos cercanos en una región</li>
        </ul>
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
  align-items:center;
  flex-direction: column;
  padding: 50px;
  background-color: $white  ;
  animation-name: fade;
  animation-duration: 1s;
 /*  background-image: url(../../assets/map/tophograpic.png); */
  background-blend-mode: exclusion;
  background-size: cover;
  font-family: 'Plus Jakarta Sans' sans-serif;
}
.info {
  padding: 35px;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h3 {
    text-align: center;
    color: $main-color;
    font-family: "Bree serif", serif;
    margin-left: 45px;
    margin-bottom: 1em;
  }
  p {
    text-align: justify;
    font-size: 20px;
    margin-top: 30px;
    margin-left: 50px;
    font-family: 'Plus Jakarta Sans';
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
  background-color: none;
  display: flex;
  border-radius: 30px;
  /* box-shadow: $box-shadow; */
  justify-content: space-evenly;
  align-items: center;
  width: 85%;
  border-bottom: 10px $main-color solid;
  transition: 0.5s;
  background-blend-mode: multiply;
  font-family: 'Plus Jakarta Sans';
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
  h3 {
    color: $white;
    text-shadow: 2px 2px 8px #1dff15;
  }
  img {
    display: none;
  }
  .img2 {
    display: flex;
    transition: 500ms ease;
    border: $white 5px solid;
    box-shadow: rgba(69, 240, 46, 0.4) -5px 5px,
      rgba(101, 240, 46, 0.3) -10px 10px, rgba(50, 255, 22, 0.2) -15px 15px,
      rgba(111, 255, 8, 0.1) -20px 20px, rgba(92, 255, 109, 0.05) -25px 25px;
  }
}

.title{
  padding: 2em;
  display: flex;
  justify-content: center;
  font-family: 'Plus Jakarta Sans';
  color: $dark-blue;
}
</style>

<script setup></script>
