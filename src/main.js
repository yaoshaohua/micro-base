import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import { registerMicroApps } from "qiankun";

Vue.use(Antd);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

registerMicroApps(
  [
    {
      name: "micro-vue",
      entry: process.env.VUE_APP_ENTRY_VUE2,
      container: "#micro-vue",
      activeRule: "/micro-vue/",
    },
    {
      name: "micro-vue3",
      entry: process.env.VUE_APP_ENTRY_VUE3,
      container: "#micro-vue3",
      activeRule: "/micro-vue3/",
    },
  ],
  {
    beforeLoad: (app) => {
      console.log("before load app.name====>>>>>", app.name);
    },
    beforeMount: [
      (app) => {
        console.log("[LifeCycle] before mount %c%s", "color: green;", app.name);
      },
    ],
    afterMount: [
      (app) => {
        console.log("[LifeCycle] after mount %c%s", "color: green;", app.name);
      },
    ],
    afterUnmount: [
      (app) => {
        console.log(
          "[LifeCycle] after unmount %c%s",
          "color: green;",
          app.name
        );
      },
    ],
  }
);