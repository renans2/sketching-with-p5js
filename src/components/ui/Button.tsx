type ButtonProps = {
  label: string;
  action: () => void;
};

export default function Button({ label, action }: ButtonProps) {
  return (
    <button
      onClick={action}
      className="p-1 font-bold text-lg text-white border-2 hover:border-[#00ff00] w-full cursor-pointer"
    >
      {label}
    </button>
  );
}
