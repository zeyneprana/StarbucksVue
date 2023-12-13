<template>
    <div >
        <div class="flex row justify-between">
            <LeftSide />

            <RightSide class="q-mx-md" />
        </div>
    </div>
</template>


<script>
import LeftSide from './LeftSide.vue';
import RightSide from './RightSide.vue';

export default {
    
    components: { LeftSide,RightSide }
}
</script>