<script setup>
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Image from 'primevue/image';

import Sidebar from 'primevue/sidebar';
import OverlayPanel from 'primevue/overlaypanel';

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

</script>

<template>

<!--  Самые верхние кнопки (город, телефон, ссылки)-->
    <Toolbar class="rounded-none border-none bg-[#F1FBE5] px-32">
      <template #start>
        <div class="mx-2">
          <p>Ваш регион: <b>Москва</b> <i class="pi pi-angle-down pl-1" /></p>
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
            <OverlayPanel ref="promotions" class="promotionsPanel w-full flex justify-center">

              <div class="">

                <div class="flex">

                  <div class="sale-item">
                    <img src="" alt="Наушники со скидкой" />
                    <div class="sale-details">
                      <h3>Беспроводные наушники XYZ</h3>
                      <p class="old-price">$99.99</p>
                      <p class="sale-price">$79.99</p>
                      <p class="text-wrap">
                        Погрузитесь в мир кристально чистого звука с этими беспроводными наушниками. Со скидкой 20% на ограниченное время!
                      </p>
                      <button class="buy-btn">Купить</button>
                    </div>
                  </div>

                  <div class="sale-item">
                    <img src="" alt="Наушники со скидкой" />
                    <div class="sale-details">
                      <h3>Наушники для диджеев ABC</h3>
                      <p class="old-price">$149.99</p>
                      <p class="sale-price">$119.99</p>
                      <p class="text-wrap">
                        Профессиональные наушники для диджеев с шумоподавлением. Скидка 20% при покупке в этом месяце!
                      </p>
                      <button class="buy-btn">Купить</button>
                    </div>
                  </div>

                  <div class="sale-banner">
                    <img src="" alt="Баннер акции" />
                    <div class="banner-details">
                      <h3>Распродажа игровых гарнитур</h3>
                      <p class="text-wrap">Получите скидку до 30% на все игровые гарнитуры в нашем магазине. Ограниченное предложение!</p>
                      <button class="shop-btn">Перейти в каталог</button>
                    </div>
                  </div>

                </div>

              </div>


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
          <div class="card flex justify-content-center">
            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Категория" class="border-none rounded-xl rounded-l-none shadow-none bg-[#F1FBE5] h-16 w-72" />
          </div>
      </div>

      <div class="content-center">
        <Button icon="pi pi-user" class="bg-[#3DA35D] hover:bg-[#308049] border-0 mx-1" @click="visibleRight = true" />

        <Sidebar v-model:visible="visibleRight" header="Профиль" position="right">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>

        <Button icon="pi pi-shopping-cart" class="bg-[#3DA35D] hover:bg-[#308049] border-0 mx-1" @click="visibleCart = true" />

        <Sidebar v-model:visible="visibleCart" header="Корзина" position="right">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>
      </div>





    </div>

  </div>

</template>

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
    top: 75px;
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