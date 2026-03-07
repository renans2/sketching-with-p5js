import { useStore } from "zustand";
import Slider from "../components/ui/Slider";
import type { Control } from "../types/controls";
import type { ZustandStore } from "../types/ZustandStore";
import Checkbox from "../components/ui/Checkbox";
import Button from "./ui/Button";
import { FaGithub } from "react-icons/fa";
import { IoIosCamera } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

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
  const [expanded, setExpanded] = useState(false);

  const getControls = () =>
    controls.map((control) => {
      if (control.type !== "clearButton") {
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
      } else {
        return <Button key="clear" label="Clear" action={data.clear} />;
      }
    });

  return (
    <div
      className={`border-2 border-[#00ff00] md:min-w-100 md:max-w-120 md:flex-1 ${expanded && "border-b-transparent md:border-b-[#00ff00]"}`}
    >
      <div className="p-2 md:p-4 flex flex-col md:flex-row gap-2 md:gap-4">
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
          <IoIosCamera size={24} /> Screen Shot
        </button>
      </div>
      <div className="block md:hidden relative">
        <div
          className="cursor-pointer p-2 md:p-4 text-white flex items-center justify-between border-t-2 border-[#00ff00]"
          onClick={() => setExpanded((prev) => !prev)}
        >
          <span className="text-lg font-bold">Settings</span>
          <FaChevronDown
            size={20}
            style={{ rotate: expanded ? "180deg" : "" }}
            className="transition"
          />
        </div>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: "0", opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: "0", opacity: 0 }}
              style={{ width: "calc(100% + 4px)" }}
              className="p-2 md:p-4 absolute -left-0.5 space-y-5 overflow-hidden mt-0 bg-black/20 backdrop-blur-sm border-2 border-t-0 border-[#00ff00]"
            >
              {getControls()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="hidden md:block px-4 space-y-5">{getControls()}</div>
    </div>
  );
}
