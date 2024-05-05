import type { Config } from "tailwindcss";

declare module "tailwind-material-colors" {
  type ColorsMap = {
    primary: string;
    [name: string]: string | { hex: string; harmonize: boolean };
  };

  type RandomType = keyof ColorsMap;

  type Options = {
    scheme:
      | "content"
      | "expressive"
      | "fidelity"
      | "monochrome"
      | "neutral"
      | "tonalSpot"
      | "vibrant";
    contrast: number;
    extend: boolean;
  };

  export function withMaterialColors(
    config: Config,
    colorsMap: ColorsMap,
    options?: Options
  ): Config;
}
