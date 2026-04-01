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
  <div class="page">
    <div class="login-card">
      <h3>Login Page</h3>

     <form action="" @submit.prevent="handleLogin">
       <input
        v-model="name"
        type="text"
        placeholder="username@gmail.com"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
      />

      <button >Sign in</button>
     </form>

    </div>
  </div>
</template>

<style scoped>
.page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
 background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  background: linear-gradient(135deg,#0a4c8a,#0d5ea8,#0b3d6e);
  background-image: url("@/assets/images/loginBg.png");

}

/* GLASS CARD */

.login-card {
  width: 350px;
  padding: 40px;

  border-radius: 20px;

  background: rgba(255,255,255,0.1);

  backdrop-filter: blur(20px);

  border: 1px solid rgba(255,255,255,0.2);

  box-shadow: 0 20px 40px rgba(0,0,0,0.3);

  text-align: center;

  color: white;
  
}

input {
  width: 100%;
  margin: 10px 0;
  padding: 12px;

  border-radius: 10px;
  border: none;

  outline: none;

  background: rgba(255,255,255,0.2);

  color: white;
}

input::placeholder {
  color: rgba(255,255,255,0.7);
}

button {
  width: 100%;
  padding: 12px;

  margin-top: 10px;

  border-radius: 10px;
  border: none;

  background: #083d77;
  color: white;

  cursor: pointer;
}


</style>