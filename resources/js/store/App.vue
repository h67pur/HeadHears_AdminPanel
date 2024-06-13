<script setup>

import Header from "./components/Header.vue"
import Main from "./pages/Main.vue"
import Footer from "./components/Footer.vue";

import router from "./router/router.js";

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'HeadHears'
})

</script>

<template>

  <div class="">

    <div class="mb-8">
      <Header />
    </div>

    <router-view />

    <Footer />

  </div>

</template>

<style scoped>

</style>