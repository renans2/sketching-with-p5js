import type { RotatingSquaresProps } from "../../types/controls-props/rotating-squares";
import type { ControlsType } from "../../types/ControlsType";
import Checkbox from "../ui/Checkbox";
import Slider from "../ui/Slider";
import { useState } from "react";

export default function RotatingSquaresControls({
  controlsRef,
}: ControlsType<RotatingSquaresProps>) {
  const [props, setProps] = useState<RotatingSquaresProps>(controlsRef.current);

  const setN = (val: number) => {
    setProps((prev) => ({ ...prev, n: val }));
    controlsRef.current = { ...controlsRef.current, n: val };
  };

  const setSpeed = (val: number) => {
    setProps((prev) => ({ ...prev, speed: val }));
    controlsRef.current = { ...controlsRef.current, speed: val * 0.00001 };
  };

  const setInsideFaster = (val: boolean) => {
    setProps((prev) => ({ ...prev, insideFaster: val }));
    controlsRef.current = { ...controlsRef.current, insideFaster: val };
  };

  return (
    <div>
      <Slider
        label="Number of Squares"
        min={5}
        max={100}
        val={props.n}
        setVal={setN}
      />
      <Slider label="Speed" val={props.speed} setVal={setSpeed} />
      <Checkbox
        label="Inside faster"
        val={props.insideFaster}
        setVal={setInsideFaster}
      />
    </div>
  );
}
