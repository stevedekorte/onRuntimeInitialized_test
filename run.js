"use strict";

var Module = {
  preRun: [],
  postRun: [],
  'printErr': function(text) { 
    console.log('stderr: ' + text) 
  },
  print: (function() {
    var element = document.getElementById('output');
    if (element) element.value = ''; // clear browser cache
    return function(text) {
      if (arguments.length > 1) text = Array.prototype.slice.call(arguments).join(' ');
      document.body.innerHTML += "<br>" + text
    };
  })(),
  canvas: (function() {
    var canvas = document.getElementById('canvas');
    // As a default initial behavior, pop up an alert when webgl context is lost. To make your
    // application robust, you may want to override this behavior before shipping!
    // See http://www.khronos.org/registry/webgl/specs/latest/1.0/#5.15.2
    //canvas.addEventListener("webglcontextlost", function(e) { alert('WebGL context lost. You will need to reload the page.'); e.preventDefault(); }, false);
    return canvas;
  })(),
  setStatus: function(text) {
    console.log("setStatus:", text);
  },
  totalDependencies: 0,
  monitorRunDependencies: function(left) {
    this.totalDependencies = Math.max(this.totalDependencies, left);
    Module.setStatus(left ? 'Preparing... (' + (this.totalDependencies-left) + '/' + this.totalDependencies + ')' : 'All downloads complete.');
  },
  onRuntimeInitialized: function () {
    run()
  }
};

document.body.innerHTML += "<br>importing..."

import initModule from "./test.js";
initModule(Module);

var run = function () {
  document.body.innerHTML += "<br>got onRuntimeInitialized call"
  Module._sayHi()
}