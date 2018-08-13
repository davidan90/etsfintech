import Vue from "vue";
import * as svgicon from "vue-svgicon";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import i18n from "./i18n";
import api from "./api";
import utils from "./utils";

Vue.use(svgicon, {
  classPrefix: "AppIcon-"
});

new Vue({
  el: "#etsfintechDavid",
  router,
  store,
  i18n,
  api: api(),
  utils: utils(),
  render: h => h(App)
});
