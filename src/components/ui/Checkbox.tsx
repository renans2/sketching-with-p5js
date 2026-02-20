type SliderProps = {
  label: string;
  val: boolean;
  setVal: (val: boolean) => void;
};

export default function Checkbox({ label, val, setVal }: SliderProps) {
  return (
    <label htmlFor={label}>
      <p>{label}</p>
      <input
        type="checkbox"
        name={label}
        id={label}
        checked={val}
        onChange={(e) => setVal(e.target.checked)}
      />
    </label>
  );
}
