<template>
    <div class="col q-mx-md q-my-lg">
        <div class="q-ma-lg">
            <h5>.</h5>
        </div>
        
       <StarbucksText />
       <RewardInfo />
       <StarCode />
       <StarbucksApp />
       <StarbucksProfile />
       <StarbucksMembership/>
       <StarbucksHelp />
        

        <FooterSide />
    </div>
</template>


<script lang="ts">

import { defineComponent } from 'vue';
import FooterSide from '../FooterSide.vue';
import StarbucksText from './StarbucksText.vue';
import RewardInfo from './RewardInfo.vue';
import StarCode from './StarCode.vue';
import StarbucksApp from './StarbucksApp.vue';
import StarbucksProfile from './StarbucksProfile.vue';
import StarbucksMembership from './StarbucksMembership.vue';
import StarbucksHelp from './StarbucksHelp.vue';



export default defineComponent({
    setup() {
    },
    components: { FooterSide, StarbucksText, RewardInfo, StarCode, StarbucksApp, StarbucksProfile, StarbucksMembership, StarbucksHelp }
})
</script>

