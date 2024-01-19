<template>
    <div class="row justify-center">
        <div class="col-2 text-center" v-for="product in getProductList" :key="product?.id">
            
                <div class="q-my-lg q-pa-sm">
                    <div class="col">
                        <div class="photo-section">
                            <img class="q-mx-auto" :src="require(`@/assets/products/${product?.url}`)">
                        </div>
                        <div class="col content-section q-mx-lg q-my-md">
                            <p>{{ product?.title }}</p>
                        </div>
                        <div v-if="isAuth">
                            <q-btn @click="addBasket(product)" color="green" label="Sepete ekle" />
                        </div>
                    </div>
                </div>
        </div>
    </div> 
</template>

<script lang="ts">
import Product from '@/types/ProductItem';
import { defineComponent, reactive, toRefs } from 'vue';
import { mapState,mapActions } from 'pinia';
import { authStore } from "@/stores/index"

 export default defineComponent({

    async created() {

        //@ts-ignore
        this.email = this.getUser?.email;
        
    },

    setup() {

        const state = reactive({
            email:"",
            productList: [] as Product[]
        })

        return { ...toRefs(state) }

    },

    methods:{

        addBasket(product:Product){

            this.addToBasket(product,this.email)

        },

        ...mapActions(authStore,["addToBasket","setProductList"])
    },

    computed: {
        ...mapState(authStore, ["isAuth","getUser","getProductList"])
    }


})
</script>