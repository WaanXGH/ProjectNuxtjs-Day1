<script lang="ts" setup>
import { useProductsStore } from "~/stores/products";
import navbar from "~/components/header.vue";


const productStore = useProductsStore();
const allProducts = ref([]);

productStore.getAllProducts().then(() => {
    allProducts.value = productStore.products;
});

const selectedCategory = ref("");
</script>

<template>
    <navbar />
    <h1>Ini Halaman Home</h1>

    <Footer />
</template>