
<template>
  <nav class="main-nav">
    <div class="logo">
      <router-link to="/">
        <img
          class="nav-logo"
          src="../assets/brand/LOGO/darkgreen.png"
          alt="logo_birdway"
        />
      </router-link>
    </div>
    <div class="nav-list">
      <router-link class="nav-a" to="/">INICIO</router-link>
      <router-link class="nav-a" to="/rutas">RUTAS</router-link>
      <router-link class="nav-a" to="/guias">GUÍAS</router-link>
      <router-link class="nav-a" to="/mapa">MAPA INTERACTIVO</router-link>
    </div>
  <!--   search -->
    <div class="search-container">
      <input placeholder="Buscar Rutas" class="search-bar" type="text" />
      <button>
        <span class="material-symbols-outlined"> search </span>
      </button>
    </div>
    <!--  DROP DOWN -->
  </nav>
</template>

<script>
</script>

<style>
.main-nav {
  background-color: #ffffff;
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  align-items: center;
  height: 4em;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.logo {
  justify-self: flex-start;
  margin-bottom: 10px;
}
.nav-list {
  display: flex;
  gap: 20px;
}
.nav-a {
  text-decoration: none;
  color: #21882d;
  margin: auto;
  margin-left: 10px;
  padding: 2px;
}

.nav-a:visited {
  color: #21882d;
}

.nav-a:hover {
  /* color: #f7ce40; */
  transition: 600ms ease-out;
  color: #fff;
  box-shadow: inset 300px 0 0 0 #21882d;
}

.search-container {
  display: flex;
  background: #ffffff;
  width: 300px;
  height: 4em;
  align-items: center;
  justify-content: center;
}
.search-bar {
  height: 2.5em;
  margin: 0;
  margin-left: 2px;
  padding: 1em;
  align-self: center;
  max-width: 400px;
  min-width: 250px;
  border: none;
  border-radius: 15px;
  border-bottom: #1e392a;
  margin-left: 10px;
}

input:focus {
  outline: none;
  background: #f4ffb6;
  transition: 300ms ease;
}

.nav-logo {
  width: 12em;
  justify-items: flex-start;
  margin-top: 10px;
  padding: 10px;
}

.search-container button {
  height: 4em;
  margin-left: 5px;
  background: #ffffff;
  color: rgb(82, 82, 82);
  width: 100px;
  border: none;
  border-right: #f7ce40 2px solid;
}
.search-container button:hover {
  /*  height: 4em; */
  background: #24995e;
  color: white;

  width: 100px;
  transition: 300ms ease;
}
/* .border-search{
    padding: 5px;
    display: flex;
    align-items: center  ;
} */
/* DROP DOWN STYLE */
</style>


