import type { SketchInfo } from "../types/SketchInfo";
import { getSketchSourceUrl } from "../utils/get-sketch-source";
import { getSketchTitle } from "../utils/get-sketch-title.ts";
import { SKETCH_FILES } from "./sketch-files.ts";
import { STORE_MAPPER } from "./store-mapper.ts";
import { VARIABLES_CONTROLS_MAPPER } from "./variables-controls-mapper.ts";

export const SKETCH_CATALOG_INFO: SketchInfo[] = SKETCH_FILES.map((file) => ({
  path: file,
  title: getSketchTitle(file),
  githubUrl: getSketchSourceUrl(file),
  loadSketch: () => import(`../sketches/${file}.ts`),
  controls: VARIABLES_CONTROLS_MAPPER[file].controls,
  store: STORE_MAPPER[file],
}));
