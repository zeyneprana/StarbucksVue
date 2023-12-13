<template>
    <footer>
        <FooterContent />
        <q-separator class="q-my-sm " />
        <SocialMediaContent />
        <FooterInfo />
    </footer>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import FooterContent from "./FooterContent.vue"
import FooterInfo from "./FooterInfo.vue";
import SocialMediaContent from "./SocialMediaContent.vue";

export default defineComponent({

    setup() {

    },


    components: { FooterContent, SocialMediaContent, FooterInfo }
})
</script>