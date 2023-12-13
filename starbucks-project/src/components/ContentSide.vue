<template>
    <div >
        <div class="flex row justify-between">
            <LeftSide />

            <RightSide class="q-mx-md" />
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import LeftSide from './LeftSide.vue';
import RightSide from './RightSide.vue';

export default defineComponent({
    setup(){

    },
    components: { LeftSide,RightSide }
})
</script>