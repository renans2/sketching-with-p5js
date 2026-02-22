import type { Control } from "../types/controls";
import type { RotatingSquaresProps } from "../types/sketches-props";
import type { SketchFile } from "../types/SketchFile";

type DashboardProps = {
  initialValue: any;
  controls: Control[];
};

export const VARIABLES_CONTROLS_MAPPER: Record<SketchFile, DashboardProps> = {
  "rotating-squares": {
    initialValue: {
      n: 10,
      speed: 10,
      insideFaster: true,
    } as RotatingSquaresProps,
    controls: [
      {
        type: "slider",
        key: "n",
        label: "Number of Squares",
        min: 1,
        max: 100,
      },
      { type: "slider", key: "speed", label: "Speed", min: 1, max: 10 },
      {
        type: "checkbox",
        key: "insideFaster",
        label: "Inside Faster",
        default: true,
      },
    ],
  },
};
