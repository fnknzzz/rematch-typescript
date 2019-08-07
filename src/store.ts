import { init } from "@rematch/core";
import models, { StoreState, ModelKey, StoreDispatch } from "./models";

export const store = init({
  models
});

export type Store = typeof store;

// for Component using, in order to get strict field constraint
export type RootState = Pick<StoreState, ModelKey>;
export type Dispatch = {
  (...args: Parameters<StoreDispatch>): ReturnType<StoreDispatch>;
} & Pick<StoreDispatch, ModelKey>;
