<script setup>
import {ref, onMounted, onBeforeUnmount} from "vue";
import SidebarSubItem from "./models/sidebar/SidebarSubItem.vue";
import SidebarItem from "./models/sidebar/SidebarItem.vue";

const titleNavbar=ref('HEADHEARS');
const navbarItems = ref([
  {
    type: 'subItem',
    name: 'Основное'
  },
  {
    type: 'item',
    name: 'Главная',
    icon: 'pi pi-home',
    href: '/'
  },
  {
    type: 'item',
    name: 'Товары',
    icon: 'pi pi-box',
    href: '/products'
  }
]);
const sideBarWidth = ref("w-64");
const sidebarCollapsed = ref(false);
const screenWidth= window.innerWidth;
const hideCRMLabel = ref(false);

// Сохранение положения сайдбара
const sidebarState = localStorage.getItem('sidebarState');
if (screenWidth > 768 && sidebarState === 'collapsed') {
  toggleSidebar();
}

//Свернутый sidebar для телефонов
if (screenWidth < 1000) {
  toggleSidebar();
}

//Переключение меню
function toggleSidebar() {
  sideBarWidth.value = sideBarWidth.value === "w-64" ? " w-16" : "w-64";
  sidebarCollapsed.value = !sidebarCollapsed.value;
  titleSidebarSwap(sidebarCollapsed.value);
  localStorage.setItem('sidebarState', sidebarCollapsed.value ? 'collapsed' : 'expanded');

}
// Анимация появления текста
function titleSidebarSwap(sidebarCollapsed){
  if (sidebarCollapsed){
    titleNavbar.value='';
  }
  else {
    titleNavbar.value='HEADHEARS';
  }
}

</script>

<template>
  <div class="flex flex-col top-0 bottom-0 left-0 bg-white h-full border-r"
       :class="`transition-width duration-300 ease-in-out ${sideBarWidth} ${screenWidth < 768 ? 'fixed' : ''}`">
  </div>

  <div id="sideBar" class="fixed flex flex-col top-0 bottom-0 left-0 bg-white h-full border-r dark:bg-zinc-950 dark:border-zinc-700 dark:text-gray-200"
       :class="`transition-width duration-300 ease-in-out ${sideBarWidth} `">
    <router-link to="/" class="brightness-100 transition duration-300 ease-in-out hover:brightness-125">
      <div class="flex items-center justify-center h-18 text-nowrap">
        <div class="flex pointer-events-none select-none">
            <h1 v-if="sidebarCollapsed" class="tracking-wide cursor-pointer font-sans italic font-bold text-2xl">HH</h1>
        </div>
        <div>
          <h1 v-show="!sidebarCollapsed"
              :class="{ 'hidden': hideCRMLabel, 'animate-printed-text': !sidebarCollapsed, 'slide-right': sidebarCollapsed }"
              class="tracking-wide cursor-pointer font-sans italic font-bold text-2xl">
            {{ titleNavbar }}
          </h1>
        </div>
      </div>
      <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700">
    </router-link>
    <div class="flex-grow overflow-auto">
      <ul class="flex flex-col space-y-1">
        <li v-for="(item) in navbarItems">
          <hr v-if="item.type==='subItem'" class="h-px bg-gray-200 border-0 dark:bg-gray-700">
          <SidebarSubItem v-if="item.type==='subItem' && !sidebarCollapsed" :title="item.name" class="pt-3"/>
          <SidebarItem v-else-if="item.type==='item'" :title="item.name" :itemIcon="item.icon" :itemHref="item.href"
                       v-tooltip="sidebarCollapsed? item.name : ''"/>
        </li>
      </ul>
    </div>
    <div class="mt-auto">
      <button @click="toggleSidebar" id="logoutButton" class="w-full py-5 transition hover:bg-gray-200 dark:hover:bg-zinc-800">
        <i :class="sidebarCollapsed ? 'pi pi-chevron-right' : 'pi pi-chevron-left'" class="dark:text-gray-200"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Стили для анимации текста в меню */
@keyframes printed-text {
  from {
    width: 0%;
  }
}
.animate-printed-text {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  animation: printed-text 2s;
}

</style>
