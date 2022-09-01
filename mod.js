// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,y,l,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((y="value"in n)&&(u.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),l="get"in n,v="set"in n,y&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,t,n.get),v&&i&&i.call(r,t,n.set),r};var c=t;function y(r){return r!=r}var l=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY;function p(r){return r===l||r===v}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var w=Object.prototype.toString;var A=Object.prototype.hasOwnProperty;var _,m="function"==typeof Symbol?Symbol.toStringTag:"";_=b&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,a;if(null==r)return w.call(r);n=r[m],a=m,t=null!=(o=r)&&A.call(o,a);try{r[m]=void 0}catch(t){return w.call(r)}return e=w.call(r),t?r[m]=n:delete r[m],e}:function(r){return w.call(r)};var d=_,U="function"==typeof Uint32Array;var s="function"==typeof Uint32Array?Uint32Array:null;var N,h="function"==typeof Uint32Array?Uint32Array:void 0;N=function(){var r,t,n;if("function"!=typeof s)return!1;try{t=new s(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(U&&n instanceof Uint32Array||"[object Uint32Array]"===d(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?h:function(){throw new Error("not implemented")};var j=N,g="function"==typeof Float64Array;var I="function"==typeof Float64Array?Float64Array:null;var O,S="function"==typeof Float64Array?Float64Array:void 0;O=function(){var r,t,n;if("function"!=typeof I)return!1;try{t=new I([1,3.14,-3.14,NaN]),n=t,r=(g&&n instanceof Float64Array||"[object Float64Array]"===d(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E=O,F="function"==typeof Uint8Array;var H="function"==typeof Uint8Array?Uint8Array:null;var T,G="function"==typeof Uint8Array?Uint8Array:void 0;T=function(){var r,t,n;if("function"!=typeof H)return!1;try{t=new H(t=[1,3.14,-3.14,256,257]),n=t,r=(F&&n instanceof Uint8Array||"[object Uint8Array]"===d(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P=T,L="function"==typeof Uint16Array;var V="function"==typeof Uint16Array?Uint16Array:null;var W,x="function"==typeof Uint16Array?Uint16Array:void 0;W=function(){var r,t,n;if("function"!=typeof V)return!1;try{t=new V(t=[1,3.14,-3.14,65536,65537]),n=t,r=(L&&n instanceof Uint16Array||"[object Uint16Array]"===d(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?x:function(){throw new Error("not implemented")};var k,Y={uint16:W,uint8:P};(k=new Y.uint16(1))[0]=4660;var C,q,z=52===new Y.uint8(k.buffer)[0];!0===z?(C=1,q=0):(C=0,q=1);var B={HIGH:C,LOW:q},D=new E(1),J=new j(D.buffer),K=B.HIGH,M=B.LOW;function Q(r,t){return D[0]=t,r[0]=J[K],r[1]=J[M],r}var R,X,Z=!0===z?1:0,$=new E(1),rr=new j($.buffer);function tr(r){return $[0]=r,rr[Z]}!0===z?(R=1,X=0):(R=0,X=1);var nr={HIGH:R,LOW:X},er=new E(1),or=new j(er.buffer),ar=nr.HIGH,ir=nr.LOW;var ur=[0,0];function fr(r,t){var n,e,o,a;return function(r,t){1===arguments.length?Q([0,0],r):Q(r,t)}(ur,r),n=ur[0],n&=2147483647,e=tr(t),o=n|=e&=2147483648,a=ur[1],or[ar]=o,or[ir]=a,er[0]}var cr=1.5707963267948966;var yr=3.141592653589793;function lr(r,t){var n;return y(t)||y(r)?NaN:p(t)?t===l?p(r)?fr(yr/4,r):fr(0,r):p(r)?fr(3*yr/4,r):fr(yr,r):p(r)?fr(yr/2,r):0===r?t>=0&&!function(r){return!!(tr(r)>>>31)}(t)?fr(0,r):fr(yr,r):0===t?fr(yr/2,r):(n=function(r){var t,n,e,o;return y(r)||0===r?r:r===l?cr:r===v?-cr:(r<0&&(n=!0,r=-r),t=0,r>2.414213562373095?(e=cr,t=1,r=-1/r):r<=.66?e=0:(e=.7853981633974483,t=2,r=(r-1)/(r+1)),o=(o=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(o)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(o),o=r*o+r,2===t?o+=3061616997868383e-32:1===t&&(o+=6123233995736766e-32),e+=o,n?-e:e)}(r/t),t<0?n<=0?n+yr:n-yr:n)}var vr=!0===z?1:0,pr=new E(1),br=new j(pr.buffer);var wr=.6931471803691238,Ar=1.9082149292705877e-10;function _r(r){var t,n,e,o,a,i,u,f,c,l,p,b;return 0===r?v:y(r)||r<0?NaN:(a=0,(n=tr(r))<1048576&&(a-=54,n=tr(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-1023|0,a+=(f=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=function(r,t){return pr[0]=r,br[vr]=t>>>0,pr[0]}(r,n|1072693248^f))-1,(1048575&2+n)<3?0===u?0===a?0:a*wr+a*Ar:(i=u*u*(.5-.3333333333333333*u),0===a?u-i:a*wr-(i-a*Ar-u)):(f=n-398458|0,c=440401-n|0,o=(p=(b=(l=u/(2+u))*l)*b)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=b*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),i=e+o,(f|=c)>0?(t=.5*u*u,0===a?u-(t-l*(t+i)):a*wr-(t-(l*(t+i)+a*Ar)-u)):0===a?u-l*(u-i):a*wr-(l*(u-i)-a*Ar-u))))}function mr(r,t,n){return y(r)||y(n)||y(t)||n<=0?NaN:_r(.3183098861837907*lr(r-t,n)+.5)}function dr(r,t){return y(t)||y(r)||t<=0?(n=NaN,function(){return n}):function(n){if(y(n))return NaN;return _r(.3183098861837907*lr(n-r,t)+.5)};var n}c(mr,"factory",{configurable:!1,enumerable:!1,writable:!1,value:dr});export{mr as default,dr as factory};
//# sourceMappingURL=mod.js.map