import { tailwindThemeFromColor } from "./tailwindThemeFromColor";
import tailwindMaterialSurfaces from "tailwind-material-surfaces";
import withModeAwareColors from "tailwind-mode-aware-colors";

export const withMaterialColors = (
  config,
  colorsMap,
  options = { extend: false }
) => {
  if (colorsMap.primary) {
    const materialColors = tailwindThemeFromColor(colorsMap);

    return withModeAwareColors({
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
      plugins: [
        ...(config.plugins || []),
        ...tailwindMaterialSurfaces({
          surfacePrefix: "bg",
          interactiveSurfacePrefix: "interactive-bg",
          draggedSurfacePrefix: "dragged-bg",
          disabledStyles: {
            textOpacity: 0.38,
            backgroundOpacity: 0.12,
            colorName: "on-surface",
          },
        }),
      ],
    });
  } else {
    throw "A primary color must be specified";
  }
};

// TODO numbered surface colors
