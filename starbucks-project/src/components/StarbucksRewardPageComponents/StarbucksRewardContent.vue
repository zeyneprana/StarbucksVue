<template>
    <div class="row">
        <StarbucksLeftSide />
        <StarbucksRightSide />

    </div>

    
</template>


<script lang="ts">

import { defineComponent } from 'vue';
import StarbucksLeftSide from "./StarbucksLeftSide.vue"
import StarbucksRightSide from './StarbucksRightSide.vue';

export default defineComponent({

    setup() {

    },
    components: { StarbucksLeftSide, StarbucksRightSide }

})
</script>