"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=q(function(m,u){
var t=require('@stdlib/math-base-assert-is-nan/dist'),n=require('@stdlib/math-base-special-sqrt/dist');function f(e,r,i){return t(e)||t(r)||t(i)||!(e<=i&&i<=r)?NaN:i>=(e+r)/2?e+n(.5*(r-e)*(i-e)):r-n(.5*(r-e)*(r-i))}u.exports=f
});var o=s();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
