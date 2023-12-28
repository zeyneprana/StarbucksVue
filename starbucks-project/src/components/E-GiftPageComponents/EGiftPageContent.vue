<template>
    <div class="q-mx-lg">
        <EGiftCard title="2024! 🎁🎄" :egiftList="egiftList"/>
        <EGiftCard title="CUMHURIYETIMIZIN 100. YIL❤️" :egiftList="egiftList2"/>

    </div>
</template>


<script lang="ts">
import { defineComponent, reactive, toRefs} from 'vue';
import EGiftCard from './EGiftCard.vue';


export default defineComponent({

    setup(){

        const state = reactive({
            egiftList:[
                {id:1,url:"egift1.png"},
                {id:2,url:"egift2.png"},
                {id:3,url:"egift3.png"},
                {id:4,url:"egift4.png"},

            ],
            egiftList2:[
            {id:1,url:"egift5.png"},
            {id:2,url:"egift6.png"},

            ]
        })
        return {...toRefs(state)}
    },

    components: { EGiftCard  }
})
</script>