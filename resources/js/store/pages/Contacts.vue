<template>
  <div class="contact-page-container">
    <h1 class="text-3xl text-left font-bold text-green-700 italic mb-8">Контакты</h1>
    <div class="address-container bg-white rounded-lg shadow-md border p-4 mb-8">
      <h2 class="text-2xl font-semibold mb-2">Наш адрес</h2>
      <p class="text-lg">г. Москва, ул. Тверская, д. 1</p>
      <p class="text-lg">Телефон: +7 (495) 123-45-67</p>
      <p class="text-lg">Email: info@example.com</p>
    </div>
    <div class="map-container bg-white rounded-lg shadow-md border overflow-hidden">
      `yandex maps`
      <yandex-map
          :coords="[55.7558, 37.6176]"
          :zoom="10"
          class="map"
      >
        <ymap-marker
            :coords="[55.7558, 37.6176]"
            :icon-layout="'default#image'"
            :icon-image="'https://img.icons8.com/color/48/000000/map-pin.png'"
        />
      </yandex-map>
    </div>
  </div>
</template>

<script setup>
import { YandexMap  } from 'vue-yandex-maps';

const settings = {
  apiKey: '85b5652f-fa26-4fd8-8cd8-34b57162220c',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
};
</script>

<style scoped>
.contact-page-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.address-container {
  margin-bottom: 2rem;
}

.map-container {
  height: 400px;
}

.map {
  width: 100%;
  height: 100%;
}
</style>