import { init, RematchRootState, RematchDispatch } from "@rematch/core";
import models, { RootModel } from "./models";

export const store = init({
  models
});

export type Store = typeof store;

// for store using to avoid recursive check
export type StoreDispatch = RematchDispatch<RootModel>;

// for Component using, in order to get strict field constraint
export type RootState = RematchRootState<typeof models>;
export type Dispatch = typeof store.dispatch;
