import type { SketchFile } from "../types/SketchFile";
import type { ZustandStore } from "../types/ZustandStore";
import type p5 from "p5";
import { VARIABLES_CONTROLS_MAPPER } from "../constants/variables-controls-mapper";

export function initClearCanvasMethod(p: p5, store: ZustandStore<any>) {
  store.setState((state) => ({
    data: {
      ...state.data,
      clear: () => p.background(0),
    },
  }));
}

export function initScreenShotMethod(p: p5, store: ZustandStore<any>) {
  store.setState((state) => ({
    data: {
      ...state.data,
      screenShot: () => p.saveCanvas("sketch"),
    },
  }));
}

export function initMethods<T>(
  sketchFile: SketchFile,
  p: p5,
  store: ZustandStore<T>,
) {
  const p5Remove = p.remove.bind(p);
  const vars = { ...VARIABLES_CONTROLS_MAPPER[sketchFile].initialValue } as T;
  const unsubscribe = store.subscribe(({ data }) => {
    for (const key in vars) {
      if (key in (data as any)) {
        vars[key] = data[key];
      }
    }
  });

  store.setState((state) => ({
    data: {
      ...state.data,
      clear: () => p.background(0),
      screenShot: () => p.saveCanvas("sketch"),
    },
  }));

  return { p5Remove, vars, unsubscribe };
}
