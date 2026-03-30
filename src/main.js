import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
const pinia = createPinia();
createApp(App).use(pinia);
createApp(App).use(router).mount("#app");
