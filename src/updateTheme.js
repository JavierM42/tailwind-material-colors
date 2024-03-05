import { tailwindThemeFromColor } from "./tailwindThemeFromColor";
import Color from "color";

const DYNAMIC_THEME_STYLESHEET_ID = "tailwind-material-colors-dynamic-theme";

export const updateTheme = (colorsMap, darkModeConfig = "media") => {
  let newCSS = "";

  const LIGHT_SELECTOR = "html";
  const DARK_SELECTOR = Array.isArray(darkModeConfig)
    ? darkModeConfig[0] === "class"
      ? darkModeConfig[1] || ".dark"
      : "@media (prefers-color-scheme: dark)"
    : darkModeConfig === "class"
    ? ".dark"
    : "@media (prefers-color-scheme: dark)";

  if (colorsMap.primary) {
    const { black, white, transparent, current, ...colors } =
      tailwindThemeFromColor(colorsMap);

    Object.keys(colors).forEach((lightColorName) => {
      const match = lightColorName.match(
        new RegExp(/^(?:(.+)-)?light(?:-(.+))?$/)
      );
      if (match) {
        const prefix = match[1];
        const suffix = match[2];

        const modeAwareColorName = [prefix, suffix].filter((x) => x).join("-");
        const darkColorName = [prefix, "dark", suffix]
          .filter((x) => x)
          .join("-");

        const lightColor = colors[lightColorName];
        const darkColor = colors[darkColorName];

        if (lightColor && darkColor) {
          newCSS += `
          ${LIGHT_SELECTOR} {
            --color-${modeAwareColorName}: ${Color(lightColor)
            .rgb()
            .array()
            .join(" ")};
          }
          ${DARK_SELECTOR} {
            --color-${modeAwareColorName}: ${Color(darkColor)
            .rgb()
            .array()
            .join(" ")};
          }
        `;
        }
      }
    });

    newCSS.replace(/\s*\n\s*/g, " ");

    let stylesheet = document.getElementById(DYNAMIC_THEME_STYLESHEET_ID);
    if (!stylesheet) {
      stylesheet = document.createElement("style");
      stylesheet.id = DYNAMIC_THEME_STYLESHEET_ID;
      document.head.appendChild(stylesheet);
    }

    stylesheet.innerText = newCSS;
  } else {
    throw "A primary color must be specified";
  }
};
