<template>
    <div class="flex q-my-sm">
        <a href="#">
            <img class="q-mx-sm" v-for="socialMedia in socialMediaList" :key="socialMedia.id"
                :src="require(`@/assets/social-medias/${socialMedia.url}`)" alt="">
        </a>
    </div>
</template>


<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({

    setup() {

        const state = reactive({
            socialMediaList: [
                { id: 1, url: "fb.png" },
                { id: 2, url: "ig.png" },
                { id: 3, url: "yt.png" },
                { id: 4, url: "tw.png" },
            ]
        })

        return { ...toRefs(state) }


    },
})
</script>