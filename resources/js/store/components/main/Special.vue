<script setup xmlns="http://www.w3.org/1999/html">
import ConfirmDialog from 'primevue/confirmdialog';

import {ref} from "vue";

const cartModal = ref(false)
// function addToCart() {
//   cartModal.value = !cartModal
// }


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
    name: 'Rombica MySound Chroma Grey\n',
    price: 3990,
    image: 'img/main/case.png'
  };
  store.addToCart(item);
};


const buttonText = ref('В корзину')
const buttonClass = ref('w-full bg-[#3DA35D] hover:bg-[#308049] border-0')


function handleButtonClick() {
  addItemToCart()
  cartModal.value = true
  toggleButtonState()
}

const buttonSwap = ref(false);
function toggleButtonState() {
  buttonSwap.value = !buttonSwap.value;
}

// function redirectToCart() {
//   document.location.href = "/cart";
// }

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

<!--    <div class="flex flex-wrap justify-content-center gap-2 mb-3">-->
<!--      <Button @click="cartModal('top')" icon="pi pi-arrow-down" label="Top" severity="secondary" style="min-width: 10rem"></Button>-->
<!--    </div>-->



  <div class="flex flex-col justify-center">

    <!--    Заголовок-->
    <div class="flex justify-center">
      <Toolbar style="width: 78rem" class="flex justify-between rounded-none border-none mt-8">
        <template #start>
          <div class="flex justify-start ">
            <span class="text-3xl font-bold">Специальные предложения</span>
          </div>
        </template>
        <template #end>
          <Button icon="pi pi-angle-left" class="h-7 bg-[#3DA35D] hover:bg-[#308049] border-0 mx-2 rounded-full">
          </Button>

          <Button icon="pi pi-angle-right" class="h-7 bg-[#3DA35D] hover:bg-[#308049] border-0 mx-2 rounded-full">
          </Button>
        </template>
      </Toolbar>
    </div>
    <!--    Конец заголовка-->


    <div class="flex justify-center">

      <Card style="width: 25rem; overflow: hidden" class="m-4 mt-6  shadow-md border">
        <template #header>
          <div class="bg-blue-600"></div>
          <div  class="flex justify-center">
            <img src="../../../../../public/img/main/major.png" height="210" width="193"/>
          </div>
        </template>
        <template #title>Marshall Major IV Black</template>
        <template #subtitle>
          <div class="flex">
            <label class="text-[#3E8914]">5 990 руб</label>
            <label class="line-through ml-10">14 990 руб</label>
          </div>
        </template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
          </p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-5">
            <router-link to="/catalog/marshall" tag="div" class="w-full">
              <Button label="Просмотр"  severity="success" outlined class="w-full" />
            </router-link>

            <Button v-if="!buttonSwap" @click="handleButtonClick" label="В корзину"
                    class="w-full bg-[#3DA35D] hover:bg-[#308049] border-0" />
            <Button v-if="buttonSwap" @click="handleButtonClick" label="В корзине"
                    class="w-full bg-[#3DA35D] hover:bg-[#308049] border-0" disabled />

          </div>
        </template>
      </Card>

      <Card style="width: 25rem; overflow: hidden" class="m-4 mt-6 pt-2 shadow-md border">
        <template #header>
          <div  class="flex justify-center h-[200px] pt-4">
            <img src="../../../../../public/img/main/case.png" />
          </div>
        </template>
        <template #title>Rombica MySound Chroma Grey</template>
        <template #subtitle>
          <label class="text-[#3E8914]">3 990 руб</label>
          <label class="line-through ml-6">4 990 руб</label>
        </template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
          </p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Просмотр"  severity="success" outlined class="w-full" />
            <Button @click="addItemToCart2(); cartModal=true" label="В корзину" class="w-full bg-[#3DA35D] hover:bg-[#308049] border-0" />
          </div>
        </template>
      </Card>

      <Card style="width: 25rem; overflow: hidden" class="m-4 mt-6 pt-2 shadow-md border">
        <template #header>
          <div  class="flex justify-center h-[200px] pt-4">
            <img src="../../../../../public/img/main/clock.png" height="218" width="149"/></div>
        </template>
        <template #title>1MORE Penta Driver Black</template>
        <template #subtitle>
          <label class="text-[#3E8914]">10 950 руб</label>
          <label class="line-through ml-6">14 950 руб</label>
        </template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
          </p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Просмотр"  severity="success" outlined class="w-full" />
            <Button label="В корзину" class="w-full bg-[#3DA35D] hover:bg-[#308049] border-0" />
          </div>
        </template>
      </Card>

    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Наушники Marshall Major IV Black',
          price: 5990,
          image: 'path/to/image.jpg'
        },
        {
          id: 2,
          name: 'Наушники Sennheiser HD 450BT',
          price: 12990,
          image: 'path/to/image.jpg'
        }
      ],
      cart: []
    }
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    }
  }

}

</script>

<style scoped>

</style>