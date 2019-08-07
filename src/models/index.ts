import { Models, RematchDispatch, RematchRootState } from "@rematch/core";
import { dolphins } from "./dolphins";
import { sharks } from "./sharks";

const rootModel: RootModel = { dolphins, sharks };

// add interface to avoid recursive type checking
export interface RootModel extends Models {
  dolphins: typeof dolphins;
  sharks: typeof sharks;
}

// model names
export type ModelKey = "dolphins" | "sharks";

// for model or store defination
export type StoreDispatch = RematchDispatch<RootModel>;
export type StoreState = RematchRootState<RootModel>;

export default rootModel;
