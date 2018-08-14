import Vue from "vue";
import * as svgicon from "vue-svgicon";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import i18n from "./i18n";
import api from "./api";
import services from "./services";
import utils from "./utils";

Vue.use(svgicon, {
  classPrefix: "etsfintechicon-"
});

new Vue({
  el: "#etsfintechDavid",
  router,
  store,
  i18n,
  api: api(),
  services: services(),
  utils: utils(),
  render: h => h(App)
});
