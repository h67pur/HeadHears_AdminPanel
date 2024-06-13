<script setup>
import Special from "../components/main/Special.vue";
import Popular from "../components/main/Popular.vue";
import Categories from "../components/main/Categories.vue";

</script>

<template>


<!--Скидка 15% на первую покупку-->
  <div class="relative mt-4">
    <img class="w-full object-cover" src="../../../../public/img/main/1.png" width="1920" alt="headphones">
    <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
    <div class="absolute inset-0 flex items-center justify-center">
      <h2 class="text-white text-2xl">Скидка 15% на первую покупку</h2>
    </div>
    <div class="absolute inset-x-0 bottom-24 flex items-center justify-center">
      <Button label="Получить" class="bg-[#3DA35D] hover:bg-[#308049] outline-none border-0 px-6" />
    </div>
  </div>


<!--СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ-->
  <Special />


<!--ВЫСОКИЙ РЕЙТИНГ-->
  <Popular />


<!--Marshall Major IV-->
  <div class="relative mt-4">
    <img class="w-full object-cover" src="../../../../public/img/main/face.png" width="1920" alt="headphones">
    <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
    <div class="absolute inset-0 flex items-center justify-center">
      <h2 class="text-white text-4xl">Marshall Major IV</h2>
    </div>
    <router-link to="/catalog/marshall">
    <div class="absolute inset-x-0 bottom-24 flex items-center justify-center">
      <Button label="Ознакомиться" class="bg-[#3DA35D] hover:bg-[#308049] outline-none border-0 px-6" />
    </div>
    </router-link>
  </div>


<!--ТОП КАТЕГОРИИ-->
  <Categories />


<!--ПОЛЕЗНОЕ-->
  <div class="flex flex-col justify-center">

<!--    Заголовок-->
    <div class="flex justify-center">
      <Toolbar style="width: 60rem" class="flex justify-between rounded-none border-none mt-8">
        <template #start>
          <div class="flex justify-start ">
            <span class="text-3xl font-bold">Полезное</span>
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
      <Card style="width: 30rem; overflow: hidden" class="m-4 mt-6  shadow-0 border-none">
        <template #header>
          <div class="bg-blue-600"></div>
          <div  class="flex justify-center">
            <img src="../../../../public/img/main/set.jpg"/>
          </div>
        </template>
        <template #title>

        </template>
        <template #subtitle>

        </template>
        <template #content>
          <p class="m-0">
            При выборе аудиотехники для дома или профессионального использования важно учитывать несколько ключевых факторов. Вот несколько советов, которые помогут вам принять осознанное решение
          </p>
        </template>
        <template #footer>
          <router-link to="/topics/choice">
            <div class="flex gap-3 mt-1">
              <Button label="Подробнее" class="w-full bg-[#3DA35D] hover:bg-[#308049] border-0" />
            </div>
          </router-link>

        </template>
      </Card>

      <Card style="width: 30rem; overflow: hidden" class="m-4 mt-6  shadow-0 border-none">
        <template #header>
          <div class="bg-blue-600"></div>
          <div  class="flex justify-center">
            <img src="../../../../public/img/main/desk.jpg"/>
          </div>
        </template>
        <template #title>

        </template>
        <template #subtitle>

        </template>
        <template #content>
          <p class="m-0">
            Чтобы ваша аудиотехника радовала вас качественным звуком и служила долго, важно следить за ее состоянием и правильно ухаживать за ней        </p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-7">
            <Button label="Подробнее" class="w-full bg-[#3DA35D] hover:bg-[#308049] border-0" disabled/>
          </div>
        </template>
      </Card>
    </div>

  </div>

</template>

<style scoped>

</style>
