import { DefaultRubyVM } from "ruby-head-wasm-wasi/dist/browser.esm";
import app from "./app.wasm";

import("./createRuby").then(({ default: createRuby }) => createRuby())
  .then((ruby)=>{
    const input = document.getElementById("editor");
    const output = document.getElementById("output");
    document.getElementById("evalRb").addEventListener("click", () => {
      output.value = ruby.preview(input.value)
    })
  })

