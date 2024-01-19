<template>
    <div>
        <NavBar />
        <StarbucksRewardContent />

    </div>
</template>


<script lang="ts">
import NavBar from '@/components/NavBar.vue';
import StarbucksRewardContent from '@/components/StarbucksRewardPageComponents/StarbucksRewardContent.vue';

import { mapActions } from 'pinia';
import { authStore } from "@/stores/index"

import { defineComponent } from 'vue';

export default defineComponent({

    created() {
        this.setRewardList()
    },

    unmounted() {
        this.clearRewardList()
    },

    methods: {

        ...mapActions(authStore, ["setRewardList", "clearRewardList"])
    },

    components: { NavBar, StarbucksRewardContent }

})
</script>