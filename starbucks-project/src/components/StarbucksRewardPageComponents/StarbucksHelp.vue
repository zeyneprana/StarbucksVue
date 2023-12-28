<template>
    <div>
        <div class="col">
            <h6 class="text-bold">Başlamak için yararlı ipuçları</h6>
            <div class="row">
                <div v-for="help in helpList" :key="help.id" class="col-5 q-ma-md">
                    <q-card class="my-card" flat bordered>
                        <img :src="require(`@/assets/starbucks-rewards/${help?.url}`)" />

                        <q-card-section>
                            <div>
                                {{ help.content }}

                                <q-btn class="q-mt-lg" color="green" label="Videoyu izle" outline rounded />

                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <h6 class="text-bold">Sorularınız var mı?</h6>
        <p>Sana her açıdan yardımcı olmak isteriz. Soruların varsa rahatça barista’larımıza sorabilirsin. Veya en çok merak edilen soruların yanıtına aşağıdan ulaşabilirsin.</p>
        <q-btn color="green" label="Keşfet" outline rounded />
    </div>
</template>





<script lang="ts">

import { defineComponent, reactive, toRefs } from 'vue';



export default defineComponent({

    setup() {

        const state = reactive({

            helpList: [
                { id: 1, url: "help1.jpg", content: "Starbucks® Mobil Uygulaması'da Şifre Nasıl Değiştirilir ?" },
                { id: 2, url: "help2.jpg", content: "Starbucks® Mobil Uygulaması'nda Kart Nasıl Oluşturulur ?" },
                { id: 3, url: "help3.jpg", content: "Starbucks® Gift Card'ındaki Bakiye Starbucks Mobil Uygulaması'na nasıl aktarılır ?" },
                { id: 4, url: "help4.jpg", content: "Starbucks® Mobil Uygulaması'na Masterpass Hesabı Nasıl Eklenir ?" },


            ]

        })

        return { ...toRefs(state) }

    }

})


</script>