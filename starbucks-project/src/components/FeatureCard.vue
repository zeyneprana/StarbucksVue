<template>
    <q-card flat>
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
import { defineComponent } from 'vue';

export default defineComponent({
    setup(){

    },

    props:["feature"]
})
</script>