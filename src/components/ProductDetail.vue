<template>
  <div v-if="data">
    <p>{{ data.id }}</p>
    <p>{{ data.description }}</p>
    <img :src="data.images[0]">{{ data.id }}/>
    <p>{{ data.id }}</p>
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

<style>
</style>
