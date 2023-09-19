import { DefaultRubyVM } from "ruby-head-wasm-wasi/dist/browser.esm";
import app from "./app.wasm";

export default async function createRuby() {
  const { vm } = await DefaultRubyVM(await app());

  // Once our virtual machine is booted, we're going to require the necessary
  // files to make it work. I'm not sure why I need to explicitly require
  // did_you_mean here, but it doesn't work without it.
  vm.eval(`
    require "rubygems"
    require "json"
    require "pp"
    $:.unshift("/lib")
    require_relative "/lib/app"
  `);

  return {
    preview(name) {
      const rubySource = `App.preview("${name}")`;

      return vm.eval(rubySource).toString();
    },
  };
};
