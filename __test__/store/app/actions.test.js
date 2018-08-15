import AppModule from "store/modules/app";
import { SHOW_ASIDE, HIDE_ASIDE } from "store/modules/app/mutation-types";

describe("store > app > mutations.test", () => {
  let appActions;

  beforeAll(() => {
    appActions = AppModule.actions;
  });

  it("showAside", () => {
    const commit = jest.fn();
    appActions.showAside({ commit });
    expect(commit).toHaveBeenCalledWith(SHOW_ASIDE);
  });

  it("hideAside", () => {
    const commit = jest.fn();
    appActions.hideAside({ commit });
    expect(commit).toHaveBeenCalledWith(HIDE_ASIDE);
  });
});
