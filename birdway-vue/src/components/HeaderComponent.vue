
<template>
  <nav class="main-nav">
    <div class="logo">
      <router-link to="/">
        <img
          class="nav-logo"
          src="../assets/brand/LOGO/yellowbirdway-reverse2.png"
          alt="logo_birdway"
        />
      </router-link>
    </div>
    <div class="nav-list">
      <router-link class="nav-a" to="/">[HOME]</router-link>
      <router-link class="nav-a" to="/about">[ABOUT]</router-link>
    </div>

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
  background-color: #1a0317;
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  align-items: center;
  height: 4em;
  color: #fff;
}

.logo {
  justify-self: flex-start;
}
.nav-list {
  display: flex;
  gap: 10px;
}
.nav-a {
  text-decoration: none;
  color: #1e392a;
  margin: auto;
  margin-left: 10px;
}

.nav-a:visited {
  color: white;
}

.nav-a:hover {
  color: #f7ce40;
  transition: 300ms ease-out;
}

.search-container {
  display: flex;
  background: #6c3666;
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
  background: #580b4e;
  color: white;
  width: 100px;
  border: none;
  border-right: #f7ce40 2px solid;
}
.search-container button:hover {
  /*  height: 4em; */
  background: #721766;
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


