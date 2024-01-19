<template>
    <div class="col-6 mt-5 ml-5 ">
        <CampaignCard class="q-my-md" />
        <FeatureCard />
        <q-separator class="q-my-lg" />
        <FooterSide />
        {{ getUser }}
    </div>
</template>


<script lang="ts">
import CampaignCard from './CampaignCard.vue';
import FeatureCard from './FeatureCard.vue';
import FooterSide from './FooterSide.vue';
import { mapState } from 'pinia';
import { authStore } from "@/stores/index"

import { defineComponent} from 'vue';

export default defineComponent({
    
    components: { CampaignCard, FeatureCard, FooterSide },
    computed:{
        ...mapState(authStore,["getUser"])
    }

})
</script>