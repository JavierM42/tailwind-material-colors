import { tailwindThemeFromColor } from "./tailwindThemeFromColor";
import withMaterialSurfaces from "tailwind-material-surfaces";
import withModeAwareColors from "tailwind-mode-aware-colors";

export const withMaterialColors = (
  config,
  colorsMap,
  options = { extend: false }
) => {
  if (colorsMap.primary) {
    const materialColors = tailwindThemeFromColor(colorsMap);

    return withModeAwareColors(
      withMaterialSurfaces(
        {
          ...config,
          theme: options.extend
            ? {
                ...(config.theme || {}),
                extend: {
                  ...(config.theme?.extend || {}),
                  colors: {
                    ...(config.theme?.extend?.colors || {}),
                    ...materialColors,
                  },
                },
              }
            : {
                ...(config.theme || {}),
                colors: { ...(config.theme?.colors || {}), ...materialColors },
              },
        },
        {
          surfacePrefix: "bg",
          interactiveSurfacePrefix: "interactive-bg",
        }
      )
    );
  } else {
    throw "A primary color must be specified";
  }
};

// TODO numbered surface colors
