<template>
    <HomeComponent/>    
</template>

<script>
    import { defineComponent } from 'vue';
    import HomeComponent from '../components/HomeComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HomeComponent,
  },
});
</script>