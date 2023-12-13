<template>
    <div class="product-card q-my-lg q-pa-sm">
        <div class=" photo-section">
            <img :src="product.url">
        </div>
        <div class="col content-section q-mx-lg q-my-md">
            <p>{{product.title}}</p>
            <p>{{ product.content }}</p>
        </div>
        <div class=" button-section ">
            <q-btn round color="green" icon="shopping_cart" />
            <q-btn round color="grey" icon="info" />
        </div>
    </div>
</template>

<script>
export default {
data() {
    return {
        
    }
},

props:["product"]
}
</script>