<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";

const nickname = ref();
const password = ref();
const router = useRouter();
function login(){
  axios.post('/login', {
    nickname: nickname.value,
    password: password.value,
  })
      .then(response => {
        if (response.data['auth']===true){
          console.log('228');
          router.go(0);
        }
        else {
          console.log('Ебал')
        }
      })
      .catch(error => {

      });
}
</script>

<template>
    <div class="min-h-screen p-8 flex flex-col items-center justify-center transition-all duration-200 bg-gradient-to-r from-teal-400 to-yellow-200">
      <div class="w-[25rem] bg-white/20 p-9 rounded-xl backdrop-blur-xl flex flex-col gap-6 shadow-xl ">
        <div class="pointer-events-none select-none text-center flex flex-col">
          <label class="font-sans italic font-bold text-2xl">HEADHEARS</label>
          <span class="mb-3 font-sans md:text-xl tracking-wider">Панель Администратора</span>
        </div>
        <div class="flex flex-col text-center space-y-4 items-center">
          <label>Имя пользователя</label>
          <InputText v-model="nickname"/>
          <label>Пароль</label>
          <Password v-model="password" :feedback="false"/>
        </div>
        <Button label="Войти" class="bg-gradient-to-r from-blue-800 to-indigo-900" @click="login"/>
      </div>
    </div>
</template>

<style scoped>

</style>



