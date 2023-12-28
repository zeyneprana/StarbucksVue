<template>
    <div>
      <NavBar/>
      <ContentSide/>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import NavBar from '../components/NavBar.vue';
  import ContentSide from '../components/ContentSide.vue';
  
  export default defineComponent({
    name: 'App',
    components: {
      NavBar,ContentSide
  }
  });
  </script>
  
  
  