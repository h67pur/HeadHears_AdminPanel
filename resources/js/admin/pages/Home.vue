<script setup>

</script>

<template>
  <div class="container mx-auto">
    <div class="flex flex-col items-center mb-10">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">HEEVOCK, добро пожаловать!</h1>
      <p class="text-gray-600 text-lg">Ваш личный портал для управления всеми аспектами сайта <b class="italic text-gray-700">HEADHEARS</b>.</p>
    </div>

    <div class="flex flex-col items-center mb-6">
      <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Основная панель управления</h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div class="bg-white shadow-md rounded-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-800">Пользователи</h3>
          <Button severity="contrast"><i class="pi pi-eye"/></Button>
        </div>
        <p class="text-gray-600 mb-4 text-center italic p-6">
          Этот раздел позволяет централизованно управлять всеми зарегистрированными пользователями сайта.
          Вы можете легко просматривать информацию о них, редактировать их данные, а также отслеживать их активность.
        </p>
        <div class="flex justify-center space-x-2">
          <Button>Статистика</Button>
          <Button>Поиск</Button>
        </div>
      </div>

      <div class="bg-white shadow-md rounded-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-800">Товары</h3>
          <div class="flex space-x-2">
            <Button severity="contrast"><i class="pi pi-eye"/></Button>
          </div>
        </div>
        <p class="text-gray-600 mb-4 text-center italic p-6">
          Этот раздел позволяет управлять всем ассортиментом товаров, представленных на сайте.
          Вы можете легко добавлять новые продукты, редактировать существующие, организовывать их по категориям и брендам, а также отслеживать наличие на складе.
        </p>
        <div class="flex justify-center space-x-2">
          <Button>Категории</Button>
          <Button>Бренды</Button>
          <Button>Остатки</Button>
        </div>
      </div>

      <div class="bg-white shadow-md rounded-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-800">Заказы</h3>
          <Button severity="contrast"><i class="pi pi-eye"/></Button>
        </div>
        <p class="text-gray-600 mb-4 text-center italic p-6">
          Этот раздел позволяет эффективно управлять всеми заказами, размещенными на сайте.
          Вы можете просматривать детали заказов, отслеживать их статус, взаимодействовать с клиентами, обрабатывать оплаты и осуществлять доставку.
        </p>
        <div class="flex justify-center space-x-2">
          <Button>Статусы</Button>
          <Button>Оплата</Button>
          <Button>Доставка</Button>
        </div>
      </div>

      <div class="bg-white shadow-md rounded-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-800">Отзывы</h3>
          <Button severity="contrast"><i class="pi pi-eye"/></Button>
        </div>
        <p class="text-gray-600 mb-4 text-center italic p-6">
          Этот раздел предоставляет возможность управлять отзывами, оставленными клиентами на сайте.
          Вы можете просматривать все поступившие отзывы, отвечать на них, а также модерировать и публиковать одобренные отзывы.
        </p>
        <div class="flex justify-center space-x-2">
          <Button>Новые</Button>
          <Button>Одобренные</Button>
          <Button>Отклоненные</Button>
        </div>
      </div>

      <div class="bg-white shadow-md rounded-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-800">Скидки</h3>
          <Button severity="contrast"><i class="pi pi-eye"/></Button>
        </div>
        <p class="text-gray-600 mb-10 text-center italic p-6">
          Этот раздел позволяет эффективно управлять скидками и акциями на сайте.
          Вы можете создавать различные виды скидок, таких как постоянные, временные, для определенных групп клиентов или товаров.
        </p>
        <div class="flex justify-center space-x-2">
          <Button>Постоянные</Button>
          <Button>Временные</Button>
          <Button>Групповые</Button>
        </div>
      </div>

      <div class="bg-white shadow-md rounded-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-800">Статистика</h3>
          <Button severity="contrast"><i class="pi pi-eye"/></Button>
        </div>
        <p class="text-gray-600 mb-4 text-center italic p-6">
          Этот раздел предоставляет всестороннюю аналитику и статистику по продажам на сайте.
          Вы сможете отслеживать ключевые показатели, такие как общий объем продаж, средний чек, динамику продаж за различные периоды, самые популярные товары и категории.
        </p>
        <div class="flex justify-center space-x-2">
          <Button>Общая</Button>
          <Button>Динамика</Button>
          <Button>Категории</Button>
          <Button>Товары</Button>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center mt-8 mb-8">
      <h2 class="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Интерфейс и дополнительные возможности</h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div class="bg-white shadow-md rounded-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-800">Конструктор</h3>
          <Button severity="contrast"><i class="pi pi-eye"/></Button>
        </div>
        <p class="text-gray-600 mb-4 text-center italic p-6">
          Этот раздел позволяет вам управлять внешним видом и структурой вашего сайта.
          Используя интуитивно понятный визуальный редактор, вы сможете легко настраивать макеты страниц, изменять цветовые схемы, добавлять или редактировать элементы дизайна,
          такие как логотип, меню, заголовки и графические элементы.
        </p>
        <div class="flex justify-center space-x-2">
          <Button>Шаблоны</Button>
          <Button>Макеты</Button>
          <Button>Цвета</Button>
        </div>
      </div>

      <div class="bg-white shadow-md rounded-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-800">Виджеты</h3>
          <Button severity="contrast"><i class="pi pi-eye"/></Button>
        </div>
        <p class="text-gray-600 mb-4 text-center italic p-6">
          В этом разделе вы можете управлять различными виджетами, которые будут размещены на страницах вашего сайта.
          Виджеты - это интерактивные элементы, которые помогают пользователям взаимодействовать с вашим контентом и сервисами,
          такие как формы обратной связи, счетчики посетителей, слайдеры, баннеры и тд.
        </p>
        <div class="flex justify-center space-x-2">
          <Button>Новые</Button>
          <Button>Одобренные</Button>
          <Button>Отклоненные</Button>
        </div>
      </div>

      <div class="bg-white shadow-md rounded-lg p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-800">Статьи</h3>
          <Button severity="contrast"><i class="pi pi-eye"/></Button>
        </div>
        <p class="text-gray-600 mb-10 text-center italic p-6">
          В этом разделе вы можете управлять статьями, которые будут публиковаться на сайте.
          Используя удобный редактор, вы сможете легко создавать, редактировать и публиковать новые статьи.
          Кроме того, вы можете отслеживать аналитику просмотров и взаимодействия пользователей с  публикациями.
        </p>
        <div class="flex justify-center space-x-2">
          <Button>Все статьи</Button>
          <Button>Категории</Button>
          <Button>Аналитика</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>