import { createApp } from "vue";

import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(PrimeVue);

app.mount("#app");
