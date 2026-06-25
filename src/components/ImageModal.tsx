import { useEffect, type MouseEvent } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

type ImageModalProps = {
  image: ImageMetadata;
  handlePrevious: () => void;
  handleNext: () => void;
  handleClose: () => void;
};

export default function ImageModal({
  image,
  handlePrevious,
  handleNext,
  handleClose,
}: ImageModalProps) {
  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const handleKeyboard = (e: KeyboardEvent) => {
    if (e.key === "Escape") handleClose();
    else if (e.key === "ArrowLeft") handlePrevious();
    else if (e.key === "ArrowRight") handleNext();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, []);

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/75 flex items-center backdrop-blur-sm"
    >
      <button
        className="absolute right-2 top-2 cursor-pointer"
        onClick={handleClose}
      >
        <IoClose size={42} className="text-white" />
      </button>

      <div className="mx-auto grid grid-cols-[10%_1fr_10%] justify-center items-center gap-2">
        <button className="p-5 cursor-pointer" onClick={handlePrevious}>
          <FaChevronLeft size={42} className="text-white" />
        </button>
        <img src={image.src} alt="test" />
        <button className="p-5 cursor-pointer" onClick={handleNext}>
          <FaChevronRight size={42} className="text-white" />
        </button>
      </div>
    </div>
  );
}
