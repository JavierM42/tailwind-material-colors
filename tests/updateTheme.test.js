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
    `:root {
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
});
