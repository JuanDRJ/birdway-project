<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
 
</script>


<template>
  <body>
    <div id="app">
      <nav>
        <router-link to="/">[HOME]</router-link>
        
        <router-link to="/about">about</router-link>
      </nav>
    
      <router-view></router-view>
    
      <div>
        <FooterComponent></FooterComponent>
      </div>
      
    </div>
  </body>

</template>

<script>
  import FooterComponent from './components/FooterComponent.vue';
</script>


<style scoped>
*{
  color: #000;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}

body{
  width: 99vw ;
}
</style>
