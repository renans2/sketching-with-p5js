import type { SketchFile } from "../types/SketchFile";
import type { ZustandStore } from "../types/ZustandStore";
import type { RotatingSquaresProps } from "../types/sketches-props";
import { createStore } from "../utils/store-factory";
import { VARIABLES_CONTROLS_MAPPER } from "./variables-controls-mapper";

export const STORE_MAPPER: Record<SketchFile, ZustandStore<any>> = {
  "rotating-squares": createStore<RotatingSquaresProps>(
    VARIABLES_CONTROLS_MAPPER["rotating-squares"].initialValue,
  ),
};
