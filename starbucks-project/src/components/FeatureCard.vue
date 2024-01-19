<template>
    <q-card flat v-for="feature in featureCardList" :key="feature.id">
        <div class="row flex justify-between q-my-md">
            <div class="col">
                <img style="width: 95%;" :src="require(`@/assets/features/${feature.url}`)" />
            </div>
            <div class="col-6 ">
                <h6 class="text-weight-bold">{{ feature?.title }}</h6>
                <p>
                    {{ feature?.content }}
                </p>
            </div>
        </div>
    </q-card>
</template>

<script lang="ts">
import FeatureCardItem from '@/types/FeatureCardItem';
import { defineComponent, reactive, toRefs } from 'vue';
import { mapActions,mapState } from 'pinia';
import { authStore } from "@/stores/index"


export default defineComponent({
 
    async created() {
        this.setFeatureCard()
        this.featureCardList = this.getFeatureCardList
    },
    
    unmounted(){
        this.clearFeatureCardList()
        this.featureCardList = this.getFeatureCardList
    },

    methods:{
        ...mapActions(authStore,["setFeatureCard","clearFeatureCardList"])
    },

    setup() {
        const state = reactive({
            featureCardList: [] as FeatureCardItem[],
        })

        return { ...toRefs(state) }
    },

    computed:{
        ...mapState(authStore,["getFeatureCardList"])
    }

})
</script>