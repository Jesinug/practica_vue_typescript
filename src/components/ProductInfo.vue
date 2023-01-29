<template>
  <div class="products-array" v-if="currentTutorial.id">
    <h4>{{ currentTutorial.title }}</h4>
    <p class="product-description">{{ currentTutorial.description }}</p>
    <img v-for="(img, index) in currentTutorial.images" :key="index" :src="img"/>
    <p class="product-price">{{ currentTutorial.price }}€</p>
    <router-link
          :to="'/products'"
          class="product-detail-view"
          >Volver</router-link
        >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TutorialDataService from "@/services/ApiService";
import ProductDetail from "./ProductDetail.vue";
import type Tutorial from "../types/Tutorial";
import type ResponseData from "../types/ResponseData";
import ApiService from "@/services/ApiService";

export default defineComponent({
  name: "tutorials-info",
  data() {
    return {
      currentTutorial: {} as Tutorial,
      message: "",
    };
  },
  methods: {
    getProduct(id: any) {
      console.log("getProduct" + id);
      ApiService.findById(id)
        .then((response: ResponseData) => {
          this.currentTutorial = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getProduct(this.$route.params.id);
  },
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
  min-width: 280px;
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
  align-self: flex-end;
  height: 35px;
  margin: 30px;
  padding: 5px 10px;
  border: solid 0.5px hsla(160, 100%, 37%, 1);
  border-radius: 8px;
}
</style>
