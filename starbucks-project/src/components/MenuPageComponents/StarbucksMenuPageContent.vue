<template>
    <div class="row mt-6 q-ml-lg">

        <div class="q-mt-lg q-mx-md border-bottom-green">Menü </div>
        <div class="q-mt-lg q-mx-md"> Favoriler </div>
        <div class=" q-mt-lg q-mx-md"> Öne Çıkanlar </div>
    </div>

    <div class="row  q-ml-lg ">

        <div class="col-2">
            <StarbucksMenuSidebar />
        </div>

        <div class="col">
            <div class="row q-ml-lg ">
                <div class="col q-ml-lg">
                    <h6 class="text-bold">Menu</h6>
                    <h6 class="text-bold">İçecekler</h6>

                </div>
                <div class="col-3">
                    <q-btn color="white" rounded text-color="black" class="text-bold" label="Besin Değerleri Tablosu >" />

                </div>
            </div>
            <ProductCard/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductCard from '../ProductCard.vue';
import StarbucksMenuSidebar from './StarbucksMenuSidebar.vue';


export default defineComponent({
    components: { ProductCard, StarbucksMenuSidebar }
})
</script>