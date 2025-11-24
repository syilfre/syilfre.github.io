(function(){const C=document.createElement("link").relList;if(C&&C.supports&&C.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))d(w);new MutationObserver(w=>{for(const z of w)if(z.type==="childList")for(const $ of z.addedNodes)$.tagName==="LINK"&&$.rel==="modulepreload"&&d($)}).observe(document,{childList:!0,subtree:!0});function R(w){const z={};return w.integrity&&(z.integrity=w.integrity),w.referrerPolicy&&(z.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?z.credentials="include":w.crossOrigin==="anonymous"?z.credentials="omit":z.credentials="same-origin",z}function d(w){if(w.ep)return;w.ep=!0;const z=R(w);fetch(w.href,z)}})();function Cd(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var cf={exports:{}},Tn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd;function ny(){if(gd)return Tn;gd=1;var p=Symbol.for("react.transitional.element"),C=Symbol.for("react.fragment");function R(d,w,z){var $=null;if(z!==void 0&&($=""+z),w.key!==void 0&&($=""+w.key),"key"in w){z={};for(var re in w)re!=="key"&&(z[re]=w[re])}else z=w;return w=z.ref,{$$typeof:p,type:d,key:$,ref:w!==void 0?w:null,props:z}}return Tn.Fragment=C,Tn.jsx=R,Tn.jsxs=R,Tn}var pd;function uy(){return pd||(pd=1,cf.exports=ny()),cf.exports}var s=uy(),ff={exports:{}},Y={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd;function iy(){if(bd)return Y;bd=1;var p=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),$=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),ne=Symbol.iterator;function We(r){return r===null||typeof r!="object"?null:(r=ne&&r[ne]||r["@@iterator"],typeof r=="function"?r:null)}var qe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Re=Object.assign,Ct={};function Fe(r,E,D){this.props=r,this.context=E,this.refs=Ct,this.updater=D||qe}Fe.prototype.isReactComponent={},Fe.prototype.setState=function(r,E){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,E,"setState")},Fe.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Ft(){}Ft.prototype=Fe.prototype;function je(r,E,D){this.props=r,this.context=E,this.refs=Ct,this.updater=D||qe}var ct=je.prototype=new Ft;ct.constructor=je,Re(ct,Fe.prototype),ct.isPureReactComponent=!0;var Tt=Array.isArray;function Ye(){}var W={H:null,A:null,T:null,S:null},Ge=Object.prototype.hasOwnProperty;function Et(r,E,D){var M=D.ref;return{$$typeof:p,type:r,key:E,ref:M!==void 0?M:null,props:D}}function Ql(r,E){return Et(r.type,E,r.props)}function At(r){return typeof r=="object"&&r!==null&&r.$$typeof===p}function Xe(r){var E={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(D){return E[D]})}var Tl=/\/+/g;function wt(r,E){return typeof r=="object"&&r!==null&&r.key!=null?Xe(""+r.key):E.toString(36)}function pt(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Ye,Ye):(r.status="pending",r.then(function(E){r.status==="pending"&&(r.status="fulfilled",r.value=E)},function(E){r.status==="pending"&&(r.status="rejected",r.reason=E)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function x(r,E,D,M,G){var V=typeof r;(V==="undefined"||V==="boolean")&&(r=null);var te=!1;if(r===null)te=!0;else switch(V){case"bigint":case"string":case"number":te=!0;break;case"object":switch(r.$$typeof){case p:case C:te=!0;break;case L:return te=r._init,x(te(r._payload),E,D,M,G)}}if(te)return G=G(r),te=M===""?"."+wt(r,0):M,Tt(G)?(D="",te!=null&&(D=te.replace(Tl,"$&/")+"/"),x(G,E,D,"",function(_a){return _a})):G!=null&&(At(G)&&(G=Ql(G,D+(G.key==null||r&&r.key===G.key?"":(""+G.key).replace(Tl,"$&/")+"/")+te)),E.push(G)),1;te=0;var Ue=M===""?".":M+":";if(Tt(r))for(var ge=0;ge<r.length;ge++)M=r[ge],V=Ue+wt(M,ge),te+=x(M,E,D,V,G);else if(ge=We(r),typeof ge=="function")for(r=ge.call(r),ge=0;!(M=r.next()).done;)M=M.value,V=Ue+wt(M,ge++),te+=x(M,E,D,V,G);else if(V==="object"){if(typeof r.then=="function")return x(pt(r),E,D,M,G);throw E=String(r),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return te}function N(r,E,D){if(r==null)return r;var M=[],G=0;return x(r,M,"","",function(V){return E.call(D,V,G++)}),M}function q(r){if(r._status===-1){var E=r._result;E=E(),E.then(function(D){(r._status===0||r._status===-1)&&(r._status=1,r._result=D)},function(D){(r._status===0||r._status===-1)&&(r._status=2,r._result=D)}),r._status===-1&&(r._status=0,r._result=E)}if(r._status===1)return r._result.default;throw r._result}var ue=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},se={map:N,forEach:function(r,E,D){N(r,function(){E.apply(this,arguments)},D)},count:function(r){var E=0;return N(r,function(){E++}),E},toArray:function(r){return N(r,function(E){return E})||[]},only:function(r){if(!At(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return Y.Activity=H,Y.Children=se,Y.Component=Fe,Y.Fragment=R,Y.Profiler=w,Y.PureComponent=je,Y.StrictMode=d,Y.Suspense=O,Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,Y.__COMPILER_RUNTIME={__proto__:null,c:function(r){return W.H.useMemoCache(r)}},Y.cache=function(r){return function(){return r.apply(null,arguments)}},Y.cacheSignal=function(){return null},Y.cloneElement=function(r,E,D){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var M=Re({},r.props),G=r.key;if(E!=null)for(V in E.key!==void 0&&(G=""+E.key),E)!Ge.call(E,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&E.ref===void 0||(M[V]=E[V]);var V=arguments.length-2;if(V===1)M.children=D;else if(1<V){for(var te=Array(V),Ue=0;Ue<V;Ue++)te[Ue]=arguments[Ue+2];M.children=te}return Et(r.type,G,M)},Y.createContext=function(r){return r={$$typeof:$,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:z,_context:r},r},Y.createElement=function(r,E,D){var M,G={},V=null;if(E!=null)for(M in E.key!==void 0&&(V=""+E.key),E)Ge.call(E,M)&&M!=="key"&&M!=="__self"&&M!=="__source"&&(G[M]=E[M]);var te=arguments.length-2;if(te===1)G.children=D;else if(1<te){for(var Ue=Array(te),ge=0;ge<te;ge++)Ue[ge]=arguments[ge+2];G.children=Ue}if(r&&r.defaultProps)for(M in te=r.defaultProps,te)G[M]===void 0&&(G[M]=te[M]);return Et(r,V,G)},Y.createRef=function(){return{current:null}},Y.forwardRef=function(r){return{$$typeof:re,render:r}},Y.isValidElement=At,Y.lazy=function(r){return{$$typeof:L,_payload:{_status:-1,_result:r},_init:q}},Y.memo=function(r,E){return{$$typeof:A,type:r,compare:E===void 0?null:E}},Y.startTransition=function(r){var E=W.T,D={};W.T=D;try{var M=r(),G=W.S;G!==null&&G(D,M),typeof M=="object"&&M!==null&&typeof M.then=="function"&&M.then(Ye,ue)}catch(V){ue(V)}finally{E!==null&&D.types!==null&&(E.types=D.types),W.T=E}},Y.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},Y.use=function(r){return W.H.use(r)},Y.useActionState=function(r,E,D){return W.H.useActionState(r,E,D)},Y.useCallback=function(r,E){return W.H.useCallback(r,E)},Y.useContext=function(r){return W.H.useContext(r)},Y.useDebugValue=function(){},Y.useDeferredValue=function(r,E){return W.H.useDeferredValue(r,E)},Y.useEffect=function(r,E){return W.H.useEffect(r,E)},Y.useEffectEvent=function(r){return W.H.useEffectEvent(r)},Y.useId=function(){return W.H.useId()},Y.useImperativeHandle=function(r,E,D){return W.H.useImperativeHandle(r,E,D)},Y.useInsertionEffect=function(r,E){return W.H.useInsertionEffect(r,E)},Y.useLayoutEffect=function(r,E){return W.H.useLayoutEffect(r,E)},Y.useMemo=function(r,E){return W.H.useMemo(r,E)},Y.useOptimistic=function(r,E){return W.H.useOptimistic(r,E)},Y.useReducer=function(r,E,D){return W.H.useReducer(r,E,D)},Y.useRef=function(r){return W.H.useRef(r)},Y.useState=function(r){return W.H.useState(r)},Y.useSyncExternalStore=function(r,E,D){return W.H.useSyncExternalStore(r,E,D)},Y.useTransition=function(){return W.H.useTransition()},Y.version="19.2.0",Y}var xd;function hf(){return xd||(xd=1,ff.exports=iy()),ff.exports}var Mt=hf();const mf=Cd(Mt);var sf={exports:{}},En={},of={exports:{}},rf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sd;function cy(){return Sd||(Sd=1,(function(p){function C(x,N){var q=x.length;x.push(N);e:for(;0<q;){var ue=q-1>>>1,se=x[ue];if(0<w(se,N))x[ue]=N,x[q]=se,q=ue;else break e}}function R(x){return x.length===0?null:x[0]}function d(x){if(x.length===0)return null;var N=x[0],q=x.pop();if(q!==N){x[0]=q;e:for(var ue=0,se=x.length,r=se>>>1;ue<r;){var E=2*(ue+1)-1,D=x[E],M=E+1,G=x[M];if(0>w(D,q))M<se&&0>w(G,D)?(x[ue]=G,x[M]=q,ue=M):(x[ue]=D,x[E]=q,ue=E);else if(M<se&&0>w(G,q))x[ue]=G,x[M]=q,ue=M;else break e}}return N}function w(x,N){var q=x.sortIndex-N.sortIndex;return q!==0?q:x.id-N.id}if(p.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var z=performance;p.unstable_now=function(){return z.now()}}else{var $=Date,re=$.now();p.unstable_now=function(){return $.now()-re}}var O=[],A=[],L=1,H=null,ne=3,We=!1,qe=!1,Re=!1,Ct=!1,Fe=typeof setTimeout=="function"?setTimeout:null,Ft=typeof clearTimeout=="function"?clearTimeout:null,je=typeof setImmediate<"u"?setImmediate:null;function ct(x){for(var N=R(A);N!==null;){if(N.callback===null)d(A);else if(N.startTime<=x)d(A),N.sortIndex=N.expirationTime,C(O,N);else break;N=R(A)}}function Tt(x){if(Re=!1,ct(x),!qe)if(R(O)!==null)qe=!0,Ye||(Ye=!0,Xe());else{var N=R(A);N!==null&&pt(Tt,N.startTime-x)}}var Ye=!1,W=-1,Ge=5,Et=-1;function Ql(){return Ct?!0:!(p.unstable_now()-Et<Ge)}function At(){if(Ct=!1,Ye){var x=p.unstable_now();Et=x;var N=!0;try{e:{qe=!1,Re&&(Re=!1,Ft(W),W=-1),We=!0;var q=ne;try{t:{for(ct(x),H=R(O);H!==null&&!(H.expirationTime>x&&Ql());){var ue=H.callback;if(typeof ue=="function"){H.callback=null,ne=H.priorityLevel;var se=ue(H.expirationTime<=x);if(x=p.unstable_now(),typeof se=="function"){H.callback=se,ct(x),N=!0;break t}H===R(O)&&d(O),ct(x)}else d(O);H=R(O)}if(H!==null)N=!0;else{var r=R(A);r!==null&&pt(Tt,r.startTime-x),N=!1}}break e}finally{H=null,ne=q,We=!1}N=void 0}}finally{N?Xe():Ye=!1}}}var Xe;if(typeof je=="function")Xe=function(){je(At)};else if(typeof MessageChannel<"u"){var Tl=new MessageChannel,wt=Tl.port2;Tl.port1.onmessage=At,Xe=function(){wt.postMessage(null)}}else Xe=function(){Fe(At,0)};function pt(x,N){W=Fe(function(){x(p.unstable_now())},N)}p.unstable_IdlePriority=5,p.unstable_ImmediatePriority=1,p.unstable_LowPriority=4,p.unstable_NormalPriority=3,p.unstable_Profiling=null,p.unstable_UserBlockingPriority=2,p.unstable_cancelCallback=function(x){x.callback=null},p.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ge=0<x?Math.floor(1e3/x):5},p.unstable_getCurrentPriorityLevel=function(){return ne},p.unstable_next=function(x){switch(ne){case 1:case 2:case 3:var N=3;break;default:N=ne}var q=ne;ne=N;try{return x()}finally{ne=q}},p.unstable_requestPaint=function(){Ct=!0},p.unstable_runWithPriority=function(x,N){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var q=ne;ne=x;try{return N()}finally{ne=q}},p.unstable_scheduleCallback=function(x,N,q){var ue=p.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ue+q:ue):q=ue,x){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=q+se,x={id:L++,callback:N,priorityLevel:x,startTime:q,expirationTime:se,sortIndex:-1},q>ue?(x.sortIndex=q,C(A,x),R(O)===null&&x===R(A)&&(Re?(Ft(W),W=-1):Re=!0,pt(Tt,q-ue))):(x.sortIndex=se,C(O,x),qe||We||(qe=!0,Ye||(Ye=!0,Xe()))),x},p.unstable_shouldYield=Ql,p.unstable_wrapCallback=function(x){var N=ne;return function(){var q=ne;ne=N;try{return x.apply(this,arguments)}finally{ne=q}}}})(rf)),rf}var Td;function fy(){return Td||(Td=1,of.exports=cy()),of.exports}var df={exports:{}},Oe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;function sy(){if(Ed)return Oe;Ed=1;var p=hf();function C(O){var A="https://react.dev/errors/"+O;if(1<arguments.length){A+="?args[]="+encodeURIComponent(arguments[1]);for(var L=2;L<arguments.length;L++)A+="&args[]="+encodeURIComponent(arguments[L])}return"Minified React error #"+O+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function R(){}var d={d:{f:R,r:function(){throw Error(C(522))},D:R,C:R,L:R,m:R,X:R,S:R,M:R},p:0,findDOMNode:null},w=Symbol.for("react.portal");function z(O,A,L){var H=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:w,key:H==null?null:""+H,children:O,containerInfo:A,implementation:L}}var $=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function re(O,A){if(O==="font")return"";if(typeof A=="string")return A==="use-credentials"?A:""}return Oe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Oe.createPortal=function(O,A){var L=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)throw Error(C(299));return z(O,A,null,L)},Oe.flushSync=function(O){var A=$.T,L=d.p;try{if($.T=null,d.p=2,O)return O()}finally{$.T=A,d.p=L,d.d.f()}},Oe.preconnect=function(O,A){typeof O=="string"&&(A?(A=A.crossOrigin,A=typeof A=="string"?A==="use-credentials"?A:"":void 0):A=null,d.d.C(O,A))},Oe.prefetchDNS=function(O){typeof O=="string"&&d.d.D(O)},Oe.preinit=function(O,A){if(typeof O=="string"&&A&&typeof A.as=="string"){var L=A.as,H=re(L,A.crossOrigin),ne=typeof A.integrity=="string"?A.integrity:void 0,We=typeof A.fetchPriority=="string"?A.fetchPriority:void 0;L==="style"?d.d.S(O,typeof A.precedence=="string"?A.precedence:void 0,{crossOrigin:H,integrity:ne,fetchPriority:We}):L==="script"&&d.d.X(O,{crossOrigin:H,integrity:ne,fetchPriority:We,nonce:typeof A.nonce=="string"?A.nonce:void 0})}},Oe.preinitModule=function(O,A){if(typeof O=="string")if(typeof A=="object"&&A!==null){if(A.as==null||A.as==="script"){var L=re(A.as,A.crossOrigin);d.d.M(O,{crossOrigin:L,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0})}}else A==null&&d.d.M(O)},Oe.preload=function(O,A){if(typeof O=="string"&&typeof A=="object"&&A!==null&&typeof A.as=="string"){var L=A.as,H=re(L,A.crossOrigin);d.d.L(O,L,{crossOrigin:H,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0,type:typeof A.type=="string"?A.type:void 0,fetchPriority:typeof A.fetchPriority=="string"?A.fetchPriority:void 0,referrerPolicy:typeof A.referrerPolicy=="string"?A.referrerPolicy:void 0,imageSrcSet:typeof A.imageSrcSet=="string"?A.imageSrcSet:void 0,imageSizes:typeof A.imageSizes=="string"?A.imageSizes:void 0,media:typeof A.media=="string"?A.media:void 0})}},Oe.preloadModule=function(O,A){if(typeof O=="string")if(A){var L=re(A.as,A.crossOrigin);d.d.m(O,{as:typeof A.as=="string"&&A.as!=="script"?A.as:void 0,crossOrigin:L,integrity:typeof A.integrity=="string"?A.integrity:void 0})}else d.d.m(O)},Oe.requestFormReset=function(O){d.d.r(O)},Oe.unstable_batchedUpdates=function(O,A){return O(A)},Oe.useFormState=function(O,A,L){return $.H.useFormState(O,A,L)},Oe.useFormStatus=function(){return $.H.useHostTransitionStatus()},Oe.version="19.2.0",Oe}var Ad;function oy(){if(Ad)return df.exports;Ad=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(C){console.error(C)}}return p(),df.exports=sy(),df.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function ry(){if(zd)return En;zd=1;var p=fy(),C=hf(),R=oy();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)t+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function w(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function z(e){var t=e,l=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(l=t.return),e=t.return;while(e)}return t.tag===3?l:null}function $(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function re(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function O(e){if(z(e)!==e)throw Error(d(188))}function A(e){var t=e.alternate;if(!t){if(t=z(e),t===null)throw Error(d(188));return t!==e?null:e}for(var l=e,a=t;;){var n=l.return;if(n===null)break;var u=n.alternate;if(u===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===l)return O(n),e;if(u===a)return O(n),t;u=u.sibling}throw Error(d(188))}if(l.return!==a.return)l=n,a=u;else{for(var i=!1,c=n.child;c;){if(c===l){i=!0,l=n,a=u;break}if(c===a){i=!0,a=n,l=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===l){i=!0,l=u,a=n;break}if(c===a){i=!0,a=u,l=n;break}c=c.sibling}if(!i)throw Error(d(189))}}if(l.alternate!==a)throw Error(d(190))}if(l.tag!==3)throw Error(d(188));return l.stateNode.current===l?e:t}function L(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=L(e),t!==null)return t;e=e.sibling}return null}var H=Object.assign,ne=Symbol.for("react.element"),We=Symbol.for("react.transitional.element"),qe=Symbol.for("react.portal"),Re=Symbol.for("react.fragment"),Ct=Symbol.for("react.strict_mode"),Fe=Symbol.for("react.profiler"),Ft=Symbol.for("react.consumer"),je=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),Tt=Symbol.for("react.suspense"),Ye=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),Ql=Symbol.for("react.memo_cache_sentinel"),At=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=At&&e[At]||e["@@iterator"],typeof e=="function"?e:null)}var Tl=Symbol.for("react.client.reference");function wt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Tl?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Re:return"Fragment";case Fe:return"Profiler";case Ct:return"StrictMode";case Tt:return"Suspense";case Ye:return"SuspenseList";case Et:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case qe:return"Portal";case je:return e.displayName||"Context";case Ft:return(e._context.displayName||"Context")+".Consumer";case ct:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:wt(e.type)||"Memo";case Ge:t=e._payload,e=e._init;try{return wt(e(t))}catch{}}return null}var pt=Array.isArray,x=C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=R.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ue=[],se=-1;function r(e){return{current:e}}function E(e){0>se||(e.current=ue[se],ue[se]=null,se--)}function D(e,t){se++,ue[se]=e.current,e.current=t}var M=r(null),G=r(null),V=r(null),te=r(null);function Ue(e,t){switch(D(V,t),D(G,e),D(M,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Gr(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Gr(t),e=Xr(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}E(M),D(M,e)}function ge(){E(M),E(G),E(V)}function _a(e){e.memoizedState!==null&&D(te,e);var t=M.current,l=Xr(t,e.type);t!==l&&(D(G,e),D(M,l))}function An(e){G.current===e&&(E(M),E(G)),te.current===e&&(E(te),pn._currentValue=q)}var Qu,yf;function El(e){if(Qu===void 0)try{throw Error()}catch(l){var t=l.stack.trim().match(/\n( *(at )?)/);Qu=t&&t[1]||"",yf=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qu+e+yf}var Lu=!1;function Vu(e,t){if(!e||Lu)return"";Lu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(g){var v=g}Reflect.construct(e,[],T)}else{try{T.call()}catch(g){v=g}e.call(T.prototype)}}else{try{throw Error()}catch(g){v=g}(T=e())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(g){if(g&&v&&typeof g.stack=="string")return[g.stack,v.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var f=i.split(`
`),y=c.split(`
`);for(n=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;n<y.length&&!y[n].includes("DetermineComponentFrameRoot");)n++;if(a===f.length||n===y.length)for(a=f.length-1,n=y.length-1;1<=a&&0<=n&&f[a]!==y[n];)n--;for(;1<=a&&0<=n;a--,n--)if(f[a]!==y[n]){if(a!==1||n!==1)do if(a--,n--,0>n||f[a]!==y[n]){var b=`
`+f[a].replace(" at new "," at ");return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),b}while(1<=a&&0<=n);break}}}finally{Lu=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?El(l):""}function Ud(e,t){switch(e.tag){case 26:case 27:case 5:return El(e.type);case 16:return El("Lazy");case 13:return e.child!==t&&t!==null?El("Suspense Fallback"):El("Suspense");case 19:return El("SuspenseList");case 0:case 15:return Vu(e.type,!1);case 11:return Vu(e.type.render,!1);case 1:return Vu(e.type,!0);case 31:return El("Activity");default:return""}}function vf(e){try{var t="",l=null;do t+=Ud(e,l),l=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Zu=Object.prototype.hasOwnProperty,ku=p.unstable_scheduleCallback,Ku=p.unstable_cancelCallback,Hd=p.unstable_shouldYield,Bd=p.unstable_requestPaint,$e=p.unstable_now,qd=p.unstable_getCurrentPriorityLevel,gf=p.unstable_ImmediatePriority,pf=p.unstable_UserBlockingPriority,zn=p.unstable_NormalPriority,Yd=p.unstable_LowPriority,bf=p.unstable_IdlePriority,Gd=p.log,Xd=p.unstable_setDisableYieldValue,Ma=null,Ie=null;function $t(e){if(typeof Gd=="function"&&Xd(e),Ie&&typeof Ie.setStrictMode=="function")try{Ie.setStrictMode(Ma,e)}catch{}}var Pe=Math.clz32?Math.clz32:Vd,Qd=Math.log,Ld=Math.LN2;function Vd(e){return e>>>=0,e===0?32:31-(Qd(e)/Ld|0)|0}var Nn=256,Dn=262144,_n=4194304;function Al(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mn(e,t,l){var a=e.pendingLanes;if(a===0)return 0;var n=0,u=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~u,a!==0?n=Al(a):(i&=c,i!==0?n=Al(i):l||(l=c&~e,l!==0&&(n=Al(l))))):(c=a&~u,c!==0?n=Al(c):i!==0?n=Al(i):l||(l=a&~e,l!==0&&(n=Al(l)))),n===0?0:t!==0&&t!==n&&(t&u)===0&&(u=n&-n,l=t&-t,u>=l||u===32&&(l&4194048)!==0)?t:n}function Ca(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Zd(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xf(){var e=_n;return _n<<=1,(_n&62914560)===0&&(_n=4194304),e}function Ju(e){for(var t=[],l=0;31>l;l++)t.push(e);return t}function wa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function kd(e,t,l,a,n,u){var i=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var c=e.entanglements,f=e.expirationTimes,y=e.hiddenUpdates;for(l=i&~l;0<l;){var b=31-Pe(l),T=1<<b;c[b]=0,f[b]=-1;var v=y[b];if(v!==null)for(y[b]=null,b=0;b<v.length;b++){var g=v[b];g!==null&&(g.lane&=-536870913)}l&=~T}a!==0&&Sf(e,a,0),u!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=u&~(i&~t))}function Sf(e,t,l){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Pe(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|l&261930}function Tf(e,t){var l=e.entangledLanes|=t;for(e=e.entanglements;l;){var a=31-Pe(l),n=1<<a;n&t|e[a]&t&&(e[a]|=t),l&=~n}}function Ef(e,t){var l=t&-t;return l=(l&42)!==0?1:Wu(l),(l&(e.suspendedLanes|t))!==0?0:l}function Wu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Af(){var e=N.p;return e!==0?e:(e=window.event,e===void 0?32:od(e.type))}function zf(e,t){var l=N.p;try{return N.p=e,t()}finally{N.p=l}}var It=Math.random().toString(36).slice(2),De="__reactFiber$"+It,Qe="__reactProps$"+It,Ll="__reactContainer$"+It,$u="__reactEvents$"+It,Kd="__reactListeners$"+It,Jd="__reactHandles$"+It,Nf="__reactResources$"+It,ja="__reactMarker$"+It;function Iu(e){delete e[De],delete e[Qe],delete e[$u],delete e[Kd],delete e[Jd]}function Vl(e){var t=e[De];if(t)return t;for(var l=e.parentNode;l;){if(t=l[Ll]||l[De]){if(l=t.alternate,t.child!==null||l!==null&&l.child!==null)for(e=Jr(e);e!==null;){if(l=e[De])return l;e=Jr(e)}return t}e=l,l=e.parentNode}return null}function Zl(e){if(e=e[De]||e[Ll]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Oa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function kl(e){var t=e[Nf];return t||(t=e[Nf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ze(e){e[ja]=!0}var Df=new Set,_f={};function zl(e,t){Kl(e,t),Kl(e+"Capture",t)}function Kl(e,t){for(_f[e]=t,e=0;e<t.length;e++)Df.add(t[e])}var Wd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mf={},Cf={};function Fd(e){return Zu.call(Cf,e)?!0:Zu.call(Mf,e)?!1:Wd.test(e)?Cf[e]=!0:(Mf[e]=!0,!1)}function Cn(e,t,l){if(Fd(t))if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+l)}}function wn(e,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+l)}}function jt(e,t,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(t,l,""+a)}}function ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $d(e,t,l){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pu(e){if(!e._valueTracker){var t=wf(e)?"checked":"value";e._valueTracker=$d(e,t,""+e[t])}}function jf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var l=t.getValue(),a="";return e&&(a=wf(e)?e.checked?"true":"false":e.value),e=a,e!==l?(t.setValue(e),!0):!1}function jn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Id=/[\n"\\]/g;function st(e){return e.replace(Id,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ei(e,t,l,a,n,u,i,c){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ft(t)):e.value!==""+ft(t)&&(e.value=""+ft(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?ti(e,i,ft(t)):l!=null?ti(e,i,ft(l)):a!=null&&e.removeAttribute("value"),n==null&&u!=null&&(e.defaultChecked=!!u),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+ft(c):e.removeAttribute("name")}function Of(e,t,l,a,n,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Pu(e);return}l=l!=null?""+ft(l):"",t=t!=null?""+ft(t):l,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i),Pu(e)}function ti(e,t,l){t==="number"&&jn(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function Jl(e,t,l,a){if(e=e.options,t){t={};for(var n=0;n<l.length;n++)t["$"+l[n]]=!0;for(l=0;l<e.length;l++)n=t.hasOwnProperty("$"+e[l].value),e[l].selected!==n&&(e[l].selected=n),n&&a&&(e[l].defaultSelected=!0)}else{for(l=""+ft(l),t=null,n=0;n<e.length;n++){if(e[n].value===l){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Rf(e,t,l){if(t!=null&&(t=""+ft(t),t!==e.value&&(e.value=t),l==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=l!=null?""+ft(l):""}function Uf(e,t,l,a){if(t==null){if(a!=null){if(l!=null)throw Error(d(92));if(pt(a)){if(1<a.length)throw Error(d(93));a=a[0]}l=a}l==null&&(l=""),t=l}l=ft(t),e.defaultValue=l,a=e.textContent,a===l&&a!==""&&a!==null&&(e.value=a),Pu(e)}function Wl(e,t){if(t){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=t;return}}e.textContent=t}var Pd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hf(e,t,l){var a=t.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,l):typeof l!="number"||l===0||Pd.has(t)?t==="float"?e.cssFloat=l:e[t]=(""+l).trim():e[t]=l+"px"}function Bf(e,t,l){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&l[n]!==a&&Hf(e,n,a)}else for(var u in t)t.hasOwnProperty(u)&&Hf(e,u,t[u])}function li(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var em=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function On(e){return tm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ot(){}var ai=null;function ni(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fl=null,$l=null;function qf(e){var t=Zl(e);if(t&&(e=t.stateNode)){var l=e[Qe]||null;e:switch(e=t.stateNode,t.type){case"input":if(ei(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),t=l.name,l.type==="radio"&&t!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+st(""+t)+'"][type="radio"]'),t=0;t<l.length;t++){var a=l[t];if(a!==e&&a.form===e.form){var n=a[Qe]||null;if(!n)throw Error(d(90));ei(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<l.length;t++)a=l[t],a.form===e.form&&jf(a)}break e;case"textarea":Rf(e,l.value,l.defaultValue);break e;case"select":t=l.value,t!=null&&Jl(e,!!l.multiple,t,!1)}}}var ui=!1;function Yf(e,t,l){if(ui)return e(t,l);ui=!0;try{var a=e(t);return a}finally{if(ui=!1,(Fl!==null||$l!==null)&&(xu(),Fl&&(t=Fl,e=$l,$l=Fl=null,qf(t),e)))for(t=0;t<e.length;t++)qf(e[t])}}function Ra(e,t){var l=e.stateNode;if(l===null)return null;var a=l[Qe]||null;if(a===null)return null;l=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(d(231,t,typeof l));return l}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ii=!1;if(Rt)try{var Ua={};Object.defineProperty(Ua,"passive",{get:function(){ii=!0}}),window.addEventListener("test",Ua,Ua),window.removeEventListener("test",Ua,Ua)}catch{ii=!1}var Pt=null,ci=null,Rn=null;function Gf(){if(Rn)return Rn;var e,t=ci,l=t.length,a,n="value"in Pt?Pt.value:Pt.textContent,u=n.length;for(e=0;e<l&&t[e]===n[e];e++);var i=l-e;for(a=1;a<=i&&t[l-a]===n[u-a];a++);return Rn=n.slice(e,1<a?1-a:void 0)}function Un(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hn(){return!0}function Xf(){return!1}function Le(e){function t(l,a,n,u,i){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(l=e[c],this[c]=l?l(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Hn:Xf,this.isPropagationStopped=Xf,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),t}var Nl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bn=Le(Nl),Ha=H({},Nl,{view:0,detail:0}),lm=Le(Ha),fi,si,Ba,qn=H({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ri,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ba&&(Ba&&e.type==="mousemove"?(fi=e.screenX-Ba.screenX,si=e.screenY-Ba.screenY):si=fi=0,Ba=e),fi)},movementY:function(e){return"movementY"in e?e.movementY:si}}),Qf=Le(qn),am=H({},qn,{dataTransfer:0}),nm=Le(am),um=H({},Ha,{relatedTarget:0}),oi=Le(um),im=H({},Nl,{animationName:0,elapsedTime:0,pseudoElement:0}),cm=Le(im),fm=H({},Nl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sm=Le(fm),om=H({},Nl,{data:0}),Lf=Le(om),rm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mm[e])?!!t[e]:!1}function ri(){return hm}var ym=H({},Ha,{key:function(e){if(e.key){var t=rm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Un(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ri,charCode:function(e){return e.type==="keypress"?Un(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Un(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vm=Le(ym),gm=H({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=Le(gm),pm=H({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ri}),bm=Le(pm),xm=H({},Nl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sm=Le(xm),Tm=H({},qn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Em=Le(Tm),Am=H({},Nl,{newState:0,oldState:0}),zm=Le(Am),Nm=[9,13,27,32],di=Rt&&"CompositionEvent"in window,qa=null;Rt&&"documentMode"in document&&(qa=document.documentMode);var Dm=Rt&&"TextEvent"in window&&!qa,Zf=Rt&&(!di||qa&&8<qa&&11>=qa),kf=" ",Kf=!1;function Jf(e,t){switch(e){case"keyup":return Nm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Il=!1;function _m(e,t){switch(e){case"compositionend":return Wf(t);case"keypress":return t.which!==32?null:(Kf=!0,kf);case"textInput":return e=t.data,e===kf&&Kf?null:e;default:return null}}function Mm(e,t){if(Il)return e==="compositionend"||!di&&Jf(e,t)?(e=Gf(),Rn=ci=Pt=null,Il=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zf&&t.locale!=="ko"?null:t.data;default:return null}}var Cm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cm[e.type]:t==="textarea"}function $f(e,t,l,a){Fl?$l?$l.push(a):$l=[a]:Fl=a,t=Du(t,"onChange"),0<t.length&&(l=new Bn("onChange","change",null,l,a),e.push({event:l,listeners:t}))}var Ya=null,Ga=null;function wm(e){Rr(e,0)}function Yn(e){var t=Oa(e);if(jf(t))return e}function If(e,t){if(e==="change")return t}var Pf=!1;if(Rt){var mi;if(Rt){var hi="oninput"in document;if(!hi){var es=document.createElement("div");es.setAttribute("oninput","return;"),hi=typeof es.oninput=="function"}mi=hi}else mi=!1;Pf=mi&&(!document.documentMode||9<document.documentMode)}function ts(){Ya&&(Ya.detachEvent("onpropertychange",ls),Ga=Ya=null)}function ls(e){if(e.propertyName==="value"&&Yn(Ga)){var t=[];$f(t,Ga,e,ni(e)),Yf(wm,t)}}function jm(e,t,l){e==="focusin"?(ts(),Ya=t,Ga=l,Ya.attachEvent("onpropertychange",ls)):e==="focusout"&&ts()}function Om(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yn(Ga)}function Rm(e,t){if(e==="click")return Yn(t)}function Um(e,t){if(e==="input"||e==="change")return Yn(t)}function Hm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:Hm;function Xa(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var l=Object.keys(e),a=Object.keys(t);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Zu.call(t,n)||!et(e[n],t[n]))return!1}return!0}function as(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ns(e,t){var l=as(e);e=0;for(var a;l;){if(l.nodeType===3){if(a=e+l.textContent.length,e<=t&&a>=t)return{node:l,offset:t-e};e=a}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=as(l)}}function us(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?us(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function is(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=jn(e.document);t instanceof e.HTMLIFrameElement;){try{var l=typeof t.contentWindow.location.href=="string"}catch{l=!1}if(l)e=t.contentWindow;else break;t=jn(e.document)}return t}function yi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Bm=Rt&&"documentMode"in document&&11>=document.documentMode,Pl=null,vi=null,Qa=null,gi=!1;function cs(e,t,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;gi||Pl==null||Pl!==jn(a)||(a=Pl,"selectionStart"in a&&yi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Qa&&Xa(Qa,a)||(Qa=a,a=Du(vi,"onSelect"),0<a.length&&(t=new Bn("onSelect","select",null,t,l),e.push({event:t,listeners:a}),t.target=Pl)))}function Dl(e,t){var l={};return l[e.toLowerCase()]=t.toLowerCase(),l["Webkit"+e]="webkit"+t,l["Moz"+e]="moz"+t,l}var ea={animationend:Dl("Animation","AnimationEnd"),animationiteration:Dl("Animation","AnimationIteration"),animationstart:Dl("Animation","AnimationStart"),transitionrun:Dl("Transition","TransitionRun"),transitionstart:Dl("Transition","TransitionStart"),transitioncancel:Dl("Transition","TransitionCancel"),transitionend:Dl("Transition","TransitionEnd")},pi={},fs={};Rt&&(fs=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function _l(e){if(pi[e])return pi[e];if(!ea[e])return e;var t=ea[e],l;for(l in t)if(t.hasOwnProperty(l)&&l in fs)return pi[e]=t[l];return e}var ss=_l("animationend"),os=_l("animationiteration"),rs=_l("animationstart"),qm=_l("transitionrun"),Ym=_l("transitionstart"),Gm=_l("transitioncancel"),ds=_l("transitionend"),ms=new Map,bi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bi.push("scrollEnd");function bt(e,t){ms.set(e,t),zl(t,[e])}var Gn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ot=[],ta=0,xi=0;function Xn(){for(var e=ta,t=xi=ta=0;t<e;){var l=ot[t];ot[t++]=null;var a=ot[t];ot[t++]=null;var n=ot[t];ot[t++]=null;var u=ot[t];if(ot[t++]=null,a!==null&&n!==null){var i=a.pending;i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n}u!==0&&hs(l,n,u)}}function Qn(e,t,l,a){ot[ta++]=e,ot[ta++]=t,ot[ta++]=l,ot[ta++]=a,xi|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Si(e,t,l,a){return Qn(e,t,l,a),Ln(e)}function Ml(e,t){return Qn(e,null,null,t),Ln(e)}function hs(e,t,l){e.lanes|=l;var a=e.alternate;a!==null&&(a.lanes|=l);for(var n=!1,u=e.return;u!==null;)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(n=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,n&&t!==null&&(n=31-Pe(l),e=u.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=l|536870912),u):null}function Ln(e){if(50<rn)throw rn=0,Cc=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var la={};function Xm(e,t,l,a){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,l,a){return new Xm(e,t,l,a)}function Ti(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ut(e,t){var l=e.alternate;return l===null?(l=tt(e.tag,t,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=t,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function ys(e,t){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vn(e,t,l,a,n,u){var i=0;if(a=e,typeof e=="function")Ti(e)&&(i=1);else if(typeof e=="string")i=kh(e,l,M.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Et:return e=tt(31,l,t,n),e.elementType=Et,e.lanes=u,e;case Re:return Cl(l.children,n,u,t);case Ct:i=8,n|=24;break;case Fe:return e=tt(12,l,t,n|2),e.elementType=Fe,e.lanes=u,e;case Tt:return e=tt(13,l,t,n),e.elementType=Tt,e.lanes=u,e;case Ye:return e=tt(19,l,t,n),e.elementType=Ye,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case je:i=10;break e;case Ft:i=9;break e;case ct:i=11;break e;case W:i=14;break e;case Ge:i=16,a=null;break e}i=29,l=Error(d(130,e===null?"null":typeof e,"")),a=null}return t=tt(i,l,t,n),t.elementType=e,t.type=a,t.lanes=u,t}function Cl(e,t,l,a){return e=tt(7,e,a,t),e.lanes=l,e}function Ei(e,t,l){return e=tt(6,e,null,t),e.lanes=l,e}function vs(e){var t=tt(18,null,null,0);return t.stateNode=e,t}function Ai(e,t,l){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=l,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gs=new WeakMap;function rt(e,t){if(typeof e=="object"&&e!==null){var l=gs.get(e);return l!==void 0?l:(t={value:e,source:t,stack:vf(t)},gs.set(e,t),t)}return{value:e,source:t,stack:vf(t)}}var aa=[],na=0,Zn=null,La=0,dt=[],mt=0,el=null,zt=1,Nt="";function Ht(e,t){aa[na++]=La,aa[na++]=Zn,Zn=e,La=t}function ps(e,t,l){dt[mt++]=zt,dt[mt++]=Nt,dt[mt++]=el,el=e;var a=zt;e=Nt;var n=32-Pe(a)-1;a&=~(1<<n),l+=1;var u=32-Pe(t)+n;if(30<u){var i=n-n%5;u=(a&(1<<i)-1).toString(32),a>>=i,n-=i,zt=1<<32-Pe(t)+n|l<<n|a,Nt=u+e}else zt=1<<u|l<<n|a,Nt=e}function zi(e){e.return!==null&&(Ht(e,1),ps(e,1,0))}function Ni(e){for(;e===Zn;)Zn=aa[--na],aa[na]=null,La=aa[--na],aa[na]=null;for(;e===el;)el=dt[--mt],dt[mt]=null,Nt=dt[--mt],dt[mt]=null,zt=dt[--mt],dt[mt]=null}function bs(e,t){dt[mt++]=zt,dt[mt++]=Nt,dt[mt++]=el,zt=t.id,Nt=t.overflow,el=e}var _e=null,de=null,F=!1,tl=null,ht=!1,Di=Error(d(519));function ll(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Va(rt(t,e)),Di}function xs(e){var t=e.stateNode,l=e.type,a=e.memoizedProps;switch(t[De]=e,t[Qe]=a,l){case"dialog":k("cancel",t),k("close",t);break;case"iframe":case"object":case"embed":k("load",t);break;case"video":case"audio":for(l=0;l<mn.length;l++)k(mn[l],t);break;case"source":k("error",t);break;case"img":case"image":case"link":k("error",t),k("load",t);break;case"details":k("toggle",t);break;case"input":k("invalid",t),Of(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":k("invalid",t);break;case"textarea":k("invalid",t),Uf(t,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||t.textContent===""+l||a.suppressHydrationWarning===!0||qr(t.textContent,l)?(a.popover!=null&&(k("beforetoggle",t),k("toggle",t)),a.onScroll!=null&&k("scroll",t),a.onScrollEnd!=null&&k("scrollend",t),a.onClick!=null&&(t.onclick=Ot),t=!0):t=!1,t||ll(e,!0)}function Ss(e){for(_e=e.return;_e;)switch(_e.tag){case 5:case 31:case 13:ht=!1;return;case 27:case 3:ht=!0;return;default:_e=_e.return}}function ua(e){if(e!==_e)return!1;if(!F)return Ss(e),F=!0,!1;var t=e.tag,l;if((l=t!==3&&t!==27)&&((l=t===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||Zc(e.type,e.memoizedProps)),l=!l),l&&de&&ll(e),Ss(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));de=Kr(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));de=Kr(e)}else t===27?(t=de,vl(e.type)?(e=Fc,Fc=null,de=e):de=t):de=_e?vt(e.stateNode.nextSibling):null;return!0}function wl(){de=_e=null,F=!1}function _i(){var e=tl;return e!==null&&(Ke===null?Ke=e:Ke.push.apply(Ke,e),tl=null),e}function Va(e){tl===null?tl=[e]:tl.push(e)}var Mi=r(null),jl=null,Bt=null;function al(e,t,l){D(Mi,t._currentValue),t._currentValue=l}function qt(e){e._currentValue=Mi.current,E(Mi)}function Ci(e,t,l){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===l)break;e=e.return}}function wi(e,t,l,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;e:for(;u!==null;){var c=u;u=n;for(var f=0;f<t.length;f++)if(c.context===t[f]){u.lanes|=l,c=u.alternate,c!==null&&(c.lanes|=l),Ci(u.return,l,e),a||(i=null);break e}u=c.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(d(341));i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),Ci(i,l,e),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function ia(e,t,l,a){e=null;for(var n=t,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(d(387));if(i=i.memoizedProps,i!==null){var c=n.type;et(n.pendingProps.value,i.value)||(e!==null?e.push(c):e=[c])}}else if(n===te.current){if(i=n.alternate,i===null)throw Error(d(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(pn):e=[pn])}n=n.return}e!==null&&wi(t,e,l,a),t.flags|=262144}function kn(e){for(e=e.firstContext;e!==null;){if(!et(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ol(e){jl=e,Bt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Me(e){return Ts(jl,e)}function Kn(e,t){return jl===null&&Ol(e),Ts(e,t)}function Ts(e,t){var l=t._currentValue;if(t={context:t,memoizedValue:l,next:null},Bt===null){if(e===null)throw Error(d(308));Bt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Bt=Bt.next=t;return l}var Qm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(l,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(l){return l()})}},Lm=p.unstable_scheduleCallback,Vm=p.unstable_NormalPriority,xe={$$typeof:je,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ji(){return{controller:new Qm,data:new Map,refCount:0}}function Za(e){e.refCount--,e.refCount===0&&Lm(Vm,function(){e.controller.abort()})}var ka=null,Oi=0,ca=0,fa=null;function Zm(e,t){if(ka===null){var l=ka=[];Oi=0,ca=Hc(),fa={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Oi++,t.then(Es,Es),t}function Es(){if(--Oi===0&&ka!==null){fa!==null&&(fa.status="fulfilled");var e=ka;ka=null,ca=0,fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function km(e,t){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<l.length;n++)(0,l[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var As=x.S;x.S=function(e,t){fr=$e(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Zm(e,t),As!==null&&As(e,t)};var Rl=r(null);function Ri(){var e=Rl.current;return e!==null?e:oe.pooledCache}function Jn(e,t){t===null?D(Rl,Rl.current):D(Rl,t.pool)}function zs(){var e=Ri();return e===null?null:{parent:xe._currentValue,pool:e}}var sa=Error(d(460)),Ui=Error(d(474)),Wn=Error(d(542)),Fn={then:function(){}};function Ns(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ds(e,t,l){switch(l=e[l],l===void 0?e.push(t):l!==t&&(t.then(Ot,Ot),t=l),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ms(e),e;default:if(typeof t.status=="string")t.then(Ot,Ot);else{if(e=oe,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ms(e),e}throw Hl=t,sa}}function Ul(e){try{var t=e._init;return t(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Hl=l,sa):l}}var Hl=null;function _s(){if(Hl===null)throw Error(d(459));var e=Hl;return Hl=null,e}function Ms(e){if(e===sa||e===Wn)throw Error(d(483))}var oa=null,Ka=0;function $n(e){var t=Ka;return Ka+=1,oa===null&&(oa=[]),Ds(oa,e,t)}function Ja(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function In(e,t){throw t.$$typeof===ne?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Cs(e){function t(m,o){if(e){var h=m.deletions;h===null?(m.deletions=[o],m.flags|=16):h.push(o)}}function l(m,o){if(!e)return null;for(;o!==null;)t(m,o),o=o.sibling;return null}function a(m){for(var o=new Map;m!==null;)m.key!==null?o.set(m.key,m):o.set(m.index,m),m=m.sibling;return o}function n(m,o){return m=Ut(m,o),m.index=0,m.sibling=null,m}function u(m,o,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<o?(m.flags|=67108866,o):h):(m.flags|=67108866,o)):(m.flags|=1048576,o)}function i(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function c(m,o,h,S){return o===null||o.tag!==6?(o=Ei(h,m.mode,S),o.return=m,o):(o=n(o,h),o.return=m,o)}function f(m,o,h,S){var U=h.type;return U===Re?b(m,o,h.props.children,S,h.key):o!==null&&(o.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ge&&Ul(U)===o.type)?(o=n(o,h.props),Ja(o,h),o.return=m,o):(o=Vn(h.type,h.key,h.props,null,m.mode,S),Ja(o,h),o.return=m,o)}function y(m,o,h,S){return o===null||o.tag!==4||o.stateNode.containerInfo!==h.containerInfo||o.stateNode.implementation!==h.implementation?(o=Ai(h,m.mode,S),o.return=m,o):(o=n(o,h.children||[]),o.return=m,o)}function b(m,o,h,S,U){return o===null||o.tag!==7?(o=Cl(h,m.mode,S,U),o.return=m,o):(o=n(o,h),o.return=m,o)}function T(m,o,h){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Ei(""+o,m.mode,h),o.return=m,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case We:return h=Vn(o.type,o.key,o.props,null,m.mode,h),Ja(h,o),h.return=m,h;case qe:return o=Ai(o,m.mode,h),o.return=m,o;case Ge:return o=Ul(o),T(m,o,h)}if(pt(o)||Xe(o))return o=Cl(o,m.mode,h,null),o.return=m,o;if(typeof o.then=="function")return T(m,$n(o),h);if(o.$$typeof===je)return T(m,Kn(m,o),h);In(m,o)}return null}function v(m,o,h,S){var U=o!==null?o.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return U!==null?null:c(m,o,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case We:return h.key===U?f(m,o,h,S):null;case qe:return h.key===U?y(m,o,h,S):null;case Ge:return h=Ul(h),v(m,o,h,S)}if(pt(h)||Xe(h))return U!==null?null:b(m,o,h,S,null);if(typeof h.then=="function")return v(m,o,$n(h),S);if(h.$$typeof===je)return v(m,o,Kn(m,h),S);In(m,h)}return null}function g(m,o,h,S,U){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return m=m.get(h)||null,c(o,m,""+S,U);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case We:return m=m.get(S.key===null?h:S.key)||null,f(o,m,S,U);case qe:return m=m.get(S.key===null?h:S.key)||null,y(o,m,S,U);case Ge:return S=Ul(S),g(m,o,h,S,U)}if(pt(S)||Xe(S))return m=m.get(h)||null,b(o,m,S,U,null);if(typeof S.then=="function")return g(m,o,h,$n(S),U);if(S.$$typeof===je)return g(m,o,h,Kn(o,S),U);In(o,S)}return null}function _(m,o,h,S){for(var U=null,I=null,j=o,Q=o=0,J=null;j!==null&&Q<h.length;Q++){j.index>Q?(J=j,j=null):J=j.sibling;var P=v(m,j,h[Q],S);if(P===null){j===null&&(j=J);break}e&&j&&P.alternate===null&&t(m,j),o=u(P,o,Q),I===null?U=P:I.sibling=P,I=P,j=J}if(Q===h.length)return l(m,j),F&&Ht(m,Q),U;if(j===null){for(;Q<h.length;Q++)j=T(m,h[Q],S),j!==null&&(o=u(j,o,Q),I===null?U=j:I.sibling=j,I=j);return F&&Ht(m,Q),U}for(j=a(j);Q<h.length;Q++)J=g(j,m,Q,h[Q],S),J!==null&&(e&&J.alternate!==null&&j.delete(J.key===null?Q:J.key),o=u(J,o,Q),I===null?U=J:I.sibling=J,I=J);return e&&j.forEach(function(Sl){return t(m,Sl)}),F&&Ht(m,Q),U}function B(m,o,h,S){if(h==null)throw Error(d(151));for(var U=null,I=null,j=o,Q=o=0,J=null,P=h.next();j!==null&&!P.done;Q++,P=h.next()){j.index>Q?(J=j,j=null):J=j.sibling;var Sl=v(m,j,P.value,S);if(Sl===null){j===null&&(j=J);break}e&&j&&Sl.alternate===null&&t(m,j),o=u(Sl,o,Q),I===null?U=Sl:I.sibling=Sl,I=Sl,j=J}if(P.done)return l(m,j),F&&Ht(m,Q),U;if(j===null){for(;!P.done;Q++,P=h.next())P=T(m,P.value,S),P!==null&&(o=u(P,o,Q),I===null?U=P:I.sibling=P,I=P);return F&&Ht(m,Q),U}for(j=a(j);!P.done;Q++,P=h.next())P=g(j,m,Q,P.value,S),P!==null&&(e&&P.alternate!==null&&j.delete(P.key===null?Q:P.key),o=u(P,o,Q),I===null?U=P:I.sibling=P,I=P);return e&&j.forEach(function(ay){return t(m,ay)}),F&&Ht(m,Q),U}function fe(m,o,h,S){if(typeof h=="object"&&h!==null&&h.type===Re&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case We:e:{for(var U=h.key;o!==null;){if(o.key===U){if(U=h.type,U===Re){if(o.tag===7){l(m,o.sibling),S=n(o,h.props.children),S.return=m,m=S;break e}}else if(o.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ge&&Ul(U)===o.type){l(m,o.sibling),S=n(o,h.props),Ja(S,h),S.return=m,m=S;break e}l(m,o);break}else t(m,o);o=o.sibling}h.type===Re?(S=Cl(h.props.children,m.mode,S,h.key),S.return=m,m=S):(S=Vn(h.type,h.key,h.props,null,m.mode,S),Ja(S,h),S.return=m,m=S)}return i(m);case qe:e:{for(U=h.key;o!==null;){if(o.key===U)if(o.tag===4&&o.stateNode.containerInfo===h.containerInfo&&o.stateNode.implementation===h.implementation){l(m,o.sibling),S=n(o,h.children||[]),S.return=m,m=S;break e}else{l(m,o);break}else t(m,o);o=o.sibling}S=Ai(h,m.mode,S),S.return=m,m=S}return i(m);case Ge:return h=Ul(h),fe(m,o,h,S)}if(pt(h))return _(m,o,h,S);if(Xe(h)){if(U=Xe(h),typeof U!="function")throw Error(d(150));return h=U.call(h),B(m,o,h,S)}if(typeof h.then=="function")return fe(m,o,$n(h),S);if(h.$$typeof===je)return fe(m,o,Kn(m,h),S);In(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,o!==null&&o.tag===6?(l(m,o.sibling),S=n(o,h),S.return=m,m=S):(l(m,o),S=Ei(h,m.mode,S),S.return=m,m=S),i(m)):l(m,o)}return function(m,o,h,S){try{Ka=0;var U=fe(m,o,h,S);return oa=null,U}catch(j){if(j===sa||j===Wn)throw j;var I=tt(29,j,null,m.mode);return I.lanes=S,I.return=m,I}finally{}}}var Bl=Cs(!0),ws=Cs(!1),nl=!1;function Hi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ul(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function il(e,t,l){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ee&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Ln(e),hs(e,null,l),t}return Qn(e,a,t,l),Ln(e)}function Wa(e,t,l){if(t=t.updateQueue,t!==null&&(t=t.shared,(l&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Tf(e,l)}}function qi(e,t){var l=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,l=l.next}while(l!==null);u===null?n=u=t:u=u.next=t}else n=u=t;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=t:e.next=t,l.lastBaseUpdate=t}var Yi=!1;function Fa(){if(Yi){var e=fa;if(e!==null)throw e}}function $a(e,t,l,a){Yi=!1;var n=e.updateQueue;nl=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var f=c,y=f.next;f.next=null,i===null?u=y:i.next=y,i=f;var b=e.alternate;b!==null&&(b=b.updateQueue,c=b.lastBaseUpdate,c!==i&&(c===null?b.firstBaseUpdate=y:c.next=y,b.lastBaseUpdate=f))}if(u!==null){var T=n.baseState;i=0,b=y=f=null,c=u;do{var v=c.lane&-536870913,g=v!==c.lane;if(g?(K&v)===v:(a&v)===v){v!==0&&v===ca&&(Yi=!0),b!==null&&(b=b.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var _=e,B=c;v=t;var fe=l;switch(B.tag){case 1:if(_=B.payload,typeof _=="function"){T=_.call(fe,T,v);break e}T=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=B.payload,v=typeof _=="function"?_.call(fe,T,v):_,v==null)break e;T=H({},T,v);break e;case 2:nl=!0}}v=c.callback,v!==null&&(e.flags|=64,g&&(e.flags|=8192),g=n.callbacks,g===null?n.callbacks=[v]:g.push(v))}else g={lane:v,tag:c.tag,payload:c.payload,callback:c.callback,next:null},b===null?(y=b=g,f=T):b=b.next=g,i|=v;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;g=c,c=g.next,g.next=null,n.lastBaseUpdate=g,n.shared.pending=null}}while(!0);b===null&&(f=T),n.baseState=f,n.firstBaseUpdate=y,n.lastBaseUpdate=b,u===null&&(n.shared.lanes=0),rl|=i,e.lanes=i,e.memoizedState=T}}function js(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function Os(e,t){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)js(l[e],t)}var ra=r(null),Pn=r(0);function Rs(e,t){e=Kt,D(Pn,e),D(ra,t),Kt=e|t.baseLanes}function Gi(){D(Pn,Kt),D(ra,ra.current)}function Xi(){Kt=Pn.current,E(ra),E(Pn)}var lt=r(null),yt=null;function cl(e){var t=e.alternate;D(pe,pe.current&1),D(lt,e),yt===null&&(t===null||ra.current!==null||t.memoizedState!==null)&&(yt=e)}function Qi(e){D(pe,pe.current),D(lt,e),yt===null&&(yt=e)}function Us(e){e.tag===22?(D(pe,pe.current),D(lt,e),yt===null&&(yt=e)):fl()}function fl(){D(pe,pe.current),D(lt,lt.current)}function at(e){E(lt),yt===e&&(yt=null),E(pe)}var pe=r(0);function eu(e){for(var t=e;t!==null;){if(t.tag===13){var l=t.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||Jc(l)||Wc(l)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yt=0,X=null,ie=null,Se=null,tu=!1,da=!1,ql=!1,lu=0,Ia=0,ma=null,Km=0;function ye(){throw Error(d(321))}function Li(e,t){if(t===null)return!1;for(var l=0;l<t.length&&l<e.length;l++)if(!et(e[l],t[l]))return!1;return!0}function Vi(e,t,l,a,n,u){return Yt=u,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,x.H=e===null||e.memoizedState===null?bo:uc,ql=!1,u=l(a,n),ql=!1,da&&(u=Bs(t,l,a,n)),Hs(e),u}function Hs(e){x.H=tn;var t=ie!==null&&ie.next!==null;if(Yt=0,Se=ie=X=null,tu=!1,Ia=0,ma=null,t)throw Error(d(300));e===null||Te||(e=e.dependencies,e!==null&&kn(e)&&(Te=!0))}function Bs(e,t,l,a){X=e;var n=0;do{if(da&&(ma=null),Ia=0,da=!1,25<=n)throw Error(d(301));if(n+=1,Se=ie=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}x.H=xo,u=t(l,a)}while(da);return u}function Jm(){var e=x.H,t=e.useState()[0];return t=typeof t.then=="function"?Pa(t):t,e=e.useState()[0],(ie!==null?ie.memoizedState:null)!==e&&(X.flags|=1024),t}function Zi(){var e=lu!==0;return lu=0,e}function ki(e,t,l){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l}function Ki(e){if(tu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}tu=!1}Yt=0,Se=ie=X=null,da=!1,Ia=lu=0,ma=null}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?X.memoizedState=Se=e:Se=Se.next=e,Se}function be(){if(ie===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=Se===null?X.memoizedState:Se.next;if(t!==null)Se=t,ie=e;else{if(e===null)throw X.alternate===null?Error(d(467)):Error(d(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},Se===null?X.memoizedState=Se=e:Se=Se.next=e}return Se}function au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pa(e){var t=Ia;return Ia+=1,ma===null&&(ma=[]),e=Ds(ma,e,t),t=X,(Se===null?t.memoizedState:Se.next)===null&&(t=t.alternate,x.H=t===null||t.memoizedState===null?bo:uc),e}function nu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pa(e);if(e.$$typeof===je)return Me(e)}throw Error(d(438,String(e)))}function Ji(e){var t=null,l=X.updateQueue;if(l!==null&&(t=l.memoCache),t==null){var a=X.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),l===null&&(l=au(),X.updateQueue=l),l.memoCache=t,l=t.data[t.index],l===void 0)for(l=t.data[t.index]=Array(e),a=0;a<e;a++)l[a]=Ql;return t.index++,l}function Gt(e,t){return typeof t=="function"?t(e):t}function uu(e){var t=be();return Wi(t,ie,e)}function Wi(e,t,l){var a=e.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=l;var n=e.baseQueue,u=a.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}t.baseQueue=n=u,a.pending=null}if(u=e.baseState,n===null)e.memoizedState=u;else{t=n.next;var c=i=null,f=null,y=t,b=!1;do{var T=y.lane&-536870913;if(T!==y.lane?(K&T)===T:(Yt&T)===T){var v=y.revertLane;if(v===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),T===ca&&(b=!0);else if((Yt&v)===v){y=y.next,v===ca&&(b=!0);continue}else T={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},f===null?(c=f=T,i=u):f=f.next=T,X.lanes|=v,rl|=v;T=y.action,ql&&l(u,T),u=y.hasEagerState?y.eagerState:l(u,T)}else v={lane:T,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},f===null?(c=f=v,i=u):f=f.next=v,X.lanes|=T,rl|=T;y=y.next}while(y!==null&&y!==t);if(f===null?i=u:f.next=c,!et(u,e.memoizedState)&&(Te=!0,b&&(l=fa,l!==null)))throw l;e.memoizedState=u,e.baseState=i,e.baseQueue=f,a.lastRenderedState=u}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Fi(e){var t=be(),l=t.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=e;var a=l.dispatch,n=l.pending,u=t.memoizedState;if(n!==null){l.pending=null;var i=n=n.next;do u=e(u,i.action),i=i.next;while(i!==n);et(u,t.memoizedState)||(Te=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),l.lastRenderedState=u}return[u,a]}function qs(e,t,l){var a=X,n=be(),u=F;if(u){if(l===void 0)throw Error(d(407));l=l()}else l=t();var i=!et((ie||n).memoizedState,l);if(i&&(n.memoizedState=l,Te=!0),n=n.queue,Pi(Xs.bind(null,a,n,e),[e]),n.getSnapshot!==t||i||Se!==null&&Se.memoizedState.tag&1){if(a.flags|=2048,ha(9,{destroy:void 0},Gs.bind(null,a,n,l,t),null),oe===null)throw Error(d(349));u||(Yt&127)!==0||Ys(a,t,l)}return l}function Ys(e,t,l){e.flags|=16384,e={getSnapshot:t,value:l},t=X.updateQueue,t===null?(t=au(),X.updateQueue=t,t.stores=[e]):(l=t.stores,l===null?t.stores=[e]:l.push(e))}function Gs(e,t,l,a){t.value=l,t.getSnapshot=a,Qs(t)&&Ls(e)}function Xs(e,t,l){return l(function(){Qs(t)&&Ls(e)})}function Qs(e){var t=e.getSnapshot;e=e.value;try{var l=t();return!et(e,l)}catch{return!0}}function Ls(e){var t=Ml(e,2);t!==null&&Je(t,e,2)}function $i(e){var t=He();if(typeof e=="function"){var l=e;if(e=l(),ql){$t(!0);try{l()}finally{$t(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},t}function Vs(e,t,l,a){return e.baseState=l,Wi(e,ie,typeof a=="function"?a:Gt)}function Wm(e,t,l,a,n){if(fu(e))throw Error(d(485));if(e=t.action,e!==null){var u={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};x.T!==null?l(!0):u.isTransition=!1,a(u),l=t.pending,l===null?(u.next=t.pending=u,Zs(t,u)):(u.next=l.next,t.pending=l.next=u)}}function Zs(e,t){var l=t.action,a=t.payload,n=e.state;if(t.isTransition){var u=x.T,i={};x.T=i;try{var c=l(n,a),f=x.S;f!==null&&f(i,c),ks(e,t,c)}catch(y){Ii(e,t,y)}finally{u!==null&&i.types!==null&&(u.types=i.types),x.T=u}}else try{u=l(n,a),ks(e,t,u)}catch(y){Ii(e,t,y)}}function ks(e,t,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Ks(e,t,a)},function(a){return Ii(e,t,a)}):Ks(e,t,l)}function Ks(e,t,l){t.status="fulfilled",t.value=l,Js(t),e.state=l,t=e.pending,t!==null&&(l=t.next,l===t?e.pending=null:(l=l.next,t.next=l,Zs(e,l)))}function Ii(e,t,l){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=l,Js(t),t=t.next;while(t!==a)}e.action=null}function Js(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ws(e,t){return t}function Fs(e,t){if(F){var l=oe.formState;if(l!==null){e:{var a=X;if(F){if(de){t:{for(var n=de,u=ht;n.nodeType!==8;){if(!u){n=null;break t}if(n=vt(n.nextSibling),n===null){n=null;break t}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){de=vt(n.nextSibling),a=n.data==="F!";break e}}ll(a)}a=!1}a&&(t=l[0])}}return l=He(),l.memoizedState=l.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ws,lastRenderedState:t},l.queue=a,l=vo.bind(null,X,a),a.dispatch=l,a=$i(!1),u=nc.bind(null,X,!1,a.queue),a=He(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,l=Wm.bind(null,X,n,u,l),n.dispatch=l,a.memoizedState=e,[t,l,!1]}function $s(e){var t=be();return Is(t,ie,e)}function Is(e,t,l){if(t=Wi(e,t,Ws)[0],e=uu(Gt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Pa(t)}catch(i){throw i===sa?Wn:i}else a=t;t=be();var n=t.queue,u=n.dispatch;return l!==t.memoizedState&&(X.flags|=2048,ha(9,{destroy:void 0},Fm.bind(null,n,l),null)),[a,u,e]}function Fm(e,t){e.action=t}function Ps(e){var t=be(),l=ie;if(l!==null)return Is(t,l,e);be(),t=t.memoizedState,l=be();var a=l.queue.dispatch;return l.memoizedState=e,[t,a,!1]}function ha(e,t,l,a){return e={tag:e,create:l,deps:a,inst:t,next:null},t=X.updateQueue,t===null&&(t=au(),X.updateQueue=t),l=t.lastEffect,l===null?t.lastEffect=e.next=e:(a=l.next,l.next=e,e.next=a,t.lastEffect=e),e}function eo(){return be().memoizedState}function iu(e,t,l,a){var n=He();X.flags|=e,n.memoizedState=ha(1|t,{destroy:void 0},l,a===void 0?null:a)}function cu(e,t,l,a){var n=be();a=a===void 0?null:a;var u=n.memoizedState.inst;ie!==null&&a!==null&&Li(a,ie.memoizedState.deps)?n.memoizedState=ha(t,u,l,a):(X.flags|=e,n.memoizedState=ha(1|t,u,l,a))}function to(e,t){iu(8390656,8,e,t)}function Pi(e,t){cu(2048,8,e,t)}function $m(e){X.flags|=4;var t=X.updateQueue;if(t===null)t=au(),X.updateQueue=t,t.events=[e];else{var l=t.events;l===null?t.events=[e]:l.push(e)}}function lo(e){var t=be().memoizedState;return $m({ref:t,nextImpl:e}),function(){if((ee&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function ao(e,t){return cu(4,2,e,t)}function no(e,t){return cu(4,4,e,t)}function uo(e,t){if(typeof t=="function"){e=e();var l=t(e);return function(){typeof l=="function"?l():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function io(e,t,l){l=l!=null?l.concat([e]):null,cu(4,4,uo.bind(null,t,e),l)}function ec(){}function co(e,t){var l=be();t=t===void 0?null:t;var a=l.memoizedState;return t!==null&&Li(t,a[1])?a[0]:(l.memoizedState=[e,t],e)}function fo(e,t){var l=be();t=t===void 0?null:t;var a=l.memoizedState;if(t!==null&&Li(t,a[1]))return a[0];if(a=e(),ql){$t(!0);try{e()}finally{$t(!1)}}return l.memoizedState=[a,t],a}function tc(e,t,l){return l===void 0||(Yt&1073741824)!==0&&(K&261930)===0?e.memoizedState=t:(e.memoizedState=l,e=or(),X.lanes|=e,rl|=e,l)}function so(e,t,l,a){return et(l,t)?l:ra.current!==null?(e=tc(e,l,a),et(e,t)||(Te=!0),e):(Yt&42)===0||(Yt&1073741824)!==0&&(K&261930)===0?(Te=!0,e.memoizedState=l):(e=or(),X.lanes|=e,rl|=e,t)}function oo(e,t,l,a,n){var u=N.p;N.p=u!==0&&8>u?u:8;var i=x.T,c={};x.T=c,nc(e,!1,t,l);try{var f=n(),y=x.S;if(y!==null&&y(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var b=km(f,a);en(e,t,b,it(e))}else en(e,t,a,it(e))}catch(T){en(e,t,{then:function(){},status:"rejected",reason:T},it())}finally{N.p=u,i!==null&&c.types!==null&&(i.types=c.types),x.T=i}}function Im(){}function lc(e,t,l,a){if(e.tag!==5)throw Error(d(476));var n=ro(e).queue;oo(e,n,t,q,l===null?Im:function(){return mo(e),l(a)})}function ro(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:q},next:null};var l={};return t.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:l},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function mo(e){var t=ro(e);t.next===null&&(t=e.alternate.memoizedState),en(e,t.next.queue,{},it())}function ac(){return Me(pn)}function ho(){return be().memoizedState}function yo(){return be().memoizedState}function Pm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var l=it();e=ul(l);var a=il(t,e,l);a!==null&&(Je(a,t,l),Wa(a,t,l)),t={cache:ji()},e.payload=t;return}t=t.return}}function eh(e,t,l){var a=it();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},fu(e)?go(t,l):(l=Si(e,t,l,a),l!==null&&(Je(l,e,a),po(l,t,a)))}function vo(e,t,l){var a=it();en(e,t,l,a)}function en(e,t,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(fu(e))go(t,n);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var i=t.lastRenderedState,c=u(i,l);if(n.hasEagerState=!0,n.eagerState=c,et(c,i))return Qn(e,t,n,0),oe===null&&Xn(),!1}catch{}finally{}if(l=Si(e,t,n,a),l!==null)return Je(l,e,a),po(l,t,a),!0}return!1}function nc(e,t,l,a){if(a={lane:2,revertLane:Hc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fu(e)){if(t)throw Error(d(479))}else t=Si(e,l,a,2),t!==null&&Je(t,e,2)}function fu(e){var t=e.alternate;return e===X||t!==null&&t===X}function go(e,t){da=tu=!0;var l=e.pending;l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t}function po(e,t,l){if((l&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,l|=a,t.lanes=l,Tf(e,l)}}var tn={readContext:Me,use:nu,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useLayoutEffect:ye,useInsertionEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useSyncExternalStore:ye,useId:ye,useHostTransitionStatus:ye,useFormState:ye,useActionState:ye,useOptimistic:ye,useMemoCache:ye,useCacheRefresh:ye};tn.useEffectEvent=ye;var bo={readContext:Me,use:nu,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:to,useImperativeHandle:function(e,t,l){l=l!=null?l.concat([e]):null,iu(4194308,4,uo.bind(null,t,e),l)},useLayoutEffect:function(e,t){return iu(4194308,4,e,t)},useInsertionEffect:function(e,t){iu(4,2,e,t)},useMemo:function(e,t){var l=He();t=t===void 0?null:t;var a=e();if(ql){$t(!0);try{e()}finally{$t(!1)}}return l.memoizedState=[a,t],a},useReducer:function(e,t,l){var a=He();if(l!==void 0){var n=l(t);if(ql){$t(!0);try{l(t)}finally{$t(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=eh.bind(null,X,e),[a.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:function(e){e=$i(e);var t=e.queue,l=vo.bind(null,X,t);return t.dispatch=l,[e.memoizedState,l]},useDebugValue:ec,useDeferredValue:function(e,t){var l=He();return tc(l,e,t)},useTransition:function(){var e=$i(!1);return e=oo.bind(null,X,e.queue,!0,!1),He().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,l){var a=X,n=He();if(F){if(l===void 0)throw Error(d(407));l=l()}else{if(l=t(),oe===null)throw Error(d(349));(K&127)!==0||Ys(a,t,l)}n.memoizedState=l;var u={value:l,getSnapshot:t};return n.queue=u,to(Xs.bind(null,a,u,e),[e]),a.flags|=2048,ha(9,{destroy:void 0},Gs.bind(null,a,u,l,t),null),l},useId:function(){var e=He(),t=oe.identifierPrefix;if(F){var l=Nt,a=zt;l=(a&~(1<<32-Pe(a)-1)).toString(32)+l,t="_"+t+"R_"+l,l=lu++,0<l&&(t+="H"+l.toString(32)),t+="_"}else l=Km++,t="_"+t+"r_"+l.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ac,useFormState:Fs,useActionState:Fs,useOptimistic:function(e){var t=He();t.memoizedState=t.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=l,t=nc.bind(null,X,!0,l),l.dispatch=t,[e,t]},useMemoCache:Ji,useCacheRefresh:function(){return He().memoizedState=Pm.bind(null,X)},useEffectEvent:function(e){var t=He(),l={impl:e};return t.memoizedState=l,function(){if((ee&2)!==0)throw Error(d(440));return l.impl.apply(void 0,arguments)}}},uc={readContext:Me,use:nu,useCallback:co,useContext:Me,useEffect:Pi,useImperativeHandle:io,useInsertionEffect:ao,useLayoutEffect:no,useMemo:fo,useReducer:uu,useRef:eo,useState:function(){return uu(Gt)},useDebugValue:ec,useDeferredValue:function(e,t){var l=be();return so(l,ie.memoizedState,e,t)},useTransition:function(){var e=uu(Gt)[0],t=be().memoizedState;return[typeof e=="boolean"?e:Pa(e),t]},useSyncExternalStore:qs,useId:ho,useHostTransitionStatus:ac,useFormState:$s,useActionState:$s,useOptimistic:function(e,t){var l=be();return Vs(l,ie,e,t)},useMemoCache:Ji,useCacheRefresh:yo};uc.useEffectEvent=lo;var xo={readContext:Me,use:nu,useCallback:co,useContext:Me,useEffect:Pi,useImperativeHandle:io,useInsertionEffect:ao,useLayoutEffect:no,useMemo:fo,useReducer:Fi,useRef:eo,useState:function(){return Fi(Gt)},useDebugValue:ec,useDeferredValue:function(e,t){var l=be();return ie===null?tc(l,e,t):so(l,ie.memoizedState,e,t)},useTransition:function(){var e=Fi(Gt)[0],t=be().memoizedState;return[typeof e=="boolean"?e:Pa(e),t]},useSyncExternalStore:qs,useId:ho,useHostTransitionStatus:ac,useFormState:Ps,useActionState:Ps,useOptimistic:function(e,t){var l=be();return ie!==null?Vs(l,ie,e,t):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:Ji,useCacheRefresh:yo};xo.useEffectEvent=lo;function ic(e,t,l,a){t=e.memoizedState,l=l(a,t),l=l==null?t:H({},t,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var cc={enqueueSetState:function(e,t,l){e=e._reactInternals;var a=it(),n=ul(a);n.payload=t,l!=null&&(n.callback=l),t=il(e,n,a),t!==null&&(Je(t,e,a),Wa(t,e,a))},enqueueReplaceState:function(e,t,l){e=e._reactInternals;var a=it(),n=ul(a);n.tag=1,n.payload=t,l!=null&&(n.callback=l),t=il(e,n,a),t!==null&&(Je(t,e,a),Wa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var l=it(),a=ul(l);a.tag=2,t!=null&&(a.callback=t),t=il(e,a,l),t!==null&&(Je(t,e,l),Wa(t,e,l))}};function So(e,t,l,a,n,u,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,i):t.prototype&&t.prototype.isPureReactComponent?!Xa(l,a)||!Xa(n,u):!0}function To(e,t,l,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(l,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(l,a),t.state!==e&&cc.enqueueReplaceState(t,t.state,null)}function Yl(e,t){var l=t;if("ref"in t){l={};for(var a in t)a!=="ref"&&(l[a]=t[a])}if(e=e.defaultProps){l===t&&(l=H({},l));for(var n in e)l[n]===void 0&&(l[n]=e[n])}return l}function Eo(e){Gn(e)}function Ao(e){console.error(e)}function zo(e){Gn(e)}function su(e,t){try{var l=e.onUncaughtError;l(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function No(e,t,l){try{var a=e.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function fc(e,t,l){return l=ul(l),l.tag=3,l.payload={element:null},l.callback=function(){su(e,t)},l}function Do(e){return e=ul(e),e.tag=3,e}function _o(e,t,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var u=a.value;e.payload=function(){return n(u)},e.callback=function(){No(t,l,a)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){No(t,l,a),typeof n!="function"&&(dl===null?dl=new Set([this]):dl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function th(e,t,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=l.alternate,t!==null&&ia(t,l,n,!0),l=lt.current,l!==null){switch(l.tag){case 31:case 13:return yt===null?Su():l.alternate===null&&ve===0&&(ve=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Fn?l.flags|=16384:(t=l.updateQueue,t===null?l.updateQueue=new Set([a]):t.add(a),Oc(e,a,n)),!1;case 22:return l.flags|=65536,a===Fn?l.flags|=16384:(t=l.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=t):(l=t.retryQueue,l===null?t.retryQueue=new Set([a]):l.add(a)),Oc(e,a,n)),!1}throw Error(d(435,l.tag))}return Oc(e,a,n),Su(),!1}if(F)return t=lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Di&&(e=Error(d(422),{cause:a}),Va(rt(e,l)))):(a!==Di&&(t=Error(d(423),{cause:a}),Va(rt(t,l))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=rt(a,l),n=fc(e.stateNode,a,n),qi(e,n),ve!==4&&(ve=2)),!1;var u=Error(d(520),{cause:a});if(u=rt(u,l),on===null?on=[u]:on.push(u),ve!==4&&(ve=2),t===null)return!0;a=rt(a,l),l=t;do{switch(l.tag){case 3:return l.flags|=65536,e=n&-n,l.lanes|=e,e=fc(l.stateNode,a,e),qi(l,e),!1;case 1:if(t=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(dl===null||!dl.has(u))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Do(n),_o(n,e,l,a),qi(l,n),!1}l=l.return}while(l!==null);return!1}var sc=Error(d(461)),Te=!1;function Ce(e,t,l,a){t.child=e===null?ws(t,null,l,a):Bl(t,e.child,l,a)}function Mo(e,t,l,a,n){l=l.render;var u=t.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return Ol(t),a=Vi(e,t,l,i,u,n),c=Zi(),e!==null&&!Te?(ki(e,t,n),Xt(e,t,n)):(F&&c&&zi(t),t.flags|=1,Ce(e,t,a,n),t.child)}function Co(e,t,l,a,n){if(e===null){var u=l.type;return typeof u=="function"&&!Ti(u)&&u.defaultProps===void 0&&l.compare===null?(t.tag=15,t.type=u,wo(e,t,u,a,n)):(e=Vn(l.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!gc(e,n)){var i=u.memoizedProps;if(l=l.compare,l=l!==null?l:Xa,l(i,a)&&e.ref===t.ref)return Xt(e,t,n)}return t.flags|=1,e=Ut(u,a),e.ref=t.ref,e.return=t,t.child=e}function wo(e,t,l,a,n){if(e!==null){var u=e.memoizedProps;if(Xa(u,a)&&e.ref===t.ref)if(Te=!1,t.pendingProps=a=u,gc(e,n))(e.flags&131072)!==0&&(Te=!0);else return t.lanes=e.lanes,Xt(e,t,n)}return oc(e,t,l,a,n)}function jo(e,t,l,a){var n=a.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|l:l,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~u}else a=0,t.child=null;return Oo(e,t,u,l,a)}if((l&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Jn(t,u!==null?u.cachePool:null),u!==null?Rs(t,u):Gi(),Us(t);else return a=t.lanes=536870912,Oo(e,t,u!==null?u.baseLanes|l:l,l,a)}else u!==null?(Jn(t,u.cachePool),Rs(t,u),fl(),t.memoizedState=null):(e!==null&&Jn(t,null),Gi(),fl());return Ce(e,t,n,l),t.child}function ln(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Oo(e,t,l,a,n){var u=Ri();return u=u===null?null:{parent:xe._currentValue,pool:u},t.memoizedState={baseLanes:l,cachePool:u},e!==null&&Jn(t,null),Gi(),Us(t),e!==null&&ia(e,t,a,!0),t.childLanes=n,null}function ou(e,t){return t=du({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ro(e,t,l){return Bl(t,e.child,null,l),e=ou(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function lh(e,t,l){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(F){if(a.mode==="hidden")return e=ou(t,a),t.lanes=536870912,ln(null,e);if(Qi(t),(e=de)?(e=kr(e,ht),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:el!==null?{id:zt,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},l=vs(e),l.return=t,t.child=l,_e=t,de=null)):e=null,e===null)throw ll(t);return t.lanes=536870912,null}return ou(t,a)}var u=e.memoizedState;if(u!==null){var i=u.dehydrated;if(Qi(t),n)if(t.flags&256)t.flags&=-257,t=Ro(e,t,l);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(Te||ia(e,t,l,!1),n=(l&e.childLanes)!==0,Te||n){if(a=oe,a!==null&&(i=Ef(a,l),i!==0&&i!==u.retryLane))throw u.retryLane=i,Ml(e,i),Je(a,e,i),sc;Su(),t=Ro(e,t,l)}else e=u.treeContext,de=vt(i.nextSibling),_e=t,F=!0,tl=null,ht=!1,e!==null&&bs(t,e),t=ou(t,a),t.flags|=4096;return t}return e=Ut(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ru(e,t){var l=t.ref;if(l===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(d(284));(e===null||e.ref!==l)&&(t.flags|=4194816)}}function oc(e,t,l,a,n){return Ol(t),l=Vi(e,t,l,a,void 0,n),a=Zi(),e!==null&&!Te?(ki(e,t,n),Xt(e,t,n)):(F&&a&&zi(t),t.flags|=1,Ce(e,t,l,n),t.child)}function Uo(e,t,l,a,n,u){return Ol(t),t.updateQueue=null,l=Bs(t,a,l,n),Hs(e),a=Zi(),e!==null&&!Te?(ki(e,t,u),Xt(e,t,u)):(F&&a&&zi(t),t.flags|=1,Ce(e,t,l,u),t.child)}function Ho(e,t,l,a,n){if(Ol(t),t.stateNode===null){var u=la,i=l.contextType;typeof i=="object"&&i!==null&&(u=Me(i)),u=new l(a,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=cc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=a,u.state=t.memoizedState,u.refs={},Hi(t),i=l.contextType,u.context=typeof i=="object"&&i!==null?Me(i):la,u.state=t.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(ic(t,l,i,a),u.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&cc.enqueueReplaceState(u,u.state,null),$a(t,a,u,n),Fa(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){u=t.stateNode;var c=t.memoizedProps,f=Yl(l,c);u.props=f;var y=u.context,b=l.contextType;i=la,typeof b=="object"&&b!==null&&(i=Me(b));var T=l.getDerivedStateFromProps;b=typeof T=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,b||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||y!==i)&&To(t,u,a,i),nl=!1;var v=t.memoizedState;u.state=v,$a(t,a,u,n),Fa(),y=t.memoizedState,c||v!==y||nl?(typeof T=="function"&&(ic(t,l,T,a),y=t.memoizedState),(f=nl||So(t,l,f,a,v,y,i))?(b||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=y),u.props=a,u.state=y,u.context=i,a=f):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,Bi(e,t),i=t.memoizedProps,b=Yl(l,i),u.props=b,T=t.pendingProps,v=u.context,y=l.contextType,f=la,typeof y=="object"&&y!==null&&(f=Me(y)),c=l.getDerivedStateFromProps,(y=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==T||v!==f)&&To(t,u,a,f),nl=!1,v=t.memoizedState,u.state=v,$a(t,a,u,n),Fa();var g=t.memoizedState;i!==T||v!==g||nl||e!==null&&e.dependencies!==null&&kn(e.dependencies)?(typeof c=="function"&&(ic(t,l,c,a),g=t.memoizedState),(b=nl||So(t,l,b,a,v,g,f)||e!==null&&e.dependencies!==null&&kn(e.dependencies))?(y||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,g,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,g,f)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=g),u.props=a,u.state=g,u.context=f,a=b):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),a=!1)}return u=a,ru(e,t),a=(t.flags&128)!==0,u||a?(u=t.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&a?(t.child=Bl(t,e.child,null,n),t.child=Bl(t,null,l,n)):Ce(e,t,l,n),t.memoizedState=u.state,e=t.child):e=Xt(e,t,n),e}function Bo(e,t,l,a){return wl(),t.flags|=256,Ce(e,t,l,a),t.child}var rc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dc(e){return{baseLanes:e,cachePool:zs()}}function mc(e,t,l){return e=e!==null?e.childLanes&~l:0,t&&(e|=ut),e}function qo(e,t,l){var a=t.pendingProps,n=!1,u=(t.flags&128)!==0,i;if((i=u)||(i=e!==null&&e.memoizedState===null?!1:(pe.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(F){if(n?cl(t):fl(),(e=de)?(e=kr(e,ht),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:el!==null?{id:zt,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},l=vs(e),l.return=t,t.child=l,_e=t,de=null)):e=null,e===null)throw ll(t);return Wc(e)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(fl(),n=t.mode,c=du({mode:"hidden",children:c},n),a=Cl(a,n,l,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=dc(l),a.childLanes=mc(e,i,l),t.memoizedState=rc,ln(null,a)):(cl(t),hc(t,c))}var f=e.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(u)t.flags&256?(cl(t),t.flags&=-257,t=yc(e,t,l)):t.memoizedState!==null?(fl(),t.child=e.child,t.flags|=128,t=null):(fl(),c=a.fallback,n=t.mode,a=du({mode:"visible",children:a.children},n),c=Cl(c,n,l,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,Bl(t,e.child,null,l),a=t.child,a.memoizedState=dc(l),a.childLanes=mc(e,i,l),t.memoizedState=rc,t=ln(null,a));else if(cl(t),Wc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var y=i.dgst;i=y,a=Error(d(419)),a.stack="",a.digest=i,Va({value:a,source:null,stack:null}),t=yc(e,t,l)}else if(Te||ia(e,t,l,!1),i=(l&e.childLanes)!==0,Te||i){if(i=oe,i!==null&&(a=Ef(i,l),a!==0&&a!==f.retryLane))throw f.retryLane=a,Ml(e,a),Je(i,e,a),sc;Jc(c)||Su(),t=yc(e,t,l)}else Jc(c)?(t.flags|=192,t.child=e.child,t=null):(e=f.treeContext,de=vt(c.nextSibling),_e=t,F=!0,tl=null,ht=!1,e!==null&&bs(t,e),t=hc(t,a.children),t.flags|=4096);return t}return n?(fl(),c=a.fallback,n=t.mode,f=e.child,y=f.sibling,a=Ut(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,y!==null?c=Ut(y,c):(c=Cl(c,n,l,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,ln(null,a),a=t.child,c=e.child.memoizedState,c===null?c=dc(l):(n=c.cachePool,n!==null?(f=xe._currentValue,n=n.parent!==f?{parent:f,pool:f}:n):n=zs(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=mc(e,i,l),t.memoizedState=rc,ln(e.child,a)):(cl(t),l=e.child,e=l.sibling,l=Ut(l,{mode:"visible",children:a.children}),l.return=t,l.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=l,t.memoizedState=null,l)}function hc(e,t){return t=du({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function du(e,t){return e=tt(22,e,null,t),e.lanes=0,e}function yc(e,t,l){return Bl(t,e.child,null,l),e=hc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yo(e,t,l){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ci(e.return,t,l)}function vc(e,t,l,a,n,u){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:u}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=n,i.treeForkCount=u)}function Go(e,t,l){var a=t.pendingProps,n=a.revealOrder,u=a.tail;a=a.children;var i=pe.current,c=(i&2)!==0;if(c?(i=i&1|2,t.flags|=128):i&=1,D(pe,i),Ce(e,t,a,l),a=F?La:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yo(e,l,t);else if(e.tag===19)Yo(e,l,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(l=t.child,n=null;l!==null;)e=l.alternate,e!==null&&eu(e)===null&&(n=l),l=l.sibling;l=n,l===null?(n=t.child,t.child=null):(n=l.sibling,l.sibling=null),vc(t,!1,n,l,u,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&eu(e)===null){t.child=n;break}e=n.sibling,n.sibling=l,l=n,n=e}vc(t,!0,l,null,u,a);break;case"together":vc(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Xt(e,t,l){if(e!==null&&(t.dependencies=e.dependencies),rl|=t.lanes,(l&t.childLanes)===0)if(e!==null){if(ia(e,t,l,!1),(l&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,l=Ut(e,e.pendingProps),t.child=l,l.return=t;e.sibling!==null;)e=e.sibling,l=l.sibling=Ut(e,e.pendingProps),l.return=t;l.sibling=null}return t.child}function gc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&kn(e)))}function ah(e,t,l){switch(t.tag){case 3:Ue(t,t.stateNode.containerInfo),al(t,xe,e.memoizedState.cache),wl();break;case 27:case 5:_a(t);break;case 4:Ue(t,t.stateNode.containerInfo);break;case 10:al(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Qi(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(cl(t),t.flags|=128,null):(l&t.child.childLanes)!==0?qo(e,t,l):(cl(t),e=Xt(e,t,l),e!==null?e.sibling:null);cl(t);break;case 19:var n=(e.flags&128)!==0;if(a=(l&t.childLanes)!==0,a||(ia(e,t,l,!1),a=(l&t.childLanes)!==0),n){if(a)return Go(e,t,l);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),D(pe,pe.current),a)break;return null;case 22:return t.lanes=0,jo(e,t,l,t.pendingProps);case 24:al(t,xe,e.memoizedState.cache)}return Xt(e,t,l)}function Xo(e,t,l){if(e!==null)if(e.memoizedProps!==t.pendingProps)Te=!0;else{if(!gc(e,l)&&(t.flags&128)===0)return Te=!1,ah(e,t,l);Te=(e.flags&131072)!==0}else Te=!1,F&&(t.flags&1048576)!==0&&ps(t,La,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Ul(t.elementType),t.type=e,typeof e=="function")Ti(e)?(a=Yl(e,a),t.tag=1,t=Ho(null,t,e,a,l)):(t.tag=0,t=oc(null,t,e,a,l));else{if(e!=null){var n=e.$$typeof;if(n===ct){t.tag=11,t=Mo(null,t,e,a,l);break e}else if(n===W){t.tag=14,t=Co(null,t,e,a,l);break e}}throw t=wt(e)||e,Error(d(306,t,""))}}return t;case 0:return oc(e,t,t.type,t.pendingProps,l);case 1:return a=t.type,n=Yl(a,t.pendingProps),Ho(e,t,a,n,l);case 3:e:{if(Ue(t,t.stateNode.containerInfo),e===null)throw Error(d(387));a=t.pendingProps;var u=t.memoizedState;n=u.element,Bi(e,t),$a(t,a,null,l);var i=t.memoizedState;if(a=i.cache,al(t,xe,a),a!==u.cache&&wi(t,[xe],l,!0),Fa(),a=i.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Bo(e,t,a,l);break e}else if(a!==n){n=rt(Error(d(424)),t),Va(n),t=Bo(e,t,a,l);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(de=vt(e.firstChild),_e=t,F=!0,tl=null,ht=!0,l=ws(t,null,a,l),t.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(wl(),a===n){t=Xt(e,t,l);break e}Ce(e,t,a,l)}t=t.child}return t;case 26:return ru(e,t),e===null?(l=Ir(t.type,null,t.pendingProps,null))?t.memoizedState=l:F||(l=t.type,e=t.pendingProps,a=_u(V.current).createElement(l),a[De]=t,a[Qe]=e,we(a,l,e),ze(a),t.stateNode=a):t.memoizedState=Ir(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _a(t),e===null&&F&&(a=t.stateNode=Wr(t.type,t.pendingProps,V.current),_e=t,ht=!0,n=de,vl(t.type)?(Fc=n,de=vt(a.firstChild)):de=n),Ce(e,t,t.pendingProps.children,l),ru(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&F&&((n=a=de)&&(a=Oh(a,t.type,t.pendingProps,ht),a!==null?(t.stateNode=a,_e=t,de=vt(a.firstChild),ht=!1,n=!0):n=!1),n||ll(t)),_a(t),n=t.type,u=t.pendingProps,i=e!==null?e.memoizedProps:null,a=u.children,Zc(n,u)?a=null:i!==null&&Zc(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=Vi(e,t,Jm,null,null,l),pn._currentValue=n),ru(e,t),Ce(e,t,a,l),t.child;case 6:return e===null&&F&&((e=l=de)&&(l=Rh(l,t.pendingProps,ht),l!==null?(t.stateNode=l,_e=t,de=null,e=!0):e=!1),e||ll(t)),null;case 13:return qo(e,t,l);case 4:return Ue(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Bl(t,null,a,l):Ce(e,t,a,l),t.child;case 11:return Mo(e,t,t.type,t.pendingProps,l);case 7:return Ce(e,t,t.pendingProps,l),t.child;case 8:return Ce(e,t,t.pendingProps.children,l),t.child;case 12:return Ce(e,t,t.pendingProps.children,l),t.child;case 10:return a=t.pendingProps,al(t,t.type,a.value),Ce(e,t,a.children,l),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Ol(t),n=Me(n),a=a(n),t.flags|=1,Ce(e,t,a,l),t.child;case 14:return Co(e,t,t.type,t.pendingProps,l);case 15:return wo(e,t,t.type,t.pendingProps,l);case 19:return Go(e,t,l);case 31:return lh(e,t,l);case 22:return jo(e,t,l,t.pendingProps);case 24:return Ol(t),a=Me(xe),e===null?(n=Ri(),n===null&&(n=oe,u=ji(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=l),n=u),t.memoizedState={parent:a,cache:n},Hi(t),al(t,xe,n)):((e.lanes&l)!==0&&(Bi(e,t),$a(t,null,null,l),Fa()),n=e.memoizedState,u=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),al(t,xe,a)):(a=u.cache,al(t,xe,a),a!==n.cache&&wi(t,[xe],l,!0))),Ce(e,t,t.pendingProps.children,l),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function Qt(e){e.flags|=4}function pc(e,t,l,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(hr())e.flags|=8192;else throw Hl=Fn,Ui}else e.flags&=-16777217}function Qo(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ad(t))if(hr())e.flags|=8192;else throw Hl=Fn,Ui}function mu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?xf():536870912,e.lanes|=t,pa|=t)}function an(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,l=0,a=0;if(t)for(var n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=l,t}function nh(e,t,l){var a=t.pendingProps;switch(Ni(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return me(t),null;case 3:return l=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),qt(xe),ge(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ua(t)?Qt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_i())),me(t),null;case 26:var n=t.type,u=t.memoizedState;return e===null?(Qt(t),u!==null?(me(t),Qo(t,u)):(me(t),pc(t,n,null,a,l))):u?u!==e.memoizedState?(Qt(t),me(t),Qo(t,u)):(me(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Qt(t),me(t),pc(t,n,e,a,l)),null;case 27:if(An(t),l=V.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Qt(t);else{if(!a){if(t.stateNode===null)throw Error(d(166));return me(t),null}e=M.current,ua(t)?xs(t):(e=Wr(n,a,l),t.stateNode=e,Qt(t))}return me(t),null;case 5:if(An(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Qt(t);else{if(!a){if(t.stateNode===null)throw Error(d(166));return me(t),null}if(u=M.current,ua(t))xs(t);else{var i=_u(V.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}u[De]=t,u[Qe]=a;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=u;e:switch(we(u,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Qt(t)}}return me(t),pc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,l),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Qt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(d(166));if(e=V.current,ua(t)){if(e=t.stateNode,l=t.memoizedProps,a=null,n=_e,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[De]=t,e=!!(e.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||qr(e.nodeValue,l)),e||ll(t,!0)}else e=_u(e).createTextNode(a),e[De]=t,t.stateNode=e}return me(t),null;case 31:if(l=t.memoizedState,e===null||e.memoizedState!==null){if(a=ua(t),l!==null){if(e===null){if(!a)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[De]=t}else wl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;me(t),e=!1}else l=_i(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(d(558))}return me(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ua(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(d(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[De]=t}else wl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;me(t),n=!1}else n=_i(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=l,t):(l=a!==null,e=e!==null&&e.memoizedState!==null,l&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==n&&(a.flags|=2048)),l!==e&&l&&(t.child.flags|=8192),mu(t,t.updateQueue),me(t),null);case 4:return ge(),e===null&&Gc(t.stateNode.containerInfo),me(t),null;case 10:return qt(t.type),me(t),null;case 19:if(E(pe),a=t.memoizedState,a===null)return me(t),null;if(n=(t.flags&128)!==0,u=a.rendering,u===null)if(n)an(a,!1);else{if(ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=eu(e),u!==null){for(t.flags|=128,an(a,!1),e=u.updateQueue,t.updateQueue=e,mu(t,e),t.subtreeFlags=0,e=l,l=t.child;l!==null;)ys(l,e),l=l.sibling;return D(pe,pe.current&1|2),F&&Ht(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&$e()>pu&&(t.flags|=128,n=!0,an(a,!1),t.lanes=4194304)}else{if(!n)if(e=eu(u),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,mu(t,e),an(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!F)return me(t),null}else 2*$e()-a.renderingStartTime>pu&&l!==536870912&&(t.flags|=128,n=!0,an(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(e=a.last,e!==null?e.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=$e(),e.sibling=null,l=pe.current,D(pe,n?l&1|2:l&1),F&&Ht(t,a.treeForkCount),e):(me(t),null);case 22:case 23:return at(t),Xi(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(l&536870912)!==0&&(t.flags&128)===0&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),l=t.updateQueue,l!==null&&mu(t,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==l&&(t.flags|=2048),e!==null&&E(Rl),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),qt(xe),me(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function uh(e,t){switch(Ni(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qt(xe),ge(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return An(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(d(340));wl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));wl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(pe),null;case 4:return ge(),null;case 10:return qt(t.type),null;case 22:case 23:return at(t),Xi(),e!==null&&E(Rl),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qt(xe),null;case 25:return null;default:return null}}function Lo(e,t){switch(Ni(t),t.tag){case 3:qt(xe),ge();break;case 26:case 27:case 5:An(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:E(pe);break;case 10:qt(t.type);break;case 22:case 23:at(t),Xi(),e!==null&&E(Rl);break;case 24:qt(xe)}}function nn(e,t){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&e)===e){a=void 0;var u=l.create,i=l.inst;a=u(),i.destroy=a}l=l.next}while(l!==n)}}catch(c){ae(t,t.return,c)}}function sl(e,t,l){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var u=n.next;a=u;do{if((a.tag&e)===e){var i=a.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,n=t;var f=l,y=c;try{y()}catch(b){ae(n,f,b)}}}a=a.next}while(a!==u)}}catch(b){ae(t,t.return,b)}}function Vo(e){var t=e.updateQueue;if(t!==null){var l=e.stateNode;try{Os(t,l)}catch(a){ae(e,e.return,a)}}}function Zo(e,t,l){l.props=Yl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(a){ae(e,t,a)}}function un(e,t){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof l=="function"?e.refCleanup=l(a):l.current=a}}catch(n){ae(e,t,n)}}function Dt(e,t){var l=e.ref,a=e.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){ae(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){ae(e,t,n)}else l.current=null}function ko(e){var t=e.type,l=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break e;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){ae(e,e.return,n)}}function bc(e,t,l){try{var a=e.stateNode;Dh(a,e.type,l,t),a[Qe]=t}catch(n){ae(e,e.return,n)}}function Ko(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&vl(e.type)||e.tag===4}function xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ko(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&vl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sc(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,t):(t=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,t.appendChild(e),l=l._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=Ot));else if(a!==4&&(a===27&&vl(e.type)&&(l=e.stateNode,t=null),e=e.child,e!==null))for(Sc(e,t,l),e=e.sibling;e!==null;)Sc(e,t,l),e=e.sibling}function hu(e,t,l){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?l.insertBefore(e,t):l.appendChild(e);else if(a!==4&&(a===27&&vl(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(hu(e,t,l),e=e.sibling;e!==null;)hu(e,t,l),e=e.sibling}function Jo(e){var t=e.stateNode,l=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);we(t,a,l),t[De]=e,t[Qe]=l}catch(u){ae(e,e.return,u)}}var Lt=!1,Ee=!1,Tc=!1,Wo=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function ih(e,t){if(e=e.containerInfo,Lc=Uu,e=is(e),yi(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break e}var i=0,c=-1,f=-1,y=0,b=0,T=e,v=null;t:for(;;){for(var g;T!==l||n!==0&&T.nodeType!==3||(c=i+n),T!==u||a!==0&&T.nodeType!==3||(f=i+a),T.nodeType===3&&(i+=T.nodeValue.length),(g=T.firstChild)!==null;)v=T,T=g;for(;;){if(T===e)break t;if(v===l&&++y===n&&(c=i),v===u&&++b===a&&(f=i),(g=T.nextSibling)!==null)break;T=v,v=T.parentNode}T=g}l=c===-1||f===-1?null:{start:c,end:f}}else l=null}l=l||{start:0,end:0}}else l=null;for(Vc={focusedElem:e,selectionRange:l},Uu=!1,Ne=t;Ne!==null;)if(t=Ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ne=e;else for(;Ne!==null;){switch(t=Ne,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)n=e[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,l=t,n=u.memoizedProps,u=u.memoizedState,a=l.stateNode;try{var _=Yl(l.type,n);e=a.getSnapshotBeforeUpdate(_,u),a.__reactInternalSnapshotBeforeUpdate=e}catch(B){ae(l,l.return,B)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,l=e.nodeType,l===9)Kc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,Ne=e;break}Ne=t.return}}function Fo(e,t,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:Zt(e,l),a&4&&nn(5,l);break;case 1:if(Zt(e,l),a&4)if(e=l.stateNode,t===null)try{e.componentDidMount()}catch(i){ae(l,l.return,i)}else{var n=Yl(l.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){ae(l,l.return,i)}}a&64&&Vo(l),a&512&&un(l,l.return);break;case 3:if(Zt(e,l),a&64&&(e=l.updateQueue,e!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Os(e,t)}catch(i){ae(l,l.return,i)}}break;case 27:t===null&&a&4&&Jo(l);case 26:case 5:Zt(e,l),t===null&&a&4&&ko(l),a&512&&un(l,l.return);break;case 12:Zt(e,l);break;case 31:Zt(e,l),a&4&&Po(e,l);break;case 13:Zt(e,l),a&4&&er(e,l),a&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=yh.bind(null,l),Uh(e,l))));break;case 22:if(a=l.memoizedState!==null||Lt,!a){t=t!==null&&t.memoizedState!==null||Ee,n=Lt;var u=Ee;Lt=a,(Ee=t)&&!u?kt(e,l,(l.subtreeFlags&8772)!==0):Zt(e,l),Lt=n,Ee=u}break;case 30:break;default:Zt(e,l)}}function $o(e){var t=e.alternate;t!==null&&(e.alternate=null,$o(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Iu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var he=null,Ve=!1;function Vt(e,t,l){for(l=l.child;l!==null;)Io(e,t,l),l=l.sibling}function Io(e,t,l){if(Ie&&typeof Ie.onCommitFiberUnmount=="function")try{Ie.onCommitFiberUnmount(Ma,l)}catch{}switch(l.tag){case 26:Ee||Dt(l,t),Vt(e,t,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Ee||Dt(l,t);var a=he,n=Ve;vl(l.type)&&(he=l.stateNode,Ve=!1),Vt(e,t,l),yn(l.stateNode),he=a,Ve=n;break;case 5:Ee||Dt(l,t);case 6:if(a=he,n=Ve,he=null,Vt(e,t,l),he=a,Ve=n,he!==null)if(Ve)try{(he.nodeType===9?he.body:he.nodeName==="HTML"?he.ownerDocument.body:he).removeChild(l.stateNode)}catch(u){ae(l,t,u)}else try{he.removeChild(l.stateNode)}catch(u){ae(l,t,u)}break;case 18:he!==null&&(Ve?(e=he,Vr(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Na(e)):Vr(he,l.stateNode));break;case 4:a=he,n=Ve,he=l.stateNode.containerInfo,Ve=!0,Vt(e,t,l),he=a,Ve=n;break;case 0:case 11:case 14:case 15:sl(2,l,t),Ee||sl(4,l,t),Vt(e,t,l);break;case 1:Ee||(Dt(l,t),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Zo(l,t,a)),Vt(e,t,l);break;case 21:Vt(e,t,l);break;case 22:Ee=(a=Ee)||l.memoizedState!==null,Vt(e,t,l),Ee=a;break;default:Vt(e,t,l)}}function Po(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Na(e)}catch(l){ae(t,t.return,l)}}}function er(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Na(e)}catch(l){ae(t,t.return,l)}}function ch(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Wo),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Wo),t;default:throw Error(d(435,e.tag))}}function yu(e,t){var l=ch(e);t.forEach(function(a){if(!l.has(a)){l.add(a);var n=vh.bind(null,e,a);a.then(n,n)}})}function Ze(e,t){var l=t.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],u=e,i=t,c=i;e:for(;c!==null;){switch(c.tag){case 27:if(vl(c.type)){he=c.stateNode,Ve=!1;break e}break;case 5:he=c.stateNode,Ve=!1;break e;case 3:case 4:he=c.stateNode.containerInfo,Ve=!0;break e}c=c.return}if(he===null)throw Error(d(160));Io(u,i,n),he=null,Ve=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)tr(t,e),t=t.sibling}var xt=null;function tr(e,t){var l=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ze(t,e),ke(e),a&4&&(sl(3,e,e.return),nn(3,e),sl(5,e,e.return));break;case 1:Ze(t,e),ke(e),a&512&&(Ee||l===null||Dt(l,l.return)),a&64&&Lt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=xt;if(Ze(t,e),ke(e),a&512&&(Ee||l===null||Dt(l,l.return)),a&4){var u=l!==null?l.memoizedState:null;if(a=e.memoizedState,l===null)if(a===null)if(e.stateNode===null){e:{a=e.type,l=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":u=n.getElementsByTagName("title")[0],(!u||u[ja]||u[De]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(a),n.head.insertBefore(u,n.querySelector("head > title"))),we(u,a,l),u[De]=e,ze(u),a=u;break e;case"link":var i=td("link","href",n).get(a+(l.href||""));if(i){for(var c=0;c<i.length;c++)if(u=i[c],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(c,1);break t}}u=n.createElement(a),we(u,a,l),n.head.appendChild(u);break;case"meta":if(i=td("meta","content",n).get(a+(l.content||""))){for(c=0;c<i.length;c++)if(u=i[c],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(c,1);break t}}u=n.createElement(a),we(u,a,l),n.head.appendChild(u);break;default:throw Error(d(468,a))}u[De]=e,ze(u),a=u}e.stateNode=a}else ld(n,e.type,e.stateNode);else e.stateNode=ed(n,a,e.memoizedProps);else u!==a?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,a===null?ld(n,e.type,e.stateNode):ed(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&bc(e,e.memoizedProps,l.memoizedProps)}break;case 27:Ze(t,e),ke(e),a&512&&(Ee||l===null||Dt(l,l.return)),l!==null&&a&4&&bc(e,e.memoizedProps,l.memoizedProps);break;case 5:if(Ze(t,e),ke(e),a&512&&(Ee||l===null||Dt(l,l.return)),e.flags&32){n=e.stateNode;try{Wl(n,"")}catch(_){ae(e,e.return,_)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,bc(e,n,l!==null?l.memoizedProps:n)),a&1024&&(Tc=!0);break;case 6:if(Ze(t,e),ke(e),a&4){if(e.stateNode===null)throw Error(d(162));a=e.memoizedProps,l=e.stateNode;try{l.nodeValue=a}catch(_){ae(e,e.return,_)}}break;case 3:if(wu=null,n=xt,xt=Mu(t.containerInfo),Ze(t,e),xt=n,ke(e),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Na(t.containerInfo)}catch(_){ae(e,e.return,_)}Tc&&(Tc=!1,lr(e));break;case 4:a=xt,xt=Mu(e.stateNode.containerInfo),Ze(t,e),ke(e),xt=a;break;case 12:Ze(t,e),ke(e);break;case 31:Ze(t,e),ke(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,yu(e,a)));break;case 13:Ze(t,e),ke(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(gu=$e()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,yu(e,a)));break;case 22:n=e.memoizedState!==null;var f=l!==null&&l.memoizedState!==null,y=Lt,b=Ee;if(Lt=y||n,Ee=b||f,Ze(t,e),Ee=b,Lt=y,ke(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(l===null||f||Lt||Ee||Gl(e)),l=null,t=e;;){if(t.tag===5||t.tag===26){if(l===null){f=l=t;try{if(u=f.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var T=f.memoizedProps.style,v=T!=null&&T.hasOwnProperty("display")?T.display:null;c.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(_){ae(f,f.return,_)}}}else if(t.tag===6){if(l===null){f=t;try{f.stateNode.nodeValue=n?"":f.memoizedProps}catch(_){ae(f,f.return,_)}}}else if(t.tag===18){if(l===null){f=t;try{var g=f.stateNode;n?Zr(g,!0):Zr(f.stateNode,!1)}catch(_){ae(f,f.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;l===t&&(l=null),t=t.return}l===t&&(l=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,yu(e,l))));break;case 19:Ze(t,e),ke(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,yu(e,a)));break;case 30:break;case 21:break;default:Ze(t,e),ke(e)}}function ke(e){var t=e.flags;if(t&2){try{for(var l,a=e.return;a!==null;){if(Ko(a)){l=a;break}a=a.return}if(l==null)throw Error(d(160));switch(l.tag){case 27:var n=l.stateNode,u=xc(e);hu(e,u,n);break;case 5:var i=l.stateNode;l.flags&32&&(Wl(i,""),l.flags&=-33);var c=xc(e);hu(e,c,i);break;case 3:case 4:var f=l.stateNode.containerInfo,y=xc(e);Sc(e,y,f);break;default:throw Error(d(161))}}catch(b){ae(e,e.return,b)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lr(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;lr(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Zt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Fo(e,t.alternate,t),t=t.sibling}function Gl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sl(4,t,t.return),Gl(t);break;case 1:Dt(t,t.return);var l=t.stateNode;typeof l.componentWillUnmount=="function"&&Zo(t,t.return,l),Gl(t);break;case 27:yn(t.stateNode);case 26:case 5:Dt(t,t.return),Gl(t);break;case 22:t.memoizedState===null&&Gl(t);break;case 30:Gl(t);break;default:Gl(t)}e=e.sibling}}function kt(e,t,l){for(l=l&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,u=t,i=u.flags;switch(u.tag){case 0:case 11:case 15:kt(n,u,l),nn(4,u);break;case 1:if(kt(n,u,l),a=u,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(y){ae(a,a.return,y)}if(a=u,n=a.updateQueue,n!==null){var c=a.stateNode;try{var f=n.shared.hiddenCallbacks;if(f!==null)for(n.shared.hiddenCallbacks=null,n=0;n<f.length;n++)js(f[n],c)}catch(y){ae(a,a.return,y)}}l&&i&64&&Vo(u),un(u,u.return);break;case 27:Jo(u);case 26:case 5:kt(n,u,l),l&&a===null&&i&4&&ko(u),un(u,u.return);break;case 12:kt(n,u,l);break;case 31:kt(n,u,l),l&&i&4&&Po(n,u);break;case 13:kt(n,u,l),l&&i&4&&er(n,u);break;case 22:u.memoizedState===null&&kt(n,u,l),un(u,u.return);break;case 30:break;default:kt(n,u,l)}t=t.sibling}}function Ec(e,t){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&Za(l))}function Ac(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Za(e))}function St(e,t,l,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ar(e,t,l,a),t=t.sibling}function ar(e,t,l,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:St(e,t,l,a),n&2048&&nn(9,t);break;case 1:St(e,t,l,a);break;case 3:St(e,t,l,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Za(e)));break;case 12:if(n&2048){St(e,t,l,a),e=t.stateNode;try{var u=t.memoizedProps,i=u.id,c=u.onPostCommit;typeof c=="function"&&c(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(f){ae(t,t.return,f)}}else St(e,t,l,a);break;case 31:St(e,t,l,a);break;case 13:St(e,t,l,a);break;case 23:break;case 22:u=t.stateNode,i=t.alternate,t.memoizedState!==null?u._visibility&2?St(e,t,l,a):cn(e,t):u._visibility&2?St(e,t,l,a):(u._visibility|=2,ya(e,t,l,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Ec(i,t);break;case 24:St(e,t,l,a),n&2048&&Ac(t.alternate,t);break;default:St(e,t,l,a)}}function ya(e,t,l,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,i=t,c=l,f=a,y=i.flags;switch(i.tag){case 0:case 11:case 15:ya(u,i,c,f,n),nn(8,i);break;case 23:break;case 22:var b=i.stateNode;i.memoizedState!==null?b._visibility&2?ya(u,i,c,f,n):cn(u,i):(b._visibility|=2,ya(u,i,c,f,n)),n&&y&2048&&Ec(i.alternate,i);break;case 24:ya(u,i,c,f,n),n&&y&2048&&Ac(i.alternate,i);break;default:ya(u,i,c,f,n)}t=t.sibling}}function cn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var l=e,a=t,n=a.flags;switch(a.tag){case 22:cn(l,a),n&2048&&Ec(a.alternate,a);break;case 24:cn(l,a),n&2048&&Ac(a.alternate,a);break;default:cn(l,a)}t=t.sibling}}var fn=8192;function va(e,t,l){if(e.subtreeFlags&fn)for(e=e.child;e!==null;)nr(e,t,l),e=e.sibling}function nr(e,t,l){switch(e.tag){case 26:va(e,t,l),e.flags&fn&&e.memoizedState!==null&&Kh(l,xt,e.memoizedState,e.memoizedProps);break;case 5:va(e,t,l);break;case 3:case 4:var a=xt;xt=Mu(e.stateNode.containerInfo),va(e,t,l),xt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=fn,fn=16777216,va(e,t,l),fn=a):va(e,t,l));break;default:va(e,t,l)}}function ur(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function sn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ne=a,cr(a,e)}ur(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ir(e),e=e.sibling}function ir(e){switch(e.tag){case 0:case 11:case 15:sn(e),e.flags&2048&&sl(9,e,e.return);break;case 3:sn(e);break;case 12:sn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,vu(e)):sn(e);break;default:sn(e)}}function vu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var l=0;l<t.length;l++){var a=t[l];Ne=a,cr(a,e)}ur(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:sl(8,t,t.return),vu(t);break;case 22:l=t.stateNode,l._visibility&2&&(l._visibility&=-3,vu(t));break;default:vu(t)}e=e.sibling}}function cr(e,t){for(;Ne!==null;){var l=Ne;switch(l.tag){case 0:case 11:case 15:sl(8,l,t);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Za(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ne=a;else e:for(l=e;Ne!==null;){a=Ne;var n=a.sibling,u=a.return;if($o(a),a===l){Ne=null;break e}if(n!==null){n.return=u,Ne=n;break e}Ne=u}}}var fh={getCacheForType:function(e){var t=Me(xe),l=t.data.get(e);return l===void 0&&(l=e(),t.data.set(e,l)),l},cacheSignal:function(){return Me(xe).controller.signal}},sh=typeof WeakMap=="function"?WeakMap:Map,ee=0,oe=null,Z=null,K=0,le=0,nt=null,ol=!1,ga=!1,zc=!1,Kt=0,ve=0,rl=0,Xl=0,Nc=0,ut=0,pa=0,on=null,Ke=null,Dc=!1,gu=0,fr=0,pu=1/0,bu=null,dl=null,Ae=0,ml=null,ba=null,Jt=0,_c=0,Mc=null,sr=null,rn=0,Cc=null;function it(){return(ee&2)!==0&&K!==0?K&-K:x.T!==null?Hc():Af()}function or(){if(ut===0)if((K&536870912)===0||F){var e=Dn;Dn<<=1,(Dn&3932160)===0&&(Dn=262144),ut=e}else ut=536870912;return e=lt.current,e!==null&&(e.flags|=32),ut}function Je(e,t,l){(e===oe&&(le===2||le===9)||e.cancelPendingCommit!==null)&&(xa(e,0),hl(e,K,ut,!1)),wa(e,l),((ee&2)===0||e!==oe)&&(e===oe&&((ee&2)===0&&(Xl|=l),ve===4&&hl(e,K,ut,!1)),_t(e))}function rr(e,t,l){if((ee&6)!==0)throw Error(d(327));var a=!l&&(t&127)===0&&(t&e.expiredLanes)===0||Ca(e,t),n=a?dh(e,t):jc(e,t,!0),u=a;do{if(n===0){ga&&!a&&hl(e,t,0,!1);break}else{if(l=e.current.alternate,u&&!oh(l)){n=jc(e,t,!1),u=!1;continue}if(n===2){if(u=t,e.errorRecoveryDisabledLanes&u)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var c=e;n=on;var f=c.current.memoizedState.isDehydrated;if(f&&(xa(c,i).flags|=256),i=jc(c,i,!1),i!==2){if(zc&&!f){c.errorRecoveryDisabledLanes|=u,Xl|=u,n=4;break e}u=Ke,Ke=n,u!==null&&(Ke===null?Ke=u:Ke.push.apply(Ke,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){xa(e,0),hl(e,t,0,!0);break}e:{switch(a=e,u=n,u){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:hl(a,t,ut,!ol);break e;case 2:Ke=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(n=gu+300-$e(),10<n)){if(hl(a,t,ut,!ol),Mn(a,0,!0)!==0)break e;Jt=t,a.timeoutHandle=Qr(dr.bind(null,a,l,Ke,bu,Dc,t,ut,Xl,pa,ol,u,"Throttled",-0,0),n);break e}dr(a,l,Ke,bu,Dc,t,ut,Xl,pa,ol,u,null,-0,0)}}break}while(!0);_t(e)}function dr(e,t,l,a,n,u,i,c,f,y,b,T,v,g){if(e.timeoutHandle=-1,T=t.subtreeFlags,T&8192||(T&16785408)===16785408){T={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ot},nr(t,u,T);var _=(u&62914560)===u?gu-$e():(u&4194048)===u?fr-$e():0;if(_=Jh(T,_),_!==null){Jt=u,e.cancelPendingCommit=_(xr.bind(null,e,t,u,l,a,n,i,c,f,b,T,null,v,g)),hl(e,u,i,!y);return}}xr(e,t,u,l,a,n,i,c,f)}function oh(e){for(var t=e;;){var l=t.tag;if((l===0||l===11||l===15)&&t.flags&16384&&(l=t.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],u=n.getSnapshot;n=n.value;try{if(!et(u(),n))return!1}catch{return!1}}if(l=t.child,t.subtreeFlags&16384&&l!==null)l.return=t,t=l;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hl(e,t,l,a){t&=~Nc,t&=~Xl,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var u=31-Pe(n),i=1<<u;a[u]=-1,n&=~i}l!==0&&Sf(e,l,t)}function xu(){return(ee&6)===0?(dn(0),!1):!0}function wc(){if(Z!==null){if(le===0)var e=Z.return;else e=Z,Bt=jl=null,Ki(e),oa=null,Ka=0,e=Z;for(;e!==null;)Lo(e.alternate,e),e=e.return;Z=null}}function xa(e,t){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,Ch(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Jt=0,wc(),oe=e,Z=l=Ut(e.current,null),K=t,le=0,nt=null,ol=!1,ga=Ca(e,t),zc=!1,pa=ut=Nc=Xl=rl=ve=0,Ke=on=null,Dc=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-Pe(a),u=1<<n;t|=e[n],a&=~u}return Kt=t,Xn(),l}function mr(e,t){X=null,x.H=tn,t===sa||t===Wn?(t=_s(),le=3):t===Ui?(t=_s(),le=4):le=t===sc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nt=t,Z===null&&(ve=1,su(e,rt(t,e.current)))}function hr(){var e=lt.current;return e===null?!0:(K&4194048)===K?yt===null:(K&62914560)===K||(K&536870912)!==0?e===yt:!1}function yr(){var e=x.H;return x.H=tn,e===null?tn:e}function vr(){var e=x.A;return x.A=fh,e}function Su(){ve=4,ol||(K&4194048)!==K&&lt.current!==null||(ga=!0),(rl&134217727)===0&&(Xl&134217727)===0||oe===null||hl(oe,K,ut,!1)}function jc(e,t,l){var a=ee;ee|=2;var n=yr(),u=vr();(oe!==e||K!==t)&&(bu=null,xa(e,t)),t=!1;var i=ve;e:do try{if(le!==0&&Z!==null){var c=Z,f=nt;switch(le){case 8:wc(),i=6;break e;case 3:case 2:case 9:case 6:lt.current===null&&(t=!0);var y=le;if(le=0,nt=null,Sa(e,c,f,y),l&&ga){i=0;break e}break;default:y=le,le=0,nt=null,Sa(e,c,f,y)}}rh(),i=ve;break}catch(b){mr(e,b)}while(!0);return t&&e.shellSuspendCounter++,Bt=jl=null,ee=a,x.H=n,x.A=u,Z===null&&(oe=null,K=0,Xn()),i}function rh(){for(;Z!==null;)gr(Z)}function dh(e,t){var l=ee;ee|=2;var a=yr(),n=vr();oe!==e||K!==t?(bu=null,pu=$e()+500,xa(e,t)):ga=Ca(e,t);e:do try{if(le!==0&&Z!==null){t=Z;var u=nt;t:switch(le){case 1:le=0,nt=null,Sa(e,t,u,1);break;case 2:case 9:if(Ns(u)){le=0,nt=null,pr(t);break}t=function(){le!==2&&le!==9||oe!==e||(le=7),_t(e)},u.then(t,t);break e;case 3:le=7;break e;case 4:le=5;break e;case 7:Ns(u)?(le=0,nt=null,pr(t)):(le=0,nt=null,Sa(e,t,u,7));break;case 5:var i=null;switch(Z.tag){case 26:i=Z.memoizedState;case 5:case 27:var c=Z;if(i?ad(i):c.stateNode.complete){le=0,nt=null;var f=c.sibling;if(f!==null)Z=f;else{var y=c.return;y!==null?(Z=y,Tu(y)):Z=null}break t}}le=0,nt=null,Sa(e,t,u,5);break;case 6:le=0,nt=null,Sa(e,t,u,6);break;case 8:wc(),ve=6;break e;default:throw Error(d(462))}}mh();break}catch(b){mr(e,b)}while(!0);return Bt=jl=null,x.H=a,x.A=n,ee=l,Z!==null?0:(oe=null,K=0,Xn(),ve)}function mh(){for(;Z!==null&&!Hd();)gr(Z)}function gr(e){var t=Xo(e.alternate,e,Kt);e.memoizedProps=e.pendingProps,t===null?Tu(e):Z=t}function pr(e){var t=e,l=t.alternate;switch(t.tag){case 15:case 0:t=Uo(l,t,t.pendingProps,t.type,void 0,K);break;case 11:t=Uo(l,t,t.pendingProps,t.type.render,t.ref,K);break;case 5:Ki(t);default:Lo(l,t),t=Z=ys(t,Kt),t=Xo(l,t,Kt)}e.memoizedProps=e.pendingProps,t===null?Tu(e):Z=t}function Sa(e,t,l,a){Bt=jl=null,Ki(t),oa=null,Ka=0;var n=t.return;try{if(th(e,n,t,l,K)){ve=1,su(e,rt(l,e.current)),Z=null;return}}catch(u){if(n!==null)throw Z=n,u;ve=1,su(e,rt(l,e.current)),Z=null;return}t.flags&32768?(F||a===1?e=!0:ga||(K&536870912)!==0?e=!1:(ol=e=!0,(a===2||a===9||a===3||a===6)&&(a=lt.current,a!==null&&a.tag===13&&(a.flags|=16384))),br(t,e)):Tu(t)}function Tu(e){var t=e;do{if((t.flags&32768)!==0){br(t,ol);return}e=t.return;var l=nh(t.alternate,t,Kt);if(l!==null){Z=l;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);ve===0&&(ve=5)}function br(e,t){do{var l=uh(e.alternate,e);if(l!==null){l.flags&=32767,Z=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=l}while(e!==null);ve=6,Z=null}function xr(e,t,l,a,n,u,i,c,f){e.cancelPendingCommit=null;do Eu();while(Ae!==0);if((ee&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(u=t.lanes|t.childLanes,u|=xi,kd(e,l,u,i,c,f),e===oe&&(Z=oe=null,K=0),ba=t,ml=e,Jt=l,_c=u,Mc=n,sr=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,gh(zn,function(){return zr(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=x.T,x.T=null,n=N.p,N.p=2,i=ee,ee|=4;try{ih(e,t,l)}finally{ee=i,N.p=n,x.T=a}}Ae=1,Sr(),Tr(),Er()}}function Sr(){if(Ae===1){Ae=0;var e=ml,t=ba,l=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||l){l=x.T,x.T=null;var a=N.p;N.p=2;var n=ee;ee|=4;try{tr(t,e);var u=Vc,i=is(e.containerInfo),c=u.focusedElem,f=u.selectionRange;if(i!==c&&c&&c.ownerDocument&&us(c.ownerDocument.documentElement,c)){if(f!==null&&yi(c)){var y=f.start,b=f.end;if(b===void 0&&(b=y),"selectionStart"in c)c.selectionStart=y,c.selectionEnd=Math.min(b,c.value.length);else{var T=c.ownerDocument||document,v=T&&T.defaultView||window;if(v.getSelection){var g=v.getSelection(),_=c.textContent.length,B=Math.min(f.start,_),fe=f.end===void 0?B:Math.min(f.end,_);!g.extend&&B>fe&&(i=fe,fe=B,B=i);var m=ns(c,B),o=ns(c,fe);if(m&&o&&(g.rangeCount!==1||g.anchorNode!==m.node||g.anchorOffset!==m.offset||g.focusNode!==o.node||g.focusOffset!==o.offset)){var h=T.createRange();h.setStart(m.node,m.offset),g.removeAllRanges(),B>fe?(g.addRange(h),g.extend(o.node,o.offset)):(h.setEnd(o.node,o.offset),g.addRange(h))}}}}for(T=[],g=c;g=g.parentNode;)g.nodeType===1&&T.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<T.length;c++){var S=T[c];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Uu=!!Lc,Vc=Lc=null}finally{ee=n,N.p=a,x.T=l}}e.current=t,Ae=2}}function Tr(){if(Ae===2){Ae=0;var e=ml,t=ba,l=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||l){l=x.T,x.T=null;var a=N.p;N.p=2;var n=ee;ee|=4;try{Fo(e,t.alternate,t)}finally{ee=n,N.p=a,x.T=l}}Ae=3}}function Er(){if(Ae===4||Ae===3){Ae=0,Bd();var e=ml,t=ba,l=Jt,a=sr;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ae=5:(Ae=0,ba=ml=null,Ar(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(dl=null),Fu(l),t=t.stateNode,Ie&&typeof Ie.onCommitFiberRoot=="function")try{Ie.onCommitFiberRoot(Ma,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=x.T,n=N.p,N.p=2,x.T=null;try{for(var u=e.onRecoverableError,i=0;i<a.length;i++){var c=a[i];u(c.value,{componentStack:c.stack})}}finally{x.T=t,N.p=n}}(Jt&3)!==0&&Eu(),_t(e),n=e.pendingLanes,(l&261930)!==0&&(n&42)!==0?e===Cc?rn++:(rn=0,Cc=e):rn=0,dn(0)}}function Ar(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Za(t)))}function Eu(){return Sr(),Tr(),Er(),zr()}function zr(){if(Ae!==5)return!1;var e=ml,t=_c;_c=0;var l=Fu(Jt),a=x.T,n=N.p;try{N.p=32>l?32:l,x.T=null,l=Mc,Mc=null;var u=ml,i=Jt;if(Ae=0,ba=ml=null,Jt=0,(ee&6)!==0)throw Error(d(331));var c=ee;if(ee|=4,ir(u.current),ar(u,u.current,i,l),ee=c,dn(0,!1),Ie&&typeof Ie.onPostCommitFiberRoot=="function")try{Ie.onPostCommitFiberRoot(Ma,u)}catch{}return!0}finally{N.p=n,x.T=a,Ar(e,t)}}function Nr(e,t,l){t=rt(l,t),t=fc(e.stateNode,t,2),e=il(e,t,2),e!==null&&(wa(e,2),_t(e))}function ae(e,t,l){if(e.tag===3)Nr(e,e,l);else for(;t!==null;){if(t.tag===3){Nr(t,e,l);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(dl===null||!dl.has(a))){e=rt(l,e),l=Do(2),a=il(t,l,2),a!==null&&(_o(l,a,t,e),wa(a,2),_t(a));break}}t=t.return}}function Oc(e,t,l){var a=e.pingCache;if(a===null){a=e.pingCache=new sh;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(l)||(zc=!0,n.add(l),e=hh.bind(null,e,t,l),t.then(e,e))}function hh(e,t,l){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,oe===e&&(K&l)===l&&(ve===4||ve===3&&(K&62914560)===K&&300>$e()-gu?(ee&2)===0&&xa(e,0):Nc|=l,pa===K&&(pa=0)),_t(e)}function Dr(e,t){t===0&&(t=xf()),e=Ml(e,t),e!==null&&(wa(e,t),_t(e))}function yh(e){var t=e.memoizedState,l=0;t!==null&&(l=t.retryLane),Dr(e,l)}function vh(e,t){var l=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(d(314))}a!==null&&a.delete(t),Dr(e,l)}function gh(e,t){return ku(e,t)}var Au=null,Ta=null,Rc=!1,zu=!1,Uc=!1,yl=0;function _t(e){e!==Ta&&e.next===null&&(Ta===null?Au=Ta=e:Ta=Ta.next=e),zu=!0,Rc||(Rc=!0,bh())}function dn(e,t){if(!Uc&&zu){Uc=!0;do for(var l=!1,a=Au;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var u=0;else{var i=a.suspendedLanes,c=a.pingedLanes;u=(1<<31-Pe(42|e)+1)-1,u&=n&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,wr(a,u))}else u=K,u=Mn(a,a===oe?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||Ca(a,u)||(l=!0,wr(a,u));a=a.next}while(l);Uc=!1}}function ph(){_r()}function _r(){zu=Rc=!1;var e=0;yl!==0&&Mh()&&(e=yl);for(var t=$e(),l=null,a=Au;a!==null;){var n=a.next,u=Mr(a,t);u===0?(a.next=null,l===null?Au=n:l.next=n,n===null&&(Ta=l)):(l=a,(e!==0||(u&3)!==0)&&(zu=!0)),a=n}Ae!==0&&Ae!==5||dn(e),yl!==0&&(yl=0)}function Mr(e,t){for(var l=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var i=31-Pe(u),c=1<<i,f=n[i];f===-1?((c&l)===0||(c&a)!==0)&&(n[i]=Zd(c,t)):f<=t&&(e.expiredLanes|=c),u&=~c}if(t=oe,l=K,l=Mn(e,e===t?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,l===0||e===t&&(le===2||le===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ku(a),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||Ca(e,l)){if(t=l&-l,t===e.callbackPriority)return t;switch(a!==null&&Ku(a),Fu(l)){case 2:case 8:l=pf;break;case 32:l=zn;break;case 268435456:l=bf;break;default:l=zn}return a=Cr.bind(null,e),l=ku(l,a),e.callbackPriority=t,e.callbackNode=l,t}return a!==null&&a!==null&&Ku(a),e.callbackPriority=2,e.callbackNode=null,2}function Cr(e,t){if(Ae!==0&&Ae!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(Eu()&&e.callbackNode!==l)return null;var a=K;return a=Mn(e,e===oe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(rr(e,a,t),Mr(e,$e()),e.callbackNode!=null&&e.callbackNode===l?Cr.bind(null,e):null)}function wr(e,t){if(Eu())return null;rr(e,t,!0)}function bh(){wh(function(){(ee&6)!==0?ku(gf,ph):_r()})}function Hc(){if(yl===0){var e=ca;e===0&&(e=Nn,Nn<<=1,(Nn&261888)===0&&(Nn=256)),yl=e}return yl}function jr(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:On(""+e)}function Or(e,t){var l=t.ownerDocument.createElement("input");return l.name=t.name,l.value=t.value,e.id&&l.setAttribute("form",e.id),t.parentNode.insertBefore(l,t),e=new FormData(e),l.parentNode.removeChild(l),e}function xh(e,t,l,a,n){if(t==="submit"&&l&&l.stateNode===n){var u=jr((n[Qe]||null).action),i=a.submitter;i&&(t=(t=i[Qe]||null)?jr(t.formAction):i.getAttribute("formAction"),t!==null&&(u=t,i=null));var c=new Bn("action","action",null,a,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(yl!==0){var f=i?Or(n,i):new FormData(n);lc(l,{pending:!0,data:f,method:n.method,action:u},null,f)}}else typeof u=="function"&&(c.preventDefault(),f=i?Or(n,i):new FormData(n),lc(l,{pending:!0,data:f,method:n.method,action:u},u,f))},currentTarget:n}]})}}for(var Bc=0;Bc<bi.length;Bc++){var qc=bi[Bc],Sh=qc.toLowerCase(),Th=qc[0].toUpperCase()+qc.slice(1);bt(Sh,"on"+Th)}bt(ss,"onAnimationEnd"),bt(os,"onAnimationIteration"),bt(rs,"onAnimationStart"),bt("dblclick","onDoubleClick"),bt("focusin","onFocus"),bt("focusout","onBlur"),bt(qm,"onTransitionRun"),bt(Ym,"onTransitionStart"),bt(Gm,"onTransitionCancel"),bt(ds,"onTransitionEnd"),Kl("onMouseEnter",["mouseout","mouseover"]),Kl("onMouseLeave",["mouseout","mouseover"]),Kl("onPointerEnter",["pointerout","pointerover"]),Kl("onPointerLeave",["pointerout","pointerover"]),zl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zl("onBeforeInput",["compositionend","keypress","textInput","paste"]),zl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Eh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function Rr(e,t){t=(t&4)!==0;for(var l=0;l<e.length;l++){var a=e[l],n=a.event;a=a.listeners;e:{var u=void 0;if(t)for(var i=a.length-1;0<=i;i--){var c=a[i],f=c.instance,y=c.currentTarget;if(c=c.listener,f!==u&&n.isPropagationStopped())break e;u=c,n.currentTarget=y;try{u(n)}catch(b){Gn(b)}n.currentTarget=null,u=f}else for(i=0;i<a.length;i++){if(c=a[i],f=c.instance,y=c.currentTarget,c=c.listener,f!==u&&n.isPropagationStopped())break e;u=c,n.currentTarget=y;try{u(n)}catch(b){Gn(b)}n.currentTarget=null,u=f}}}}function k(e,t){var l=t[$u];l===void 0&&(l=t[$u]=new Set);var a=e+"__bubble";l.has(a)||(Ur(t,e,2,!1),l.add(a))}function Yc(e,t,l){var a=0;t&&(a|=4),Ur(l,e,a,t)}var Nu="_reactListening"+Math.random().toString(36).slice(2);function Gc(e){if(!e[Nu]){e[Nu]=!0,Df.forEach(function(l){l!=="selectionchange"&&(Eh.has(l)||Yc(l,!1,e),Yc(l,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nu]||(t[Nu]=!0,Yc("selectionchange",!1,t))}}function Ur(e,t,l,a){switch(od(t)){case 2:var n=$h;break;case 8:n=Ih;break;default:n=tf}l=n.bind(null,t,l,e),n=void 0,!ii||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,l,{capture:!0,passive:n}):e.addEventListener(t,l,!0):n!==void 0?e.addEventListener(t,l,{passive:n}):e.addEventListener(t,l,!1)}function Xc(e,t,l,a,n){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===n)break;if(i===4)for(i=a.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;c!==null;){if(i=Vl(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){a=u=i;continue e}c=c.parentNode}}a=a.return}Yf(function(){var y=u,b=ni(l),T=[];e:{var v=ms.get(e);if(v!==void 0){var g=Bn,_=e;switch(e){case"keypress":if(Un(l)===0)break e;case"keydown":case"keyup":g=vm;break;case"focusin":_="focus",g=oi;break;case"focusout":_="blur",g=oi;break;case"beforeblur":case"afterblur":g=oi;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=nm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=bm;break;case ss:case os:case rs:g=cm;break;case ds:g=Sm;break;case"scroll":case"scrollend":g=lm;break;case"wheel":g=Em;break;case"copy":case"cut":case"paste":g=sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Vf;break;case"toggle":case"beforetoggle":g=zm}var B=(t&4)!==0,fe=!B&&(e==="scroll"||e==="scrollend"),m=B?v!==null?v+"Capture":null:v;B=[];for(var o=y,h;o!==null;){var S=o;if(h=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||h===null||m===null||(S=Ra(o,m),S!=null&&B.push(hn(o,S,h))),fe)break;o=o.return}0<B.length&&(v=new g(v,_,null,l,b),T.push({event:v,listeners:B}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",v&&l!==ai&&(_=l.relatedTarget||l.fromElement)&&(Vl(_)||_[Ll]))break e;if((g||v)&&(v=b.window===b?b:(v=b.ownerDocument)?v.defaultView||v.parentWindow:window,g?(_=l.relatedTarget||l.toElement,g=y,_=_?Vl(_):null,_!==null&&(fe=z(_),B=_.tag,_!==fe||B!==5&&B!==27&&B!==6)&&(_=null)):(g=null,_=y),g!==_)){if(B=Qf,S="onMouseLeave",m="onMouseEnter",o="mouse",(e==="pointerout"||e==="pointerover")&&(B=Vf,S="onPointerLeave",m="onPointerEnter",o="pointer"),fe=g==null?v:Oa(g),h=_==null?v:Oa(_),v=new B(S,o+"leave",g,l,b),v.target=fe,v.relatedTarget=h,S=null,Vl(b)===y&&(B=new B(m,o+"enter",_,l,b),B.target=h,B.relatedTarget=fe,S=B),fe=S,g&&_)t:{for(B=Ah,m=g,o=_,h=0,S=m;S;S=B(S))h++;S=0;for(var U=o;U;U=B(U))S++;for(;0<h-S;)m=B(m),h--;for(;0<S-h;)o=B(o),S--;for(;h--;){if(m===o||o!==null&&m===o.alternate){B=m;break t}m=B(m),o=B(o)}B=null}else B=null;g!==null&&Hr(T,v,g,B,!1),_!==null&&fe!==null&&Hr(T,fe,_,B,!0)}}e:{if(v=y?Oa(y):window,g=v.nodeName&&v.nodeName.toLowerCase(),g==="select"||g==="input"&&v.type==="file")var I=If;else if(Ff(v))if(Pf)I=Um;else{I=Om;var j=jm}else g=v.nodeName,!g||g.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?y&&li(y.elementType)&&(I=If):I=Rm;if(I&&(I=I(e,y))){$f(T,I,l,b);break e}j&&j(e,v,y),e==="focusout"&&y&&v.type==="number"&&y.memoizedProps.value!=null&&ti(v,"number",v.value)}switch(j=y?Oa(y):window,e){case"focusin":(Ff(j)||j.contentEditable==="true")&&(Pl=j,vi=y,Qa=null);break;case"focusout":Qa=vi=Pl=null;break;case"mousedown":gi=!0;break;case"contextmenu":case"mouseup":case"dragend":gi=!1,cs(T,l,b);break;case"selectionchange":if(Bm)break;case"keydown":case"keyup":cs(T,l,b)}var Q;if(di)e:{switch(e){case"compositionstart":var J="onCompositionStart";break e;case"compositionend":J="onCompositionEnd";break e;case"compositionupdate":J="onCompositionUpdate";break e}J=void 0}else Il?Jf(e,l)&&(J="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(J="onCompositionStart");J&&(Zf&&l.locale!=="ko"&&(Il||J!=="onCompositionStart"?J==="onCompositionEnd"&&Il&&(Q=Gf()):(Pt=b,ci="value"in Pt?Pt.value:Pt.textContent,Il=!0)),j=Du(y,J),0<j.length&&(J=new Lf(J,e,null,l,b),T.push({event:J,listeners:j}),Q?J.data=Q:(Q=Wf(l),Q!==null&&(J.data=Q)))),(Q=Dm?_m(e,l):Mm(e,l))&&(J=Du(y,"onBeforeInput"),0<J.length&&(j=new Lf("onBeforeInput","beforeinput",null,l,b),T.push({event:j,listeners:J}),j.data=Q)),xh(T,e,y,l,b)}Rr(T,t)})}function hn(e,t,l){return{instance:e,listener:t,currentTarget:l}}function Du(e,t){for(var l=t+"Capture",a=[];e!==null;){var n=e,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=Ra(e,l),n!=null&&a.unshift(hn(e,n,u)),n=Ra(e,t),n!=null&&a.push(hn(e,n,u))),e.tag===3)return a;e=e.return}return[]}function Ah(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hr(e,t,l,a,n){for(var u=t._reactName,i=[];l!==null&&l!==a;){var c=l,f=c.alternate,y=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||y===null||(f=y,n?(y=Ra(l,u),y!=null&&i.unshift(hn(l,y,f))):n||(y=Ra(l,u),y!=null&&i.push(hn(l,y,f)))),l=l.return}i.length!==0&&e.push({event:t,listeners:i})}var zh=/\r\n?/g,Nh=/\u0000|\uFFFD/g;function Br(e){return(typeof e=="string"?e:""+e).replace(zh,`
`).replace(Nh,"")}function qr(e,t){return t=Br(t),Br(e)===t}function ce(e,t,l,a,n,u){switch(l){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Wl(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Wl(e,""+a);break;case"className":wn(e,"class",a);break;case"tabIndex":wn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":wn(e,l,a);break;case"style":Bf(e,a,u);break;case"data":if(t!=="object"){wn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||l!=="href")){e.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=On(""+a),e.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(t!=="input"&&ce(e,t,"name",n.name,n,null),ce(e,t,"formEncType",n.formEncType,n,null),ce(e,t,"formMethod",n.formMethod,n,null),ce(e,t,"formTarget",n.formTarget,n,null)):(ce(e,t,"encType",n.encType,n,null),ce(e,t,"method",n.method,n,null),ce(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(l);break}a=On(""+a),e.setAttribute(l,a);break;case"onClick":a!=null&&(e.onclick=Ot);break;case"onScroll":a!=null&&k("scroll",e);break;case"onScrollEnd":a!=null&&k("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=l}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}l=On(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""+a):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":a===!0?e.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(l,a):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(l,a):e.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(l):e.setAttribute(l,a);break;case"popover":k("beforetoggle",e),k("toggle",e),Cn(e,"popover",a);break;case"xlinkActuate":jt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":jt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":jt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":jt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":jt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":jt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":jt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":jt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":jt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Cn(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=em.get(l)||l,Cn(e,l,a))}}function Qc(e,t,l,a,n,u){switch(l){case"style":Bf(e,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=l}}break;case"children":typeof a=="string"?Wl(e,a):(typeof a=="number"||typeof a=="bigint")&&Wl(e,""+a);break;case"onScroll":a!=null&&k("scroll",e);break;case"onScrollEnd":a!=null&&k("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ot);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_f.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),t=l.slice(2,n?l.length-7:void 0),u=e[Qe]||null,u=u!=null?u[l]:null,typeof u=="function"&&e.removeEventListener(t,u,n),typeof a=="function")){typeof u!="function"&&u!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(t,a,n);break e}l in e?e[l]=a:a===!0?e.setAttribute(l,""):Cn(e,l,a)}}}function we(e,t,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":k("error",e),k("load",e);var a=!1,n=!1,u;for(u in l)if(l.hasOwnProperty(u)){var i=l[u];if(i!=null)switch(u){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:ce(e,t,u,i,l,null)}}n&&ce(e,t,"srcSet",l.srcSet,l,null),a&&ce(e,t,"src",l.src,l,null);return;case"input":k("invalid",e);var c=u=i=n=null,f=null,y=null;for(a in l)if(l.hasOwnProperty(a)){var b=l[a];if(b!=null)switch(a){case"name":n=b;break;case"type":i=b;break;case"checked":f=b;break;case"defaultChecked":y=b;break;case"value":u=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(137,t));break;default:ce(e,t,a,b,l,null)}}Of(e,u,c,f,y,i,n,!1);return;case"select":k("invalid",e),a=i=u=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":a=c;default:ce(e,t,n,c,l,null)}t=u,l=i,e.multiple=!!a,t!=null?Jl(e,!!a,t,!1):l!=null&&Jl(e,!!a,l,!0);return;case"textarea":k("invalid",e),u=n=a=null;for(i in l)if(l.hasOwnProperty(i)&&(c=l[i],c!=null))switch(i){case"value":a=c;break;case"defaultValue":n=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(d(91));break;default:ce(e,t,i,c,l,null)}Uf(e,a,n,u);return;case"option":for(f in l)if(l.hasOwnProperty(f)&&(a=l[f],a!=null))switch(f){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ce(e,t,f,a,l,null)}return;case"dialog":k("beforetoggle",e),k("toggle",e),k("cancel",e),k("close",e);break;case"iframe":case"object":k("load",e);break;case"video":case"audio":for(a=0;a<mn.length;a++)k(mn[a],e);break;case"image":k("error",e),k("load",e);break;case"details":k("toggle",e);break;case"embed":case"source":case"link":k("error",e),k("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in l)if(l.hasOwnProperty(y)&&(a=l[y],a!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:ce(e,t,y,a,l,null)}return;default:if(li(t)){for(b in l)l.hasOwnProperty(b)&&(a=l[b],a!==void 0&&Qc(e,t,b,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&ce(e,t,c,a,l,null))}function Dh(e,t,l,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,c=null,f=null,y=null,b=null;for(g in l){var T=l[g];if(l.hasOwnProperty(g)&&T!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":f=T;default:a.hasOwnProperty(g)||ce(e,t,g,null,a,T)}}for(var v in a){var g=a[v];if(T=l[v],a.hasOwnProperty(v)&&(g!=null||T!=null))switch(v){case"type":u=g;break;case"name":n=g;break;case"checked":y=g;break;case"defaultChecked":b=g;break;case"value":i=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(137,t));break;default:g!==T&&ce(e,t,v,g,a,T)}}ei(e,i,c,f,y,b,u,n);return;case"select":g=i=c=v=null;for(u in l)if(f=l[u],l.hasOwnProperty(u)&&f!=null)switch(u){case"value":break;case"multiple":g=f;default:a.hasOwnProperty(u)||ce(e,t,u,null,a,f)}for(n in a)if(u=a[n],f=l[n],a.hasOwnProperty(n)&&(u!=null||f!=null))switch(n){case"value":v=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:u!==f&&ce(e,t,n,u,a,f)}t=c,l=i,a=g,v!=null?Jl(e,!!l,v,!1):!!a!=!!l&&(t!=null?Jl(e,!!l,t,!0):Jl(e,!!l,l?[]:"",!1));return;case"textarea":g=v=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ce(e,t,c,null,a,n)}for(i in a)if(n=a[i],u=l[i],a.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":v=n;break;case"defaultValue":g=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==u&&ce(e,t,i,n,a,u)}Rf(e,v,g);return;case"option":for(var _ in l)if(v=l[_],l.hasOwnProperty(_)&&v!=null&&!a.hasOwnProperty(_))switch(_){case"selected":e.selected=!1;break;default:ce(e,t,_,null,a,v)}for(f in a)if(v=a[f],g=l[f],a.hasOwnProperty(f)&&v!==g&&(v!=null||g!=null))switch(f){case"selected":e.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:ce(e,t,f,v,a,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var B in l)v=l[B],l.hasOwnProperty(B)&&v!=null&&!a.hasOwnProperty(B)&&ce(e,t,B,null,a,v);for(y in a)if(v=a[y],g=l[y],a.hasOwnProperty(y)&&v!==g&&(v!=null||g!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(d(137,t));break;default:ce(e,t,y,v,a,g)}return;default:if(li(t)){for(var fe in l)v=l[fe],l.hasOwnProperty(fe)&&v!==void 0&&!a.hasOwnProperty(fe)&&Qc(e,t,fe,void 0,a,v);for(b in a)v=a[b],g=l[b],!a.hasOwnProperty(b)||v===g||v===void 0&&g===void 0||Qc(e,t,b,v,a,g);return}}for(var m in l)v=l[m],l.hasOwnProperty(m)&&v!=null&&!a.hasOwnProperty(m)&&ce(e,t,m,null,a,v);for(T in a)v=a[T],g=l[T],!a.hasOwnProperty(T)||v===g||v==null&&g==null||ce(e,t,T,v,a,g)}function Yr(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _h(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],u=n.transferSize,i=n.initiatorType,c=n.duration;if(u&&c&&Yr(i)){for(i=0,c=n.responseEnd,a+=1;a<l.length;a++){var f=l[a],y=f.startTime;if(y>c)break;var b=f.transferSize,T=f.initiatorType;b&&Yr(T)&&(f=f.responseEnd,i+=b*(f<c?1:(c-y)/(f-y)))}if(--a,t+=8*(u+i)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lc=null,Vc=null;function _u(e){return e.nodeType===9?e:e.ownerDocument}function Gr(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xr(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Zc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kc=null;function Mh(){var e=window.event;return e&&e.type==="popstate"?e===kc?!1:(kc=e,!0):(kc=null,!1)}var Qr=typeof setTimeout=="function"?setTimeout:void 0,Ch=typeof clearTimeout=="function"?clearTimeout:void 0,Lr=typeof Promise=="function"?Promise:void 0,wh=typeof queueMicrotask=="function"?queueMicrotask:typeof Lr<"u"?function(e){return Lr.resolve(null).then(e).catch(jh)}:Qr;function jh(e){setTimeout(function(){throw e})}function vl(e){return e==="head"}function Vr(e,t){var l=t,a=0;do{var n=l.nextSibling;if(e.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){e.removeChild(n),Na(t);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")yn(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,yn(l);for(var u=l.firstChild;u;){var i=u.nextSibling,c=u.nodeName;u[ja]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&u.rel.toLowerCase()==="stylesheet"||l.removeChild(u),u=i}}else l==="body"&&yn(e.ownerDocument.body);l=n}while(l);Na(t)}function Zr(e,t){var l=e;e=0;do{var a=l.nextSibling;if(l.nodeType===1?t?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(t?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=a}while(l)}function Kc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var l=t;switch(t=t.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Kc(l),Iu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function Oh(e,t,l,a){for(;e.nodeType===1;){var n=l;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ja])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=vt(e.nextSibling),e===null)break}return null}function Rh(e,t,l){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=vt(e.nextSibling),e===null))return null;return e}function kr(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=vt(e.nextSibling),e===null))return null;return e}function Jc(e){return e.data==="$?"||e.data==="$~"}function Wc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Uh(e,t){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||l.readyState!=="loading")t();else{var a=function(){t(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Fc=null;function Kr(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(t===0)return vt(e.nextSibling);t--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||t++}e=e.nextSibling}return null}function Jr(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(t===0)return e;t--}else l!=="/$"&&l!=="/&"||t++}e=e.previousSibling}return null}function Wr(e,t,l){switch(t=_u(l),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function yn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Iu(e)}var gt=new Map,Fr=new Set;function Mu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Wt=N.d;N.d={f:Hh,r:Bh,D:qh,C:Yh,L:Gh,m:Xh,X:Lh,S:Qh,M:Vh};function Hh(){var e=Wt.f(),t=xu();return e||t}function Bh(e){var t=Zl(e);t!==null&&t.tag===5&&t.type==="form"?mo(t):Wt.r(e)}var Ea=typeof document>"u"?null:document;function $r(e,t,l){var a=Ea;if(a&&typeof t=="string"&&t){var n=st(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Fr.has(n)||(Fr.add(n),e={rel:e,crossOrigin:l,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),we(t,"link",e),ze(t),a.head.appendChild(t)))}}function qh(e){Wt.D(e),$r("dns-prefetch",e,null)}function Yh(e,t){Wt.C(e,t),$r("preconnect",e,t)}function Gh(e,t,l){Wt.L(e,t,l);var a=Ea;if(a&&e&&t){var n='link[rel="preload"][as="'+st(t)+'"]';t==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+st(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+st(l.imageSizes)+'"]')):n+='[href="'+st(e)+'"]';var u=n;switch(t){case"style":u=Aa(e);break;case"script":u=za(e)}gt.has(u)||(e=H({rel:"preload",href:t==="image"&&l&&l.imageSrcSet?void 0:e,as:t},l),gt.set(u,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(vn(u))||t==="script"&&a.querySelector(gn(u))||(t=a.createElement("link"),we(t,"link",e),ze(t),a.head.appendChild(t)))}}function Xh(e,t){Wt.m(e,t);var l=Ea;if(l&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+st(a)+'"][href="'+st(e)+'"]',u=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=za(e)}if(!gt.has(u)&&(e=H({rel:"modulepreload",href:e},t),gt.set(u,e),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(gn(u)))return}a=l.createElement("link"),we(a,"link",e),ze(a),l.head.appendChild(a)}}}function Qh(e,t,l){Wt.S(e,t,l);var a=Ea;if(a&&e){var n=kl(a).hoistableStyles,u=Aa(e);t=t||"default";var i=n.get(u);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(vn(u)))c.loading=5;else{e=H({rel:"stylesheet",href:e,"data-precedence":t},l),(l=gt.get(u))&&$c(e,l);var f=i=a.createElement("link");ze(f),we(f,"link",e),f._p=new Promise(function(y,b){f.onload=y,f.onerror=b}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Cu(i,t,a)}i={type:"stylesheet",instance:i,count:1,state:c},n.set(u,i)}}}function Lh(e,t){Wt.X(e,t);var l=Ea;if(l&&e){var a=kl(l).hoistableScripts,n=za(e),u=a.get(n);u||(u=l.querySelector(gn(n)),u||(e=H({src:e,async:!0},t),(t=gt.get(n))&&Ic(e,t),u=l.createElement("script"),ze(u),we(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function Vh(e,t){Wt.M(e,t);var l=Ea;if(l&&e){var a=kl(l).hoistableScripts,n=za(e),u=a.get(n);u||(u=l.querySelector(gn(n)),u||(e=H({src:e,async:!0,type:"module"},t),(t=gt.get(n))&&Ic(e,t),u=l.createElement("script"),ze(u),we(u,"link",e),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function Ir(e,t,l,a){var n=(n=V.current)?Mu(n):null;if(!n)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(t=Aa(l.href),l=kl(n).hoistableStyles,a=l.get(t),a||(a={type:"style",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Aa(l.href);var u=kl(n).hoistableStyles,i=u.get(e);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,i),(u=n.querySelector(vn(e)))&&!u._p&&(i.instance=u,i.state.loading=5),gt.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},gt.set(e,l),u||Zh(n,e,l,i.state))),t&&a===null)throw Error(d(528,""));return i}if(t&&a!==null)throw Error(d(529,""));return null;case"script":return t=l.async,l=l.src,typeof l=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=za(l),l=kl(n).hoistableScripts,a=l.get(t),a||(a={type:"script",instance:null,count:0,state:null},l.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Aa(e){return'href="'+st(e)+'"'}function vn(e){return'link[rel="stylesheet"]['+e+"]"}function Pr(e){return H({},e,{"data-precedence":e.precedence,precedence:null})}function Zh(e,t,l,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),we(t,"link",l),ze(t),e.head.appendChild(t))}function za(e){return'[src="'+st(e)+'"]'}function gn(e){return"script[async]"+e}function ed(e,t,l){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+st(l.href)+'"]');if(a)return t.instance=a,ze(a),a;var n=H({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),ze(a),we(a,"style",n),Cu(a,l.precedence,e),t.instance=a;case"stylesheet":n=Aa(l.href);var u=e.querySelector(vn(n));if(u)return t.state.loading|=4,t.instance=u,ze(u),u;a=Pr(l),(n=gt.get(n))&&$c(a,n),u=(e.ownerDocument||e).createElement("link"),ze(u);var i=u;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),we(u,"link",a),t.state.loading|=4,Cu(u,l.precedence,e),t.instance=u;case"script":return u=za(l.src),(n=e.querySelector(gn(u)))?(t.instance=n,ze(n),n):(a=l,(n=gt.get(u))&&(a=H({},l),Ic(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),ze(n),we(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Cu(a,l.precedence,e));return t.instance}function Cu(e,t,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,u=n,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===t)u=c;else if(u!==n)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=l.nodeType===9?l.head:l,t.insertBefore(e,t.firstChild))}function $c(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ic(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var wu=null;function td(e,t,l){if(wu===null){var a=new Map,n=wu=new Map;n.set(l,a)}else n=wu,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(e))return a;for(a.set(e,null),l=l.getElementsByTagName(e),n=0;n<l.length;n++){var u=l[n];if(!(u[ja]||u[De]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(t)||"";i=e+i;var c=a.get(i);c?c.push(u):a.set(i,[u])}}return a}function ld(e,t,l){e=e.ownerDocument||e,e.head.insertBefore(l,t==="title"?e.querySelector("head > title"):null)}function kh(e,t,l){if(l===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ad(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Kh(e,t,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Aa(a.href),u=t.querySelector(vn(n));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ju.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=u,ze(u);return}u=t.ownerDocument||t,a=Pr(a),(n=gt.get(n))&&$c(a,n),u=u.createElement("link"),ze(u);var i=u;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),we(u,"link",a),l.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=ju.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}var Pc=0;function Jh(e,t){return e.stylesheets&&e.count===0&&Ru(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var a=setTimeout(function(){if(e.stylesheets&&Ru(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Pc===0&&(Pc=62500*_h());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ru(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Pc?50:800)+t);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function ju(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ru(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ou=null;function Ru(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ou=new Map,t.forEach(Wh,e),Ou=null,ju.call(e))}function Wh(e,t){if(!(t.state.loading&4)){var l=Ou.get(e);if(l)var a=l.get(null);else{l=new Map,Ou.set(e,l);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),a=i)}a&&l.set(null,a)}n=t.instance,i=n.getAttribute("data-precedence"),u=l.get(i)||a,u===a&&l.set(null,n),l.set(i,n),this.count++,a=ju.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),u?u.parentNode.insertBefore(n,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var pn={$$typeof:je,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Fh(e,t,l,a,n,u,i,c,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ju(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ju(0),this.hiddenUpdates=Ju(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function nd(e,t,l,a,n,u,i,c,f,y,b,T){return e=new Fh(e,t,l,i,f,y,b,T,c),t=1,u===!0&&(t|=24),u=tt(3,null,null,t),e.current=u,u.stateNode=e,t=ji(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:t},Hi(u),e}function ud(e){return e?(e=la,e):la}function id(e,t,l,a,n,u){n=ud(n),a.context===null?a.context=n:a.pendingContext=n,a=ul(t),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=il(e,a,t),l!==null&&(Je(l,e,t),Wa(l,e,t))}function cd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<t?l:t}}function ef(e,t){cd(e,t),(e=e.alternate)&&cd(e,t)}function fd(e){if(e.tag===13||e.tag===31){var t=Ml(e,67108864);t!==null&&Je(t,e,67108864),ef(e,67108864)}}function sd(e){if(e.tag===13||e.tag===31){var t=it();t=Wu(t);var l=Ml(e,t);l!==null&&Je(l,e,t),ef(e,t)}}var Uu=!0;function $h(e,t,l,a){var n=x.T;x.T=null;var u=N.p;try{N.p=2,tf(e,t,l,a)}finally{N.p=u,x.T=n}}function Ih(e,t,l,a){var n=x.T;x.T=null;var u=N.p;try{N.p=8,tf(e,t,l,a)}finally{N.p=u,x.T=n}}function tf(e,t,l,a){if(Uu){var n=lf(a);if(n===null)Xc(e,t,a,Hu,l),rd(e,a);else if(ey(n,e,t,l,a))a.stopPropagation();else if(rd(e,a),t&4&&-1<Ph.indexOf(e)){for(;n!==null;){var u=Zl(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Al(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-Pe(i);c.entanglements[1]|=f,i&=~f}_t(u),(ee&6)===0&&(pu=$e()+500,dn(0))}}break;case 31:case 13:c=Ml(u,2),c!==null&&Je(c,u,2),xu(),ef(u,2)}if(u=lf(a),u===null&&Xc(e,t,a,Hu,l),u===n)break;n=u}n!==null&&a.stopPropagation()}else Xc(e,t,a,null,l)}}function lf(e){return e=ni(e),af(e)}var Hu=null;function af(e){if(Hu=null,e=Vl(e),e!==null){var t=z(e);if(t===null)e=null;else{var l=t.tag;if(l===13){if(e=$(t),e!==null)return e;e=null}else if(l===31){if(e=re(t),e!==null)return e;e=null}else if(l===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Hu=e,null}function od(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qd()){case gf:return 2;case pf:return 8;case zn:case Yd:return 32;case bf:return 268435456;default:return 32}default:return 32}}var nf=!1,gl=null,pl=null,bl=null,bn=new Map,xn=new Map,xl=[],Ph="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rd(e,t){switch(e){case"focusin":case"focusout":gl=null;break;case"dragenter":case"dragleave":pl=null;break;case"mouseover":case"mouseout":bl=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xn.delete(t.pointerId)}}function Sn(e,t,l,a,n,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[n]},t!==null&&(t=Zl(t),t!==null&&fd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function ey(e,t,l,a,n){switch(t){case"focusin":return gl=Sn(gl,e,t,l,a,n),!0;case"dragenter":return pl=Sn(pl,e,t,l,a,n),!0;case"mouseover":return bl=Sn(bl,e,t,l,a,n),!0;case"pointerover":var u=n.pointerId;return bn.set(u,Sn(bn.get(u)||null,e,t,l,a,n)),!0;case"gotpointercapture":return u=n.pointerId,xn.set(u,Sn(xn.get(u)||null,e,t,l,a,n)),!0}return!1}function dd(e){var t=Vl(e.target);if(t!==null){var l=z(t);if(l!==null){if(t=l.tag,t===13){if(t=$(l),t!==null){e.blockedOn=t,zf(e.priority,function(){sd(l)});return}}else if(t===31){if(t=re(l),t!==null){e.blockedOn=t,zf(e.priority,function(){sd(l)});return}}else if(t===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var l=lf(e.nativeEvent);if(l===null){l=e.nativeEvent;var a=new l.constructor(l.type,l);ai=a,l.target.dispatchEvent(a),ai=null}else return t=Zl(l),t!==null&&fd(t),e.blockedOn=l,!1;t.shift()}return!0}function md(e,t,l){Bu(e)&&l.delete(t)}function ty(){nf=!1,gl!==null&&Bu(gl)&&(gl=null),pl!==null&&Bu(pl)&&(pl=null),bl!==null&&Bu(bl)&&(bl=null),bn.forEach(md),xn.forEach(md)}function qu(e,t){e.blockedOn===t&&(e.blockedOn=null,nf||(nf=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,ty)))}var Yu=null;function hd(e){Yu!==e&&(Yu=e,p.unstable_scheduleCallback(p.unstable_NormalPriority,function(){Yu===e&&(Yu=null);for(var t=0;t<e.length;t+=3){var l=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(af(a||l)===null)continue;break}var u=Zl(l);u!==null&&(e.splice(t,3),t-=3,lc(u,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Na(e){function t(f){return qu(f,e)}gl!==null&&qu(gl,e),pl!==null&&qu(pl,e),bl!==null&&qu(bl,e),bn.forEach(t),xn.forEach(t);for(var l=0;l<xl.length;l++){var a=xl[l];a.blockedOn===e&&(a.blockedOn=null)}for(;0<xl.length&&(l=xl[0],l.blockedOn===null);)dd(l),l.blockedOn===null&&xl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],u=l[a+1],i=n[Qe]||null;if(typeof u=="function")i||hd(l);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[Qe]||null)c=i.formAction;else if(af(n)!==null)continue}else c=i.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),hd(l)}}}function yd(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function uf(e){this._internalRoot=e}Gu.prototype.render=uf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var l=t.current,a=it();id(l,a,e,t,null,null)},Gu.prototype.unmount=uf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;id(e.current,2,null,e,null,null),xu(),t[Ll]=null}};function Gu(e){this._internalRoot=e}Gu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Af();e={blockedOn:null,target:e,priority:t};for(var l=0;l<xl.length&&t!==0&&t<xl[l].priority;l++);xl.splice(l,0,e),l===0&&dd(e)}};var vd=C.version;if(vd!=="19.2.0")throw Error(d(527,vd,"19.2.0"));N.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=A(t),e=e!==null?L(e):null,e=e===null?null:e.stateNode,e};var ly={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xu.isDisabled&&Xu.supportsFiber)try{Ma=Xu.inject(ly),Ie=Xu}catch{}}return En.createRoot=function(e,t){if(!w(e))throw Error(d(299));var l=!1,a="",n=Eo,u=Ao,i=zo;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=nd(e,1,!1,null,null,l,a,null,n,u,i,yd),e[Ll]=t.current,Gc(e),new uf(t)},En.hydrateRoot=function(e,t,l){if(!w(e))throw Error(d(299));var a=!1,n="",u=Eo,i=Ao,c=zo,f=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(f=l.formState)),t=nd(e,1,!0,t,l??null,a,n,f,u,i,c,yd),t.context=ud(null),l=t.current,a=it(),a=Wu(a),n=ul(a),n.callback=null,il(l,n,a),l=a,t.current.lanes=l,wa(t,l),_t(t),e[Ll]=t.current,Gc(e),new Gu(t)},En.version="19.2.0",En}var Nd;function dy(){if(Nd)return sf.exports;Nd=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(C){console.error(C)}}return p(),sf.exports=ry(),sf.exports}var my=dy();const hy=Cd(my);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=p=>p.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vy=p=>p.replace(/^([A-Z])|[\s-_]+(\w)/g,(C,R,d)=>d?d.toUpperCase():R.toLowerCase()),Dd=p=>{const C=vy(p);return C.charAt(0).toUpperCase()+C.slice(1)},wd=(...p)=>p.filter((C,R,d)=>!!C&&C.trim()!==""&&d.indexOf(C)===R).join(" ").trim(),gy=p=>{for(const C in p)if(C.startsWith("aria-")||C==="role"||C==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var py={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=Mt.forwardRef(({color:p="currentColor",size:C=24,strokeWidth:R=2,absoluteStrokeWidth:d,className:w="",children:z,iconNode:$,...re},O)=>Mt.createElement("svg",{ref:O,...py,width:C,height:C,stroke:p,strokeWidth:d?Number(R)*24/Number(C):R,className:wd("lucide",w),...!z&&!gy(re)&&{"aria-hidden":"true"},...re},[...$.map(([A,L])=>Mt.createElement(A,L)),...Array.isArray(z)?z:[z]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=(p,C)=>{const R=Mt.forwardRef(({className:d,...w},z)=>Mt.createElement(by,{ref:z,iconNode:C,className:wd(`lucide-${yy(Dd(p))}`,`lucide-${p}`,d),...w}));return R.displayName=Dd(p),R};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Sy=Be("arrow-down",xy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Ey=Be("chevron-up",Ty);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],zy=Be("code-xml",Ay);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],Dy=Be("file-code",Ny);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],jd=Be("gamepad-2",_y);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Od=Be("github",My);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]],wy=Be("layout-template",Cy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Oy=Be("mail",jy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Uy=Be("menu",Ry);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],By=Be("message-circle",Hy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],Yy=Be("server",qy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Xy=Be("terminal",Gy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ly=Be("users",Qy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Zy=Be("wrench",Vy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ky=Be("x",ky),_d=[{label:"About",href:"#about"},{label:"Skills",href:"#skills"},{label:"Code Samples",href:"#code"},{label:"Process",href:"#process"}],Jy=[{title:"Core Roblox Scripting",icon:Xy,items:["Luau / Roblox Lua","Client-Server (Remotes)","ModuleScripts Architecture","Replication & Optimization"],description:"Writing clean, efficient, and modular Luau code that scales."},{title:"Gameplay & Systems",icon:jd,items:["Wave & Enemy Systems","Combat & Hit Detection","State Machines & AI","Interconnected Game Loops"],description:"Designing systems that feel responsive, readable, and fun to play."},{title:"UI & UX",icon:wy,items:["Responsive Layouts","TweenService Animations","Roact (Familiar)","Interactive HUDs"],description:"Creating smooth, responsive interfaces that feel good to use."},{title:"Data & Backend",icon:Yy,items:["DataStoreService","ProfileService","MemoryStore","Security & Validation"],description:"Ensuring player data is safe, secure, and loads reliably."},{title:"Collaboration & Pipeline",icon:Ly,items:["Version Control (Git)","Task Tracking","Clear Communication","Documentation"],description:"Keeping work organized and easy to maintain for teams and clients."},{title:"Tooling & Optimization",icon:Zy,items:["Debugging Tools","Performance Profiling","Module Encapsulation","Refactoring"],description:"Finding bottlenecks early and keeping projects maintainable."}],Wy=["Luau","Roblox Studio","RemoteEvents","OOP","DataStores","TweenService","ProfileService","Janitor","Signal"],Fy=[{number:"01",title:"Contact",description:"You tell me what you need—features, systems, or full experiences—and share any references or examples."},{number:"02",title:"Planning",description:"We confirm scope, prices, and timeline. I break the work into clear tasks so you know exactly what you’re getting."},{number:"03",title:"Development",description:"I build the systems carefully on my baseplate or project, using modular code and proper Roblox services."},{number:"04",title:"Testing",description:"You get to test the work yourself. We fix issues, polish behavior, and adjust where needed based on feedback."},{number:"05",title:"Completion",description:"Once you’re satisfied, you pay and we finalize delivery. I can help integrate the systems into your place if needed."}],Md=[{id:"wave-manager",title:"Wave Manager",description:"Spawns enemy waves with scaling difficulty, manages pacing, and fires events for UI and gameplay systems.",tags:["Luau","Wave System","Combat","Events"],githubUrl:"https://github.com/syilfre/hd/blob/main/WaveSystem.lua",code:`--[[

	Wave system, enemy types, and scaling
	this script handles the wave system, enemy spawning, and enemy behavior.
	Enemy Types ; Normal, Runner, Tank, Exploder, Boss.
	-syilfre : 11/15/2025
	
]]--

-- services
local PlayersService = game:GetService("Players") -- players service
local ReplicatedStorage = game:GetService("ReplicatedStorage") -- where rigs are at..
local RunService = game:GetService("RunService") -- heartbeat loop
local PathfindingService = game:GetService("PathfindingService") -- pathfinding for enemies
local Debris = game:GetService("Debris") -- debris service..

-- template rigs 
local BaseRig = ReplicatedStorage.TemplateRig :: Model -- default enemy rig
local BossRig = ReplicatedStorage.BossRig :: Model -- boss enemy rig
local TankRig = ReplicatedStorage.TankRig :: Model -- tank enemy rig
local RagdollModule = require(ReplicatedStorage.Ragdoll :: ModuleScript) -- ragdoll module

-- ui remote to announce things to playerss
local UIEvent = ReplicatedStorage:FindFirstChild("UI") :: RemoteEvent?

-- path debug toggle, shows waypoints yea
local ShowPathDebug = false -- set true if u want neon parts to visualize yah

-- type defs
type EnemyState = "Idle" | "Chasing" | "Dead" -- basic enemy states
type WaveState = "Waiting" | "Intermission" | "InWave" -- wave system states
type EnemyKind = "Normal" | "Runner" | "Boss" | "Tank" | "Exploder" -- all enemy kinds
type PathType = typeof(PathfindingService:CreatePath())

type Enemy = {
	Model: Model, -- the actual rig model
	Hum: Humanoid, -- humanoid controlling health/movement
	Root: BasePart, -- humanoid root part for movement/knockback
	State: EnemyState, -- current AI state
	Target: Player?, -- which player this enemy is chasing rn
	LastPath: number, -- last time we computed a path
	LastAttack: number, -- last time we attacked 
	Id: number, -- unique id per enemy
	Kind: EnemyKind, -- what type of enemy this is
	Damage: number, -- how much damage this enemy deals
	KnockbackMult: number, -- knockback multiplier for this enemy

	Path: PathType?, -- path object from PathfindingService
	Waypoints: { PathWaypoint }?, -- list of waypoints to follow
	WaypointIndex: number, -- which waypoint we are currently moving to
	LastTargetPos: Vector3?, -- last target pos when we pathed

	DebugParts: { BasePart }?, -- neon parts used for showing path
	DiedConnection: RBXScriptConnection?, -- for cleaning up the died connection
}

type WaveConfig = {
	baseEnemyCount: number, -- enemies on first wave
	enemyCountGrowth: number, -- how many more enemies per wave
	spawnRadius: number, -- how far from center enemies spawn
	maxWave: number, -- upper safety cap for wave index
	intermissionDuration: number, -- time between waves
}

type WaveMgr = {
	Wave: number, -- current wave number
	State: WaveState, -- current wave state (waiting/intermission/inwave)
	Time: number, -- timer tracking time spent in current state
	Enemies: { Enemy }, -- list of enemies for current wave
	BossInterval: number, -- how often bosses show up
	NextBossWave: number, -- next wave index that will have a boss
}

-- config for everything, wave, enemy types
local cfg = {
	Wave = {
		baseEnemyCount = 3, -- enemies on wave 1
		enemyCountGrowth = 2, -- +2 enemies per wave
		spawnRadius = 45, -- radius of spawn circle around the center
		maxWave = 999, -- just a big cap so it doesn't go crazy
		intermissionDuration = 6, -- seconds between waves
	} :: WaveConfig,
	Enemy = {
		walkSpeed = 14, -- default walkspeed before multipliers
		health = 50, -- default hp
		damage = 10, -- base melee damage
		attackRange = 4, -- max distance to swing at player
		attackCooldown = 1, -- seconds between attacks
		pathRecomputeDelay = .6, -- min seconds before we recompute path
		repathDistance = 4, -- how far target has to move to trigger new path
		knockbackForce = 70, -- horizontal kb force
		knockbackUp = 25, -- vertical kb force
		waypointReachDist = 4, -- how close we need to be to a waypoint to move on
		Types = {
			Normal = { -- base/default enemy
				healthMult = 1, -- normal hp
				speedMult = 1, -- normal speed
				damageMult = 1, -- normal damage
				knockbackMult = 1, -- default knockback
			},
			Runner = {
				healthMult = .75, -- a bit squishier
				speedMult = 1.2, -- faster
				speedAdd = 8, -- flat bonus speed
				damageMult = 1, -- same damage as base
				knockbackMult = 1, -- normal kb
			},
			Tank = {
				healthMult = 2.5, -- chunky
				speedMult = .6, -- slow
				damageMult = 1.75, -- hurts more
				knockbackMult = .5, -- less kb on players
			},
			Boss = {
				healthMult = 3.5, -- huge hp
				speedMult = .75, -- a bit slower
				damageMult = 2, -- big dmg
				knockbackMult = 1.4, -- extra kb
			},
			Exploder = {
				healthMult = .8, -- kinda squishy
				speedMult = 1.1, -- slightly faster
				damageMult = 1, -- normal base dmg
				knockbackMult = 1.1, -- a bit more kb
				blastRadius = 12, -- explosion radius
				explosionDamageFactor = 1.5, -- explosion dmg = base dmg * this
			},
		},
	},
	Misc = {
		minPlayers = 1, -- at least 1 player to start waves
	},
}

-- runner chance scales but is capped so not all are runnerss
local function GetRunnerChancePercent(wave: number): number
	local base = 10 -- 10% on wave 1
	local extra = (wave - 1) * 2 -- +2% per extra wave
	local cap = 60 -- hard cap
	local value = base + extra
	if value > cap then
		value = cap -- clamp
	end
	return value
end

local EnemyClass = {} 
EnemyClass.__index = EnemyClass

local WaveClass = {} 
WaveClass.__index = WaveClass

local Waves: WaveMgr? = nil -- holds the active wave manager
local nextEnemyId = 1 -- simple id tracker per enemy

-- collision

-- puts every BasePart inside a model in a collision group
local function SetModelCollisionGroup(model: Model, groupName: string)
	for _, descendant in ipairs(model:GetDescendants()) do -- loop through all descendants
		if descendant:IsA("BasePart") then -- check if the object is a BasePart
			descendant.CollisionGroup = groupName -- assign the collision group
		end
	end
end

-- UI local functions, keep things tidyyyyyyyyy

local function SendWaveText(text: string)
	if UIEvent then -- only if UI remote exists
		UIEvent:FireAllClients("WaveText", text) -- tell clients to update the wave text
	end
end

local function SendInfoText(text: string)
	if UIEvent then
		UIEvent:FireAllClients("InfoText", {
			mode = "set", -- set text instantly
			text = text,
		})
	end
end

local function SendFadeInfo(text: string, duration: number)
	if UIEvent then
		UIEvent:FireAllClients("InfoText", {
			mode = "fade", -- show then fade out
			text = text,
			duration = duration, -- how long till it fades
		})
	end
end

local function SendBossInfo(nextBoss: number)
	if UIEvent then
		UIEvent:FireAllClients("BossInfo", {
			nextBoss = nextBoss, -- which wave the next boss is at
		})
	end
end

-- local functions

-- grabs only players that have a character + alive humanoid
local function GetAlivePlayers(): { Player }
	local out: { Player } = {} -- output list
	for _, plr in ipairs(PlayersService:GetPlayers()) do -- loop all players
		local char = plr.Character -- player character model
		local hum = char and char:FindFirstChildOfClass("Humanoid") -- find humanoid
		if hum and hum.Health > 0 then -- humanoid exists and is alive
			table.insert(out, plr) -- keep this player
		end
	end
	return out
end

-- center of the arena 
local function GetCenter(): Vector3
	return Vector3.new(0, 3, 0) -- x/y/z
end

-- random cf in radius
local function GetSpawnCF(): CFrame
	local center = GetCenter() -- middle of the arena
	local r = cfg.Wave.spawnRadius -- spawn radius
	local ang = math.random() * math.pi * 2 -- random angle from 0 to 2pi (or circle lol)
	local off = Vector3.new(math.cos(ang) * r, 0, math.sin(ang) * r) -- position on the circle
	local pos = center + off + Vector3.new(0, 2, 0) -- spawn a bit above ground
	return CFrame.new(pos, center) -- face the center
end

-- knockback using BodyVelocity, pushes away from "from" position
local function Knockback(root: BasePart, from: Vector3, mult: number)
	local dir = (root.Position - from) -- vector from explosion/hit to target
	if dir.Magnitude < .1 then -- avoid weird 0-length vector
		dir = Vector3.new(0, 1, 0) -- default direction upwards
	else
		dir = dir.Unit -- normalize to length 1
	end

	-- flatten so we don't tilt them weirdly (remove y)
	local flat = Vector3.new(dir.X, 0, dir.Z)
	if flat.Magnitude < .1 then
		flat = Vector3.new(0, 0, 1) -- fallback direction
	else
		flat = flat.Unit -- normalize
	end

	-- sideways push + upward push scaled by mult
	local v = flat * (cfg.Enemy.knockbackForce * mult) -- horizontal force
	v += Vector3.new(0, cfg.Enemy.knockbackUp * mult, 0) -- vertical force

	local bv = Instance.new("BodyVelocity") -- body mover for kb
	bv.MaxForce = Vector3.new(1e5, 1e5, 1e5) -- allow it to actually move them
	bv.Velocity = v -- final kb vector
	bv.Parent = root -- attach to root part
	Debris:AddItem(bv, .25) -- auto clean after a bit
end

-- pick the closest alive player to this enemy
local function GetNearestPlayer(enemy: Enemy): Player?
	local best: Player? = nil -- best player so far
	local bestDist = math.huge -- start with huge distance
	local pos = enemy.Root.Position -- enemy position

	for _, plr in ipairs(GetAlivePlayers()) do -- loop all alive players
		local char = plr.Character
		local root = char and char:FindFirstChild("HumanoidRootPart") :: BasePart?
		if root then -- make sure we have a root part
			local d = (root.Position - pos).Magnitude -- distance between enemy and player
			if d < bestDist then -- found closer one
				bestDist = d
				best = plr
			end
		end
	end

	return best
end

-- enemy

function EnemyClass:ClearDebugPath()
	local parts = self.DebugParts
	if not parts then
		return
	end

	-- remove each path debug part
	for _, part in ipairs(parts) do
		if part and part.Parent then
			part:Destroy()
		end
	end
	self.DebugParts = nil -- clear reference
end

-- draws the path if debug is on, using parts.
function EnemyClass:ShowPath(path: PathType)
	self:ClearDebugPath() -- clear previous debug parts first
	if not ShowPathDebug then
		return -- bail if debug is disabled
	end

	local waypoints = path:GetWaypoints() -- get all waypoints from path
	local parts: { BasePart } = {} -- store all debug parts

	for _, wp in ipairs(waypoints) do -- loop every waypoint
		local node = Instance.new("Part") -- small neon part
		node.Name = "PathNode"
		node.Anchored = true
		node.CanCollide = false
		node.Size = Vector3.new(.6, .6, .6)
		node.Material = Enum.Material.Neon

		if wp.Action == Enum.PathWaypointAction.Jump then
			node.Color = Color3.fromRGB(255, 0, 0) -- red for jump nodes
		else
			node.Color = Color3.fromRGB(0, 255, 0) -- green for normal nodes
		end

		node.CFrame = CFrame.new(wp.Position) -- place at waypoint
		node.Parent = workspace -- put into world
		table.insert(parts, node)
	end

	self.DebugParts = parts -- for cleanup
end

-- spawns 1 enemy of a given type at a given cframe
function EnemyClass.new(cf: CFrame, kind: EnemyKind): Enemy
	local rigModel: Model

	-- pick rig based on kind
	if kind == "Boss" then
		rigModel = BossRig:Clone()
	elseif kind == "Tank" then
		rigModel = TankRig:Clone()
	else
		rigModel = BaseRig:Clone()
	end

	local model = rigModel

	-- give it a name depending on the type ya
	if kind == "Boss" then
		model.Name = "Boss"
	elseif kind == "Runner" then
		model.Name = "Runner"
	elseif kind == "Tank" then
		model.Name = "Tank"
	elseif kind == "Exploder" then
		model.Name = "Exploder"
	else
		model.Name = "Enemy"
	end

	local root = model:FindFirstChild("HumanoidRootPart") :: BasePart?
	local hum = model:FindFirstChildOfClass("Humanoid") :: Humanoid

	model.PrimaryPart = root -- set primary part
	model:SetPrimaryPartCFrame(cf) -- position + face towards center
	model.Parent = workspace -- actually spawn it

	-- set enemy collisions
	SetModelCollisionGroup(model, "NPC")

	-- base stats
	local baseSpeed = cfg.Enemy.walkSpeed
	local baseHealth = cfg.Enemy.health
	local baseDamage = cfg.Enemy.damage

	-- type multipliers
	local typeCfg = cfg.Enemy.Types[kind] or cfg.Enemy.Types.Normal

	local speedMult = typeCfg.speedMult or 1
	local speedAdd = typeCfg.speedAdd or 0
	local healthMult = typeCfg.healthMult or 1
	local damageMult = typeCfg.damageMult or 1
	local knockMult = typeCfg.knockbackMult or 1

	-- final stats
	local speed = baseSpeed * speedMult + speedAdd -- base*mult + bonus
	local health = baseHealth * healthMult
	local damage = baseDamage * damageMult

	hum.WalkSpeed = speed -- set movement speed
	hum.MaxHealth = health -- set max hp
	hum.Health = health -- set current hp
	hum.BreakJointsOnDeath = false -- we ragdoll instead of classic death

	-- little visual changes per type
	if kind == "Runner" then
		local head = model:FindFirstChild("Head")
		if head and head:IsA("BasePart") then
			local decal = head:FindFirstChildOfClass("Decal")
			if not decal then
				decal = Instance.new("Decal") -- create face decal
				decal.Name = "face"
				decal.Face = Enum.NormalId.Front
				decal.Parent = head
			end
			decal.Texture = "rbxassetid://9619557575" -- runner face
		end

		local torso = model:FindFirstChild("Torso") :: BasePart?
		if torso then
			torso.BrickColor = BrickColor.new("Bright bluish green") -- teal-ish
		end
	elseif kind == "Exploder" then
		local torso = model:FindFirstChild("Torso") :: BasePart?
		if torso then
			torso.BrickColor = BrickColor.new("Bright red") -- red torso
		end
	end

	local id = nextEnemyId -- assign id
	nextEnemyId += 1 -- prepare next id

	-- make our enemy table
	local self = setmetatable({}, EnemyClass) :: Enemy
	self.Model = model
	self.Hum = hum
	self.Root = root
	self.State = "Idle"
	self.Target = nil
	self.LastPath = 0
	self.LastAttack = 0
	self.Id = id
	self.Kind = kind
	self.Damage = damage
	self.KnockbackMult = knockMult
	self.Path = nil
	self.Waypoints = nil
	self.WaypointIndex = 0
	self.LastTargetPos = nil
	self.DebugParts = nil
	self.DiedConnection = nil

	-- death behavior, handles exploder and ragdoll
	self.DiedConnection = hum.Died:Connect(function() -- runs when humanoid hits 0 hp
		self.State = "Dead"
		self:ClearDebugPath() -- remove path parts

		-- exploder enemies explode on death
		if self.Kind == "Exploder" then
			EnemyClass.Explode(self) -- explode right away
		end

		-- ragdoll the model
		if self.Model then
			RagdollModule:Ragdoll(self.Model)
		end
	end)

	return self
end

-- for exploder class; makes an explosion instance anddd blows em up also applies knockback.
function EnemyClass:Explode()
	local model = self.Model :: Model?
	if not model then
		return -- enemy already gone
	end

	-- primary part
	local originPart = model.PrimaryPart :: BasePart

	local typeCfg = cfg.Enemy.Types[self.Kind] or cfg.Enemy.Types.Exploder
	local radius = typeCfg.blastRadius or 12 -- explosion size
	local factor = typeCfg.explosionDamageFactor or 1.5
	local explosionDamage = self.Damage * factor -- scale from base damage

	local e = Instance.new("Explosion")
	e.Position = originPart.Position -- where it explodes
	e.BlastRadius = radius
	e.BlastPressure = 0 -- no default roblox knockback
	e.DestroyJointRadiusPercent = 0 -- don't auto-break joints

	local hitChars: { [Model]: boolean } = {} -- track which characters we already hit

	-- damage + knockback for anything we hit
	e.Hit:Connect(function(part)
		if not part or not part.Parent then
			return
		end

		local char = part:FindFirstAncestorOfClass("Model") -- go up to the model
		if not char or hitChars[char] then
			return -- no char or already damaged this char
		end
		hitChars[char] = true -- mark as hit

		local hum = char:FindFirstChildOfClass("Humanoid")
		if hum and hum.Health > 0 then
			hum:TakeDamage(explosionDamage) -- apply explosion damage
		end

		local hrp = char:FindFirstChild("HumanoidRootPart") :: BasePart?
		if hrp then
			Knockback(hrp, originPart.Position, self.KnockbackMult + .5) -- extra kb for explode
		end
	end)

	-- parent so the explosion actually exists in the world
	e.Parent = originPart
end

function EnemyClass:Destroy()
	self.State = "Dead"
	self:ClearDebugPath()

	-- disconnect died connection
	if self.DiedConnection then
		self.DiedConnection:Disconnect()
		self.DiedConnection = nil
	end

	if self.Model and self.Model.Parent then
		self.Model:Destroy()
	end
end

-- base attack: checks distance, cooldown, then hits + knockback
function EnemyClass:TryAttack(now: number)
	local targetPlayer = self.Target
	if not targetPlayer then
		return
	end

	local char = targetPlayer.Character
	local hum = char and char:FindFirstChildOfClass("Humanoid")
	local root = char and char:FindFirstChild("HumanoidRootPart") :: BasePart?

	if not hum or not root or hum.Health <= 0 then
		return -- target dead or invalid
	end

	local d = (root.Position - self.Root.Position).Magnitude -- distance to target
	if d > cfg.Enemy.attackRange then
		return -- too far to hit
	end

	if now - self.LastAttack < cfg.Enemy.attackCooldown then
		return -- still on cooldown
	end

	self.LastAttack = now -- mark last attack time

	hum:TakeDamage(self.Damage) -- do dmg

	local hitSound = Instance.new("Sound")
	hitSound.SoundId = "rbxassetid://8595975458" -- hit sfx
	hitSound.Volume = 1
	hitSound.Parent = root
	hitSound:Play()
	Debris:AddItem(hitSound, 2) -- clean up sound after 2s

	Knockback(root, self.Root.Position, self.KnockbackMult) -- knock player back
end

-- build a path from enemy to target
function EnemyClass:ComputePath(targetPos: Vector3, now: number)
	self.LastPath = now -- remember when we last computed
	self.LastTargetPos = targetPos -- remember where the target was

	local path = PathfindingService:CreatePath() -- create a new path object
	path:ComputeAsync(self.Root.Position, targetPos) -- ask roblox to compute path

	if path.Status ~= Enum.PathStatus.Success then -- path failed
		self.Path = nil
		self.Waypoints = nil
		self.WaypointIndex = 0
		self:ClearDebugPath()
		return
	end

	local waypoints = path:GetWaypoints()
	if #waypoints == 0 then -- no waypoints means nothing to follow
		self.Path = nil
		self.Waypoints = nil
		self.WaypointIndex = 0
		self:ClearDebugPath()
		return
	end

	self.Path = path
	self.Waypoints = waypoints
	self.WaypointIndex = (#waypoints >= 2) and 2 or 1 -- skip the first wp usually
	self:ShowPath(path) -- draw debug if enabled
end

-- see if we need to refresh the path based on time or how far target moved
function EnemyClass:UpdatePath(now: number, targetPos: Vector3)
	local needNew = false

	if not self.Path or not self.Waypoints or self.WaypointIndex == 0 or self.WaypointIndex > #self.Waypoints then
		-- no path or we're out of bounds
		needNew = true
	else
		--- save performance by only recalculating the path if enough time has passed, or the target has moved far enoughh.
		if now - self.LastPath >= cfg.Enemy.pathRecomputeDelay then
			local last = self.LastTargetPos
			if not last or (targetPos - last).Magnitude >= cfg.Enemy.repathDistance then
				needNew = true
			end
		end
	end

	if needNew then
		self:ComputePath(targetPos, now)
	end
end

-- follow waypoints and move towards the player / last target pos
function EnemyClass:FollowPath(targetPos: Vector3)
	local waypoints = self.Waypoints
	if not waypoints or #waypoints == 0 then
		self.Hum:MoveTo(targetPos) -- just run at target
		return
	end

	local index = self.WaypointIndex
	if index < 1 then
		index = 1
		self.WaypointIndex = 1
	end

	if index > #waypoints then
		self.Hum:MoveTo(targetPos)
		return
	end

	local root = self.Root
	local wp = waypoints[index]

	-- flatten waypoint position to the enemy's current Y 
	local wpPosFlat = Vector3.new(wp.Position.X, root.Position.Y, wp.Position.Z)
	local dist = (wpPosFlat - root.Position).Magnitude

	if dist < cfg.Enemy.waypointReachDist then -- if close enough, go to next waypoint
		index += 1
		self.WaypointIndex = index
		if index > #waypoints then
			self.Hum:MoveTo(targetPos)
			return
		end
		wp = waypoints[index]
		wpPosFlat = Vector3.new(wp.Position.X, root.Position.Y, wp.Position.Z)
	end

	if wp.Action == Enum.PathWaypointAction.Jump then
		self.Hum.Jump = true -- tell humanoid to jump for this waypoint
	end

	self.Hum:MoveTo(wpPosFlat) -- move to waypoint
end

-- main enemy update per frame
function EnemyClass:Step(_dt: number, now: number)
	if self.State == "Dead" then
		return -- dead enemies don't do anything
	end

	local targetPlayer = self.Target
	local char = targetPlayer and targetPlayer.Character
	local root = char and char:FindFirstChild("HumanoidRootPart") :: BasePart?
	local hum = char and char:FindFirstChildOfClass("Humanoid")

	-- if current target is gone / dead, try to find another player
	if not targetPlayer or not char or not root or not hum or hum.Health <= 0 then
		self.Target = GetNearestPlayer(self) -- pick nearest alive player
		targetPlayer = self.Target
		char = targetPlayer and targetPlayer.Character
		root = char and char:FindFirstChild("HumanoidRootPart") :: BasePart?
		hum = char and char:FindFirstChildOfClass("Humanoid")

		if not targetPlayer or not char or not root or not hum or hum.Health <= 0 then
			-- no valid target at all, just idle
			self.State = "Idle"
			self.Hum:MoveTo(self.Root.Position) -- stand still basically
			return
		end
	end

	if self.State == "Idle" then
		self.State = "Chasing" -- start chasing when we have a target
	end

	self:UpdatePath(now, root.Position) -- maybe recompute path
	self:FollowPath(root.Position) -- follow current path towards target
	self:TryAttack(now) -- try to attack if close enough
end

-- waves

-- returns true if all enemies in this list are dead
local function AllDead(list: { Enemy }): boolean
	for _, enemy in ipairs(list) do
		if enemy.State ~= "Dead" then
			return false
		end
	end
	return true
end

local function BroadcastBossInfo()
	local w = Waves
	if not w then
		return
	end
	SendBossInfo(w.NextBossWave)
end

-- basic wave manager, tracks current wave and enemies
function WaveClass.new(): WaveMgr
	local self = setmetatable({}, WaveClass) :: WaveMgr
	self.Wave = 0 -- current wave
	self.State = "Waiting" -- start waiting for players
	self.Time = 0 -- timer for current state
	self.Enemies = {} -- list of enemies in current wave
	self.BossInterval = 3 -- first boss at wave 3
	self.NextBossWave = 3 -- track which wave next boss will spawn
	return self
end

-- how many enemies to spawn this wave
function WaveClass:GetEnemyCount(): number
	local base = cfg.Wave.baseEnemyCount
	local grow = cfg.Wave.enemyCountGrowth
	return base + grow * self.Wave -- simple linear scaling
end

function WaveClass:ClearEnemies()
	for _, enemy in ipairs(self.Enemies) do
		enemy:Destroy() -- clean up enemy model + connections
	end
	table.clear(self.Enemies) -- wipe table
end

-- starts a new wave and spawns enemies
function WaveClass:SpawnWave()
	self.Wave += 1 -- go to next wave
	if self.Wave > cfg.Wave.maxWave then
		self.Wave = 1 -- loop back just in case
	end

	self.State = "InWave" -- we are now in wave
	self.Time = 0 -- reset timer

	local total = self:GetEnemyCount() -- how many enemies to spawn
	local isBossWave = (self.Wave == self.NextBossWave) -- boss check

	SendWaveText(string.format("Wave %d", self.Wave))

	if isBossWave then
		SendInfoText("Boss wave! Survive this round.")
	else
		SendInfoText("Enemies incoming.")
	end

	local remaining = total -- enemies left to spawn this wave

	-- drop in a boss on boss waves, then push next boss wave further
	if isBossWave then
		local bossCf = GetSpawnCF() -- random spawn around center
		local bossEnemy = EnemyClass.new(bossCf, "Boss")
		table.insert(self.Enemies, bossEnemy)
		remaining -= 1

		self.BossInterval += 1 -- bosses become more spaced out over time
		self.NextBossWave = self.Wave + self.BossInterval
		BroadcastBossInfo()
	end

	local runnerChancePercent = GetRunnerChancePercent(self.Wave) -- wave-based runner chance
	local tankChancePercent = 10 -- flat 10% tank
	local exploderChancePercent = 12 -- flat 12% exploder

	-- roll type for each remaining enemy
	for _ = 1, math.max(0, remaining) do
		local kind: EnemyKind = "Normal"
		local roll = math.random(1, 100) -- random number between 1 and 100

		if roll <= tankChancePercent then
			kind = "Tank"
		elseif roll <= tankChancePercent + runnerChancePercent then
			kind = "Runner"
		elseif roll <= tankChancePercent + runnerChancePercent + exploderChancePercent then
			kind = "Exploder"
		end

		local cf = GetSpawnCF() -- random spawn location
		local enemy = EnemyClass.new(cf, kind) -- create enemy
		table.insert(self.Enemies, enemy) -- track it
	end
end

-- actual wave loop, waiting > intermission > in wave and loop againn
function WaveClass:Update(dt: number)
	self.Time += dt -- tick timer

	local alivePlayers = GetAlivePlayers() -- get all alive players
	if #alivePlayers < cfg.Misc.minPlayers then
		-- not enough players, reset to waiting
		if self.State ~= "Waiting" then
			self.State = "Waiting"
			self.Time = 0
			self.Wave = 0
			self:ClearEnemies()
			SendWaveText("Waiting for players...")
			SendInfoText("At least one player required to start.")
		end
		return
	end

	-- first time we see enough players, go into intermission
	if self.State == "Waiting" then
		self.State = "Intermission"
		self.Time = 0
		SendWaveText("Intermission")
		SendInfoText("Players joined. Next wave starting soon.")
		BroadcastBossInfo()
		return
	end

	if self.State == "Intermission" then
		local remain = math.max(0, math.floor(cfg.Wave.intermissionDuration - self.Time)) -- seconds left
		SendInfoText(string.format("Next wave in %d second(s)...", remain))
		if self.Time >= cfg.Wave.intermissionDuration then
			self:SpawnWave() -- start next wave
		end
		return
	end

	if self.State == "InWave" then
		local now = os.clock() -- current time for cooldowns / pathing

		for _, enemy in ipairs(self.Enemies) do
			enemy:Step(dt, now) -- update each enemy
		end

		-- if everyone is dead, reset back to waiting
		if #GetAlivePlayers() == 0 then
			self.State = "Waiting"
			self.Time = 0
			self.Wave = 0
			SendWaveText("Waiting for players...")
			SendInfoText("All players down. Waiting for new players.")
			self:ClearEnemies()
			return
		end

		-- all enemies dead, go back to intermission for next wave
		if AllDead(self.Enemies) then
			SendFadeInfo("Wave cleared!", 1.5)
			self.State = "Intermission"
			self.Time = 0

			-- lil delay to make enemy bodies linger for a bit longer before cleanup
			task.delay(2, WaveClass.ClearEnemies, self)

			SendWaveText("Intermission")
			return
		end
	end
end

-- players

-- collision group setting & announcement when a player dies
local function OnCharAdded(char: Model)
	local hum = char:FindFirstChildOfClass("Humanoid")
	if hum then
		SetModelCollisionGroup(char, "Players") -- make sure player parts use Players collision group

		hum.Died:Connect(function()
			SendInfoText("A player has fallen...") -- small flavor message
		end)
	end
end

local function OnPlayerAdded(plr: Player)
	plr.CharacterAdded:Connect(OnCharAdded) -- hook character spawn
	BroadcastBossInfo() -- resend next boss info to this player
end

local function OnPlayerRemoving(_plr: Player)
	if not Waves then
		return
	end

	-- if this was the last player, hard reset waves
	if #PlayersService:GetPlayers() <= 1 then
		Waves:ClearEnemies()
		Waves.State = "Waiting"
		Waves.Time = 0
		Waves.Wave = 0
		SendWaveText("Waiting for players...")
		SendInfoText("Waiting for players...")
	end
end

-- init

math.randomseed(os.time()) -- seed random so rolls arent the same every server boot :v
Waves = WaveClass.new()
BroadcastBossInfo()

PlayersService.PlayerAdded:Connect(OnPlayerAdded)
PlayersService.PlayerRemoving:Connect(OnPlayerRemoving)

for _, plr in ipairs(PlayersService:GetPlayers()) do
	OnPlayerAdded(plr) -- in case script runs after some players already exist
end

RunService.Heartbeat:Connect(function(dt: number)
	local w = Waves
	if w then
		w:Update(dt) -- main loop tick
	end
end)`},{id:"data-service",title:"Data Service Module",description:"Centralized data service handling player profiles, DataStore access, and safe updates using a module-based API.",tags:["DATA","MODULE","DATASTORES"],githubUrl:"https://github.com/syilfre/DataService/blob/main/dataService.lua",code:`--[[
	author : syilfre, july 2025.
	Data service : Inventory & Bank system data service.
	Utilizes session locking, data versioning.
]]

local Players = game:GetService("Players")
local DataStoreService = game:GetService("DataStoreService")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local ServerStorage = game:GetService("ServerStorage")

local Tools = ServerStorage:WaitForChild("Tools")
local Remotes = ReplicatedStorage:WaitForChild("Remotes")
local BankRemotes = Remotes:WaitForChild("Bank")

type InventoryItem = { Name: string, Weight: number }
type Transaction   = { Type: string, Amount: number, Reason: string, Target: Player? }
type BalanceEntry  = { Date: string, Balance: number }
type PlayerData = {
	onHand: number,
	onBank: number,
	CreationDate: string,
	PIN: number,
	HighestBalance: number,
	Transactions: { Transaction },
	BalanceHistory: { BalanceEntry },
	Inventory: { InventoryItem },
}

local DataService = {}
DataService._dataStore = DataStoreService:GetDataStore("BKST-014") -- random datastore name with number for testing

local sessionData: { [Player]: PlayerData } = {}
DataService._sessionData = sessionData

DataService._lockTimeout = 60

local DEFAULT_PLAYER_DATA: PlayerData = {
	onHand = 875654,
	onBank = 0,
	CreationDate = DateTime.now():FormatUniversalTime("MM/DD/YYYY", "en-us"),
	PIN = 1234,
	HighestBalance = 0,
	Transactions = {},
	BalanceHistory = {},
	Inventory = {},
}

local function deepClone(original: any): any
	if typeof(original) ~= "table" then return original end
	local copy = {}
	for k, v in pairs(original) do
		copy[k] = deepClone(v)
	end
	return copy
end

local toolInfo = require(ReplicatedStorage.Modules:WaitForChild("ToolInfo"))

local function loadInventory(player: Player, data: PlayerData)
	local folder = player:FindFirstChild("Inventory") or Instance.new("Folder")
	
	folder.Name = "Inventory"
	folder:ClearAllChildren()
	folder.Parent = player
	warn(data.Inventory)
	for _, itemData in ipairs(data.Inventory or {}) do
		print(itemData)
		local template = Tools:FindFirstChild(itemData.Name, true)
		if template then
			local item = template:Clone()
			local weight = item:FindFirstChild("Weight")
			if weight and weight:IsA("NumberValue") then
				weight.Value = itemData.Weight or toolInfo[itemData.Name].Weight
			else
				local w = Instance.new("NumberValue")
				w.Name = "Weight"
				w.Value = itemData.Weight or 5
				w.Parent = item
			end
			item.Parent = folder
		else
			warn("Missing tool in ServerStorage: " .. itemData.Name)
		end
	end
end

local function serializeInventory(player: Player): { InventoryItem }
	local list = {}
	local folder = player:FindFirstChild("Inventory")
	if not folder then return list end
	for _, item in folder:GetChildren() do
		table.insert(list, { Name = item.Name,Weight = toolInfo[item.Name].Weight})
	end
	print(list)
	return list
end

function DataService:GetData(player: Player): PlayerData?
	return self._sessionData[player]
end

function DataService:Save(player: Player)
	local data = self._sessionData[player]
	if not data then return end

	data.Inventory = serializeInventory(player)

	local key = "Player_" .. player.UserId .. "_data"
	local success, err = pcall(function()
		self._dataStore:SetAsync(key, data)
		self._dataStore:RemoveAsync("Player_" .. player.UserId)
	end)

	if not success then
		warn("Save failed for", player.Name, err)
	end

	self._sessionData[player] = nil
end

function DataService:Load(player: Player)
	warn('test yo')
	local key = "Player_" .. player.UserId

	local stats = Instance.new("Folder")
	stats.Name = "playerStats"
	stats.Parent = player

	local bank = Instance.new("IntValue")
	bank.Name = "bank_onBank"
	bank.Parent = stats

	local hand = Instance.new("IntValue")
	hand.Name = "bank_onHand"
	hand.Parent = stats

	local success, locked = pcall(function()
		return self._dataStore:UpdateAsync(key, function(current)
			if current and current.lock and os.time() - current.timestamp < self._lockTimeout then
				return nil
			end
			return { lock = true, jobId = game.JobId, timestamp = os.time() }
		end)
	end)

	if not success or not locked then
		player:Kick("Data locked. Rejoin shortly.")
		return
	end

	local data: PlayerData
	local ok, stored = pcall(function()
		return self._dataStore:GetAsync(key .. "_data")
	end)

	if ok and stored then
		data = stored
		for k, v in pairs(DEFAULT_PLAYER_DATA) do
			if data[k] == nil then
				data[k] = typeof(v) == "table" and deepClone(v) or v
			end
		end
	else
		data = deepClone(DEFAULT_PLAYER_DATA)
		data.CreationDate = DateTime.now():FormatUniversalTime("MM/DD/YYYY", "en-us")
		table.insert(data.BalanceHistory, {
			Date = data.CreationDate,
			Balance = 0
		})
	end

	self._sessionData[player] = data
	warn('test is this running? test')
	loadInventory(player, data)

	bank.Value = data.onBank
	hand.Value = data.onHand

	bank.Changed:Connect(function(val)
		if self._sessionData[player] then
			self._sessionData[player].onBank = val
		end
	end)

	hand.Changed:Connect(function(val)
		if self._sessionData[player] then
			self._sessionData[player].onHand = val
		end
	end)

	task.delay(2, function()
		BankRemotes.UpdateTransactions:FireClient(player, data.Transactions, data.CreationDate)
		BankRemotes.UpdateBalanceGraph:FireClient(player, data.BalanceHistory, data.HighestBalance)
	end)
end

function DataService:RecordTransaction(plr: Player, Type: string, Amount: number, Reason: string, Target: Player?)
	assert(Type == "Add" or Type == "Deduct", "Invalid transaction type")
	assert(typeof(Amount) == "number" and Amount > 0, "Amount must be a positive number")
	assert(typeof(Reason) == "string", "Reason must be a string")
	if Reason == "Transfer" then
		assert(Target and Target:IsA("Player"), "Transfer must specify valid Target")
	end

	local data = self._sessionData[plr]
	if not data then return end

	table.insert(data.Transactions, {
		Type = Type,
		Amount = Amount,
		Reason = Reason,
		Target = Target
	})

	table.insert(data.BalanceHistory, {
		Date = DateTime.now():FormatUniversalTime("MM/DD/YYYY", "en-us"),
		Balance = plr.playerStats.bank_onBank.Value
	})

	BankRemotes.UpdateTransactions:FireClient(plr, data.Transactions)
	BankRemotes.UpdateBalanceGraph:FireClient(plr, data.BalanceHistory, data.HighestBalance)
end

function DataService:Init()
	Players.PlayerAdded:Connect(function(player)
		self:Load(player)
	end)

	Players.PlayerRemoving:Connect(function(player)
		self:Save(player)
	end)

	game:BindToClose(function()
		for _, p in ipairs(Players:GetPlayers()) do
			self:Save(p)
		end
		task.wait(2)
	end)

	BankRemotes.PIN.OnServerInvoke = function(plr, change, newPIN)
		assert(typeof(change) == "boolean" or change == nil, "change must be boolean")
		assert(newPIN == nil or typeof(newPIN) == "string" or typeof(newPIN) == "number", "PIN must be string or number")
		local data = self._sessionData[plr]
		if not data then return end

		if change and tonumber(newPIN) and #tostring(newPIN) == 4 then
			if plr.playerStats.bank_onBank.Value >= 1000 then
				data.PIN = tonumber(newPIN)
				plr.playerStats.bank_onBank.Value -= 1000
				self:RecordTransaction(plr, "Deduct", 1000, "PIN Change")
				return true
			else
				return false
			end
		else
			return data.PIN
		end
	end

	BankRemotes.UpdateTransactions.OnServerEvent:Connect(function(plr)
		local data = self._sessionData[plr]
		if data then
			return data.CreationDate
		end
	end)

	script.AddKey.Event:Connect(function(plr, Type, Amount, Reason, Target)
		self:RecordTransaction(plr, Type, Amount, Reason, Target)
	end)
end

return DataService`}],$y=()=>{const[p,C]=Mt.useState(!1),[R,d]=Mt.useState(!1);Mt.useEffect(()=>{const z=()=>{d(window.scrollY>50)};return window.addEventListener("scroll",z),()=>window.removeEventListener("scroll",z)},[]);const w=z=>{C(!1);const $=document.querySelector(z);$&&$.scrollIntoView({behavior:"smooth"})};return s.jsxs("nav",{className:`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${R||p?"bg-bg/80 backdrop-blur-md border-b border-white/5 shadow-lg":"bg-transparent"}`,children:[s.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between",children:[s.jsxs("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"text-2xl font-display font-bold text-primary tracking-tight hover:text-white transition-colors relative group",children:["syilfre",s.jsx("span",{className:"absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-magenta group-hover:w-full transition-all duration-300"})]}),s.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[_d.map(z=>s.jsx("button",{onClick:()=>w(z.href),className:"text-sm font-medium text-text-secondary hover:text-primary transition-colors",children:z.label},z.label)),s.jsx("button",{onClick:()=>w("#contact"),className:"px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent-purple text-bg font-bold text-sm hover:opacity-90 transition-opacity transform hover:scale-105",children:"Contact Me"})]}),s.jsx("button",{onClick:()=>C(!p),className:"md:hidden text-text-primary hover:text-primary transition-colors p-2","aria-label":"Toggle menu",children:p?s.jsx(Ky,{size:28}):s.jsx(Uy,{size:28})})]}),s.jsx("div",{className:`md:hidden absolute top-20 left-0 w-full bg-bg/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${p?"max-h-[400px] opacity-100":"max-h-0 opacity-0"}`,children:s.jsxs("div",{className:"flex flex-col p-6 space-y-4",children:[_d.map(z=>s.jsx("button",{onClick:()=>w(z.href),className:"text-lg font-medium text-text-secondary hover:text-primary text-left py-2 border-b border-white/5",children:z.label},z.label)),s.jsx("button",{onClick:()=>w("#contact"),className:"mt-4 w-full py-3 rounded-lg bg-primary text-bg font-bold text-center hover:bg-white transition-colors",children:"Contact Me"})]})})]})},Iy=({target:p,duration:C=1500,suffix:R=""})=>{const[d,w]=mf.useState(0);return mf.useEffect(()=>{let z;const $=performance.now(),re=O=>{const A=O-$,L=Math.min(A/C,1),H=Math.floor(L*p);w(H),L<1&&(z=requestAnimationFrame(re))};return z=requestAnimationFrame(re),()=>cancelAnimationFrame(z)},[p,C]),s.jsxs("span",{children:[d,R]})},Py=()=>{const p=C=>{var R;(R=document.querySelector(C))==null||R.scrollIntoView({behavior:"smooth"})};return s.jsxs("section",{className:"relative min-h-screen flex items-center justify-center pt-20 overflow-hidden",children:[s.jsxs("div",{className:"absolute inset-0 z-0",children:[s.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow"}),s.jsx("div",{className:"absolute bottom-20 right-10 w-96 h-96 bg-accent-magenta/10 rounded-full blur-[120px] animate-pulse-glow delay-1000"}),s.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_top,_#0f172a_0,_#020617_55%,_#000_100%)]"})]}),s.jsx("div",{className:"relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-24 w-full",children:s.jsxs("div",{className:"grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-12 items-center",children:[s.jsxs("div",{className:"flex flex-col items-start space-y-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx("span",{className:"inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold tracking-wider uppercase border border-primary/40",children:"Roblox Full Stack Scripter"}),s.jsxs("h1",{className:"text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1]",children:["Hi, I’m"," ",s.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent-magenta",children:"syilfre"}),"."]}),s.jsx("p",{className:"text-xl md:text-2xl text-text-secondary font-medium leading-relaxed max-w-xl",children:"I build Roblox experiences end-to-end—from UI and game systems down to data and services."}),s.jsxs("p",{className:"text-base text-text-muted leading-relaxed max-w-lg",children:["3+ years of scripting on Roblox, contributing to experiences reaching over"," ",s.jsx("span",{className:"font-semibold text-white",children:"53 million visits"}),". I focus on clean architecture, robustness, and making sure your systems are easy to maintain."]}),s.jsx("p",{className:"text-xs text-text-muted max-w-lg",children:s.jsx("span",{className:"font-semibold text-text-secondary",children:"By hiring me, you agree to the terms outlined in the Commission Guide."})})]}),s.jsxs("div",{className:"flex flex-wrap gap-4",children:[s.jsxs("button",{onClick:()=>p("#code"),className:"inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-white text-sm font-semibold tracking-wide hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30",children:[s.jsx(Dy,{className:"w-4 h-4"}),"View Code Samples"]}),s.jsxs("a",{href:"https://github.com/syilfre",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 text-text-secondary text-sm font-semibold tracking-wide hover:bg-white/10 hover:text-white transition-colors border border-white/10",children:[s.jsx(Od,{className:"w-4 h-4"}),"Open GitHub"]})]})]}),s.jsx("div",{className:"relative",children:s.jsx("div",{className:"relative bg-bg-card/80 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl",children:s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsx("div",{className:"text-xs font-mono text-text-secondary tracking-[0.25em] uppercase",children:"Profile Snapshot"}),s.jsxs("div",{className:"space-y-1",children:[s.jsx("div",{className:"text-2xl font-semibold text-white",children:"syilfre"}),s.jsx("div",{className:"text-sm text-text-muted",children:"Generalist Roblox Scripter · Systems & Data"})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-4",children:[s.jsxs("div",{className:"rounded-2xl bg-white/5 border border-white/10 px-4 py-3 flex flex-col gap-1",children:[s.jsx("div",{className:"text-xs text-text-secondary uppercase tracking-widest",children:"Experience"}),s.jsx("div",{className:"text-xl font-bold text-white",children:"3+ Years"}),s.jsx("div",{className:"text-[11px] text-text-muted",children:"Full-stack scripting since July 2022."})]}),s.jsxs("div",{className:"rounded-2xl bg-white/5 border border-white/10 px-4 py-3 flex flex-col gap-1",children:[s.jsx("div",{className:"text-xs text-text-secondary uppercase tracking-widest",children:"Impact"}),s.jsx("div",{className:"text-xl font-semibold text-white",children:s.jsx(Iy,{target:53,suffix:"M+"})}),s.jsx("div",{className:"text-[11px] text-text-muted",children:"Contributed visits across projects."})]})]})]})})})]})}),s.jsx("div",{className:"absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block",children:s.jsx(Sy,{className:"w-6 h-6 text-white"})})]})},Da=({id:p,children:C,className:R="",noPaddingTop:d=!1})=>s.jsx("section",{id:p,className:`relative w-full px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${d?"pt-0":"pt-24"} pb-24 ${R}`,children:C}),e0=()=>s.jsxs(Da,{id:"skills",className:"bg-bg",children:[s.jsxs("div",{className:"mb-16",children:[s.jsx("h2",{className:"text-3xl md:text-4xl font-display font-bold text-white mb-4",children:"Skills & Stack"}),s.jsx("p",{className:"text-text-muted text-lg",children:"What I’m comfortable scripting and maintaining."})]}),s.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-6",children:Jy.map((p,C)=>s.jsxs("div",{className:"bg-bg-card hover:bg-bg-cardHover border border-white/5 hover:border-primary/30 transition-all duration-300 p-6 rounded-2xl group",children:[s.jsx("div",{className:"w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary/10",children:s.jsx(p.icon,{className:"w-6 h-6 text-primary"})}),s.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:p.title}),s.jsx("p",{className:"text-sm text-text-muted mb-4 min-h-[40px]",children:p.description}),s.jsx("ul",{className:"space-y-2",children:p.items.map((R,d)=>s.jsxs("li",{className:"text-sm text-text-secondary flex items-center gap-2",children:[s.jsx("span",{className:"w-1 h-1 bg-accent-purple rounded-full"}),R]},d))})]},C))}),s.jsx("div",{className:"mt-16 flex flex-wrap gap-3 justify-center",children:Wy.map((p,C)=>s.jsx("span",{className:"px-4 py-2 rounded-lg bg-bg-card border border-white/10 text-primary font-mono text-sm hover:border-primary/50 transition-colors cursor-default",children:p},C))})]}),t0=[{name:"Glamour Studios",logo:"https://tr.rbxcdn.com/180DAY-1ff740e24e282c6a1ac44a37064499e0/150/150/Image/Webp/noFilter",url:"https://www.roblox.com/communities/9707467/Glamour-Studios#!/about",membersLabel:"46k+ members"},{name:"Matterhorn Studios Development",logo:"https://tr.rbxcdn.com/180DAY-3537105d5577f5349df728916f898630/150/150/Image/Webp/noFilter",url:"https://www.roblox.com/communities/13278517/Matterhorn-Studios-Development#!/about",membersLabel:"31k+ members"},{name:"My Mom Studios",logo:"https://tr.rbxcdn.com/180DAY-57a3c7fdb4ee200206b36706cf774c5e/150/150/Image/Webp/noFilter",url:"https://www.roblox.com/communities/519714861/My-Mom-Studios#!/about",membersLabel:"23k+ members"},{name:"Riviera Developpement",logo:"https://tr.rbxcdn.com/180DAY-071139e6ef58ae01d5ca35e2b6c4769c/150/150/Image/Webp/noFilter",url:"https://www.roblox.com/communities/32615623/Riviera-Developpement#!/about",membersLabel:"21k+ members"},{name:"Hallowed Ground",logo:"https://tr.rbxcdn.com/180DAY-7581fbff27fc1afb1ea0879e1c908070/150/150/Image/Webp/noFilter",url:"https://www.roblox.com/communities/34915942/Hallowed-Ground#!/about",membersLabel:"13k+ members"},{name:"Best Obbys!",logo:"https://tr.rbxcdn.com/180DAY-34fafea8bfac1099772a224ebd548a37/150/150/Image/Webp/noFilter",url:"https://www.roblox.com/communities/34483493/Best-Obbys#!/about",membersLabel:"7.8k+ members"}],l0=()=>s.jsxs(Da,{id:"studios",className:"bg-bg border-t border-white/5",children:[s.jsxs("div",{className:"mb-12 text-center md:text-left",children:[s.jsx("p",{className:"text-xs font-mono tracking-[0.3em] uppercase text-text-secondary mb-3",children:"Collaborations"}),s.jsx("h2",{className:"text-3xl md:text-4xl font-display font-bold text-white mb-3",children:"Featured Studios I've worked for"}),s.jsx("p",{className:"text-text-muted text-lg max-w-2xl",children:"Selected Roblox studios I've supported with systems, gameplay, and backend work."})]}),s.jsx("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:t0.map(p=>s.jsxs("div",{className:"group rounded-2xl bg-bg-card border border-white/5 px-5 py-6 backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.5)] hover:border-primary/70 hover:-translate-y-1 transition-all duration-200",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("img",{src:p.logo,alt:p.name,className:"w-14 h-14 rounded-full object-cover ring-2 ring-primary/50"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-xs font-mono text-text-secondary uppercase tracking-[0.18em]",children:"Studio"}),s.jsx("h3",{className:"text-base font-semibold text-white",children:p.name}),s.jsx("div",{className:"mt-2 inline-flex items-center rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5",children:s.jsx("span",{className:"text-[11px] uppercase tracking-[0.16em] text-text-secondary",children:p.membersLabel})})]})]}),s.jsx("div",{className:"mt-5 flex justify-end",children:s.jsx("a",{href:p.url,target:"_blank",rel:"noreferrer",className:"text-xs px-3 py-1.5 rounded-full border border-primary/70 text-primary hover:bg-primary/10 transition-colors",children:"View Group on Roblox"})})]},p.name))})]}),a0=[{name:"Bigfoot: Elmira's Update",image:"https://tr.rbxcdn.com/180DAY-e0eaa76d4efd48d5c4ce6a1f37b3fcc3/768/432/Image/Webp/noFilter",url:"https://www.roblox.com/games/8288889383/Bigfoot-Elmiras-Update",visitsLabel:"27M+ visits",note:"Matterhorn Programmer"},{name:"Test Place FR",image:"https://tr.rbxcdn.com/180DAY-95dea965cc6fc9bf7abd2a9f5b6fff92/768/432/Image/Webp/noFilter",url:"https://www.roblox.com/games/15499744097/New-Cars-Test-Place-FR",visitsLabel:"13.2M+ visits",note:"Additions to existing systems, bug fixes"},{name:"OutWest Chicago",image:"https://tr.rbxcdn.com/180DAY-2f427be6de584f87e3bd59f3ed919227/768/432/Image/Webp/noFilter",url:"https://www.roblox.com/games/18513421044/OutWest-Chicago",visitsLabel:"6.8M+ visits",note:"Fullstack Programmer"},{name:"Clone Troll Tower",image:"https://tr.rbxcdn.com/180DAY-2f593f96a83a94bc3792ba96d5cd225b/768/432/Image/Webp/noFilter",url:"https://www.roblox.com/games/128576448886902/Clone-Troll-Tower",visitsLabel:"3.9M+ visits",note:"Created the clone system and handled bug fixes."}],n0=()=>s.jsxs(Da,{id:"games",className:"bg-bg border-t border-white/5",children:[s.jsxs("div",{className:"mb-12 text-center md:text-left",children:[s.jsx("p",{className:"text-xs font-mono tracking-[0.3em] uppercase text-text-secondary mb-3",children:"Live Experiences"}),s.jsx("h2",{className:"text-3xl md:text-4xl font-display font-bold text-white mb-3",children:"Featured Games I've contributed to"}),s.jsx("p",{className:"text-text-muted text-lg max-w-2xl",children:"A sample of public-facing projects I've helped ship, from co-op obbies to large-scale horror and RP games."})]}),s.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:a0.map(p=>s.jsxs("article",{className:"group overflow-hidden rounded-2xl bg-bg-card border border-white/5 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-primary/70 hover:-translate-y-1.5 transition-all duration-200",children:[s.jsxs("div",{className:"relative overflow-hidden rounded-t-2xl",children:[s.jsx("img",{src:p.image,alt:p.name,className:"w-full h-40 md:h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"}),s.jsx("div",{className:"absolute bottom-3 left-4",children:s.jsx("span",{className:"px-2 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] uppercase tracking-[0.18em] text-text-muted",children:p.visitsLabel})})]}),s.jsxs("div",{className:"px-5 py-4 flex flex-col gap-3",children:[s.jsx("h3",{className:"text-sm font-semibold text-white",children:p.name}),s.jsx("p",{className:"text-xs text-text-secondary leading-relaxed",children:p.note}),s.jsx("div",{className:"mt-1 flex justify-end",children:s.jsx("a",{href:p.url,target:"_blank",rel:"noreferrer",className:"text-xs px-3 py-1.5 rounded-full border border-primary/70 text-primary hover:bg-primary/10 transition-colors",children:"View on Roblox"})})]})]},p.name))})]}),u0=({code:p})=>{const C=()=>p.split(`
`).map((d,w)=>s.jsxs("div",{className:"table-row",children:[s.jsx("span",{className:"table-cell text-right select-none text-text-muted/30 pr-4 w-8 text-xs align-top pt-[2px]",children:w+1}),s.jsx("span",{className:"table-cell whitespace-pre font-mono text-sm leading-6",children:s.jsx(i0,{content:d})})]},w));return s.jsx("div",{className:"overflow-x-auto w-full",children:s.jsx("div",{className:"table w-full border-collapse",children:C()})})},i0=({content:p})=>{if(!p)return s.jsx("span",{className:"inline-block h-4"});const C=[{type:"comment",regex:/(--.*$)/},{type:"string",regex:/(".*?"|'.*?'|\[\[.*?\]\])/},{type:"keyword",regex:/\b(local|function|end|if|then|else|elseif|return|for|do|while|repeat|until|break|in|not|and|or|true|false|nil)\b/},{type:"builtin",regex:/\b(workspace|game|script|Instance|Vector3|CFrame|Color3|UDim2|math|table|string|task|require|print|warn|error|assert|tonumber|tostring|pairs|ipairs|next|type|typeof)\b/},{type:"number",regex:/\b(\d+(\.\d+)?)\b/},{type:"method",regex:/(:)([a-zA-Z_]\w*)/},{type:"property",regex:/(\.)([a-zA-Z_]\w*)/}];let R=[{text:p,type:"text"}];return C.forEach(({type:d,regex:w})=>{const z=[];R.forEach($=>{if($.type!=="text"){z.push($);return}$.text.split(w);let re=$.text;const O=Array.from(re.matchAll(new RegExp(w,"g")));if(O.length===0){z.push($);return}let A=0;O.forEach(L=>{const H=L[0],ne=L.index;ne>A&&z.push({text:re.slice(A,ne),type:"text"}),z.push({text:H,type:d}),A=ne+H.length}),A<re.length&&z.push({text:re.slice(A),type:"text"})}),R=z}),s.jsx(s.Fragment,{children:R.map((d,w)=>{let z="text-text-primary";switch(d.type){case"comment":z="text-text-muted italic";break;case"string":z="text-accent-lime";break;case"keyword":z="text-accent-magenta font-bold";break;case"builtin":z="text-primary";break;case"number":z="text-accent-purple";break;case"method":z="text-blue-300";break;case"property":z="text-indigo-300";break;default:z="text-gray-200"}return s.jsx("span",{className:z,children:d.text},w)})})},c0=()=>{const[p,C]=Mt.useState(Md[0].id),R=d=>{C(p===d?null:d)};return s.jsxs(Da,{id:"code",className:"bg-[#080c1f]",children:[s.jsxs("div",{className:"mb-16",children:[s.jsx("h2",{className:"text-3xl md:text-4xl font-display font-bold text-white mb-4",children:"Code Samples"}),s.jsx("p",{className:"text-text-muted text-lg max-w-2xl",children:"A few real systems and snippets I’ve scripted. Instead of screenshots, here is the actual code structure I write."})]}),s.jsx("div",{className:"space-y-8",children:Md.map(d=>{const w=p===d.id;return s.jsxs("div",{className:`bg-bg-card border transition-all duration-300 rounded-2xl overflow-hidden ${w?"border-primary/40 shadow-[0_0_30px_rgba(0,0,0,0.3)]":"border-white/5 hover:border-white/10"}`,children:[s.jsxs("div",{className:"p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center",children:[s.jsxs("div",{className:"space-y-3 flex-1",children:[s.jsx("div",{className:"flex flex-wrap gap-2 mb-2",children:d.tags.map(z=>s.jsx("span",{className:"text-xs font-bold text-accent-purple bg-accent-purple/10 px-2 py-1 rounded uppercase tracking-wider",children:z},z))}),s.jsx("h3",{className:"text-2xl font-bold text-white flex items-center gap-3",children:d.title}),s.jsx("p",{className:"text-text-secondary text-sm md:text-base",children:d.description})]}),s.jsxs("div",{className:"flex gap-4 w-full md:w-auto shrink-0",children:[s.jsxs("a",{href:d.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-primary/30 text-primary font-medium hover:bg-primary/10 transition-colors",children:[s.jsx(Od,{className:"w-4 h-4"}),s.jsx("span",{className:"hidden sm:inline",children:"View on"})," GitHub"]}),s.jsx("button",{onClick:()=>R(d.id),className:`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${w?"bg-primary text-bg-card":"bg-white/10 text-white hover:bg-white/20"}`,children:w?s.jsxs(s.Fragment,{children:[s.jsx(Ey,{className:"w-4 h-4"})," Hide Code"]}):s.jsxs(s.Fragment,{children:[s.jsx(zy,{className:"w-4 h-4"})," Show Code"]})})]})]}),s.jsx("div",{className:`transition-all duration-500 ease-in-out overflow-hidden ${w?"max-h-[800px] opacity-100":"max-h-0 opacity-0"}`,children:s.jsxs("div",{className:"p-0 border-t border-white/10 bg-[#03050e] relative group",children:[s.jsx("div",{className:"absolute top-0 right-0 px-4 py-1 bg-white/5 text-xs text-text-muted rounded-bl-lg font-mono z-10",children:"Luau"}),s.jsx("div",{className:"p-6 md:p-8 overflow-x-auto custom-scrollbar max-h-[600px] overflow-y-auto",children:s.jsx(u0,{code:d.code})}),s.jsx("div",{className:"absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#03050e] to-transparent pointer-events-none"})]})})]},d.id)})})]})},f0=()=>s.jsxs(Da,{id:"process",className:"bg-bg",children:[s.jsxs("div",{className:"mb-16 text-center md:text-left",children:[s.jsx("h2",{className:"text-3xl md:text-4xl font-display font-bold text-white mb-4",children:"How I Work"}),s.jsx("p",{className:"text-text-muted text-lg",children:"From idea to working game features."})]}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-accent-purple/20 to-transparent -z-10"}),s.jsx("div",{className:"grid md:grid-cols-5 gap-8",children:Fy.map((p,C)=>s.jsxs("div",{className:"relative pt-4 group",children:[s.jsx("div",{className:"w-16 h-16 rounded-2xl bg-bg-card border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300 relative z-10",children:s.jsx("span",{className:"font-display font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent-purple",children:p.number})}),s.jsx("h3",{className:"text-xl font-bold text-white mb-3",children:p.title}),s.jsx("p",{className:"text-text-secondary text-sm leading-relaxed",children:p.description})]},C))})]}),s.jsx("div",{className:"mt-16 p-6 rounded-xl bg-primary/5 border border-primary/10 text-center max-w-2xl mx-auto",children:s.jsxs("p",{className:"text-text-primary",children:[s.jsx("span",{className:"text-primary font-bold",children:"Note:"})," I’m comfortable joining existing projects or starting from a clean base, depending on what you need."]})})]}),s0=()=>s.jsxs(s.Fragment,{children:[s.jsx(Da,{id:"contact",className:"bg-bg border-t border-white/5",children:s.jsxs("div",{className:"max-w-5xl mx-auto",children:[s.jsxs("div",{className:"mb-10",children:[s.jsx("h2",{className:"text-3xl md:text-4xl font-display font-bold text-white mb-4",children:"Contact"}),s.jsx("p",{className:"text-text-muted text-lg max-w-2xl",children:"Direct ways to reach me for commissions, collaborations, or questions. No forms—just message me where it's most convenient."})]}),s.jsxs("div",{className:"grid gap-6 md:grid-cols-3",children:[s.jsxs("a",{href:"mailto:syilfredev@gmail.com",className:"group rounded-2xl bg-bg-card border border-white/5 hover:border-primary/60 hover:bg-white/5 transition-all p-6 flex flex-col gap-2",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center",children:s.jsx(Oy,{className:"w-5 h-5 text-primary"})}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-medium text-text-secondary",children:"Email"}),s.jsx("div",{className:"text-sm text-text-muted group-hover:text-white",children:"syilfredev@gmail.com"})]})]}),s.jsx("p",{className:"text-xs text-text-muted mt-2",children:"Best for detailed commission requests and longer briefs."})]}),s.jsxs("a",{href:"https://discord.com/users/1004306737525952572",target:"_blank",rel:"noreferrer",className:"group rounded-2xl bg-bg-card border border-white/5 hover:border-primary/60 hover:bg-white/5 transition-all p-6 flex flex-col gap-2",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center",children:s.jsx(By,{className:"w-5 h-5 text-primary"})}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-medium text-text-secondary",children:"Discord"}),s.jsx("div",{className:"text-sm text-text-muted group-hover:text-white",children:"@coto3p"})]})]}),s.jsx("p",{className:"text-xs text-text-muted mt-2",children:"Fastest way to chat, discuss scope, and share screenshots."})]}),s.jsxs("a",{href:"https://www.roblox.com/users/6152191844/profile",target:"_blank",rel:"noreferrer",className:"group rounded-2xl bg-bg-card border border-white/5 hover:border-primary/60 hover:bg-white/5 transition-all p-6 flex flex-col gap-2",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center",children:s.jsx(jd,{className:"w-5 h-5 text-primary"})}),s.jsxs("div",{children:[s.jsx("div",{className:"text-sm font-medium text-text-secondary",children:"Roblox"}),s.jsx("div",{className:"text-sm text-text-muted group-hover:text-white",children:"syilfre"})]})]}),s.jsx("p",{className:"text-xs text-text-muted mt-2",children:"View my profile in-game and link projects directly to my account."})]})]})]})}),s.jsx("footer",{className:"border-t border-white/5 bg-[#050816]",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-4",children:[s.jsxs("div",{className:"flex flex-col gap-1 text-center md:text-left",children:[s.jsxs("div",{className:"text-text-muted text-sm",children:["© ",new Date().getFullYear()," syilfre. All rights reserved."]}),s.jsx("div",{className:"text-xs text-text-muted bg-white/5 px-3 py-1 rounded-full w-fit mx-auto md:mx-0",children:"Full Stack Roblox Scripter"})]}),s.jsxs("div",{className:"flex items-center gap-6",children:[s.jsx("a",{href:"https://www.roblox.com/users/6152191844/profile",target:"_blank",rel:"noreferrer",className:"text-text-secondary hover:text-white transition-colors text-sm",children:"Roblox"}),s.jsx("a",{href:"https://discord.com/users/1004306737525952572",target:"_blank",rel:"noreferrer",className:"text-text-secondary hover:text-white transition-colors text-sm",children:"Discord"}),s.jsx("a",{href:"https://github.com/syilfre",target:"_blank",rel:"noreferrer",className:"text-text-secondary hover:text-white transition-colors text-sm",children:"GitHub"})]})]})})]});function o0(){return s.jsxs("div",{className:"min-h-screen bg-bg text-text-primary font-sans selection:bg-primary/20 selection:text-white",children:[s.jsx($y,{}),s.jsxs("main",{children:[s.jsx(Py,{}),s.jsx(e0,{}),s.jsx(l0,{}),s.jsx(n0,{}),s.jsx(c0,{}),s.jsx(f0,{}),s.jsx(s0,{})]})]})}const Rd=document.getElementById("root");if(!Rd)throw new Error("Could not find root element to mount to");const r0=hy.createRoot(Rd);r0.render(s.jsx(mf.StrictMode,{children:s.jsx(o0,{})}));
