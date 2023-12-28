<template>
    <div class="row justify-center">
        <div class="col-2 text-center" v-for="product in productList" :key="product.id">
            <a class="text-decoration-none" href="#">
                <div class="q-my-lg q-pa-sm">
                <div class="col">
                    <div class="photo-section">
                        <img class="q-mx-auto" :src="require(`@/assets/products/${product?.url}`)">
                    </div>
                    <div class="col content-section q-mx-lg q-my-md">
                        <p>{{ product.title }}</p>
                    </div>
                </div>
            </div>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import Product from '@/types/ProductItem';
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({

    setup() {

        const state = reactive({

            productList: [
                { id: 1, url: "product1.png", title: "Caffè Latte", content: "Zengin espresso, buharla ısıtılmış kadifemsi süt ve süt köpüğünün dengeli buluşması", price: 25 },
                { id: 2, url: "product2.png", title: "Caffè Americano", content: "Sıcak su ile inceltilmiş yoğun espresso lezzeti", price: 35 },
                { id: 3, url: "product3.png", title: "Buzlu Caramel Macchiato", content: "Vanilya şurubu, soğuk süt, buz, espresso ve üzerine karamel sosla sunulur.", price: 20 },
                { id: 4, url: "product4.png", title: "Türk Kahvesi", content: " Starbucks Veranda Blend çekirdek kahvesi ile yorumlanan geleneksel Türk Kahvesi", price: 30 },
                { id: 5, url: "product5.png", title: "Caffè Misto", content: "(Sütlü Filtre Kahve) Demlenmiş, dengeli, yoğun filtre kahve ve süt", price: 40 },
                
            ] as Product[]
        })

        return { ...toRefs(state) }

    },

    props: ["product"]
})
</script>