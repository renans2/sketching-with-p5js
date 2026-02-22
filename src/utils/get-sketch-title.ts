export function getSketchTitle(sketchFile: string) {
  return sketchFile
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
