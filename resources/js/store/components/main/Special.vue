<script setup xmlns="http://www.w3.org/1999/html">

</script>

<template>


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
          <Button label="В корзину" class="w-full bg-[#3DA35D] hover:bg-[#308049] border-0" />
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
          <Button label="В корзину" class="w-full bg-[#3DA35D] hover:bg-[#308049] border-0" />
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

<style scoped>

</style>