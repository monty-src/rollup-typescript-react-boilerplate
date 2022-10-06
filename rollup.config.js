import { DEFAULT_EXTENSIONS } from "@babel/core";

import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";

import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  output: {
    file: pkg.main,
    format: "iife",
    exports: "named",
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      extensions: [".js"],
    }),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    typescript(),
    commonjs({
      include: "node_modules/**",
    }),
    babel({
      extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
      babelHelpers: "runtime",
      exclude: /node_modules/,
    }),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "public"],
      host: "localhost",
      port: 4005,
    }),
    livereload({
      watch: "dist",
    }),
  ],
};
