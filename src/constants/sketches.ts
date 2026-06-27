import flowField from "../assets/sketches/flow-field/flow-field.png";
import spirograph from "../assets/sketches/spirograph/spirograph.png";

export type Tag =
  | "3d"
  | "perlin-noise"
  | "algorithm"
  | "flow-field"
  | "sin-cos"
  | "recursive"
  | "fractal"
  | "tree";

export type Sketch = {
  slug: string;
  img?: ImageMetadata;
  tags?: Tag[];
};

export const SKETCHES_INFO: Sketch[] = [
  { slug: "bouncing-balls", tags: ["algorithm", "3d", "flow-field"] },
  { slug: "bouncing-lines" },
  { slug: "circles-around-circles" },
  { slug: "connected-dots" },
  { slug: "cow-effect" },
  { slug: "flow-field-simulation" },
  { slug: "flow-field-springs" },
  { slug: "flow-field", img: flowField },
  { slug: "insertion-sort" },
  { slug: "kaleidoscope" },
  { slug: "matrix-digital-rain" },
  { slug: "optical-illusion-circles" },
  { slug: "perlin-noise-waves" },
  { slug: "pine-tree" },
  { slug: "rainbow-flower" },
  { slug: "random-topographic-maps" },
  { slug: "recursive-trees" },
  { slug: "rotate-and-align" },
  { slug: "sin-cos-waves" },
  { slug: "sin-visualization" },
  { slug: "spirograph", img: spirograph },
  { slug: "sync-by-sin" },
  { slug: "trippy-effect" },
];

export function getSketchInfo(slug: string) {
  return SKETCHES_INFO.find((s) => s.slug === slug);
}
