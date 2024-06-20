<script setup>
import 'primeicons/primeicons.css'
import axios from 'axios';
import {ref, watch} from 'vue';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

const nickname = ref('');
const password = ref("");
const email = ref("");
const phone = ref("");
const nickname2 = ref('');
const password2 = ref("");
const dateBirth = ref('');
const fio = ref();
const switcher = ref('login');
const error = ref(false);
function login() {
  axios.post('/admin/login', {
    nickname: nickname.value,
    password: password.value,
  })
      .then(response => {
        if (response.data['auth'] === true) {
          window.location = "/";
        } else {
          error.value = true;
        }
      })
}
</script>

<template>
  <div v-if="switcher === 'login'" class="flex items-center justify-center">
    <div class="">

      <Card class="form shadow-none mt-28 mb-44">
        <template #header>

        </template>
        <template #subtitle></template>
        <template #content>

          <div class="flex flex-col gap-2 py-5 ">
            <label for="username" class="text-sm">Имя пользователя</label>
            <IconField iconPosition="left">
              <InputIcon class="pi pi-user"> </InputIcon>
              <InputText class="h-9 w-full"  v-model="nickname" placeholder="heevock"
                         @input="error=false" :invalid="error"/>
            </IconField>
          </div>

          <div class="card flex flex-col gap-2 pb-4 justify-content-center">
            <label for="password" class="text-sm">Пароль</label>

            <IconField iconPosition="left">
              <InputIcon class="pi pi-lock"> </InputIcon>
              <InputText class="h-9 w-full" v-model="password" type="password" toggleMask
                         @input="error=false" :invalid="error" placeholder="***********"/>
            </IconField>
            <Badge v-if="error" severity="danger">Неверные данные. Попробуйте снова!</Badge>
          </div>

        </template>
        <template #footer>
          <div class="flex gap-3">
            <Button label="Войти" class="w-full" @click="login" />
          </div>
          <div class="flex gap-3">
            <Button label="Регистрация" class="w-full" link @click="switcher = 'register'"/>
          </div>
        </template>
      </Card>

    </div>

  </div>
  <div v-if="true" class="flex items-center justify-center">
    <div class="">

      <Card class="form shadow-none mt-28 mb-44">
        <template #header>

        </template>
        <template #subtitle>Регистрация</template>
        <template #content>
          <div class="grid grid-cols-2 gap-6 py-5 ">
            <div class="flex flex-col">
              <label for="username" class="text-sm">Имя пользователя</label>
                <InputText class="h-9 w-full"  v-model="nickname2" placeholder="heevock" @input="error=false" :invalid="error"/>
            </div>
            <div class="flex flex-col">
              <label for="username" class="text-sm">Почта</label>
              <InputText class="h-9 w-full"  v-model="email" placeholder="heevock@gmail.com" @input="error=false" :invalid="error"/>
            </div>
            <div class="flex flex-col">
              <label for="username" class="text-sm">Телефон</label>
              <InputText class="h-9 w-full"  v-model="phone" placeholder="+79626544587" @input="error=false" :invalid="error"/>
            </div>
            <div class="flex flex-col">
              <label for="username" class="text-sm">Дата рождения</label>
              <InputText class="h-9 w-full"  v-model="dateBirth" placeholder="11.09.2002" @input="error=false" :invalid="error"/>
            </div>
            <div class="flex flex-col col-span-2">
              <label for="username" class="text-sm">ФИО</label>
              <InputText class="h-9 w-full"  v-model="fio" placeholder="Иванов Игорь Александрович" @input="error=false" :invalid="error"/>
            </div>
            <div class="flex flex-col col-span-2">
              <label for="username" class="text-sm">Пароль</label>
              <InputText class="h-9 w-full" v-model="password2" type="password" toggleMask
                         @input="error=false" :invalid="error" placeholder="***********"/>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="flex flex-col gap-3">
            <Button label="Создать" class="w-full" @click="switcher = 'login'" />
            <Button label="Отмена" class="w-full" link @click="switcher = 'login'"/>
          </div>
        </template>
      </Card>

    </div>

  </div>
</template>

<style scoped>

</style>