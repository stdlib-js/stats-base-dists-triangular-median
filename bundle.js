// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).median=n()}(this,(function(){"use strict";var e=function(e){return e!=e},n=Math.sqrt,t=e,o=n;return function(e,n,f){return t(e)||t(n)||t(f)||!(e<=f&&f<=n)?NaN:f>=(e+n)/2?e+o(.5*(n-e)*(f-e)):n-o(.5*(n-e)*(n-f))}}));
//# sourceMappingURL=bundle.js.map
