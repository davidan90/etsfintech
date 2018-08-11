import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import i18n from "./i18n";
import api from "./api";
import utils from "./utils";

new Vue({
  el: "#etsfintechDavid",
  router,
  store,
  i18n,
  api: api(),
  utils: utils(),
  render: h => h(App)
});
