<template>
    <div class="row q-mt-lg bg-grey-2">
        <div class="col-9">
            <q-list dense padding class="rounded-borders">
                <q-item v-ripple>
                    <q-item-section class="text-bold">
                        İçecekler
                    </q-item-section>

                </q-item>
                <q-item v-ripple v-for="item in sidebarBeverageList" :key="item.id">
                    <q-item-section >
                        {{ item.title }}
                    </q-item-section>
                </q-item>

                <q-item v-ripple>
                    <q-item-section class="text-bold">
                        Yiyecekler
                    </q-item-section>
                </q-item>
                <q-item v-ripple v-for="item in sidebarFoodList" :key="item.id">

                    <q-item-section >
                        {{ item.title }}
                    </q-item-section>
                </q-item>

            </q-list>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';


export default defineComponent({
    setup() {

        const state = reactive({
            sidebarBeverageList: [
                { id: 1, title: "Kısa Süreliğine Seninle" },
                { id: 2, title: "Espresso Bazlı İçecekler" },
                { id: 3, title: "Filtre Kahveler" },
                { id: 4, title: "Starbucks Refresha® Drinks" },
                { id: 5, title: "Frappuccino® Karışım İçecekler" },
            ],
            sidebarFoodList: [
                { id: 1, title: "Kısa Süreliğine Seninle" },
                { id: 2, title: "Cheesecakeler" },
                { id: 3, title: "Pasta ve Kekler" },
                { id: 4, title: "Muffin & Cookie" },
                { id: 5, title: "Kahvaltılık Ürünler" },
                { id: 6, title: "Sandviçler" }
            ],

        })

        return { ...toRefs(state) }
    }


})
</script>