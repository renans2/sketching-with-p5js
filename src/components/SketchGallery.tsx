import { useState } from "react";
import ImageModal from "./ImageModal";

type SketchGallery = {
  images: ImageMetadata[];
};

export default function SketchGallery({ images }: SketchGallery) {
  const [selectedImgIdx, setSelectedImgIdx] = useState<number>();

  const handlePrevious = () => {
    setSelectedImgIdx((prev) => {
      if (prev === undefined) return;
      if (prev === 0) return images.length - 1;
      return prev - 1;
    });
  };

  const handleNext = () => {
    setSelectedImgIdx((prev) => {
      if (prev === undefined) return;
      return (prev + 1) % images.length;
    });
  };

  return (
    <>
      <div className="mt-4 max-w-250 mx-auto grid grid-cols-3 gap-0.5">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelectedImgIdx(i)}
            className="cursor-pointer"
          >
            <img src={img.src} alt="test" />
          </button>
        ))}
      </div>

      {selectedImgIdx !== undefined && (
        <ImageModal
          image={images[selectedImgIdx]}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          handleClose={() => setSelectedImgIdx(undefined)}
        />
      )}
    </>
  );
}
