import { useControlsStore } from "../../stores/controls-store";
import Checkbox from "../ui/Checkbox";
import Slider from "../ui/Slider";

export default function RotatingSquaresDashboard() {
  const { val1, setVal1, val2, setVal2, bool1, setBool1 } = useControlsStore();

  return (
    <div>
      <h3>Rotating Squares Sketch!!!</h3>
      <Slider
        label="Number of Squares"
        min={5}
        max={100}
        val={val1}
        setVal={setVal1}
      />
      <Slider label="Speed" val={val2} setVal={setVal2} />
      <Checkbox label="Inside faster" val={bool1} setVal={setBool1} />
    </div>
  );
}
