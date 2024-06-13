<script>

import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Image from 'primevue/image';

</script>

<template>

  <Toolbar class="rounded-none border-none bg-gray-100 h-20 mt-24 px-32">
    <template #start>
      <label class="font-sans italic font-bold text-2xl">HEADHEARS</label>


    </template>

    <template #center>
      <div class="">
        <Button class="mx-2 text-gray-600" link >О нас</Button>
        <Button class="mx-2 text-gray-600" link>Услуги</Button>
        <Button class="mx-2 text-gray-600"  link>Связь с нами</Button>
        <Button class="mx-2 text-gray-600"  link>Сотрудничество</Button>
      </div>

    </template>

    <template #end>
      <div>
        <i class="pi pi-telegram text-2xl text-gray-400 mx-4" />
        <i class="pi pi-instagram text-2xl text-gray-400 mx-4" />
      </div>
    </template>


  </Toolbar>

</template>

<style scoped>

</style>