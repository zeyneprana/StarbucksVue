<template>
    <div class="row mt-5 q-mx">
        <div class="col mt-5">
            <h6>{{ title }}</h6>
            <div class="q-pa-md row items-start q-gutter-md">
                <div v-for="egift in egiftList" :key="egift.id" class="col-2">
                    <q-card class="my-card" flat bordered>
                    <q-card-section horizontal>
                        <q-img class="col" :src="require(`@/assets/e-gift/${egift?.url}`)"></q-img>
                    </q-card-section>
                </q-card>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent, } from 'vue';


export default defineComponent({

    created(){
        console.log(this.egiftList);
        
    },
    props:["egiftList","title"]
    
})
</script>