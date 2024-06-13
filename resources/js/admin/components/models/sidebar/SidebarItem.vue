<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
defineProps({
  title: String,
  itemIcon: String,
  spanValueRight: String,
  spanValueLeft: String,
  spanColor: String,
  itemHref: {
    type: String,
    default: '#',
  },
})
</script>

<template>
  <li>
    <router-link :to="itemHref"
                 :class="[{'bg-gray-200 dark:bg-gray-700 border-indigo-600 border-l-4': $route.path === itemHref}]"
                 class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 hover:dark:bg-slate-900 text-gray-600
                     hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 cursor-pointer">
            <span v-if="itemIcon !== null" class="inline-flex justify-center items-center ml-5 dark:text-gray-200">
                <i :class="itemIcon"></i>
            </span>
      <span :class="!spanValueLeft ? 'ml-2' : ''" class="text-sm tracking-wide truncate dark:text-gray-200">{{ title }}</span>

      <!--            <span v-if="spanValueRight !== null && spanValueRight !== undefined" :class="[spanColor, 'px-2 py-0.5 ml-auto text-xs font-medium tracking-wide rounded-full']">{{ spanValueRight }}</span>-->
      <!--            <span v-if="spanValueLeft !== null && spanValueLeft !== undefined" :class="[spanColor, 'relative mb-5 text-xs font-medium tracking-wide rounded-full']">{{ spanValueLeft }}</span>-->

    </router-link>
  </li>
</template>

<style scoped>

</style>