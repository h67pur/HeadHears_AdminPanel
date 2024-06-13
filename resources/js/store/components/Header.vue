7<script setup>
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Image from 'primevue/image';

import Sidebar from 'primevue/sidebar';
import OverlayPanel from 'primevue/overlaypanel';

import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';


const visibleRight = ref(false);
const visibleCart = ref(false);

import { ref } from "vue";

const catalog = ref();
const stores = ref();
const promotions = ref();
const toggleCatalog = (event) => {
  catalog.value.toggle(event);
}
const toggleStores = (event) => {
  stores.value.toggle(event);
}
const togglePromotions = (event) => {
  promotions.value.toggle(event);
}

const profileMenuItems = ref([
  { label: 'Заказы', icon: 'pi pi-shopping-bag text-green-600 text-lg h-12 flex items-center pt-3.5', class: ' border-b' },
  { label: 'Отзывы', icon: 'pi pi-comment text-green-600 text-lg h-12 flex items-center pt-3.5', class: 'border-b' },
  { label: 'Выйти', icon: 'pi pi-sign-out text-green-600 text-lg h-12 flex items-center pt-3.5', class: '' },
]);

const selectedCategory = ref();
const categories = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
]);


const items = ref([

  {
    label: 'Категории',
    icon: 'pi pi-search',
    items: [
      {
        label: 'Наушники',
        icon: 'pi ',
        class: 'bg-gray-100',
        items: [
          {
            label: 'Вставные',
            icon: 'pi ',
            class: 'bg-gray-100'
          },
          {
            label: 'Накладные',
            icon: 'pi ',
            class: 'bg-gray-100',
          },
          {
            label: 'Полноразмерные',
            icon: 'pi ',
            class: 'bg-gray-100',
          }
        ]
      },
      {
        label: 'Аксессуары',
        icon: 'pi ',
        class: 'bg-gray-100',
      },
      {
        label: 'Гарнитуры',
        icon: 'pi ',
        class: 'bg-gray-100',
      },
      {
        label: 'Акустические системы',
        icon: 'pi ',
        class: 'bg-gray-100',
      },
      {
        label: 'Проигрыватели винила',
        icon: 'pi ',
        class: 'bg-gray-100',
      },

    ]
  },
]);

const splitNumber = (number) => {
  return number.toLocaleString('en-US')
      .replace(/,/g, ' ')  // Заменяет запятые на пробелы
      .replace(/\./g, ','); // Заменяет точки на запятые
};



</script>

<template>

<!--  Самые верхние кнопки (город, телефон, ссылки)-->
    <Toolbar class="rounded-none border-none bg-[#F1FBE5] px-32">
      <template #start>
        <div class="mx-2 flex content-center items-center">
          <p>Ваш регион:</p>
          <div class="card flex justify-content-center">
              <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Москва" class="text-xs bg-lime-100 mx-2" />
            </div>
        </div>

        <div class="mx-2 ml-12">
          <p><i class="pi pi-phone mr-1" />+7(919)816-95-83</p>
        </div>
      </template>

      <template #center>

      </template>

      <template #end>
        <div class="text-gray-500 text-sm">
          <a href="" class="mx-4">О компании</a>
          <a href="" class="mx-4">Гарантия и возврат</a>
          <a href="" class="mx-4">Корпоративным клиентам</a>
        </div>

      </template>
    </Toolbar>


<!--  Меню с названием, кнопками разделов сайта-->
  <div style="" class="flex justify-center">
    <div class="w-[72.5rem]">
      <Toolbar class="rounded-none border-none h-20 ">

        <template #start>
          <router-link to="/">

            <div class="brand-text mr-14 select-none	">
              <span class="font-sans italic font-bold text-2xl text-[#134611]">HEAD</span> <span class="font-sans italic font-bold text-2xl text-[#134611]">HEARS</span>
            </div>

          </router-link>
        </template>

        <template #end>
          <Button class="px-8 mx-1 text-black hover:bg-[#F1FBE5]" link @click="toggleCatalog" >Каталог</Button>

          <div class="card flex justify-center">
            <OverlayPanel ref="catalog" class="catalogPanel w-full flex justify-center">
              <div class="flex flex-column gap-3 w-25rem py-2">


                <div class="flex flex-col px-6 text-sm">
                  <router-link to="/headphones" class="p-2 hover:bg-[#F1FBE5] rounded-md"  @click="toggleCatalog">
                    <span class="font-semibold">Наушники</span>
                  </router-link>

                  <router-link to="/" class="p-2 hover:bg-[#F1FBE5] rounded-md"  @click="toggleCatalog">
                    <span class="">Вставные</span>
                  </router-link>

                  <router-link to="/" class="p-2 hover:bg-[#F1FBE5] rounded-md"  @click="toggleCatalog">
                    <span class="">Накладные</span>
                  </router-link>

                  <router-link to="/" class="p-2 hover:bg-[#F1FBE5] rounded-md"  @click="toggleCatalog">
                    <span class="">Полноразмерные</span>
                  </router-link>
                </div>


                <div class="flex flex-col px-6 text-sm">
                  <span class="p-2 font-semibold">Проигрыватели винила</span>
                  <span class="p-2">Ретро</span>
                  <span class="p-2">С Bluetooth</span>
                </div>

                <div class="flex flex-col px-6 text-sm">
                  <span class="p-2 font-semibold">Гарнитуры</span>

                </div>

                <div class="flex flex-col px-6 text-sm">
                  <span class="p-2 font-semibold">Аксессуары</span>

                </div>

                <div class="flex flex-col px-6 text-sm">
                  <span class="p-2 font-semibold">Акустические системы</span>
                  <span class="p-2">Сабвуферы</span>
                  <span class="p-2">Беспроводная акустика</span>
                </div>

              </div>
            </OverlayPanel>
          </div>


          <Button class="px-8 mx-1 text-black hover:bg-[#F1FBE5]" link @click="toggleStores" >Магазины</Button>

          <div class="card flex justify-center">
            <OverlayPanel ref="stores" class="storesPanel w-full flex justify-center">
              <div class="flex flex-column gap-3 w-25rem py-2">

                <div class="flex flex-col px-6 text-sm">
                  <span class="p-2 font-semibold">М</span>
                  <span class="p-2 hover:bg-[#F1FBE5] rounded-md">Москва</span>
                </div>

                <div class="flex flex-col px-6 text-sm">
                  <span class="p-2 font-semibold">Е</span>
                  <span class="p-2 hover:bg-[#F1FBE5] rounded-md">Екатеринбург</span>
                </div>

              </div>
            </OverlayPanel>
          </div>


          <Button class="px-8 mx-1 text-black hover:bg-[#F1FBE5]" link @click="togglePromotions" >Акции</Button>

          <div class="card flex justify-center">
            <OverlayPanel ref="promotions" class="promotionsPanel w-full h-[6rem] flex justify-center">

<!--              <div class="">-->

<!--                <div class="flex">-->

<!--                  <div class="sale-item">-->
<!--                    <img src="" alt="Наушники со скидкой" />-->
<!--                    <div class="sale-details">-->
<!--                      <h3>Беспроводные наушники XYZ</h3>-->
<!--                      <p class="old-price">$99.99</p>-->
<!--                      <p class="sale-price">$79.99</p>-->
<!--                      <p class="text-wrap">-->
<!--                        Погрузитесь в мир кристально чистого звука с этими беспроводными наушниками. Со скидкой 20% на ограниченное время!-->
<!--                      </p>-->
<!--                      <button class="buy-btn">Купить</button>-->
<!--                    </div>-->
<!--                  </div>-->

<!--                  <div class="sale-item">-->
<!--                    <img src="" alt="Наушники со скидкой" />-->
<!--                    <div class="sale-details">-->
<!--                      <h3>Наушники для диджеев ABC</h3>-->
<!--                      <p class="old-price">$149.99</p>-->
<!--                      <p class="sale-price">$119.99</p>-->
<!--                      <p class="text-wrap">-->
<!--                        Профессиональные наушники для диджеев с шумоподавлением. Скидка 20% при покупке в этом месяце!-->
<!--                      </p>-->
<!--                      <button class="buy-btn">Купить</button>-->
<!--                    </div>-->
<!--                  </div>-->

<!--                  <div class="sale-banner">-->
<!--                    <img src="" alt="Баннер акции" />-->
<!--                    <div class="banner-details">-->
<!--                      <h3>Распродажа игровых гарнитур</h3>-->
<!--                      <p class="text-wrap">Получите скидку до 30% на все игровые гарнитуры в нашем магазине. Ограниченное предложение!</p>-->
<!--                      <button class="shop-btn">Перейти в каталог</button>-->
<!--                    </div>-->
<!--                  </div>-->

<!--                </div>-->

<!--              </div>-->


            </OverlayPanel>
          </div>


          <Button class="px-8 mx-1 text-gray-400" disabled  link>Доставка и оплата</Button>
          <Button class="px-8 mx-1 text-gray-400" disabled  link>Дисконт</Button>

          <router-link to="/contacts">
            <Button class="px-8 mx-1 text-black hover:bg-[#F1FBE5]"  link>Контакты</Button>
          </router-link>

        </template>

      </Toolbar>
    </div>

  </div>



<!--  Строка поиска, профиль, корзина-->
  <div  class="flex justify-center">

    <div style="width: 80rem;" class="flex justify-between rounded-none border-none">

      <div class="flex mr-20">
          <InputText class="border-none rounded-xl rounded-r-none shadow-none	bg-[#F1FBE5] px-5 h-16 w-[680px]" placeholder="Я хочу купить..." />
<!--          <div class="card flex justify-content-center">-->
<!--            <Dropdown v-model="selectedCategory" :options="categories" optionLabel="name" placeholder="Категория" class="border-none rounded-xl rounded-l-none shadow-none bg-[#F1FBE5] h-16 w-72" />-->
<!--          </div>-->
        <div class="card">
          <Menubar :model="items" class="border-none rounded-xl rounded-l-none shadow-none bg-[#F1FBE5] h-16 w-[10.5rem]" />
        </div>
      </div>

      <div class="content-center">
        <Button icon="pi pi-user" class="bg-[#3DA35D] hover:bg-[#308049] border-0 mx-1" @click="visibleRight = true" />

        <Sidebar v-model:visible="visibleRight" header="Профиль" position="right" class="w-[18rem] h-[20rem] border-4 border-r-0 border-green-500 mb-[30%]">

          <template #header>
            <div class="flex align-items-center items-center gap-2">
<!--              <Avatar image="./headphone.png" shape="circle" />-->
              <img src="./headphone.png" class="w-10">
              <span class="font-bold">Соболев Даниил</span>
            </div>
          </template>

          <div class="card flex justify-center h-48">
            <Menu :model="profileMenuItems" class="h-[13rem] w-[15rem] border-green-400" />
          </div>

        </Sidebar>

        <Button icon="pi pi-shopping-cart" class="bg-[#3DA35D] hover:bg-[#308049] border-0 mx-1" @click="visibleCart = true" />

        <Sidebar v-model:visible="visibleCart" header="Корзина" position="right" class="w-[21.5rem] sidebar border-l-4 border-t-0 border-b-0 border-r-0 border-green-400">
          <div class="bg-green-700 text-white p-4 rounded-lg shadow-md content overflow-hidden" style="width: 19rem; height: 100%;">
            <div class="flex justify-between items-center mb-4">
              <button class="text-white hover:text-gray-300" @click="store.clearCart">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
            <div v-if="store.cartItems.length === 0" class="text-center my-8">
              <p>Ваша корзина пуста.</p>
            </div>
            <div v-else class="grid grid-cols-1 gap-4 place-content-end ">
              <div class="space-y-4 ">
                <div v-for="item in store.cartItems" :key="item.id" class="flex justify-between items-center bg-green-800 rounded-lg p-2 px-4">
                  <div class="flex items-center">
                    <img :src="item.image" alt="Наушники" class="w-12 h-12 rounded-lg mr-4">
                    <div>
                      <h3 class="font-bold">{{ item.name }}</h3>
                      <p class="text-green-300">{{ splitNumber(item.price) }} руб.</p>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <button class="text-white hover:text-gray-300" @click="store.removeFromCart(item)">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 00112H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div class="border-t border-green-300 pt-4 mt-4">
                <p class="font-bold">Итого: {{ splitNumber(store.total) }} руб.</p>
                <router-link to="/cart">
                  <button class="transition bg-green-800 hover:bg-green-900 text-white py-2 px-4 rounded-lg mt-4 w-full">
                    Перейти в корзину
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </Sidebar>
      </div>





    </div>

  </div>

</template>


<script>
import { store } from '../../../../store.js';

export default {
  data() {
    return {
      cartItems: [
        {
          id: 1,
          name: 'Marshall Major IV Black',
          price: 5990,
          image: 'img/main/major.png'
        },
        {
          id: 2,
          name: 'Sennheiser HD 450BT',
          price: 12990,
          image: 'img/main/anker.png'
        }
      ],
      isSidebarOpen: false,
    }
  },
  watch: {
    isSidebarOpen(newValue) {
      document.body.classList.toggle('sidebar-open', newValue);
    }
  },
  computed: {
    total() {
      return this.cartItems.reduce((sum, item) => sum + item.price, 0);
    }
  },
  methods: {
    removeFromCart(item) {
      this.cartItems = this.cartItems.filter(i => i.id !== item.id);
    },
    clearCart() {
      this.cartItems = [];
    }
  }
}
</script>


<style  lang="scss">

.catalogPanel {
  --overlayArrowLeft: 34% !important;
}.storesPanel {
  --overlayArrowLeft: 41.5% !important;
}.promotionsPanel {
  --overlayArrowLeft: 48.6% !important;
}




/* Анимация текста */
$animation-duration: 6.5s; // Продолжительность анимации
$skew-angle: -10deg;

.brand-text {
  display: inline-block;
  font-size: 24px; // Размер шрифта
  font-weight: bold; // Жирное начертание
  color: black; // Начальный цвет текста
  white-space: nowrap; // Запрет переноса текста

  &:before {
    content: "";
    position: absolute;
    top: 85px;
    height: 2.8%;
    background-color: #000000; // Цвет черного прямоугольника
    animation: slide-right ($animation-duration) ease-in-out infinite;
    transform: skewX($skew-angle);
  }

  span {
    position: relative;
    z-index: 1; // Располагаем текст поверх прямоугольника
    color: white; // Цвет текста "CRM"
    animation: text-color-change ($animation-duration) ease-in-out infinite;
  }

  span:last-child {
    color: black; // Начальный цвет текста "Leasing"
    animation: text-color-change-reverse ($animation-duration) ease-in-out infinite;
  }
}

@keyframes slide-right {
  0% {
    left: 20%;
    width: 3.8%;
  }
  16.67% {
    left: 20%;
    width: 3.8%;
  }
  33.33% {
    left: 20%;
    width: 3.8%;
  }
  50% {
    left: 23.8%;
    width: 4.3%;
  }
  66.67% {
    left: 23.8%;
    width: 4.3%;
  }
  83.33% {
    left: 23.8%;
    width: 4.3%;
  }
  100% {
    left: 20%;
    width: 3.8%;
  }
}

@keyframes text-color-change {
  0% {
    color: white;
  }
  16.67%  {
    color: #ffffff;
  }
  33.33%  {
    color: #ffffff;
  }
  50% {
    color: #000000;
  }
  66.67% {
    color: #000000;
  }
  83.33% {
    color: #000000;
  }
  100% {
    color: white;
  }
}

@keyframes text-color-change-reverse {
  0% {
    color: #000000;
  }
  16.67%  {
    color: #000000;
  }
  33.33%  {
    color: #000000;
  }
  50% {
    color: #ffffff;
  }
  66.67% {
    color: #ffffff;
  }
  83.33% {
    color: #ffffff;
  }
  100% {
    color: #000000;
  }
}

</style>