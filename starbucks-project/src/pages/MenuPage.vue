<template>
    <div >
        <NavBar />
        <StarbucksMenuPageContent/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StarbucksMenuPageContent from '../components/MenuPageComponents/StarbucksMenuPageContent.vue';

import NavBar from '../components/NavBar.vue';

export default defineComponent({
    components: { NavBar,StarbucksMenuPageContent }
})
</script>