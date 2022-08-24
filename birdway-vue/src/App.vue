<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

</script>


<template>
  <div id="app">
    <nav>
      <router-link to="/">[HOME]</router-link>
      
      <router-link to="/about">about</router-link>
    </nav>

    <router-view></router-view>
  </div>


</template>

<style scoped>
*{
  color: #000;
}
</style>
