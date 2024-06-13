<script setup>

</script>

<template>

  <div style="width: 74rem" class="flex justify-center">
    <Toolbar class="rounded-none border-none mt-8">
      <template #start>
        <div class="flex justify-start ">
          <span class="text-3xl font-bold">Топ категории</span>
        </div>
      </template>
    </Toolbar>
  </div>


  <div class="flex	 justify-center">

    <Card style="width: 30rem; overflow: hidden" class="h-70 m-4 border  shadow-none">

      <template #header>

      </template>

      <template #content>
        <div  class="flex justify-center">
          <img src="../../../../../public/img/main/headset-big.png" />
        </div>
      </template>

      <template #title>Наушники</template>
      <template #subtitle>
        <span class="ml-3">Накладные</span>
        <span class="ml-3">Вставные</span>
        <span class="ml-3">Полноразмерные</span>
      </template>

      <template #footer>
        <router-link to="/headphones">
          <div class="flex gap-3 mt-1">
            <Button label="В каталог" icon="pi pi-arrow-circle-right" iconPos="right"  severity="success" outlined class="w-full" />
          </div>
        </router-link>
      </template>
    </Card>

    <Card style="width: 30rem; overflow: hidden" class="h-70 m-4 border  shadow-none">

      <template #header>

      </template>

      <template #content>
        <div  class="flex justify-center">
          <img src="../../../../../public/img/main/speakers.png" />
        </div>
      </template>

      <template #title>Акустические системы</template>
      <template #subtitle>
        <span class="ml-3">Сабвуферы</span>
        <span class="ml-3">Беспроводная акустика</span>
      </template>

      <template #footer>
        <div class="flex gap-3 mt-1">
          <Button label="В каталог" icon="pi pi-arrow-circle-right" iconPos="right"  severity="success" outlined class="w-full" disabled/>
        </div>
      </template>
    </Card>

  </div>

  <div class="flex   justify-center px-12 px-80">

    <Card style="width: 20rem; overflow: hidden" class="h-70 m-2 border  shadow-none">

      <template #header>

      </template>

      <template #content>
        <div  class="flex justify-center py-2 h-[200px]">
          <img src="../../../../../public/img/main/vinyl.png" height="202" />
        </div>
      </template>

      <template #title>Проигрыватели винила</template>
      <template #subtitle>
        <span class="ml-3">Ретро</span>
        <span class="ml-3">С Bluetooth</span>
      </template>

      <template #footer>
        <div class="flex gap-3 mt-1">
          <Button label="В каталог" icon="pi pi-arrow-circle-right" iconPos="right"  severity="success" outlined class="w-full" disabled/>
        </div>
      </template>
    </Card>

    <Card style="width: 20rem; overflow: hidden" class="h-70 m-2 border  shadow-none">

      <template #header>

      </template>

      <template #content>
        <div  class="flex justify-center content-center py-2 h-[202px]">
          <img src="../../../../../public/img/main/dresser.png" height="202" />
        </div>
      </template>

      <template #title>Аксессуары</template>
      <template #subtitle>
        <span class="ml-3">Аксессуары для наушников</span>
      </template>

      <template #footer>
        <div class="flex gap-3 mt-1">
          <Button label="В каталог" icon="pi pi-arrow-circle-right" iconPos="right"  severity="success" outlined class="w-full" disabled/>
        </div>
      </template>
    </Card>

    <Card style="width: 20rem; overflow: hidden" class="h-70 m-2 border  shadow-none">

      <template #header>

      </template>

      <template #content>
        <div  class="flex justify-center py-2 h-[202px]">
          <img src="../../../../../public/img/main/headset-hx.png" height="202" />
        </div>
      </template>

      <template #title>Гарнитуры</template>
      <template #subtitle>
        <span class="ml-3">Игровые гарнитуры</span>
      </template>

      <template #footer>
        <div class="flex gap-3 mt-1">
          <Button label="В каталог" icon="pi pi-arrow-circle-right" iconPos="right"  severity="success" outlined class="w-full" disabled/>
        </div>
      </template>
    </Card>

  </div>

</template>

<style scoped>

</style>