<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
 
</script>


<template>
  <body>
    <div id="app">
      <HeaderComponent></HeaderComponent>
      <router-view></router-view>
    
      <div>
        <FooterComponent></FooterComponent>
      </div>
      
    </div>
  </body>

</template>

<script>
  import FooterComponent from './components/FooterComponent.vue';
  import HeaderComponentVue from './components/HeaderComponent.vue';
</script>


<style>

*{
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

body{
  width: 100vw ;
  overflow-x: hidden;
}

.main-nav{
  background-color: green ;
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  height: 2.5em;
  color: blue;
}

.nav-a:hover{
  color: greenyellow;
}
</style>
