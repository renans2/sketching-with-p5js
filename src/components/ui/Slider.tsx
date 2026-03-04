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

  return (
    <label htmlFor={id} className="space-y-2">
      <p>{label}</p>
      <div className="flex items-center gap-4">
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
