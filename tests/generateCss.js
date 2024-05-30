import postcss from "postcss";
import tailwindcss from "tailwindcss";

const generateCss = async (string, config) =>
  await postcss([tailwindcss(config)])
    .process(string, { from: undefined })
    .then((result) => result.css.replace(/\n|\s|\t/g, ""));

export default generateCss;
