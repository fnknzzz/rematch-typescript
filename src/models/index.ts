import { Models } from "@rematch/core";
import { dolphins } from "./dolphins";
import { sharks } from "./sharks";

export default { dolphins, sharks };

// add interface to avoid recursive type checking
export interface RootModel extends Models {
  dolphins: typeof dolphins;
  sharks: typeof sharks;
}
