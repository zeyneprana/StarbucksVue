<template>
    <div class="col-6 mt-5 ml-5 ">
        <CampaignCard class="q-my-md" />
        <FeatureCard v-for="feature in featureCardList" :key="feature.id" :feature="feature" />
        <ProductCard v-for="product in productList" :key="product" :product="product" />
        <q-separator class="q-my-lg"/>
        <FooterSide/>
    </div>
</template>


<script>
import CampaignCard from './CampaignCard.vue';
import FeatureCard from './FeatureCard.vue';
import ProductCard from './ProductCard.vue';
import FooterSide from './FooterSide.vue';

export default {
    data() {
        return {
            featureCardList: [
                { id: 1, url: "feature-1.jpg", title: "Nice 20 yıllara 💚", content: "Tam 20 yıldır Türkiye'nin dört bir yanında keyifli sohbetleri, mutlu anları ve yeni deneyimleri bir kahveye sığdırmanın mutluluğunu yaşıyoruz. Bu yolculukta bize eşlik eden tüm kahve severler, iyi ki varsınız! ☕✨" },
                { id: 2, url: "feature-2.jpg", title:"Dilediğin Gibi Öde Yıldız Kazan! ⭐", content:"Starbucks® Mobil’de yeni dönem başladı! Ödemeni nakit, kredi kartı veya Starbucks® Mobil ile yap, tüm harcamalarında yıldız kazan!"},
                { id: 3, url: "feature-3.jpg", title:"Pumpkin Spice etkisi yeni kupa ve termoslarda! 🧡", content:"Sonbaharın habercisi, Pumpkin Spice etkisi yeni Starbucks® kupa ve termoslarında! 🎃🍁 Yeni favorin olmaya aday birbirinden şık yeni kupa, termos ve aksesuarlar Hepsiburada, Shayakahve ve mağazalarımızda seni bekliyor! 🥳🏃🏻‍♀️"},
                { id: 4, url: "feature-4.jpg", title:"Mobil Uygulamamız", content:"Starbucks® Mobil Uygulaması’nın ayrıcalıklı dünyası ve güncel kampanyalardan haberdar ol."},
                { id: 5, url: "feature-5.jpg", title:"Arabaya servis ile ara vermeden yolculuğuna lezzet kat!", content:"Aracından inmeden Starbucks® Drive Thru mağazalarımızdan siparişini ver, ara vermeden yolculuğuna lezzet kat! 🚗 Şimdilik sınırlı mağazalarımızda: 📍Şekerpınar 📍Manavgat 📍Balıkesir O204 📍Ankara Vega Cadde Yeni Drive Thru lokasyonlarımız için starbucks.com.tr'yi ziyaret etmeyi ve bizi sosyal medya hesaplarımızdan takip etmeyi unutma!"},
            ],
            productList:[
                {id:1,url:"product1.png",title:"Caffè Latte",content:"Zengin espresso, buharla ısıtılmış kadifemsi süt ve süt köpüğünün dengeli buluşması"},
                {id:2,url:"product2.png",title:"Caffè Americano",content:"Sıcak su ile inceltilmiş yoğun espresso lezzeti"},
                {id:3,url:"product3.png",title:"Buzlu Caramel Macchiato",content:"Vanilya şurubu, soğuk süt, buz, espresso ve üzerine karamel sosla sunulur."},
                {id:4,url:"product4.png",title:"Türk Kahvesi",content:" Starbucks Veranda Blend çekirdek kahvesi ile yorumlanan geleneksel Türk Kahvesi"},
                {id:5,url:"product5.png",title:"Caffè Misto",content:"(Sütlü Filtre Kahve) Demlenmiş, dengeli, yoğun filtre kahve ve süt"},
            ]
        }
    },
    components: { CampaignCard, FeatureCard, ProductCard, FooterSide },
    
}
</script>