<template>
  <div>
    <RutasComponent></RutasComponent>
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
