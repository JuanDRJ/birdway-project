<template>
  <div class="main-card">
    <div class="title">
      <h1>Selecciona tu ruta favorita</h1>
    </div>
    <div class="l-container">
      <div class="b-game-card">
        <div href="#" class="b-game-card__cover">
          <img src="../../../assets/brand/ROUTES/nevados.jpg" alt="" />
          <div class="info">
            <p class="cold">5°c</p>
            <p class="paramo"> Páramo</p>
            <p class="altitude">3.600 m.s.n.m</p>
            <p class="advance">Avanzado</p>
          </div>
        </div>

        <div class="b-game-card__cover">
          <img src="../../../assets/brand/ROUTES/rioblanco.jpg" alt="" />
          <div class="info">
            <p class="warm">15°c</p>
            <p class="bosque"> Bosque de Niebla</p>
            <p class="altitude">2.800 m.s.n.m</p>
            <p class="medium">Intermedio</p>
          </div>
        </div>

        <div class="b-game-card__cover">
          <img src="../../../assets/brand/ROUTES/florencia.jpg" alt="" />
          <div class="info">
            <p class="warm">21°c</p>
            <p class="bosque"> Bosque de Niebla</p>
            <p class="altitude">2.500 m.s.n.m</p>
            <p class="advance">Avanzado</p>
          </div>
        </div>

        <div class="b-game-card__cover">
          <img src="../../../assets/brand/ROUTES/elpopal.jpg" alt="" />
          <div class="info">
            <p class="warm">17°c</p>
            <p class="bosque"> Bosque de Niebla</p>
            <p class="altitude">2.300 m.s.n.m</p>
            <p class="basic">Básico</p>
          </div>
        </div>

        <div class="b-game-card__cover">
          <img src="../../../assets/brand/ROUTES/amani.jpg" alt="" />
          <div class="info">
            <p class="hot">28°c</p>
            <p class="bosque"> Bosque Tropical</p>
            <p class="altitude">1.100 m.s.n.m</p>
            <p class="medium">Intermedio</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../../../assets/style.scss';
// Settings

$c_0: #000000;
$c_1: #353540;

// Basic reset

.title{
  color: $dark-blue;
  padding: 2em;
  h1{
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 600;
}
}
.l-container{
 
  width: 100%;
  max-width: 1200px;
  padding: 30px;

  .b-game-card{
    display: grid;
  grid-template-columns: auto auto;
  grid-gap: 30px;
  
   img{
    width: 500px;
    margin: 10px;
    border-radius: 1em;
   
   }
  }
}
.main-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: $light-gray;
}
.b-game-card__cover{
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: $white;
  border-radius: 2em;
  width: fit-content;
  transition: all 300ms;
  box-shadow: rgba(89, 89, 89, 0.17) 0px -23px 25px 0px inset, rgba(144, 144, 144, 0.15) 0px -36px 30px 0px inset, rgba(134, 134, 134, 0.1) 0px -79px 40px 0px inset, rgba(124, 124, 124, 0.06) 0px 2px 1px, rgba(131, 131, 131, 0.09) 0px 4px 2px, rgba(123, 123, 123, 0.09) 0px 8px 4px, rgba(123, 123, 123, 0.09) 0px 16px 8px, rgba(153, 153, 153, 0.09) 0px 32px 16px;
}
.b-game-card__cover:hover{
  box-shadow: $box-shadow;
  transform: translateY(-1em);
  transition: all 300ms;
  background-color: $dark-blue;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  img{
    border:$white 3px dotted;
    
  }
  
}


.info{
  display: flex;
  justify-content: left;
  gap:1em;
  padding-left: 2em;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 500;
}
.cold{
  background: rgb(143, 143, 244);
  border-radius: 20px;
  color:$white;
  padding: 0.5em;
}

.hot{
  background: rgb(246, 120, 82);
  border-radius: 20px;
  color:$white;
  padding: 0.5em;
}
.paramo{
  background: rgb(108, 178, 208);
  border-radius: 20px;
  color:$white;
  padding: 0.5em;
}

.altitude{
  background: rgb(134, 134, 134);
  border-radius: 20px;
  color:$white;
  padding: 0.5em;
}

.advance{
  background: rgb(236, 158, 32);
  border-radius: 20px;
  color:$white;
  padding: 0.5em;
}

.medium{
  background: rgb(38, 185, 48);
  border-radius: 20px;
  color:$white;
  padding: 0.5em;
}

.basic{
  background: rgb(38, 141, 185);
  border-radius: 20px;
  color:$white;
  padding: 0.5em;
}

.bosque{
  background: rgb(55, 183, 82);
  border-radius: 20px;
  color:$white;
  padding: 0.5em;
}

.warm{
  background: rgb(255, 90, 222);
  border-radius: 20px;
  color:$white;
  padding: 0.5em;
}

@media screen and (max-width: 650px) {
  .b-game-card{
    display: grid;
  grid-template-columns: auto;
  grid-gap: 30px;
  img{
    width: 200px;
    margin: 5px;
    border-radius: 1em;
   
   }
}}
</style>