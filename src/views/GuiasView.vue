<template>
  <div>
    <h1>guias view</h1>
    <GuiasComponent></GuiasComponent>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import GuiasComponent from "../components/GuiasComponent.vue";

export default defineComponent({
  name: "GuiasView",
  components: {
    GuiasComponent,
  },
});
</script>
