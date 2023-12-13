<template>
    <div>
        <q-list>
            <q-expansion-item group="content" class="q-my-lg" v-for="footer in footerList" :key="footer" style="font-size: 25px;"
                :label="footer.title">
                <q-card>
                    <q-card-section>
                        <q-list separator>
                            <q-item style="font-size: medium;" v-for="content in footer.content" :key="content.id" clickable
                                v-ripple>
                                <q-item-section class="text-grey-7">{{ content.title }}</q-item-section>
                            </q-item>
                        </q-list>
                    </q-card-section>
                </q-card>
            </q-expansion-item>
        </q-list>
    </div>
</template>

<script>
export default {
    data() {
        return {
            footerList: [
                {
                    id: 1, title: "Hakkımızda", content: [
                        { id: 1, title: "Tarihçe" },
                        { id: 2, title: "Şirketimiz" },
                        { id: 3, title: "Mağazamız" }
                    ]
                },
                {
                    id: 2, title: "Kahve", content: [
                        { id: 1, title: "Starbuck Reserve" },
                        { id: 2, title: "Nasıl Mükemmel Kahve Hazırlanır" },
                        { id: 3, title: "Kavurma Profiline Göre Kahveler" },
                        { id: 4, title: "Kahve SSS" }
                    ]
                },
                {
                    id: 3, title: "Sosyal Sorumluluk", content: [
                        { id: 1, title: "Etik Ticaret" },
                        { id: 2, title: "Topluma Katkı" },
                        { id: 3, title: "Çevre" },
                        { id: 4, title: "Çeşitlilik" },
                        { id: 5, title: "Sürdürülebilirlik" },
                    ]
                },
                {
                    id: 4, title: "Starbucks Delivers", content: [
                        { id: 1, title: "YemekSepeti" },
                        { id: 2, title: "Getir" }
                    ]
                },

            ]
        }

    },
}
</script>