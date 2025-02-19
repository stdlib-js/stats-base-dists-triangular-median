// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";function e(e){return e!=e}var n=Math.sqrt;return function(t,o,f){return e(t)||e(o)||e(f)||!(t<=f&&f<=o)?NaN:f>=(t+o)/2?t+n(.5*(o-t)*(f-t)):o-n(.5*(o-t)*(o-f))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).median=n();
//# sourceMappingURL=browser.js.map
