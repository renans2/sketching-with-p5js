type SliderProps = {
  label: string;
  val: number;
  setVal: (val: number) => void;
};

export default function Slider({ label, val, setVal }: SliderProps) {
  return (
    <label htmlFor={label}>
      <p>{label}</p>
      <input
        type="range"
        name={label}
        id={label}
        value={val}
        onChange={(e) => setVal(parseInt(e.target.value))}
      />
    </label>
  );
}
