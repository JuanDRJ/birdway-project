<template>
  <div>
    <MapasComponent></MapasComponent>
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
