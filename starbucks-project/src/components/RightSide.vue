<template>
    <div class="col-6 mt-5 ml-5">
        <CampaignCard v-for="i in 10" :key="i"/>
    </div>
</template>


<script>
import CampaignCard from './CampaignCard.vue';

export default {
    components: { CampaignCard }
}
</script>