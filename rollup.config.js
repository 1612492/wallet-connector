import commonjs from "@rollup/plugin-commonjs";
import html from "@rollup/plugin-html";
import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

const template = () => `<!DOCTYPE html>
<html>
  <head>
    <title>My App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js"></script>
  </body>
</html>
`;

export default {
  input: "src/index.tsx",
  output: {
    dir: "build",
    format: "iife",
  },
  plugins: [
    commonjs(),
    html({ template }),
    replace({
      preventAssignment: true,
      values: {
        "process.env.NODE_ENV": JSON.stringify("production"),
      },
    }),
    resolve(),
    typescript(),
  ],
};
