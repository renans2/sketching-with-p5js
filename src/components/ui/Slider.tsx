type SliderProps = {
  label: string;
  min: number;
  max: number;
  step: number;
  val: number;
  setVal: (val: number) => void;
};

export default function Slider({
  label,
  min,
  max,
  step,
  val,
  setVal,
}: SliderProps) {
  const id = label.replace(/\s+/g, "-").toLowerCase();
  const percentage = ((val - min) / (max - min)) * 100;

  return (
    <label htmlFor={id} className="flex flex-col gap-1">
      <p>{label}</p>
      <div className="w-full h-3 relative border-2 border-[#00ff00]">
        <div
          style={{ width: `${percentage}%` }}
          className="absolute top-0 left-0 bg-[#00ff00] h-full"
        />
        <input
          type="range"
          id={id}
          value={val}
          min={min}
          max={max}
          step={step}
          onChange={(e) => {
            console.clear();
            console.log(e.target.value);
            setVal(Number(e.target.value));
          }}
          className="flex-1"
        />
      </div>
    </label>
  );
}
