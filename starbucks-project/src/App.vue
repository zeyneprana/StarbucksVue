<template>
  <div>
    <NavBar />
    <ContentSide class="mt-5" />
  </div>

  
</template>

<script>
import ContentSide from "./components/ContentSide.vue";
import NavBar  from "./components/NavBar.vue";

export default {
  data() {
    return {
      
    }
  },

  components:{ NavBar, ContentSide }
}
</script>