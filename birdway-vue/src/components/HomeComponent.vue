<template>
  <div class="home">
    <h2>Esta es la vista de Home</h2>
    <div class="main-home">
      <img
        class="logo"
        src="../assets/brand/birdway_horizontal.png"
        alt="home-banner"
      />
      <div class="profile-select">
        <div class="traveler-option">
          <div class="traveler-option-card">
            <img src="../assets/icons/tourist.png" alt="" />
            <router-link class="profile-link" to="/about"
              >Soy Viajero</router-link
            >
          </div>
        </div>

        <div class="traveler-option">
          <div class="traveler-option-card">
            <img src="../assets/icons/explore.png" alt="" />
            <router-link class="profile-link" to="/about">Soy Guía</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* export default {
  name: 'App',} */
</script>


<style>
.main-home {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 98vw;
  height: 800px;

  background-image: url(https://cr00.epimg.net/radio/imagenes/2022/05/26/nacional/1653522132_132936_1653522853_noticia_normal.jpg);
  background-size: cover;
  background-image: url(../assets/map/background-map.png);
  align-content: center;
  filter: blur(1.5);
  /* width: 95vw; */
}

.main-home img {
  margin: 0 auto;
  margin-top: 10%;
  width: 500px;
}

.map-title {
  margin: 0 auto;
  position: absolute;
  z-index: 3;
  justify-self: center;
}

/* .custom-nav{
    margin: 0 auto;
    width: 92vw;
} */

.profile-select {
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  gap: px;
}

.traveler-option {
  padding: 10px;
  background-color: rgba(rgb(20, 44, 122), green, blue, 0.5);
  border-radius: 10%;
}

.traveler-option img {
  width: 100px;
  margin-top: 5px;
}

.traveler-option-card {
  display: flex;
  flex-direction: column;
}

.profile-link:hover {
  color: aqua;
}
</style>