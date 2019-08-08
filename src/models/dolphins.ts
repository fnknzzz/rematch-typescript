import { createModel } from "@rematch/core";
import { StoreDispatch } from "../store";
import { delay } from "../helpers";

export type DolphinsState = number;

// avoid using ModelReducers or ModelEffects to enable type checking
const model = {
  state: 0,
  reducers: {
    increment: (state: DolphinsState) => state + 1
  },
  effects: (dispatch: StoreDispatch) => ({
    async incrementAsync() {
      await delay(500);
      // `increment` field would be checked
      dispatch.dolphins.increment();
    }
  })
};

export const dolphins: typeof model = createModel(model);
