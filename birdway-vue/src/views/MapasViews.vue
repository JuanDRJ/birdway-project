<template>
    <div>
        <h1>mapas view</h1>
        <MapasComponent></MapasComponent>
    </div>
</template>


<script>
    import { defineComponent } from 'vue';
    import MapasComponent from '../components/MapasComponent.vue'

export default defineComponent({
  name: 'MapasView',
  components: {
    MapasComponent,
  },
});
</script>