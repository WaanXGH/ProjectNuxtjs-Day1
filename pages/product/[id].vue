<script lang="ts" setup>
import products from "~/composables/constants/products";
import ProductsType from "~/types/product";
import DetailProduct from "~/components/DetailProduct.vue";

const route = useRoute();
const id = typeof route.params.id === 'string' ? parseInt(route.params.id) :
    null;
const product = ref(products.find((item: ProductsType) => item.id === id));
</script>

<template>
    <DetailProduct :product="product" />
</template >
