import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import { readFileSync } from "node:fs";

const packageJson = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf-8")
);

/**
 * @type {import('rollup').RollupOptions}
 */
export default [
  {
    input: "src/index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [resolve(), commonjs(), terser()],
  },
  {
    input: "src/updateTheme.js",
    output: [
      {
        file: "lib/updateTheme.min.cjs",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "lib/updateTheme.esm.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [resolve(), commonjs(), terser()],
  },
];
