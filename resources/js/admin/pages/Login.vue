<script setup>
import 'primeicons/primeicons.css'
import axios from 'axios';
import {ref, watch} from 'vue';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

const nickname = ref('');
const password = ref("");
const error = ref(false);
function login() {
  axios.post('/login', {
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

  <div class='box'>
    <div class='wave -one'> </div>
    <div class='wave -two'></div>
    <div class='wave -three'></div>
  </div>

  <div class='box'>
    <div class='wave2 -one'> </div>
    <div class='wave2 -two'></div>
    <div class='wave2 -three'></div>
  </div>

  <div class="box">
    <div class="box-inner"></div>
  </div>

  <div class="flex flex-col brand-text absolute left-6 top-6">
    <span class="text-2xl font-bold font-sans italic">HEADHEARS</span>
    <span class="text-xl font-bold font-sans text-white">Панель администратора</span>
  </div>


  <div class="absolute top-6 right-6">
    <div class="flex items-center">
      <span class="text-xs pr-2 content-center">Возникли вопросы?</span>
      <Button label="Техподдержка" class="h-7 text-xs"></Button>
    </div>
  </div>

  <div class="flex items-center justify-center h-screen">
    <div class="">

      <Card style="width: 28rem; padding: 40px 30px 35px; overflow: hidden" class="form shadow-none">
        <template #header>

        </template>
        <template #title>
          <span class="text-center">Добро пожаловать</span>
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
                         @input="error=false" :invalid="error"/>
            </IconField>
            <Badge v-if="error" severity="danger">Неверные данные. Попробуйте снова!</Badge>
          </div>

        </template>
        <template #footer>
          <div class="flex gap-3">
            <Button label="Войти" class="w-full" @click="login" />
          </div>
        </template>
      </Card>

    </div>

  </div>

</template>

<style scoped>

#password .p-password-input {
  width: 375px;
}

.form {
  box-shadow: 0 10px 20px 10px rgb(0 0 0 / 0.1);
  text-align: center;
}

</style>

<style lang="scss" scoped>

//Шрифт

@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
@font-face {
  font-family: 'Rubik', sans-serif;
  src: url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
}

/* Анимированный фон */
$bg-url: "/public/img/login/background-cell-pink.png";
$bg-width: 50px;
$bg-height: 50px;

body {
  // Фон
  background:
      url("/img/login/background-top2.svg") center no-repeat,
      url("/img/login/background-pink.png") bottom center no-repeat;
  background-size: cover, cover;
}

@-webkit-keyframes bg-scrolling-reverse {
  100% { background-position: $bg-width $bg-height, bottom center; }
}
@-moz-keyframes    bg-scrolling-reverse {
  100% { background-position: $bg-width $bg-height, bottom center; }
}
@-o-keyframes      bg-scrolling-reverse {
  100% { background-position: $bg-width $bg-height, bottom center; }
}
@keyframes         bg-scrolling-reverse {
  100% { background-position: center, -$bg-width $bg-height, bottom center; }
}

@-webkit-keyframes bg-scrolling {
  0% { background-position: $bg-width $bg-height, bottom center}
}
@-moz-keyframes    bg-scrolling {
  0% { background-position: $bg-width $bg-height, bottom center}
}
@-o-keyframes      bg-scrolling {
  0% { background-position: $bg-width $bg-height, bottom center}
}
@keyframes         bg-scrolling {
  0% { background-position: $bg-width $bg-height, bottom center}
}

/* Анимация волн */
.wave {
  position: absolute;
  opacity: .4;
  width: 730px;
  height: 770px;
  margin-left: -300px;
  margin-top: -550px;
  border-radius: 53%;
}

@keyframes rotate {
  from {transform: rotate(0deg);}
  from {transform: rotate(360deg);}
}

.wave.-one {
  animation: rotate 15800ms infinite linear;
  opacity: 30%;
  background: linear-gradient(-45deg, #ee52b0, #d63ce7, #233bd5, #c323d5);
}
.wave.-two {
  animation: rotate 16000ms infinite linear;
  opacity: 60%;
  background: linear-gradient(-45deg, #ee52b0, #d63ce7, #233bd5, #c323d5);
}
.wave.-three {
  animation: rotate 17000ms infinite linear;
  opacity: 20%;
  background: linear-gradient(-45deg, #ee52b0, #d63ce7, #233bd5, #c323d5);
}

.wave2 {
  position: absolute;
  right: 255px;
  opacity: .4;
  width: 590px;
  height: 620px;

  margin-top: -540px;
  border-radius: 53%;
}

@keyframes rotate {
  from {transform: rotate(0deg);}
  from {transform: rotate(360deg);}
}

.wave2.-one {
  animation: rotate 14990ms infinite linear;
  opacity: 10%;
  background: linear-gradient(-45deg, #1627ee, #3c4ae7, #a000ff, #235bd5);
}

.wave2.-two {
  animation: rotate 15500ms infinite linear;
  opacity: 60%;
  background: linear-gradient(-45deg, #1627ee, #3c4ae7, #a000ff, #235bd5);
}
.wave2.-three {
  animation: rotate 16000ms infinite linear;
  opacity: 30%;
  background: linear-gradient(-45deg, #1627ee, #3c4ae7, #a000ff, #235bd5);
}

</style>
