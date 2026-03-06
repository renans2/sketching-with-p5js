import type { SketchFile } from "../types/SketchFile";
import type { ZustandStore } from "../types/ZustandStore";
import { createStore } from "../utils/store-factory";
import { VARIABLES_CONTROLS_MAPPER } from "./variables-controls-mapper";

export const STORE_MAPPER = Object.fromEntries(
  Object.entries(VARIABLES_CONTROLS_MAPPER).map(([key, value]) => [
    key,
    createStore({ ...value.initialValue, screenShot: () => {} }),
  ]),
) as Record<SketchFile, ZustandStore<any>>;
