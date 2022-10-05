<template>
  <div class="main-div">
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
<style lang="scss" scoped>
  @import '../assets/style.scss';
  .main-div{
    background-color: $blue;
  }
</style>