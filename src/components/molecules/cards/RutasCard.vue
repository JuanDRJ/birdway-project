<template>
  <div class="main-card">
    <div class="l-container">
      <div class="b-game-card">
        <div class="b-game-card__cover">
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
// Settings

$c_0: #000000;
$c_1: #353540;

// Basic reset
.l-container{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  width: 100%;
  max-width: 1200px;
  padding: 30px;

  .b-game-card{
   img{
    width: 600px;
   }
  }
}
.main-card {
  display: flex;
  justify-content: center;
}

</style>