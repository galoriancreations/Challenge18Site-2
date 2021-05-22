import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueGoodTable from "vue-good-table";
import "vue-good-table/dist/vue-good-table.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";


import Page from "./components/layout/Page";
import BaseButton from "./components/UI/BaseButton";
import BaseSpinner from "./components/UI/BaseSpinner";
import WhiteSection from "./components/layout/WhiteSection";
import SectionHeading from "./components/layout/SectionHeading";
import WavePatternBottom from "./components/extras/WavePatternBottom";
import WavePatternTop from "./components/extras/WavePatternTop";

Vue.config.productionTip = false;

Vue.use(VueGoodTable);
Vue.use(VueAwesomeSwiper);

Vue.component("Page", Page);
Vue.component("BaseButton", BaseButton);
Vue.component("BaseSpinner", BaseSpinner);
Vue.component("WhiteSection", WhiteSection);
Vue.component("SectionHeading", SectionHeading);
Vue.component("WavePatternBottom", WavePatternBottom);
Vue.component("WavePatternTop", WavePatternTop);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
