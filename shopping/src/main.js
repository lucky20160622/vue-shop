import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 引入and-design
import Antd from "ant-design-vue";
// 引入css
import "ant-design-vue/dist/antd.css";
createApp(App)
  .use(router)
  .use(Antd)
  .mount("#app");
