
<template>
      <div>
        <p>Home component</p>
        <MainButton inner-text="Main buton"/>
       <SecondaryButton inner-text="My secondary"/>
      </div>
</template>

<style scoped>
 
</style>

<script setup>
  import MainButton from './atoms/buttons/MainButton.vue';
  import SecondaryButton from './atoms/buttons/SecondaryButton.vue';
</script>
    