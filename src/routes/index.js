import Vue from "vue";
import Router from "vue-router";
import { homeRoutes } from "./home";
import { contactRoutes } from "./contact";
import { NotFound } from "views";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    ...homeRoutes,
    ...contactRoutes,
    {
      path: "*",
      component: NotFound
    }
  ]
});
