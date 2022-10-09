<template>
 <div class="main-container" >
   <div class="header">
      <h1>Selecciona el guía para iniciar tu aventura</h1><span class="material-symbols-outlined">hiking</span>
   </div>
    <div class="guides-container">
         <GuideList class="guide-banner" guide-name="Felipe Cardona" guide-location="Pensilvania Caldas" guide-english="Inglés Básico" guide-routes="5" guide-description="Soy apasionado por la observación de aves y la educación ambiental, llevo 5 años pajareando y 10 años trabajé en pro de la conservación de áreas protegidas." guide-img="https://st.depositphotos.com/2069237/2231/i/600/depositphotos_22312937-stock-photo-hiker-man-hiking-in-forest.jpg"/>
      
      <GuideList class="guide-banner" guide-name="Pablo César Calderón" guide-location="Manizales Caldas" guide-description="Guai de naturaleza con conocimiento en alta montaña y aves, disfruto descubriendo nuevos  territorios y admirando las aves como herramienta para la transformación social y espiritual. " guide-img="#"/>
      
      <GuideList class="guide-banner" guide-name="Cesar Agudelo" guide-location="Chinchina Caldas" guide-description="Certificado por el Sena en guianza" guide-img="#"/>
      
      <GuideList class="guide-banner" guide-name="Orlando Salazar García" guide-location="Chinchina Caldas" guide-description="Tengo Certificación de Avistador de Aves, por el SENA, Manizales.Experiencia en campo con mallas niebla,Y deseo contribuir con la conservación de aves y árboles nátivos.." guide-img="#"/>

      <GuideList class="guide-banner" guide-name="Diana Montes " guide-location="Manizales Caldas" guide-description="Soy una joven que me encanta la naturaleza y dar a conocer de ella sobre todo inculcar a la comunidad estrategias en pro de la conservación " guide-img="#"/>

      <GuideList class="guide-banner" guide-name="Julián parra" guide-location="Bahía Solano - Chocó " guide-description="Guía de aviturismo aproximadamente 8 años experto en aves presto el mejor servicio posible en esta región de bahía solano me gusta recorrer las selvas chocoanas junto con mis clientes, y descubrir nuevas especies para la región" guide-img="#"/>

      <GuideList class="guide-banner" guide-name="Arbey Gallego" guide-location="Chinchina caldas" guide-description="Soy amante de la naturaleza, me gusta mucho enseñar mi poco conocimiento , conocer muchos sitios donde tenga muchas aves para avistar" guide-img="#"/>


      <GuideList class="guide-banner" guide-name="Javier Cañon" guide-location="Victoria Caldas " guide-description="Soy admirador de la flora y fauna que tenemos en Colombia.Gracias a eso he logrado compartir experiencias con visitantes extranjeros y nacionales que disfrutan capturar escenas y momentos, únicos que solo disfrutamos los amantes de la naturaleza." guide-img="#"/>

      <GuideList class="guide-banner" guide-name="Daniel Romero" guide-location="Manizales Caldas " guide-description="Soy amante de las aves desde siempre, me encanta estar rodeado del bosque y de ambientes naturales observando la avifauna." guide-img="#"/>

      <GuideList class="guide-banner" guide-name="Luis Alfredo Ramírez" guide-location="Chinchiná Caldas" guide-description="Soy viajero por la Naturaleza y observador de sus componentes bióticos  y abióticos , la flora y la fauna. Además de los accidentes geográficos." guide-img="#"/>

      <GuideList class="guide-banner" guide-name="Cristian Fernandez" guide-location="Victoria Caldas" guide-description="Soy una persona proactiva y aventurera, trabajo en la parte contable y desde hace nueve años empecé en la observación de aves." guide-img="#"/>

    </div>
 </div>
</template>


<script setup>
import GuideList from './organism/GuideList.vue';

</script>
<style lang="scss" scoped>
   @import '../assets/style.scss';

   .header{
      height: 20%;
      padding: 40px;
      text-align: center;
      color: $white;
      display: flex;
      justify-content: center;
      span{
         margin: 5px 0px 0px 0px;
         font-size: 40px;
      }
      h1{
         font-family: 'Bree Serif' serif;
      }
   }
.guides-container{
  display: grid;
  grid-template-columns: auto auto auto;
  justify-items: center;
 
 
}
.guide-banner{
 /*  border: 1px solid rgba(0, 0, 0, 0.8); */
  padding: 0px;
  text-align: center;
  transition: 300ms ease-out;
 

}


.main-container{
   background-size: cover;
   background-color: $dark-blue;
}


</style>