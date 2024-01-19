<template>
    <div>
        <div class="mt-6">a</div>
        <div class="flex" v-for="dbItem in getBasketList" :key="dbItem.id">

            <div class="photo-section">
                <img class="q-mx-auto" :src="require(`@/assets/products/${dbItem?.url}`)">
            </div>
            <p class="mt-5">{{ dbItem.title }}</p>

        </div>




    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { mapState, mapActions } from 'pinia';
import { authStore } from "@/stores/index"
import Product from '@/types/ProductItem';

export default defineComponent({
    setup() {

        const state = reactive({

            dbBasketList: [] as Product[]

        })
        return { ...toRefs(state) }

    },

    created() {
        //@ts-ignore
        this.setBasketList()

        this.getBasketList?.forEach((item) => {
            this.dbBasketList.push(item)
        })

    },

    unmounted() {
        this.clearBasketList()
    },

    methods: {
        ...mapActions(authStore, ["setBasketList", "clearBasketList"])
    },


    computed: {
        ...mapState(authStore, ["getBasketList", "getUser"])
    },

    components: {}
})
</script>

