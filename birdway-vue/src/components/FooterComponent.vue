<template>
  <div>
    <!-- <footer>
            <p>footer</p>
            <p>holaaaaaa</p>
        </footer> -->
    <div class="footer">
      <div id="button"></div>
      <div id="container">
        <div id="cont">
          <div class="footer_center">
            <h3>Classy footer text</h3>
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
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400);

body {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 300;
  background-color: rgb(255, 255, 255);
  color: #fff;
}

section {
  text-align: center;
}

.footer #button {
  width: 30px;
  height: 30px;
  font-size: 60px;
  text-align: center;
  color: #2ecc71;
  margin-left: 20px;
  border: #1b8a20 12px solid;
  border-radius: 50px;
  background-image: url(./icons/right-arrow.png);
  margin: 0 auto;
  margin-bottom: 0px;
  position: relative;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
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
  background: #3a3a3a;
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