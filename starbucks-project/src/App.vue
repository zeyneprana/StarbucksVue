<template>
  <div>
    <NavBar />
    <ContentSide />
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