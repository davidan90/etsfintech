import Vue from "vue";
import comment from "./comment";

Vue.mixin({
  beforeCreate() {
    const options = this.$options;
    if (options.services) {
      this.$services = options.services;
    } else if (options.parent && options.parent.$services) {
      this.$services = options.parent.$services;
    }
  }
});

export default function() {
  return {
    comment: comment()
  };
}
