<template>
  <div class="main-footer">
    <div class="upper-footer">

      <div class="img">
        <img src="../assets/brand/LOGO/birdway-gray.png" alt="">
      </div>
      <div>
        <p>Acerca de</p>
        <p>Políticas</p>
      </div>

      <div>
        <p>Contáctenos</p>
        <p>Ayuda</p>
      </div>

      <div>
        <p>Donaciones</p>
        <p>Preguntas Frecuentes</p>
      </div>

     

    </div>
    <!-- <footer>
            <p>footer</p>
            <p>holaaaaaa</p>
        </footer> -->
    <div class="footer">
      <div id="button">&#11165;</div>
      <div id="container">
        <div id="cont">
          <div class="footer_center">
            <a href="https://github.com/JuanDRJ">
              <h3>Creado por: Juan David Ramírez <span>
                <img src="https://pnggrid.com/wp-content/uploads/2022/03/Github-Logo-White.png" alt="">
              </span></h3>
            </a> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/style.scss';
/* footer {
  background-color: rgb(71, 71, 71);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  color: white;
}

/* FOOTER */
section {
  text-align: center;
}

.footer #button {
  width: 30px;
  height: 30px;
  font-size: 60px;
  text-align: center;
  color: #88d318;
  margin-left: 20px;
  /* border: #1b8a20 12px solid;
  border-radius: 50px; */
  background-image: url(./icons/right-arrow.png);
  margin: 0 auto;
  margin-bottom: 0px;
  position: relative;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  font-size: 30px;
}

.footer #button:hover {
  width: 35px;
  height: 35px;
  border: #3a3a3a 12px solid;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  position: relative;
  text-shadow: 2px 2px;
}

.footer {
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 3em;
  overflow: hidden;
  margin: 0 auto;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  z-index: 999;
  text-align: left;
}

.footer:hover {
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
  height: 10em;
}

.footer #container {
  margin-top: 5px;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  background: $dark-blue;
  color: $white;
  border-top: 5px solid #21882d;
}

.footer #cont {
  position: relative;
  top: -45px;
  right: 190px;
  width: 150px;
  height: auto;
  margin: 0 auto;
}

.footer_center {
  width: 500px;
  float: left;
  text-align: center;
}

.footer h3 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 20px;
  font-weight: 100;
  margin-top: 70px;
  margin-left: 40px;
}
.main-footer{
  height: 150px;
  background-color: rgb(213, 213, 213);
  color: $dark-gray;
  padding: 10px;
}

img{
  width: 30px;
  margin-bottom: 3px;
}

a{
  color: $white;
  text-decoration: none;
  transition: ease-out 300ms;
}
a:visited{
  color: $white;
}

a:hover{
  color:$hover-color;
  transition: ease-out 300ms;
}

.upper-footer{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  padding: 15px;
  .img img{
    width: 250px;
  }
}

@media screen and (max-width: 650px) {

  .upper-footer{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  padding: 10px;
  text-align: center;
  .img img{
    width: 150px;
  }
}
.main-footer{
  height: fit-content;
  background-color: rgb(213, 213, 213);
  color: $dark-gray;
  padding: 10px;
}
}
</style>
