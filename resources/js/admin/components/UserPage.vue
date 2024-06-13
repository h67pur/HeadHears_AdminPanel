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
    <div class="content-area w-full dark:border-black bg-gradient-to-r from-teal-200 to-lime-200 p-8">
      <div :class="screenWidth < 768 ? 'ml-16':''">
        <router-view v-slot="{ Component }">
          <transition
              enter-active-class="animated fadeIn zoomIn"
              leave-active-class="animated fadeOut zoomOut"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>