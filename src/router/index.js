import { createRouter, createWebHistory } from "vue-router";
import FirstForm from "@/components/forms/FirstForm.vue";

import MainLayout from "@/components/Login/MainLayout.vue";
import LoginPage from "@/components/Login/LoginPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/login", // default route
  },
  {
    path: "/login",
    component: LoginPage,
  },

  {
    meta: { requiresAuth: true },
    children: [
      {
        path: "/hello",
        component: FirstForm,
      },
      {
        path: "/logout",
        component: MainLayout,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  if (to.meta.requiresAuth && !token) {
    next("/login");
  } else {
    next();
  }
});

export default router;
