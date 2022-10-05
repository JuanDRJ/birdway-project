<template>
  <div>
    <select v-model="ruta">
      <option value="www.manizales.com">option 1</option>
      <option value="www.villamaria.com">option 2</option>
      <option value="ww.chinchina.com">option 3</option>
    </select>

    <input v-model="nombre" type="text">

    <h1>{{ruta}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      latitude: "hola",
      longitude: "longitude",
      ruta: 'string',
      nombre: 'string'
    };
  },
  mounted() {

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
        
      } else {
        console.log("Geolocation is not supported by this browser.") ;
      }
    }

    function showPosition(position) {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
    }
    getLocation();
  },
  methods:{
    printLocation(){

    },

  }
};
</script>