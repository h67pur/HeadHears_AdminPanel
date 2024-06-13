<script>
import { ref } from 'vue'

export default {
  setup() {
    const brands = ref([
      { name: 'Marshall ', value: 'marshall ' },
      { name: 'Sony', value: 'sony' },
      { name: 'Beats', value: 'beats' },
      { name: 'Bose', value: 'bose' },
      { name: 'JBL', value: 'jbl' }
    ])
    const selectedBrands = ref([])

    const minPrice = 500
    const maxPrice = 50000
    const price = ref([minPrice, maxPrice])

    const isWired = ref(false)
    const isWireless = ref(false)

    const headphoneTypes = ref([
      { label: 'Вставные', value: 'in-ear' },
      { label: 'Накладные', value: 'on-ear' },
      { label: 'Полноразмерные', value: 'over-ear' }
    ])
    const selectedTypes = ref([])

    return {
      brands,
      selectedBrands,
      minPrice,
      maxPrice,
      price,
      isWired,
      isWireless,
      headphoneTypes,
      selectedTypes
    }
  }
}

</script>

<template>

  <div class="bg-white h-full p-4 rounded-lg shadow-md border">
    <h3 class="text-lg font-bold mb-4">Фильтрация</h3>

    <!-- Фильтр по бренду -->
    <div class="mb-4">
      <h4 class="text-sm font-semibold mb-2">Бренд</h4>
      <MultiSelect v-model="selectedBrands" :options="brands" optionLabel="name" placeholder="Выберите бренды" class="w-full" />
    </div>

    <!-- Фильтр по цене -->
    <div class="mb-4">
      <h4 class="text-sm font-semibold mb-2">Цена</h4>
      <Slider v-model="price" range class="w-full" :min="minPrice" :max="maxPrice" :step="10" />
      <div class="flex justify-between text-sm mt-2">
        <span>{{ price[0] }} руб.</span>
        <span>{{ price[1] }} руб.</span>
      </div>
    </div>

    <!-- Фильтр по типу наушников -->
    <div class="mb-4">
      <h4 class="text-sm font-semibold mb-2">Тип</h4>
      <div class="flex">
        <div class="mr-4">
          <Checkbox v-model="isWired" binary class="mr-2"></Checkbox>
          <label>Проводные</label>
        </div>
        <div>
          <Checkbox v-model="isWireless" binary class="mr-2"></Checkbox>
          <label>Беспроводные</label>
        </div>
      </div>
    </div>

    <!-- Фильтр по виду наушников -->
    <div>
      <h4 class="text-sm font-semibold mb-2">Вид</h4>
      <div>
        <div v-for="type in headphoneTypes" :key="type.value" class="mb-2">
          <Checkbox v-model="selectedTypes" :value="type.value" binary class="mr-2"></Checkbox>
          <label>{{ type.label }}</label>
        </div>
      </div>
    </div>

    <!-- Кнопка применения фильтров -->
    <div class="mt-4">
      <Button label="Применить фильтры" class="w-full bg-[#3DA35D] hover:bg-[#308049] border-none" />
    </div>
  </div>

</template>

<style>
#app > div > div.flex.flex-row.justify-center.gap-6 > div.bg-white.h-full.p-4.rounded-lg.shadow-md.border > div:nth-child(3) > div.p-slider.p-component.p-slider-horizontal.w-full > span.p-slider-range {
  background-color: #2da933 !important; /* Замените на нужный вам цвет */
}
</style>