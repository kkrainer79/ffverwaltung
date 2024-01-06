import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App);
app.config.warnHandler = () => null;
app.use(store);
app.use(router);
app.mount("#app");
