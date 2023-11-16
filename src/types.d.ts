import type { Config } from "tailwindcss";

declare module "tailwind-material-colors" {
  type ColorsMap = {
    primary: string;
    [name: string]: string | { hex: string; harmonize: boolean };
  };

  type Options = {
    extend: boolean;
  };

  export function withMaterialColors(
    config: Config,
    colorsMap: ColorsMap,
    options?: Options
  ): Config;
}
