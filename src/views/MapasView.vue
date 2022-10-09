<template>
  <div>
    <MapasComponent class="mapas-component"></MapasComponent>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MapasComponent from "../components/MapasComponent.vue";

export default defineComponent({
  name: "MapasView",
  components: {
    MapasComponent,
  },
});
</script>

<style lang="scss" scoped>
.mapas-component{
  animation-name: fade1;
  animation-duration: 1s;
  @keyframes fade1 {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
}
}
</style>
