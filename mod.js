// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function a(r,t,e){var a=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(a=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,a&&(r="-"+r)),r}var i=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var t,n,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!e(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(n=(-c).toString(t),r.precision&&(n=a(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(t),c||r.precision?r.precision&&(n=a(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,w=/\.0$/,h=/\.0*e/,b=/(\..*[^0])0*e/;function A(r){var t,n,a=parseFloat(r.arg);if(!isFinite(a)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);a=r.arg}switch(r.specifier){case"e":case"E":n=a.toExponential(r.precision);break;case"f":case"F":n=a.toFixed(r.precision);break;case"g":case"G":f(a)<1e-4?((t=r.precision)>0&&(t-=1),n=a.toExponential(t)):n=a.toPrecision(r.precision),r.alternate||(n=s.call(n,b,"$1e"),n=s.call(n,h,"e"),n=s.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,v,"e-0$1"),r.alternate&&(n=s.call(n,g,"$1."),n=s.call(n,d,"$1.e")),a>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):l.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function F(r,t,e){var n=t-r.length;return n<0?r:r=e?r+m(n):m(n)+r}var I=String.fromCharCode,N=isNaN,E=Array.isArray;function _(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,e,n,i,o,f,l,p,s;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,p=0;p<r.length;p++)if(u(n=r[p]))f+=n;else{if(t=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,N(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,N(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!N(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=N(o)?String(n.arg):I(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=A(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=F(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function j(r){var t,e,n,a;for(e=[],a=0,n=U.exec(r);n;)(t=r.slice(a,U.lastIndex-n[0].length)).length&&e.push(t),e.push(T(n)),a=U.lastIndex,n=U.exec(r);return(t=r.slice(a)).length&&e.push(t),e}function x(r){return"string"==typeof r}function k(r){var t,e;if(!x(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[j(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return S.apply(null,t)}var V=Object.prototype,O=V.toString,G=V.__defineGetter__,$=V.__defineSetter__,P=V.__lookupGetter__,H=V.__lookupSetter__;var W=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,a,i,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((a="value"in e)&&(P.call(r,t)||H.call(r,t)?(n=r.__proto__,r.__proto__=V,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,o="set"in e,a&&(i||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,e.get),o&&$&&$.call(r,t,e.set),r};function C(r,t,e){W(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function L(r){return r!=r}var R=Number.POSITIVE_INFINITY,Y=Number,Z=Y.NEGATIVE_INFINITY;function X(r){return r===R||r===Z}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var M=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;var B="function"==typeof Symbol?Symbol:void 0,D="function"==typeof B?B.toStringTag:"";var J=z&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,a,i;if(null==r)return M.call(r);e=r[D],i=D,t=null!=(a=r)&&q.call(a,i);try{r[D]=void 0}catch(t){return M.call(r)}return n=M.call(r),t?r[D]=e:delete r[D],n}:function(r){return M.call(r)},K="function"==typeof Uint32Array;var Q="function"==typeof Uint32Array?Uint32Array:null;var rr,tr="function"==typeof Uint32Array?Uint32Array:void 0;rr=function(){var r,t,e;if("function"!=typeof Q)return!1;try{t=new Q(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(K&&e instanceof Uint32Array||"[object Uint32Array]"===J(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var er=rr,nr="function"==typeof Float64Array;var ar="function"==typeof Float64Array?Float64Array:null;var ir,or="function"==typeof Float64Array?Float64Array:void 0;ir=function(){var r,t,e;if("function"!=typeof ar)return!1;try{t=new ar([1,3.14,-3.14,NaN]),e=t,r=(nr&&e instanceof Float64Array||"[object Float64Array]"===J(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?or:function(){throw new Error("not implemented")};var cr=ir,ur="function"==typeof Uint8Array;var fr="function"==typeof Uint8Array?Uint8Array:null;var lr,pr="function"==typeof Uint8Array?Uint8Array:void 0;lr=function(){var r,t,e;if("function"!=typeof fr)return!1;try{t=new fr(t=[1,3.14,-3.14,256,257]),e=t,r=(ur&&e instanceof Uint8Array||"[object Uint8Array]"===J(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var sr=lr,yr="function"==typeof Uint16Array;var vr="function"==typeof Uint16Array?Uint16Array:null;var gr,dr="function"==typeof Uint16Array?Uint16Array:void 0;gr=function(){var r,t,e;if("function"!=typeof vr)return!1;try{t=new vr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(yr&&e instanceof Uint16Array||"[object Uint16Array]"===J(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var wr,hr={uint16:gr,uint8:sr};(wr=new hr.uint16(1))[0]=4660;var br,Ar,mr=52===new hr.uint8(wr.buffer)[0];!0===mr?(br=1,Ar=0):(br=0,Ar=1);var Fr={HIGH:br,LOW:Ar},Ir=new cr(1),Nr=new er(Ir.buffer),Er=Fr.HIGH,_r=Fr.LOW;function Sr(r,t,e,n){return Ir[0]=r,t[n]=Nr[Er],t[n+e]=Nr[_r],t}function Ur(r){return Sr(r,[0,0],1,0)}C(Ur,"assign",Sr);var Tr="function"==typeof Float64Array;var jr="function"==typeof Float64Array?Float64Array:null;var xr,kr="function"==typeof Float64Array?Float64Array:void 0;xr=function(){var r,t,e;if("function"!=typeof jr)return!1;try{t=new jr([1,3.14,-3.14,NaN]),e=t,r=(Tr&&e instanceof Float64Array||"[object Float64Array]"===J(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?kr:function(){throw new Error("not implemented")};var Vr=!0===mr?1:0,Or=new xr(1),Gr=new er(Or.buffer);function $r(r){return Or[0]=r,Gr[Vr]}var Pr="function"==typeof Float64Array;var Hr="function"==typeof Float64Array?Float64Array:null;var Wr,Cr,Lr,Rr="function"==typeof Float64Array?Float64Array:void 0;Wr=function(){var r,t,e;if("function"!=typeof Hr)return!1;try{t=new Hr([1,3.14,-3.14,NaN]),e=t,r=(Pr&&e instanceof Float64Array||"[object Float64Array]"===J(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Rr:function(){throw new Error("not implemented")},!0===mr?(Cr=1,Lr=0):(Cr=0,Lr=1);var Yr={HIGH:Cr,LOW:Lr},Zr=new Wr(1),Xr=new er(Zr.buffer),zr=Yr.HIGH,Mr=Yr.LOW;var qr=[0,0];function Br(r,t){var e,n,a,i;return Ur.assign(r,qr,1,0),e=qr[0],e&=2147483647,n=$r(t),a=e|=n&=2147483648,i=qr[1],Xr[zr]=a,Xr[Mr]=i,Zr[0]}var Dr=Number.POSITIVE_INFINITY,Jr=1.5707963267948966,Kr=Y.NEGATIVE_INFINITY;var Qr=Number.POSITIVE_INFINITY,rt=3.141592653589793;function tt(r,t){var e;return L(t)||L(r)?NaN:X(t)?t===Qr?X(r)?Br(rt/4,r):Br(0,r):X(r)?Br(3*rt/4,r):Br(rt,r):X(r)?Br(rt/2,r):0===r?t>=0&&!function(r){return!!($r(r)>>>31)}(t)?Br(0,r):Br(rt,r):0===t?Br(rt/2,r):(e=function(r){var t,e,n,a;return L(r)||0===r?r:r===Dr?Jr:r===Kr?-Jr:(r<0&&(e=!0,r=-r),t=0,r>2.414213562373095?(n=Jr,t=1,r=-1/r):r<=.66?n=0:(n=.7853981633974483,t=2,r=(r-1)/(r+1)),a=(a=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(a)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(a),a=r*a+r,2===t?a+=3061616997868383e-32:1===t&&(a+=6123233995736766e-32),n+=a,e?-n:n)}(r/t),t<0?e<=0?e+rt:e-rt:e)}var et="function"==typeof Float64Array;var nt="function"==typeof Float64Array?Float64Array:null;var at,it="function"==typeof Float64Array?Float64Array:void 0;at=function(){var r,t,e;if("function"!=typeof nt)return!1;try{t=new nt([1,3.14,-3.14,NaN]),e=t,r=(et&&e instanceof Float64Array||"[object Float64Array]"===J(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?it:function(){throw new Error("not implemented")};var ot=!0===mr?1:0,ct=new at(1),ut=new er(ct.buffer);var ft=Y.NEGATIVE_INFINITY;var lt=.6931471803691238,pt=1.9082149292705877e-10;function st(r){var t,e,n,a,i,o,c,u,f,l,p,s;return 0===r?ft:L(r)||r<0?NaN:(i=0,(e=$r(r))<1048576&&(i-=54,e=$r(r*=0x40000000000000)),e>=2146435072?r+r:(i+=(e>>20)-1023|0,i+=(u=(e&=1048575)+614244&1048576|0)>>20|0,c=(r=function(r,t){return ct[0]=r,ut[ot]=t>>>0,ct[0]}(r,e|1072693248^u))-1,(1048575&2+e)<3?0===c?0===i?0:i*lt+i*pt:(o=c*c*(.5-.3333333333333333*c),0===i?c-o:i*lt-(o-i*pt-c)):(u=e-398458|0,f=440401-e|0,a=(p=(s=(l=c/(2+c))*l)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),n=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=n+a,(u|=f)>0?(t=.5*c*c,0===i?c-(t-l*(t+o)):i*lt-(t-(l*(t+o)+i*pt)-c)):0===i?c-l*(c-o):i*lt-(l*(c-o)-i*pt-c))))}function yt(r,t,e){return L(r)||L(e)||L(t)||e<=0?NaN:st(.3183098861837907*tt(r-t,e)+.5)}function vt(r,t){return L(t)||L(r)||t<=0?(e=NaN,function(){return e}):function(e){if(L(e))return NaN;return st(.3183098861837907*tt(e-r,t)+.5)};var e}C(yt,"factory",vt);export{yt as default,vt as factory};
//# sourceMappingURL=mod.js.map
