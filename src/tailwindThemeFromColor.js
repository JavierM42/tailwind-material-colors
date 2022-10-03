import {
  argbFromHex,
  hexFromArgb,
  Scheme,
  customColor,
} from "@material/material-color-utilities";
import { kebabize } from "./kebabize";

/**
 *
 * @param {Record<string, string>} colorsMap Values must be hex colors and 'primary' must be present.
 */
export const tailwindThemeFromColor = (colorsMap) => {
  const { primary, ...extraColors } = colorsMap;

  const source = argbFromHex(primary);

  const lightScheme = Scheme.light(source);
  const darkScheme = Scheme.dark(source);

  const colors = {
    transparent: "transparent",
    current: "currentColor",
    black: "#000000",
    white: "#ffffff",
  };

  Object.keys(lightScheme.props).forEach((colorName) => {
    if (!["shadow", "scrim"].includes(colorName)) {
      const kebabName = kebabize(colorName);
      colors[`${kebabName}-light`] = hexFromArgb(lightScheme.props[colorName]);
      colors[`${kebabName}-dark`] = hexFromArgb(darkScheme.props[colorName]);
    }
  });

  Object.keys(extraColors).forEach((colorName) => {
    const value = extraColors[colorName];

    const hex = typeof value === "string" ? value : value.hex;
    const blend = value === hex ? true : value.harmonize;

    const { light, dark } = customColor(source, {
      value: argbFromHex(hex),
      blend,
    });
    const kebabName = kebabize(colorName);

    colors[`${kebabName}-light`] = hexFromArgb(light.color);
    colors[`on-${kebabName}-light`] = hexFromArgb(light.onColor);
    colors[`${kebabName}-container-light`] = hexFromArgb(light.colorContainer);
    colors[`on-${kebabName}-container-light`] = hexFromArgb(
      light.onColorContainer
    );
    colors[`${kebabName}-dark`] = hexFromArgb(dark.color);
    colors[`on-${kebabName}-dark`] = hexFromArgb(dark.onColor);
    colors[`${kebabName}-container-dark`] = hexFromArgb(dark.colorContainer);
    colors[`on-${kebabName}-container-dark`] = hexFromArgb(
      dark.onColorContainer
    );
  });

  return colors;
};
