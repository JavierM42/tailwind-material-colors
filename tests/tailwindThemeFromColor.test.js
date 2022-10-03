import { tailwindThemeFromColor } from "../src/tailwindThemeFromColor";

it("Returns a tailwind color theme for a base color", () => {
  const theme = tailwindThemeFromColor({ primary: "#ff0000" });

  expect(theme).toEqual(
    expect.objectContaining({
      "primary-light": expect.stringContaining("#"),
      "on-primary-light": expect.stringContaining("#"),
      "primary-container-light": expect.stringContaining("#"),
      "on-primary-container-light": expect.stringContaining("#"),
      "secondary-light": expect.stringContaining("#"),
      "on-secondary-light": expect.stringContaining("#"),
      "secondary-container-light": expect.stringContaining("#"),
      "on-secondary-container-light": expect.stringContaining("#"),
      "tertiary-light": expect.stringContaining("#"),
      "on-tertiary-light": expect.stringContaining("#"),
      "tertiary-container-light": expect.stringContaining("#"),
      "on-tertiary-container-light": expect.stringContaining("#"),
      "error-light": expect.stringContaining("#"),
      "on-error-light": expect.stringContaining("#"),
      "error-container-light": expect.stringContaining("#"),
      "on-error-container-light": expect.stringContaining("#"),
      "background-light": expect.stringContaining("#"),
      "on-background-light": expect.stringContaining("#"),
      "surface-light": expect.stringContaining("#"),
      "on-surface-light": expect.stringContaining("#"),
      "surface-variant-light": expect.stringContaining("#"),
      "on-surface-variant-light": expect.stringContaining("#"),
      "outline-light": expect.stringContaining("#"),
      "outline-variant-light": expect.stringContaining("#"),
      "inverse-surface-light": expect.stringContaining("#"),
      "on-inverse-surface-light": expect.stringContaining("#"),
      "inverse-primary-light": expect.stringContaining("#"),
      "primary-dark": expect.stringContaining("#"),
      "on-primary-dark": expect.stringContaining("#"),
      "primary-container-dark": expect.stringContaining("#"),
      "on-primary-container-dark": expect.stringContaining("#"),
      "secondary-dark": expect.stringContaining("#"),
      "on-secondary-dark": expect.stringContaining("#"),
      "secondary-container-dark": expect.stringContaining("#"),
      "on-secondary-container-dark": expect.stringContaining("#"),
      "tertiary-dark": expect.stringContaining("#"),
      "on-tertiary-dark": expect.stringContaining("#"),
      "tertiary-container-dark": expect.stringContaining("#"),
      "on-tertiary-container-dark": expect.stringContaining("#"),
      "error-dark": expect.stringContaining("#"),
      "on-error-dark": expect.stringContaining("#"),
      "error-container-dark": expect.stringContaining("#"),
      "on-error-container-dark": expect.stringContaining("#"),
      "background-dark": expect.stringContaining("#"),
      "on-background-dark": expect.stringContaining("#"),
      "surface-dark": expect.stringContaining("#"),
      "on-surface-dark": expect.stringContaining("#"),
      "surface-variant-dark": expect.stringContaining("#"),
      "on-surface-variant-dark": expect.stringContaining("#"),
      "outline-dark": expect.stringContaining("#"),
      "outline-variant-dark": expect.stringContaining("#"),
      "inverse-surface-dark": expect.stringContaining("#"),
      "on-inverse-surface-dark": expect.stringContaining("#"),
      "inverse-primary-dark": expect.stringContaining("#"),
    })
  );
});

it("Adds custom colors", () => {
  const theme = tailwindThemeFromColor({
    primary: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
  });

  expect(theme).toEqual(
    expect.objectContaining({
      "primary-light": expect.stringContaining("#"),
      "green-light": expect.stringContaining("#"),
      "on-green-light": expect.stringContaining("#"),
      "green-container-light": expect.stringContaining("#"),
      "on-green-container-light": expect.stringContaining("#"),
      "blue-light": expect.stringContaining("#"),
      "on-blue-light": expect.stringContaining("#"),
      "blue-container-light": expect.stringContaining("#"),
      "on-blue-container-light": expect.stringContaining("#"),
      "primary-dark": expect.stringContaining("#"),
      "green-dark": expect.stringContaining("#"),
      "on-green-dark": expect.stringContaining("#"),
      "green-container-dark": expect.stringContaining("#"),
      "on-green-container-dark": expect.stringContaining("#"),
      "blue-dark": expect.stringContaining("#"),
      "on-blue-dark": expect.stringContaining("#"),
      "blue-container-dark": expect.stringContaining("#"),
      "on-blue-container-dark": expect.stringContaining("#"),
    })
  );
});
