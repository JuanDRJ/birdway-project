<template>
  <div>
    <!-- <p>Home component</p>
        <MainButton inner-text="Main buton"/>
        <SecondaryButton inner-text="My secondary"/> -->

    <!-- <BirdCard/> -->
    

    <MainHead></MainHead>
    <HomeHeader />
    <InfoHome></InfoHome>
    <HomeAbout />
    
    <HomeSlider></HomeSlider>

  </div>
</template>

<style scoped></style>

<script setup>
import MainButton from "./atoms/buttons/MainButton.vue";
import SecondaryButton from "./atoms/buttons/SecondaryButton.vue";
import BirdCard from "./molecules/cards/BirdCard.vue";
import GridCards from "./organism/GridCards.vue";
import HomeHeader from "./organism/HomeHeader.vue";
import HomeAbout from "./organism/HomeAbout.vue";
import HomeSlider from "./organism/HomeSlider.vue";
import MainHead from "./molecules/cards/MainHead.vue";
import InfoHome from "./molecules/cards/InfoHome.vue";
</script>
