import { create } from "zustand";
import type { StoreFactory } from "../types/StoreFactory";

export function createStore<T>(initialValue: T) {
  return create<StoreFactory<T>>((set) => ({
    data: initialValue,
    setData: (value) => set({ data: value }),
  }));
}
