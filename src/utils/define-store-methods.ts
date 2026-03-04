import type { ZustandStore } from "../types/ZustandStore";
import type p5 from "p5";

export function initClearCanvasMethod(p: p5, store: ZustandStore<any>) {
  store.setState((state) => ({
    data: {
      ...state.data,
      clear: () => p.background(0),
    },
  }));
}
