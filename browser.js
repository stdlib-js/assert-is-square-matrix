// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).isSquareMatrix=r()}(this,(function(){"use strict";function t(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var r=t(Object.freeze({__proto__:null,default:()=>window})),e=r();var n=function(){return"function"==typeof e.BigInt&&"function"==typeof BigInt&&"bigint"==typeof e.BigInt("1")&&"bigint"==typeof BigInt("1")},i="function"==typeof Object.defineProperty?Object.defineProperty:null;var o=function(){try{return i({},"x",{}),!0}catch(t){return!1}},f=Object.defineProperty,u=Object.prototype,a=u.toString,s=u.__defineGetter__,c=u.__defineSetter__,l=u.__lookupGetter__,h=u.__lookupSetter__;var p=function(t,r,e){var n,i,o,f;if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((i="value"in e)&&(l.call(t,r)||h.call(t,r)?(n=t.__proto__,t.__proto__=u,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),o="get"in e,f="set"in e,i&&(o||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&s&&s.call(t,r,e.get),f&&c&&c.call(t,r,e.set),t},y=f,_=p,v=o()?y:_,g=v;var d=function(t,r,e){g(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},b=d,m=v;var w=function(t,r,e){m(t,r,{configurable:!1,enumerable:!1,get:e})},O=w,A={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};var j=function(t){return A[t]||null};var E=function(t){var r,e;for(r=0,e=0;e<t.length;e++)t[e]<0&&(r+=1);return 0===r?1:r===t.length?-1:0};var I=function(t){return Math.abs(t)};var U=function(t){var r,e,n,i,o,f;if(0===(e=t.length))return 0;for(r=!0,n=!0,i=I(t[0]),f=1;f<e;f++){if(o=I(t[f]),r&&o<i?r=!1:n&&o>i&&(n=!1),!n&&!r)return 0;i=o}return n&&r?3:n?1:2};var S=function(t,r){return r&&(2===t||3===t)};var N=function(t,r){return r&&(1===t||3===t)};var T=function(t,r,e){var n,i,o,f,u;for(n=t.length,i=e,o=e,u=0;u<n;u++){if(0===t[u])return[e,e];(f=r[u])>0?o+=f*(t[u]-1):f<0&&(i+=f*(t[u]-1))}return[i,o]};b(T,"assign",(function(t,r,e,n){var i,o,f,u,a;for(i=t.length,o=e,f=e,a=0;a<i;a++){if(0===t[a])return n[0]=e,n[1]=e,n;(u=r[a])>0?f+=u*(t[a]-1):u<0&&(o+=u*(t[a]-1))}return n[0]=o,n[1]=f,n}));var x=T;var P=function(t,r,e,n,i){var o;return 0!==t&&0!==i&&t===(o=x(r,e,n))[1]-o[0]+1};var R=function(t){return{ROW_MAJOR_CONTIGUOUS:t.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY}};var B=function(t){var r,e,n,i,o,f;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(e=this._shape,r=this._strides,i=this._offset,"column-major"===this._order){for(f=0;f<n;f++)t-=o=t%e[f],t/=e[f],i+=o*r[f];return this._accessors?this._buffer.get(i):this._buffer[i]}for(f=n-1;f>=0;f--)t-=o=t%e[f],t/=e[f],i+=o*r[f];return this._accessors?this._buffer.get(i):this._buffer[i]};var L=function(t,r){var e,n,i,o,f,u;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(r,this._offset+t):this._buffer[this._offset+t]=r,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(r,this._offset-t):this._buffer[this._offset-t]=r,this}if(n=this._shape,e=this._strides,o=this._offset,"column-major"===this._order){for(u=0;u<i;u++)t-=f=t%n[u],t/=n[u],o+=f*e[u];return this._accessors?this._buffer.set(r,o):this._buffer[o]=r,this}for(u=i-1;u>=0;u--)t-=f=t%n[u],t/=n[u],o+=f*e[u];return this._accessors?this._buffer.set(r,o):this._buffer[o]=r,this};var M=function(){var t,r;for(t=this._offset,r=0;r<arguments.length-1;r++)t+=this._strides[r]*arguments[r];return this._accessors?this._buffer.set(arguments[r],t):this._buffer[t]=arguments[r],this};var C=function(){var t,r;for(t=this._offset,r=0;r<arguments.length;r++)t+=this._strides[r]*arguments[r];return this._accessors?this._buffer.get(t):this._buffer[t]};var F=function(t){return t.re};var V=function(t){return t.im},D=F,G=V;var Y=function(){var t,r,e,n;for(r=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<r;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<r;n++)e=this.iget(n),t.data.push(D(e),G(e));else for(n=0;n<r;n++)t.data.push(this.iget(n));return t};var J=function(t){return"string"==typeof t};var k=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var W=function(){return k&&"symbol"==typeof Symbol.toStringTag},X=Object.prototype.toString,$=X;var H=function(t){return $.call(t)},q=Object.prototype.hasOwnProperty;var z=function(t,r){return null!=t&&q.call(t,r)},K="function"==typeof Symbol?Symbol.toStringTag:"",Q=z,Z=K,tt=X;var rt=H,et=function(t){var r,e,n;if(null==t)return tt.call(t);e=t[Z],r=Q(t,Z);try{t[Z]=void 0}catch(r){return tt.call(t)}return n=tt.call(t),r?t[Z]=e:delete t[Z],n},nt=W()?et:rt,it=String.prototype.valueOf;var ot=nt,ft=function(t){try{return it.call(t),!0}catch(t){return!1}},ut=W();var at=function(t){return"object"==typeof t&&(t instanceof String||(ut?ft(t):"[object String]"===ot(t)))},st=J,ct=at;var lt=b,ht=function(t){return st(t)||ct(t)},pt=at;lt(ht,"isPrimitive",J),lt(ht,"isObject",pt);var yt=ht,_t=yt.isPrimitive,vt=/[-\/\\^$*+?.()|[\]{}]/g;var gt=function(t){var r,e;if(!_t(t))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+t+"`.");if("/"===t[0])for(e=t.length-1;e>=0&&"/"!==t[e];e--);return void 0===e||e<=0?t.replace(vt,"\\$&"):(r=(r=t.substring(1,e)).replace(vt,"\\$&"),t=t[0]+r+t.substring(e))},dt=/./,bt=r(),mt=bt.document&&bt.document.childNodes,wt=Int8Array,Ot=dt,At=mt,jt=wt;var Et=function(){return"function"==typeof Ot||"object"==typeof jt||"function"==typeof At};var It=function(){return/^\s*function\s*([^(]*)/i},Ut=It;b(Ut,"REGEXP",It());var St=Ut,Nt=nt;var Tt=Array.isArray?Array.isArray:function(t){return"[object Array]"===Nt(t)},xt=Tt;var Pt=function(t){return null!==t&&"object"==typeof t};b(Pt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!xt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Pt));var Rt=Pt,Bt=Rt;var Lt=nt,Mt=St.REGEXP,Ct=function(t){return Bt(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var Ft=function(t){var r,e,n;if(("Object"===(e=Lt(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Mt.exec(n.toString()))return r[1]}return Ct(t)?"Buffer":e},Vt=Ft;var Dt=Ft;var Gt=function(t){var r;return null===t?"null":"object"===(r=typeof t)?Vt(t).toLowerCase():r},Yt=function(t){return Dt(t).toLowerCase()},Jt=Et()?Yt:Gt,kt=Jt;var Wt=function(t){return"function"===kt(t)},Xt=RegExp.prototype.exec;var $t=nt,Ht=function(t){try{return Xt.call(t),!0}catch(t){return!1}},qt=W();var zt=gt,Kt=Wt,Qt=yt.isPrimitive,Zt=function(t){return"object"==typeof t&&(t instanceof RegExp||(qt?Ht(t):"[object RegExp]"===$t(t)))};var tr=function(t,r,e){if(!Qt(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");if(Qt(r))r=zt(r),r=new RegExp(r,"g");else if(!Zt(r))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+r+"`.");if(!Qt(e)&&!Kt(e))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+e+"`.");return t.replace(r,e)},rr=F,er=V,nr={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var ir=function(){var t,r,e,n,i,o,f;if(r=this._shape.length,n="ndarray( '"+(i=this._dtype)+"', ",t="",this._length<=100)if("complex64"===i||"complex128"===i)for(f=0;f<this._length;f++)o=this.iget(f),t+=rr(o)+", "+er(o),f<this._length-1&&(t+=", ");else for(f=0;f<this._length;f++)t+=this.iget(f),f<this._length-1&&(t+=", ");else{if("complex64"===i||"complex128"===i)for(f=0;f<3;f++)o=this.iget(f),t+=rr(o)+", "+er(o),f<2&&(t+=", ");else for(f=0;f<3;f++)t+=this.iget(f),f<2&&(t+=", ");if(t+=", ..., ","complex64"===i||"complex128"===i)for(f=2;f>=0;f--)o=this.iget(this._length-1-f),t+=rr(o)+", "+er(o),f>0&&(t+=", ");else for(f=2;f>=0;f--)t+=this.iget(this._length-1-f),f>0&&(t+=", ")}if(e=nr[this.dtype],n+=tr(e,"{{data}}",t),n+=", ",n+=0===r?"[]":"[ "+this._shape.join(", ")+" ]",n+=", ",n+="[ ",0===r)n+="0";else for(f=0;f<r;f++)this._strides[f]<0?n+=-this._strides[f]:n+=this._strides[f],f<r-1&&(n+=", ");return n+=" ]",n+=", ",n+="0",n+=", ",n+="'"+this._order+"'",n+=" )"},or=nt,fr="function"==typeof Uint8Array;var ur="function"==typeof Uint8Array?Uint8Array:null,ar=function(t){return fr&&t instanceof Uint8Array||"[object Uint8Array]"===or(t)},sr=ur;var cr=function(){var t,r;if("function"!=typeof sr)return!1;try{r=new sr(r=[1,3.14,-3.14,256,257]),t=ar(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t};var lr="function"==typeof Uint8Array?Uint8Array:void 0,hr=function(){throw new Error("not implemented")},pr=cr()?lr:hr,yr=nt,_r="function"==typeof Uint16Array;var vr="function"==typeof Uint16Array?Uint16Array:null,gr=function(t){return _r&&t instanceof Uint16Array||"[object Uint16Array]"===yr(t)},dr=vr;var br=function(){var t,r;if("function"!=typeof dr)return!1;try{r=new dr(r=[1,3.14,-3.14,65536,65537]),t=gr(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t};var mr,wr="function"==typeof Uint16Array?Uint16Array:void 0,Or=function(){throw new Error("not implemented")},Ar={uint16:br()?wr:Or,uint8:pr};(mr=new Ar.uint16(1))[0]=4660;var jr=52===new Ar.uint8(mr.buffer)[0],Er=nt,Ir="function"==typeof ArrayBuffer;var Ur=function(t){return Ir&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===Er(t)},Sr=nt,Nr="function"==typeof Float64Array;var Tr="function"==typeof Float64Array?Float64Array:null,xr=function(t){return Nr&&t instanceof Float64Array||"[object Float64Array]"===Sr(t)},Pr=Tr;var Rr=function(){var t,r;if("function"!=typeof Pr)return!1;try{r=new Pr([1,3.14,-3.14,NaN]),t=xr(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t};var Br,Lr="function"==typeof Float64Array?Float64Array:void 0,Mr=function(){throw new Error("not implemented")};Br=Rr()?Lr:Mr;var Cr="function"==typeof ArrayBuffer?ArrayBuffer:null,Fr=Ur,Vr=Br,Dr=Cr;var Gr=function(){var t,r,e;if("function"!=typeof Dr)return!1;try{e=new Dr(16),(t=Fr(e)&&"function"==typeof Dr.isView)&&((r=new Vr(e))[0]=-3.14,r[1]=NaN,t=t&&Dr.isView(r)&&16===e.byteLength&&-3.14===r[0]&&r[1]!=r[1])}catch(r){t=!1}return t};var Yr="function"==typeof ArrayBuffer?ArrayBuffer:void 0,Jr=function(){throw new Error("not implemented")},kr=Gr()?Yr:Jr,Wr=nt,Xr="function"==typeof DataView;var $r="function"==typeof DataView?DataView:null,Hr=function(t){return Xr&&t instanceof DataView||"[object DataView]"===Wr(t)},qr=kr,zr=$r;var Kr=function(){var t,r,e;if("function"!=typeof zr)return!1;try{e=new qr(24),r=new zr(e,8),(t=Hr(r)&&"function"==typeof r.getFloat64&&"function"==typeof r.setFloat64)&&(r.setFloat64(0,-3.14),r.setFloat64(8,NaN),t=t&&r.buffer===e&&16===r.byteLength&&8===r.byteOffset&&-3.14===r.getFloat64(0)&&r.getFloat64(8)!=r.getFloat64(8))}catch(r){t=!1}return t};var Qr="function"==typeof DataView?DataView:void 0,Zr=function(){throw new Error("not implemented")},te=Kr()?Qr:Zr,re="function"==typeof BigInt?BigInt:void 0,ee=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var ne=function(){return ee.slice()};var ie=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},oe=v;var fe=function(t,r,e){oe(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})},ue=fe;var ae=function(t){return Object.keys(Object(t))},se=ae;var ce=function(){return function(){return 2!==(se(arguments)||"").length}(1,2)},le=void 0!==Object.keys,he=nt;var pe,ye=function(t){return"[object Arguments]"===he(t)},_e=ye;pe=function(){return _e(arguments)}();var ve=pe;var ge=function(t){return"number"==typeof t},de=Number,be=de.prototype.toString;var me=nt,we=de,Oe=function(t){try{return be.call(t),!0}catch(t){return!1}},Ae=W();var je=function(t){return"object"==typeof t&&(t instanceof we||(Ae?Oe(t):"[object Number]"===me(t)))},Ee=ge,Ie=je;var Ue=b,Se=function(t){return Ee(t)||Ie(t)},Ne=je;Ue(Se,"isPrimitive",ge),Ue(Se,"isObject",Ne);var Te=Se;var xe=function(t){return t!=t},Pe=Te.isPrimitive,Re=xe;var Be=function(t){return Pe(t)&&Re(t)},Le=Te.isObject,Me=xe;var Ce=function(t){return Le(t)&&Me(t.valueOf())},Fe=Be,Ve=Ce;var De=b,Ge=function(t){return Fe(t)||Ve(t)},Ye=Ce;De(Ge,"isPrimitive",Be),De(Ge,"isObject",Ye);var Je=Ge,ke=Number.POSITIVE_INFINITY,We=de.NEGATIVE_INFINITY,Xe=Math.floor,$e=Xe;var He=function(t){return $e(t)===t},qe=ke,ze=We,Ke=He;var Qe=function(t){return t<qe&&t>ze&&Ke(t)},Ze=Te.isPrimitive,tn=Qe;var rn=function(t){return Ze(t)&&tn(t)},en=Te.isObject,nn=Qe;var on=function(t){return en(t)&&nn(t.valueOf())},fn=rn,un=on;var an=b,sn=function(t){return fn(t)||un(t)},cn=on;an(sn,"isPrimitive",rn),an(sn,"isObject",cn);var ln,hn=sn,pn=Object.prototype.propertyIsEnumerable;ln=!pn.call("beep","0");var yn=yt,_n=Je.isPrimitive,vn=hn.isPrimitive,gn=pn,dn=ln;var bn=function(t,r){var e;return null!=t&&(!(e=gn.call(t,r))&&dn&&yn(t)?!_n(r=+r)&&vn(r)&&r>=0&&r<t.length:e)},mn=bn,wn=z,On=mn,An=Tt,jn=He;var En=ve?ye:function(t){return null!==t&&"object"==typeof t&&!An(t)&&"number"==typeof t.length&&jn(t.length)&&t.length>=0&&t.length<=4294967295&&wn(t,"callee")&&!On(t,"callee")},In=En,Un=ae,Sn=Array.prototype.slice;var Nn=function(t){return In(t)?Un(Sn.call(t)):Un(t)};var Tn=mn((function(){}),"prototype"),xn=!mn({toString:null},"toString"),Pn=He;var Rn=Je,Bn=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Pn(t.length)&&t.length>=0&&t.length<=9007199254740991},Ln=yt.isPrimitive,Mn=hn.isPrimitive;var Cn=function(t,r,e){var n,i;if(!Bn(t)&&!Ln(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!Mn(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;i=e}else(i=n+e)<0&&(i=0)}else i=0;if(Rn(r)){for(;i<n;i++)if(Rn(t[i]))return i}else for(;i<n;i++)if(t[i]===r)return i;return-1};var Fn,Vn=function(t){return t.constructor&&t.constructor.prototype===t},Dn="undefined"==typeof window?void 0:window,Gn=z,Yn=Cn,Jn=Jt,kn=Vn,Wn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Xn=Dn;Fn=function(){var t;if("undefined"===Jn(Xn))return!1;for(t in Xn)try{-1===Yn(Wn,t)&&Gn(Xn,t)&&null!==Xn[t]&&"object"===Jn(Xn[t])&&kn(Xn[t])}catch(t){return!0}return!1}();var $n="undefined"!=typeof window,Hn=Fn,qn=Vn,zn=$n;var Kn=Rt,Qn=z,Zn=En,ti=Tn,ri=xn,ei=function(t){if(!1===zn&&!Hn)return qn(t);try{return qn(t)}catch(t){return!1}},ni=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var ii,oi=ae,fi=Nn,ui=function(t){var r,e,n,i,o,f,u;if(i=[],Zn(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!Qn(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(!1===(n="function"==typeof t)&&!Kn(t))return i;e=ti&&n}for(o in t)e&&"prototype"===o||!Qn(t,o)||i.push(String(o));if(ri)for(r=ei(t),u=0;u<ni.length;u++)f=ni[u],r&&"constructor"===f||!Qn(t,f)||i.push(String(f));return i};ii=le?ce()?fi:oi:ui;var ai=ue,si=ii;var ci=function(t,r){var e,n,i;for(e=si(r),i=0;i<e.length;i++)n=e[i],ai(t,n,r[n]);return t},li=ne,hi=ie,pi=ci;b(li,"enum",hi),pi(li,hi());var yi=li,_i=["row-major","column-major"];var vi=function(){return _i.slice()};b(vi,"enum",(function(){return{"row-major":1,"column-major":2}}));var gi=vi,di=["throw","clamp","wrap"];var bi=function(){return di.slice()};b(bi,"enum",(function(){return{throw:1,clamp:2,wrap:3}}));var mi=bi,wi=jr,Oi=kr,Ai=te,ji=re,Ei=gi.enum,Ii=mi.enum,Ui=(0,yi.enum)(),Si=Ei(),Ni=Ii();var Ti=function(){var t,r,e,n,i,o,f,u,a,s,c,l,h,p;if(a=this._mode||"throw",f=this._submode||[a],e=33+16*(l=this._ndims)+(h=f.length),(u=this.__meta_dataview__)&&u.byteLength===e)return u;for(u=new Ai(new Oi(e)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,s=0,u.setInt8(s,wi?1:0),s+=1,u.setInt16(s,Ui[n],wi),s+=2,u.setBigInt64(s,ji(l),wi),c=8*l,s+=8,p=0;p<l;p++)u.setBigInt64(s,ji(i[p]),wi),u.setBigInt64(s+c,ji(o[p]*t),wi),s+=8;for(s+=c,u.setBigInt64(s,ji(this._offset*t),wi),s+=8,u.setInt8(s,Si[this._order]),s+=1,u.setInt8(s,Ni[a]),s+=1,u.setBigInt64(s,ji(h),wi),s+=8,p=0;p<h;p++)u.setInt8(s,Ni[f[p]]),s+=1;return r=0,r|=this._flags.READONLY?4:0,u.setInt32(s,r,wi),this.__meta_dataview__=u,u},xi=jr,Pi=pr,Ri=te,Bi=Xe;var Li=function(t){var r,e,n,i;return r=new Pi(8),0===t||(i=(4294967295&t)>>>0,n=Bi(t/4294967296),e=new Ri(r.buffer),xi?(e.setUint32(0,i,xi),e.setUint32(4,n,xi)):(e.setUint32(0,n,xi),e.setUint32(4,i,xi))),r},Mi=jr,Ci=te,Fi=Xe,Vi=new pr(8),Di=new Ci(Vi.buffer);var Gi=Li;b(Gi,"assign",(function(t,r,e,n){var i,o,f;if(0===t){for(f=0;f<Vi.length;f++)r[n]=0,n+=e;return r}for(o=(4294967295&t)>>>0,i=Fi(t/4294967296),Mi?(Di.setUint32(0,o,Mi),Di.setUint32(4,i,Mi)):(Di.setUint32(0,i,Mi),Di.setUint32(4,o,Mi)),f=0;f<Vi.length;f++)r[n]=Vi[f],n+=e;return r}));var Yi=jr,Ji=kr,ki=te,Wi=pr,Xi=gi.enum,$i=mi.enum,Hi=Gi.assign,qi=(0,yi.enum)(),zi=Xi(),Ki=$i();var Qi=n,Zi=b,to=O,ro=j,eo=E,no=U,io=S,oo=N,fo=P,uo=R,ao=B,so=L,co=M,lo=C,ho=Y,po=ir,yo=Ti,_o=function(){var t,r,e,n,i,o,f,u,a,s,c,l,h,p,y;if(s=this._mode||"throw",u=this._submode||[s],n=33+16*(h=this._ndims)+(p=u.length),(a=this.__meta_dataview__)&&a.byteLength===n)return a;for(a=new ki(new Ji(n)),r=new Wi(a.buffer),o=this._shape,f=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,a.setInt8(c,Yi?1:0),c+=1,a.setInt16(c,qi[i],Yi),Hi(h,r,1,c+=2),l=8*h,c+=8,y=0;y<h;y++)Hi(o[y],r,1,c),Hi(f[y]*t,r,1,c+l),c+=8;for(c+=l,Hi(this._offset*t,r,1,c),c+=8,a.setInt8(c,zi[this._order]),c+=1,a.setInt8(c,Ki[s]),Hi(p,r,1,c+=1),c+=8,y=0;y<p;y++)a.setInt8(c,Ki[u[y]]),c+=1;return e=0,e|=this._flags.READONLY?4:0,a.setInt32(c,e,Yi),this.__meta_dataview__=a,a};function vo(t,r,e,n,i,o){var f,u,a,s,c;if(!(this instanceof vo))return new vo(t,r,e,n,i,o);for(s=1,c=0;c<e.length;c++)s*=e[c];return u=r.BYTES_PER_ELEMENT?r.BYTES_PER_ELEMENT*s:null,this._byteLength=u,this._bytesPerElement=ro(t),this._buffer=r,this._dtype=t,this._length=s,this._ndims=e.length,this._offset=i,this._order=o,this._shape=e,this._strides=n,this._accessors=Boolean(r.get&&r.set),this._iterationOrder=eo(n),f=fo(s,e,n,i,this._iterationOrder),a=no(n),this._flags={ROW_MAJOR_CONTIGUOUS:oo(a,f),COLUMN_MAJOR_CONTIGUOUS:io(a,f),READONLY:!1},this.__meta_dataview__=null,this}Zi(vo,"name","ndarray"),to(vo.prototype,"byteLength",(function(){return this._byteLength})),to(vo.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),to(vo.prototype,"data",(function(){return this._buffer})),to(vo.prototype,"dtype",(function(){return this._dtype})),to(vo.prototype,"flags",(function(){return uo(this._flags)})),to(vo.prototype,"length",(function(){return this._length})),to(vo.prototype,"ndims",(function(){return this._ndims})),to(vo.prototype,"offset",(function(){return this._offset})),to(vo.prototype,"order",(function(){return this._order})),to(vo.prototype,"shape",(function(){return this._shape.slice()})),to(vo.prototype,"strides",(function(){return this._strides.slice()})),Zi(vo.prototype,"get",lo),Zi(vo.prototype,"iget",ao),Zi(vo.prototype,"set",co),Zi(vo.prototype,"iset",so),Zi(vo.prototype,"toString",po),Zi(vo.prototype,"toJSON",ho),Zi(vo.prototype,"__array_meta_dataview__",Qi()?yo:_o);var go=vo;var bo=function(t){return t instanceof go||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set};var mo=function(t){return bo(t)&&2===t.ndims&&2===t.shape.length&&2===t.strides.length};return function(t){return mo(t)&&t.shape[0]===t.shape[1]}}));
//# sourceMappingURL=browser.js.map
