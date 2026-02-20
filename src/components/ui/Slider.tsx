type SliderProps = {
  label: string;
  min?: number;
  max?: number;
  val: number;
  setVal: (val: number) => void;
};

export default function Slider({ label, min, max, val, setVal }: SliderProps) {
  return (
    <label htmlFor={label}>
      <p>{label}</p>
      <div className="flex items-center gap-4">
        <input
          type="range"
          name={label}
          id={label}
          value={val}
          onChange={(e) => setVal(parseInt(e.target.value))}
          className="appearance-none bg-black rounded-full"
          min={min}
          max={max}
        />
        <span className="flex items-center justify-center rounded-lg bg-black/9 w-10 p-1">
          {val}
        </span>
      </div>
    </label>
  );
}
