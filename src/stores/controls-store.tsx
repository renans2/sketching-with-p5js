import { create } from "zustand";

type ControlsStoreType = {
  val1: number;
  val2: number;
  bool1: boolean;
  color1: string;
  setVal1: (val1: number) => void;
  setVal2: (val2: number) => void;
  setBool1: (bool1: boolean) => void;
  setColor1: (color1: string) => void;
};

export const useControlsStore = create<ControlsStoreType>((set) => ({
  val1: 0,
  val2: 0,
  bool1: false,
  color1: "#fff",
  setVal1: (val1) => set({ val1 }),
  setVal2: (val2) => set({ val2 }),
  setBool1: (bool1) => set({ bool1 }),
  setColor1: (color1) => set({ color1 }),
}));
