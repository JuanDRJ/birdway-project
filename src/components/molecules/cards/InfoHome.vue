<template>
  <div class="main-info">
    <div class="img">
      <img src="../../../assets/brand/routes.png" alt="" />
    </div>
    <div class="info">
      <div>
        <hr />
        <h3>
          Usa nuestro mapa interactivo <br />para acceder a tus destinos
          favoritos
        </h3>
        <hr />
      </div>

      <div class="button">
        <RouterLink to="/mapa" class="button"
          >Mapa
          <span class="material-symbols-outlined">
            travel_explore
          </span></RouterLink
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/style.scss";

.main-info {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: $white;
}

.info {
  color: $dark-blue;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  display: flex;
  justify-content: center;
  text-decoration: none;
  background-color: $main-color;
  padding: 0.3em;
  border-radius: 2em;
  width: fit-content;
  text-align: center;
  transition: all 300ms;
  span {
    margin-left: 0.3em;
  }
}
.button:visited {
  color: $white;
}

.button:hover {
  background-color: $hover-color;
  transform: translateY(-5px);
  transition: all 300ms;
}
</style>