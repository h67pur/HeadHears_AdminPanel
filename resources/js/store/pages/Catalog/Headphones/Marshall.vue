<script setup>
import Galleria from 'primevue/galleria';

import { ref, onMounted } from "vue";

const images = ref([
  {
    itemImageSrc: new URL('../../../../../../public/img/catalog/headphones/marshall/MAJOR_IV_1.png', import.meta.url).href,
    thumbnailImageSrc: new URL('../../../../../../public/img/catalog/headphones/marshall/MAJOR_IV_1.png', import.meta.url).href,
    alt: 'Image 1'
  },
  {
    itemImageSrc: new URL('../../../../../../public/img/catalog/headphones/marshall/MAJOR_IV_2.png', import.meta.url).href,
    thumbnailImageSrc: new URL('../../../../../../public/img/catalog/headphones/marshall/MAJOR_IV_2.png', import.meta.url).href,
    alt: 'Image 2'
  },
  {
    itemImageSrc: new URL('../../../../../../public/img/catalog/headphones/marshall/MAJOR_IV_3.png', import.meta.url).href,
    thumbnailImageSrc: new URL('../../../../../../public/img/catalog/headphones/marshall/MAJOR_IV_3.png', import.meta.url).href,
    alt: 'Image 2'
  },
  {
    itemImageSrc: new URL('../../../../../../public/img/catalog/headphones/marshall/MAJOR_IV_5.png', import.meta.url).href,
    thumbnailImageSrc: new URL('../../../../../../public/img/catalog/headphones/marshall/MAJOR_IV_5.png', import.meta.url).href,
    alt: 'Image 2'
  },
  // добавьте остальные изображения здесь
]);
const responsiveOptions = ref([
  {
    breakpoint: '1300px',
    numVisible: 4
  },
  {
    breakpoint: '575px',
    numVisible: 1
  }
]);
</script>

<template>
  <div style="" class="flex justify-center">
    <div class="w-[72.5rem]">
  <div class="container mx-auto py-8  rounded-lg">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">

      <div>
<!--        <img src="../../../../../../public/img/main/MAJOR_IV_1.png" alt="Marshall Major IV Black" class="rounded-lg shadow-md w-[22rem] h-[22rem]">-->
        <div class="card flex justify-center">
          <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 450px" class="">
            <template #item="slotProps">
              <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
            </template>
            <template #thumbnail="slotProps">
              <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
            </template>
          </Galleria>
        </div>
      </div>

      <div class="flex flex-col gap-12">
        <div>
          <h1 class="text-3xl font-bold text-green-700 mb-4">Marshall Major IV Black</h1>
          <p class="text-2xl font-semibold text-green-600 mb-8">14 990 руб.</p>
          <Button label="Купить" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded border-none w-[12rem]" />
        </div>
        <div class="">
          <p class="text-gray-700">Характеристики:</p>
          <ul class="list-disc ml-6">
            <li>Тип: Полноразмерные наушники</li>
            <li>Подключение: Проводное</li>
            <li>Диапазон частот: 20 Гц - 20 кГц</li>
            <li>Импеданс: 64 Ом</li>
            <li>Размер драйверов: 40 мм</li>
          </ul>
        </div>
      </div>

    </div>

    <div class="mt-8 p-4 px-8">
      <h2 class="text-2xl font-bold text-green-700 mb-4">Описание</h2>
      <p class="text-gray-700">
        Наушники Marshall Major IV Black – это четвертое поколение легендарных наушников от известного бренда Marshall. Они сочетают в себе классический рок-н-рольный дизайн и современные технологии звучания. Большие мягкие амбушюры обеспечивают комфортное ношение, а прочный винил в оформлении гарантирует долговечность. Наушники оснащены мощными 40-мм драйверами, которые обеспечивают четкое и детальное звучание с мощными басами.
      </p>
    </div>

  </div>

    </div>
  </div>
</template>

<style scoped>

</style>