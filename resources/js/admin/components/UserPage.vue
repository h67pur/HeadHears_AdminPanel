<script setup>
import { useRoute } from 'vue-router';
import SideBar from "../components/SideBar.vue";

const route = useRoute();
const screenWidth = window.innerWidth;
</script>

<template>
  <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
  />

  <div class="h-full min-h-screen flex">

    <div class="header-area z-50" v-if="route.name !== 'admin.login'">
      <SideBar />
    </div>

    <div class="content-area w-full">

      <div :class="screenWidth < 768 ? 'ml-16':''">
        <router-view>
        </router-view>
      </div>

    </div>

  </div>
</template>

<style scoped>

</style>