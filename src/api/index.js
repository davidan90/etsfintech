import Vue from "vue";
import { symbols } from "./symbols";

Vue.mixin({
  beforeCreate() {
    const options = this.$options;
    if (options.api) {
      this.$api = options.api;
    } else if (options.parent && options.parent.$api) {
      this.$api = options.parent.$api;
    }
  }
});

export default function() {
  return {
    symbols
  };
}
