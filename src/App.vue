<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ListComponent from './components/ProductList.vue'
</script>

<template>
  <header>
    <img alt="Vue-E-Shop logo" class="logo" src="@/assets/vueEShop.png" width="400" height="325" />

    <div class="wrapper">

      <nav>
        <RouterLink to="/products">Products</RouterLink>
        <RouterLink to="/profile">User profile</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 15px;
  max-height: 600px;
  max-width: 365px;
}

nav {
  width: auto;
  font-size: 22px;
  text-align: center;
  margin: 20px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 15px;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
