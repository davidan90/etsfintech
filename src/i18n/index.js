import Vue from "vue";
import VueI18n from "vue-i18n";
import appEs from "./app/es";
import appEn from "./app/en";
import homeEs from "./home/es";
import homeEn from "./home/en";
import contactEs from "./contact/es";
import contactEn from "./contact/en";
import notFoundEs from "./notFound/es";
import notFoundEn from "./notFound/en";

Vue.use(VueI18n);

const messages = {
  es: {
    app: appEs,
    home: homeEs,
    contact: contactEs,
    notFound: notFoundEs
  },
  en: {
    app: appEn,
    home: homeEn,
    contact: contactEn,
    notFound: notFoundEn
  }
};

export default new VueI18n({
  locale: "en",
  messages
});
