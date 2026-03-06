import { useStore } from "zustand";
import Slider from "../components/ui/Slider";
import type { Control } from "../types/controls";
import type { ZustandStore } from "../types/ZustandStore";
import Checkbox from "../components/ui/Checkbox";
import Button from "./ui/Button";
import { FaGithub } from "react-icons/fa";
import { IoIosCamera } from "react-icons/io";

type DashboardType = {
  store: ZustandStore<any>;
  controls: Control[];
  githubUrl: string;
};

const BUTTON_STYLES =
  "flex items-center gap-2 justify-center p-1 font-bold text-lg text-white border-2 hover:border-[#00ff00] hover:text-[#00ff00] w-full cursor-pointer";

export default function Dashboard({
  store,
  controls,
  githubUrl,
}: DashboardType) {
  const { data, setData } = useStore(store);

  return (
    <div className="space-y-5 p-2 md:p-4 border-2 border-[#00ff00] md:min-w-100 md:flex-1">
      <div className="flex flex-col md:flex-row gap-4">
        <button className={BUTTON_STYLES}>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaGithub size={24} />
            Source Code
          </a>
        </button>
        <button onClick={data["screenShot"]} className={BUTTON_STYLES}>
          <IoIosCamera size={24} /> Save Screen Shot
        </button>
      </div>
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
              step={control.step || control.max / 100}
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
