import { SHOW_ASIDE, HIDE_ASIDE } from "./mutation-types";

export default {
  [SHOW_ASIDE](state) {
    state.aside.show = true;
  },
  [HIDE_ASIDE](state) {
    state.aside.show = false;
  }
};
