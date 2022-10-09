<template>
  <div class="main-head">
    <div class="up">
        <div class="img">
          <img src="../../../assets/brand/ecoturism.png" alt="" />
        </div>
        <div>
          <div class="title">
            <h4>
              Accede a la red global <br />
              de operadores turísticos de aves<br /><stronger
                >más grande del mundo</stronger>
            </h4>
          </div>
    </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#223956" fill-opacity="1" d="M0,192L120,208C240,224,480,256,720,240C960,224,1200,160,1320,128L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
</svg>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/style.scss";
.img img {
  width: 42em;
  padding: 2em;
  z-index: 10;
}

.main-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  animation-name: fade1;
  animation-duration: 1s;


  
  /*   
  opacity: 1;
  background-image: radial-gradient(#d7d7d7 1.1px, #f9f9f9 1px);
  background-size: 31px 31px; */
  font-family: "Bree Serif";
  h4 {
    font-size: 2em;
    text-align: center;
    color: $main-color;
    padding: 0em 2em 0em 0em;
  }
  .up{
    display: flex;
    align-items: center;
    margin-top: 30px;
    justify-content: center;
  }
  svg{
    display: block;
    position: absolute;
    bottom: 50px;
    margin:0px;
    width: 100vw;
    z-index: 5;
  }
}
.title{
    animation-name: fadetitle;
    animation-duration: 4s;
}

@keyframes fadetitle {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade1 {
  0% {
    opacity: 0.1;
    margin-right:400px
  }
  100% {
    opacity: 1;
    margin-right:0px
  }
}
</style>

