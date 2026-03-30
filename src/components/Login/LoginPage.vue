<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginApi } from '../api/login'

const router = useRouter()

const name = ref('')
const password = ref('')
const error = ref('')

const handleLogin = async () => {
    const token = localStorage.getItem("token") ;
  try {

    const { res, data } = await loginApi(name.value, password.value)

    if (res.ok) {
    //    alert("HEllo") ;
      router.push('/hello')
    } else {
      error.value = data.message
    }

  } catch (err) {
    error.value = "Server error"
  }
}
</script>

<template>
<h1 class="text-blue-500">Login Page</h1>

<form @submit.prevent="handleLogin">

  <div>
    <label>Name</label>
    <input v-model="name" type="text" class="border">
  </div>

  <div>
    <label>Password</label>
    <input v-model="password" type="password" class="border">
  </div>

  <button class="bg-blue-500 text-white px-3 py-1 mt-2">
    Login
  </button>

  <p v-if="error" class="text-red-500">
    {{ error }}
  </p>

</form>
</template>