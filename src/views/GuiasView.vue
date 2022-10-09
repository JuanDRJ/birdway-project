<template>
  <div class="main-div">
    <GuiasComponent class="guias-component"></GuiasComponent>
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
    background-color: $white;
  }
  .guias-component{
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