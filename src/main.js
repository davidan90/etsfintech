import Vue from "vue";
import * as svgicon from "vue-svgicon";
import HighchartsVue from "highcharts-vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import i18n from "./i18n";
import services from "./services";
import utils from "./utils";

Vue.use(svgicon, {
  classPrefix: "etsfintechicon-"
});

Vue.use(HighchartsVue);

new Vue({
  el: "#etsfintechDavid",
  router,
  store,
  i18n,
  services: services(),
  utils: utils(),
  render: h => h(App)
});
