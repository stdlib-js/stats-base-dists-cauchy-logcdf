// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,r=Object.prototype,e=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,a=r.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,n,f){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(u.call(t,n)||a.call(t,n)?(c=t.__proto__,t.__proto__=r,delete t[n],t[n]=f.value,t.__proto__=c):t[n]=f.value),y="get"in f,p="set"in f,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,n,f.get),p&&i&&i.call(t,n,f.set),t};function c(t,n,r){f(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}function l(t){return t!=t}var y=Number.POSITIVE_INFINITY,p=Number.NEGATIVE_INFINITY;function b(t){return t===y||t===p}var v,d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),w=Object.prototype.toString,A=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",_=d&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return w.call(t);r=t[s],i=s,n=null!=(o=t)&&A.call(o,i);try{t[s]=void 0}catch(n){return w.call(t)}return e=w.call(t),n?t[s]=r:delete t[s],e}:function(t){return w.call(t)},m="function"==typeof Uint32Array,U="function"==typeof Uint32Array?Uint32Array:null,N="function"==typeof Uint32Array?Uint32Array:void 0;v=function(){var t,n,r;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(m&&r instanceof Uint32Array||"[object Uint32Array]"===_(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?N:function(){throw new Error("not implemented")};var g,h=v,j="function"==typeof Float64Array,I="function"==typeof Float64Array?Float64Array:null,O="function"==typeof Float64Array?Float64Array:void 0;g=function(){var t,n,r;if("function"!=typeof I)return!1;try{n=new I([1,3.14,-3.14,NaN]),r=n,t=(j&&r instanceof Float64Array||"[object Float64Array]"===_(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?O:function(){throw new Error("not implemented")};var S,E=g,F="function"==typeof Uint8Array,T="function"==typeof Uint8Array?Uint8Array:null,H="function"==typeof Uint8Array?Uint8Array:void 0;S=function(){var t,n,r;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,256,257]),r=n,t=(F&&r instanceof Uint8Array||"[object Uint8Array]"===_(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?H:function(){throw new Error("not implemented")};var G,P=S,x="function"==typeof Uint16Array,L="function"==typeof Uint16Array?Uint16Array:null,V="function"==typeof Uint16Array?Uint16Array:void 0;G=function(){var t,n,r;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,65536,65537]),r=n,t=(x&&r instanceof Uint16Array||"[object Uint16Array]"===_(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?V:function(){throw new Error("not implemented")};var W,k={uint16:G,uint8:P};(W=new k.uint16(1))[0]=4660;var Y,C,q=52===new k.uint8(W.buffer)[0];!0===q?(Y=1,C=0):(Y=0,C=1);var z={HIGH:Y,LOW:C},B=new E(1),D=new h(B.buffer),J=z.HIGH,K=z.LOW;function M(t,n,r,e){return B[0]=t,n[e]=D[J],n[e+r]=D[K],n}function Q(t){return M(t,[0,0],1,0)}c(Q,"assign",M);var R,X,Z=!0===q?1:0,$=new E(1),tt=new h($.buffer);function nt(t){return $[0]=t,tt[Z]}!0===q?(R=1,X=0):(R=0,X=1);var rt={HIGH:R,LOW:X},et=new E(1),ot=new h(et.buffer),it=rt.HIGH,ut=rt.LOW,at=[0,0];function ft(t,n){var r,e,o,i;return Q.assign(t,at,1,0),r=at[0],r&=2147483647,e=nt(n),o=r|=e&=2147483648,i=at[1],ot[it]=o,ot[ut]=i,et[0]}var ct=1.5707963267948966,lt=6123233995736766e-32,yt=3.141592653589793;function pt(t,n){var r;return l(n)||l(t)?NaN:b(n)?n===y?b(t)?ft(yt/4,t):ft(0,t):b(t)?ft(3*yt/4,t):ft(yt,t):b(t)?ft(yt/2,t):0===t?n>=0&&!function(t){return!!(nt(t)>>>31)}(n)?ft(0,t):ft(yt,t):0===n?ft(yt/2,t):(r=function(t){var n,r,e,o;return l(t)||0===t?t:t===y?ct:t===p?-ct:(t<0&&(r=!0,t=-t),n=0,t>2.414213562373095?(e=ct,n=1,t=-1/t):t<=.66?e=0:(e=.7853981633974483,n=2,t=(t-1)/(t+1)),o=(o=t*t)*function(t){return 0===t?-64.85021904942025:t*(t*(t*(-.8750608600031904*t-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(o)/function(t){return 0===t?194.5506571482614:194.5506571482614+t*(485.3903996359137+t*(432.88106049129027+t*(165.02700983169885+t*(24.858464901423062+1*t))))}(o),o=t*o+t,2===n?o+=.5*lt:1===n&&(o+=lt),e+=o,r?-e:e)}(t/n),n<0?r<=0?r+yt:r-yt:r)}var bt=!0===q?1:0,vt=new E(1),dt=new h(vt.buffer),wt=.6931471803691238,At=1.9082149292705877e-10,st=1048575;function _t(t){var n,r,e,o,i,u,a,f,c,y,b,v;return 0===t?p:l(t)||t<0?NaN:(i=0,(r=nt(t))<1048576&&(i-=54,r=nt(t*=0x40000000000000)),r>=2146435072?t+t:(i+=(r>>20)-1023|0,i+=(f=614244+(r&=st)&1048576|0)>>20|0,a=(t=function(t,n){return vt[0]=t,dt[bt]=n>>>0,vt[0]}(t,r|1072693248^f))-1,(st&2+r)<3?0===a?0===i?0:i*wt+i*At:(u=a*a*(.5-.3333333333333333*a),0===i?a-u:i*wt-(u-i*At-a)):(f=r-398458|0,c=440401-r|0,o=(b=(v=(y=a/(2+a))*y)*v)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(b),e=v*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(b),u=e+o,(f|=c)>0?(n=.5*a*a,0===i?a-(n-y*(n+u)):i*wt-(n-(y*(n+u)+i*At)-a)):0===i?a-y*(a-u):i*wt-(y*(a-u)-i*At-a))))}function mt(t,n,r){return l(t)||l(r)||l(n)||r<=0?NaN:_t(.3183098861837907*pt(t-n,r)+.5)}return c(mt,"factory",(function(t,n){return l(n)||l(t)||n<=0?(r=NaN,function(){return r}):function(r){return l(r)?NaN:_t(.3183098861837907*pt(r-t,n)+.5)};var r})),mt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).logcdf=n();
//# sourceMappingURL=browser.js.map
