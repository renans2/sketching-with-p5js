import { Link } from "react-router";
import { SKETCH_CATALOG_INFO } from "../constants/sketch-catalog-info";
import usePageTitle from "../hooks/usePageTitle";

export default function HomePage() {
  usePageTitle("Sketching w/ p5.js");

  return (
    <main className="max-w-500 w-full mx-auto p-2 space-y-2">
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-1">
        {SKETCH_CATALOG_INFO.map((skecth) => (
          <Link
            key={skecth.path}
            className="bg-black font-bold p-2 text-white w-full aspect-square flex items-end"
            to={`/sketch/${skecth.path}`}
          >
            {skecth.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
