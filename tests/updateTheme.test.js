/**
 * @jest-environment jsdom
 */

import { updateTheme } from "../src/updateTheme";

it("Adds expected CSS", () => {
  updateTheme({ primary: "#ff0000" });

  expect(
    document
      .getElementById("tailwind-material-colors-dynamic-theme")
      .innerText.replace(/\n|\s|\t/g, "")
  ).toContain(
    `html {
    --color-primary: 192 1 0;
  }`.replace(/\n|\s|\t/g, "")
  );

  expect(
    document
      .getElementById("tailwind-material-colors-dynamic-theme")
      .innerText.replace(/\n|\s|\t/g, "")
  ).toContain(
    `@media (prefers-color-scheme: dark) {
    --color-primary: 255 180 168;
  }`.replace(/\n|\s|\t/g, "")
  );

  expect(
    document
      .getElementById("tailwind-material-colors-dynamic-theme")
      .innerText.replace(/\n|\s|\t/g, "")
  ).toContain(
    `html {
    --color-primary-hover: 197 21 20;
    --color-primary-press: 200 32 31;
    --color-primary-focus: 200 32 31;
    --color-primary-drag: 202 42 41;
  }`.replace(/\n|\s|\t/g, "")
  );
});
