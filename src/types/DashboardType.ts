import type { ZustandStore } from "./ZustandStore";

export type DashboardType<T> = {
  store: ZustandStore<T>;
};
