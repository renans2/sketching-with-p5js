import { CANVAS_PARENT } from "../constants/elements-ids";

export function getCanvasSize() {
  const canvasParent = document.getElementById(CANVAS_PARENT);
  const { width, height } = canvasParent!.getBoundingClientRect();
  return Math.min(width, height);
}
