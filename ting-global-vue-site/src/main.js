import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Page from "./components/layout/Page";
import BaseButton from "./components/UI/BaseButton";

Vue.config.productionTip = false;

Vue.component("Page", Page);
Vue.component("BaseButton", BaseButton);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
