import { useControlsStore } from "../../stores/controls-store";
import Slider from "../ui/Slider";

export default function RotatingSquaresDashboard() {
  const { val1: n, setVal1: setN } = useControlsStore();

  return (
    <div>
      <h3>Rotating Squares Sketch!!!</h3>
      <Slider label="Number of Squares" val={n} setVal={setN} />
    </div>
  );
}
