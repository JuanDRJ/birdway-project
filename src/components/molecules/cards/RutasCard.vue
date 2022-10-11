<template>
  <div class="main-card">
    <div class="title">
      <h1>Selecciona tu ruta favorita</h1>
    </div>
    <div class="l-container">
      <div class="b-game-card">
        <div href="#" class="b-game-card__cover">
          <img src="../../../assets/brand/ROUTES/nevados.jpg" alt="" />
        </div>

        <div class="b-game-card__cover">
          <img src="../../../assets/brand/ROUTES/rioblanco.jpg" alt="" />
        </div>

        <div class="b-game-card__cover">
          <img src="../../../assets/brand/ROUTES/florencia.jpg" alt="" />
        </div>

        <div class="b-game-card__cover">
          <img src="../../../assets/brand/ROUTES/elpopal.jpg" alt="" />
        </div>

        <div class="b-game-card__cover">
          <img src="../../../assets/brand/ROUTES/amani.jpg" alt="" />
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
    font-family: 'Plus Jakarta Sans' sans-serif;
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
    border-radius: 2em;
   
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
  background: $white;
  border-radius: 2em;
  width: fit-content;
  transition: all 300ms;
}
.b-game-card__cover:hover{
  box-shadow: $box-shadow;
  transform: translateY(-1em);
  transition: all 300ms;
}
</style>