<script setup>
import {ref} from "vue";

const visibleCreateProduct = ref(false);
const visibleCreateCategory = ref(false);

</script>

<template>
  <div class="container relative flex flex-col justify-between h-full p-4 mx-auto">
    <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Товары</h2>

    <div class="w-full">

      <div class="flex flex-col w-full sm:flex-row mb-10 gap-4 pt-4 pr-10">

        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]">
              <div class="flex flex-col items-center text-center">
                <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">Количество товаров</h3>
                <h4 class="my-2 ml-3 text-5xl font-bold text-gray-800">1670</h4>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]">
              <div class="flex flex-col items-center text-center">
                <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">Количество категорий</h3>
                <h4 class="my-2 ml-3 text-5xl font-bold text-gray-800">22</h4>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]">
              <div class="flex flex-col items-center text-center">
                <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">Скоро закончатся</h3>
                <h4 class="my-2 ml-3 text-5xl font-bold text-gray-800">22</h4>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
          <div class="relative h-full ml-0 mr-0">
            <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
            <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg cursor-pointer
            transition-transform duration-300 hover:translate-x-[-10px] hover:translate-y-[-10px]">
              <div class="flex flex-col items-center text-center">
                <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">Количество категорий</h3>
                <h4 class="my-2 ml-3 text-5xl font-bold text-gray-800">22</h4>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div class="w-full mb-10">
        <div class="relative h-full ml-0 mr-0 sm:mr-10">
          <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
          <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
            <div class="flex items-center -mt-1">
              <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">Список категорий</h3>
            </div>
            <div class="flex flex-col">
              <Toolbar>
                <template #end>
                  <Button label="Удалить" severity="danger"><i class="pi pi-trash" /></Button>
                  <Button @click="visibleCreateCategory = true"><i class="pi pi-plus" /></Button>
                </template>
              </Toolbar>
            </div>
            <div>
              <div class="card p-4">
                <DataTable>
                  <Column header="Номер" />
                  <Column header="Название категории" />
                  <Column header="Количество товаров" />
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full mb-10">
        <div class="relative h-full ml-0 mr-0 sm:mr-10">
          <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
          <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
            <div class="flex items-center -mt-1">
              <h3 class="my-2 ml-3 text-xl font-bold text-gray-800">Список товаров</h3>
            </div>
            <div class="flex flex-col">
              <Toolbar>
                <template #end>
                  <Button label="Удалить" severity="danger"><i class="pi pi-trash" /></Button>
                  <Button @click="visibleCreateProduct = true"><i class="pi pi-plus" /></Button>
                </template>
              </Toolbar>
            </div>
            <div>
              <div class="card p-4">
                <DataTable>
                  <Column header="Номер" />
                  <Column header="Название товара" />
                  <Column header="Количество на складе" />
                  <Column header="Текущая цена" />
                  <Column header="Статус" />
                  <Column header="Фото" />
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Dialog v-model:visible="visibleCreateCategory" modal header="Добавить новую категорию" dismissable-mask :draggable="false" class="w-1/2">

  </Dialog>

  <Dialog v-model:visible="visibleCreateProduct" modal header="Добавить новый товар" dismissable-mask :draggable="false" class="w-1/2">

  </Dialog>

</template>

<style scoped>

</style>