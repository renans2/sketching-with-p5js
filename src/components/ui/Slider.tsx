type SliderProps = {
  label: string;
  val: number;
  setVal: (val: number) => void;
};

export default function Slider({ label, val, setVal }: SliderProps) {
  const id = label.replace(/\s+/g, "-").toLowerCase();

  return (
    <label htmlFor={id} className="block">
      <p>{label}</p>
      <div className="flex items-center gap-4">
        <input
          type="range"
          id={id}
          value={val}
          onChange={(e) => setVal(Number(e.target.value))}
          className="flex-1"
        />
        <span className="flex items-center justify-center rounded-lg bg-black/9 w-10 p-1">
          {val}
        </span>
      </div>
    </label>
  );
}
