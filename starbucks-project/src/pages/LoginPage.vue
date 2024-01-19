<template>
    <div>
        <LoginPageContent/>
    </div>
</template>

<script lang="ts">
import LoginPageContent from '@/components/LoginPageContent.vue';
import { defineComponent, } from 'vue';


export default defineComponent({
    components: { LoginPageContent }
})
</script>