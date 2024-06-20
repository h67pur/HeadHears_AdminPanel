<script setup>
import {ref} from "vue";

const visibleCreateProduct = ref(false);
const visibleCreateCategory = ref(false);
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
const audioCategories = ref([
  {
    id: 1,
    name: "Наушники",
    productCount: 4
  },
  {
    id: 2,
    name: "Акустические системы",
    productCount: 3
  },
  {
    id: 3,
    name: "Проигрыватели виниловых дисков",
    productCount: 3
  },
  {
    id: 4,
    name: "Усилители",
    productCount: 2
  },
  {
    id: 5,
    name: "Портативные колонки",
    productCount: 3
  },
  {
    id: 6,
    name: "Саундбары",
    productCount: 1
  },
  {
    id: 7,
    name: "Микрофоны",
    productCount: 5
  },
  {
    id: 8,
    name: "Музыкальные центры",
    productCount: 2
  },
  {
    id: 9,
    name: "Плееры",
    productCount: 3
  },
  {
    id: 10,
    name: "Радиоприемники",
    productCount: 2
  },
  {
    id: 11,
    name: "Студийные мониторы",
    productCount: 4
  },
  {
    id: 12,
    name: "Синтезаторы",
    productCount: 3
  },
  {
    id: 13,
    name: "DJ-оборудование",
    productCount: 6
  },
  {
    id: 14,
    name: "Музыкальные интерфейсы",
    productCount: 2
  },
  {
    id: 15,
    name: "Кабели и переходники",
    productCount: 8
  },
  {
    id: 16,
    name: "Адаптеры",
    productCount: 5
  },
  {
    id: 17,
    name: "Стойки и держатели",
    productCount: 4
  },
  {
    id: 18,
    name: "Чехлы и сумки",
    productCount: 6
  },
  {
    id: 19,
    name: "Устройства для записи",
    productCount: 3
  },
  {
    id: 20,
    name: "Эквалайзеры",
    productCount: 2
  },
  {
    id: 21,
    name: "Усилители для наушников",
    productCount: 3
  },
  {
    id: 22,
    name: "Студийные мониторы",
    productCount: 4
  },
  {
    id: 23,
    name: "Звуковые карты",
    productCount: 3
  },
  {
    id: 24,
    name: "Микшерные пульты",
    productCount: 4
  },
  {
    id: 25,
    name: "Программное обеспечение",
    productCount: 7
  },
  {
    id: 26,
    name: "Музыкальные инструменты",
    productCount: 5
  },
  {
    id: 27,
    name: "Аксессуары",
    productCount: 9
  },
  {
    id: 28,
    name: "Проекторы",
    productCount: 2
  }
]);
function formatPrice(value) {
  return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(value);
}
</script>

<template>
  <div class="container relative flex flex-col justify-between h-full p-4 mx-auto">
    <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Товары</h2>

    <div class="w-full">

      <div class="flex flex-col w-full sm:flex-row mb-10 gap-4 pt-4 pr-10">

        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]">
              <div class="flex flex-col items-center text-center">
                <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">Количество товаров</h3>
                <h4 class="my-2 ml-3 text-5xl font-bold text-gray-800">167</h4>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]">
              <div class="flex flex-col items-center text-center">
                <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">Количество категорий</h3>
                <h4 class="my-2 ml-3 text-5xl font-bold text-gray-800">28</h4>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]">
              <div class="flex flex-col items-center text-center">
                <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">Количество брендов</h3>
                <h4 class="my-2 ml-3 text-5xl font-bold text-gray-800">42</h4>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]">
              <div class="flex flex-col items-center text-center">
                <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">Остатки</h3>
                <h4 class="my-2 ml-3 text-5xl font-bold text-gray-800">8</h4>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div class="w-full mb-10">
        <div class="relative h-full ml-0 mr-0 sm:mr-10">
          <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
          <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
            <div class="flex items-center -mt-1">
              <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">Список категорий</h3>
            </div>
            <div class="flex flex-col">
              <Toolbar>
                <template #end>
                  <Button label="Удалить" severity="danger"><i class="pi pi-trash" /></Button>
                  <Button @click="visibleCreateCategory = true"><i class="pi pi-plus" /></Button>
                </template>
              </Toolbar>
            </div>
            <div>
              <div class="card p-4">
                <DataTable :value="audioCategories" responsiveLayout="stack" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]">
                  <Column field="id" header="Номер" />
                  <Column field="name" header="Название категории" />
                  <Column field="productCount" header="Количество товаров" />
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full mb-10">
        <div class="relative h-full ml-0 mr-0 sm:mr-10">
          <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
          <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
            <div class="flex items-center -mt-1">
              <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">Список товаров</h3>
            </div>
            <div class="flex flex-col">
              <Toolbar>
                <template #end>
                  <Button label="Удалить" severity="danger"><i class="pi pi-trash" /></Button>
                  <Button @click="visibleCreateProduct = true"><i class="pi pi-plus" /></Button>
                </template>
              </Toolbar>
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

  <Dialog v-model:visible="visibleCreateCategory" modal header="Добавить новую категорию" dismissable-mask :draggable="false" class="w-1/2">

  </Dialog>

  <Dialog v-model:visible="visibleCreateProduct" modal header="Добавить новый товар" dismissable-mask :draggable="false" class="w-1/2">

  </Dialog>

</template>

<style scoped>

</style>