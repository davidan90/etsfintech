import Vue from "vue";
import VueI18n from "vue-i18n";
import appEs from "./app/es";
import homeEs from "./home/es";
import contactEs from "./contact/es";
import notFoundEs from "./notFound/es";

Vue.use(VueI18n);

const messages = {
  es: {
    app: appEs,
    home: homeEs,
    contact: contactEs,
    notFound: notFoundEs
  }
};

export default new VueI18n({
  locale: "es",
  messages
});
