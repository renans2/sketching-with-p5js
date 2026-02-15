import { CANVAS_CONTAINER } from "../constants/elements-ids";

export function getCanvasSize() {
  const canvasContainer = document.getElementById(CANVAS_CONTAINER);
  const { width, height } = canvasContainer!.getBoundingClientRect();
  return Math.min(width, height);
}
