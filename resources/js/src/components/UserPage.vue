<script setup>
import SideBar from "../components/SideBar.vue";
const screenWidth = window.innerWidth;
</script>

<template>
  <div class="h-screen flex">
    <div class="header-area z-50">
      <SideBar />
    </div>
    <div class="content-area w-full dark:border-black bg-gradient-to-r from-teal-200 to-lime-200 p-8">
      <div :class="screenWidth < 768 ? 'ml-16':''">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
