// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(t){"use strict";var n,r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?e:function(t,n,r){var e,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(f.call(t,n)||c.call(t,n)?(e=t.__proto__,t.__proto__=o,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,n,r.get),p&&a&&a.call(t,n,r.set),t};var l=n;function y(t){return t!=t}var p=Number.POSITIVE_INFINITY,b=Number.NEGATIVE_INFINITY;function v(t){return t===p||t===b}var d,_="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),w=Object.prototype.toString,A=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"";d=_&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return w.call(t);r=t[s],i=s,n=null!=(o=t)&&A.call(o,i);try{t[s]=void 0}catch(n){return w.call(t)}return e=w.call(t),n?t[s]=r:delete t[s],e}:function(t){return w.call(t)};var m,U=d,h="function"==typeof Uint32Array,N="function"==typeof Uint32Array?Uint32Array:null,j="function"==typeof Uint32Array?Uint32Array:void 0;m=function(){var t,n,r;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(h&&r instanceof Uint32Array||"[object Uint32Array]"===U(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?j:function(){throw new Error("not implemented")};var g,I=m,O="function"==typeof Float64Array,S="function"==typeof Float64Array?Float64Array:null,E="function"==typeof Float64Array?Float64Array:void 0;g=function(){var t,n,r;if("function"!=typeof S)return!1;try{n=new S([1,3.14,-3.14,NaN]),r=n,t=(O&&r instanceof Float64Array||"[object Float64Array]"===U(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?E:function(){throw new Error("not implemented")};var F,T=g,H="function"==typeof Uint8Array,G="function"==typeof Uint8Array?Uint8Array:null,P="function"==typeof Uint8Array?Uint8Array:void 0;F=function(){var t,n,r;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,256,257]),r=n,t=(H&&r instanceof Uint8Array||"[object Uint8Array]"===U(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?P:function(){throw new Error("not implemented")};var x,L=F,V="function"==typeof Uint16Array,W="function"==typeof Uint16Array?Uint16Array:null,k="function"==typeof Uint16Array?Uint16Array:void 0;x=function(){var t,n,r;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,65536,65537]),r=n,t=(V&&r instanceof Uint16Array||"[object Uint16Array]"===U(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?k:function(){throw new Error("not implemented")};var Y,C={uint16:x,uint8:L};(Y=new C.uint16(1))[0]=4660;var M,q,z=52===new C.uint8(Y.buffer)[0];!0===z?(M=1,q=0):(M=0,q=1);var B={HIGH:M,LOW:q},D=new T(1),J=new I(D.buffer),K=B.HIGH,Q=B.LOW;function R(t,n){return D[0]=n,t[0]=J[K],t[1]=J[Q],t}var X,Z,$=!0===z?1:0,tt=new T(1),nt=new I(tt.buffer);function rt(t){return tt[0]=t,nt[$]}!0===z?(X=1,Z=0):(X=0,Z=1);var et={HIGH:X,LOW:Z},ot=new T(1),it=new I(ot.buffer),ut=et.HIGH,at=et.LOW,ft=[0,0];function ct(t,n){var r,e,o,i;return function(t,n){1===arguments.length?R([0,0],t):R(t,n)}(ft,t),r=ft[0],r&=2147483647,e=rt(n),o=r|=e&=2147483648,i=ft[1],it[ut]=o,it[at]=i,ot[0]}var lt=1.5707963267948966,yt=6123233995736766e-32,pt=3.141592653589793;function bt(t,n){var r;return y(n)||y(t)?NaN:v(n)?n===p?v(t)?ct(pt/4,t):ct(0,t):v(t)?ct(3*pt/4,t):ct(pt,t):v(t)?ct(pt/2,t):0===t?n>=0&&!function(t){return!!(rt(t)>>>31)}(n)?ct(0,t):ct(pt,t):0===n?ct(pt/2,t):(r=function(t){var n,r,e,o;return y(t)||0===t?t:t===p?lt:t===b?-lt:(t<0&&(r=!0,t=-t),n=0,t>2.414213562373095?(e=lt,n=1,t=-1/t):t<=.66?e=0:(e=.7853981633974483,n=2,t=(t-1)/(t+1)),o=(o=t*t)*function(t){return 0===t?-64.85021904942025:t*(t*(t*(-.8750608600031904*t-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(o)/function(t){return 0===t?194.5506571482614:194.5506571482614+t*(485.3903996359137+t*(432.88106049129027+t*(165.02700983169885+t*(24.858464901423062+1*t))))}(o),o=t*o+t,2===n?o+=.5*yt:1===n&&(o+=yt),e+=o,r?-e:e)}(t/n),n<0?r<=0?r+pt:r-pt:r)}var vt=!0===z?1:0,dt=new T(1),_t=new I(dt.buffer),wt=.6931471803691238,At=1.9082149292705877e-10,st=1048575;function mt(t){var n,r,e,o,i,u,a,f,c,l,p,v;return 0===t?b:y(t)||t<0?NaN:(i=0,(r=rt(t))<1048576&&(i-=54,r=rt(t*=0x40000000000000)),r>=2146435072?t+t:(i+=(r>>20)-1023|0,i+=(f=614244+(r&=st)&1048576|0)>>20|0,a=(t=function(t,n){return dt[0]=t,_t[vt]=n>>>0,dt[0]}(t,r|1072693248^f))-1,(st&2+r)<3?0===a?0===i?0:i*wt+i*At:(u=a*a*(.5-.3333333333333333*a),0===i?a-u:i*wt-(u-i*At-a)):(f=r-398458|0,c=440401-r|0,o=(p=(v=(l=a/(2+a))*l)*v)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(p),e=v*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(p),u=e+o,(f|=c)>0?(n=.5*a*a,0===i?a-(n-l*(n+u)):i*wt-(n-(l*(n+u)+i*At)-a)):0===i?a-l*(a-u):i*wt-(l*(a-u)-i*At-a))))}function Ut(t,n,r){return y(t)||y(r)||y(n)||r<=0?NaN:mt(.3183098861837907*bt(t-n,r)+.5)}function ht(t,n){return y(n)||y(t)||n<=0?(r=NaN,function(){return r}):function(r){return y(r)?NaN:mt(.3183098861837907*bt(r-t,n)+.5)};var r}l(Ut,"factory",{configurable:!1,enumerable:!1,writable:!1,value:ht}),t.default=Ut,t.factory=ht,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).logcdf={});
//# sourceMappingURL=browser.js.map
