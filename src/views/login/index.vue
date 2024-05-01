<script setup lang="ts">
import { ref } from 'vue';
import { postLogin } from '@/api/auth';
import {setLocalToken} from '@/utils/auth'
import type { MyResponse } from '@/api/auth';
import { showMsg } from '@/utils/message';

interface LoginRes extends MyResponse {
  token:    string
}

const data = ref({
  email: '',
  password: ''
})

async function handleLogin(){
  const ret = await postLogin(data.value) as LoginRes
  if(ret.code === 200){
    setLocalToken(ret.token)
    showMsg('登陆成功', 'success')
  }else {
    showMsg('账号或密码错误!', 'error')
  }
}
</script>

<template>
  <main class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100px] flex flex-col items-center">
    <div class="text-title">Login</div>
    <br/>
    <div class="flex flex-col gap-2">
      <input type="text" class="input-primary" v-model="data.email"/>
      <input type="password" class="input-primary" v-model="data.password">
    </div>
    <br/>
    <button class="py-2 px-5 bg-violet-500 text-white
                    font-semibold rounded-full shadow-md
                    hover:bg-violet-700 focus:outline-none
                    focus:ring focus:ring-violet-400 focus:ring-opacity-76
                    "
                    @click="handleLogin"
                    >
      Next
    </button>
  </main>
</template>