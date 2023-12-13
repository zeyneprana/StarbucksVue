<template>
    <footer >
        <FooterContent/>
        <q-separator class="q-my-sm "/>
        <SocialMediaContent />
        <FooterInfo />
    </footer>
</template>


<script>
import FooterContent from "./FooterContent.vue"
import FooterInfo from "./FooterInfo.vue";
import SocialMediaContent from "./SocialMediaContent.vue";
export default {
    
    setup(){
        
    },
    
   
    components:{ FooterContent, SocialMediaContent, FooterInfo }
}
</script>