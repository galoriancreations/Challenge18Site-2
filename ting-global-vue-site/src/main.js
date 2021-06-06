import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueGoodTable from "vue-good-table";
import "vue-good-table/dist/vue-good-table.css";
import VueAgile from "vue-agile";
import VueYoutube from "vue-youtube";
import linkify from "vue-linkify";

import Page from "./components/layout/Page";
import BaseButton from "./components/UI/BaseButton";
import BaseSpinner from "./components/UI/BaseSpinner";
import WhiteSection from "./components/layout/WhiteSection";
import SectionHeading from "./components/layout/SectionHeading";
import WavePatternBottom from "./components/extras/WavePatternBottom";
import WavePatternTop from "./components/extras/WavePatternTop";
import ErrorMessage from "./components/UI/ErrorMessage";

Vue.config.productionTip = false;

Vue.use(VueGoodTable);
Vue.use(VueAgile);
Vue.use(VueYoutube);
Vue.directive("linkified", linkify);

Vue.component("Page", Page);
Vue.component("BaseButton", BaseButton);
Vue.component("BaseSpinner", BaseSpinner);
Vue.component("WhiteSection", WhiteSection);
Vue.component("SectionHeading", SectionHeading);
Vue.component("WavePatternBottom", WavePatternBottom);
Vue.component("WavePatternTop", WavePatternTop);
Vue.component("ErrorMessage", ErrorMessage);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
