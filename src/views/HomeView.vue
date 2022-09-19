<template>
    <div>
      <HomeComponent/> 
      <p>Vista home</p>  
    </div> 
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