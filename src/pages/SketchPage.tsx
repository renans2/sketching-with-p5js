import { useState } from "react";
import Dashboard from "../components/Dashboard";
import Sketch from "../components/Sketch";
import usePageTitle from "../hooks/usePageTitle";
import type { SketchInfo } from "../types/SketchInfo";

type SketchPageType = {
  sketch: SketchInfo;
};

export default function SketchPage({ sketch }: SketchPageType) {
  const [ready, setReady] = useState(false);
  usePageTitle(sketch.title);

  return (
    <main className="flex flex-1 min-h-0 flex-col md:flex-row p-4 gap-5">
      {ready && (
        <div className="space-y-4 flex-1">
          <Dashboard store={sketch.store} controls={sketch.controls} />
          <button className="bg-black p-2 rounded-lg text-white">
            <a
              href={sketch.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Sketch source code on GitHub
            </a>
          </button>
        </div>
      )}
      <Sketch setIsReady={() => setReady(true)} sketch={sketch} />
    </main>
  );
}
