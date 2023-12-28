<template>
    <div>
        <NavBar />
        <StarbucksRewardContent/>
        
    </div>
</template>


<script lang="ts">
import NavBar from '@/components/NavBar.vue';
import StarbucksRewardContent from '@/components/StarbucksRewardPageComponents/StarbucksRewardContent.vue';
 
import { defineComponent } from 'vue';

export default defineComponent({

    setup() {

    },
    components: { NavBar,StarbucksRewardContent }

})
</script>