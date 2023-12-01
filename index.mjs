// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.1-esm/index.mjs";function e(e,i,n){return s(e)||s(i)||s(n)||!(e<=n&&n<=i)?NaN:n>=(e+i)/2?e+t(.5*(i-e)*(n-e)):i-t(.5*(i-e)*(i-n))}export{e as default};
//# sourceMappingURL=index.mjs.map
