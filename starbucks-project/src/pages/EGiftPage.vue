<template>
    <div>

        <NavBar />
        <EGiftPageContent />

    </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import NavBar from '../components/NavBar.vue';
import EGiftPageContent from '../components/E-GiftPageComponents/EGiftPageContent.vue';



export default defineComponent({

    components: {  NavBar,EGiftPageContent }
})
</script>