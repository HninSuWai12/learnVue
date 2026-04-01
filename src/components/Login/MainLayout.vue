<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const logout = () => {
  localStorage.removeItem("token");
  router.push("/login");
};
</script>

<template>
  <div style="display:flex">

    <div style="width:200px;background:#eee;height:100vh;padding:20px">
      <h3>Menu</h3>

      <router-link to="/dashboard">Dashboard</router-link>
      <br />
      <router-link to="/users">Users</router-link>
      <br />
      <router-link to="/settings">Settings</router-link>
      <br /><br />

      <button @click="logout">Logout</button>
    </div>

    <div style="flex:1;padding:20px">
      <router-view />
    </div>

  </div>
</template>