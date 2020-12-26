import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bulma";
// import "../node_modules/bulma/css/bulma.css"

createApp(App).use(router).mount("#app");
