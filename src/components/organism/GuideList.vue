
<template>
   <div>
      <div class="banner">
         <div class="img">
             <img :src="guideImg" alt="">
         </div>
         <div>
             <h3 class="title">{{guideName}}</h3>
             <p class="location"> {{guideLocation}}</p>
             <p class="description">"{{guideDescription}}"</p>
         </div>
         
    
     </div>
   </div>
</template>
<style lang="scss" scoped>
 @import '../../assets/style.scss';
.img{
    border-radius: 50%;
    
    width: 100px;
    height: 100px;
    object-fit: contain;
    display: flex;
    justify-content: center ;
}

.img img{
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 5px $main-color solid;
}

.banner{
    display: flex;
    background: $white;
    padding: 10px;
    width: 500px;
    height: 240px;
    border-radius: 20px;
    margin:5px;

}
</style>
<script setup>
const props = defineProps({
  guideName: String,
  guideDescription: String,
  guideImg: String,
  guideLocation: String,
});
</script>

