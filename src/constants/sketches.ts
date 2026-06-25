import flowField from "../assets/sketches/flowField/flowField.png";
import spirograph from "../assets/sketches/spirograph/spirograph.png";

type Sketch = {
  slug: string;
  img: ImageMetadata;
};

export const SKETCHES_INFO: Sketch[] = [
  { slug: "flowField", img: flowField },
  { slug: "spirograph", img: spirograph },
];
