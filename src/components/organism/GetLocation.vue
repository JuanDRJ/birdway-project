<template>
  <div>
    <p>{{latitude}} & {{ longitude }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      latitude: "hola",
      longitude: "longitude",
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

    }
  }
};
</script>