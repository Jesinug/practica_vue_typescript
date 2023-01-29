<template>
  <div class="products-array" v-if="data">
    <h4>{{ data.title }}</h4>
    <p class="product-description">{{ data.description }}</p>
    <img :src="data.images[0]">
    <p class="product-price">{{ data.price }}€</p>
    <router-link
          :to="'/product/' + data.id"
          class="product-detail-view"
          >View details</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductDetail",
  props: {
    data: Object
  }
});
</script>

<style scoped>
.products-array {
  margin: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: solid 0.8px whitesmoke;
  border-radius: 8px;
}

.products-array h4 {
  font-size: 25px;
  color: whitesmoke;
  padding: 10px;
}

.products-array > .product-description {
  padding: 10px 20px;
}

.products-array > img {
  margin: 30px;
  height: 190px;
  width: 235px;
  border: 7px solid white;
  border-radius: 8px;
}

.product-price {
  margin: 30px;
  height: auto;
  width: 80px;
  text-align: center;
  align-self: flex-end;
  color: rgb(2, 98, 75);
  font-size: large;
  font-weight: bolder;
  background-color: whitesmoke;
  border-radius: 8px;
}

.product-detail-view {
  margin: 10px;
  padding: 5px 10px;
  border: solid 0.5px hsla(160, 100%, 37%, 1);
  border-radius: 8px;
  max-height: 40px;
  align-self: center;
}
</style>
