// File Path : /app/assets/javascripts/browser-support/console-polyfill.js
// Changed by Ma Xiaohang(maffee)
// Font End UI
// Created by maffee on 16/10/9.

// Console-polyfill. MIT license.
// https://github.com/paulmillr/console-polyfill
// Make it safe to do console.log() always.
(function(global) {
    'use strict';
    global.console = global.console || {};
    var con = global.console;
    var prop, method;
    var empty = {};
    var dummy = function() {};
    var properties = 'memory'.split(',');
    var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
    'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
    'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
    while (prop = properties.pop()) con[prop] = con[prop] || empty;
    while (method = methods.pop()) con[method] = con[method] || dummy;
})(typeof window === 'undefined' ? this : window);

// Using `this` for web workers while maintaining compatibility with browser
// targeted script loaders such as Browserify or Webpack where the only way to
// get to the global object is via `window`.