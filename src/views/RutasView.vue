<template>
  <div>
    <RutasComponent></RutasComponent>
    <p>Hola view</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import RutasComponent from "../components/RutasComponent.vue";

export default defineComponent({
  name: "RutasView",
  components: {
    RutasComponent,
  },
});
</script>
