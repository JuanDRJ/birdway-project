<template>
    <nav class="main-nav">
        <router-link class="nav-a" to="/">[HOME]</router-link>
        <router-link class="nav-a" to="/about">about</router-link>
    </nav>
</template>

<script>
</script>

<style>
.main-nav{
  background-color: green ;
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  height: 2.5em;
  color: blue;
}

.nav-a{
    text-decoration: none;
}

.nav-a:hover{
  color: greenyellow;
}

</style>