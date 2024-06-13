<template>
  <div class="cart-page-container min-h-[31.5rem]">
    <h1 class="text-3xl italic font-bold text-green-700 mb-8 text-left">Корзина</h1>
    <div v-if="store.cartItems.length === 0" class="text-center">
      <p class="text-lg">Ваша корзина пуста.</p>
    </div>

    <div v-else class="cart-items-container flex gap-5 w-full">

      <div class="flex flex-col">
        <div v-for="item in store.cartItems" :key="item.id" class="h-[18rem] w-[40rem] cart-item bg-white rounded-lg shadow-lg border overflow-hidden flex flex-col p-4 mb-4">
          <div class="flex items-center justify-between w-full p-[1rem] px-[3rem]">
            <div class="w-[9rem] h-full">
              <img :src="item.image" :alt="item.name" class="w-[9rem] h-[9rem] mr-4" />

              <div class="flex-grow">
                <h3 class="text-lg font-semibold mb-2">{{ item.name }}</h3>
                <p class="text-gray-600">{{ splitNumber(item.price) }} руб.</p>
              </div>
            </div>

            <div class="flex items-center mt-2 flex flex-col">
              <div>
                <button @click="decrementQuantity(item)" class="text-gray-500 hover:text-gray-700 bg-gray-200 rounded-full"><i class="p-2 pi pi-minus-circle"></i></button>
                <span class="mx-2">{{ splitNumber(item.quantity) }}</span>
                <button @click="incrementQuantity(item)" class="text-gray-500 hover:text-gray-700 bg-gray-200 rounded-full"><i class="p-2 pi pi-plus-circle"></i></button>
              </div>
              <p class="text-gray-600">{{ splitNumber(item.price) }} руб. x {{ splitNumber(item.quantity) }}</p>
            </div>

            <Button @click="removeItemFromCart(item)" text outlined severity="danger" class="text-red-500 hover:text-red-700">
              Удалить
            </Button>
          </div>
        </div>

      </div>

      <div class="total-container bg-green-500 p-4 h-[20%] w-[36%]  rounded-lg shadow-xl">
        <p class="text-xl text-white font-bold mb-5">Итого: {{ splitNumber(store.total) }} руб.</p>

        <span class="text-white">Промокод:</span>
        <InputText class="h-9 mb-2 bg-green-100" />

        <button class="checkout-button bg-green-400 shadow-lg hover:bg-green-900 text-white py-2 px-4 rounded-lg mt-4 w-full">
          Оформить заказ
        </button>
      </div>

    </div>

  </div>


<!--  <div class="cart-page-container">-->
<!--    <h1 class="text-3xl font-bold text-green-700 mb-8">Корзина покупок</h1>-->
<!--    <div v-if="store.cartItems.length === 0" class="text-center">-->
<!--      <p class="text-lg">Ваша корзина пуста.</p>-->
<!--    </div>-->
<!--    <div v-else class="cart-items-container">-->
<!--      <div v-for="item in store.cartItems" :key="item.id" class="cart-item bg-white rounded-lg shadow-md border overflow-hidden flex flex-col p-4 mb-4">-->
<!--        <div class="flex items-center">-->
<!--          <img :src="item.image" :alt="item.name" class="w-[11rem] h-[11rem] mr-4" />-->
<!--          <div class="flex-grow">-->
<!--            <h3 class="text-lg font-semibold mb-2">{{ item.name }}</h3>-->
<!--            <p class="text-gray-600">{{ splitNumber(item.price) }} руб. x {{ item.quantity }}</p>-->
<!--            <div class="flex items-center mt-2">-->
<!--              <button @click="decrementQuantity(item)" class="text-gray-500 hover:text-gray-700 px-2">-</button>-->
<!--              <span class="mx-2">{{ item.quantity }}</span>-->
<!--              <button @click="incrementQuantity(item)" class="text-gray-500 hover:text-gray-700 px-2">+</button>-->
<!--            </div>-->
<!--          </div>-->
<!--          <button @click="removeItemFromCart(item)" class="text-red-500 hover:text-red-700 ml-4">-->
<!--            Удалить-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="total-container bg-green-200 p-4 rounded-lg shadow-md mt-4">-->
<!--        <p class="text-xl font-bold">Итого: {{ splitNumber(store.total) }} руб.</p>-->
<!--        <button class="checkout-button bg-green-800 hover:bg-green-900 text-white py-2 px-4 rounded-lg mt-4 w-full">-->
<!--          Оформить заказ-->
<!--        </button>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>



<script setup>
import { store } from '../../../../store.js';

const removeItemFromCart = (item) => {
  store.removeFromCart(item);
};

const incrementQuantity = (item) => {
  store.incrementQuantity(item);
};

const decrementQuantity = (item) => {
  store.decrementQuantity(item);
};

const splitNumber = (number) => {
  return number.toLocaleString('en-US')
      .replace(/,/g, ' ')  // Заменяет запятые на пробелы
      .replace(/\./g, ','); // Заменяет точки на запятые
};

</script>

<style scoped>
.cart-page-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}



.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.total-container {
  text-align: left;
}

.checkout-button {
  transition: background-color 0.3s;
}
</style>