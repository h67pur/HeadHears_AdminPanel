<script setup>
import {onMounted, reactive, ref, watch} from "vue";
import gsap from 'gsap'

const numberOrders = ref(1670)
const numberUsers = ref(1537)
const turnover = ref(123)
const numberReviews = ref(240)
const animateNumbers = () => {
  const tweenedNumbers = {
    numberUsers: 0,
    numberOrder: 0,
    turnover: 0,
    numberReviews: 0
  }
  const tl = gsap.timeline()
  tl.to(tweenedNumbers, {
    duration: 2,
    numberUsers: numberUsers.value,
    numberOrder: numberOrders.value,
    turnover: turnover.value,
    numberReviews: numberReviews.value,
    onUpdate: () => {
      numberUsers.value = Math.round(tweenedNumbers.numberUsers)
      numberOrders.value = Math.round(tweenedNumbers.numberOrder)
      turnover.value = Math.round(tweenedNumbers.turnover)
      numberReviews.value = Math.round(tweenedNumbers.numberReviews)
    }
  })
}

onMounted(animateNumbers)

const hello = ref('Тут будет дополнительный текст который отображает краткую информацию по данному параметру')
</script>

<template>
  <div class="container relative flex flex-col justify-between h-full p-4 mx-auto">
    <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Статистика</h2>
    <p class="mb-4 text-lg text-gray-500">Статистика за 21.05.2024 - 21.06.2024.</p>

    <div class="w-full">

      <div class="flex flex-col w-full mb-8 sm:flex-row">

        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0 sm:mr-10">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-green-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]">
              <div class="flex flex-col items-center text-center">
                <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">Количество заказов</h3>
                <h4 class="my-2 ml-3 text-5xl font-bold text-gray-800">
                  {{ numberOrders.toFixed(0) }}
                  <i class="pi pi-arrow-up text-3xl text-green-500 bold text-center"></i>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0 sm:mr-10">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-red-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]"
                 v-tooltip = "hello">
              <div class="flex flex-col items-center text-center">
                <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">Оборот</h3>
                <h4 class="my-2 ml-3 text-5xl font-bold text-gray-800">
                  {{ turnover.toFixed(0) }}К
                  <i class="pi pi-arrow-down text-3xl text-red-500 bold text-center"></i>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0 sm:mr-10">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-green-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]">
              <div class="flex flex-col items-center text-center">
                <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">Количество пользователей</h3>
                <h4 class="my-2 ml-3 text-5xl font-bold text-gray-800">
                  {{ numberUsers.toFixed(0) }}
                  <i class="pi pi-arrow-up text-3xl text-green-500 bold text-center"></i>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0 sm:mr-10">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-green-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]">
              <div class="flex flex-col items-center text-center">
                <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">Отзывы</h3>
                <h4 class="my-2 ml-3 text-5xl font-bold text-gray-800">
                  {{ numberReviews.toFixed(0) }}
                  <i class="pi pi-arrow-up text-3xl text-green-500 bold text-center"></i>
                </h4>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="flex flex-col-4 w-full mb-8 sm:flex-row">

        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0 sm:mr-10">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]">
              <div class="flex flex-col items-center text-center">
                <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">Обзор доходов</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0 sm:mr-10">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]">
              <div class="flex flex-col items-center text-center">
                <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">Продажи по категориям</h3>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="flex flex-col w-full mb-5">

        <div class="w-full mb-10">
          <div class="relative h-full ml-0 mr-0 sm:mr-10">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]">
              <div class="flex items-center -mt-1">
                <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">Список товаров</h3>
              </div>
              <div>
                <div class="card p-4">
                  <DataTable>
                    <Column header="Название товара" />
                    <Column header="Категория" />
                    <Column header="Цена" />
                    <Column header="Количество на складе" />
                    <Column header="" />
                    <Column header="Название" />
                    <Column header="Название" />
                    <Column header="Название" />
                  </DataTable>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="relative h-full ml-0 mr-10">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-green-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]">
              <div class="flex flex-col items-center text-center">
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