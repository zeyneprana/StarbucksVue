<template>
    <div>
        <NavBar />
        <BasketPageContent />
    </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import NavBar from '../components/NavBar.vue';
import BasketPageContent from '@/components/BasketPageContent.vue';



export default defineComponent({


    

    components: { NavBar, BasketPageContent }
})
</script>