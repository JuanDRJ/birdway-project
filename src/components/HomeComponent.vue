
<template>
      <div>
        <!-- <p>Home component</p>
        <MainButton inner-text="Main buton"/>
        <SecondaryButton inner-text="My secondary"/> -->

        <!-- <BirdCard/> -->

        <GridCards/>
      </div>
</template>

<style scoped>
 
</style>

<script setup>
  import MainButton from './atoms/buttons/MainButton.vue';
  import SecondaryButton from './atoms/buttons/SecondaryButton.vue';
  import BirdCard from './molecules/cards/BirdCard.vue'
  import GridCards from './organism/GridCards.vue';
</script>
    