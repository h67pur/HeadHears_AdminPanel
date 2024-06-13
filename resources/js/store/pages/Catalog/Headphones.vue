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

</script>

<template>

  <span class="flex justify-center p-2 mb-4 text-2xl font-semibold italic">Наушники</span>

  <div class="flex flex-row justify-center gap-6">

    <Filtration />

      <div>
        <div class="grid grid-cols-3 gap-4">


          <router-link :to="product?.url || '/'" v-for="product in products" :key="product.id" class="w-[18.5rem] pt-2 bg-white rounded-lg shadow-md border overflow-hidden flex flex-col hover:shadow-xl hover:cursor-pointer transition">

                <div class="flex justify-center">
                  <img :src="product.imageUrl" :alt="product.name" class="w-[11rem] h-[11rem]" />
                </div>
                <div class="p-4 flex-grow">
                  <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
                  <p class="text-gray-600">{{ product.price }} руб.</p>
                </div>
                <div class="p-4">
                  <Button label="Купить" class="w-full bg-[#3DA35D] hover:bg-[#308049] border-none" />
                </div>

          </router-link>




        </div>

        <div class="flex justify-center mt-10">
          <Button severity="success" outlined class="w-[22rem] justify-center">Загрузить еще</Button>
        </div>

      </div>

  </div>



</template>

<style scoped>

</style>