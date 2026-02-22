import { useStore } from "zustand";
import Slider from "../components/ui/Slider";
import type { Control } from "../types/controls";
import type { ZustandStore } from "../types/ZustandStore";
import Checkbox from "../components/ui/Checkbox";

type DashboardType = {
  store: ZustandStore<any>;
  controls: Control[];
};

export default function Dashboard({ store, controls }: DashboardType) {
  const { data, setData } = useStore(store);

  return (
    <div>
      {controls.map((control) => {
        const commonProps = {
          label: control.label,
          val: data[control.key],
          setVal: (val: any) => setData({ ...data, [control.key]: val }),
        };

        if (control.type === "slider") {
          return <Slider key={control.key} {...commonProps} />;
        } else if (control.type === "checkbox") {
          return <Checkbox key={control.key} {...commonProps} />;
        }
      })}
    </div>
  );
}
