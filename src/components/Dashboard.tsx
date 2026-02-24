import { useStore } from "zustand";
import Slider from "../components/ui/Slider";
import type { Control } from "../types/controls";
import type { ZustandStore } from "../types/ZustandStore";
import Checkbox from "../components/ui/Checkbox";
import Button from "./ui/Button";

type DashboardType = {
  store: ZustandStore<any>;
  controls: Control[];
};

export default function Dashboard({ store, controls }: DashboardType) {
  const { data, setData } = useStore(store);

  return (
    <div>
      {controls.map((control) => {
        const label = control.label;
        const sliderAndCheckboxCommonProps = {
          label,
          val: data[control.key],
          setVal: (val: any) => setData({ ...data, [control.key]: val }),
        };

        if (control.type === "slider") {
          return (
            <Slider
              key={control.key}
              min={control.min}
              max={control.max}
              {...sliderAndCheckboxCommonProps}
            />
          );
        } else if (control.type === "checkbox") {
          return (
            <Checkbox key={control.key} {...sliderAndCheckboxCommonProps} />
          );
        } else if (control.type === "button") {
          return (
            <Button
              key={control.key}
              label={label}
              action={data[control.key]}
            />
          );
        }
      })}
    </div>
  );
}
