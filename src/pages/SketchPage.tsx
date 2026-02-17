import Sketch from "../components/Sketch";
import usePageTitle from "../hooks/usePageTitle";
import type { SketchInfo } from "../types/SketchInfo";

type SketchPageType = {
  sketch: SketchInfo;
};

export default function SketchPage({ sketch }: SketchPageType) {
  usePageTitle(sketch.title);

  return (
    <main className="flex flex-1 min-h-0 flex-col md:flex-row p-4">
      <div className="space-y-4">
        {sketch.dashboard && <sketch.dashboard />}
        <a
          href={sketch.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black p-2 rounded-sm text-white"
        >
          Sketch source code on GitHub
        </a>
      </div>
      <Sketch script={sketch.script} />
    </main>
  );
}
