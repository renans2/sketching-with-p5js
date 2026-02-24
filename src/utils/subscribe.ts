import type { ZustandStore } from "../types/ZustandStore";

export function subscribeToStore(varsObject: any, store: ZustandStore<any>) {
  return store.subscribe(({ data }) => {
    for (const key in varsObject) {
      if (key in data) {
        varsObject[key] = data[key];
      }
    }
  });
}
