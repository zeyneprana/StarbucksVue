<template>
    <div class="q-mb-md">
        <q-list padding >
            <q-item v-for="info in infoList" :key="info.id">
                <q-item-section>
                    <a href="#" class="text-weight-bold text-decoration-none">{{ info.title }}</a>
                </q-item-section>
            </q-item>
        </q-list>

        <q-btn outline rounded color="green" class="text-weight-bold" label="English" />
    </div>
</template>


<script>
export default {
    data() {
        return {
            infoList:[
                {id:1,title:"Kişisel Veri Aydınlatma Metni"},
                {id:2,title:"Ticari İletişim Aydınlatma Metni"},
                {id:3,title:"Kullanım Koşulları"},
                {id:4,title:"Çerez Tercihleri"},
                {id:5,title:"Besin Değerleri Tablosu"},
                {id:6,title:"Gift Card"},
                {id:7,title:"Bize Ulaşın"},
            ]
        }
    },
}
</script>