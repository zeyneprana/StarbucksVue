<template>
    <q-card flat>
        <div class="row flex justify-between q-my-md">
            <div class="col">
                <img style="width: 95%;" :src="require(`@/assets/${feature.url}`)" />
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

<script>
export default {
    data() {
        return {
            
        }
    },

    props:["feature"]
}
</script>