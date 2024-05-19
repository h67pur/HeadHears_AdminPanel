<script setup>
import {onMounted, ref} from "vue";

const dataList = ref();
onMounted(() => {
  dataList.value = [
    {
      name: 'Яблоко',
      category: 'Фрукты',
      price: 100
    },
    {
      name: 'Яблоко',
      category: 'Фрукты',
      price: 100
    },
    {
      name: 'Яблоко',
      category: 'Фрукты',
      price: 100
    },
    {
      name: 'Яблоко',
      category: 'Фрукты',
      price: 100
    }
  ];
});
</script>

<template>
  <div class="container relative flex flex-col justify-between h-full p-4 mx-auto">
    <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Статистика</h2>
    <p class="mb-4 text-lg text-gray-500">Статистика за 21.05.2024 - 21.06.2024.</p>
    <div class="w-full">
      <div class="flex flex-col w-full mb-10 sm:flex-row">

        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0 sm:mr-10">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]">
              <div class="flex items-center -mt-1">
                <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Количество заказов</h3>
              </div>
              <div>
                <h3 class="my-2 ml-3 text-gray-600">Дополнительный текст</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0 sm:mr-10">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]">
              <div class="flex items-center -mt-1">
                <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Оборот</h3>
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>

        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0 sm:mr-10">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]">
              <div class="flex items-center -mt-1">
                <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Количество пользователей</h3>
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>

        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0 sm:mr-10">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]">
              <div class="flex items-center -mt-1">
                <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Отзывы</h3>
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full mb-5 sm:flex-row">

        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0 sm:mr-10">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]">
              <div class="flex items-center -mt-1">
                <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Список товаров</h3>
              </div>
              <div>
                <div class="card p-4">
                  <DataView value="dataList" paginator :rows="5">
                    <template #list="slotProps">
                      <div v-for="(item, index) in slotProps" :key="index" class="col-12">
                        {{item.name}}
                      </div>
                    </template>
                  </DataView>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full sm:w-1/2">
          <div class="relative h-full ml-0 md:mr-10">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-green-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]">
              <div class="flex items-center -mt-1">
                <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">График заказов</h3>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>