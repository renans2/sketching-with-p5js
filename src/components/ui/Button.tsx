type ButtonProps = {
  label: string;
  action: () => void;
};

export default function Button({ label, action }: ButtonProps) {
  return (
    <button
      onClick={action}
      className="bg-black p-2 rounded-lg text-white w-full cursor-pointer"
    >
      {label}
    </button>
  );
}
