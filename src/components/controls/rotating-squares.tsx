import { useStore } from "zustand";
import type { DashboardType } from "../../types/DashboardType";
import type { RotatingSquaresProps } from "../../types/sketches-props";
import Checkbox from "../ui/Checkbox";
import Slider from "../ui/Slider";

export default function RotatingSquaresControls({
  store,
}: DashboardType<RotatingSquaresProps>) {
  const { data, setData } = useStore(store);

  return (
    <div>
      <Slider
        label="Number of Squares"
        val={data.n}
        setVal={(val) => setData({ ...data, n: val })}
      />
      <Slider
        label="Speed"
        val={data.speed}
        setVal={(val) => setData({ ...data, speed: val })}
      />
      <Checkbox
        label="Inside faster"
        val={data.insideFaster}
        setVal={(val) => setData({ ...data, insideFaster: val })}
      />
    </div>
  );
}
