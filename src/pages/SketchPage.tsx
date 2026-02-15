import p5 from "p5";
import Sketch from "../components/Sketch";

type SketchPageType = {
  sketchScript: (p: p5) => void;
};

export default function SketchPage({ sketchScript }: SketchPageType) {
  return (
    <main className="flex flex-1 min-h-0 flex-col md:flex-row p-4">
      <p className="text-center">Info about the sketch goes here</p>
      <Sketch sketchScript={sketchScript} />
    </main>
  );
}
