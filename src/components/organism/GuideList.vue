
<template>
     <div>
         <div class="banner">
           <div class="title-card">
             <div class="img">
                 <img :src="guideImg" alt="">
             </div>
             <div>
                 <h3 class="title">{{guideName}}</h3>
                 <p class="location"> {{guideLocation}}</p>
                 <span class="english">{{guideEnglish}}</span> <span class="routes"> + de {{guideRoutes}} rutas</span>
                 
             </div>
           </div>
           <hr>
           <div><p class="description">"{{guideDescription}}"</p></div>
            
        
        </div>
     </div>
</template>
<style lang="scss" scoped>
 @import '../../assets/style.scss';
.img{ 
    width: 100px;
    height: 100px;
    object-fit: contain;
    display: flex;
    justify-content: center ;
}

.img img{
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
}

.banner{
    display: flex;
    flex-direction: column;
    background: $white;
    padding: 10px;
    width: 360px;
    height: 300px;
    border-radius: 20px;
    margin:5px;
    box-shadow: $box-shadow;
    /* From https://css.glass */
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.78);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.9px);
    -webkit-backdrop-filter: blur(6.9px);
    border: 1px solid rgba(255, 255, 255, 0.35);
    font-family: 'Plus Jakarta Sans', sans-serif;
    box-shadow: rgba(89, 89, 89, 0.17) 0px -23px 25px 0px inset, rgba(144, 144, 144, 0.15) 0px -36px 30px 0px inset, rgba(134, 134, 134, 0.1) 0px -79px 40px 0px inset, rgba(124, 124, 124, 0.06) 0px 2px 1px, rgba(131, 131, 131, 0.09) 0px 4px 2px, rgba(123, 123, 123, 0.09) 0px 8px 4px, rgba(123, 123, 123, 0.09) 0px 16px 8px, rgba(153, 153, 153, 0.09) 0px 32px 16px;

}

.title-card{
    display: flex;
    border-radius: 30px;
}

.title{
    margin: 0px;
    margin-left: 10px;
    font-size: 22px;
}

.location{
    margin: 0px;
    text-align: left;
    margin-left: 10px;
}
.english{
    background-color: $blue;
    color: $white;
    padding: 3px;
    font-size: 12px;
    border-radius: 30px;
}

.routes{
    background-color: $main-color;
    color: $white;
    padding: 3px;
    font-size: 12px;
    border-radius: 30px;
    margin-left: 3px;
}

.description{
    padding: 0px;
}
hr{
    padding: 0px;
    margin-top: 8px;
}
</style>
<script setup>
const props = defineProps({
  guideName: String,
  guideDescription: String,
  guideImg: String,
  guideLocation: String,
  guideLink: String,
  guideEnglish: String,
  guideRoutes: String,
});
</script>

