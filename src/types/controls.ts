export type Control =
  | {
      type: "slider";
      label: string;
      min: number;
      max: number;
      step?: number;
      key: string;
    }
  | { type: "checkbox"; label: string; default: boolean; key: string }
  | { type: "button"; label: string; key: string };
