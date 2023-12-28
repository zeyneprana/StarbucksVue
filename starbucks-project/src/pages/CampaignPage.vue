<template>
    <div >
        <NavBar />
        <CampaignPageContent />
    </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import NavBar from '../components/NavBar.vue';
import CampaignPageContent from '../components/CampaignPageComponents/CampaignPageContent.vue';


export default defineComponent({
    
    components: {  NavBar,CampaignPageContent }
})
</script>