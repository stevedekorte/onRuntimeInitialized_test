#!/bin/sh

export PATH=$PATH:/Users/steve/_projects/sites/ioWASM/emscripten/emsdk/upstream/emscripten/

emcc \
  test.c \
  -g -gsource-map --source-map-base ./ --emit-symbol-map -o test.js \
  -s ASYNCIFY -s LINKABLE=1 -s EXPORT_ALL=1 -s EXPORT_ES6=1 \
  -s ALLOW_MEMORY_GROWTH=1 --profiling-funcs -s EMULATE_FUNCTION_POINTER_CASTS -s SAFE_HEAP=1
  
  #  -s MODULARIZE=1 
  # -s ASSERTIONS=1 // causes ERROR: "Exception has occurred: TypeError: Cannot set property thisProgram of #<Object> which has only a getter"
  # -s DETERMINISTIC=1 // causes ERROR: "Exception has occurred: TypeError: Cannot set property thisProgram of #<Object> which has only a getter"
