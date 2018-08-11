import Vue from "vue";
import { recursion } from "./recursion";

Vue.mixin({
  beforeCreate() {
    const options = this.$options;
    if (options.utils) {
      this.$utils = options.utils;
    } else if (options.parent && options.parent.$utils) {
      this.$utils = options.parent.$utils;
    }
  }
});

export default function() {
  return {
    recursion
  };
}
