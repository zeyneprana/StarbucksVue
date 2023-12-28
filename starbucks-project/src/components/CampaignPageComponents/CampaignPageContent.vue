<template>
    <div class="row">
        <StarbucksLeftSide />
        <div class="mt-6 col q-mx-md">
            <h6 class="text-bold mt-5">STARBUCKS® REWARDS</h6>
            <StarbucksProfile />
            <FeatureCard />
            <FooterSide/>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import StarbucksLeftSide from "../StarbucksRewardPageComponents/StarbucksLeftSide.vue"
import StarbucksProfile from '../StarbucksRewardPageComponents/StarbucksProfile.vue';
import FeatureCard from '../FeatureCard.vue';
import FooterSide from '../FooterSide.vue';


export default defineComponent({

    components: { StarbucksLeftSide, StarbucksProfile, FeatureCard, FooterSide }
})
</script>