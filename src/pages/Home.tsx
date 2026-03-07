import { Link } from "react-router";
import { SKETCH_CATALOG_INFO } from "../constants/sketch-catalog-info";
import usePageTitle from "../hooks/usePageTitle";

const images = import.meta.glob("../assets/*.png", { eager: true });

export default function HomePage() {
  usePageTitle("Sketching w/ p5.js");

  return (
    <main className="max-w-500 w-full mx-auto p-2 space-y-2">
      <div className="w-full grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-1">
        {SKETCH_CATALOG_INFO.map((sketch) => (
          <Link
            key={sketch.path}
            to={`/sketch/${sketch.path}`}
            className="relative border border-[#00ff00] w-full aspect-square flex items-end hover:scale-105 hover:z-10 transition"
          >
            <img
              src={(images[`../assets/${sketch.path}.png`] as any)?.default}
              loading="lazy"
              alt="sketch"
              className="absolute w-full h-full top-0 left-0"
            />
            <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)_10%,transparent_20%,transparent)] font-bold p-2 text-white z-1 absolute w-full h-full top-0 left-0">
              <p className="">{sketch.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
