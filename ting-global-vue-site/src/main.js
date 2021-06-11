import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueGoodTable from "vue-good-table";
import "vue-good-table/dist/vue-good-table.css";
import VueAgile from "vue-agile";
import VueYoutube from "vue-youtube";
import Vuescroll from "vuescroll";
import linkify from "vue-linkify";

import Page from "./components/layout/Page";
import BaseButton from "./components/UI/BaseButton";
import BaseSpinner from "./components/UI/BaseSpinner";
import WhiteSection from "./components/layout/WhiteSection";
import SectionHeading from "./components/UI/SectionHeading";
import DashboardSection from "./components/layout/DashboardSection";
import DashboardModal from "./components/layout/DashboardModal";
import WavePatternBottom from "./components/extras/WavePatternBottom";
import WavePatternTop from "./components/extras/WavePatternTop";
import SectionSeperator from "./components/extras/SectionSeperator";
import ErrorMessage from "./components/UI/ErrorMessage";

Vue.config.productionTip = false;

Vue.use(VueGoodTable);
Vue.use(VueAgile);
Vue.use(VueYoutube);
Vue.use(Vuescroll);
Vue.directive("linkified", linkify);

Vue.component("Page", Page);
Vue.component("BaseButton", BaseButton);
Vue.component("BaseSpinner", BaseSpinner);
Vue.component("WhiteSection", WhiteSection);
Vue.component("SectionHeading", SectionHeading);
Vue.component("DashboardSection", DashboardSection);
Vue.component("DashboardModal", DashboardModal);
Vue.component("WavePatternBottom", WavePatternBottom);
Vue.component("WavePatternTop", WavePatternTop);
Vue.component("SectionSeperator", SectionSeperator);
Vue.component("ErrorMessage", ErrorMessage);

Vue.prototype.$vuescrollConfig = {
  bar: { background: "#000c66" }
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
