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
  console.log(ready);

  return (
    <main className="flex flex-1 min-h-0 min-w-0 flex-col md:flex-row md:justify-between p-2 md:p-6 gap-5">
      <Dashboard
        store={sketch.store}
        controls={sketch.controls}
        githubUrl={sketch.githubUrl}
      />
      <Sketch setIsReady={() => setReady(true)} sketch={sketch} />
    </main>
  );
}
