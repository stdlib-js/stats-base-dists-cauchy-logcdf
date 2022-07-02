// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,u=e.__defineSetter__,i=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,y=function(r,n,t){var c,y,l,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((y="value"in t)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,v="set"in t,y&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,n,t.get),v&&u&&u.call(r,n,t.set),r},l=n()?c:y;var v=function(r,n,t){l(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r!=r},b=Number.POSITIVE_INFINITY,w=Number.NEGATIVE_INFINITY,A=b,_=w;var m=function(r){return r===A||r===_};var d=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var U=function(){return d&&"symbol"==typeof Symbol.toStringTag},s=Object.prototype.toString,N=s;var h=function(r){return N.call(r)},j=Object.prototype.hasOwnProperty;var g=function(r,n){return null!=r&&j.call(r,n)},I="function"==typeof Symbol?Symbol.toStringTag:"",O=g,S=I,E=s;var F=h,H=function(r){var n,t,e;if(null==r)return E.call(r);t=r[S],n=O(r,S);try{r[S]=void 0}catch(n){return E.call(r)}return e=E.call(r),n?r[S]=t:delete r[S],e},T=U()?H:F,G=T,P="function"==typeof Uint32Array;var L="function"==typeof Uint32Array?Uint32Array:null,V=function(r){return P&&r instanceof Uint32Array||"[object Uint32Array]"===G(r)},W=L;var x=function(){var r,n;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,4294967296,4294967297]),r=V(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var k="function"==typeof Uint32Array?Uint32Array:void 0,Y=function(){throw new Error("not implemented")},C=x()?k:Y,q=T,z="function"==typeof Float64Array;var B="function"==typeof Float64Array?Float64Array:null,D=function(r){return z&&r instanceof Float64Array||"[object Float64Array]"===q(r)},J=B;var K=function(){var r,n;if("function"!=typeof J)return!1;try{n=new J([1,3.14,-3.14,NaN]),r=D(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var M="function"==typeof Float64Array?Float64Array:void 0,Q=function(){throw new Error("not implemented")},R=K()?M:Q,X=T,Z="function"==typeof Uint8Array;var $="function"==typeof Uint8Array?Uint8Array:null,rr=function(r){return Z&&r instanceof Uint8Array||"[object Uint8Array]"===X(r)},nr=$;var tr=function(){var r,n;if("function"!=typeof nr)return!1;try{n=new nr(n=[1,3.14,-3.14,256,257]),r=rr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var er="function"==typeof Uint8Array?Uint8Array:void 0,or=function(){throw new Error("not implemented")},ar=tr()?er:or,ur=T,ir="function"==typeof Uint16Array;var fr="function"==typeof Uint16Array?Uint16Array:null,cr=function(r){return ir&&r instanceof Uint16Array||"[object Uint16Array]"===ur(r)},yr=fr;var lr=function(){var r,n;if("function"!=typeof yr)return!1;try{n=new yr(n=[1,3.14,-3.14,65536,65537]),r=cr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var vr,pr="function"==typeof Uint16Array?Uint16Array:void 0,br=function(){throw new Error("not implemented")},wr={uint16:lr()?pr:br,uint8:ar};(vr=new wr.uint16(1))[0]=4660;var Ar,_r,mr=52===new wr.uint8(vr.buffer)[0];!0===mr?(Ar=1,_r=0):(Ar=0,_r=1);var dr=C,Ur={HIGH:Ar,LOW:_r},sr=new R(1),Nr=new dr(sr.buffer),hr=Ur.HIGH,jr=Ur.LOW;var gr=function(r,n){return sr[0]=n,r[0]=Nr[hr],r[1]=Nr[jr],r};var Ir=function(r,n){return 1===arguments.length?gr([0,0],r):gr(r,n)},Or=C,Sr=!0===mr?1:0,Er=new R(1),Fr=new Or(Er.buffer);var Hr,Tr,Gr=function(r){return Er[0]=r,Fr[Sr]};!0===mr?(Hr=1,Tr=0):(Hr=0,Tr=1);var Pr=C,Lr={HIGH:Hr,LOW:Tr},Vr=new R(1),Wr=new Pr(Vr.buffer),xr=Lr.HIGH,kr=Lr.LOW;var Yr=function(r,n){return Wr[xr]=r,Wr[kr]=n,Vr[0]},Cr=Ir,qr=Gr,zr=Yr,Br=[0,0];var Dr=Gr;var Jr=p,Kr=b,Mr=1.5707963267948966,Qr=w,Rr=function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025},Xr=function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))};var Zr=m,$r=function(r,n){var t,e;return Cr(Br,r),t=Br[0],t&=2147483647,e=qr(n),zr(t|=e&=2147483648,Br[1])},rn=function(r){return!!(Dr(r)>>>31)},nn=p,tn=function(r){var n,t,e,o;return Jr(r)||0===r?r:r===Kr?Mr:r===Qr?-Mr:(r<0&&(t=!0,r=-r),n=0,r>2.414213562373095?(e=Mr,n=1,r=-1/r):r<=.66?e=0:(e=.7853981633974483,n=2,r=(r-1)/(r+1)),o=r*(o=(o=r*r)*Rr(o)/Xr(o))+r,2===n?o+=3061616997868383e-32:1===n&&(o+=6123233995736766e-32),e+=o,t?-e:e)},en=b,on=3.141592653589793;var an=function(r,n){var t;return nn(n)||nn(r)?NaN:Zr(n)?n===en?Zr(r)?$r(on/4,r):$r(0,r):Zr(r)?$r(3*on/4,r):$r(on,r):Zr(r)?$r(on/2,r):0===r?n>=0&&!rn(n)?$r(0,r):$r(on,r):0===n?$r(on/2,r):(t=tn(r/n),n<0?t<=0?t+on:t-on:t)},un=C,fn=!0===mr?1:0,cn=new R(1),yn=new un(cn.buffer);var ln=function(r,n){return cn[0]=r,yn[fn]=n>>>0,cn[0]};var vn=Gr,pn=ln,bn=p,wn=w,An=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},_n=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},mn=.6931471803691238,dn=1.9082149292705877e-10;var Un=function(r){var n,t,e,o,a,u,i,f,c,y,l;return 0===r?wn:bn(r)||r<0?NaN:(o=0,(t=vn(r))<1048576&&(o-=54,t=vn(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(i=(t&=1048575)+614244&1048576|0)>>20|0,u=(r=pn(r,t|1072693248^i))-1,(1048575&2+t)<3?0===u?0===o?0:o*mn+o*dn:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*mn-(a-o*dn-u)):(i=t-398458|0,f=440401-t|0,e=(y=(l=(c=u/(2+u))*c)*l)*An(y),a=l*_n(y)+e,(i|=f)>0?(n=.5*u*u,0===o?u-(n-c*(n+a)):o*mn-(n-(c*(n+a)+o*dn)-u)):0===o?u-c*(u-a):o*mn-(c*(u-a)-o*dn-u))))};function sn(r,n,t){return p(r)||p(t)||p(n)||t<=0?NaN:Un(.3183098861837907*an(r-n,t)+.5)}var Nn=function(r){return function(){return r}};function hn(r,n){return p(n)||p(r)||n<=0?Nn(NaN):function(t){if(p(t))return NaN;return Un(.3183098861837907*an(t-r,n)+.5)}}v(sn,"factory",hn);export{sn as default,hn as factory};
//# sourceMappingURL=mod.js.map
