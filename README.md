# Ruby on wasm talk
Sept 2023

I prepared a presentation and gave a talk about Ruby on Webassembly at the [Montevideo Ruby Meetup](https://ruby.uy/meetups/2023-09-13/gogrow).

These are the [slides](https://docs.google.com/presentation/d/e/2PACX-1vRTEwhFomTook96Y9A04hqENhqdGakt7Hbt_POayRwt37lzifm-BRKJraN4MZIGN18slAAIu2quIpXg/pub?start=false&loop=false&delayms=3000)
This repository contains examples of using [Ruby3.2.wasm](https://github.com/ruby/ruby.wasm) in various integration use cases.

## Ruby Script Tag
1- [Hello World](https://github.com/delbetu/ruby_on_wasm_talk/blob/main/hello_world.rb.html)  
2- [Reading a file](https://github.com/delbetu/ruby_on_wasm_talk/blob/main/read_file.rb.html)  

## Running on WASI-compatible runtime
3- [Hello World Wasmtime](https://github.com/delbetu/ruby_on_wasm_talk/tree/main/wasmtime#rake-tasks)  

## Calling Ruby VM from browser
4- [Eval use input](https://github.com/delbetu/ruby_on_wasm_talk/blob/main/calling_vm_from_browser/index.html)  
This example fetches the RubyVM from cdn and uses it to eval ruby-user-input

5- [Markdown To Html using kramdown](https://github.com/delbetu/ruby_on_wasm_talk/tree/main/calling_vm_with_gems)  
This example extends previous example by serving an `app.wasm` which uses the `kramdown` gem to convert markdown to html.
Then the frontend passes user input this `app.wasm` and prints back the html
