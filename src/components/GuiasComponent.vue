<template>
 <div class="main-container" >
   <div class="header">
      <h1>Selecciona el guía para iniciar tu aventura</h1><span class="material-symbols-outlined">hiking</span>
   </div>
    <div class="guides-container">
         <GuideList class="guide-banner" guide-name="Felipe Cardona" guide-location="Pensilvania Caldas" guide-english="Inglés Básico" guide-routes="5" guide-description="Soy apasionado por la observación de aves y la educación ambiental, llevo 5 años pajareando y 10 años trabajé en pro de la conservación de áreas protegidas." guide-img="https://static.wixstatic.com/media/2476b3_8f38e1e4e1ca429e99aeceee1c22ed3f~mv2.jpg/v1/crop/x_25,y_0,w_250,h_300/fill/w_269,h_323,al_c,lg_1,q_80,enc_auto/felipe_cardona.jpg"/>
      
      <GuideList class="guide-banner" guide-name="Pablo César Calderón" guide-english="Inglés Avanzado" guide-routes="7" guide-location="Manizales Caldas" guide-description="Guai de naturaleza con conocimiento en alta montaña y aves, disfruto descubriendo nuevos  territorios y admirando las aves como herramienta para la transformación social y espiritual. " guide-img="https://static.wixstatic.com/media/2476b3_ffec6d51b7d14304b448bedbec816301~mv2.jpg/v1/crop/x_25,y_0,w_250,h_300/fill/w_269,h_323,al_c,lg_1,q_80,enc_auto/pablo_cesar.jpg"/>
      
      <GuideList class="guide-banner" guide-name="Cesar Agudelo" 
      guide-english="Inglés Intermedio" guide-routes="3" guide-location="Chinchina Caldas" guide-description="Certificado por el Sena en guianza" guide-img="https://www.cdbradshaw.com/wp-content/uploads/2021/07/generic-avatar.jpg"/>
      
      <GuideList class="guide-banner" guide-name="Orlando Salazar García" 
      guide-english="Inglés Avanzado" guide-routes="7" guide-location="Chinchina Caldas" guide-description="Tengo Certificación de Avistador de Aves, por el SENA, Manizales.Experiencia en campo con mallas niebla,Y deseo contribuir con la conservación de aves y árboles nátivos.." guide-img="https://static.wixstatic.com/media/2476b3_924a4a5632a348a2be5cc8a8a5610ed1~mv2.jpg/v1/crop/x_25,y_0,w_250,h_300/fill/w_269,h_323,al_c,lg_1,q_80,enc_auto/orlando_salazar.jpg"/>

      <GuideList class="guide-banner" guide-name="Diana Montes " guide-english="Inglés Avanzado" guide-routes="7" guide-location="Manizales Caldas" guide-description="Soy una joven que me encanta la naturaleza y dar a conocer de ella sobre todo inculcar a la comunidad estrategias en pro de la conservación " guide-img="https://static.wixstatic.com/media/2476b3_9d6f58b8882c401ba8d740b0d1e30f3b~mv2.jpg/v1/crop/x_25,y_0,w_250,h_300/fill/w_269,h_323,al_c,lg_1,q_80,enc_auto/alejandra_montes.jpg"/>

      <GuideList class="guide-banner" guide-name="Julián parra" guide-english="Inglés Avanzado" guide-routes="7" guide-location="Bahía Solano - Chocó " guide-description="Guía de aviturismo aproximadamente 8 años experto en aves presto el mejor servicio posible en esta región de bahía solano me gusta recorrer las selvas chocoanas junto con mis clientes, y descubrir nuevas especies para la región" guide-img="https://www.cdbradshaw.com/wp-content/uploads/2021/07/generic-avatar.jpg"/>

      <GuideList class="guide-banner" guide-name="Arbey Gallego"  guide-english="Inglés Avanzado" guide-routes="7" guide-location="Chinchina caldas" guide-description="Soy amante de la naturaleza, me gusta mucho enseñar mi poco conocimiento , conocer muchos sitios donde tenga muchas aves para avistar" guide-img="https://www.cdbradshaw.com/wp-content/uploads/2021/07/generic-avatar.jpg"/>


      <GuideList class="guide-banner" guide-name="Javier Cañon" guide-english="Inglés Avanzado" guide-routes="7" guide-location="Victoria Caldas " guide-description="Soy admirador de la flora y fauna que tenemos en Colombia.Gracias a eso he logrado compartir experiencias con visitantes extranjeros y nacionales que disfrutan capturar escenas y momentos, únicos que solo disfrutamos los amantes de la naturaleza." guide-img="https://static.wixstatic.com/media/2476b3_3b177c66ab34437b9c14edd12aacd4c7~mv2.jpg/v1/crop/x_14,y_0,w_272,h_300/fill/w_310,h_342,al_c,lg_1,q_80,enc_auto/edison_canon.jpg"/>

      <GuideList class="guide-banner" guide-name="Daniel Romero" guide-location="Manizales Caldas " guide-description="Soy amante de las aves desde siempre, me encanta estar rodeado del bosque y de ambientes naturales observando la avifauna." guide-img="https://www.cdbradshaw.com/wp-content/uploads/2021/07/generic-avatar.jpg"/>

      <GuideList class="guide-banner" guide-name="Luis Alfredo Ramírez" guide-english="Inglés Avanzado" guide-routes="7" guide-location="Chinchiná Caldas" guide-description="Soy viajero por la Naturaleza y observador de sus componentes bióticos  y abióticos , la flora y la fauna. Además de los accidentes geográficos." guide-img="https://static.wixstatic.com/media/2476b3_dbd5b25c36e9418298dc90d8bf9a0c02~mv2.jpg/v1/crop/x_14,y_0,w_272,h_300/fill/w_310,h_342,al_c,lg_1,q_80,enc_auto/alfredo-ramirez.jpg"/>

      <GuideList class="guide-banner" guide-name="Cristian Fernandez" guide-english="Inglés Avanzado" guide-routes="7" guide-location="Victoria Caldas" guide-description="Soy una persona proactiva y aventurera, trabajo en la parte contable y desde hace nueve años empecé en la observación de aves." guide-img="https://www.cdbradshaw.com/wp-content/uploads/2021/07/generic-avatar.jpg"/>

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
 :hover{
   transform: translateY(-5px);
   transition: all 300ms;
 }

}


.main-container{
   background-size: cover;
   background-color: $dark-blue;
}


</style>