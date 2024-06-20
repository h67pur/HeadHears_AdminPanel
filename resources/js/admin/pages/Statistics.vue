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
const audioProducts = ref([
  {
    id: 1,
    name: "Наушники Sony WH-1000XM4",
    stock: 15,
    price: 24999,
    status: "В наличии",
    image: "https://example.com/sony-wh-1000xm4.jpg"
  },
  {
    id: 2,
    name: "Акустическая система JBL Flip 5",
    stock: 8,
    price: 6999,
    status: "В наличии",
    image: "https://example.com/jbl-flip-5.jpg"
  },
  {
    id: 3,
    name: "Проигрыватель виниловых дисков Audio-Technica AT-LP120XUSB",
    stock: 4,
    price: 29990,
    status: "Ожидается поставка",
    image: "https://example.com/at-lp120xusb.jpg"
  },
  {
    id: 4,
    name: "Беспроводные наушники Bose QuietComfort Earbuds",
    stock: 12,
    price: 19999,
    status: "В наличии",
    image: "https://example.com/bose-quietcomfort-earbuds.jpg"
  },
  {
    id: 5,
    name: "Портативная Bluetooth-колонка JBL Charge 5",
    stock: 18,
    price: 9999,
    status: "В наличии",
    image: "https://example.com/jbl-charge-5.jpg"
  },
  {
    id: 6,
    name: "Усилитель Yamaha A-S501",
    stock: 6,
    price: 39990,
    status: "В наличии",
    image: "https://example.com/yamaha-a-s501.jpg"
  },
  {
    id: 7,
    name: "Проигрыватель виниловых дисков Pro-Ject Debut Carbon EVO",
    stock: 3,
    price: 34990,
    status: "Ожидается поставка",
    image: "https://example.com/pro-ject-debut-carbon-evo.jpg"
  },
  {
    id: 8,
    name: "Беспроводные наушники Sennheiser Momentum 3 Wireless",
    stock: 10,
    price: 26999,
    status: "В наличии",
    image: "https://example.com/sennheiser-momentum-3-wireless.jpg"
  },
  {
    id: 9,
    name: "Портативная Bluetooth-колонка Ultimate Ears MEGABOOM 3",
    stock: 14,
    price: 11999,
    status: "В наличии",
    image: "https://example.com/ue-megaboom-3.jpg"
  },
  {
    id: 10,
    name: "Саундбар Samsung HW-Q950A",
    stock: 7,
    price: 79990,
    status: "В наличии",
    image: "https://example.com/samsung-hw-q950a.jpg"
  },
  {
    id: 11,
    name: "Наушники Apple AirPods Pro",
    stock: 20,
    price: 19990,
    status: "В наличии",
    image: "https://example.com/airpods-pro.jpg"
  },
  {
    id: 12,
    name: "Проигрыватель виниловых дисков Rega Planar 1",
    stock: 5,
    price: 24990,
    status: "В наличии",
    image: "https://example.com/rega-planar-1.jpg"
  },
  {
    id: 13,
    name: "Беспроводные наушники Sony WF-1000XM3",
    stock: 11,
    price: 14999,
    status: "В наличии",
    image: "https://example.com/sony-wf-1000xm3.jpg"
  },
  {
    id: 14,
    name: "Портативная Bluetooth-колонка JBL Clip 4",
    stock: 17,
    price: 3999,
    status: "В наличии",
    image: "https://example.com/jbl-clip-4.jpg"
  },
  {
    id: 15,
    name: "Усилитель Denon PMA-600NE",
    stock: 9,
    price: 29990,
    status: "В наличии",
    image: "https://example.com/denon-pma-600ne.jpg"
  }
]);
function formatPrice(value) {
  return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(value);
}

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

        <div class="w-full ">
          <div class="relative h-full ml-0 mr-0 sm:mr-10">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
              <div class="flex items-center -mt-1">
                <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">Список товаров</h3>
              </div>
              <div>
                <div class="card p-4">
                  <DataTable :value="audioProducts" responsiveLayout="stack" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]">
                    <Column field="id" header="Номер" />
                    <Column field="name" header="Название товара" />
                    <Column field="stock" header="Количество на складе" />
                    <Column field="price" header="Текущая цена">
                      <template #body="slotProps">
                        {{ formatPrice(slotProps.data.price) }}
                      </template>
                    </Column>
                    <Column field="status" header="Статус" />
                    <Column header="Фото">
                      <template #body="slotProps">
                        <Button icon="pi pi-eye" link />
                      </template>
                    </Column>
                  </DataTable>
                </div>
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