# Install dependencies

## vfs
```
brew tap kateinoigakukun/wasi-vfs https://github.com/kateinoigakukun/wasi-vfs.git
brew install kateinoigakukun/wasi-vfs/wasi-vfs
```

## runtime

```
curl https://wasmtime.dev/install.sh -sSf | bash
```

## CRuby compiled to wasm

### Download a prebuilt Ruby release
```
curl -LO https://github.com/ruby/ruby.wasm/releases/latest/download/ruby-3_2-wasm32-unknown-wasi-full.tar.gz
tar xfz ruby-3_2-wasm32-unknown-wasi-full.tar.gz
```

### Extract ruby binary not to pack itself
```
mv 3_2-wasm32-unknown-wasi-full/usr/local/bin/ruby ruby.wasm
```

# Build and Run Hello App

## Check the source
```
ls hello_app
cat hello_app/hello_world.rb
```

## Pack the whole directory under /usr and your app dir
```
wasi-vfs pack ruby.wasm --mapdir /src::./hello_app --mapdir /usr::./3_2-wasm32-unknown-wasi-full/usr -o hello-app.wasm
```

## Run the packed scripts
```
wasmtime run hello-app.wasm -- /src/hello_world.rb
Hello, World!
```

## Rake tasks
you can do the same as these previous steps by using a rake task:

```
rake 'build[hello_app]'
rake 'run[hello_app]'
```
