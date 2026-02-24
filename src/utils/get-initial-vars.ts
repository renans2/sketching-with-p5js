import { VARIABLES_CONTROLS_MAPPER } from "../constants/variables-controls-mapper";
import type { SketchFile } from "../types/SketchFile";

export function getInitialVars(sketchFile: SketchFile) {
  return { ...VARIABLES_CONTROLS_MAPPER[sketchFile].initialValue };
}
