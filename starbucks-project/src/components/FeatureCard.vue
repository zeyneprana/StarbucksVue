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
import { defineComponent,reactive,toRefs } from 'vue';

export default defineComponent({
    setup(){

        const state = reactive({
            featureCardList: [
                { id: 1, url: "feature-1.jpg", title: "Nice 20 yıllara 💚", content: "Tam 20 yıldır Türkiye'nin dört bir yanında keyifli sohbetleri, mutlu anları ve yeni deneyimleri bir kahveye sığdırmanın mutluluğunu yaşıyoruz. Bu yolculukta bize eşlik eden tüm kahve severler, iyi ki varsınız! ☕✨" },
                { id: 2, url: "feature-2.jpg", title: "Dilediğin Gibi Öde Yıldız Kazan! ⭐", content: "Starbucks® Mobil’de yeni dönem başladı! Ödemeni nakit, kredi kartı veya Starbucks® Mobil ile yap, tüm harcamalarında yıldız kazan!" },
                { id: 3, url: "feature-3.jpg", title: "Pumpkin Spice etkisi yeni kupa ve termoslarda! 🧡", content: "Sonbaharın habercisi, Pumpkin Spice etkisi yeni Starbucks® kupa ve termoslarında! 🎃🍁 Yeni favorin olmaya aday birbirinden şık yeni kupa, termos ve aksesuarlar Hepsiburada, Shayakahve ve mağazalarımızda seni bekliyor! 🥳🏃🏻‍♀️" },
                { id: 4, url: "feature-4.jpg", title: "Mobil Uygulamamız", content: "Starbucks® Mobil Uygulaması’nın ayrıcalıklı dünyası ve güncel kampanyalardan haberdar ol." },
                { id: 5, url: "feature-5.jpg",title: "Arabaya servis ile ara vermeden yolculuğuna lezzet kat!", content: "Aracından inmeden Starbucks® Drive Thru mağazalarımızdan siparişini ver, ara vermeden yolculuğuna lezzet kat! 🚗 Şimdilik sınırlı mağazalarımızda: 📍Şekerpınar 📍Manavgat 📍Balıkesir O204 📍Ankara Vega Cadde Yeni Drive Thru lokasyonlarımız için starbucks.com.tr'yi ziyaret etmeyi ve bizi sosyal medya hesaplarımızdan takip etmeyi unutma!" },
            ] as FeatureCardItem[],
        })

        return{...toRefs(state)}
    },

})
</script>