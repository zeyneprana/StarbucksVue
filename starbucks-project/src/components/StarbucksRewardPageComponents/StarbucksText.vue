<template>
    <div class="q-my-lg" v-for="text in textList" :key="text.id">
        <h5 class="text-bold">{{ text.title }}</h5>
        <p>{{ text.content }}</p>
    </div>
</template>


<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({

    setup() {

        const state = reactive({

            textList: [
                { id: 1, title: "Starbucks® yıldızlarıyla ayrıcalıklar cebinde!", content: "Siparişini hızlıca verip yıldızlarını biriktirmeye başla. Yeterli yıldıza ulaştığındaysa hediye içeceğini yudumla!" },
                { id: 2, title: "Dilediğin gibi öde, yıldız kazan!", content: "Starbucks® Rewards avantajlarını öğren." },
            ]

        })

        return { ...toRefs(state) }

    }


})
</script>