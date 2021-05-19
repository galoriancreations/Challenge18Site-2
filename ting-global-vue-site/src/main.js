import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Page from "./components/layout/Page";
import BaseButton from "./components/UI/BaseButton";
import WavePatternBottom from "./components/extras/WavePatternBottom";
import WavePatternTop from "./components/extras/WavePatternTop";

Vue.config.productionTip = false;

Vue.component("Page", Page);
Vue.component("BaseButton", BaseButton);
Vue.component("WavePatternBottom", WavePatternBottom);
Vue.component("WavePatternTop", WavePatternTop);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
