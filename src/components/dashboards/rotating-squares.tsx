import { create } from "zustand";

type RotatingSquaresStoreType = {
  n: number;
  setN: (val: number) => void;
};

export const useRotatingSquaresStore = create<RotatingSquaresStoreType>(
  (set) => ({
    n: 40,
    setN: (n) => set({ n }),
  }),
);

export default function RotatingSquaresDashboard() {
  const { n, setN } = useRotatingSquaresStore();

  return (
    <div>
      <h3>Rotating Squares Sketch!!!</h3>
      <input
        type="range"
        name="test"
        id="test"
        min={1}
        max={100}
        value={n}
        onChange={(e) => setN(parseInt(e.target.value))}
      />
    </div>
  );
}
