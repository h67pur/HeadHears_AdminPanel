<script setup>
import Filtration from "../../components/Filtration.vue";

import { ref } from 'vue'

import marshall from '../../../../../public/img/main/major.png'
import beye from '../../../../../public/img/main/beye.png'
import anker from '../../../../../public/img/main/anker.png'
import noble from '../../../../../public/img/main/noble.png'
import mdr from '../../../../../public/img/main/mdr.png'
import liberty from '../../../../../public/img/main/liberty.png'

const products = ref([
  {
    id: 1,
    name: 'Marshall Major IV Black',
    price: '14 990',
    imageUrl: marshall,
    url: '/catalog/marshall'
  },
  {
    id: 2,
    name: 'Beyerdynamic DT 770 PRO 250 ohm',
    price: '21 990',
    imageUrl: beye
  },
  {
    id: 3,
    name: 'Anker Soundcore Space One Jet Black',
    price: '11 990',
    imageUrl: anker
  },
  {
    id: 4,
    name: 'Noble Audio FoKus Mystique Blue Black',
    price: '31 990',
    imageUrl: noble
  },
  {
    id: 5,
    name: ' Sony MDR-XB450AP',
    price: '3 990',
    imageUrl: mdr
  },
  {
    id: 5,
    name: 'Anker Soundcore Liberty 4',
    price: '11 990',
    imageUrl: liberty
  },
])





import { store } from '../../../../../store.js';

const addItemToCart = () => {
  const item = {
    id: 1,
    name: 'Marshall Major IV Black',
    price: 5990,
    image: 'img/main/major.png'
  };
  store.addToCart(item);
};

const addItemToCart2 = () => {
  const item = {
    id: 3,
    name: 'Beyerdynamic DT 770 PRO 250 ohm',
    price: 21990,
    image: 'img/main/beye.png'
  };
  store.addToCart(item);
};

const cartModal = ref(false)

function handleButtonClick() {
  addItemToCart()
  cartModal.value = true
  toggleButtonState()
}

const buttonSwap = ref(false);
const buttonSwap2 = ref(false);
function toggleButtonState() {
  buttonSwap.value = !buttonSwap.value;
}function toggleButtonState2() {
  buttonSwap2.value = !buttonSwap2.value;
}

</script>

<template>

  <Dialog v-model:visible="cartModal" header=""  modal :dismissableMask="true" :draggable="false" class="w-[32rem]">
    <p class="mb-8 py-2 text-center text-lg text-gray-700">Товар добавлен в корзину</p>
    <div class="flex justify-center">
      <Button  @click="cartModal=false" label="Продолжить покупки" text outlined severity="success" class="w-full mx-1" />
      <router-link to="/cart" class="w-full">
        <Button @click="" label="Перейти в корзину" severity="success" class="w-full mx-1" />
      </router-link>
    </div>
  </Dialog>


  <span class="flex justify-center p-2 mb-4 text-2xl font-semibold italic">Наушники</span>

  <div class="flex flex-row justify-center gap-6">

    <Filtration />

      <div>
        <div class="grid grid-cols-3 gap-4">


          <div v-for="product in products" :key="product.id" class="w-[18.5rem] pt-2 bg-white rounded-lg shadow-md border overflow-hidden flex flex-col hover:shadow-xl transition">
            <div class="flex justify-center">
              <img :src="product.imageUrl" :alt="product.name" class="w-[11rem] h-[11rem]" />
            </div>
            <div class="p-4 flex-grow">
              <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
              <p class="text-gray-600">{{ product.price }} руб.</p>
            </div>
            <div class="p-4 flex gap-2">
              <router-link :to="product?.url || '/'">
                <Button label="Просмотр" text outlined severity="success" class="w-full" />
              </router-link>
              <Button v-if="!buttonSwap && product.id === 1" @click="addItemToCart(); cartModal = true; toggleButtonState();" label="В корзину"
                      class="w-full bg-[#3DA35D] hover:bg-[#308049] border-0"
              />
              <Button v-if="buttonSwap && product.id === 1" @click="handleButtonClick" label="В корзине"
                      class="w-full bg-[#3DA35D] hover:bg-[#308049] border-0" disabled
              />
              <Button v-if="!buttonSwap2 && product.id === 2" @click="addItemToCart2(); cartModal = true; toggleButtonState2();" label="В корзину"
                      class="w-full bg-[#3DA35D] hover:bg-[#308049] border-0"
              />
              <Button v-if="buttonSwap2 && product.id === 2" @click="handleButtonClick" label="В корзине"
                      class="w-full bg-[#3DA35D] hover:bg-[#308049] border-0" disabled
              />
              <Button
                  v-else-if="product.id === 3"
                  @click=""
                  label="В корзину"
                  class="w-full bg-[#3DA35D] hover:bg-[#308049] border-none"
              />
              <Button
                  v-else-if="product.id === 4"
                  @click=""
                  label="В корзину"
                  class="w-full bg-[#3DA35D] hover:bg-[#308049] border-none"
              />
              <Button
                  v-else-if="product.id === 5"
                  @click=""
                  label="В корзину"
                  class="w-full bg-[#3DA35D] hover:bg-[#308049] border-none"
              />
              <Button
                  v-else-if="product.id === 6"
                  @click=""
                  label="В корзину"
                  class="w-full bg-[#3DA35D] hover:bg-[#308049] border-none"
              />
              <!-- Add more conditions here if needed -->
            </div>
          </div>




        </div>

        <div class="flex justify-center mt-10">
          <Button severity="success" outlined class="w-[22rem] justify-center">Загрузить еще</Button>
        </div>

      </div>

  </div>



</template>

<style scoped>

</style>