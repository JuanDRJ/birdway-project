<template>
  <div class="main">
    <h1>Construyendo Comunidad</h1>

    <div class="lower">
      <div>
        <h3>
          <hr />
          Buscámos favorecer a las comunidades que conocen de su territorio
        </h3>
        

        <p>Reconoces el alto impacto que tiene el aviturismo en zonas rurales, <br> por eso buscamos apoyar estas iniciativas a través de la tecnología</p>
        <hr />
      </div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade carrousel-set"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner carrousel-set">
          <div class="carousel-item active">
            <img
              src="../../../assets/brand/comunity/selva.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../../assets/brand/comunity/selva2.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../../assets/brand/comunity/selva3.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../../assets/brand/comunity/selva4.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/style.scss";

.carrousel-set {
  width: 600px;
  border-radius: 10px;
}

.lower {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0em 3em 5em 3em;
  color: $white;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: $dark-blue;
  background-color: #223956;
opacity: 1;
background-image:  radial-gradient(#4c51a2 1.25px, transparent 1.25px), radial-gradient(#4c51a2 1.25px, #223956 1.25px);
background-size: 50px 50px;
background-position: 0 0,25px 25px;
  h1 {
    padding: 1em;
    color: $white;
    font-family: "Bree Serif";
    text-shadow: 2px 2px 8px $dark-blue;
  }
}
h3{
  font-family: 'Plus Jakarta Sans';
  color:$white;
  text-shadow: 2px 2px 8px $dark-blue;

}
p{
  font-family: 'Plus Jakarta Sans';
  color:$light-gray;
  text-shadow: 2px 2px 8px $dark-blue;
}
</style>