import flowField from "../assets/sketches/flowField/flowField.png";
import spirograph from "../assets/sketches/spirograph/spirograph.png";

type Sketch = {
  slug: string;
  img?: ImageMetadata;
};

export const SKETCHES_INFO: Sketch[] = [
  { slug: "bouncing-balls" },
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
