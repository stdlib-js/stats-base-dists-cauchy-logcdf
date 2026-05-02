"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=a(function(V,c){
var n=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-atan2/dist'),N=require('@stdlib/math-base-special-ln/dist'),l=.3183098861837907;function O(e,r,t){return n(e)||n(t)||n(r)||t<=0?NaN:N(l*q(e-r,t)+.5)}c.exports=O
});var v=a(function(F,s){
var y=require('@stdlib/utils-constant-function/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),E=require('@stdlib/math-base-special-atan2/dist'),_=require('@stdlib/math-base-special-ln/dist'),d=.3183098861837907;function p(e,r){if(i(r)||i(e)||r<=0)return y(NaN);return t;function t(u){return i(u)?NaN:_(d*E(u-e,r)+.5)}}s.exports=p
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=o(),I=v();R(f,"factory",I);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
