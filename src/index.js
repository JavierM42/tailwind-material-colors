import { tailwindThemeFromColor } from "./tailwindThemeFromColor";
import withMaterialSurfaces from "tailwind-material-surfaces";
import withModeAwareColors from "tailwind-mode-aware-colors";

export const withMaterialColors = (config, colorsMap) => {
  if (colorsMap.primary) {
    const colors = tailwindThemeFromColor(colorsMap);

    return withModeAwareColors(
      withMaterialSurfaces(
        {
          ...config,
          theme: { ...(config.theme || {}), colors },
        },
        {
          surfacePrefix: "mbg",
          interactiveSurfacePrefix: "interactive-mbg",
        }
      )
    );
  } else {
    throw "A primary color must be specified";
  }
};
