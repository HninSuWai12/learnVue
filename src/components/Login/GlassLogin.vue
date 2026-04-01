<!-- <script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

const login = () => {
  console.log("Email:", email.value);
  console.log("Password:", password.value);
};
</script>

<template>
  <div class="page">
    <div class="login-card">
      <h2>Your logo</h2>
      <h3>Login</h3>

      <input
        v-model="email"
        type="email"
        placeholder="username@gmail.com"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
      />

      <button @click="login">Sign in</button>

      <p class="forgot">Forgot Password?</p>

      <div class="social">
        <button>G</button>
        <button>GH</button>
        <button>F</button>
      </div>
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

.social {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.social button {
  flex: 1;
}

.forgot {
  margin-top: 10px;
  font-size: 12px;
  opacity: 0.8;
}
</style> -->

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

const login = () => {
  console.log("Email:", email.value);
  console.log("Password:", password.value);
};
</script>

<template>
  <div
    class="h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
    style="background-image: url('@/assets/images/loginBg.png')"
  >
    <div
      class="w-[350px] p-10 rounded-2xl text-center text-white
      bg-white/10 backdrop-blur-xl
      border border-white/20
      shadow-2xl"
    >
      <h2 class="text-lg font-semibold mb-2">Your logo</h2>
      <h3 class="text-xl font-bold mb-4">Login</h3>

      <input
        v-model="email"
        type="email"
        placeholder="username@gmail.com"
        class="w-full p-3 mb-3 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full p-3 mb-3 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none"
      />

      <button
        @click="login"
        class="w-full p-3 mt-2 rounded-lg bg-blue-900 hover:bg-blue-800 transition"
      >
        Sign in
      </button>

      <p class="mt-2 text-xs opacity-80 cursor-pointer">
        Forgot Password?
      </p>

      <div class="flex gap-2 mt-5">
        <button class="flex-1 bg-white/20 rounded-lg py-2">G</button>
        <button class="flex-1 bg-white/20 rounded-lg py-2">GH</button>
        <button class="flex-1 bg-white/20 rounded-lg py-2">F</button>
      </div>
    </div>
  </div>
</template>


