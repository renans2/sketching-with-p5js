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
  title: string;
  img?: ImageMetadata;
  tags?: Tag[];
};

export const SKETCHES_INFO: Sketch[] = [
  {
    slug: "circle-loop",
    title: "Circle Loop",
  },
  {
    slug: "pendulum-waves",
    title: "Pendulum Waves",
  },
  {
    slug: "mirror-draw",
    title: "Mirror Draw",
  },
  {
    slug: "bouncing-balls",
    title: "Bouncing Circles",
    tags: ["algorithm", "3d", "flow-field"],
  },
  { slug: "bouncing-lines", title: "Bouncing Lines" },
  { slug: "circles-around-circles", title: "Circles around Circles" },
  { slug: "connected-dots", title: "Connected Dots" },
  { slug: "cow-effect", title: "Cow Effect" },
  { slug: "flow-field-simulation", title: "Flow Field Simulation" },
  { slug: "flow-field-springs", title: "Flow Field (springs)" },
  { slug: "flow-field", img: flowField, title: "Flow Field" },
  { slug: "insertion-sort", title: "Insertion Sort" },
  { slug: "kaleidoscope", title: "Kaleidoscope" },
  { slug: "matrix-digital-rain", title: "Matrix Digital Rain" },
  { slug: "optical-illusion-circles", title: "Optical Illusion Circles" },
  { slug: "perlin-noise-waves", title: "Perlin Noise Waves" },
  { slug: "pine-tree", title: "Pine Tree" },
  { slug: "rainbow-flower", title: "Rainbow Flower" },
  { slug: "animated-topographic-maps", title: "Animated Topographic Maps" },
  { slug: "recursive-trees", title: "Recursive Trees" },
  { slug: "rotate-and-align", title: "Rotate & Align" },
  { slug: "sin-cos-waves", title: "Sin/Cos Waves" },
  { slug: "sin-visualization", title: "Sin Visualization" },
  { slug: "spirograph", img: spirograph, title: "Spirograph" },
  { slug: "sync-by-sin", title: "Sync By Sin" },
  { slug: "trippy-effect", title: "Trippy Effect" },
];

export function getSketchInfo(slug: string) {
  return SKETCHES_INFO.find((s) => s.slug === slug);
}
