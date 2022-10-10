<template>
  <div>
    <!-- <p>Home component</p>
        <MainButton inner-text="Main buton"/>
        <SecondaryButton inner-text="My secondary"/> -->

    <!-- <BirdCard/> -->

    <MainHead class=""></MainHead>
    <HomeHeader class="reveal" />
    <InfoHome class="reveal"></InfoHome>
    <CarrouselBt class="reveal"></CarrouselBt>
    <HomeAbout class="reveal" />
    <HomeSlider class="reveal"></HomeSlider>
    <AliadosList class="reveal"></AliadosList>
    <img class="reveal" src="../assets/brand/birds.jpg" alt="">
  </div>
</template>

<style lang="scss" scoped>
  .reveal{
    position: relative;
    opacity: 0.1;
    transition: all 3s ;
    transform: translateY(50px);
  }

  .reveal.active{
    transition: all 2s ;
    opacity: 1;
    transform: translateY(0px);
  }
</style>

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
import AliadosList from "./molecules/cards/AliadosList.vue";
import CarrouselBt from "./molecules/cards/CarrouselBt.vue";

window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  for(var i = 0; i< reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight -revealpoint){
      reveals[i].classList.add('active');
     
    } else{
      reveals[i].classList.remove('active');
    }
  }
}
</script>
