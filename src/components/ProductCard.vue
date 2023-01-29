<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ price }}</p>
    <p>{{ descrip }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
},
});
</script>
