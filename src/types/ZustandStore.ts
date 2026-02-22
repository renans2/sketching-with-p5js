import type { StoreApi, UseBoundStore } from "zustand";
import type { StoreFactory } from "./StoreFactory";

export type ZustandStore<T> = UseBoundStore<StoreApi<StoreFactory<T>>>;
