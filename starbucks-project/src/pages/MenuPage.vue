<template>
    <div>
        <NavBar />
        <StarbucksMenuPageContent />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { mapActions } from 'pinia';
import { authStore } from "@/stores/index"

import StarbucksMenuPageContent from '../components/MenuPageComponents/StarbucksMenuPageContent.vue';
import NavBar from '../components/NavBar.vue';

export default defineComponent({

    created() {
        this.setProductList()
    },

    unmounted() {
        this.clearProductList()
    },
    
    
    methods: {

        

        ...mapActions(authStore, ["setProductList","clearProductList"])
    },


    
    components: { NavBar, StarbucksMenuPageContent } 
})
</script>