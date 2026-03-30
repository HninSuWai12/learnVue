import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/components/Login/LoginPage.vue";
import FirstForm from "@/components/forms/FirstForm.vue";

const routes = [
  {
    path: "/",
    component: LoginPage,
  },
  {
    path: "/hello",
    component: FirstForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
