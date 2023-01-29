<template>
  <div class="list-row">
    <div class="product-list-wraper">
      <div class="form-wraper">
        <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>     
    </div>
    
      <h2>Products list</h2>
      <ProductDetail v-for="(tutorial, index) in tutorials" :data="tutorial"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TutorialDataService from "@/services/ApiService";
import ProductDetail from "./ProductDetail.vue";
import type Tutorial from "../types/Tutorial";
import type ResponseData from "../types/ResponseData";

export default defineComponent({
  name: "tutorials-list",
  components: {
    ProductDetail
  },
  data() {
    return {
      tutorials: [] as Tutorial[],
      currentTutorial: {} as Tutorial,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then((response: ResponseData) => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = {} as Tutorial;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial: Tutorial, index = -1) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },

    searchTitle() {
      TutorialDataService.findById(this.currentTutorial.id)
        .then((response: ResponseData) => {
          this.tutorials = response.data;
          this.setActiveTutorial({} as Tutorial);
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveTutorials();
  },
});
</script>

<style>
.form-wraper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.product-list-wraper {
  display: flex;
  flex-flow: column;
}

.product-list-wraper, input {
  align-self: center;
  padding: 10px;
  margin-bottom: 10px;
  width: 70%;
  font-size: medium;
}

.product-list-wraper, button {
  padding: 10px 20px;
  border-radius: 8px;
  border-style: none;
  font-size: medium;
  font-weight: bolder;
}

.list-row h2 {
  font-size: 40px;
  color: whitesmoke;
  padding: 10px;
}

.list-row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
