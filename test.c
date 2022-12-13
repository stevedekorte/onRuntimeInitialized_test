#include <stdio.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
void sayHi() {
  printf("Hi!\n");
}
