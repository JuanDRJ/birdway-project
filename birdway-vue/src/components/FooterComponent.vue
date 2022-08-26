<template>
  <div>
    <!-- <footer>
            <p>footer</p>
            <p>holaaaaaa</p>
        </footer> -->
    <div class="footer">
      <div id="button">	&#11165;</div>
      <div id="container">
        <div id="cont">
          <div class="footer_center">
            <h3>Creaado por: Juan David Ramírez</h3>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* footer {
  background-color: rgb(71, 71, 71);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  color: white;
}
 */

/* FOOTER */
section {
  text-align: center;
}

.footer #button {
  width: 30px;
  height: 30px;
  font-size: 60px;
  text-align: center;
  color: #88D318;
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
  text-shadow:  2px 2px;
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
  background: rgb(241, 241, 241);
  color: #21882d;
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
  font-family: "Helvetica";
  font-size: 30px;
  font-weight: 100;
  margin-top: 70px;
  margin-left: 40px;
}
</style>