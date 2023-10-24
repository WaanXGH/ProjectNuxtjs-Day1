<script lang="ts" setup>
import navbar from '~/components/navbar.vue';
import Footer from '../components/footer.vue';
import products from '~/composables/constants/products';
import CardProduct from "~/components/cards/CardProduct.vue"


const selectedCategory = ref("");
const allProducts = computed(() => {
    if (selectedCategory.value) {
        return products.filter((item) => item.category === selectedCategory.value);
    }
    return products;
});
</script>


<template>
    <navbar />
    <section>
        <div class="container">
            <div class="py-10">
                <div class="mb-6 flex justify-end gap-6">
                    <Dropdown @selected-category="selectedCategory = $event" />
                </div>
                <div class="flex gap-6 flex-wrap mx-auto">
                    <template v-for="(item, index) in allProducts" :key="index">
                        <CardProduct :product="item" class="w-[calc(100%/4-18px)]" />
                    </template>
                </div>
            </div>
        </div>
    </section>
    <footer />
</template>