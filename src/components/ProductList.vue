<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        <product-card :title="product.title" :price="product.price" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import ProductCard from './ProductCard.vue';

export default defineComponent({
  components: {
    ProductCard
  },
  setup() {
    const products = ref([]);

    axios.get('https://api.escuelajs.co/api/v1/products')
      .then((response) => {
        products.value = response.data;
      });

    return {
      products
    }
  }
});
</script>
