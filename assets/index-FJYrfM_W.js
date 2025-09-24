(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var _c={exports:{}},Lo={},xc={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function h_(){if(Pp)return vt;Pp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function y(I,Q,Ae){this.props=I,this.context=Q,this.refs=A,this.updater=Ae||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,Q){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,Q,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function v(){}v.prototype=y.prototype;function F(I,Q,Ae){this.props=I,this.context=Q,this.refs=A,this.updater=Ae||S}var U=F.prototype=new v;U.constructor=F,T(U,y.prototype),U.isPureReactComponent=!0;var b=Array.isArray,V=Object.prototype.hasOwnProperty,z={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function O(I,Q,Ae){var Re,Ie={},Z=null,ee=null;if(Q!=null)for(Re in Q.ref!==void 0&&(ee=Q.ref),Q.key!==void 0&&(Z=""+Q.key),Q)V.call(Q,Re)&&!k.hasOwnProperty(Re)&&(Ie[Re]=Q[Re]);var _e=arguments.length-2;if(_e===1)Ie.children=Ae;else if(1<_e){for(var De=Array(_e),Ue=0;Ue<_e;Ue++)De[Ue]=arguments[Ue+2];Ie.children=De}if(I&&I.defaultProps)for(Re in _e=I.defaultProps,_e)Ie[Re]===void 0&&(Ie[Re]=_e[Re]);return{$$typeof:s,type:I,key:Z,ref:ee,props:Ie,_owner:z.current}}function C(I,Q){return{$$typeof:s,type:I.type,key:Q,ref:I.ref,props:I.props,_owner:I._owner}}function R(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function H(I){var Q={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ae){return Q[Ae]})}var K=/\/+/g;function te(I,Q){return typeof I=="object"&&I!==null&&I.key!=null?H(""+I.key):Q.toString(36)}function de(I,Q,Ae,Re,Ie){var Z=typeof I;(Z==="undefined"||Z==="boolean")&&(I=null);var ee=!1;if(I===null)ee=!0;else switch(Z){case"string":case"number":ee=!0;break;case"object":switch(I.$$typeof){case s:case e:ee=!0}}if(ee)return ee=I,Ie=Ie(ee),I=Re===""?"."+te(ee,0):Re,b(Ie)?(Ae="",I!=null&&(Ae=I.replace(K,"$&/")+"/"),de(Ie,Q,Ae,"",function(Ue){return Ue})):Ie!=null&&(R(Ie)&&(Ie=C(Ie,Ae+(!Ie.key||ee&&ee.key===Ie.key?"":(""+Ie.key).replace(K,"$&/")+"/")+I)),Q.push(Ie)),1;if(ee=0,Re=Re===""?".":Re+":",b(I))for(var _e=0;_e<I.length;_e++){Z=I[_e];var De=Re+te(Z,_e);ee+=de(Z,Q,Ae,De,Ie)}else if(De=x(I),typeof De=="function")for(I=De.call(I),_e=0;!(Z=I.next()).done;)Z=Z.value,De=Re+te(Z,_e++),ee+=de(Z,Q,Ae,De,Ie);else if(Z==="object")throw Q=String(I),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return ee}function ae(I,Q,Ae){if(I==null)return I;var Re=[],Ie=0;return de(I,Re,"","",function(Z){return Q.call(Ae,Z,Ie++)}),Re}function re(I){if(I._status===-1){var Q=I._result;Q=Q(),Q.then(function(Ae){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ae)},function(Ae){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ae)}),I._status===-1&&(I._status=0,I._result=Q)}if(I._status===1)return I._result.default;throw I._result}var le={current:null},D={transition:null},ue={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:D,ReactCurrentOwner:z};function se(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:ae,forEach:function(I,Q,Ae){ae(I,function(){Q.apply(this,arguments)},Ae)},count:function(I){var Q=0;return ae(I,function(){Q++}),Q},toArray:function(I){return ae(I,function(Q){return Q})||[]},only:function(I){if(!R(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},vt.Component=y,vt.Fragment=n,vt.Profiler=a,vt.PureComponent=F,vt.StrictMode=r,vt.Suspense=m,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,vt.act=se,vt.cloneElement=function(I,Q,Ae){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Re=T({},I.props),Ie=I.key,Z=I.ref,ee=I._owner;if(Q!=null){if(Q.ref!==void 0&&(Z=Q.ref,ee=z.current),Q.key!==void 0&&(Ie=""+Q.key),I.type&&I.type.defaultProps)var _e=I.type.defaultProps;for(De in Q)V.call(Q,De)&&!k.hasOwnProperty(De)&&(Re[De]=Q[De]===void 0&&_e!==void 0?_e[De]:Q[De])}var De=arguments.length-2;if(De===1)Re.children=Ae;else if(1<De){_e=Array(De);for(var Ue=0;Ue<De;Ue++)_e[Ue]=arguments[Ue+2];Re.children=_e}return{$$typeof:s,type:I.type,key:Ie,ref:Z,props:Re,_owner:ee}},vt.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},vt.createElement=O,vt.createFactory=function(I){var Q=O.bind(null,I);return Q.type=I,Q},vt.createRef=function(){return{current:null}},vt.forwardRef=function(I){return{$$typeof:d,render:I}},vt.isValidElement=R,vt.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:re}},vt.memo=function(I,Q){return{$$typeof:p,type:I,compare:Q===void 0?null:Q}},vt.startTransition=function(I){var Q=D.transition;D.transition={};try{I()}finally{D.transition=Q}},vt.unstable_act=se,vt.useCallback=function(I,Q){return le.current.useCallback(I,Q)},vt.useContext=function(I){return le.current.useContext(I)},vt.useDebugValue=function(){},vt.useDeferredValue=function(I){return le.current.useDeferredValue(I)},vt.useEffect=function(I,Q){return le.current.useEffect(I,Q)},vt.useId=function(){return le.current.useId()},vt.useImperativeHandle=function(I,Q,Ae){return le.current.useImperativeHandle(I,Q,Ae)},vt.useInsertionEffect=function(I,Q){return le.current.useInsertionEffect(I,Q)},vt.useLayoutEffect=function(I,Q){return le.current.useLayoutEffect(I,Q)},vt.useMemo=function(I,Q){return le.current.useMemo(I,Q)},vt.useReducer=function(I,Q,Ae){return le.current.useReducer(I,Q,Ae)},vt.useRef=function(I){return le.current.useRef(I)},vt.useState=function(I){return le.current.useState(I)},vt.useSyncExternalStore=function(I,Q,Ae){return le.current.useSyncExternalStore(I,Q,Ae)},vt.useTransition=function(){return le.current.useTransition()},vt.version="18.3.1",vt}var Dp;function Kf(){return Dp||(Dp=1,xc.exports=h_()),xc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function p_(){if(Lp)return Lo;Lp=1;var s=Kf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,m,p){var _,g={},x=null,S=null;p!==void 0&&(x=""+p),m.key!==void 0&&(x=""+m.key),m.ref!==void 0&&(S=m.ref);for(_ in m)r.call(m,_)&&!l.hasOwnProperty(_)&&(g[_]=m[_]);if(d&&d.defaultProps)for(_ in m=d.defaultProps,m)g[_]===void 0&&(g[_]=m[_]);return{$$typeof:e,type:d,key:x,ref:S,props:g,_owner:a.current}}return Lo.Fragment=n,Lo.jsx=c,Lo.jsxs=c,Lo}var Ip;function m_(){return Ip||(Ip=1,_c.exports=p_()),_c.exports}var Ce=m_(),rl={},yc={exports:{}},Un={},Sc={exports:{}},Mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function g_(){return Up||(Up=1,(function(s){function e(D,ue){var se=D.length;D.push(ue);e:for(;0<se;){var I=se-1>>>1,Q=D[I];if(0<a(Q,ue))D[I]=ue,D[se]=Q,se=I;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var ue=D[0],se=D.pop();if(se!==ue){D[0]=se;e:for(var I=0,Q=D.length,Ae=Q>>>1;I<Ae;){var Re=2*(I+1)-1,Ie=D[Re],Z=Re+1,ee=D[Z];if(0>a(Ie,se))Z<Q&&0>a(ee,Ie)?(D[I]=ee,D[Z]=se,I=Z):(D[I]=Ie,D[Re]=se,I=Re);else if(Z<Q&&0>a(ee,se))D[I]=ee,D[Z]=se,I=Z;else break e}}return ue}function a(D,ue){var se=D.sortIndex-ue.sortIndex;return se!==0?se:D.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var m=[],p=[],_=1,g=null,x=3,S=!1,T=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(D){for(var ue=n(p);ue!==null;){if(ue.callback===null)r(p);else if(ue.startTime<=D)r(p),ue.sortIndex=ue.expirationTime,e(m,ue);else break;ue=n(p)}}function b(D){if(A=!1,U(D),!T)if(n(m)!==null)T=!0,re(V);else{var ue=n(p);ue!==null&&le(b,ue.startTime-D)}}function V(D,ue){T=!1,A&&(A=!1,v(O),O=-1),S=!0;var se=x;try{for(U(ue),g=n(m);g!==null&&(!(g.expirationTime>ue)||D&&!H());){var I=g.callback;if(typeof I=="function"){g.callback=null,x=g.priorityLevel;var Q=I(g.expirationTime<=ue);ue=s.unstable_now(),typeof Q=="function"?g.callback=Q:g===n(m)&&r(m),U(ue)}else r(m);g=n(m)}if(g!==null)var Ae=!0;else{var Re=n(p);Re!==null&&le(b,Re.startTime-ue),Ae=!1}return Ae}finally{g=null,x=se,S=!1}}var z=!1,k=null,O=-1,C=5,R=-1;function H(){return!(s.unstable_now()-R<C)}function K(){if(k!==null){var D=s.unstable_now();R=D;var ue=!0;try{ue=k(!0,D)}finally{ue?te():(z=!1,k=null)}}else z=!1}var te;if(typeof F=="function")te=function(){F(K)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ae=de.port2;de.port1.onmessage=K,te=function(){ae.postMessage(null)}}else te=function(){y(K,0)};function re(D){k=D,z||(z=!0,te())}function le(D,ue){O=y(function(){D(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,re(V))},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(m)},s.unstable_next=function(D){switch(x){case 1:case 2:case 3:var ue=3;break;default:ue=x}var se=x;x=ue;try{return D()}finally{x=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(D,ue){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var se=x;x=D;try{return ue()}finally{x=se}},s.unstable_scheduleCallback=function(D,ue,se){var I=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?I+se:I):se=I,D){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=se+Q,D={id:_++,callback:ue,priorityLevel:D,startTime:se,expirationTime:Q,sortIndex:-1},se>I?(D.sortIndex=se,e(p,D),n(m)===null&&D===n(p)&&(A?(v(O),O=-1):A=!0,le(b,se-I))):(D.sortIndex=Q,e(m,D),T||S||(T=!0,re(V))),D},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(D){var ue=x;return function(){var se=x;x=ue;try{return D.apply(this,arguments)}finally{x=se}}}})(Mc)),Mc}var Np;function v_(){return Np||(Np=1,Sc.exports=g_()),Sc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function __(){if(Fp)return Un;Fp=1;var s=Kf(),e=v_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},g={};function x(t){return m.call(g,t)?!0:m.call(_,t)?!1:p.test(t)?g[t]=!0:(_[t]=!0,!1)}function S(t,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,u){if(i===null||typeof i>"u"||S(t,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,u,f,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function F(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,F);y[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,F);y[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,F);y[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function U(t,i,o,u){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,f,u)&&(o=null),u||f===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,u=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,u?t.setAttributeNS(u,i,o):t.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),z=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),H=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),D=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=D&&t[D]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,I;function Q(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Ae=!1;function Re(t,i){if(!t||Ae)return"";Ae=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var u=J}Reflect.construct(t,[],i)}else{try{i.call()}catch(J){u=J}t.call(i.prototype)}else{try{throw Error()}catch(J){u=J}t()}}catch(J){if(J&&u&&typeof J.stack=="string"){for(var f=J.stack.split(`
`),h=u.stack.split(`
`),M=f.length-1,L=h.length-1;1<=M&&0<=L&&f[M]!==h[L];)L--;for(;1<=M&&0<=L;M--,L--)if(f[M]!==h[L]){if(M!==1||L!==1)do if(M--,L--,0>L||f[M]!==h[L]){var B=`
`+f[M].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=M&&0<=L);break}}}finally{Ae=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?Q(t):""}function Ie(t){switch(t.tag){case 5:return Q(t.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return t=Re(t.type,!1),t;case 11:return t=Re(t.type.render,!1),t;case 1:return t=Re(t.type,!0),t;default:return""}}function Z(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case z:return"Portal";case C:return"Profiler";case O:return"StrictMode";case te:return"Suspense";case de:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case K:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ae:return i=t.displayName||null,i!==null?i:Z(t.type)||"Memo";case re:i=t._payload,t=t._init;try{return Z(t(i))}catch{}}return null}function ee(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(i);case 8:return i===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function De(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ue(t){var i=De(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){u=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ht(t){t._valueTracker||(t._valueTracker=Ue(t))}function Gt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=De(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function N(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dt(t,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function ft(t,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=_e(i.value!=null?i.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function rt(t,i){i=i.checked,i!=null&&U(t,"checked",i,!1)}function Xe(t,i){rt(t,i);var o=_e(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?je(t,i.type,o):i.hasOwnProperty("defaultValue")&&je(t,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Nt(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function je(t,i,o){(i!=="number"||N(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var ut=Array.isArray;function zt(t,i,o,u){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&u&&(t[o].defaultSelected=!0)}else{for(o=""+_e(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,u&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Bt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function P(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(ut(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:_e(o)}}function E(t,i){var o=_e(i.value),u=_e(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function q(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function fe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?fe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ce,Ze=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,u,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(ce=ce||document.createElement("div"),ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ce.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Te(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qe=["Webkit","ms","Moz","O"];Object.keys(Be).forEach(function(t){Qe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Be[i]=Be[t]})});function Me(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Be.hasOwnProperty(t)&&Be[t]?(""+i).trim():i+"px"}function Ne(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,f=Me(o,i[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,f):t[o]=f}}var st=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $e(t,i){if(i){if(st[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function be(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dt=null;function G(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ye=null,we=null,Fe=null;function xe(t){if(t=vo(t)){if(typeof ye!="function")throw Error(n(280));var i=t.stateNode;i&&(i=xa(i),ye(t.stateNode,t.type,i))}}function he(t){we?Fe?Fe.push(t):Fe=[t]:we=t}function Ye(){if(we){var t=we,i=Fe;if(Fe=we=null,xe(t),i)for(t=0;t<i.length;t++)xe(i[t])}}function ct(t,i){return t(i)}function bt(){}var Et=!1;function jn(t,i,o){if(Et)return t(i,o);Et=!0;try{return ct(t,i,o)}finally{Et=!1,(we!==null||Fe!==null)&&(bt(),Ye())}}function pn(t,i){var o=t.stateNode;if(o===null)return null;var u=xa(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var es=!1;if(d)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){es=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{es=!1}function Js(t,i,o,u,f,h,M,L,B){var J=Array.prototype.slice.call(arguments,3);try{i.apply(o,J)}catch(ge){this.onError(ge)}}var ji=!1,Er=null,Ai=!1,ts=null,ns={onError:function(t){ji=!0,Er=t}};function Qo(t,i,o,u,f,h,M,L,B){ji=!1,Er=null,Js.apply(ns,arguments)}function Jo(t,i,o,u,f,h,M,L,B){if(Qo.apply(this,arguments),ji){if(ji){var J=Er;ji=!1,Er=null}else throw Error(n(198));Ai||(Ai=!0,ts=J)}}function Ri(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function ea(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ta(t){if(Ri(t)!==t)throw Error(n(188))}function Vl(t){var i=t.alternate;if(!i){if(i=Ri(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,u=i;;){var f=o.return;if(f===null)break;var h=f.alternate;if(h===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===o)return ta(f),t;if(h===u)return ta(f),i;h=h.sibling}throw Error(n(188))}if(o.return!==u.return)o=f,u=h;else{for(var M=!1,L=f.child;L;){if(L===o){M=!0,o=f,u=h;break}if(L===u){M=!0,u=f,o=h;break}L=L.sibling}if(!M){for(L=h.child;L;){if(L===o){M=!0,o=h,u=f;break}if(L===u){M=!0,u=h,o=f;break}L=L.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function na(t){return t=Vl(t),t!==null?ia(t):null}function ia(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ia(t);if(i!==null)return i;t=t.sibling}return null}var w=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,ne=e.unstable_shouldYield,ie=e.unstable_requestPaint,X=e.unstable_now,Se=e.unstable_getCurrentPriorityLevel,Pe=e.unstable_ImmediatePriority,Ve=e.unstable_UserBlockingPriority,Oe=e.unstable_NormalPriority,it=e.unstable_LowPriority,ot=e.unstable_IdlePriority,Je=null,at=null;function Ct(t){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Je,t,void 0,(t.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:et,Ft=Math.log,Pt=Math.LN2;function et(t){return t>>>=0,t===0?32:31-(Ft(t)/Pt|0)|0}var Lt=64,_t=4194304;function en(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ii(t,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var L=M&~f;L!==0?u=en(L):(h&=M,h!==0&&(u=en(h)))}else M=o&~f,M!==0?u=en(M):h!==0&&(u=en(h));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)o=31-Tt(i),f=1<<o,u|=t[o],i&=~f;return u}function En(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tr(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-Tt(h),L=1<<M,B=f[M];B===-1?((L&o)===0||(L&u)!==0)&&(f[M]=En(L,i)):B<=i&&(t.expiredLanes|=L),h&=~L}}function Ot(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Tn(){var t=Lt;return Lt<<=1,(Lt&4194240)===0&&(Lt=64),t}function mn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function qt(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Tt(i),t[i]=o}function gn(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-Tt(o),h=1<<f;i[f]=0,u[f]=-1,t[f]=-1,o&=~h}}function wr(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-Tt(o),f=1<<u;f&i|t[u]&i&&(t[u]|=i),o&=~f}}var xt=0;function ld(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ud,Hl,cd,fd,dd,Gl=!1,ra=[],Yi=null,qi=null,$i=null,eo=new Map,to=new Map,Ki=[],Ng="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hd(t,i){switch(t){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":eo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(i.pointerId)}}function no(t,i,o,u,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:h,targetContainers:[f]},i!==null&&(i=vo(i),i!==null&&Hl(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Fg(t,i,o,u,f){switch(i){case"focusin":return Yi=no(Yi,t,i,o,u,f),!0;case"dragenter":return qi=no(qi,t,i,o,u,f),!0;case"mouseover":return $i=no($i,t,i,o,u,f),!0;case"pointerover":var h=f.pointerId;return eo.set(h,no(eo.get(h)||null,t,i,o,u,f)),!0;case"gotpointercapture":return h=f.pointerId,to.set(h,no(to.get(h)||null,t,i,o,u,f)),!0}return!1}function pd(t){var i=Ar(t.target);if(i!==null){var o=Ri(i);if(o!==null){if(i=o.tag,i===13){if(i=ea(o),i!==null){t.blockedOn=i,dd(t.priority,function(){cd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sa(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Xl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);dt=u,o.target.dispatchEvent(u),dt=null}else return i=vo(o),i!==null&&Hl(i),t.blockedOn=o,!1;i.shift()}return!0}function md(t,i,o){sa(t)&&o.delete(i)}function Og(){Gl=!1,Yi!==null&&sa(Yi)&&(Yi=null),qi!==null&&sa(qi)&&(qi=null),$i!==null&&sa($i)&&($i=null),eo.forEach(md),to.forEach(md)}function io(t,i){t.blockedOn===i&&(t.blockedOn=null,Gl||(Gl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Og)))}function ro(t){function i(f){return io(f,t)}if(0<ra.length){io(ra[0],t);for(var o=1;o<ra.length;o++){var u=ra[o];u.blockedOn===t&&(u.blockedOn=null)}}for(Yi!==null&&io(Yi,t),qi!==null&&io(qi,t),$i!==null&&io($i,t),eo.forEach(i),to.forEach(i),o=0;o<Ki.length;o++)u=Ki[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<Ki.length&&(o=Ki[0],o.blockedOn===null);)pd(o),o.blockedOn===null&&Ki.shift()}var is=b.ReactCurrentBatchConfig,oa=!0;function kg(t,i,o,u){var f=xt,h=is.transition;is.transition=null;try{xt=1,Wl(t,i,o,u)}finally{xt=f,is.transition=h}}function zg(t,i,o,u){var f=xt,h=is.transition;is.transition=null;try{xt=4,Wl(t,i,o,u)}finally{xt=f,is.transition=h}}function Wl(t,i,o,u){if(oa){var f=Xl(t,i,o,u);if(f===null)lu(t,i,u,aa,o),hd(t,u);else if(Fg(f,t,i,o,u))u.stopPropagation();else if(hd(t,u),i&4&&-1<Ng.indexOf(t)){for(;f!==null;){var h=vo(f);if(h!==null&&ud(h),h=Xl(t,i,o,u),h===null&&lu(t,i,u,aa,o),h===f)break;f=h}f!==null&&u.stopPropagation()}else lu(t,i,u,null,o)}}var aa=null;function Xl(t,i,o,u){if(aa=null,t=G(u),t=Ar(t),t!==null)if(i=Ri(t),i===null)t=null;else if(o=i.tag,o===13){if(t=ea(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return aa=t,null}function gd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Se()){case Pe:return 1;case Ve:return 4;case Oe:case it:return 16;case ot:return 536870912;default:return 16}default:return 16}}var Zi=null,jl=null,la=null;function vd(){if(la)return la;var t,i=jl,o=i.length,u,f="value"in Zi?Zi.value:Zi.textContent,h=f.length;for(t=0;t<o&&i[t]===f[t];t++);var M=o-t;for(u=1;u<=M&&i[o-u]===f[h-u];u++);return la=f.slice(t,1<u?1-u:void 0)}function ua(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ca(){return!0}function _d(){return!1}function zn(t){function i(o,u,f,h,M){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(o=t[L],this[L]=o?o(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ca:_d,this.isPropagationStopped=_d,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),i}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=zn(rs),so=se({},rs,{view:0,detail:0}),Bg=zn(so),ql,$l,oo,fa=se({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(ql=t.screenX-oo.screenX,$l=t.screenY-oo.screenY):$l=ql=0,oo=t),ql)},movementY:function(t){return"movementY"in t?t.movementY:$l}}),xd=zn(fa),Vg=se({},fa,{dataTransfer:0}),Hg=zn(Vg),Gg=se({},so,{relatedTarget:0}),Kl=zn(Gg),Wg=se({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Xg=zn(Wg),jg=se({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yg=zn(jg),qg=se({},rs,{data:0}),yd=zn(qg),$g={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Zg[t])?!!i[t]:!1}function Zl(){return Qg}var Jg=se({},so,{key:function(t){if(t.key){var i=$g[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ua(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zl,charCode:function(t){return t.type==="keypress"?ua(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ua(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ev=zn(Jg),tv=se({},fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sd=zn(tv),nv=se({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zl}),iv=zn(nv),rv=se({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),sv=zn(rv),ov=se({},fa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),av=zn(ov),lv=[9,13,27,32],Ql=d&&"CompositionEvent"in window,ao=null;d&&"documentMode"in document&&(ao=document.documentMode);var uv=d&&"TextEvent"in window&&!ao,Md=d&&(!Ql||ao&&8<ao&&11>=ao),Ed=" ",Td=!1;function wd(t,i){switch(t){case"keyup":return lv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ad(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function cv(t,i){switch(t){case"compositionend":return Ad(i);case"keypress":return i.which!==32?null:(Td=!0,Ed);case"textInput":return t=i.data,t===Ed&&Td?null:t;default:return null}}function fv(t,i){if(ss)return t==="compositionend"||!Ql&&wd(t,i)?(t=vd(),la=jl=Zi=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Md&&i.locale!=="ko"?null:i.data;default:return null}}var dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!dv[t.type]:i==="textarea"}function Cd(t,i,o,u){he(u),i=ga(i,"onChange"),0<i.length&&(o=new Yl("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var lo=null,uo=null;function hv(t){jd(t,0)}function da(t){var i=cs(t);if(Gt(i))return t}function pv(t,i){if(t==="change")return i}var bd=!1;if(d){var Jl;if(d){var eu="oninput"in document;if(!eu){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),eu=typeof Pd.oninput=="function"}Jl=eu}else Jl=!1;bd=Jl&&(!document.documentMode||9<document.documentMode)}function Dd(){lo&&(lo.detachEvent("onpropertychange",Ld),uo=lo=null)}function Ld(t){if(t.propertyName==="value"&&da(uo)){var i=[];Cd(i,uo,t,G(t)),jn(hv,i)}}function mv(t,i,o){t==="focusin"?(Dd(),lo=i,uo=o,lo.attachEvent("onpropertychange",Ld)):t==="focusout"&&Dd()}function gv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return da(uo)}function vv(t,i){if(t==="click")return da(i)}function _v(t,i){if(t==="input"||t==="change")return da(i)}function xv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ri=typeof Object.is=="function"?Object.is:xv;function co(t,i){if(ri(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!m.call(i,f)||!ri(t[f],i[f]))return!1}return!0}function Id(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ud(t,i){var o=Id(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Id(o)}}function Nd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Nd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Fd(){for(var t=window,i=N();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=N(t.document)}return i}function tu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function yv(t){var i=Fd(),o=t.focusedElem,u=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Nd(o.ownerDocument.documentElement,o)){if(u!==null&&tu(o)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,h=Math.min(u.start,f);u=u.end===void 0?h:Math.min(u.end,f),!t.extend&&h>u&&(f=u,u=h,h=f),f=Ud(o,h);var M=Ud(o,u);f&&M&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>u?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Sv=d&&"documentMode"in document&&11>=document.documentMode,os=null,nu=null,fo=null,iu=!1;function Od(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;iu||os==null||os!==N(u)||(u=os,"selectionStart"in u&&tu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),fo&&co(fo,u)||(fo=u,u=ga(nu,"onSelect"),0<u.length&&(i=new Yl("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=os)))}function ha(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var as={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionend:ha("Transition","TransitionEnd")},ru={},kd={};d&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function pa(t){if(ru[t])return ru[t];if(!as[t])return t;var i=as[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in kd)return ru[t]=i[o];return t}var zd=pa("animationend"),Bd=pa("animationiteration"),Vd=pa("animationstart"),Hd=pa("transitionend"),Gd=new Map,Wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,i){Gd.set(t,i),l(i,[t])}for(var su=0;su<Wd.length;su++){var ou=Wd[su],Mv=ou.toLowerCase(),Ev=ou[0].toUpperCase()+ou.slice(1);Qi(Mv,"on"+Ev)}Qi(zd,"onAnimationEnd"),Qi(Bd,"onAnimationIteration"),Qi(Vd,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(Hd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function Xd(t,i,o){var u=t.type||"unknown-event";t.currentTarget=o,Jo(u,i,void 0,t),t.currentTarget=null}function jd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],f=u.event;u=u.listeners;e:{var h=void 0;if(i)for(var M=u.length-1;0<=M;M--){var L=u[M],B=L.instance,J=L.currentTarget;if(L=L.listener,B!==h&&f.isPropagationStopped())break e;Xd(f,L,J),h=B}else for(M=0;M<u.length;M++){if(L=u[M],B=L.instance,J=L.currentTarget,L=L.listener,B!==h&&f.isPropagationStopped())break e;Xd(f,L,J),h=B}}}if(Ai)throw t=ts,Ai=!1,ts=null,t}function Vt(t,i){var o=i[pu];o===void 0&&(o=i[pu]=new Set);var u=t+"__bubble";o.has(u)||(Yd(i,t,2,!1),o.add(u))}function au(t,i,o){var u=0;i&&(u|=4),Yd(o,t,u,i)}var ma="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[ma]){t[ma]=!0,r.forEach(function(o){o!=="selectionchange"&&(Tv.has(o)||au(o,!1,t),au(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ma]||(i[ma]=!0,au("selectionchange",!1,i))}}function Yd(t,i,o,u){switch(gd(i)){case 1:var f=kg;break;case 4:f=zg;break;default:f=Wl}o=f.bind(null,i,o,t),f=void 0,!es||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function lu(t,i,o,u,f){var h=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var L=u.stateNode.containerInfo;if(L===f||L.nodeType===8&&L.parentNode===f)break;if(M===4)for(M=u.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;M=M.return}for(;L!==null;){if(M=Ar(L),M===null)return;if(B=M.tag,B===5||B===6){u=h=M;continue e}L=L.parentNode}}u=u.return}jn(function(){var J=h,ge=G(o),ve=[];e:{var pe=Gd.get(t);if(pe!==void 0){var ke=Yl,He=t;switch(t){case"keypress":if(ua(o)===0)break e;case"keydown":case"keyup":ke=ev;break;case"focusin":He="focus",ke=Kl;break;case"focusout":He="blur",ke=Kl;break;case"beforeblur":case"afterblur":ke=Kl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=Hg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=iv;break;case zd:case Bd:case Vd:ke=Xg;break;case Hd:ke=sv;break;case"scroll":ke=Bg;break;case"wheel":ke=av;break;case"copy":case"cut":case"paste":ke=Yg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Sd}var qe=(i&4)!==0,$t=!qe&&t==="scroll",Y=qe?pe!==null?pe+"Capture":null:pe;qe=[];for(var W=J,$;W!==null;){$=W;var Ee=$.stateNode;if($.tag===5&&Ee!==null&&($=Ee,Y!==null&&(Ee=pn(W,Y),Ee!=null&&qe.push(mo(W,Ee,$)))),$t)break;W=W.return}0<qe.length&&(pe=new ke(pe,He,null,o,ge),ve.push({event:pe,listeners:qe}))}}if((i&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",ke=t==="mouseout"||t==="pointerout",pe&&o!==dt&&(He=o.relatedTarget||o.fromElement)&&(Ar(He)||He[Ci]))break e;if((ke||pe)&&(pe=ge.window===ge?ge:(pe=ge.ownerDocument)?pe.defaultView||pe.parentWindow:window,ke?(He=o.relatedTarget||o.toElement,ke=J,He=He?Ar(He):null,He!==null&&($t=Ri(He),He!==$t||He.tag!==5&&He.tag!==6)&&(He=null)):(ke=null,He=J),ke!==He)){if(qe=xd,Ee="onMouseLeave",Y="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(qe=Sd,Ee="onPointerLeave",Y="onPointerEnter",W="pointer"),$t=ke==null?pe:cs(ke),$=He==null?pe:cs(He),pe=new qe(Ee,W+"leave",ke,o,ge),pe.target=$t,pe.relatedTarget=$,Ee=null,Ar(ge)===J&&(qe=new qe(Y,W+"enter",He,o,ge),qe.target=$,qe.relatedTarget=$t,Ee=qe),$t=Ee,ke&&He)t:{for(qe=ke,Y=He,W=0,$=qe;$;$=ls($))W++;for($=0,Ee=Y;Ee;Ee=ls(Ee))$++;for(;0<W-$;)qe=ls(qe),W--;for(;0<$-W;)Y=ls(Y),$--;for(;W--;){if(qe===Y||Y!==null&&qe===Y.alternate)break t;qe=ls(qe),Y=ls(Y)}qe=null}else qe=null;ke!==null&&qd(ve,pe,ke,qe,!1),He!==null&&$t!==null&&qd(ve,$t,He,qe,!0)}}e:{if(pe=J?cs(J):window,ke=pe.nodeName&&pe.nodeName.toLowerCase(),ke==="select"||ke==="input"&&pe.type==="file")var Ke=pv;else if(Rd(pe))if(bd)Ke=_v;else{Ke=gv;var tt=mv}else(ke=pe.nodeName)&&ke.toLowerCase()==="input"&&(pe.type==="checkbox"||pe.type==="radio")&&(Ke=vv);if(Ke&&(Ke=Ke(t,J))){Cd(ve,Ke,o,ge);break e}tt&&tt(t,pe,J),t==="focusout"&&(tt=pe._wrapperState)&&tt.controlled&&pe.type==="number"&&je(pe,"number",pe.value)}switch(tt=J?cs(J):window,t){case"focusin":(Rd(tt)||tt.contentEditable==="true")&&(os=tt,nu=J,fo=null);break;case"focusout":fo=nu=os=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,Od(ve,o,ge);break;case"selectionchange":if(Sv)break;case"keydown":case"keyup":Od(ve,o,ge)}var nt;if(Ql)e:{switch(t){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else ss?wd(t,o)&&(lt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(lt="onCompositionStart");lt&&(Md&&o.locale!=="ko"&&(ss||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&ss&&(nt=vd()):(Zi=ge,jl="value"in Zi?Zi.value:Zi.textContent,ss=!0)),tt=ga(J,lt),0<tt.length&&(lt=new yd(lt,t,null,o,ge),ve.push({event:lt,listeners:tt}),nt?lt.data=nt:(nt=Ad(o),nt!==null&&(lt.data=nt)))),(nt=uv?cv(t,o):fv(t,o))&&(J=ga(J,"onBeforeInput"),0<J.length&&(ge=new yd("onBeforeInput","beforeinput",null,o,ge),ve.push({event:ge,listeners:J}),ge.data=nt))}jd(ve,i)})}function mo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ga(t,i){for(var o=i+"Capture",u=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=pn(t,o),h!=null&&u.unshift(mo(t,h,f)),h=pn(t,i),h!=null&&u.push(mo(t,h,f))),t=t.return}return u}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qd(t,i,o,u,f){for(var h=i._reactName,M=[];o!==null&&o!==u;){var L=o,B=L.alternate,J=L.stateNode;if(B!==null&&B===u)break;L.tag===5&&J!==null&&(L=J,f?(B=pn(o,h),B!=null&&M.unshift(mo(o,B,L))):f||(B=pn(o,h),B!=null&&M.push(mo(o,B,L)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var wv=/\r\n?/g,Av=/\u0000|\uFFFD/g;function $d(t){return(typeof t=="string"?t:""+t).replace(wv,`
`).replace(Av,"")}function va(t,i,o){if(i=$d(i),$d(t)!==i&&o)throw Error(n(425))}function _a(){}var uu=null,cu=null;function fu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var du=typeof setTimeout=="function"?setTimeout:void 0,Rv=typeof clearTimeout=="function"?clearTimeout:void 0,Kd=typeof Promise=="function"?Promise:void 0,Cv=typeof queueMicrotask=="function"?queueMicrotask:typeof Kd<"u"?function(t){return Kd.resolve(null).then(t).catch(bv)}:du;function bv(t){setTimeout(function(){throw t})}function hu(t,i){var o=i,u=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){t.removeChild(f),ro(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);ro(i)}function Ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Zd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var us=Math.random().toString(36).slice(2),gi="__reactFiber$"+us,go="__reactProps$"+us,Ci="__reactContainer$"+us,pu="__reactEvents$"+us,Pv="__reactListeners$"+us,Dv="__reactHandles$"+us;function Ar(t){var i=t[gi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ci]||o[gi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Zd(t);t!==null;){if(o=t[gi])return o;t=Zd(t)}return i}t=o,o=t.parentNode}return null}function vo(t){return t=t[gi]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function xa(t){return t[go]||null}var mu=[],fs=-1;function er(t){return{current:t}}function Ht(t){0>fs||(t.current=mu[fs],mu[fs]=null,fs--)}function kt(t,i){fs++,mu[fs]=t.current,t.current=i}var tr={},vn=er(tr),bn=er(!1),Rr=tr;function ds(t,i){var o=t.type.contextTypes;if(!o)return tr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in o)f[h]=i[h];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Pn(t){return t=t.childContextTypes,t!=null}function ya(){Ht(bn),Ht(vn)}function Qd(t,i,o){if(vn.current!==tr)throw Error(n(168));kt(vn,i),kt(bn,o)}function Jd(t,i,o){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(n(108,ee(t)||"Unknown",f));return se({},o,u)}function Sa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Rr=vn.current,kt(vn,t),kt(bn,bn.current),!0}function eh(t,i,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=Jd(t,i,Rr),u.__reactInternalMemoizedMergedChildContext=t,Ht(bn),Ht(vn),kt(vn,t)):Ht(bn),kt(bn,o)}var bi=null,Ma=!1,gu=!1;function th(t){bi===null?bi=[t]:bi.push(t)}function Lv(t){Ma=!0,th(t)}function nr(){if(!gu&&bi!==null){gu=!0;var t=0,i=xt;try{var o=bi;for(xt=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}bi=null,Ma=!1}catch(f){throw bi!==null&&(bi=bi.slice(t+1)),w(Pe,nr),f}finally{xt=i,gu=!1}}return null}var hs=[],ps=0,Ea=null,Ta=0,Yn=[],qn=0,Cr=null,Pi=1,Di="";function br(t,i){hs[ps++]=Ta,hs[ps++]=Ea,Ea=t,Ta=i}function nh(t,i,o){Yn[qn++]=Pi,Yn[qn++]=Di,Yn[qn++]=Cr,Cr=t;var u=Pi;t=Di;var f=32-Tt(u)-1;u&=~(1<<f),o+=1;var h=32-Tt(i)+f;if(30<h){var M=f-f%5;h=(u&(1<<M)-1).toString(32),u>>=M,f-=M,Pi=1<<32-Tt(i)+f|o<<f|u,Di=h+t}else Pi=1<<h|o<<f|u,Di=t}function vu(t){t.return!==null&&(br(t,1),nh(t,1,0))}function _u(t){for(;t===Ea;)Ea=hs[--ps],hs[ps]=null,Ta=hs[--ps],hs[ps]=null;for(;t===Cr;)Cr=Yn[--qn],Yn[qn]=null,Di=Yn[--qn],Yn[qn]=null,Pi=Yn[--qn],Yn[qn]=null}var Bn=null,Vn=null,Wt=!1,si=null;function ih(t,i){var o=Qn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function rh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Bn=t,Vn=Ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Bn=t,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Cr!==null?{id:Pi,overflow:Di}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Qn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Bn=t,Vn=null,!0):!1;default:return!1}}function xu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yu(t){if(Wt){var i=Vn;if(i){var o=i;if(!rh(t,i)){if(xu(t))throw Error(n(418));i=Ji(o.nextSibling);var u=Bn;i&&rh(t,i)?ih(u,o):(t.flags=t.flags&-4097|2,Wt=!1,Bn=t)}}else{if(xu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Wt=!1,Bn=t}}}function sh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bn=t}function wa(t){if(t!==Bn)return!1;if(!Wt)return sh(t),Wt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!fu(t.type,t.memoizedProps)),i&&(i=Vn)){if(xu(t))throw oh(),Error(n(418));for(;i;)ih(t,i),i=Ji(i.nextSibling)}if(sh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Vn=Ji(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Vn=null}}else Vn=Bn?Ji(t.stateNode.nextSibling):null;return!0}function oh(){for(var t=Vn;t;)t=Ji(t.nextSibling)}function ms(){Vn=Bn=null,Wt=!1}function Su(t){si===null?si=[t]:si.push(t)}var Iv=b.ReactCurrentBatchConfig;function _o(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var f=u,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var L=f.refs;M===null?delete L[h]:L[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Aa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function ah(t){var i=t._init;return i(t._payload)}function lh(t){function i(Y,W){if(t){var $=Y.deletions;$===null?(Y.deletions=[W],Y.flags|=16):$.push(W)}}function o(Y,W){if(!t)return null;for(;W!==null;)i(Y,W),W=W.sibling;return null}function u(Y,W){for(Y=new Map;W!==null;)W.key!==null?Y.set(W.key,W):Y.set(W.index,W),W=W.sibling;return Y}function f(Y,W){return Y=cr(Y,W),Y.index=0,Y.sibling=null,Y}function h(Y,W,$){return Y.index=$,t?($=Y.alternate,$!==null?($=$.index,$<W?(Y.flags|=2,W):$):(Y.flags|=2,W)):(Y.flags|=1048576,W)}function M(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function L(Y,W,$,Ee){return W===null||W.tag!==6?(W=dc($,Y.mode,Ee),W.return=Y,W):(W=f(W,$),W.return=Y,W)}function B(Y,W,$,Ee){var Ke=$.type;return Ke===k?ge(Y,W,$.props.children,Ee,$.key):W!==null&&(W.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===re&&ah(Ke)===W.type)?(Ee=f(W,$.props),Ee.ref=_o(Y,W,$),Ee.return=Y,Ee):(Ee=Ka($.type,$.key,$.props,null,Y.mode,Ee),Ee.ref=_o(Y,W,$),Ee.return=Y,Ee)}function J(Y,W,$,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==$.containerInfo||W.stateNode.implementation!==$.implementation?(W=hc($,Y.mode,Ee),W.return=Y,W):(W=f(W,$.children||[]),W.return=Y,W)}function ge(Y,W,$,Ee,Ke){return W===null||W.tag!==7?(W=Or($,Y.mode,Ee,Ke),W.return=Y,W):(W=f(W,$),W.return=Y,W)}function ve(Y,W,$){if(typeof W=="string"&&W!==""||typeof W=="number")return W=dc(""+W,Y.mode,$),W.return=Y,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case V:return $=Ka(W.type,W.key,W.props,null,Y.mode,$),$.ref=_o(Y,null,W),$.return=Y,$;case z:return W=hc(W,Y.mode,$),W.return=Y,W;case re:var Ee=W._init;return ve(Y,Ee(W._payload),$)}if(ut(W)||ue(W))return W=Or(W,Y.mode,$,null),W.return=Y,W;Aa(Y,W)}return null}function pe(Y,W,$,Ee){var Ke=W!==null?W.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Ke!==null?null:L(Y,W,""+$,Ee);if(typeof $=="object"&&$!==null){switch($.$$typeof){case V:return $.key===Ke?B(Y,W,$,Ee):null;case z:return $.key===Ke?J(Y,W,$,Ee):null;case re:return Ke=$._init,pe(Y,W,Ke($._payload),Ee)}if(ut($)||ue($))return Ke!==null?null:ge(Y,W,$,Ee,null);Aa(Y,$)}return null}function ke(Y,W,$,Ee,Ke){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get($)||null,L(W,Y,""+Ee,Ke);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case V:return Y=Y.get(Ee.key===null?$:Ee.key)||null,B(W,Y,Ee,Ke);case z:return Y=Y.get(Ee.key===null?$:Ee.key)||null,J(W,Y,Ee,Ke);case re:var tt=Ee._init;return ke(Y,W,$,tt(Ee._payload),Ke)}if(ut(Ee)||ue(Ee))return Y=Y.get($)||null,ge(W,Y,Ee,Ke,null);Aa(W,Ee)}return null}function He(Y,W,$,Ee){for(var Ke=null,tt=null,nt=W,lt=W=0,cn=null;nt!==null&&lt<$.length;lt++){nt.index>lt?(cn=nt,nt=null):cn=nt.sibling;var At=pe(Y,nt,$[lt],Ee);if(At===null){nt===null&&(nt=cn);break}t&&nt&&At.alternate===null&&i(Y,nt),W=h(At,W,lt),tt===null?Ke=At:tt.sibling=At,tt=At,nt=cn}if(lt===$.length)return o(Y,nt),Wt&&br(Y,lt),Ke;if(nt===null){for(;lt<$.length;lt++)nt=ve(Y,$[lt],Ee),nt!==null&&(W=h(nt,W,lt),tt===null?Ke=nt:tt.sibling=nt,tt=nt);return Wt&&br(Y,lt),Ke}for(nt=u(Y,nt);lt<$.length;lt++)cn=ke(nt,Y,lt,$[lt],Ee),cn!==null&&(t&&cn.alternate!==null&&nt.delete(cn.key===null?lt:cn.key),W=h(cn,W,lt),tt===null?Ke=cn:tt.sibling=cn,tt=cn);return t&&nt.forEach(function(fr){return i(Y,fr)}),Wt&&br(Y,lt),Ke}function qe(Y,W,$,Ee){var Ke=ue($);if(typeof Ke!="function")throw Error(n(150));if($=Ke.call($),$==null)throw Error(n(151));for(var tt=Ke=null,nt=W,lt=W=0,cn=null,At=$.next();nt!==null&&!At.done;lt++,At=$.next()){nt.index>lt?(cn=nt,nt=null):cn=nt.sibling;var fr=pe(Y,nt,At.value,Ee);if(fr===null){nt===null&&(nt=cn);break}t&&nt&&fr.alternate===null&&i(Y,nt),W=h(fr,W,lt),tt===null?Ke=fr:tt.sibling=fr,tt=fr,nt=cn}if(At.done)return o(Y,nt),Wt&&br(Y,lt),Ke;if(nt===null){for(;!At.done;lt++,At=$.next())At=ve(Y,At.value,Ee),At!==null&&(W=h(At,W,lt),tt===null?Ke=At:tt.sibling=At,tt=At);return Wt&&br(Y,lt),Ke}for(nt=u(Y,nt);!At.done;lt++,At=$.next())At=ke(nt,Y,lt,At.value,Ee),At!==null&&(t&&At.alternate!==null&&nt.delete(At.key===null?lt:At.key),W=h(At,W,lt),tt===null?Ke=At:tt.sibling=At,tt=At);return t&&nt.forEach(function(d_){return i(Y,d_)}),Wt&&br(Y,lt),Ke}function $t(Y,W,$,Ee){if(typeof $=="object"&&$!==null&&$.type===k&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case V:e:{for(var Ke=$.key,tt=W;tt!==null;){if(tt.key===Ke){if(Ke=$.type,Ke===k){if(tt.tag===7){o(Y,tt.sibling),W=f(tt,$.props.children),W.return=Y,Y=W;break e}}else if(tt.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===re&&ah(Ke)===tt.type){o(Y,tt.sibling),W=f(tt,$.props),W.ref=_o(Y,tt,$),W.return=Y,Y=W;break e}o(Y,tt);break}else i(Y,tt);tt=tt.sibling}$.type===k?(W=Or($.props.children,Y.mode,Ee,$.key),W.return=Y,Y=W):(Ee=Ka($.type,$.key,$.props,null,Y.mode,Ee),Ee.ref=_o(Y,W,$),Ee.return=Y,Y=Ee)}return M(Y);case z:e:{for(tt=$.key;W!==null;){if(W.key===tt)if(W.tag===4&&W.stateNode.containerInfo===$.containerInfo&&W.stateNode.implementation===$.implementation){o(Y,W.sibling),W=f(W,$.children||[]),W.return=Y,Y=W;break e}else{o(Y,W);break}else i(Y,W);W=W.sibling}W=hc($,Y.mode,Ee),W.return=Y,Y=W}return M(Y);case re:return tt=$._init,$t(Y,W,tt($._payload),Ee)}if(ut($))return He(Y,W,$,Ee);if(ue($))return qe(Y,W,$,Ee);Aa(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,W!==null&&W.tag===6?(o(Y,W.sibling),W=f(W,$),W.return=Y,Y=W):(o(Y,W),W=dc($,Y.mode,Ee),W.return=Y,Y=W),M(Y)):o(Y,W)}return $t}var gs=lh(!0),uh=lh(!1),Ra=er(null),Ca=null,vs=null,Mu=null;function Eu(){Mu=vs=Ca=null}function Tu(t){var i=Ra.current;Ht(Ra),t._currentValue=i}function wu(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function _s(t,i){Ca=t,Mu=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Dn=!0),t.firstContext=null)}function $n(t){var i=t._currentValue;if(Mu!==t)if(t={context:t,memoizedValue:i,next:null},vs===null){if(Ca===null)throw Error(n(308));vs=t,Ca.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return i}var Pr=null;function Au(t){Pr===null?Pr=[t]:Pr.push(t)}function ch(t,i,o,u){var f=i.interleaved;return f===null?(o.next=o,Au(i)):(o.next=f.next,f.next=o),i.interleaved=o,Li(t,u)}function Li(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var ir=!1;function Ru(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ii(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(wt&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,Li(t,o)}return f=u.interleaved,f===null?(i.next=i,Au(u)):(i.next=f.next,f.next=i),u.interleaved=i,Li(t,o)}function ba(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,wr(t,o)}}function dh(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?f=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?f=h=i:h=h.next=i}else f=h=i;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Pa(t,i,o,u){var f=t.updateQueue;ir=!1;var h=f.firstBaseUpdate,M=f.lastBaseUpdate,L=f.shared.pending;if(L!==null){f.shared.pending=null;var B=L,J=B.next;B.next=null,M===null?h=J:M.next=J,M=B;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,L=ge.lastBaseUpdate,L!==M&&(L===null?ge.firstBaseUpdate=J:L.next=J,ge.lastBaseUpdate=B))}if(h!==null){var ve=f.baseState;M=0,ge=J=B=null,L=h;do{var pe=L.lane,ke=L.eventTime;if((u&pe)===pe){ge!==null&&(ge=ge.next={eventTime:ke,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var He=t,qe=L;switch(pe=i,ke=o,qe.tag){case 1:if(He=qe.payload,typeof He=="function"){ve=He.call(ke,ve,pe);break e}ve=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=qe.payload,pe=typeof He=="function"?He.call(ke,ve,pe):He,pe==null)break e;ve=se({},ve,pe);break e;case 2:ir=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,pe=f.effects,pe===null?f.effects=[L]:pe.push(L))}else ke={eventTime:ke,lane:pe,tag:L.tag,payload:L.payload,callback:L.callback,next:null},ge===null?(J=ge=ke,B=ve):ge=ge.next=ke,M|=pe;if(L=L.next,L===null){if(L=f.shared.pending,L===null)break;pe=L,L=pe.next,pe.next=null,f.lastBaseUpdate=pe,f.shared.pending=null}}while(!0);if(ge===null&&(B=ve),f.baseState=B,f.firstBaseUpdate=J,f.lastBaseUpdate=ge,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);Ir|=M,t.lanes=M,t.memoizedState=ve}}function hh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],f=u.callback;if(f!==null){if(u.callback=null,u=o,typeof f!="function")throw Error(n(191,f));f.call(u)}}}var xo={},vi=er(xo),yo=er(xo),So=er(xo);function Dr(t){if(t===xo)throw Error(n(174));return t}function Cu(t,i){switch(kt(So,i),kt(yo,t),kt(vi,xo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=me(i,t)}Ht(vi),kt(vi,i)}function xs(){Ht(vi),Ht(yo),Ht(So)}function ph(t){Dr(So.current);var i=Dr(vi.current),o=me(i,t.type);i!==o&&(kt(yo,t),kt(vi,o))}function bu(t){yo.current===t&&(Ht(vi),Ht(yo))}var Xt=er(0);function Da(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Pu=[];function Du(){for(var t=0;t<Pu.length;t++)Pu[t]._workInProgressVersionPrimary=null;Pu.length=0}var La=b.ReactCurrentDispatcher,Lu=b.ReactCurrentBatchConfig,Lr=0,jt=null,tn=null,ln=null,Ia=!1,Mo=!1,Eo=0,Uv=0;function _n(){throw Error(n(321))}function Iu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ri(t[o],i[o]))return!1;return!0}function Uu(t,i,o,u,f,h){if(Lr=h,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,La.current=t===null||t.memoizedState===null?kv:zv,t=o(u,f),Mo){h=0;do{if(Mo=!1,Eo=0,25<=h)throw Error(n(301));h+=1,ln=tn=null,i.updateQueue=null,La.current=Bv,t=o(u,f)}while(Mo)}if(La.current=Fa,i=tn!==null&&tn.next!==null,Lr=0,ln=tn=jt=null,Ia=!1,i)throw Error(n(300));return t}function Nu(){var t=Eo!==0;return Eo=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?jt.memoizedState=ln=t:ln=ln.next=t,ln}function Kn(){if(tn===null){var t=jt.alternate;t=t!==null?t.memoizedState:null}else t=tn.next;var i=ln===null?jt.memoizedState:ln.next;if(i!==null)ln=i,tn=t;else{if(t===null)throw Error(n(310));tn=t,t={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},ln===null?jt.memoizedState=ln=t:ln=ln.next=t}return ln}function To(t,i){return typeof i=="function"?i(t):i}function Fu(t){var i=Kn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=tn,f=u.baseQueue,h=o.pending;if(h!==null){if(f!==null){var M=f.next;f.next=h.next,h.next=M}u.baseQueue=f=h,o.pending=null}if(f!==null){h=f.next,u=u.baseState;var L=M=null,B=null,J=h;do{var ge=J.lane;if((Lr&ge)===ge)B!==null&&(B=B.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),u=J.hasEagerState?J.eagerState:t(u,J.action);else{var ve={lane:ge,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};B===null?(L=B=ve,M=u):B=B.next=ve,jt.lanes|=ge,Ir|=ge}J=J.next}while(J!==null&&J!==h);B===null?M=u:B.next=L,ri(u,i.memoizedState)||(Dn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=B,o.lastRenderedState=u}if(t=o.interleaved,t!==null){f=t;do h=f.lane,jt.lanes|=h,Ir|=h,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Ou(t){var i=Kn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,f=o.pending,h=i.memoizedState;if(f!==null){o.pending=null;var M=f=f.next;do h=t(h,M.action),M=M.next;while(M!==f);ri(h,i.memoizedState)||(Dn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,u]}function mh(){}function gh(t,i){var o=jt,u=Kn(),f=i(),h=!ri(u.memoizedState,f);if(h&&(u.memoizedState=f,Dn=!0),u=u.queue,ku(xh.bind(null,o,u,t),[t]),u.getSnapshot!==i||h||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,wo(9,_h.bind(null,o,u,f,i),void 0,null),un===null)throw Error(n(349));(Lr&30)!==0||vh(o,i,f)}return f}function vh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function _h(t,i,o,u){i.value=o,i.getSnapshot=u,yh(i)&&Sh(t)}function xh(t,i,o){return o(function(){yh(i)&&Sh(t)})}function yh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ri(t,o)}catch{return!0}}function Sh(t){var i=Li(t,1);i!==null&&ui(i,t,1,-1)}function Mh(t){var i=_i();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:t},i.queue=t,t=t.dispatch=Ov.bind(null,jt,t),[i.memoizedState,t]}function wo(t,i,o,u){return t={tag:t,create:i,destroy:o,deps:u,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t)),t}function Eh(){return Kn().memoizedState}function Ua(t,i,o,u){var f=_i();jt.flags|=t,f.memoizedState=wo(1|i,o,void 0,u===void 0?null:u)}function Na(t,i,o,u){var f=Kn();u=u===void 0?null:u;var h=void 0;if(tn!==null){var M=tn.memoizedState;if(h=M.destroy,u!==null&&Iu(u,M.deps)){f.memoizedState=wo(i,o,h,u);return}}jt.flags|=t,f.memoizedState=wo(1|i,o,h,u)}function Th(t,i){return Ua(8390656,8,t,i)}function ku(t,i){return Na(2048,8,t,i)}function wh(t,i){return Na(4,2,t,i)}function Ah(t,i){return Na(4,4,t,i)}function Rh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ch(t,i,o){return o=o!=null?o.concat([t]):null,Na(4,4,Rh.bind(null,i,t),o)}function zu(){}function bh(t,i){var o=Kn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Iu(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function Ph(t,i){var o=Kn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Iu(i,u[1])?u[0]:(t=t(),o.memoizedState=[t,i],t)}function Dh(t,i,o){return(Lr&21)===0?(t.baseState&&(t.baseState=!1,Dn=!0),t.memoizedState=o):(ri(o,i)||(o=Tn(),jt.lanes|=o,Ir|=o,t.baseState=!0),i)}function Nv(t,i){var o=xt;xt=o!==0&&4>o?o:4,t(!0);var u=Lu.transition;Lu.transition={};try{t(!1),i()}finally{xt=o,Lu.transition=u}}function Lh(){return Kn().memoizedState}function Fv(t,i,o){var u=lr(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Ih(t))Uh(i,o);else if(o=ch(t,i,o,u),o!==null){var f=An();ui(o,t,u,f),Nh(o,i,u)}}function Ov(t,i,o){var u=lr(t),f={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ih(t))Uh(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,L=h(M,o);if(f.hasEagerState=!0,f.eagerState=L,ri(L,M)){var B=i.interleaved;B===null?(f.next=f,Au(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}o=ch(t,i,f,u),o!==null&&(f=An(),ui(o,t,u,f),Nh(o,i,u))}}function Ih(t){var i=t.alternate;return t===jt||i!==null&&i===jt}function Uh(t,i){Mo=Ia=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Nh(t,i,o){if((o&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,wr(t,o)}}var Fa={readContext:$n,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},kv={readContext:$n,useCallback:function(t,i){return _i().memoizedState=[t,i===void 0?null:i],t},useContext:$n,useEffect:Th,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ua(4194308,4,Rh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ua(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ua(4,2,t,i)},useMemo:function(t,i){var o=_i();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var u=_i();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=Fv.bind(null,jt,t),[u.memoizedState,t]},useRef:function(t){var i=_i();return t={current:t},i.memoizedState=t},useState:Mh,useDebugValue:zu,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=Mh(!1),i=t[0];return t=Nv.bind(null,t[1]),_i().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var u=jt,f=_i();if(Wt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),un===null)throw Error(n(349));(Lr&30)!==0||vh(u,i,o)}f.memoizedState=o;var h={value:o,getSnapshot:i};return f.queue=h,Th(xh.bind(null,u,h,t),[t]),u.flags|=2048,wo(9,_h.bind(null,u,h,o,i),void 0,null),o},useId:function(){var t=_i(),i=un.identifierPrefix;if(Wt){var o=Di,u=Pi;o=(u&~(1<<32-Tt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Eo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Uv++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},zv={readContext:$n,useCallback:bh,useContext:$n,useEffect:ku,useImperativeHandle:Ch,useInsertionEffect:wh,useLayoutEffect:Ah,useMemo:Ph,useReducer:Fu,useRef:Eh,useState:function(){return Fu(To)},useDebugValue:zu,useDeferredValue:function(t){var i=Kn();return Dh(i,tn.memoizedState,t)},useTransition:function(){var t=Fu(To)[0],i=Kn().memoizedState;return[t,i]},useMutableSource:mh,useSyncExternalStore:gh,useId:Lh,unstable_isNewReconciler:!1},Bv={readContext:$n,useCallback:bh,useContext:$n,useEffect:ku,useImperativeHandle:Ch,useInsertionEffect:wh,useLayoutEffect:Ah,useMemo:Ph,useReducer:Ou,useRef:Eh,useState:function(){return Ou(To)},useDebugValue:zu,useDeferredValue:function(t){var i=Kn();return tn===null?i.memoizedState=t:Dh(i,tn.memoizedState,t)},useTransition:function(){var t=Ou(To)[0],i=Kn().memoizedState;return[t,i]},useMutableSource:mh,useSyncExternalStore:gh,useId:Lh,unstable_isNewReconciler:!1};function oi(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Bu(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:se({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Oa={isMounted:function(t){return(t=t._reactInternals)?Ri(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var u=An(),f=lr(t),h=Ii(u,f);h.payload=i,o!=null&&(h.callback=o),i=rr(t,h,f),i!==null&&(ui(i,t,f,u),ba(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=An(),f=lr(t),h=Ii(u,f);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=rr(t,h,f),i!==null&&(ui(i,t,f,u),ba(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=An(),u=lr(t),f=Ii(o,u);f.tag=2,i!=null&&(f.callback=i),i=rr(t,f,u),i!==null&&(ui(i,t,u,o),ba(i,t,u))}};function Fh(t,i,o,u,f,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,h,M):i.prototype&&i.prototype.isPureReactComponent?!co(o,u)||!co(f,h):!0}function Oh(t,i,o){var u=!1,f=tr,h=i.contextType;return typeof h=="object"&&h!==null?h=$n(h):(f=Pn(i)?Rr:vn.current,u=i.contextTypes,h=(u=u!=null)?ds(t,f):tr),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Oa,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function kh(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&Oa.enqueueReplaceState(i,i.state,null)}function Vu(t,i,o,u){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Ru(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=$n(h):(h=Pn(i)?Rr:vn.current,f.context=ds(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Bu(t,i,h,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Oa.enqueueReplaceState(f,f.state,null),Pa(t,o,f,u),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,i){try{var o="",u=i;do o+=Ie(u),u=u.return;while(u);var f=o}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function Hu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Gu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Vv=typeof WeakMap=="function"?WeakMap:Map;function zh(t,i,o){o=Ii(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Wa||(Wa=!0,rc=u),Gu(t,i)},o}function Bh(t,i,o){o=Ii(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;o.payload=function(){return u(f)},o.callback=function(){Gu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Gu(t,i),typeof u!="function"&&(or===null?or=new Set([this]):or.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Vh(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new Vv;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(o)||(f.add(o),t=t_.bind(null,t,i,o),i.then(t,t))}function Hh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Gh(t,i,o,u,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ii(-1,1),i.tag=2,rr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Hv=b.ReactCurrentOwner,Dn=!1;function wn(t,i,o,u){i.child=t===null?uh(i,null,o,u):gs(i,t.child,o,u)}function Wh(t,i,o,u,f){o=o.render;var h=i.ref;return _s(i,f),u=Uu(t,i,o,u,h,f),o=Nu(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ui(t,i,f)):(Wt&&o&&vu(i),i.flags|=1,wn(t,i,u,f),i.child)}function Xh(t,i,o,u,f){if(t===null){var h=o.type;return typeof h=="function"&&!fc(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,jh(t,i,h,u,f)):(t=Ka(o.type,null,u,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:co,o(M,u)&&t.ref===i.ref)return Ui(t,i,f)}return i.flags|=1,t=cr(h,u),t.ref=i.ref,t.return=i,i.child=t}function jh(t,i,o,u,f){if(t!==null){var h=t.memoizedProps;if(co(h,u)&&t.ref===i.ref)if(Dn=!1,i.pendingProps=u=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Dn=!0);else return i.lanes=t.lanes,Ui(t,i,f)}return Wu(t,i,o,u,f)}function Yh(t,i,o){var u=i.pendingProps,f=u.children,h=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Ms,Hn),Hn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,kt(Ms,Hn),Hn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=h!==null?h.baseLanes:o,kt(Ms,Hn),Hn|=u}else h!==null?(u=h.baseLanes|o,i.memoizedState=null):u=o,kt(Ms,Hn),Hn|=u;return wn(t,i,f,o),i.child}function qh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Wu(t,i,o,u,f){var h=Pn(o)?Rr:vn.current;return h=ds(i,h),_s(i,f),o=Uu(t,i,o,u,h,f),u=Nu(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ui(t,i,f)):(Wt&&u&&vu(i),i.flags|=1,wn(t,i,o,f),i.child)}function $h(t,i,o,u,f){if(Pn(o)){var h=!0;Sa(i)}else h=!1;if(_s(i,f),i.stateNode===null)za(t,i),Oh(i,o,u),Vu(i,o,u,f),u=!0;else if(t===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var B=M.context,J=o.contextType;typeof J=="object"&&J!==null?J=$n(J):(J=Pn(o)?Rr:vn.current,J=ds(i,J));var ge=o.getDerivedStateFromProps,ve=typeof ge=="function"||typeof M.getSnapshotBeforeUpdate=="function";ve||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==u||B!==J)&&kh(i,M,u,J),ir=!1;var pe=i.memoizedState;M.state=pe,Pa(i,u,M,f),B=i.memoizedState,L!==u||pe!==B||bn.current||ir?(typeof ge=="function"&&(Bu(i,o,ge,u),B=i.memoizedState),(L=ir||Fh(i,o,L,u,pe,B,J))?(ve||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=B),M.props=u,M.state=B,M.context=J,u=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,fh(t,i),L=i.memoizedProps,J=i.type===i.elementType?L:oi(i.type,L),M.props=J,ve=i.pendingProps,pe=M.context,B=o.contextType,typeof B=="object"&&B!==null?B=$n(B):(B=Pn(o)?Rr:vn.current,B=ds(i,B));var ke=o.getDerivedStateFromProps;(ge=typeof ke=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==ve||pe!==B)&&kh(i,M,u,B),ir=!1,pe=i.memoizedState,M.state=pe,Pa(i,u,M,f);var He=i.memoizedState;L!==ve||pe!==He||bn.current||ir?(typeof ke=="function"&&(Bu(i,o,ke,u),He=i.memoizedState),(J=ir||Fh(i,o,J,u,pe,He,B)||!1)?(ge||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,He,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,He,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=He),M.props=u,M.state=He,M.context=B,u=J):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&pe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&pe===t.memoizedState||(i.flags|=1024),u=!1)}return Xu(t,i,o,u,h,f)}function Xu(t,i,o,u,f,h){qh(t,i);var M=(i.flags&128)!==0;if(!u&&!M)return f&&eh(i,o,!1),Ui(t,i,h);u=i.stateNode,Hv.current=i;var L=M&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&M?(i.child=gs(i,t.child,null,h),i.child=gs(i,null,L,h)):wn(t,i,L,h),i.memoizedState=u.state,f&&eh(i,o,!0),i.child}function Kh(t){var i=t.stateNode;i.pendingContext?Qd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Qd(t,i.context,!1),Cu(t,i.containerInfo)}function Zh(t,i,o,u,f){return ms(),Su(f),i.flags|=256,wn(t,i,o,u),i.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Yu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qh(t,i,o){var u=i.pendingProps,f=Xt.current,h=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(f&2)!==0),L?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),kt(Xt,f&1),t===null)return yu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=u.children,t=u.fallback,h?(u=i.mode,h=i.child,M={mode:"hidden",children:M},(u&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Za(M,u,0,null),t=Or(t,u,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Yu(o),i.memoizedState=ju,t):qu(i,M));if(f=t.memoizedState,f!==null&&(L=f.dehydrated,L!==null))return Gv(t,i,M,u,L,f,o);if(h){h=u.fallback,M=i.mode,f=t.child,L=f.sibling;var B={mode:"hidden",children:u.children};return(M&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=B,i.deletions=null):(u=cr(f,B),u.subtreeFlags=f.subtreeFlags&14680064),L!==null?h=cr(L,h):(h=Or(h,M,o,null),h.flags|=2),h.return=i,u.return=i,u.sibling=h,i.child=u,u=h,h=i.child,M=t.child.memoizedState,M=M===null?Yu(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=ju,u}return h=t.child,t=h.sibling,u=cr(h,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=u,i.memoizedState=null,u}function qu(t,i){return i=Za({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function ka(t,i,o,u){return u!==null&&Su(u),gs(i,t.child,null,o),t=qu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Gv(t,i,o,u,f,h,M){if(o)return i.flags&256?(i.flags&=-257,u=Hu(Error(n(422))),ka(t,i,M,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=u.fallback,f=i.mode,u=Za({mode:"visible",children:u.children},f,0,null),h=Or(h,f,M,null),h.flags|=2,u.return=i,h.return=i,u.sibling=h,i.child=u,(i.mode&1)!==0&&gs(i,t.child,null,M),i.child.memoizedState=Yu(M),i.memoizedState=ju,h);if((i.mode&1)===0)return ka(t,i,M,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var L=u.dgst;return u=L,h=Error(n(419)),u=Hu(h,u,void 0),ka(t,i,M,u)}if(L=(M&t.childLanes)!==0,Dn||L){if(u=un,u!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|M))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Li(t,f),ui(u,t,f,-1))}return cc(),u=Hu(Error(n(421))),ka(t,i,M,u)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=n_.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,Vn=Ji(f.nextSibling),Bn=i,Wt=!0,si=null,t!==null&&(Yn[qn++]=Pi,Yn[qn++]=Di,Yn[qn++]=Cr,Pi=t.id,Di=t.overflow,Cr=i),i=qu(i,u.children),i.flags|=4096,i)}function Jh(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),wu(t.return,i,o)}function $u(t,i,o,u,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=u,h.tail=o,h.tailMode=f)}function ep(t,i,o){var u=i.pendingProps,f=u.revealOrder,h=u.tail;if(wn(t,i,u.children,o),u=Xt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jh(t,o,i);else if(t.tag===19)Jh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(kt(Xt,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&Da(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),$u(i,!1,f,o,h);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Da(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}$u(i,!0,o,null,h);break;case"together":$u(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function za(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ui(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Ir|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=cr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=cr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function Wv(t,i,o){switch(i.tag){case 3:Kh(i),ms();break;case 5:ph(i);break;case 1:Pn(i.type)&&Sa(i);break;case 4:Cu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;kt(Ra,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(kt(Xt,Xt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Qh(t,i,o):(kt(Xt,Xt.current&1),t=Ui(t,i,o),t!==null?t.sibling:null);kt(Xt,Xt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(t.flags&128)!==0){if(u)return ep(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),kt(Xt,Xt.current),u)break;return null;case 22:case 23:return i.lanes=0,Yh(t,i,o)}return Ui(t,i,o)}var tp,Ku,np,ip;tp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ku=function(){},np=function(t,i,o,u){var f=t.memoizedProps;if(f!==u){t=i.stateNode,Dr(vi.current);var h=null;switch(o){case"input":f=Dt(t,f),u=Dt(t,u),h=[];break;case"select":f=se({},f,{value:void 0}),u=se({},u,{value:void 0}),h=[];break;case"textarea":f=Bt(t,f),u=Bt(t,u),h=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=_a)}$e(o,u);var M;o=null;for(J in f)if(!u.hasOwnProperty(J)&&f.hasOwnProperty(J)&&f[J]!=null)if(J==="style"){var L=f[J];for(M in L)L.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?h||(h=[]):(h=h||[]).push(J,null));for(J in u){var B=u[J];if(L=f?.[J],u.hasOwnProperty(J)&&B!==L&&(B!=null||L!=null))if(J==="style")if(L){for(M in L)!L.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in B)B.hasOwnProperty(M)&&L[M]!==B[M]&&(o||(o={}),o[M]=B[M])}else o||(h||(h=[]),h.push(J,o)),o=B;else J==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,L=L?L.__html:void 0,B!=null&&L!==B&&(h=h||[]).push(J,B)):J==="children"?typeof B!="string"&&typeof B!="number"||(h=h||[]).push(J,""+B):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(B!=null&&J==="onScroll"&&Vt("scroll",t),h||L===B||(h=[])):(h=h||[]).push(J,B))}o&&(h=h||[]).push("style",o);var J=h;(i.updateQueue=J)&&(i.flags|=4)}},ip=function(t,i,o,u){o!==u&&(i.flags|=4)};function Ao(t,i){if(!Wt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function xn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function Xv(t,i,o){var u=i.pendingProps;switch(_u(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(i),null;case 1:return Pn(i.type)&&ya(),xn(i),null;case 3:return u=i.stateNode,xs(),Ht(bn),Ht(vn),Du(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(wa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,si!==null&&(ac(si),si=null))),Ku(t,i),xn(i),null;case 5:bu(i);var f=Dr(So.current);if(o=i.type,t!==null&&i.stateNode!=null)np(t,i,o,u,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return xn(i),null}if(t=Dr(vi.current),wa(i)){u=i.stateNode,o=i.type;var h=i.memoizedProps;switch(u[gi]=i,u[go]=h,t=(i.mode&1)!==0,o){case"dialog":Vt("cancel",u),Vt("close",u);break;case"iframe":case"object":case"embed":Vt("load",u);break;case"video":case"audio":for(f=0;f<ho.length;f++)Vt(ho[f],u);break;case"source":Vt("error",u);break;case"img":case"image":case"link":Vt("error",u),Vt("load",u);break;case"details":Vt("toggle",u);break;case"input":ft(u,h),Vt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!h.multiple},Vt("invalid",u);break;case"textarea":P(u,h),Vt("invalid",u)}$e(o,h),f=null;for(var M in h)if(h.hasOwnProperty(M)){var L=h[M];M==="children"?typeof L=="string"?u.textContent!==L&&(h.suppressHydrationWarning!==!0&&va(u.textContent,L,t),f=["children",L]):typeof L=="number"&&u.textContent!==""+L&&(h.suppressHydrationWarning!==!0&&va(u.textContent,L,t),f=["children",""+L]):a.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&Vt("scroll",u)}switch(o){case"input":ht(u),Nt(u,h,!0);break;case"textarea":ht(u),q(u);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(u.onclick=_a)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fe(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=M.createElement(o,{is:u.is}):(t=M.createElement(o),o==="select"&&(M=t,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):t=M.createElementNS(t,o),t[gi]=i,t[go]=u,tp(t,i,!1,!1),i.stateNode=t;e:{switch(M=be(o,u),o){case"dialog":Vt("cancel",t),Vt("close",t),f=u;break;case"iframe":case"object":case"embed":Vt("load",t),f=u;break;case"video":case"audio":for(f=0;f<ho.length;f++)Vt(ho[f],t);f=u;break;case"source":Vt("error",t),f=u;break;case"img":case"image":case"link":Vt("error",t),Vt("load",t),f=u;break;case"details":Vt("toggle",t),f=u;break;case"input":ft(t,u),f=Dt(t,u),Vt("invalid",t);break;case"option":f=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},f=se({},u,{value:void 0}),Vt("invalid",t);break;case"textarea":P(t,u),f=Bt(t,u),Vt("invalid",t);break;default:f=u}$e(o,f),L=f;for(h in L)if(L.hasOwnProperty(h)){var B=L[h];h==="style"?Ne(t,B):h==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ze(t,B)):h==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&Te(t,B):typeof B=="number"&&Te(t,""+B):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?B!=null&&h==="onScroll"&&Vt("scroll",t):B!=null&&U(t,h,B,M))}switch(o){case"input":ht(t),Nt(t,u,!1);break;case"textarea":ht(t),q(t);break;case"option":u.value!=null&&t.setAttribute("value",""+_e(u.value));break;case"select":t.multiple=!!u.multiple,h=u.value,h!=null?zt(t,!!u.multiple,h,!1):u.defaultValue!=null&&zt(t,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=_a)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xn(i),null;case 6:if(t&&i.stateNode!=null)ip(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(o=Dr(So.current),Dr(vi.current),wa(i)){if(u=i.stateNode,o=i.memoizedProps,u[gi]=i,(h=u.nodeValue!==o)&&(t=Bn,t!==null))switch(t.tag){case 3:va(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&va(u.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[gi]=i,i.stateNode=u}return xn(i),null;case 13:if(Ht(Xt),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Wt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)oh(),ms(),i.flags|=98560,h=!1;else if(h=wa(i),u!==null&&u.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[gi]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;xn(i),h=!1}else si!==null&&(ac(si),si=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Xt.current&1)!==0?nn===0&&(nn=3):cc())),i.updateQueue!==null&&(i.flags|=4),xn(i),null);case 4:return xs(),Ku(t,i),t===null&&po(i.stateNode.containerInfo),xn(i),null;case 10:return Tu(i.type._context),xn(i),null;case 17:return Pn(i.type)&&ya(),xn(i),null;case 19:if(Ht(Xt),h=i.memoizedState,h===null)return xn(i),null;if(u=(i.flags&128)!==0,M=h.rendering,M===null)if(u)Ao(h,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Da(t),M!==null){for(i.flags|=128,Ao(h,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)h=o,t=u,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return kt(Xt,Xt.current&1|2),i.child}t=t.sibling}h.tail!==null&&X()>Es&&(i.flags|=128,u=!0,Ao(h,!1),i.lanes=4194304)}else{if(!u)if(t=Da(M),t!==null){if(i.flags|=128,u=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Ao(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Wt)return xn(i),null}else 2*X()-h.renderingStartTime>Es&&o!==1073741824&&(i.flags|=128,u=!0,Ao(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=X(),i.sibling=null,o=Xt.current,kt(Xt,u?o&1|2:o&1),i):(xn(i),null);case 22:case 23:return uc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(xn(i),i.subtreeFlags&6&&(i.flags|=8192)):xn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function jv(t,i){switch(_u(i),i.tag){case 1:return Pn(i.type)&&ya(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return xs(),Ht(bn),Ht(vn),Du(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return bu(i),null;case 13:if(Ht(Xt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ht(Xt),null;case 4:return xs(),null;case 10:return Tu(i.type._context),null;case 22:case 23:return uc(),null;case 24:return null;default:return null}}var Ba=!1,yn=!1,Yv=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Ss(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Yt(t,i,u)}else o.current=null}function Zu(t,i,o){try{o()}catch(u){Yt(t,i,u)}}var rp=!1;function qv(t,i){if(uu=oa,t=Fd(),tu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,h=u.focusNode;u=u.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,L=-1,B=-1,J=0,ge=0,ve=t,pe=null;t:for(;;){for(var ke;ve!==o||f!==0&&ve.nodeType!==3||(L=M+f),ve!==h||u!==0&&ve.nodeType!==3||(B=M+u),ve.nodeType===3&&(M+=ve.nodeValue.length),(ke=ve.firstChild)!==null;)pe=ve,ve=ke;for(;;){if(ve===t)break t;if(pe===o&&++J===f&&(L=M),pe===h&&++ge===u&&(B=M),(ke=ve.nextSibling)!==null)break;ve=pe,pe=ve.parentNode}ve=ke}o=L===-1||B===-1?null:{start:L,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(cu={focusedElem:t,selectionRange:o},oa=!1,ze=i;ze!==null;)if(i=ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ze=t;else for(;ze!==null;){i=ze;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var qe=He.memoizedProps,$t=He.memoizedState,Y=i.stateNode,W=Y.getSnapshotBeforeUpdate(i.elementType===i.type?qe:oi(i.type,qe),$t);Y.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Yt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,ze=t;break}ze=i.return}return He=rp,rp=!1,He}function Ro(t,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&Zu(i,o,h)}f=f.next}while(f!==u)}}function Va(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Qu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function sp(t){var i=t.alternate;i!==null&&(t.alternate=null,sp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[gi],delete i[go],delete i[pu],delete i[Pv],delete i[Dv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function op(t){return t.tag===5||t.tag===3||t.tag===4}function ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||op(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ju(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=_a));else if(u!==4&&(t=t.child,t!==null))for(Ju(t,i,o),t=t.sibling;t!==null;)Ju(t,i,o),t=t.sibling}function ec(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(ec(t,i,o),t=t.sibling;t!==null;)ec(t,i,o),t=t.sibling}var dn=null,ai=!1;function sr(t,i,o){for(o=o.child;o!==null;)lp(t,i,o),o=o.sibling}function lp(t,i,o){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Je,o)}catch{}switch(o.tag){case 5:yn||Ss(o,i);case 6:var u=dn,f=ai;dn=null,sr(t,i,o),dn=u,ai=f,dn!==null&&(ai?(t=dn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):dn.removeChild(o.stateNode));break;case 18:dn!==null&&(ai?(t=dn,o=o.stateNode,t.nodeType===8?hu(t.parentNode,o):t.nodeType===1&&hu(t,o),ro(t)):hu(dn,o.stateNode));break;case 4:u=dn,f=ai,dn=o.stateNode.containerInfo,ai=!0,sr(t,i,o),dn=u,ai=f;break;case 0:case 11:case 14:case 15:if(!yn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var h=f,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&Zu(o,i,M),f=f.next}while(f!==u)}sr(t,i,o);break;case 1:if(!yn&&(Ss(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(L){Yt(o,i,L)}sr(t,i,o);break;case 21:sr(t,i,o);break;case 22:o.mode&1?(yn=(u=yn)||o.memoizedState!==null,sr(t,i,o),yn=u):sr(t,i,o);break;default:sr(t,i,o)}}function up(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new Yv),i.forEach(function(u){var f=i_.bind(null,t,u);o.has(u)||(o.add(u),u.then(f,f))})}}function li(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u];try{var h=t,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:dn=L.stateNode,ai=!1;break e;case 3:dn=L.stateNode.containerInfo,ai=!0;break e;case 4:dn=L.stateNode.containerInfo,ai=!0;break e}L=L.return}if(dn===null)throw Error(n(160));lp(h,M,f),dn=null,ai=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(J){Yt(f,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)cp(i,t),i=i.sibling}function cp(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(li(i,t),xi(t),u&4){try{Ro(3,t,t.return),Va(3,t)}catch(qe){Yt(t,t.return,qe)}try{Ro(5,t,t.return)}catch(qe){Yt(t,t.return,qe)}}break;case 1:li(i,t),xi(t),u&512&&o!==null&&Ss(o,o.return);break;case 5:if(li(i,t),xi(t),u&512&&o!==null&&Ss(o,o.return),t.flags&32){var f=t.stateNode;try{Te(f,"")}catch(qe){Yt(t,t.return,qe)}}if(u&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,L=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{L==="input"&&h.type==="radio"&&h.name!=null&&rt(f,h),be(L,M);var J=be(L,h);for(M=0;M<B.length;M+=2){var ge=B[M],ve=B[M+1];ge==="style"?Ne(f,ve):ge==="dangerouslySetInnerHTML"?Ze(f,ve):ge==="children"?Te(f,ve):U(f,ge,ve,J)}switch(L){case"input":Xe(f,h);break;case"textarea":E(f,h);break;case"select":var pe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var ke=h.value;ke!=null?zt(f,!!h.multiple,ke,!1):pe!==!!h.multiple&&(h.defaultValue!=null?zt(f,!!h.multiple,h.defaultValue,!0):zt(f,!!h.multiple,h.multiple?[]:"",!1))}f[go]=h}catch(qe){Yt(t,t.return,qe)}}break;case 6:if(li(i,t),xi(t),u&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(qe){Yt(t,t.return,qe)}}break;case 3:if(li(i,t),xi(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{ro(i.containerInfo)}catch(qe){Yt(t,t.return,qe)}break;case 4:li(i,t),xi(t);break;case 13:li(i,t),xi(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(ic=X())),u&4&&up(t);break;case 22:if(ge=o!==null&&o.memoizedState!==null,t.mode&1?(yn=(J=yn)||ge,li(i,t),yn=J):li(i,t),xi(t),u&8192){if(J=t.memoizedState!==null,(t.stateNode.isHidden=J)&&!ge&&(t.mode&1)!==0)for(ze=t,ge=t.child;ge!==null;){for(ve=ze=ge;ze!==null;){switch(pe=ze,ke=pe.child,pe.tag){case 0:case 11:case 14:case 15:Ro(4,pe,pe.return);break;case 1:Ss(pe,pe.return);var He=pe.stateNode;if(typeof He.componentWillUnmount=="function"){u=pe,o=pe.return;try{i=u,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(qe){Yt(u,o,qe)}}break;case 5:Ss(pe,pe.return);break;case 22:if(pe.memoizedState!==null){hp(ve);continue}}ke!==null?(ke.return=pe,ze=ke):hp(ve)}ge=ge.sibling}e:for(ge=null,ve=t;;){if(ve.tag===5){if(ge===null){ge=ve;try{f=ve.stateNode,J?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(L=ve.stateNode,B=ve.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,L.style.display=Me("display",M))}catch(qe){Yt(t,t.return,qe)}}}else if(ve.tag===6){if(ge===null)try{ve.stateNode.nodeValue=J?"":ve.memoizedProps}catch(qe){Yt(t,t.return,qe)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===t)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===t)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===t)break e;ge===ve&&(ge=null),ve=ve.return}ge===ve&&(ge=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:li(i,t),xi(t),u&4&&up(t);break;case 21:break;default:li(i,t),xi(t)}}function xi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(op(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(Te(f,""),u.flags&=-33);var h=ap(t);ec(t,h,f);break;case 3:case 4:var M=u.stateNode.containerInfo,L=ap(t);Ju(t,L,M);break;default:throw Error(n(161))}}catch(B){Yt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function $v(t,i,o){ze=t,fp(t)}function fp(t,i,o){for(var u=(t.mode&1)!==0;ze!==null;){var f=ze,h=f.child;if(f.tag===22&&u){var M=f.memoizedState!==null||Ba;if(!M){var L=f.alternate,B=L!==null&&L.memoizedState!==null||yn;L=Ba;var J=yn;if(Ba=M,(yn=B)&&!J)for(ze=f;ze!==null;)M=ze,B=M.child,M.tag===22&&M.memoizedState!==null?pp(f):B!==null?(B.return=M,ze=B):pp(f);for(;h!==null;)ze=h,fp(h),h=h.sibling;ze=f,Ba=L,yn=J}dp(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,ze=h):dp(t)}}function dp(t){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:yn||Va(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!yn)if(o===null)u.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:oi(i.type,o.memoizedProps);u.componentDidUpdate(f,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&hh(i,h,u);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}hh(i,M,o)}break;case 5:var L=i.stateNode;if(o===null&&i.flags&4){o=L;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var ge=J.memoizedState;if(ge!==null){var ve=ge.dehydrated;ve!==null&&ro(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}yn||i.flags&512&&Qu(i)}catch(pe){Yt(i,i.return,pe)}}if(i===t){ze=null;break}if(o=i.sibling,o!==null){o.return=i.return,ze=o;break}ze=i.return}}function hp(t){for(;ze!==null;){var i=ze;if(i===t){ze=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ze=o;break}ze=i.return}}function pp(t){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Va(4,i)}catch(B){Yt(i,o,B)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(B){Yt(i,f,B)}}var h=i.return;try{Qu(i)}catch(B){Yt(i,h,B)}break;case 5:var M=i.return;try{Qu(i)}catch(B){Yt(i,M,B)}}}catch(B){Yt(i,i.return,B)}if(i===t){ze=null;break}var L=i.sibling;if(L!==null){L.return=i.return,ze=L;break}ze=i.return}}var Kv=Math.ceil,Ha=b.ReactCurrentDispatcher,tc=b.ReactCurrentOwner,Zn=b.ReactCurrentBatchConfig,wt=0,un=null,Zt=null,hn=0,Hn=0,Ms=er(0),nn=0,Co=null,Ir=0,Ga=0,nc=0,bo=null,Ln=null,ic=0,Es=1/0,Ni=null,Wa=!1,rc=null,or=null,Xa=!1,ar=null,ja=0,Po=0,sc=null,Ya=-1,qa=0;function An(){return(wt&6)!==0?X():Ya!==-1?Ya:Ya=X()}function lr(t){return(t.mode&1)===0?1:(wt&2)!==0&&hn!==0?hn&-hn:Iv.transition!==null?(qa===0&&(qa=Tn()),qa):(t=xt,t!==0||(t=window.event,t=t===void 0?16:gd(t.type)),t)}function ui(t,i,o,u){if(50<Po)throw Po=0,sc=null,Error(n(185));qt(t,o,u),((wt&2)===0||t!==un)&&(t===un&&((wt&2)===0&&(Ga|=o),nn===4&&ur(t,hn)),In(t,u),o===1&&wt===0&&(i.mode&1)===0&&(Es=X()+500,Ma&&nr()))}function In(t,i){var o=t.callbackNode;Tr(t,i);var u=ii(t,t===un?hn:0);if(u===0)o!==null&&j(o),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(o!=null&&j(o),i===1)t.tag===0?Lv(gp.bind(null,t)):th(gp.bind(null,t)),Cv(function(){(wt&6)===0&&nr()}),o=null;else{switch(ld(u)){case 1:o=Pe;break;case 4:o=Ve;break;case 16:o=Oe;break;case 536870912:o=ot;break;default:o=Oe}o=Tp(o,mp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function mp(t,i){if(Ya=-1,qa=0,(wt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ts()&&t.callbackNode!==o)return null;var u=ii(t,t===un?hn:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=$a(t,u);else{i=u;var f=wt;wt|=2;var h=_p();(un!==t||hn!==i)&&(Ni=null,Es=X()+500,Nr(t,i));do try{Jv();break}catch(L){vp(t,L)}while(!0);Eu(),Ha.current=h,wt=f,Zt!==null?i=0:(un=null,hn=0,i=nn)}if(i!==0){if(i===2&&(f=Ot(t),f!==0&&(u=f,i=oc(t,f))),i===1)throw o=Co,Nr(t,0),ur(t,u),In(t,X()),o;if(i===6)ur(t,u);else{if(f=t.current.alternate,(u&30)===0&&!Zv(f)&&(i=$a(t,u),i===2&&(h=Ot(t),h!==0&&(u=h,i=oc(t,h))),i===1))throw o=Co,Nr(t,0),ur(t,u),In(t,X()),o;switch(t.finishedWork=f,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:Fr(t,Ln,Ni);break;case 3:if(ur(t,u),(u&130023424)===u&&(i=ic+500-X(),10<i)){if(ii(t,0)!==0)break;if(f=t.suspendedLanes,(f&u)!==u){An(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=du(Fr.bind(null,t,Ln,Ni),i);break}Fr(t,Ln,Ni);break;case 4:if(ur(t,u),(u&4194240)===u)break;for(i=t.eventTimes,f=-1;0<u;){var M=31-Tt(u);h=1<<M,M=i[M],M>f&&(f=M),u&=~h}if(u=f,u=X()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Kv(u/1960))-u,10<u){t.timeoutHandle=du(Fr.bind(null,t,Ln,Ni),u);break}Fr(t,Ln,Ni);break;case 5:Fr(t,Ln,Ni);break;default:throw Error(n(329))}}}return In(t,X()),t.callbackNode===o?mp.bind(null,t):null}function oc(t,i){var o=bo;return t.current.memoizedState.isDehydrated&&(Nr(t,i).flags|=256),t=$a(t,i),t!==2&&(i=Ln,Ln=o,i!==null&&ac(i)),t}function ac(t){Ln===null?Ln=t:Ln.push.apply(Ln,t)}function Zv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var f=o[u],h=f.getSnapshot;f=f.value;try{if(!ri(h(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(t,i){for(i&=~nc,i&=~Ga,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Tt(i),u=1<<o;t[o]=-1,i&=~u}}function gp(t){if((wt&6)!==0)throw Error(n(327));Ts();var i=ii(t,0);if((i&1)===0)return In(t,X()),null;var o=$a(t,i);if(t.tag!==0&&o===2){var u=Ot(t);u!==0&&(i=u,o=oc(t,u))}if(o===1)throw o=Co,Nr(t,0),ur(t,i),In(t,X()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Fr(t,Ln,Ni),In(t,X()),null}function lc(t,i){var o=wt;wt|=1;try{return t(i)}finally{wt=o,wt===0&&(Es=X()+500,Ma&&nr())}}function Ur(t){ar!==null&&ar.tag===0&&(wt&6)===0&&Ts();var i=wt;wt|=1;var o=Zn.transition,u=xt;try{if(Zn.transition=null,xt=1,t)return t()}finally{xt=u,Zn.transition=o,wt=i,(wt&6)===0&&nr()}}function uc(){Hn=Ms.current,Ht(Ms)}function Nr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Rv(o)),Zt!==null)for(o=Zt.return;o!==null;){var u=o;switch(_u(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ya();break;case 3:xs(),Ht(bn),Ht(vn),Du();break;case 5:bu(u);break;case 4:xs();break;case 13:Ht(Xt);break;case 19:Ht(Xt);break;case 10:Tu(u.type._context);break;case 22:case 23:uc()}o=o.return}if(un=t,Zt=t=cr(t.current,null),hn=Hn=i,nn=0,Co=null,nc=Ga=Ir=0,Ln=bo=null,Pr!==null){for(i=0;i<Pr.length;i++)if(o=Pr[i],u=o.interleaved,u!==null){o.interleaved=null;var f=u.next,h=o.pending;if(h!==null){var M=h.next;h.next=f,u.next=M}o.pending=u}Pr=null}return t}function vp(t,i){do{var o=Zt;try{if(Eu(),La.current=Fa,Ia){for(var u=jt.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}Ia=!1}if(Lr=0,ln=tn=jt=null,Mo=!1,Eo=0,tc.current=null,o===null||o.return===null){nn=1,Co=i,Zt=null;break}e:{var h=t,M=o.return,L=o,B=i;if(i=hn,L.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var J=B,ge=L,ve=ge.tag;if((ge.mode&1)===0&&(ve===0||ve===11||ve===15)){var pe=ge.alternate;pe?(ge.updateQueue=pe.updateQueue,ge.memoizedState=pe.memoizedState,ge.lanes=pe.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var ke=Hh(M);if(ke!==null){ke.flags&=-257,Gh(ke,M,L,h,i),ke.mode&1&&Vh(h,J,i),i=ke,B=J;var He=i.updateQueue;if(He===null){var qe=new Set;qe.add(B),i.updateQueue=qe}else He.add(B);break e}else{if((i&1)===0){Vh(h,J,i),cc();break e}B=Error(n(426))}}else if(Wt&&L.mode&1){var $t=Hh(M);if($t!==null){($t.flags&65536)===0&&($t.flags|=256),Gh($t,M,L,h,i),Su(ys(B,L));break e}}h=B=ys(B,L),nn!==4&&(nn=2),bo===null?bo=[h]:bo.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=zh(h,B,i);dh(h,Y);break e;case 1:L=B;var W=h.type,$=h.stateNode;if((h.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(or===null||!or.has($)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=Bh(h,L,i);dh(h,Ee);break e}}h=h.return}while(h!==null)}yp(o)}catch(Ke){i=Ke,Zt===o&&o!==null&&(Zt=o=o.return);continue}break}while(!0)}function _p(){var t=Ha.current;return Ha.current=Fa,t===null?Fa:t}function cc(){(nn===0||nn===3||nn===2)&&(nn=4),un===null||(Ir&268435455)===0&&(Ga&268435455)===0||ur(un,hn)}function $a(t,i){var o=wt;wt|=2;var u=_p();(un!==t||hn!==i)&&(Ni=null,Nr(t,i));do try{Qv();break}catch(f){vp(t,f)}while(!0);if(Eu(),wt=o,Ha.current=u,Zt!==null)throw Error(n(261));return un=null,hn=0,nn}function Qv(){for(;Zt!==null;)xp(Zt)}function Jv(){for(;Zt!==null&&!ne();)xp(Zt)}function xp(t){var i=Ep(t.alternate,t,Hn);t.memoizedProps=t.pendingProps,i===null?yp(t):Zt=i,tc.current=null}function yp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=Xv(o,i,Hn),o!==null){Zt=o;return}}else{if(o=jv(o,i),o!==null){o.flags&=32767,Zt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nn=6,Zt=null;return}}if(i=i.sibling,i!==null){Zt=i;return}Zt=i=t}while(i!==null);nn===0&&(nn=5)}function Fr(t,i,o){var u=xt,f=Zn.transition;try{Zn.transition=null,xt=1,e_(t,i,o,u)}finally{Zn.transition=f,xt=u}return null}function e_(t,i,o,u){do Ts();while(ar!==null);if((wt&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(gn(t,h),t===un&&(Zt=un=null,hn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Xa||(Xa=!0,Tp(Oe,function(){return Ts(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Zn.transition,Zn.transition=null;var M=xt;xt=1;var L=wt;wt|=4,tc.current=null,qv(t,o),cp(o,t),yv(cu),oa=!!uu,cu=uu=null,t.current=o,$v(o),ie(),wt=L,xt=M,Zn.transition=h}else t.current=o;if(Xa&&(Xa=!1,ar=t,ja=f),h=t.pendingLanes,h===0&&(or=null),Ct(o.stateNode),In(t,X()),i!==null)for(u=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],u(f.value,{componentStack:f.stack,digest:f.digest});if(Wa)throw Wa=!1,t=rc,rc=null,t;return(ja&1)!==0&&t.tag!==0&&Ts(),h=t.pendingLanes,(h&1)!==0?t===sc?Po++:(Po=0,sc=t):Po=0,nr(),null}function Ts(){if(ar!==null){var t=ld(ja),i=Zn.transition,o=xt;try{if(Zn.transition=null,xt=16>t?16:t,ar===null)var u=!1;else{if(t=ar,ar=null,ja=0,(wt&6)!==0)throw Error(n(331));var f=wt;for(wt|=4,ze=t.current;ze!==null;){var h=ze,M=h.child;if((ze.flags&16)!==0){var L=h.deletions;if(L!==null){for(var B=0;B<L.length;B++){var J=L[B];for(ze=J;ze!==null;){var ge=ze;switch(ge.tag){case 0:case 11:case 15:Ro(8,ge,h)}var ve=ge.child;if(ve!==null)ve.return=ge,ze=ve;else for(;ze!==null;){ge=ze;var pe=ge.sibling,ke=ge.return;if(sp(ge),ge===J){ze=null;break}if(pe!==null){pe.return=ke,ze=pe;break}ze=ke}}}var He=h.alternate;if(He!==null){var qe=He.child;if(qe!==null){He.child=null;do{var $t=qe.sibling;qe.sibling=null,qe=$t}while(qe!==null)}}ze=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,ze=M;else e:for(;ze!==null;){if(h=ze,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Ro(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,ze=Y;break e}ze=h.return}}var W=t.current;for(ze=W;ze!==null;){M=ze;var $=M.child;if((M.subtreeFlags&2064)!==0&&$!==null)$.return=M,ze=$;else e:for(M=W;ze!==null;){if(L=ze,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Va(9,L)}}catch(Ke){Yt(L,L.return,Ke)}if(L===M){ze=null;break e}var Ee=L.sibling;if(Ee!==null){Ee.return=L.return,ze=Ee;break e}ze=L.return}}if(wt=f,nr(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Je,t)}catch{}u=!0}return u}finally{xt=o,Zn.transition=i}}return!1}function Sp(t,i,o){i=ys(o,i),i=zh(t,i,1),t=rr(t,i,1),i=An(),t!==null&&(qt(t,1,i),In(t,i))}function Yt(t,i,o){if(t.tag===3)Sp(t,t,o);else for(;i!==null;){if(i.tag===3){Sp(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(or===null||!or.has(u))){t=ys(o,t),t=Bh(i,t,1),i=rr(i,t,1),t=An(),i!==null&&(qt(i,1,t),In(i,t));break}}i=i.return}}function t_(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),i=An(),t.pingedLanes|=t.suspendedLanes&o,un===t&&(hn&o)===o&&(nn===4||nn===3&&(hn&130023424)===hn&&500>X()-ic?Nr(t,0):nc|=o),In(t,i)}function Mp(t,i){i===0&&((t.mode&1)===0?i=1:(i=_t,_t<<=1,(_t&130023424)===0&&(_t=4194304)));var o=An();t=Li(t,i),t!==null&&(qt(t,i,o),In(t,o))}function n_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Mp(t,o)}function i_(t,i){var o=0;switch(t.tag){case 13:var u=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),Mp(t,o)}var Ep;Ep=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||bn.current)Dn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Dn=!1,Wv(t,i,o);Dn=(t.flags&131072)!==0}else Dn=!1,Wt&&(i.flags&1048576)!==0&&nh(i,Ta,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;za(t,i),t=i.pendingProps;var f=ds(i,vn.current);_s(i,o),f=Uu(null,i,u,t,f,o);var h=Nu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(u)?(h=!0,Sa(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Ru(i),f.updater=Oa,i.stateNode=f,f._reactInternals=i,Vu(i,u,t,o),i=Xu(null,i,u,!0,h,o)):(i.tag=0,Wt&&h&&vu(i),wn(null,i,f,o),i=i.child),i;case 16:u=i.elementType;e:{switch(za(t,i),t=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=s_(u),t=oi(u,t),f){case 0:i=Wu(null,i,u,t,o);break e;case 1:i=$h(null,i,u,t,o);break e;case 11:i=Wh(null,i,u,t,o);break e;case 14:i=Xh(null,i,u,oi(u.type,t),o);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:oi(u,f),Wu(t,i,u,f,o);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:oi(u,f),$h(t,i,u,f,o);case 3:e:{if(Kh(i),t===null)throw Error(n(387));u=i.pendingProps,h=i.memoizedState,f=h.element,fh(t,i),Pa(i,u,null,o);var M=i.memoizedState;if(u=M.element,h.isDehydrated)if(h={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=ys(Error(n(423)),i),i=Zh(t,i,u,o,f);break e}else if(u!==f){f=ys(Error(n(424)),i),i=Zh(t,i,u,o,f);break e}else for(Vn=Ji(i.stateNode.containerInfo.firstChild),Bn=i,Wt=!0,si=null,o=uh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ms(),u===f){i=Ui(t,i,o);break e}wn(t,i,u,o)}i=i.child}return i;case 5:return ph(i),t===null&&yu(i),u=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,M=f.children,fu(u,f)?M=null:h!==null&&fu(u,h)&&(i.flags|=32),qh(t,i),wn(t,i,M,o),i.child;case 6:return t===null&&yu(i),null;case 13:return Qh(t,i,o);case 4:return Cu(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=gs(i,null,u,o):wn(t,i,u,o),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:oi(u,f),Wh(t,i,u,f,o);case 7:return wn(t,i,i.pendingProps,o),i.child;case 8:return wn(t,i,i.pendingProps.children,o),i.child;case 12:return wn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,h=i.memoizedProps,M=f.value,kt(Ra,u._currentValue),u._currentValue=M,h!==null)if(ri(h.value,M)){if(h.children===f.children&&!bn.current){i=Ui(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var L=h.dependencies;if(L!==null){M=h.child;for(var B=L.firstContext;B!==null;){if(B.context===u){if(h.tag===1){B=Ii(-1,o&-o),B.tag=2;var J=h.updateQueue;if(J!==null){J=J.shared;var ge=J.pending;ge===null?B.next=B:(B.next=ge.next,ge.next=B),J.pending=B}}h.lanes|=o,B=h.alternate,B!==null&&(B.lanes|=o),wu(h.return,o,i),L.lanes|=o;break}B=B.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,L=M.alternate,L!==null&&(L.lanes|=o),wu(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}wn(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,_s(i,o),f=$n(f),u=u(f),i.flags|=1,wn(t,i,u,o),i.child;case 14:return u=i.type,f=oi(u,i.pendingProps),f=oi(u.type,f),Xh(t,i,u,f,o);case 15:return jh(t,i,i.type,i.pendingProps,o);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:oi(u,f),za(t,i),i.tag=1,Pn(u)?(t=!0,Sa(i)):t=!1,_s(i,o),Oh(i,u,f),Vu(i,u,f,o),Xu(null,i,u,!0,t,o);case 19:return ep(t,i,o);case 22:return Yh(t,i,o)}throw Error(n(156,i.tag))};function Tp(t,i){return w(t,i)}function r_(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,i,o,u){return new r_(t,i,o,u)}function fc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function s_(t){if(typeof t=="function")return fc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===K)return 11;if(t===ae)return 14}return 2}function cr(t,i){var o=t.alternate;return o===null?(o=Qn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ka(t,i,o,u,f,h){var M=2;if(u=t,typeof t=="function")fc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case k:return Or(o.children,f,h,i);case O:M=8,f|=8;break;case C:return t=Qn(12,o,i,f|2),t.elementType=C,t.lanes=h,t;case te:return t=Qn(13,o,i,f),t.elementType=te,t.lanes=h,t;case de:return t=Qn(19,o,i,f),t.elementType=de,t.lanes=h,t;case le:return Za(o,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:M=10;break e;case H:M=9;break e;case K:M=11;break e;case ae:M=14;break e;case re:M=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Qn(M,o,i,f),i.elementType=t,i.type=u,i.lanes=h,i}function Or(t,i,o,u){return t=Qn(7,t,u,i),t.lanes=o,t}function Za(t,i,o,u){return t=Qn(22,t,u,i),t.elementType=le,t.lanes=o,t.stateNode={isHidden:!1},t}function dc(t,i,o){return t=Qn(6,t,null,i),t.lanes=o,t}function hc(t,i,o){return i=Qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function o_(t,i,o,u,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function pc(t,i,o,u,f,h,M,L,B){return t=new o_(t,i,o,L,B),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Qn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ru(h),t}function a_(t,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:u==null?null:""+u,children:t,containerInfo:i,implementation:o}}function wp(t){if(!t)return tr;t=t._reactInternals;e:{if(Ri(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Pn(o))return Jd(t,o,i)}return i}function Ap(t,i,o,u,f,h,M,L,B){return t=pc(o,u,!0,t,f,h,M,L,B),t.context=wp(null),o=t.current,u=An(),f=lr(o),h=Ii(u,f),h.callback=i??null,rr(o,h,f),t.current.lanes=f,qt(t,f,u),In(t,u),t}function Qa(t,i,o,u){var f=i.current,h=An(),M=lr(f);return o=wp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ii(h,M),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=rr(f,i,M),t!==null&&(ui(t,f,M,h),ba(t,f,M)),M}function Ja(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function mc(t,i){Rp(t,i),(t=t.alternate)&&Rp(t,i)}function l_(){return null}var Cp=typeof reportError=="function"?reportError:function(t){console.error(t)};function gc(t){this._internalRoot=t}el.prototype.render=gc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Qa(t,i,null,null)},el.prototype.unmount=gc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ur(function(){Qa(null,t,null,null)}),i[Ci]=null}};function el(t){this._internalRoot=t}el.prototype.unstable_scheduleHydration=function(t){if(t){var i=fd();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Ki.length&&i!==0&&i<Ki[o].priority;o++);Ki.splice(o,0,t),o===0&&pd(t)}};function vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bp(){}function u_(t,i,o,u,f){if(f){if(typeof u=="function"){var h=u;u=function(){var J=Ja(M);h.call(J)}}var M=Ap(i,u,t,0,null,!1,!1,"",bp);return t._reactRootContainer=M,t[Ci]=M.current,po(t.nodeType===8?t.parentNode:t),Ur(),M}for(;f=t.lastChild;)t.removeChild(f);if(typeof u=="function"){var L=u;u=function(){var J=Ja(B);L.call(J)}}var B=pc(t,0,!1,null,null,!1,!1,"",bp);return t._reactRootContainer=B,t[Ci]=B.current,po(t.nodeType===8?t.parentNode:t),Ur(function(){Qa(i,B,o,u)}),B}function nl(t,i,o,u,f){var h=o._reactRootContainer;if(h){var M=h;if(typeof f=="function"){var L=f;f=function(){var B=Ja(M);L.call(B)}}Qa(i,M,t,f)}else M=u_(o,i,t,f,u);return Ja(M)}ud=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=en(i.pendingLanes);o!==0&&(wr(i,o|1),In(i,X()),(wt&6)===0&&(Es=X()+500,nr()))}break;case 13:Ur(function(){var u=Li(t,1);if(u!==null){var f=An();ui(u,t,1,f)}}),mc(t,1)}},Hl=function(t){if(t.tag===13){var i=Li(t,134217728);if(i!==null){var o=An();ui(i,t,134217728,o)}mc(t,134217728)}},cd=function(t){if(t.tag===13){var i=lr(t),o=Li(t,i);if(o!==null){var u=An();ui(o,t,i,u)}mc(t,i)}},fd=function(){return xt},dd=function(t,i){var o=xt;try{return xt=t,i()}finally{xt=o}},ye=function(t,i,o){switch(i){case"input":if(Xe(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var f=xa(u);if(!f)throw Error(n(90));Gt(u),Xe(u,f)}}}break;case"textarea":E(t,o);break;case"select":i=o.value,i!=null&&zt(t,!!o.multiple,i,!1)}},ct=lc,bt=Ur;var c_={usingClientEntryPoint:!1,Events:[vo,cs,xa,he,Ye,lc]},Do={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},f_={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=na(t),t===null?null:t.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||l_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Je=il.inject(f_),at=il}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c_,Un.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vc(i))throw Error(n(200));return a_(t,i,null,o)},Un.createRoot=function(t,i){if(!vc(t))throw Error(n(299));var o=!1,u="",f=Cp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=pc(t,1,!1,null,null,o,!1,u,f),t[Ci]=i.current,po(t.nodeType===8?t.parentNode:t),new gc(i)},Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=na(i),t=t===null?null:t.stateNode,t},Un.flushSync=function(t){return Ur(t)},Un.hydrate=function(t,i,o){if(!tl(i))throw Error(n(200));return nl(null,t,i,!0,o)},Un.hydrateRoot=function(t,i,o){if(!vc(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,f=!1,h="",M=Cp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Ap(i,null,t,1,o??null,f,!1,h,M),t[Ci]=i.current,po(t),u)for(t=0;t<u.length;t++)o=u[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new el(i)},Un.render=function(t,i,o){if(!tl(i))throw Error(n(200));return nl(null,t,i,!1,o)},Un.unmountComponentAtNode=function(t){if(!tl(t))throw Error(n(40));return t._reactRootContainer?(Ur(function(){nl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1},Un.unstable_batchedUpdates=lc,Un.unstable_renderSubtreeIntoContainer=function(t,i,o,u){if(!tl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return nl(t,i,o,!1,u)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var Op;function x_(){if(Op)return yc.exports;Op=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),yc.exports=__(),yc.exports}var kp;function y_(){if(kp)return rl;kp=1;var s=x_();return rl.createRoot=s.createRoot,rl.hydrateRoot=s.hydrateRoot,rl}var S_=y_(),St=Kf();function zp(s,e){if(typeof s=="function")return s(e);s!=null&&(s.current=e)}function M_(...s){return e=>{let n=!1;const r=s.map(a=>{const l=zp(a,e);return!n&&typeof l=="function"&&(n=!0),l});if(n)return()=>{for(let a=0;a<r.length;a++){const l=r[a];typeof l=="function"?l():zp(s[a],null)}}}}function E_(s){const e=T_(s),n=St.forwardRef((r,a)=>{const{children:l,...c}=r,d=St.Children.toArray(l),m=d.find(A_);if(m){const p=m.props.children,_=d.map(g=>g===m?St.Children.count(p)>1?St.Children.only(null):St.isValidElement(p)?p.props.children:null:g);return Ce.jsx(e,{...c,ref:a,children:St.isValidElement(p)?St.cloneElement(p,void 0,_):null})}return Ce.jsx(e,{...c,ref:a,children:l})});return n.displayName=`${s}.Slot`,n}var Hm=E_("Slot");function T_(s){const e=St.forwardRef((n,r)=>{const{children:a,...l}=n;if(St.isValidElement(a)){const c=C_(a),d=R_(l,a.props);return a.type!==St.Fragment&&(d.ref=r?M_(r,c):c),St.cloneElement(a,d)}return St.Children.count(a)>1?St.Children.only(null):null});return e.displayName=`${s}.SlotClone`,e}var w_=Symbol("radix.slottable");function A_(s){return St.isValidElement(s)&&typeof s.type=="function"&&"__radixId"in s.type&&s.type.__radixId===w_}function R_(s,e){const n={...e};for(const r in e){const a=s[r],l=e[r];/^on[A-Z]/.test(r)?a&&l?n[r]=(...d)=>{const m=l(...d);return a(...d),m}:a&&(n[r]=a):r==="style"?n[r]={...a,...l}:r==="className"&&(n[r]=[a,l].filter(Boolean).join(" "))}return{...s,...n}}function C_(s){let e=Object.getOwnPropertyDescriptor(s.props,"ref")?.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?s.ref:(e=Object.getOwnPropertyDescriptor(s,"ref")?.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?s.props.ref:s.props.ref||s.ref)}function Gm(s){var e,n,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var a=s.length;for(e=0;e<a;e++)s[e]&&(n=Gm(s[e]))&&(r&&(r+=" "),r+=n)}else for(n in s)s[n]&&(r&&(r+=" "),r+=n);return r}function Wm(){for(var s,e,n=0,r="",a=arguments.length;n<a;n++)(s=arguments[n])&&(e=Gm(s))&&(r&&(r+=" "),r+=e);return r}const Bp=s=>typeof s=="boolean"?`${s}`:s===0?"0":s,Vp=Wm,Xm=(s,e)=>n=>{var r;if(e?.variants==null)return Vp(s,n?.class,n?.className);const{variants:a,defaultVariants:l}=e,c=Object.keys(a).map(p=>{const _=n?.[p],g=l?.[p];if(_===null)return null;const x=Bp(_)||Bp(g);return a[p][x]}),d=n&&Object.entries(n).reduce((p,_)=>{let[g,x]=_;return x===void 0||(p[g]=x),p},{}),m=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((p,_)=>{let{class:g,className:x,...S}=_;return Object.entries(S).every(T=>{let[A,y]=T;return Array.isArray(y)?y.includes({...l,...d}[A]):{...l,...d}[A]===y})?[...p,g,x]:p},[]);return Vp(s,c,m,n?.class,n?.className)},Zf="-",b_=s=>{const e=D_(s),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=s;return{getClassGroupId:c=>{const d=c.split(Zf);return d[0]===""&&d.length!==1&&d.shift(),jm(d,e)||P_(c)},getConflictingClassGroupIds:(c,d)=>{const m=n[c]||[];return d&&r[c]?[...m,...r[c]]:m}}},jm=(s,e)=>{if(s.length===0)return e.classGroupId;const n=s[0],r=e.nextPart.get(n),a=r?jm(s.slice(1),r):void 0;if(a)return a;if(e.validators.length===0)return;const l=s.join(Zf);return e.validators.find(({validator:c})=>c(l))?.classGroupId},Hp=/^\[(.+)\]$/,P_=s=>{if(Hp.test(s)){const e=Hp.exec(s)[1],n=e?.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},D_=s=>{const{theme:e,classGroups:n}=s,r={nextPart:new Map,validators:[]};for(const a in n)nf(n[a],r,a,e);return r},nf=(s,e,n,r)=>{s.forEach(a=>{if(typeof a=="string"){const l=a===""?e:Gp(e,a);l.classGroupId=n;return}if(typeof a=="function"){if(L_(a)){nf(a(r),e,n,r);return}e.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(([l,c])=>{nf(c,Gp(e,l),n,r)})})},Gp=(s,e)=>{let n=s;return e.split(Zf).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},L_=s=>s.isThemeGetter,I_=s=>{if(s<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const a=(l,c)=>{n.set(l,c),e++,e>s&&(e=0,r=n,n=new Map)};return{get(l){let c=n.get(l);if(c!==void 0)return c;if((c=r.get(l))!==void 0)return a(l,c),c},set(l,c){n.has(l)?n.set(l,c):a(l,c)}}},rf="!",sf=":",U_=sf.length,N_=s=>{const{prefix:e,experimentalParseClassName:n}=s;let r=a=>{const l=[];let c=0,d=0,m=0,p;for(let T=0;T<a.length;T++){let A=a[T];if(c===0&&d===0){if(A===sf){l.push(a.slice(m,T)),m=T+U_;continue}if(A==="/"){p=T;continue}}A==="["?c++:A==="]"?c--:A==="("?d++:A===")"&&d--}const _=l.length===0?a:a.substring(m),g=F_(_),x=g!==_,S=p&&p>m?p-m:void 0;return{modifiers:l,hasImportantModifier:x,baseClassName:g,maybePostfixModifierPosition:S}};if(e){const a=e+sf,l=r;r=c=>c.startsWith(a)?l(c.substring(a.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:c,maybePostfixModifierPosition:void 0}}if(n){const a=r;r=l=>n({className:l,parseClassName:a})}return r},F_=s=>s.endsWith(rf)?s.substring(0,s.length-1):s.startsWith(rf)?s.substring(1):s,O_=s=>{const e=Object.fromEntries(s.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const a=[];let l=[];return r.forEach(c=>{c[0]==="["||e[c]?(a.push(...l.sort(),c),l=[]):l.push(c)}),a.push(...l.sort()),a}},k_=s=>({cache:I_(s.cacheSize),parseClassName:N_(s),sortModifiers:O_(s),...b_(s)}),z_=/\s+/,B_=(s,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:a,sortModifiers:l}=e,c=[],d=s.trim().split(z_);let m="";for(let p=d.length-1;p>=0;p-=1){const _=d[p],{isExternal:g,modifiers:x,hasImportantModifier:S,baseClassName:T,maybePostfixModifierPosition:A}=n(_);if(g){m=_+(m.length>0?" "+m:m);continue}let y=!!A,v=r(y?T.substring(0,A):T);if(!v){if(!y){m=_+(m.length>0?" "+m:m);continue}if(v=r(T),!v){m=_+(m.length>0?" "+m:m);continue}y=!1}const F=l(x).join(":"),U=S?F+rf:F,b=U+v;if(c.includes(b))continue;c.push(b);const V=a(v,y);for(let z=0;z<V.length;++z){const k=V[z];c.push(U+k)}m=_+(m.length>0?" "+m:m)}return m};function V_(){let s=0,e,n,r="";for(;s<arguments.length;)(e=arguments[s++])&&(n=Ym(e))&&(r&&(r+=" "),r+=n);return r}const Ym=s=>{if(typeof s=="string")return s;let e,n="";for(let r=0;r<s.length;r++)s[r]&&(e=Ym(s[r]))&&(n&&(n+=" "),n+=e);return n};function H_(s,...e){let n,r,a,l=c;function c(m){const p=e.reduce((_,g)=>g(_),s());return n=k_(p),r=n.cache.get,a=n.cache.set,l=d,d(m)}function d(m){const p=r(m);if(p)return p;const _=B_(m,n);return a(m,_),_}return function(){return l(V_.apply(null,arguments))}}const rn=s=>{const e=n=>n[s]||[];return e.isThemeGetter=!0,e},qm=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,$m=/^\((?:(\w[\w-]*):)?(.+)\)$/i,G_=/^\d+\/\d+$/,W_=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,X_=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,j_=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Y_=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,q_=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ws=s=>G_.test(s),gt=s=>!!s&&!Number.isNaN(Number(s)),dr=s=>!!s&&Number.isInteger(Number(s)),Ec=s=>s.endsWith("%")&&gt(s.slice(0,-1)),Fi=s=>W_.test(s),$_=()=>!0,K_=s=>X_.test(s)&&!j_.test(s),Km=()=>!1,Z_=s=>Y_.test(s),Q_=s=>q_.test(s),J_=s=>!Ge(s)&&!We(s),e0=s=>qs(s,Jm,Km),Ge=s=>qm.test(s),kr=s=>qs(s,eg,K_),Tc=s=>qs(s,s0,gt),Wp=s=>qs(s,Zm,Km),t0=s=>qs(s,Qm,Q_),sl=s=>qs(s,tg,Z_),We=s=>$m.test(s),Io=s=>$s(s,eg),n0=s=>$s(s,o0),Xp=s=>$s(s,Zm),i0=s=>$s(s,Jm),r0=s=>$s(s,Qm),ol=s=>$s(s,tg,!0),qs=(s,e,n)=>{const r=qm.exec(s);return r?r[1]?e(r[1]):n(r[2]):!1},$s=(s,e,n=!1)=>{const r=$m.exec(s);return r?r[1]?e(r[1]):n:!1},Zm=s=>s==="position"||s==="percentage",Qm=s=>s==="image"||s==="url",Jm=s=>s==="length"||s==="size"||s==="bg-size",eg=s=>s==="length",s0=s=>s==="number",o0=s=>s==="family-name",tg=s=>s==="shadow",a0=()=>{const s=rn("color"),e=rn("font"),n=rn("text"),r=rn("font-weight"),a=rn("tracking"),l=rn("leading"),c=rn("breakpoint"),d=rn("container"),m=rn("spacing"),p=rn("radius"),_=rn("shadow"),g=rn("inset-shadow"),x=rn("text-shadow"),S=rn("drop-shadow"),T=rn("blur"),A=rn("perspective"),y=rn("aspect"),v=rn("ease"),F=rn("animate"),U=()=>["auto","avoid","all","avoid-page","page","left","right","column"],b=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],V=()=>[...b(),We,Ge],z=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto","contain","none"],O=()=>[We,Ge,m],C=()=>[ws,"full","auto",...O()],R=()=>[dr,"none","subgrid",We,Ge],H=()=>["auto",{span:["full",dr,We,Ge]},dr,We,Ge],K=()=>[dr,"auto",We,Ge],te=()=>["auto","min","max","fr",We,Ge],de=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ae=()=>["start","end","center","stretch","center-safe","end-safe"],re=()=>["auto",...O()],le=()=>[ws,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...O()],D=()=>[s,We,Ge],ue=()=>[...b(),Xp,Wp,{position:[We,Ge]}],se=()=>["no-repeat",{repeat:["","x","y","space","round"]}],I=()=>["auto","cover","contain",i0,e0,{size:[We,Ge]}],Q=()=>[Ec,Io,kr],Ae=()=>["","none","full",p,We,Ge],Re=()=>["",gt,Io,kr],Ie=()=>["solid","dashed","dotted","double"],Z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ee=()=>[gt,Ec,Xp,Wp],_e=()=>["","none",T,We,Ge],De=()=>["none",gt,We,Ge],Ue=()=>["none",gt,We,Ge],ht=()=>[gt,We,Ge],Gt=()=>[ws,"full",...O()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Fi],breakpoint:[Fi],color:[$_],container:[Fi],"drop-shadow":[Fi],ease:["in","out","in-out"],font:[J_],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Fi],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Fi],shadow:[Fi],spacing:["px",gt],text:[Fi],"text-shadow":[Fi],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",ws,Ge,We,y]}],container:["container"],columns:[{columns:[gt,Ge,We,d]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:V()}],overflow:[{overflow:z()}],"overflow-x":[{"overflow-x":z()}],"overflow-y":[{"overflow-y":z()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:C()}],"inset-x":[{"inset-x":C()}],"inset-y":[{"inset-y":C()}],start:[{start:C()}],end:[{end:C()}],top:[{top:C()}],right:[{right:C()}],bottom:[{bottom:C()}],left:[{left:C()}],visibility:["visible","invisible","collapse"],z:[{z:[dr,"auto",We,Ge]}],basis:[{basis:[ws,"full","auto",d,...O()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[gt,ws,"auto","initial","none",Ge]}],grow:[{grow:["",gt,We,Ge]}],shrink:[{shrink:["",gt,We,Ge]}],order:[{order:[dr,"first","last","none",We,Ge]}],"grid-cols":[{"grid-cols":R()}],"col-start-end":[{col:H()}],"col-start":[{"col-start":K()}],"col-end":[{"col-end":K()}],"grid-rows":[{"grid-rows":R()}],"row-start-end":[{row:H()}],"row-start":[{"row-start":K()}],"row-end":[{"row-end":K()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":te()}],"auto-rows":[{"auto-rows":te()}],gap:[{gap:O()}],"gap-x":[{"gap-x":O()}],"gap-y":[{"gap-y":O()}],"justify-content":[{justify:[...de(),"normal"]}],"justify-items":[{"justify-items":[...ae(),"normal"]}],"justify-self":[{"justify-self":["auto",...ae()]}],"align-content":[{content:["normal",...de()]}],"align-items":[{items:[...ae(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ae(),{baseline:["","last"]}]}],"place-content":[{"place-content":de()}],"place-items":[{"place-items":[...ae(),"baseline"]}],"place-self":[{"place-self":["auto",...ae()]}],p:[{p:O()}],px:[{px:O()}],py:[{py:O()}],ps:[{ps:O()}],pe:[{pe:O()}],pt:[{pt:O()}],pr:[{pr:O()}],pb:[{pb:O()}],pl:[{pl:O()}],m:[{m:re()}],mx:[{mx:re()}],my:[{my:re()}],ms:[{ms:re()}],me:[{me:re()}],mt:[{mt:re()}],mr:[{mr:re()}],mb:[{mb:re()}],ml:[{ml:re()}],"space-x":[{"space-x":O()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":O()}],"space-y-reverse":["space-y-reverse"],size:[{size:le()}],w:[{w:[d,"screen",...le()]}],"min-w":[{"min-w":[d,"screen","none",...le()]}],"max-w":[{"max-w":[d,"screen","none","prose",{screen:[c]},...le()]}],h:[{h:["screen","lh",...le()]}],"min-h":[{"min-h":["screen","lh","none",...le()]}],"max-h":[{"max-h":["screen","lh",...le()]}],"font-size":[{text:["base",n,Io,kr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,We,Tc]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Ec,Ge]}],"font-family":[{font:[n0,Ge,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,We,Ge]}],"line-clamp":[{"line-clamp":[gt,"none",We,Tc]}],leading:[{leading:[l,...O()]}],"list-image":[{"list-image":["none",We,Ge]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",We,Ge]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:D()}],"text-color":[{text:D()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Ie(),"wavy"]}],"text-decoration-thickness":[{decoration:[gt,"from-font","auto",We,kr]}],"text-decoration-color":[{decoration:D()}],"underline-offset":[{"underline-offset":[gt,"auto",We,Ge]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:O()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",We,Ge]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",We,Ge]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ue()}],"bg-repeat":[{bg:se()}],"bg-size":[{bg:I()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},dr,We,Ge],radial:["",We,Ge],conic:[dr,We,Ge]},r0,t0]}],"bg-color":[{bg:D()}],"gradient-from-pos":[{from:Q()}],"gradient-via-pos":[{via:Q()}],"gradient-to-pos":[{to:Q()}],"gradient-from":[{from:D()}],"gradient-via":[{via:D()}],"gradient-to":[{to:D()}],rounded:[{rounded:Ae()}],"rounded-s":[{"rounded-s":Ae()}],"rounded-e":[{"rounded-e":Ae()}],"rounded-t":[{"rounded-t":Ae()}],"rounded-r":[{"rounded-r":Ae()}],"rounded-b":[{"rounded-b":Ae()}],"rounded-l":[{"rounded-l":Ae()}],"rounded-ss":[{"rounded-ss":Ae()}],"rounded-se":[{"rounded-se":Ae()}],"rounded-ee":[{"rounded-ee":Ae()}],"rounded-es":[{"rounded-es":Ae()}],"rounded-tl":[{"rounded-tl":Ae()}],"rounded-tr":[{"rounded-tr":Ae()}],"rounded-br":[{"rounded-br":Ae()}],"rounded-bl":[{"rounded-bl":Ae()}],"border-w":[{border:Re()}],"border-w-x":[{"border-x":Re()}],"border-w-y":[{"border-y":Re()}],"border-w-s":[{"border-s":Re()}],"border-w-e":[{"border-e":Re()}],"border-w-t":[{"border-t":Re()}],"border-w-r":[{"border-r":Re()}],"border-w-b":[{"border-b":Re()}],"border-w-l":[{"border-l":Re()}],"divide-x":[{"divide-x":Re()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Re()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Ie(),"hidden","none"]}],"divide-style":[{divide:[...Ie(),"hidden","none"]}],"border-color":[{border:D()}],"border-color-x":[{"border-x":D()}],"border-color-y":[{"border-y":D()}],"border-color-s":[{"border-s":D()}],"border-color-e":[{"border-e":D()}],"border-color-t":[{"border-t":D()}],"border-color-r":[{"border-r":D()}],"border-color-b":[{"border-b":D()}],"border-color-l":[{"border-l":D()}],"divide-color":[{divide:D()}],"outline-style":[{outline:[...Ie(),"none","hidden"]}],"outline-offset":[{"outline-offset":[gt,We,Ge]}],"outline-w":[{outline:["",gt,Io,kr]}],"outline-color":[{outline:D()}],shadow:[{shadow:["","none",_,ol,sl]}],"shadow-color":[{shadow:D()}],"inset-shadow":[{"inset-shadow":["none",g,ol,sl]}],"inset-shadow-color":[{"inset-shadow":D()}],"ring-w":[{ring:Re()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:D()}],"ring-offset-w":[{"ring-offset":[gt,kr]}],"ring-offset-color":[{"ring-offset":D()}],"inset-ring-w":[{"inset-ring":Re()}],"inset-ring-color":[{"inset-ring":D()}],"text-shadow":[{"text-shadow":["none",x,ol,sl]}],"text-shadow-color":[{"text-shadow":D()}],opacity:[{opacity:[gt,We,Ge]}],"mix-blend":[{"mix-blend":[...Z(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Z()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[gt]}],"mask-image-linear-from-pos":[{"mask-linear-from":ee()}],"mask-image-linear-to-pos":[{"mask-linear-to":ee()}],"mask-image-linear-from-color":[{"mask-linear-from":D()}],"mask-image-linear-to-color":[{"mask-linear-to":D()}],"mask-image-t-from-pos":[{"mask-t-from":ee()}],"mask-image-t-to-pos":[{"mask-t-to":ee()}],"mask-image-t-from-color":[{"mask-t-from":D()}],"mask-image-t-to-color":[{"mask-t-to":D()}],"mask-image-r-from-pos":[{"mask-r-from":ee()}],"mask-image-r-to-pos":[{"mask-r-to":ee()}],"mask-image-r-from-color":[{"mask-r-from":D()}],"mask-image-r-to-color":[{"mask-r-to":D()}],"mask-image-b-from-pos":[{"mask-b-from":ee()}],"mask-image-b-to-pos":[{"mask-b-to":ee()}],"mask-image-b-from-color":[{"mask-b-from":D()}],"mask-image-b-to-color":[{"mask-b-to":D()}],"mask-image-l-from-pos":[{"mask-l-from":ee()}],"mask-image-l-to-pos":[{"mask-l-to":ee()}],"mask-image-l-from-color":[{"mask-l-from":D()}],"mask-image-l-to-color":[{"mask-l-to":D()}],"mask-image-x-from-pos":[{"mask-x-from":ee()}],"mask-image-x-to-pos":[{"mask-x-to":ee()}],"mask-image-x-from-color":[{"mask-x-from":D()}],"mask-image-x-to-color":[{"mask-x-to":D()}],"mask-image-y-from-pos":[{"mask-y-from":ee()}],"mask-image-y-to-pos":[{"mask-y-to":ee()}],"mask-image-y-from-color":[{"mask-y-from":D()}],"mask-image-y-to-color":[{"mask-y-to":D()}],"mask-image-radial":[{"mask-radial":[We,Ge]}],"mask-image-radial-from-pos":[{"mask-radial-from":ee()}],"mask-image-radial-to-pos":[{"mask-radial-to":ee()}],"mask-image-radial-from-color":[{"mask-radial-from":D()}],"mask-image-radial-to-color":[{"mask-radial-to":D()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[gt]}],"mask-image-conic-from-pos":[{"mask-conic-from":ee()}],"mask-image-conic-to-pos":[{"mask-conic-to":ee()}],"mask-image-conic-from-color":[{"mask-conic-from":D()}],"mask-image-conic-to-color":[{"mask-conic-to":D()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ue()}],"mask-repeat":[{mask:se()}],"mask-size":[{mask:I()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",We,Ge]}],filter:[{filter:["","none",We,Ge]}],blur:[{blur:_e()}],brightness:[{brightness:[gt,We,Ge]}],contrast:[{contrast:[gt,We,Ge]}],"drop-shadow":[{"drop-shadow":["","none",S,ol,sl]}],"drop-shadow-color":[{"drop-shadow":D()}],grayscale:[{grayscale:["",gt,We,Ge]}],"hue-rotate":[{"hue-rotate":[gt,We,Ge]}],invert:[{invert:["",gt,We,Ge]}],saturate:[{saturate:[gt,We,Ge]}],sepia:[{sepia:["",gt,We,Ge]}],"backdrop-filter":[{"backdrop-filter":["","none",We,Ge]}],"backdrop-blur":[{"backdrop-blur":_e()}],"backdrop-brightness":[{"backdrop-brightness":[gt,We,Ge]}],"backdrop-contrast":[{"backdrop-contrast":[gt,We,Ge]}],"backdrop-grayscale":[{"backdrop-grayscale":["",gt,We,Ge]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[gt,We,Ge]}],"backdrop-invert":[{"backdrop-invert":["",gt,We,Ge]}],"backdrop-opacity":[{"backdrop-opacity":[gt,We,Ge]}],"backdrop-saturate":[{"backdrop-saturate":[gt,We,Ge]}],"backdrop-sepia":[{"backdrop-sepia":["",gt,We,Ge]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":O()}],"border-spacing-x":[{"border-spacing-x":O()}],"border-spacing-y":[{"border-spacing-y":O()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",We,Ge]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[gt,"initial",We,Ge]}],ease:[{ease:["linear","initial",v,We,Ge]}],delay:[{delay:[gt,We,Ge]}],animate:[{animate:["none",F,We,Ge]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[A,We,Ge]}],"perspective-origin":[{"perspective-origin":V()}],rotate:[{rotate:De()}],"rotate-x":[{"rotate-x":De()}],"rotate-y":[{"rotate-y":De()}],"rotate-z":[{"rotate-z":De()}],scale:[{scale:Ue()}],"scale-x":[{"scale-x":Ue()}],"scale-y":[{"scale-y":Ue()}],"scale-z":[{"scale-z":Ue()}],"scale-3d":["scale-3d"],skew:[{skew:ht()}],"skew-x":[{"skew-x":ht()}],"skew-y":[{"skew-y":ht()}],transform:[{transform:[We,Ge,"","none","gpu","cpu"]}],"transform-origin":[{origin:V()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Gt()}],"translate-x":[{"translate-x":Gt()}],"translate-y":[{"translate-y":Gt()}],"translate-z":[{"translate-z":Gt()}],"translate-none":["translate-none"],accent:[{accent:D()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:D()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",We,Ge]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":O()}],"scroll-mx":[{"scroll-mx":O()}],"scroll-my":[{"scroll-my":O()}],"scroll-ms":[{"scroll-ms":O()}],"scroll-me":[{"scroll-me":O()}],"scroll-mt":[{"scroll-mt":O()}],"scroll-mr":[{"scroll-mr":O()}],"scroll-mb":[{"scroll-mb":O()}],"scroll-ml":[{"scroll-ml":O()}],"scroll-p":[{"scroll-p":O()}],"scroll-px":[{"scroll-px":O()}],"scroll-py":[{"scroll-py":O()}],"scroll-ps":[{"scroll-ps":O()}],"scroll-pe":[{"scroll-pe":O()}],"scroll-pt":[{"scroll-pt":O()}],"scroll-pr":[{"scroll-pr":O()}],"scroll-pb":[{"scroll-pb":O()}],"scroll-pl":[{"scroll-pl":O()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",We,Ge]}],fill:[{fill:["none",...D()]}],"stroke-w":[{stroke:[gt,Io,kr,Tc]}],stroke:[{stroke:["none",...D()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},l0=H_(a0);function ng(...s){return l0(Wm(s))}const u0=Xm("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}}),of=St.forwardRef(({className:s,variant:e,size:n,asChild:r=!1,...a},l)=>{const c=r?Hm:"button";return Ce.jsx(c,{ref:l,"data-slot":"button",className:ng(u0({variant:e,size:n,className:s})),...a})});function Bo({children:s,className:e="",intensity:n="medium",blur:r="md",border:a=!0,shadow:l=!0}){const c={light:"bg-white/10",medium:"bg-white/20",strong:"bg-white/30"},d={sm:"backdrop-blur-sm",md:"backdrop-blur-md",lg:"backdrop-blur-lg",xl:"backdrop-blur-xl"},m=a?"border border-white/20":"",p=l?"shadow-lg shadow-black/5":"";return Ce.jsx("div",{className:`
      ${c[n]}
      ${d[r]}
      ${m}
      ${p}
      rounded-xl
      ${e}
    `,children:s})}const c0=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"projects",label:"Projects"},{id:"contact",label:"Contact"}];function f0({activeSection:s,onSectionChange:e}){return Ce.jsx("header",{className:"fixed top-4 left-0 right-0 z-50 w-full px-6",children:Ce.jsx("div",{className:"mx-auto max-w-4xl",children:Ce.jsx(Bo,{intensity:"medium",blur:"lg",className:"px-6 py-4",children:Ce.jsxs("nav",{className:"flex items-center justify-between",children:[Ce.jsx("div",{className:"text-lg font-semibold text-white font-thin",children:"Tom Yan"}),Ce.jsx("div",{className:"hidden md:flex items-center space-x-1",children:c0.map(n=>Ce.jsx(of,{variant:s===n.id?"default":"ghost",size:"sm",onClick:()=>e(n.id),className:`px-4 py-2 text-sm font-thin transition-all duration-200 ${s===n.id?"bg-blue-600/80 text-white shadow-sm border border-blue-500/30":"text-gray-300 hover:text-white hover:bg-white/10"}`,children:n.label},n.id))}),Ce.jsx(of,{variant:"ghost",size:"sm",className:"md:hidden text-gray-300 font-thin",children:"Menu"})]})})})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qf="180",d0=0,jp=1,h0=2,ig=1,p0=2,Hi=3,Mr=0,Fn=1,Gi=2,yr=0,Vs=1,Yp=2,qp=3,$p=4,m0=5,Yr=100,g0=101,v0=102,_0=103,x0=104,y0=200,S0=201,M0=202,E0=203,af=204,lf=205,T0=206,w0=207,A0=208,R0=209,C0=210,b0=211,P0=212,D0=213,L0=214,uf=0,cf=1,ff=2,Gs=3,df=4,hf=5,pf=6,mf=7,rg=0,I0=1,U0=2,Sr=0,N0=1,F0=2,O0=3,k0=4,z0=5,B0=6,V0=7,sg=300,Ws=301,Xs=302,gf=303,vf=304,kl=306,_f=1e3,$r=1001,xf=1002,mi=1003,H0=1004,al=1005,Jt=1006,wc=1007,Kr=1008,wi=1009,og=1010,ag=1011,Ho=1012,Jf=1013,Qr=1014,Si=1015,Ks=1016,ed=1017,td=1018,Go=1020,lg=35902,ug=35899,cg=1021,fg=1022,Cn=1023,Wo=1026,Xo=1027,dg=1028,nd=1029,hg=1030,id=1031,rd=1033,Pl=33776,Dl=33777,Ll=33778,Il=33779,yf=35840,Sf=35841,Mf=35842,Ef=35843,Tf=36196,wf=37492,Af=37496,Rf=37808,Cf=37809,bf=37810,Pf=37811,Df=37812,Lf=37813,If=37814,Uf=37815,Nf=37816,Ff=37817,Of=37818,kf=37819,zf=37820,Bf=37821,Vf=36492,Hf=36494,Gf=36495,Wf=36283,Xf=36284,jf=36285,Yf=36286,G0=3200,W0=3201,X0=0,j0=1,xr="",ei="srgb",js="srgb-linear",Nl="linear",It="srgb",As=7680,Kp=519,Y0=512,q0=513,$0=514,pg=515,K0=516,Z0=517,Q0=518,J0=519,Zp=35044,Qp="300 es",Mi=2e3,Fl=2001;class Zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ac=Math.PI/180,qf=180/Math.PI;function Yo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[n&63|128]+Sn[n>>8&255]+"-"+Sn[n>>16&255]+Sn[n>>24&255]+Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]).toLowerCase()}function Mt(s,e,n){return Math.max(e,Math.min(n,s))}function ex(s,e){return(s%e+e)%e}function Rc(s,e,n){return(1-n)*s+n*e}function Uo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,n=0){yt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,c,d){let m=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];const x=l[c+0],S=l[c+1],T=l[c+2],A=l[c+3];if(d===0){e[n+0]=m,e[n+1]=p,e[n+2]=_,e[n+3]=g;return}if(d===1){e[n+0]=x,e[n+1]=S,e[n+2]=T,e[n+3]=A;return}if(g!==A||m!==x||p!==S||_!==T){let y=1-d;const v=m*x+p*S+_*T+g*A,F=v>=0?1:-1,U=1-v*v;if(U>Number.EPSILON){const V=Math.sqrt(U),z=Math.atan2(V,v*F);y=Math.sin(y*z)/V,d=Math.sin(d*z)/V}const b=d*F;if(m=m*y+x*b,p=p*y+S*b,_=_*y+T*b,g=g*y+A*b,y===1-d){const V=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=V,p*=V,_*=V,g*=V}}e[n]=m,e[n+1]=p,e[n+2]=_,e[n+3]=g}static multiplyQuaternionsFlat(e,n,r,a,l,c){const d=r[a],m=r[a+1],p=r[a+2],_=r[a+3],g=l[c],x=l[c+1],S=l[c+2],T=l[c+3];return e[n]=d*T+_*g+m*S-p*x,e[n+1]=m*T+_*x+p*g-d*S,e[n+2]=p*T+_*S+d*x-m*g,e[n+3]=_*T-d*g-m*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,c=e._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(a/2),g=d(l/2),x=m(r/2),S=m(a/2),T=m(l/2);switch(c){case"XYZ":this._x=x*_*g+p*S*T,this._y=p*S*g-x*_*T,this._z=p*_*T+x*S*g,this._w=p*_*g-x*S*T;break;case"YXZ":this._x=x*_*g+p*S*T,this._y=p*S*g-x*_*T,this._z=p*_*T-x*S*g,this._w=p*_*g+x*S*T;break;case"ZXY":this._x=x*_*g-p*S*T,this._y=p*S*g+x*_*T,this._z=p*_*T+x*S*g,this._w=p*_*g-x*S*T;break;case"ZYX":this._x=x*_*g-p*S*T,this._y=p*S*g+x*_*T,this._z=p*_*T-x*S*g,this._w=p*_*g+x*S*T;break;case"YZX":this._x=x*_*g+p*S*T,this._y=p*S*g+x*_*T,this._z=p*_*T-x*S*g,this._w=p*_*g-x*S*T;break;case"XZY":this._x=x*_*g-p*S*T,this._y=p*S*g-x*_*T,this._z=p*_*T+x*S*g,this._w=p*_*g+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],c=n[1],d=n[5],m=n[9],p=n[2],_=n[6],g=n[10],x=r+d+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-m)*S,this._y=(l-p)*S,this._z=(c-a)*S}else if(r>d&&r>g){const S=2*Math.sqrt(1+r-d-g);this._w=(_-m)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-r-g);this._w=(l-p)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+g-r-d);this._w=(c-a)/S,this._x=(l+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,c=e._w,d=n._x,m=n._y,p=n._z,_=n._w;return this._x=r*_+c*d+a*p-l*m,this._y=a*_+c*m+l*d-r*p,this._z=l*_+c*p+r*m-a*d,this._w=c*_-r*d-a*m-l*p,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,c=this._w;let d=c*e._w+r*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const m=1-d*d;if(m<=Number.EPSILON){const S=1-n;return this._w=S*c+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),g=Math.sin((1-n)*_)/p,x=Math.sin(n*_)/p;return this._w=c*g+this._w*x,this._x=r*g+this._x*x,this._y=a*g+this._y*x,this._z=l*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,n=0,r=0){oe.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Jp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Jp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,c=e.y,d=e.z,m=e.w,p=2*(c*a-d*r),_=2*(d*n-l*a),g=2*(l*r-c*n);return this.x=n+m*p+c*g-d*_,this.y=r+m*_+d*p-l*g,this.z=a+m*g+l*_-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,c=n.x,d=n.y,m=n.z;return this.x=a*m-l*d,this.y=l*c-r*m,this.z=r*d-a*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cc=new oe,Jp=new qo;class pt{constructor(e,n,r,a,l,c,d,m,p){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,d,m,p)}set(e,n,r,a,l,c,d,m,p){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=n,_[4]=l,_[5]=m,_[6]=r,_[7]=c,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],d=r[3],m=r[6],p=r[1],_=r[4],g=r[7],x=r[2],S=r[5],T=r[8],A=a[0],y=a[3],v=a[6],F=a[1],U=a[4],b=a[7],V=a[2],z=a[5],k=a[8];return l[0]=c*A+d*F+m*V,l[3]=c*y+d*U+m*z,l[6]=c*v+d*b+m*k,l[1]=p*A+_*F+g*V,l[4]=p*y+_*U+g*z,l[7]=p*v+_*b+g*k,l[2]=x*A+S*F+T*V,l[5]=x*y+S*U+T*z,l[8]=x*v+S*b+T*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return n*c*_-n*d*p-r*l*_+r*d*m+a*l*p-a*c*m}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=_*c-d*p,x=d*m-_*l,S=p*l-c*m,T=n*g+r*x+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=g*A,e[1]=(a*p-_*r)*A,e[2]=(d*r-a*c)*A,e[3]=x*A,e[4]=(_*n-a*m)*A,e[5]=(a*l-d*n)*A,e[6]=S*A,e[7]=(r*m-p*n)*A,e[8]=(c*n-r*l)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,c,d){const m=Math.cos(l),p=Math.sin(l);return this.set(r*m,r*p,-r*(m*c+p*d)+c+e,-a*p,a*m,-a*(-p*c+m*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(bc.makeScale(e,n)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,n){return this.premultiply(bc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bc=new pt;function mg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ol(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function tx(){const s=Ol("canvas");return s.style.display="block",s}const em={};function jo(s){s in em||(em[s]=!0,console.warn(s))}function nx(s,e,n){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}const tm=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nm=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ix(){const s={enabled:!0,workingColorSpace:js,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===It&&(a.r=Wi(a.r),a.g=Wi(a.g),a.b=Wi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===It&&(a.r=Hs(a.r),a.g=Hs(a.g),a.b=Hs(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===xr?Nl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return jo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return jo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[js]:{primaries:e,whitePoint:r,transfer:Nl,toXYZ:tm,fromXYZ:nm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:It,toXYZ:tm,fromXYZ:nm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),s}const Rt=ix();function Wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Rs;class rx{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Rs===void 0&&(Rs=Ol("canvas")),Rs.width=e.width,Rs.height=e.height;const a=Rs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Rs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ol("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Wi(l[c]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Wi(n[r]/255)*255):n[r]=Wi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sx=0;class sd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Yo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?l.push(Pc(a[c].image)):l.push(Pc(a[c]))}else l=Pc(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function Pc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ox=0;const Dc=new oe;class On extends Zs{constructor(e=On.DEFAULT_IMAGE,n=On.DEFAULT_MAPPING,r=$r,a=$r,l=Jt,c=Kr,d=Cn,m=wi,p=On.DEFAULT_ANISOTROPY,_=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Yo(),this.name="",this.source=new sd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dc).x}get height(){return this.source.getSize(Dc).y}get depth(){return this.source.getSize(Dc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _f:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case xf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _f:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case xf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=sg;On.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,n=0,r=0,a=1){Kt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*n+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*n+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*n+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const m=e.elements,p=m[0],_=m[4],g=m[8],x=m[1],S=m[5],T=m[9],A=m[2],y=m[6],v=m[10];if(Math.abs(_-x)<.01&&Math.abs(g-A)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+A)<.1&&Math.abs(T+y)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,b=(S+1)/2,V=(v+1)/2,z=(_+x)/4,k=(g+A)/4,O=(T+y)/4;return U>b&&U>V?U<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(U),a=z/r,l=k/r):b>V?b<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),r=z/a,l=O/a):V<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(V),r=k/l,a=O/l),this.set(r,a,l,n),this}let F=Math.sqrt((y-T)*(y-T)+(g-A)*(g-A)+(x-_)*(x-_));return Math.abs(F)<.001&&(F=1),this.x=(y-T)/F,this.y=(g-A)/F,this.z=(x-_)/F,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this.w=Mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this.w=Mt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ax extends Zs{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Kt(0,0,e,n),this.scissorTest=!1,this.viewport=new Kt(0,0,e,n);const a={width:e,height:n,depth:r.depth},l=new On(a);this.textures=[];const c=r.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new sd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends ax{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class gg extends On{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=mi,this.minFilter=mi,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lx extends On{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=mi,this.minFilter=mi,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $o{constructor(e=new oe(1/0,1/0,1/0),n=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ci.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ci.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ci.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,ci):ci.fromBufferAttribute(l,c),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ll.copy(r.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),ul.subVectors(this.max,No),Cs.subVectors(e.a,No),bs.subVectors(e.b,No),Ps.subVectors(e.c,No),hr.subVectors(bs,Cs),pr.subVectors(Ps,bs),zr.subVectors(Cs,Ps);let n=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-zr.z,zr.y,hr.z,0,-hr.x,pr.z,0,-pr.x,zr.z,0,-zr.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-zr.y,zr.x,0];return!Lc(n,Cs,bs,Ps,ul)||(n=[1,0,0,0,1,0,0,0,1],!Lc(n,Cs,bs,Ps,ul))?!1:(cl.crossVectors(hr,pr),n=[cl.x,cl.y,cl.z],Lc(n,Cs,bs,Ps,ul))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oi=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],ci=new oe,ll=new $o,Cs=new oe,bs=new oe,Ps=new oe,hr=new oe,pr=new oe,zr=new oe,No=new oe,ul=new oe,cl=new oe,Br=new oe;function Lc(s,e,n,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){Br.fromArray(s,l);const d=a.x*Math.abs(Br.x)+a.y*Math.abs(Br.y)+a.z*Math.abs(Br.z),m=e.dot(Br),p=n.dot(Br),_=r.dot(Br);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const ux=new $o,Fo=new oe,Ic=new oe;class od{constructor(e=new oe,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):ux.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const n=Fo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Fo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(Ic)),this.expandByPoint(Fo.copy(e.center).sub(Ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ki=new oe,Uc=new oe,fl=new oe,mr=new oe,Nc=new oe,dl=new oe,Fc=new oe;class cx{constructor(e=new oe,n=new oe(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Uc.copy(e).add(n).multiplyScalar(.5),fl.copy(n).sub(e).normalize(),mr.copy(this.origin).sub(Uc);const l=e.distanceTo(n)*.5,c=-this.direction.dot(fl),d=mr.dot(this.direction),m=-mr.dot(fl),p=mr.lengthSq(),_=Math.abs(1-c*c);let g,x,S,T;if(_>0)if(g=c*m-d,x=c*d-m,T=l*_,g>=0)if(x>=-T)if(x<=T){const A=1/_;g*=A,x*=A,S=g*(g+c*x+2*d)+x*(c*g+x+2*m)+p}else x=l,g=Math.max(0,-(c*x+d)),S=-g*g+x*(x+2*m)+p;else x=-l,g=Math.max(0,-(c*x+d)),S=-g*g+x*(x+2*m)+p;else x<=-T?(g=Math.max(0,-(-c*l+d)),x=g>0?-l:Math.min(Math.max(-l,-m),l),S=-g*g+x*(x+2*m)+p):x<=T?(g=0,x=Math.min(Math.max(-l,-m),l),S=x*(x+2*m)+p):(g=Math.max(0,-(c*l+d)),x=g>0?l:Math.min(Math.max(-l,-m),l),S=-g*g+x*(x+2*m)+p);else x=c>0?-l:l,g=Math.max(0,-(c*x+d)),S=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Uc).addScaledVector(fl,x),S}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),a=ki.dot(ki)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),d=r-c,m=r+c;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,c,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,a=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,a=(e.min.x-x.x)*p),_>=0?(l=(e.min.y-x.y)*_,c=(e.max.y-x.y)*_):(l=(e.max.y-x.y)*_,c=(e.min.y-x.y)*_),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),g>=0?(d=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),r>m||d>a)||((d>r||r!==r)&&(r=d),(m<a||a!==a)&&(a=m),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,r,a,l){Nc.subVectors(n,e),dl.subVectors(r,e),Fc.crossVectors(Nc,dl);let c=this.direction.dot(Fc),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;mr.subVectors(this.origin,e);const m=d*this.direction.dot(dl.crossVectors(mr,dl));if(m<0)return null;const p=d*this.direction.dot(Nc.cross(mr));if(p<0||m+p>c)return null;const _=-d*mr.dot(Fc);return _<0?null:this.at(_/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,n,r,a,l,c,d,m,p,_,g,x,S,T,A,y){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,d,m,p,_,g,x,S,T,A,y)}set(e,n,r,a,l,c,d,m,p,_,g,x,S,T,A,y){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=a,v[1]=l,v[5]=c,v[9]=d,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=x,v[3]=S,v[7]=T,v[11]=A,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ds.setFromMatrixColumn(e,0).length(),l=1/Ds.setFromMatrixColumn(e,1).length(),c=1/Ds.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),m=Math.cos(a),p=Math.sin(a),_=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const x=c*_,S=c*g,T=d*_,A=d*g;n[0]=m*_,n[4]=-m*g,n[8]=p,n[1]=S+T*p,n[5]=x-A*p,n[9]=-d*m,n[2]=A-x*p,n[6]=T+S*p,n[10]=c*m}else if(e.order==="YXZ"){const x=m*_,S=m*g,T=p*_,A=p*g;n[0]=x+A*d,n[4]=T*d-S,n[8]=c*p,n[1]=c*g,n[5]=c*_,n[9]=-d,n[2]=S*d-T,n[6]=A+x*d,n[10]=c*m}else if(e.order==="ZXY"){const x=m*_,S=m*g,T=p*_,A=p*g;n[0]=x-A*d,n[4]=-c*g,n[8]=T+S*d,n[1]=S+T*d,n[5]=c*_,n[9]=A-x*d,n[2]=-c*p,n[6]=d,n[10]=c*m}else if(e.order==="ZYX"){const x=c*_,S=c*g,T=d*_,A=d*g;n[0]=m*_,n[4]=T*p-S,n[8]=x*p+A,n[1]=m*g,n[5]=A*p+x,n[9]=S*p-T,n[2]=-p,n[6]=d*m,n[10]=c*m}else if(e.order==="YZX"){const x=c*m,S=c*p,T=d*m,A=d*p;n[0]=m*_,n[4]=A-x*g,n[8]=T*g+S,n[1]=g,n[5]=c*_,n[9]=-d*_,n[2]=-p*_,n[6]=S*g+T,n[10]=x-A*g}else if(e.order==="XZY"){const x=c*m,S=c*p,T=d*m,A=d*p;n[0]=m*_,n[4]=-g,n[8]=p*_,n[1]=x*g+A,n[5]=c*_,n[9]=S*g-T,n[2]=T*g-S,n[6]=d*_,n[10]=A*g+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fx,e,dx)}lookAt(e,n,r){const a=this.elements;return Gn.subVectors(e,n),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),gr.crossVectors(r,Gn),gr.lengthSq()===0&&(Math.abs(r.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),gr.crossVectors(r,Gn)),gr.normalize(),hl.crossVectors(Gn,gr),a[0]=gr.x,a[4]=hl.x,a[8]=Gn.x,a[1]=gr.y,a[5]=hl.y,a[9]=Gn.y,a[2]=gr.z,a[6]=hl.z,a[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],d=r[4],m=r[8],p=r[12],_=r[1],g=r[5],x=r[9],S=r[13],T=r[2],A=r[6],y=r[10],v=r[14],F=r[3],U=r[7],b=r[11],V=r[15],z=a[0],k=a[4],O=a[8],C=a[12],R=a[1],H=a[5],K=a[9],te=a[13],de=a[2],ae=a[6],re=a[10],le=a[14],D=a[3],ue=a[7],se=a[11],I=a[15];return l[0]=c*z+d*R+m*de+p*D,l[4]=c*k+d*H+m*ae+p*ue,l[8]=c*O+d*K+m*re+p*se,l[12]=c*C+d*te+m*le+p*I,l[1]=_*z+g*R+x*de+S*D,l[5]=_*k+g*H+x*ae+S*ue,l[9]=_*O+g*K+x*re+S*se,l[13]=_*C+g*te+x*le+S*I,l[2]=T*z+A*R+y*de+v*D,l[6]=T*k+A*H+y*ae+v*ue,l[10]=T*O+A*K+y*re+v*se,l[14]=T*C+A*te+y*le+v*I,l[3]=F*z+U*R+b*de+V*D,l[7]=F*k+U*H+b*ae+V*ue,l[11]=F*O+U*K+b*re+V*se,l[15]=F*C+U*te+b*le+V*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],c=e[1],d=e[5],m=e[9],p=e[13],_=e[2],g=e[6],x=e[10],S=e[14],T=e[3],A=e[7],y=e[11],v=e[15];return T*(+l*m*g-a*p*g-l*d*x+r*p*x+a*d*S-r*m*S)+A*(+n*m*S-n*p*x+l*c*x-a*c*S+a*p*_-l*m*_)+y*(+n*p*g-n*d*S-l*c*g+r*c*S+l*d*_-r*p*_)+v*(-a*d*_-n*m*g+n*d*x+a*c*g-r*c*x+r*m*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=e[9],x=e[10],S=e[11],T=e[12],A=e[13],y=e[14],v=e[15],F=g*y*p-A*x*p+A*m*S-d*y*S-g*m*v+d*x*v,U=T*x*p-_*y*p-T*m*S+c*y*S+_*m*v-c*x*v,b=_*A*p-T*g*p+T*d*S-c*A*S-_*d*v+c*g*v,V=T*g*m-_*A*m-T*d*x+c*A*x+_*d*y-c*g*y,z=n*F+r*U+a*b+l*V;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/z;return e[0]=F*k,e[1]=(A*x*l-g*y*l-A*a*S+r*y*S+g*a*v-r*x*v)*k,e[2]=(d*y*l-A*m*l+A*a*p-r*y*p-d*a*v+r*m*v)*k,e[3]=(g*m*l-d*x*l-g*a*p+r*x*p+d*a*S-r*m*S)*k,e[4]=U*k,e[5]=(_*y*l-T*x*l+T*a*S-n*y*S-_*a*v+n*x*v)*k,e[6]=(T*m*l-c*y*l-T*a*p+n*y*p+c*a*v-n*m*v)*k,e[7]=(c*x*l-_*m*l+_*a*p-n*x*p-c*a*S+n*m*S)*k,e[8]=b*k,e[9]=(T*g*l-_*A*l-T*r*S+n*A*S+_*r*v-n*g*v)*k,e[10]=(c*A*l-T*d*l+T*r*p-n*A*p-c*r*v+n*d*v)*k,e[11]=(_*d*l-c*g*l-_*r*p+n*g*p+c*r*S-n*d*S)*k,e[12]=V*k,e[13]=(_*A*a-T*g*a+T*r*x-n*A*x-_*r*y+n*g*y)*k,e[14]=(T*d*a-c*A*a-T*r*m+n*A*m+c*r*y-n*d*y)*k,e[15]=(c*g*a-_*d*a+_*r*m-n*g*m-c*r*x+n*d*x)*k,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,c=e.x,d=e.y,m=e.z,p=l*c,_=l*d;return this.set(p*c+r,p*d-a*m,p*m+a*d,0,p*d+a*m,_*d+r,_*m-a*c,0,p*m-a*d,_*m+a*c,l*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,c=n._y,d=n._z,m=n._w,p=l+l,_=c+c,g=d+d,x=l*p,S=l*_,T=l*g,A=c*_,y=c*g,v=d*g,F=m*p,U=m*_,b=m*g,V=r.x,z=r.y,k=r.z;return a[0]=(1-(A+v))*V,a[1]=(S+b)*V,a[2]=(T-U)*V,a[3]=0,a[4]=(S-b)*z,a[5]=(1-(x+v))*z,a[6]=(y+F)*z,a[7]=0,a[8]=(T+U)*k,a[9]=(y-F)*k,a[10]=(1-(x+A))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=Ds.set(a[0],a[1],a[2]).length();const c=Ds.set(a[4],a[5],a[6]).length(),d=Ds.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],fi.copy(this);const p=1/l,_=1/c,g=1/d;return fi.elements[0]*=p,fi.elements[1]*=p,fi.elements[2]*=p,fi.elements[4]*=_,fi.elements[5]*=_,fi.elements[6]*=_,fi.elements[8]*=g,fi.elements[9]*=g,fi.elements[10]*=g,n.setFromRotationMatrix(fi),r.x=l,r.y=c,r.z=d,this}makePerspective(e,n,r,a,l,c,d=Mi,m=!1){const p=this.elements,_=2*l/(n-e),g=2*l/(r-a),x=(n+e)/(n-e),S=(r+a)/(r-a);let T,A;if(m)T=l/(c-l),A=c*l/(c-l);else if(d===Mi)T=-(c+l)/(c-l),A=-2*c*l/(c-l);else if(d===Fl)T=-c/(c-l),A=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,l,c,d=Mi,m=!1){const p=this.elements,_=2/(n-e),g=2/(r-a),x=-(n+e)/(n-e),S=-(r+a)/(r-a);let T,A;if(m)T=1/(c-l),A=c/(c-l);else if(d===Mi)T=-2/(c-l),A=-(c+l)/(c-l);else if(d===Fl)T=-1/(c-l),A=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ds=new oe,fi=new sn,fx=new oe(0,0,0),dx=new oe(1,1,1),gr=new oe,hl=new oe,Gn=new oe,im=new sn,rm=new qo;class Xi{constructor(e=0,n=0,r=0,a=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],d=a[8],m=a[1],p=a[5],_=a[9],g=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return im.makeRotationFromQuaternion(e),this.setFromRotationMatrix(im,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return rm.setFromEuler(this),this.setFromQuaternion(rm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class vg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hx=0;const sm=new oe,Ls=new qo,zi=new sn,pl=new oe,Oo=new oe,px=new oe,mx=new qo,om=new oe(1,0,0),am=new oe(0,1,0),lm=new oe(0,0,1),um={type:"added"},gx={type:"removed"},Is={type:"childadded",child:null},Oc={type:"childremoved",child:null};class Xn extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new oe,n=new Xi,r=new qo,a=new oe(1,1,1);function l(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new sn},normalMatrix:{value:new pt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(om,e)}rotateY(e){return this.rotateOnAxis(am,e)}rotateZ(e){return this.rotateOnAxis(lm,e)}translateOnAxis(e,n){return sm.copy(e).applyQuaternion(this.quaternion),this.position.add(sm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(om,e)}translateY(e){return this.translateOnAxis(am,e)}translateZ(e){return this.translateOnAxis(lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?pl.copy(e):pl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Oo,pl,this.up):zi.lookAt(pl,Oo,this.up),this.quaternion.setFromRotationMatrix(zi),a&&(zi.extractRotation(a.matrixWorld),Ls.setFromRotationMatrix(zi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(um),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gx),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(um),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,px),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,mx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];l(e.shapes,g)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(l(e.materials,this.material[m]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];a.animations.push(l(e.animations,m))}}if(n){const d=c(e.geometries),m=c(e.materials),p=c(e.textures),_=c(e.images),g=c(e.shapes),x=c(e.skeletons),S=c(e.animations),T=c(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function c(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Xn.DEFAULT_UP=new oe(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new oe,Bi=new oe,kc=new oe,Vi=new oe,Us=new oe,Ns=new oe,cm=new oe,zc=new oe,Bc=new oe,Vc=new oe,Hc=new Kt,Gc=new Kt,Wc=new Kt;class pi{constructor(e=new oe,n=new oe,r=new oe){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),di.subVectors(e,n),a.cross(di);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){di.subVectors(a,n),Bi.subVectors(r,n),kc.subVectors(e,n);const c=di.dot(di),d=di.dot(Bi),m=di.dot(kc),p=Bi.dot(Bi),_=Bi.dot(kc),g=c*p-d*d;if(g===0)return l.set(0,0,0),null;const x=1/g,S=(p*m-d*_)*x,T=(c*_-d*m)*x;return l.set(1-S-T,T,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,n,r,a,l,c,d,m){return this.getBarycoord(e,n,r,a,Vi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,Vi.x),m.addScaledVector(c,Vi.y),m.addScaledVector(d,Vi.z),m)}static getInterpolatedAttribute(e,n,r,a,l,c){return Hc.setScalar(0),Gc.setScalar(0),Wc.setScalar(0),Hc.fromBufferAttribute(e,n),Gc.fromBufferAttribute(e,r),Wc.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Hc,l.x),c.addScaledVector(Gc,l.y),c.addScaledVector(Wc,l.z),c}static isFrontFacing(e,n,r,a){return di.subVectors(r,n),Bi.subVectors(e,n),di.cross(Bi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),di.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return pi.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let c,d;Us.subVectors(a,r),Ns.subVectors(l,r),zc.subVectors(e,r);const m=Us.dot(zc),p=Ns.dot(zc);if(m<=0&&p<=0)return n.copy(r);Bc.subVectors(e,a);const _=Us.dot(Bc),g=Ns.dot(Bc);if(_>=0&&g<=_)return n.copy(a);const x=m*g-_*p;if(x<=0&&m>=0&&_<=0)return c=m/(m-_),n.copy(r).addScaledVector(Us,c);Vc.subVectors(e,l);const S=Us.dot(Vc),T=Ns.dot(Vc);if(T>=0&&S<=T)return n.copy(l);const A=S*p-m*T;if(A<=0&&p>=0&&T<=0)return d=p/(p-T),n.copy(r).addScaledVector(Ns,d);const y=_*T-S*g;if(y<=0&&g-_>=0&&S-T>=0)return cm.subVectors(l,a),d=(g-_)/(g-_+(S-T)),n.copy(a).addScaledVector(cm,d);const v=1/(y+A+x);return c=A*v,d=x*v,n.copy(r).addScaledVector(Us,c).addScaledVector(Ns,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _g={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},ml={h:0,s:0,l:0};function Xc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Ut{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,a=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Rt.colorSpaceToWorking(this,a),this}setHSL(e,n,r,a=Rt.workingColorSpace){if(e=ex(e,1),n=Mt(n,0,1),r=Mt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,c=2*r-l;this.r=Xc(c,l,e+1/3),this.g=Xc(c,l,e),this.b=Xc(c,l,e-1/3)}return Rt.colorSpaceToWorking(this,a),this}setStyle(e,n=ei){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ei){const r=_g[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Rt.workingToColorSpace(Mn.copy(this),e),Math.round(Mt(Mn.r*255,0,255))*65536+Math.round(Mt(Mn.g*255,0,255))*256+Math.round(Mt(Mn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.workingToColorSpace(Mn.copy(this),n);const r=Mn.r,a=Mn.g,l=Mn.b,c=Math.max(r,a,l),d=Math.min(r,a,l);let m,p;const _=(d+c)/2;if(d===c)m=0,p=0;else{const g=c-d;switch(p=_<=.5?g/(c+d):g/(2-c-d),c){case r:m=(a-l)/g+(a<l?6:0);break;case a:m=(l-r)/g+2;break;case l:m=(r-a)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,n=Rt.workingColorSpace){return Rt.workingToColorSpace(Mn.copy(this),n),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=ei){Rt.workingToColorSpace(Mn.copy(this),e);const n=Mn.r,r=Mn.g,a=Mn.b;return e!==ei?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+n,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(vr),e.getHSL(ml);const r=Rc(vr.h,ml.h,n),a=Rc(vr.s,ml.s,n),l=Rc(vr.l,ml.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Ut;Ut.NAMES=_g;let vx=0;class zl extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=Vs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=af,this.blendDst=lf,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==Mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==af&&(r.blendSrc=this.blendSrc),this.blendDst!==lf&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const d in l){const m=l[d];delete m.metadata,c.push(m)}return c}if(n){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xg extends zl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=rg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new oe,gl=new yt;let _x=0;class Ti{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_x++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Zp,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)gl.fromBufferAttribute(this,n),gl.applyMatrix3(e),this.setXY(n,gl.x,gl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix3(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Uo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Nn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Uo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Uo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Uo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Uo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array),a=Nn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array),a=Nn(a,this.array),l=Nn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zp&&(e.usage=this.usage),e}}class yg extends Ti{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Sg extends Ti{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Zr extends Ti{constructor(e,n,r){super(new Float32Array(e),n,r)}}let xx=0;const Jn=new sn,jc=new Xn,Fs=new oe,Wn=new $o,ko=new $o,fn=new oe;class Jr extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mg(e)?Sg:yg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new pt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,n,r){return Jn.makeTranslation(e,n,r),this.applyMatrix4(Jn),this}scale(e,n,r){return Jn.makeScale(e,n,r),this.applyMatrix4(Jn),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Zr(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $o);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];Wn.setFromBufferAttribute(l),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new od);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const d=n[l];ko.setFromBufferAttribute(d),this.morphTargetsRelative?(fn.addVectors(Wn.min,ko.min),Wn.expandByPoint(fn),fn.addVectors(Wn.max,ko.max),Wn.expandByPoint(fn)):(Wn.expandByPoint(ko.min),Wn.expandByPoint(ko.max))}Wn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)fn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(fn));if(n)for(let l=0,c=n.length;l<c;l++){const d=n[l],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)fn.fromBufferAttribute(d,p),m&&(Fs.fromBufferAttribute(e,p),fn.add(Fs)),a=Math.max(a,r.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],m=[];for(let O=0;O<r.count;O++)d[O]=new oe,m[O]=new oe;const p=new oe,_=new oe,g=new oe,x=new yt,S=new yt,T=new yt,A=new oe,y=new oe;function v(O,C,R){p.fromBufferAttribute(r,O),_.fromBufferAttribute(r,C),g.fromBufferAttribute(r,R),x.fromBufferAttribute(l,O),S.fromBufferAttribute(l,C),T.fromBufferAttribute(l,R),_.sub(p),g.sub(p),S.sub(x),T.sub(x);const H=1/(S.x*T.y-T.x*S.y);isFinite(H)&&(A.copy(_).multiplyScalar(T.y).addScaledVector(g,-S.y).multiplyScalar(H),y.copy(g).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(H),d[O].add(A),d[C].add(A),d[R].add(A),m[O].add(y),m[C].add(y),m[R].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let O=0,C=F.length;O<C;++O){const R=F[O],H=R.start,K=R.count;for(let te=H,de=H+K;te<de;te+=3)v(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const U=new oe,b=new oe,V=new oe,z=new oe;function k(O){V.fromBufferAttribute(a,O),z.copy(V);const C=d[O];U.copy(C),U.sub(V.multiplyScalar(V.dot(C))).normalize(),b.crossVectors(z,C);const H=b.dot(m[O])<0?-1:1;c.setXYZW(O,U.x,U.y,U.z,H)}for(let O=0,C=F.length;O<C;++O){const R=F[O],H=R.start,K=R.count;for(let te=H,de=H+K;te<de;te+=3)k(e.getX(te+0)),k(e.getX(te+1)),k(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ti(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new oe,l=new oe,c=new oe,d=new oe,m=new oe,p=new oe,_=new oe,g=new oe;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),A=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,T),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,y),_.subVectors(c,l),g.subVectors(a,l),_.cross(g),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,y),d.add(_),m.add(_),p.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),l.fromBufferAttribute(n,x+1),c.fromBufferAttribute(n,x+2),_.subVectors(c,l),g.subVectors(a,l),_.cross(g),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)fn.fromBufferAttribute(e,n),fn.normalize(),e.setXYZ(n,fn.x,fn.y,fn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,g=d.normalized,x=new p.constructor(m.length*_);let S=0,T=0;for(let A=0,y=m.length;A<y;A++){d.isInterleavedBufferAttribute?S=m[A]*d.data.stride+d.offset:S=m[A]*_;for(let v=0;v<_;v++)x[T++]=p[S++]}return new Ti(x,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jr,r=this.index.array,a=this.attributes;for(const d in a){const m=a[d],p=e(m,r);n.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const m=[],p=l[d];for(let _=0,g=p.length;_<g;_++){const x=p[_],S=e(x,r);m.push(S)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,m=c.length;d<m;d++){const p=c[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const a={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,x=p.length;g<x;g++){const S=p[g];_.push(S.toJSON(e.data))}_.length>0&&(a[m]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const _=a[p];this.setAttribute(p,_.clone(n))}const l=e.morphAttributes;for(const p in l){const _=[],g=l[p];for(let x=0,S=g.length;x<S;x++)_.push(g[x].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,_=c.length;p<_;p++){const g=c[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fm=new sn,Vr=new cx,vl=new od,dm=new oe,_l=new oe,xl=new oe,yl=new oe,Yc=new oe,Sl=new oe,hm=new oe,Ml=new oe;class Ei extends Xn{constructor(e=new Jr,n=new xg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){Sl.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const _=d[m],g=l[m];_!==0&&(Yc.fromBufferAttribute(g,e),c?Sl.addScaledVector(Yc,_):Sl.addScaledVector(Yc.sub(n),_))}n.add(Sl)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),vl.copy(r.boundingSphere),vl.applyMatrix4(l),Vr.copy(e.ray).recast(e.near),!(vl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(vl,dm)===null||Vr.origin.distanceToSquared(dm)>(e.far-e.near)**2))&&(fm.copy(l).invert(),Vr.copy(e.ray).applyMatrix4(fm),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Vr)))}_computeIntersections(e,n,r){let a;const l=this.geometry,c=this.material,d=l.index,m=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,x=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(c))for(let T=0,A=x.length;T<A;T++){const y=x[T],v=c[y.materialIndex],F=Math.max(y.start,S.start),U=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let b=F,V=U;b<V;b+=3){const z=d.getX(b),k=d.getX(b+1),O=d.getX(b+2);a=El(this,v,e,r,p,_,g,z,k,O),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let y=T,v=A;y<v;y+=3){const F=d.getX(y),U=d.getX(y+1),b=d.getX(y+2);a=El(this,c,e,r,p,_,g,F,U,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(m!==void 0)if(Array.isArray(c))for(let T=0,A=x.length;T<A;T++){const y=x[T],v=c[y.materialIndex],F=Math.max(y.start,S.start),U=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let b=F,V=U;b<V;b+=3){const z=b,k=b+1,O=b+2;a=El(this,v,e,r,p,_,g,z,k,O),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let y=T,v=A;y<v;y+=3){const F=y,U=y+1,b=y+2;a=El(this,c,e,r,p,_,g,F,U,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function yx(s,e,n,r,a,l,c,d){let m;if(e.side===Fn?m=r.intersectTriangle(c,l,a,!0,d):m=r.intersectTriangle(a,l,c,e.side===Mr,d),m===null)return null;Ml.copy(d),Ml.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(Ml);return p<n.near||p>n.far?null:{distance:p,point:Ml.clone(),object:s}}function El(s,e,n,r,a,l,c,d,m,p){s.getVertexPosition(d,_l),s.getVertexPosition(m,xl),s.getVertexPosition(p,yl);const _=yx(s,e,n,r,_l,xl,yl,hm);if(_){const g=new oe;pi.getBarycoord(hm,_l,xl,yl,g),a&&(_.uv=pi.getInterpolatedAttribute(a,d,m,p,g,new yt)),l&&(_.uv1=pi.getInterpolatedAttribute(l,d,m,p,g,new yt)),c&&(_.normal=pi.getInterpolatedAttribute(c,d,m,p,g,new oe),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new oe,materialIndex:0};pi.getNormal(_l,xl,yl,x.normal),_.face=x,_.barycoord=g}return _}class Ko extends Jr{constructor(e=1,n=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const d=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const m=[],p=[],_=[],g=[];let x=0,S=0;T("z","y","x",-1,-1,r,n,e,c,l,0),T("z","y","x",1,-1,r,n,-e,c,l,1),T("x","z","y",1,1,e,r,n,a,c,2),T("x","z","y",1,-1,e,r,-n,a,c,3),T("x","y","z",1,-1,e,n,r,a,l,4),T("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(m),this.setAttribute("position",new Zr(p,3)),this.setAttribute("normal",new Zr(_,3)),this.setAttribute("uv",new Zr(g,2));function T(A,y,v,F,U,b,V,z,k,O,C){const R=b/k,H=V/O,K=b/2,te=V/2,de=z/2,ae=k+1,re=O+1;let le=0,D=0;const ue=new oe;for(let se=0;se<re;se++){const I=se*H-te;for(let Q=0;Q<ae;Q++){const Ae=Q*R-K;ue[A]=Ae*F,ue[y]=I*U,ue[v]=de,p.push(ue.x,ue.y,ue.z),ue[A]=0,ue[y]=0,ue[v]=z>0?1:-1,_.push(ue.x,ue.y,ue.z),g.push(Q/k),g.push(1-se/O),le+=1}}for(let se=0;se<O;se++)for(let I=0;I<k;I++){const Q=x+I+ae*se,Ae=x+I+ae*(se+1),Re=x+(I+1)+ae*(se+1),Ie=x+(I+1)+ae*se;m.push(Q,Ae,Ie),m.push(Ae,Re,Ie),D+=6}d.addGroup(S,D,C),S+=D,x+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Rn(s){const e={};for(let n=0;n<s.length;n++){const r=Ys(s[n]);for(const a in r)e[a]=r[a]}return e}function Sx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Mg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Mx={clone:Ys,merge:Rn};var Ex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends zl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ex,this.fragmentShader=Tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=Sx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?n.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[a]={type:"m4",value:c.toArray()}:n.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Eg extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new oe,pm=new yt,mm=new yt;class hi extends Eg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qf*2*Math.atan(Math.tan(Ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,pm,mm),n.subVectors(mm,pm)}setViewOffset(e,n,r,a,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ac*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const m=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/m,n-=c.offsetY*r/p,a*=c.width/m,r*=c.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Os=-90,ks=1;class wx extends Xn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new hi(Os,ks,e,n);a.layers=this.layers,this.add(a);const l=new hi(Os,ks,e,n);l.layers=this.layers,this.add(l);const c=new hi(Os,ks,e,n);c.layers=this.layers,this.add(c);const d=new hi(Os,ks,e,n);d.layers=this.layers,this.add(d);const m=new hi(Os,ks,e,n);m.layers=this.layers,this.add(m);const p=new hi(Os,ks,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,c,d,m]=n;for(const p of n)this.remove(p);if(e===Mi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Fl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,m,p,_]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,c),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,m),e.setRenderTarget(r,4,a),e.render(n,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(g,x,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Tg extends On{constructor(e=[],n=Ws,r,a,l,c,d,m,p,_){super(e,n,r,a,l,c,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ax extends ti{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Tg(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Ko(5,5,5),l=new ni({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:yr});l.uniforms.tEquirect.value=n;const c=new Ei(a,l),d=n.minFilter;return n.minFilter===Kr&&(n.minFilter=Jt),new wx(1,10,this).update(e,c),n.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,a);e.setRenderTarget(l)}}class Tl extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rx={type:"move"};class qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,c=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const A of e.hand.values()){const y=n.getJointPose(A,r),v=this._getHandJoint(p,A);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),S=.02,T=.005;p.inputState.pinching&&x>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Rx)))}return d!==null&&(d.visible=a!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Tl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class Cx extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const $c=new oe,bx=new oe,Px=new pt;class Xr{constructor(e=new oe(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=$c.subVectors(r,n).cross(bx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta($c),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Px.getNormalMatrix(e),a=this.coplanarPoint($c).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new od,Dx=new yt(.5,.5),wl=new oe;class wg{constructor(e=new Xr,n=new Xr,r=new Xr,a=new Xr,l=new Xr,c=new Xr){this.planes=[e,n,r,a,l,c]}set(e,n,r,a,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Mi,r=!1){const a=this.planes,l=e.elements,c=l[0],d=l[1],m=l[2],p=l[3],_=l[4],g=l[5],x=l[6],S=l[7],T=l[8],A=l[9],y=l[10],v=l[11],F=l[12],U=l[13],b=l[14],V=l[15];if(a[0].setComponents(p-c,S-_,v-T,V-F).normalize(),a[1].setComponents(p+c,S+_,v+T,V+F).normalize(),a[2].setComponents(p+d,S+g,v+A,V+U).normalize(),a[3].setComponents(p-d,S-g,v-A,V-U).normalize(),r)a[4].setComponents(m,x,y,b).normalize(),a[5].setComponents(p-m,S-x,v-y,V-b).normalize();else if(a[4].setComponents(p-m,S-x,v-y,V-b).normalize(),n===Mi)a[5].setComponents(p+m,S+x,v+y,V+b).normalize();else if(n===Fl)a[5].setComponents(m,x,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const n=Dx.distanceTo(e.center);return Hr.radius=.7071067811865476+n,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(wl.x=a.normal.x>0?e.max.x:e.min.x,wl.y=a.normal.y>0?e.max.y:e.min.y,wl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ag extends On{constructor(e,n,r=Qr,a,l,c,d=mi,m=mi,p,_=Wo,g=1){if(_!==Wo&&_!==Xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:g};super(x,a,l,c,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Rg extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zo extends Jr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,c=n/2,d=Math.floor(r),m=Math.floor(a),p=d+1,_=m+1,g=e/d,x=n/m,S=[],T=[],A=[],y=[];for(let v=0;v<_;v++){const F=v*x-c;for(let U=0;U<p;U++){const b=U*g-l;T.push(b,-F,0),A.push(0,0,1),y.push(U/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let F=0;F<d;F++){const U=F+p*v,b=F+p*(v+1),V=F+1+p*(v+1),z=F+1+p*v;S.push(U,b,z),S.push(b,V,z)}this.setIndex(S),this.setAttribute("position",new Zr(T,3)),this.setAttribute("normal",new Zr(A,3)),this.setAttribute("uv",new Zr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lx extends zl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=G0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ix extends zl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Cg extends Eg{constructor(e=-1,n=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=a+n,m=a-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ux extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function gm(s,e,n,r){const a=Nx(r);switch(n){case cg:return s*e;case dg:return s*e/a.components*a.byteLength;case nd:return s*e/a.components*a.byteLength;case hg:return s*e*2/a.components*a.byteLength;case id:return s*e*2/a.components*a.byteLength;case fg:return s*e*3/a.components*a.byteLength;case Cn:return s*e*4/a.components*a.byteLength;case rd:return s*e*4/a.components*a.byteLength;case Pl:case Dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sf:case Ef:return Math.max(s,16)*Math.max(e,8)/4;case yf:case Mf:return Math.max(s,8)*Math.max(e,8)/2;case Tf:case wf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Af:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case bf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Df:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case If:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Nf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Of:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case zf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Vf:case Hf:case Gf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Wf:case Xf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case jf:case Yf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Nx(s){switch(s){case wi:case og:return{byteLength:1,components:1};case Ho:case ag:case Ks:return{byteLength:2,components:1};case ed:case td:return{byteLength:2,components:4};case Qr:case Jf:case Si:return{byteLength:4,components:1};case lg:case ug:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bg(){let s=null,e=!1,n=null,r=null;function a(l,c){n(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function Fx(s){const e=new WeakMap;function n(d,m){const p=d.array,_=d.usage,g=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,_),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const _=m.array,g=m.updateRanges;if(s.bindBuffer(p,d),g.length===0)s.bufferSubData(p,0,_);else{g.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<g.length;S++){const T=g[x],A=g[S];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++x,g[x]=A)}g.length=x+1;for(let S=0,T=g.length;S<T;S++){const A=g[S];s.bufferSubData(p,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function c(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:a,remove:l,update:c}}var Ox=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$x=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ry=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,oy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ay=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ly=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hy="gl_FragColor = linearToOutputTexel( gl_FragColor );",py=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,my=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_y=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,My=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ey=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ty=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ay=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ry=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,by=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Py=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ly=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ny=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Oy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ky=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,By=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$y=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ky=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_S=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,SS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,MS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ES=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,DS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,LS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,GS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,WS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,XS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$S=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ZS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,aM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:Ox,alphahash_pars_fragment:kx,alphamap_fragment:zx,alphamap_pars_fragment:Bx,alphatest_fragment:Vx,alphatest_pars_fragment:Hx,aomap_fragment:Gx,aomap_pars_fragment:Wx,batching_pars_vertex:Xx,batching_vertex:jx,begin_vertex:Yx,beginnormal_vertex:qx,bsdfs:$x,iridescence_fragment:Kx,bumpmap_pars_fragment:Zx,clipping_planes_fragment:Qx,clipping_planes_pars_fragment:Jx,clipping_planes_pars_vertex:ey,clipping_planes_vertex:ty,color_fragment:ny,color_pars_fragment:iy,color_pars_vertex:ry,color_vertex:sy,common:oy,cube_uv_reflection_fragment:ay,defaultnormal_vertex:ly,displacementmap_pars_vertex:uy,displacementmap_vertex:cy,emissivemap_fragment:fy,emissivemap_pars_fragment:dy,colorspace_fragment:hy,colorspace_pars_fragment:py,envmap_fragment:my,envmap_common_pars_fragment:gy,envmap_pars_fragment:vy,envmap_pars_vertex:_y,envmap_physical_pars_fragment:by,envmap_vertex:xy,fog_vertex:yy,fog_pars_vertex:Sy,fog_fragment:My,fog_pars_fragment:Ey,gradientmap_pars_fragment:Ty,lightmap_pars_fragment:wy,lights_lambert_fragment:Ay,lights_lambert_pars_fragment:Ry,lights_pars_begin:Cy,lights_toon_fragment:Py,lights_toon_pars_fragment:Dy,lights_phong_fragment:Ly,lights_phong_pars_fragment:Iy,lights_physical_fragment:Uy,lights_physical_pars_fragment:Ny,lights_fragment_begin:Fy,lights_fragment_maps:Oy,lights_fragment_end:ky,logdepthbuf_fragment:zy,logdepthbuf_pars_fragment:By,logdepthbuf_pars_vertex:Vy,logdepthbuf_vertex:Hy,map_fragment:Gy,map_pars_fragment:Wy,map_particle_fragment:Xy,map_particle_pars_fragment:jy,metalnessmap_fragment:Yy,metalnessmap_pars_fragment:qy,morphinstance_vertex:$y,morphcolor_vertex:Ky,morphnormal_vertex:Zy,morphtarget_pars_vertex:Qy,morphtarget_vertex:Jy,normal_fragment_begin:eS,normal_fragment_maps:tS,normal_pars_fragment:nS,normal_pars_vertex:iS,normal_vertex:rS,normalmap_pars_fragment:sS,clearcoat_normal_fragment_begin:oS,clearcoat_normal_fragment_maps:aS,clearcoat_pars_fragment:lS,iridescence_pars_fragment:uS,opaque_fragment:cS,packing:fS,premultiplied_alpha_fragment:dS,project_vertex:hS,dithering_fragment:pS,dithering_pars_fragment:mS,roughnessmap_fragment:gS,roughnessmap_pars_fragment:vS,shadowmap_pars_fragment:_S,shadowmap_pars_vertex:xS,shadowmap_vertex:yS,shadowmask_pars_fragment:SS,skinbase_vertex:MS,skinning_pars_vertex:ES,skinning_vertex:TS,skinnormal_vertex:wS,specularmap_fragment:AS,specularmap_pars_fragment:RS,tonemapping_fragment:CS,tonemapping_pars_fragment:bS,transmission_fragment:PS,transmission_pars_fragment:DS,uv_pars_fragment:LS,uv_pars_vertex:IS,uv_vertex:US,worldpos_vertex:NS,background_vert:FS,background_frag:OS,backgroundCube_vert:kS,backgroundCube_frag:zS,cube_vert:BS,cube_frag:VS,depth_vert:HS,depth_frag:GS,distanceRGBA_vert:WS,distanceRGBA_frag:XS,equirect_vert:jS,equirect_frag:YS,linedashed_vert:qS,linedashed_frag:$S,meshbasic_vert:KS,meshbasic_frag:ZS,meshlambert_vert:QS,meshlambert_frag:JS,meshmatcap_vert:eM,meshmatcap_frag:tM,meshnormal_vert:nM,meshnormal_frag:iM,meshphong_vert:rM,meshphong_frag:sM,meshphysical_vert:oM,meshphysical_frag:aM,meshtoon_vert:lM,meshtoon_frag:uM,points_vert:cM,points_frag:fM,shadow_vert:dM,shadow_frag:hM,sprite_vert:pM,sprite_frag:mM},Le={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},yi={basic:{uniforms:Rn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Rn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ut(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Rn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Rn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Rn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ut(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Rn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Rn([Le.points,Le.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Rn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Rn([Le.common,Le.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Rn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Rn([Le.sprite,Le.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Rn([Le.common,Le.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Rn([Le.lights,Le.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};yi.physical={uniforms:Rn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Al={r:0,b:0,g:0},Gr=new Xi,gM=new sn;function vM(s,e,n,r,a,l,c){const d=new Ut(0);let m=l===!0?0:1,p,_,g=null,x=0,S=null;function T(U){let b=U.isScene===!0?U.background:null;return b&&b.isTexture&&(b=(U.backgroundBlurriness>0?n:e).get(b)),b}function A(U){let b=!1;const V=T(U);V===null?v(d,m):V&&V.isColor&&(v(V,1),b=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(U,b){const V=T(b);V&&(V.isCubeTexture||V.mapping===kl)?(_===void 0&&(_=new Ei(new Ko(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Ys(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,k,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Gr.copy(b.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),_.material.uniforms.envMap.value=V,_.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(gM.makeRotationFromEuler(Gr)),_.material.toneMapped=Rt.getTransfer(V.colorSpace)!==It,(g!==V||x!==V.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,g=V,x=V.version,S=s.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new Ei(new Zo(2,2),new ni({name:"BackgroundMaterial",uniforms:Ys(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(V.colorSpace)!==It,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(g!==V||x!==V.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,g=V,x=V.version,S=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,b){U.getRGB(Al,Mg(s)),r.buffers.color.setClear(Al.r,Al.g,Al.b,b,c)}function F(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,b=1){d.set(U),m=b,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(d,m)},render:A,addToRenderList:y,dispose:F}}function _M(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,c=!1;function d(R,H,K,te,de){let ae=!1;const re=g(te,K,H);l!==re&&(l=re,p(l.object)),ae=S(R,te,K,de),ae&&T(R,te,K,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(ae||c)&&(c=!1,b(R,H,K,te),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function m(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function _(R){return s.deleteVertexArray(R)}function g(R,H,K){const te=K.wireframe===!0;let de=r[R.id];de===void 0&&(de={},r[R.id]=de);let ae=de[H.id];ae===void 0&&(ae={},de[H.id]=ae);let re=ae[te];return re===void 0&&(re=x(m()),ae[te]=re),re}function x(R){const H=[],K=[],te=[];for(let de=0;de<n;de++)H[de]=0,K[de]=0,te[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:te,object:R,attributes:{},index:null}}function S(R,H,K,te){const de=l.attributes,ae=H.attributes;let re=0;const le=K.getAttributes();for(const D in le)if(le[D].location>=0){const se=de[D];let I=ae[D];if(I===void 0&&(D==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),D==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),se===void 0||se.attribute!==I||I&&se.data!==I.data)return!0;re++}return l.attributesNum!==re||l.index!==te}function T(R,H,K,te){const de={},ae=H.attributes;let re=0;const le=K.getAttributes();for(const D in le)if(le[D].location>=0){let se=ae[D];se===void 0&&(D==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),D==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));const I={};I.attribute=se,se&&se.data&&(I.data=se.data),de[D]=I,re++}l.attributes=de,l.attributesNum=re,l.index=te}function A(){const R=l.newAttributes;for(let H=0,K=R.length;H<K;H++)R[H]=0}function y(R){v(R,0)}function v(R,H){const K=l.newAttributes,te=l.enabledAttributes,de=l.attributeDivisors;K[R]=1,te[R]===0&&(s.enableVertexAttribArray(R),te[R]=1),de[R]!==H&&(s.vertexAttribDivisor(R,H),de[R]=H)}function F(){const R=l.newAttributes,H=l.enabledAttributes;for(let K=0,te=H.length;K<te;K++)H[K]!==R[K]&&(s.disableVertexAttribArray(K),H[K]=0)}function U(R,H,K,te,de,ae,re){re===!0?s.vertexAttribIPointer(R,H,K,de,ae):s.vertexAttribPointer(R,H,K,te,de,ae)}function b(R,H,K,te){A();const de=te.attributes,ae=K.getAttributes(),re=H.defaultAttributeValues;for(const le in ae){const D=ae[le];if(D.location>=0){let ue=de[le];if(ue===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),ue!==void 0){const se=ue.normalized,I=ue.itemSize,Q=e.get(ue);if(Q===void 0)continue;const Ae=Q.buffer,Re=Q.type,Ie=Q.bytesPerElement,Z=Re===s.INT||Re===s.UNSIGNED_INT||ue.gpuType===Jf;if(ue.isInterleavedBufferAttribute){const ee=ue.data,_e=ee.stride,De=ue.offset;if(ee.isInstancedInterleavedBuffer){for(let Ue=0;Ue<D.locationSize;Ue++)v(D.location+Ue,ee.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ue=0;Ue<D.locationSize;Ue++)y(D.location+Ue);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let Ue=0;Ue<D.locationSize;Ue++)U(D.location+Ue,I/D.locationSize,Re,se,_e*Ie,(De+I/D.locationSize*Ue)*Ie,Z)}else{if(ue.isInstancedBufferAttribute){for(let ee=0;ee<D.locationSize;ee++)v(D.location+ee,ue.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ee=0;ee<D.locationSize;ee++)y(D.location+ee);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let ee=0;ee<D.locationSize;ee++)U(D.location+ee,I/D.locationSize,Re,se,I*Ie,I/D.locationSize*ee*Ie,Z)}}else if(re!==void 0){const se=re[le];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(D.location,se);break;case 3:s.vertexAttrib3fv(D.location,se);break;case 4:s.vertexAttrib4fv(D.location,se);break;default:s.vertexAttrib1fv(D.location,se)}}}}F()}function V(){O();for(const R in r){const H=r[R];for(const K in H){const te=H[K];for(const de in te)_(te[de].object),delete te[de];delete H[K]}delete r[R]}}function z(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const K in H){const te=H[K];for(const de in te)_(te[de].object),delete te[de];delete H[K]}delete r[R.id]}function k(R){for(const H in r){const K=r[H];if(K[R.id]===void 0)continue;const te=K[R.id];for(const de in te)_(te[de].object),delete te[de];delete K[R.id]}}function O(){C(),c=!0,l!==a&&(l=a,p(l.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:O,resetDefaultState:C,dispose:V,releaseStatesOfGeometry:z,releaseStatesOfProgram:k,initAttributes:A,enableAttribute:y,disableUnusedAttributes:F}}function xM(s,e,n){let r;function a(p){r=p}function l(p,_){s.drawArrays(r,p,_),n.update(_,r,1)}function c(p,_,g){g!==0&&(s.drawArraysInstanced(r,p,_,g),n.update(_,r,g))}function d(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let S=0;for(let T=0;T<g;T++)S+=_[T];n.update(S,r,1)}function m(p,_,g,x){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<p.length;T++)c(p[T],_[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,g);let T=0;for(let A=0;A<g;A++)T+=_[A]*x[A];n.update(T,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function yM(s,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(k){return!(k!==Cn&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(k){const O=k===Ks&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==wi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Si&&!O)}function m(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),F=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=T>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:c,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:F,maxVaryings:U,maxFragmentUniforms:b,vertexTextures:V,maxSamples:z}}function SM(s){const e=this;let n=null,r=0,a=!1,l=!1;const c=new Xr,d=new pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||r!==0||a;return a=x,r=g.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,x){n=_(g,x,0)},this.setState=function(g,x,S){const T=g.clippingPlanes,A=g.clipIntersection,y=g.clipShadows,v=s.get(g);if(!a||T===null||T.length===0||l&&!y)l?_(null):p();else{const F=l?0:r,U=F*4;let b=v.clippingState||null;m.value=b,b=_(T,x,U,S);for(let V=0;V!==U;++V)b[V]=n[V];v.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,x,S,T){const A=g!==null?g.length:0;let y=null;if(A!==0){if(y=m.value,T!==!0||y===null){const v=S+A*4,F=x.matrixWorldInverse;d.getNormalMatrix(F),(y===null||y.length<v)&&(y=new Float32Array(v));for(let U=0,b=S;U!==A;++U,b+=4)c.copy(g[U]).applyMatrix4(F,d),c.normal.toArray(y,b),y[b+3]=c.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function MM(s){let e=new WeakMap;function n(c,d){return d===gf?c.mapping=Ws:d===vf&&(c.mapping=Xs),c}function r(c){if(c&&c.isTexture){const d=c.mapping;if(d===gf||d===vf)if(e.has(c)){const m=e.get(c).texture;return n(m,c.mapping)}else{const m=c.image;if(m&&m.height>0){const p=new Ax(m.height);return p.fromEquirectangularTexture(s,c),e.set(c,p),c.addEventListener("dispose",a),n(p.texture,c.mapping)}else return null}}return c}function a(c){const d=c.target;d.removeEventListener("dispose",a);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Bs=4,vm=[.125,.215,.35,.446,.526,.582],qr=20,Kc=new Cg,_m=new Ut;let Zc=null,Qc=0,Jc=0,ef=!1;const jr=(1+Math.sqrt(5))/2,zs=1/jr,xm=[new oe(-jr,zs,0),new oe(jr,zs,0),new oe(-zs,0,jr),new oe(zs,0,jr),new oe(0,jr,-zs),new oe(0,jr,zs),new oe(-1,1,-1),new oe(1,1,-1),new oe(-1,1,1),new oe(1,1,1)],EM=new oe;class ym{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,l={}){const{size:c=256,position:d=EM}=l;Zc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,a,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc,Qc,Jc),this._renderer.xr.enabled=ef,e.scissorTest=!1,Rl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ws||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Ks,format:Cn,colorSpace:js,depthBuffer:!1},a=Sm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sm(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TM(l)),this._blurMaterial=wM(l,e,n)}return a}_compileMaterial(e){const n=new Ei(this._lodPlanes[0],e);this._renderer.compile(n,Kc)}_sceneToCubeUV(e,n,r,a,l){const m=new hi(90,1,n,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,S=g.toneMapping;g.getClearColor(_m),g.toneMapping=Sr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(a),g.clearDepth(),g.setRenderTarget(null));const A=new xg({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),y=new Ei(new Ko,A);let v=!1;const F=e.background;F?F.isColor&&(A.color.copy(F),e.background=null,v=!0):(A.color.copy(_m),v=!0);for(let U=0;U<6;U++){const b=U%3;b===0?(m.up.set(0,p[U],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+_[U],l.y,l.z)):b===1?(m.up.set(0,0,p[U]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+_[U],l.z)):(m.up.set(0,p[U],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+_[U]));const V=this._cubeSize;Rl(a,b*V,U>2?V:0,V,V),g.setRenderTarget(a),v&&g.render(y,m),g.render(e,m)}y.geometry.dispose(),y.material.dispose(),g.toneMapping=S,g.autoClear=x,e.background=F}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Ws||e.mapping===Xs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new Ei(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const m=this._cubeSize;Rl(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(c,Kc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=xm[(a-l-1)%xm.length];this._blur(e,l-1,l,c,d)}n.autoClear=r}_blur(e,n,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,c,d){const m=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Ei(this._lodPlanes[a],p),x=p.uniforms,S=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*qr-1),A=l/T,y=isFinite(l)?1+Math.floor(_*A):qr;y>qr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${qr}`);const v=[];let F=0;for(let k=0;k<qr;++k){const O=k/A,C=Math.exp(-O*O/2);v.push(C),k===0?F+=C:k<y&&(F+=2*C)}for(let k=0;k<v.length;k++)v[k]=v[k]/F;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=c==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=T,x.mipInt.value=U-r;const b=this._sizeLods[a],V=3*b*(a>U-Bs?a-U+Bs:0),z=4*(this._cubeSize-b);Rl(n,V,z,3*b,2*b),m.setRenderTarget(n),m.render(g,Kc)}}function TM(s){const e=[],n=[],r=[];let a=s;const l=s-Bs+1+vm.length;for(let c=0;c<l;c++){const d=Math.pow(2,a);n.push(d);let m=1/d;c>s-Bs?m=vm[c-s+Bs-1]:c===0&&(m=0),r.push(m);const p=1/(d-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,T=6,A=3,y=2,v=1,F=new Float32Array(A*T*S),U=new Float32Array(y*T*S),b=new Float32Array(v*T*S);for(let z=0;z<S;z++){const k=z%3*2/3-1,O=z>2?0:-1,C=[k,O,0,k+2/3,O,0,k+2/3,O+1,0,k,O,0,k+2/3,O+1,0,k,O+1,0];F.set(C,A*T*z),U.set(x,y*T*z);const R=[z,z,z,z,z,z];b.set(R,v*T*z)}const V=new Jr;V.setAttribute("position",new Ti(F,A)),V.setAttribute("uv",new Ti(U,y)),V.setAttribute("faceIndex",new Ti(b,v)),e.push(V),a>Bs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Sm(s,e,n){const r=new ti(s,e,n);return r.texture.mapping=kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Rl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function wM(s,e,n){const r=new Float32Array(qr),a=new oe(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Mm(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Em(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function ad(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function AM(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===gf||m===vf,_=m===Ws||m===Xs;if(p||_){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new ym(s)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new ym(s)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",l),g.texture):null}}}return d}function a(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function l(d){const m=d.target;m.removeEventListener("dispose",l);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function RM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&jo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function CM(s,e,n,r){const a={},l=new WeakMap;function c(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",c),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(g,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,n.memory.geometries++),x}function m(g){const x=g.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function p(g){const x=[],S=g.index,T=g.attributes.position;let A=0;if(S!==null){const F=S.array;A=S.version;for(let U=0,b=F.length;U<b;U+=3){const V=F[U+0],z=F[U+1],k=F[U+2];x.push(V,z,z,k,k,V)}}else if(T!==void 0){const F=T.array;A=T.version;for(let U=0,b=F.length/3-1;U<b;U+=3){const V=U+0,z=U+1,k=U+2;x.push(V,z,z,k,k,V)}}else return;const y=new(mg(x)?Sg:yg)(x,1);y.version=A;const v=l.get(g);v&&e.remove(v),l.set(g,y)}function _(g){const x=l.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function bM(s,e,n){let r;function a(x){r=x}let l,c;function d(x){l=x.type,c=x.bytesPerElement}function m(x,S){s.drawElements(r,S,l,x*c),n.update(S,r,1)}function p(x,S,T){T!==0&&(s.drawElementsInstanced(r,S,l,x*c,T),n.update(S,r,T))}function _(x,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,x,0,T);let y=0;for(let v=0;v<T;v++)y+=S[v];n.update(y,r,1)}function g(x,S,T,A){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/c,S[v],A[v]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,x,0,A,0,T);let v=0;for(let F=0;F<T;F++)v+=S[F]*A[F];n.update(v,r,1)}}this.setMode=a,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function PM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=d*(l/3);break;case s.LINES:n.lines+=d*(l/2);break;case s.LINE_STRIP:n.lines+=d*(l-1);break;case s.LINE_LOOP:n.lines+=d*l;break;case s.POINTS:n.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function DM(s,e,n){const r=new WeakMap,a=new Kt;function l(c,d,m){const p=c.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let R=function(){O.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var S=R;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let b=0;T===!0&&(b=1),A===!0&&(b=2),y===!0&&(b=3);let V=d.attributes.position.count*b,z=1;V>e.maxTextureSize&&(z=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const k=new Float32Array(V*z*4*g),O=new gg(k,V,z,g);O.type=Si,O.needsUpdate=!0;const C=b*4;for(let H=0;H<g;H++){const K=v[H],te=F[H],de=U[H],ae=V*z*4*H;for(let re=0;re<K.count;re++){const le=re*C;T===!0&&(a.fromBufferAttribute(K,re),k[ae+le+0]=a.x,k[ae+le+1]=a.y,k[ae+le+2]=a.z,k[ae+le+3]=0),A===!0&&(a.fromBufferAttribute(te,re),k[ae+le+4]=a.x,k[ae+le+5]=a.y,k[ae+le+6]=a.z,k[ae+le+7]=0),y===!0&&(a.fromBufferAttribute(de,re),k[ae+le+8]=a.x,k[ae+le+9]=a.y,k[ae+le+10]=a.z,k[ae+le+11]=de.itemSize===4?a.w:1)}}x={count:g,texture:O,size:new yt(V,z)},r.set(d,x),d.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const A=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function LM(s,e,n,r){let a=new WeakMap;function l(m){const p=r.render.frame,_=m.geometry,g=e.get(m,_);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),a.get(m)!==p&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),a.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;a.get(x)!==p&&(x.update(),a.set(x,p))}return g}function c(){a=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:l,dispose:c}}const Pg=new On,Tm=new Ag(1,1),Dg=new gg,Lg=new lx,Ig=new Tg,wm=[],Am=[],Rm=new Float32Array(16),Cm=new Float32Array(9),bm=new Float32Array(4);function Qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=wm[a];if(l===void 0&&(l=new Float32Array(a),wm[a]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=n,s[c].toArray(l,d)}return l}function on(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function an(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Bl(s,e){let n=Am[e];n===void 0&&(n=new Int32Array(e),Am[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function IM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function UM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;s.uniform2fv(this.addr,e),an(n,e)}}function NM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(on(n,e))return;s.uniform3fv(this.addr,e),an(n,e)}}function FM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;s.uniform4fv(this.addr,e),an(n,e)}}function OM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(on(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),an(n,e)}else{if(on(n,r))return;bm.set(r),s.uniformMatrix2fv(this.addr,!1,bm),an(n,r)}}function kM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(on(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),an(n,e)}else{if(on(n,r))return;Cm.set(r),s.uniformMatrix3fv(this.addr,!1,Cm),an(n,r)}}function zM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(on(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),an(n,e)}else{if(on(n,r))return;Rm.set(r),s.uniformMatrix4fv(this.addr,!1,Rm),an(n,r)}}function BM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function VM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;s.uniform2iv(this.addr,e),an(n,e)}}function HM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(on(n,e))return;s.uniform3iv(this.addr,e),an(n,e)}}function GM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;s.uniform4iv(this.addr,e),an(n,e)}}function WM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function XM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;s.uniform2uiv(this.addr,e),an(n,e)}}function jM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(on(n,e))return;s.uniform3uiv(this.addr,e),an(n,e)}}function YM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;s.uniform4uiv(this.addr,e),an(n,e)}}function qM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Tm.compareFunction=pg,l=Tm):l=Pg,n.setTexture2D(e||l,a)}function $M(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Lg,a)}function KM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Ig,a)}function ZM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Dg,a)}function QM(s){switch(s){case 5126:return IM;case 35664:return UM;case 35665:return NM;case 35666:return FM;case 35674:return OM;case 35675:return kM;case 35676:return zM;case 5124:case 35670:return BM;case 35667:case 35671:return VM;case 35668:case 35672:return HM;case 35669:case 35673:return GM;case 5125:return WM;case 36294:return XM;case 36295:return jM;case 36296:return YM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return KM;case 36289:case 36303:case 36311:case 36292:return ZM}}function JM(s,e){s.uniform1fv(this.addr,e)}function eE(s,e){const n=Qs(e,this.size,2);s.uniform2fv(this.addr,n)}function tE(s,e){const n=Qs(e,this.size,3);s.uniform3fv(this.addr,n)}function nE(s,e){const n=Qs(e,this.size,4);s.uniform4fv(this.addr,n)}function iE(s,e){const n=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function rE(s,e){const n=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function sE(s,e){const n=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function oE(s,e){s.uniform1iv(this.addr,e)}function aE(s,e){s.uniform2iv(this.addr,e)}function lE(s,e){s.uniform3iv(this.addr,e)}function uE(s,e){s.uniform4iv(this.addr,e)}function cE(s,e){s.uniform1uiv(this.addr,e)}function fE(s,e){s.uniform2uiv(this.addr,e)}function dE(s,e){s.uniform3uiv(this.addr,e)}function hE(s,e){s.uniform4uiv(this.addr,e)}function pE(s,e,n){const r=this.cache,a=e.length,l=Bl(n,a);on(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let c=0;c!==a;++c)n.setTexture2D(e[c]||Pg,l[c])}function mE(s,e,n){const r=this.cache,a=e.length,l=Bl(n,a);on(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let c=0;c!==a;++c)n.setTexture3D(e[c]||Lg,l[c])}function gE(s,e,n){const r=this.cache,a=e.length,l=Bl(n,a);on(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let c=0;c!==a;++c)n.setTextureCube(e[c]||Ig,l[c])}function vE(s,e,n){const r=this.cache,a=e.length,l=Bl(n,a);on(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let c=0;c!==a;++c)n.setTexture2DArray(e[c]||Dg,l[c])}function _E(s){switch(s){case 5126:return JM;case 35664:return eE;case 35665:return tE;case 35666:return nE;case 35674:return iE;case 35675:return rE;case 35676:return sE;case 5124:case 35670:return oE;case 35667:case 35671:return aE;case 35668:case 35672:return lE;case 35669:case 35673:return uE;case 5125:return cE;case 36294:return fE;case 36295:return dE;case 36296:return hE;case 35678:case 36198:case 36298:case 36306:case 35682:return pE;case 35679:case 36299:case 36307:return mE;case 35680:case 36300:case 36308:case 36293:return gE;case 36289:case 36303:case 36311:case 36292:return vE}}class xE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=QM(n.type)}}class yE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=_E(n.type)}}class SE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const d=a[l];d.setValue(e,n[d.id],r)}}}const tf=/(\w+)(\])?(\[|\.)?/g;function Pm(s,e){s.seq.push(e),s.map[e.id]=e}function ME(s,e,n){const r=s.name,a=r.length;for(tf.lastIndex=0;;){const l=tf.exec(r),c=tf.lastIndex;let d=l[1];const m=l[2]==="]",p=l[3];if(m&&(d=d|0),p===void 0||p==="["&&c+2===a){Pm(n,p===void 0?new xE(d,s,e):new yE(d,s,e));break}else{let g=n.map[d];g===void 0&&(g=new SE(d),Pm(n,g)),n=g}}}class Ul{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),c=e.getUniformLocation(n,l.name);ME(l,c,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,c=n.length;l!==c;++l){const d=n[l],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in n&&r.push(c)}return r}}function Dm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const EE=37297;let TE=0;function wE(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=a;c<l;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${n[c]}`)}return r.join(`
`)}const Lm=new pt;function AE(s){Rt._getMatrix(Lm,Rt.workingColorSpace,s);const e=`mat3( ${Lm.elements.map(n=>n.toFixed(4))} )`;switch(Rt.getTransfer(s)){case Nl:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Im(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+wE(s.getShaderSource(e),d)}else return l}function RE(s,e){const n=AE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function CE(s,e){let n;switch(e){case N0:n="Linear";break;case F0:n="Reinhard";break;case O0:n="Cineon";break;case k0:n="ACESFilmic";break;case B0:n="AgX";break;case V0:n="Neutral";break;case z0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Cl=new oe;function bE(){Rt.getLuminanceCoefficients(Cl);const s=Cl.x.toFixed(4),e=Cl.y.toFixed(4),n=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function DE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function LE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),n[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:d}}return n}function Vo(s){return s!==""}function Um(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IE=/^[ \t]*#include +<([\w\d./]+)>/gm;function $f(s){return s.replace(IE,NE)}const UE=new Map;function NE(s,e){let n=mt[e];if(n===void 0){const r=UE.get(e);if(r!==void 0)n=mt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return $f(n)}const FE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fm(s){return s.replace(FE,OE)}function OE(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Om(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ig?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===p0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function zE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ws:case Xs:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function VE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case rg:e="ENVMAP_BLENDING_MULTIPLY";break;case I0:e="ENVMAP_BLENDING_MIX";break;case U0:e="ENVMAP_BLENDING_ADD";break}return e}function HE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function GE(s,e,n,r){const a=s.getContext(),l=n.defines;let c=n.vertexShader,d=n.fragmentShader;const m=kE(n),p=zE(n),_=BE(n),g=VE(n),x=HE(n),S=PE(n),T=DE(l),A=a.createProgram();let y,v,F=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Vo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Vo).join(`
`),v.length>0&&(v+=`
`)):(y=[Om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),v=[Om(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Sr?"#define TONE_MAPPING":"",n.toneMapping!==Sr?mt.tonemapping_pars_fragment:"",n.toneMapping!==Sr?CE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,RE("linearToOutputTexel",n.outputColorSpace),bE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vo).join(`
`)),c=$f(c),c=Um(c,n),c=Nm(c,n),d=$f(d),d=Um(d,n),d=Nm(d,n),c=Fm(c),d=Fm(d),n.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",n.glslVersion===Qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=F+y+c,b=F+v+d,V=Dm(a,a.VERTEX_SHADER,U),z=Dm(a,a.FRAGMENT_SHADER,b);a.attachShader(A,V),a.attachShader(A,z),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function k(H){if(s.debug.checkShaderErrors){const K=a.getProgramInfoLog(A)||"",te=a.getShaderInfoLog(V)||"",de=a.getShaderInfoLog(z)||"",ae=K.trim(),re=te.trim(),le=de.trim();let D=!0,ue=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(D=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,V,z);else{const se=Im(a,V,"vertex"),I=Im(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ae+`
`+se+`
`+I)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(re===""||le==="")&&(ue=!1);ue&&(H.diagnostics={runnable:D,programLog:ae,vertexShader:{log:re,prefix:y},fragmentShader:{log:le,prefix:v}})}a.deleteShader(V),a.deleteShader(z),O=new Ul(a,A),C=LE(a,A)}let O;this.getUniforms=function(){return O===void 0&&k(this),O};let C;this.getAttributes=function(){return C===void 0&&k(this),C};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(A,EE)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=TE++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=V,this.fragmentShader=z,this}let WE=0;class XE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new jE(e),n.set(e,r)),r}}class jE{constructor(e){this.id=WE++,this.code=e,this.usedTimes=0}}function YE(s,e,n,r,a,l,c){const d=new vg,m=new XE,p=new Set,_=[],g=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,R,H,K,te){const de=K.fog,ae=te.geometry,re=C.isMeshStandardMaterial?K.environment:null,le=(C.isMeshStandardMaterial?n:e).get(C.envMap||re),D=le&&le.mapping===kl?le.image.height:null,ue=T[C.type];C.precision!==null&&(S=a.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const se=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,I=se!==void 0?se.length:0;let Q=0;ae.morphAttributes.position!==void 0&&(Q=1),ae.morphAttributes.normal!==void 0&&(Q=2),ae.morphAttributes.color!==void 0&&(Q=3);let Ae,Re,Ie,Z;if(ue){const Et=yi[ue];Ae=Et.vertexShader,Re=Et.fragmentShader}else Ae=C.vertexShader,Re=C.fragmentShader,m.update(C),Ie=m.getVertexShaderID(C),Z=m.getFragmentShaderID(C);const ee=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),De=te.isInstancedMesh===!0,Ue=te.isBatchedMesh===!0,ht=!!C.map,Gt=!!C.matcap,N=!!le,Dt=!!C.aoMap,ft=!!C.lightMap,rt=!!C.bumpMap,Xe=!!C.normalMap,Nt=!!C.displacementMap,je=!!C.emissiveMap,ut=!!C.metalnessMap,zt=!!C.roughnessMap,Bt=C.anisotropy>0,P=C.clearcoat>0,E=C.dispersion>0,q=C.iridescence>0,fe=C.sheen>0,me=C.transmission>0,ce=Bt&&!!C.anisotropyMap,Ze=P&&!!C.clearcoatMap,Te=P&&!!C.clearcoatNormalMap,Be=P&&!!C.clearcoatRoughnessMap,Qe=q&&!!C.iridescenceMap,Me=q&&!!C.iridescenceThicknessMap,Ne=fe&&!!C.sheenColorMap,st=fe&&!!C.sheenRoughnessMap,$e=!!C.specularMap,be=!!C.specularColorMap,dt=!!C.specularIntensityMap,G=me&&!!C.transmissionMap,ye=me&&!!C.thicknessMap,we=!!C.gradientMap,Fe=!!C.alphaMap,xe=C.alphaTest>0,he=!!C.alphaHash,Ye=!!C.extensions;let ct=Sr;C.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ct=s.toneMapping);const bt={shaderID:ue,shaderType:C.type,shaderName:C.name,vertexShader:Ae,fragmentShader:Re,defines:C.defines,customVertexShaderID:Ie,customFragmentShaderID:Z,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:Ue,batchingColor:Ue&&te._colorsTexture!==null,instancing:De,instancingColor:De&&te.instanceColor!==null,instancingMorph:De&&te.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:js,alphaToCoverage:!!C.alphaToCoverage,map:ht,matcap:Gt,envMap:N,envMapMode:N&&le.mapping,envMapCubeUVHeight:D,aoMap:Dt,lightMap:ft,bumpMap:rt,normalMap:Xe,displacementMap:x&&Nt,emissiveMap:je,normalMapObjectSpace:Xe&&C.normalMapType===j0,normalMapTangentSpace:Xe&&C.normalMapType===X0,metalnessMap:ut,roughnessMap:zt,anisotropy:Bt,anisotropyMap:ce,clearcoat:P,clearcoatMap:Ze,clearcoatNormalMap:Te,clearcoatRoughnessMap:Be,dispersion:E,iridescence:q,iridescenceMap:Qe,iridescenceThicknessMap:Me,sheen:fe,sheenColorMap:Ne,sheenRoughnessMap:st,specularMap:$e,specularColorMap:be,specularIntensityMap:dt,transmission:me,transmissionMap:G,thicknessMap:ye,gradientMap:we,opaque:C.transparent===!1&&C.blending===Vs&&C.alphaToCoverage===!1,alphaMap:Fe,alphaTest:xe,alphaHash:he,combine:C.combine,mapUv:ht&&A(C.map.channel),aoMapUv:Dt&&A(C.aoMap.channel),lightMapUv:ft&&A(C.lightMap.channel),bumpMapUv:rt&&A(C.bumpMap.channel),normalMapUv:Xe&&A(C.normalMap.channel),displacementMapUv:Nt&&A(C.displacementMap.channel),emissiveMapUv:je&&A(C.emissiveMap.channel),metalnessMapUv:ut&&A(C.metalnessMap.channel),roughnessMapUv:zt&&A(C.roughnessMap.channel),anisotropyMapUv:ce&&A(C.anisotropyMap.channel),clearcoatMapUv:Ze&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:Te&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:st&&A(C.sheenRoughnessMap.channel),specularMapUv:$e&&A(C.specularMap.channel),specularColorMapUv:be&&A(C.specularColorMap.channel),specularIntensityMapUv:dt&&A(C.specularIntensityMap.channel),transmissionMapUv:G&&A(C.transmissionMap.channel),thicknessMapUv:ye&&A(C.thicknessMap.channel),alphaMapUv:Fe&&A(C.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(Xe||Bt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!ae.attributes.uv&&(ht||Fe),fog:!!de,useFog:C.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:_e,skinning:te.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:Q,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:ct,decodeVideoTexture:ht&&C.map.isVideoTexture===!0&&Rt.getTransfer(C.map.colorSpace)===It,decodeVideoTextureEmissive:je&&C.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(C.emissiveMap.colorSpace)===It,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Gi,flipSided:C.side===Fn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ye&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&C.extensions.multiDraw===!0||Ue)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return bt.vertexUv1s=p.has(1),bt.vertexUv2s=p.has(2),bt.vertexUv3s=p.has(3),p.clear(),bt}function v(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)R.push(H),R.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(F(R,C),U(R,C),R.push(s.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function F(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function U(C,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),C.push(d.mask)}function b(C){const R=T[C.type];let H;if(R){const K=yi[R];H=Mx.clone(K.uniforms)}else H=C.uniforms;return H}function V(C,R){let H;for(let K=0,te=_.length;K<te;K++){const de=_[K];if(de.cacheKey===R){H=de,++H.usedTimes;break}}return H===void 0&&(H=new GE(s,R,C,l),_.push(H)),H}function z(C){if(--C.usedTimes===0){const R=_.indexOf(C);_[R]=_[_.length-1],_.pop(),C.destroy()}}function k(C){m.remove(C)}function O(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:b,acquireProgram:V,releaseProgram:z,releaseShaderCache:k,programs:_,dispose:O}}function qE(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function a(c,d,m){s.get(c)[d]=m}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function $E(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function km(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zm(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function c(g,x,S,T,A,y){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:x,material:S,groupOrder:T,renderOrder:g.renderOrder,z:A,group:y},s[e]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=S,v.groupOrder=T,v.renderOrder=g.renderOrder,v.z=A,v.group=y),e++,v}function d(g,x,S,T,A,y){const v=c(g,x,S,T,A,y);S.transmission>0?r.push(v):S.transparent===!0?a.push(v):n.push(v)}function m(g,x,S,T,A,y){const v=c(g,x,S,T,A,y);S.transmission>0?r.unshift(v):S.transparent===!0?a.unshift(v):n.unshift(v)}function p(g,x){n.length>1&&n.sort(g||$E),r.length>1&&r.sort(x||km),a.length>1&&a.sort(x||km)}function _(){for(let g=e,x=s.length;g<x;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:d,unshift:m,finish:_,sort:p}}function KE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new zm,s.set(r,[c])):a>=l.length?(c=new zm,l.push(c)):c=l[a],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function ZE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new oe,color:new Ut};break;case"SpotLight":n={position:new oe,direction:new oe,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new oe,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":n={direction:new oe,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":n={color:new Ut,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return s[e.id]=n,n}}}function QE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let JE=0;function eT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function tT(s){const e=new ZE,n=QE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new oe);const a=new oe,l=new sn,c=new sn;function d(p){let _=0,g=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let S=0,T=0,A=0,y=0,v=0,F=0,U=0,b=0,V=0,z=0,k=0;p.sort(eT);for(let C=0,R=p.length;C<R;C++){const H=p[C],K=H.color,te=H.intensity,de=H.distance,ae=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=K.r*te,g+=K.g*te,x+=K.b*te;else if(H.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(H.sh.coefficients[re],te);k++}else if(H.isDirectionalLight){const re=e.get(H);if(re.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const le=H.shadow,D=n.get(H);D.shadowIntensity=le.intensity,D.shadowBias=le.bias,D.shadowNormalBias=le.normalBias,D.shadowRadius=le.radius,D.shadowMapSize=le.mapSize,r.directionalShadow[S]=D,r.directionalShadowMap[S]=ae,r.directionalShadowMatrix[S]=H.shadow.matrix,F++}r.directional[S]=re,S++}else if(H.isSpotLight){const re=e.get(H);re.position.setFromMatrixPosition(H.matrixWorld),re.color.copy(K).multiplyScalar(te),re.distance=de,re.coneCos=Math.cos(H.angle),re.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),re.decay=H.decay,r.spot[A]=re;const le=H.shadow;if(H.map&&(r.spotLightMap[V]=H.map,V++,le.updateMatrices(H),H.castShadow&&z++),r.spotLightMatrix[A]=le.matrix,H.castShadow){const D=n.get(H);D.shadowIntensity=le.intensity,D.shadowBias=le.bias,D.shadowNormalBias=le.normalBias,D.shadowRadius=le.radius,D.shadowMapSize=le.mapSize,r.spotShadow[A]=D,r.spotShadowMap[A]=ae,b++}A++}else if(H.isRectAreaLight){const re=e.get(H);re.color.copy(K).multiplyScalar(te),re.halfWidth.set(H.width*.5,0,0),re.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=re,y++}else if(H.isPointLight){const re=e.get(H);if(re.color.copy(H.color).multiplyScalar(H.intensity),re.distance=H.distance,re.decay=H.decay,H.castShadow){const le=H.shadow,D=n.get(H);D.shadowIntensity=le.intensity,D.shadowBias=le.bias,D.shadowNormalBias=le.normalBias,D.shadowRadius=le.radius,D.shadowMapSize=le.mapSize,D.shadowCameraNear=le.camera.near,D.shadowCameraFar=le.camera.far,r.pointShadow[T]=D,r.pointShadowMap[T]=ae,r.pointShadowMatrix[T]=H.shadow.matrix,U++}r.point[T]=re,T++}else if(H.isHemisphereLight){const re=e.get(H);re.skyColor.copy(H.color).multiplyScalar(te),re.groundColor.copy(H.groundColor).multiplyScalar(te),r.hemi[v]=re,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=x;const O=r.hash;(O.directionalLength!==S||O.pointLength!==T||O.spotLength!==A||O.rectAreaLength!==y||O.hemiLength!==v||O.numDirectionalShadows!==F||O.numPointShadows!==U||O.numSpotShadows!==b||O.numSpotMaps!==V||O.numLightProbes!==k)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=y,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=b+V-z,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=k,O.directionalLength=S,O.pointLength=T,O.spotLength=A,O.rectAreaLength=y,O.hemiLength=v,O.numDirectionalShadows=F,O.numPointShadows=U,O.numSpotShadows=b,O.numSpotMaps=V,O.numLightProbes=k,r.version=JE++)}function m(p,_){let g=0,x=0,S=0,T=0,A=0;const y=_.matrixWorldInverse;for(let v=0,F=p.length;v<F;v++){const U=p[v];if(U.isDirectionalLight){const b=r.directional[g];b.direction.setFromMatrixPosition(U.matrixWorld),a.setFromMatrixPosition(U.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),g++}else if(U.isSpotLight){const b=r.spot[S];b.position.setFromMatrixPosition(U.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(U.matrixWorld),a.setFromMatrixPosition(U.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),S++}else if(U.isRectAreaLight){const b=r.rectArea[T];b.position.setFromMatrixPosition(U.matrixWorld),b.position.applyMatrix4(y),c.identity(),l.copy(U.matrixWorld),l.premultiply(y),c.extractRotation(l),b.halfWidth.set(U.width*.5,0,0),b.halfHeight.set(0,U.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),T++}else if(U.isPointLight){const b=r.point[x];b.position.setFromMatrixPosition(U.matrixWorld),b.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const b=r.hemi[A];b.direction.setFromMatrixPosition(U.matrixWorld),b.direction.transformDirection(y),A++}}}return{setup:d,setupView:m,state:r}}function Bm(s){const e=new tT(s),n=[],r=[];function a(_){p.camera=_,n.length=0,r.length=0}function l(_){n.push(_)}function c(_){r.push(_)}function d(){e.setup(n)}function m(_){e.setupView(n,_)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:d,setupLightsView:m,pushLight:l,pushShadow:c}}function nT(s){let e=new WeakMap;function n(a,l=0){const c=e.get(a);let d;return c===void 0?(d=new Bm(s),e.set(a,[d])):l>=c.length?(d=new Bm(s),c.push(d)):d=c[l],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const iT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sT(s,e,n){let r=new wg;const a=new yt,l=new yt,c=new Kt,d=new Lx({depthPacking:W0}),m=new Ix,p={},_=n.maxTextureSize,g={[Mr]:Fn,[Fn]:Mr,[Gi]:Gi},x=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:iT,fragmentShader:rT}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new Jr;T.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ei(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ig;let v=this.type;this.render=function(z,k,O){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;const C=s.getRenderTarget(),R=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),K=s.state;K.setBlending(yr),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const te=v!==Hi&&this.type===Hi,de=v===Hi&&this.type!==Hi;for(let ae=0,re=z.length;ae<re;ae++){const le=z[ae],D=le.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;a.copy(D.mapSize);const ue=D.getFrameExtents();if(a.multiply(ue),l.copy(D.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/ue.x),a.x=l.x*ue.x,D.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/ue.y),a.y=l.y*ue.y,D.mapSize.y=l.y)),D.map===null||te===!0||de===!0){const I=this.type!==Hi?{minFilter:mi,magFilter:mi}:{};D.map!==null&&D.map.dispose(),D.map=new ti(a.x,a.y,I),D.map.texture.name=le.name+".shadowMap",D.camera.updateProjectionMatrix()}s.setRenderTarget(D.map),s.clear();const se=D.getViewportCount();for(let I=0;I<se;I++){const Q=D.getViewport(I);c.set(l.x*Q.x,l.y*Q.y,l.x*Q.z,l.y*Q.w),K.viewport(c),D.updateMatrices(le,I),r=D.getFrustum(),b(k,O,D.camera,le,this.type)}D.isPointLightShadow!==!0&&this.type===Hi&&F(D,O),D.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(C,R,H)};function F(z,k){const O=e.update(A);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ti(a.x,a.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(k,null,O,x,A,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(k,null,O,S,A,null)}function U(z,k,O,C){let R=null;const H=O.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)R=H;else if(R=O.isPointLight===!0?m:d,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const K=R.uuid,te=k.uuid;let de=p[K];de===void 0&&(de={},p[K]=de);let ae=de[te];ae===void 0&&(ae=R.clone(),de[te]=ae,k.addEventListener("dispose",V)),R=ae}if(R.visible=k.visible,R.wireframe=k.wireframe,C===Hi?R.side=k.shadowSide!==null?k.shadowSide:k.side:R.side=k.shadowSide!==null?k.shadowSide:g[k.side],R.alphaMap=k.alphaMap,R.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,R.map=k.map,R.clipShadows=k.clipShadows,R.clippingPlanes=k.clippingPlanes,R.clipIntersection=k.clipIntersection,R.displacementMap=k.displacementMap,R.displacementScale=k.displacementScale,R.displacementBias=k.displacementBias,R.wireframeLinewidth=k.wireframeLinewidth,R.linewidth=k.linewidth,O.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const K=s.properties.get(R);K.light=O}return R}function b(z,k,O,C,R){if(z.visible===!1)return;if(z.layers.test(k.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===Hi)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,z.matrixWorld);const te=e.update(z),de=z.material;if(Array.isArray(de)){const ae=te.groups;for(let re=0,le=ae.length;re<le;re++){const D=ae[re],ue=de[D.materialIndex];if(ue&&ue.visible){const se=U(z,ue,C,R);z.onBeforeShadow(s,z,k,O,te,se,D),s.renderBufferDirect(O,null,te,se,z,D),z.onAfterShadow(s,z,k,O,te,se,D)}}}else if(de.visible){const ae=U(z,de,C,R);z.onBeforeShadow(s,z,k,O,te,ae,null),s.renderBufferDirect(O,null,te,ae,z,null),z.onAfterShadow(s,z,k,O,te,ae,null)}}const K=z.children;for(let te=0,de=K.length;te<de;te++)b(K[te],k,O,C,R)}function V(z){z.target.removeEventListener("dispose",V);for(const O in p){const C=p[O],R=z.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const oT={[uf]:cf,[ff]:pf,[df]:mf,[Gs]:hf,[cf]:uf,[pf]:ff,[mf]:df,[hf]:Gs};function aT(s,e){function n(){let G=!1;const ye=new Kt;let we=null;const Fe=new Kt(0,0,0,0);return{setMask:function(xe){we!==xe&&!G&&(s.colorMask(xe,xe,xe,xe),we=xe)},setLocked:function(xe){G=xe},setClear:function(xe,he,Ye,ct,bt){bt===!0&&(xe*=ct,he*=ct,Ye*=ct),ye.set(xe,he,Ye,ct),Fe.equals(ye)===!1&&(s.clearColor(xe,he,Ye,ct),Fe.copy(ye))},reset:function(){G=!1,we=null,Fe.set(-1,0,0,0)}}}function r(){let G=!1,ye=!1,we=null,Fe=null,xe=null;return{setReversed:function(he){if(ye!==he){const Ye=e.get("EXT_clip_control");he?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),ye=he;const ct=xe;xe=null,this.setClear(ct)}},getReversed:function(){return ye},setTest:function(he){he?ee(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(he){we!==he&&!G&&(s.depthMask(he),we=he)},setFunc:function(he){if(ye&&(he=oT[he]),Fe!==he){switch(he){case uf:s.depthFunc(s.NEVER);break;case cf:s.depthFunc(s.ALWAYS);break;case ff:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case df:s.depthFunc(s.EQUAL);break;case hf:s.depthFunc(s.GEQUAL);break;case pf:s.depthFunc(s.GREATER);break;case mf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Fe=he}},setLocked:function(he){G=he},setClear:function(he){xe!==he&&(ye&&(he=1-he),s.clearDepth(he),xe=he)},reset:function(){G=!1,we=null,Fe=null,xe=null,ye=!1}}}function a(){let G=!1,ye=null,we=null,Fe=null,xe=null,he=null,Ye=null,ct=null,bt=null;return{setTest:function(Et){G||(Et?ee(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(Et){ye!==Et&&!G&&(s.stencilMask(Et),ye=Et)},setFunc:function(Et,jn,pn){(we!==Et||Fe!==jn||xe!==pn)&&(s.stencilFunc(Et,jn,pn),we=Et,Fe=jn,xe=pn)},setOp:function(Et,jn,pn){(he!==Et||Ye!==jn||ct!==pn)&&(s.stencilOp(Et,jn,pn),he=Et,Ye=jn,ct=pn)},setLocked:function(Et){G=Et},setClear:function(Et){bt!==Et&&(s.clearStencil(Et),bt=Et)},reset:function(){G=!1,ye=null,we=null,Fe=null,xe=null,he=null,Ye=null,ct=null,bt=null}}}const l=new n,c=new r,d=new a,m=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,S=[],T=null,A=!1,y=null,v=null,F=null,U=null,b=null,V=null,z=null,k=new Ut(0,0,0),O=0,C=!1,R=null,H=null,K=null,te=null,de=null;const ae=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,le=0;const D=s.getParameter(s.VERSION);D.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(D)[1]),re=le>=1):D.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),re=le>=2);let ue=null,se={};const I=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),Ae=new Kt().fromArray(I),Re=new Kt().fromArray(Q);function Ie(G,ye,we,Fe){const xe=new Uint8Array(4),he=s.createTexture();s.bindTexture(G,he),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<we;Ye++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(ye,0,s.RGBA,1,1,Fe,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(ye+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return he}const Z={};Z[s.TEXTURE_2D]=Ie(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=Ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=Ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=Ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ee(s.DEPTH_TEST),c.setFunc(Gs),rt(!1),Xe(jp),ee(s.CULL_FACE),Dt(yr);function ee(G){_[G]!==!0&&(s.enable(G),_[G]=!0)}function _e(G){_[G]!==!1&&(s.disable(G),_[G]=!1)}function De(G,ye){return g[G]!==ye?(s.bindFramebuffer(G,ye),g[G]=ye,G===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=ye),G===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=ye),!0):!1}function Ue(G,ye){let we=S,Fe=!1;if(G){we=x.get(ye),we===void 0&&(we=[],x.set(ye,we));const xe=G.textures;if(we.length!==xe.length||we[0]!==s.COLOR_ATTACHMENT0){for(let he=0,Ye=xe.length;he<Ye;he++)we[he]=s.COLOR_ATTACHMENT0+he;we.length=xe.length,Fe=!0}}else we[0]!==s.BACK&&(we[0]=s.BACK,Fe=!0);Fe&&s.drawBuffers(we)}function ht(G){return T!==G?(s.useProgram(G),T=G,!0):!1}const Gt={[Yr]:s.FUNC_ADD,[g0]:s.FUNC_SUBTRACT,[v0]:s.FUNC_REVERSE_SUBTRACT};Gt[_0]=s.MIN,Gt[x0]=s.MAX;const N={[y0]:s.ZERO,[S0]:s.ONE,[M0]:s.SRC_COLOR,[af]:s.SRC_ALPHA,[C0]:s.SRC_ALPHA_SATURATE,[A0]:s.DST_COLOR,[T0]:s.DST_ALPHA,[E0]:s.ONE_MINUS_SRC_COLOR,[lf]:s.ONE_MINUS_SRC_ALPHA,[R0]:s.ONE_MINUS_DST_COLOR,[w0]:s.ONE_MINUS_DST_ALPHA,[b0]:s.CONSTANT_COLOR,[P0]:s.ONE_MINUS_CONSTANT_COLOR,[D0]:s.CONSTANT_ALPHA,[L0]:s.ONE_MINUS_CONSTANT_ALPHA};function Dt(G,ye,we,Fe,xe,he,Ye,ct,bt,Et){if(G===yr){A===!0&&(_e(s.BLEND),A=!1);return}if(A===!1&&(ee(s.BLEND),A=!0),G!==m0){if(G!==y||Et!==C){if((v!==Yr||b!==Yr)&&(s.blendEquation(s.FUNC_ADD),v=Yr,b=Yr),Et)switch(G){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yp:s.blendFunc(s.ONE,s.ONE);break;case qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $p:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yp:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case qp:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $p:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}F=null,U=null,V=null,z=null,k.set(0,0,0),O=0,y=G,C=Et}return}xe=xe||ye,he=he||we,Ye=Ye||Fe,(ye!==v||xe!==b)&&(s.blendEquationSeparate(Gt[ye],Gt[xe]),v=ye,b=xe),(we!==F||Fe!==U||he!==V||Ye!==z)&&(s.blendFuncSeparate(N[we],N[Fe],N[he],N[Ye]),F=we,U=Fe,V=he,z=Ye),(ct.equals(k)===!1||bt!==O)&&(s.blendColor(ct.r,ct.g,ct.b,bt),k.copy(ct),O=bt),y=G,C=!1}function ft(G,ye){G.side===Gi?_e(s.CULL_FACE):ee(s.CULL_FACE);let we=G.side===Fn;ye&&(we=!we),rt(we),G.blending===Vs&&G.transparent===!1?Dt(yr):Dt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),l.setMask(G.colorWrite);const Fe=G.stencilWrite;d.setTest(Fe),Fe&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),je(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function rt(G){R!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),R=G)}function Xe(G){G!==d0?(ee(s.CULL_FACE),G!==H&&(G===jp?s.cullFace(s.BACK):G===h0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),H=G}function Nt(G){G!==K&&(re&&s.lineWidth(G),K=G)}function je(G,ye,we){G?(ee(s.POLYGON_OFFSET_FILL),(te!==ye||de!==we)&&(s.polygonOffset(ye,we),te=ye,de=we)):_e(s.POLYGON_OFFSET_FILL)}function ut(G){G?ee(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function zt(G){G===void 0&&(G=s.TEXTURE0+ae-1),ue!==G&&(s.activeTexture(G),ue=G)}function Bt(G,ye,we){we===void 0&&(ue===null?we=s.TEXTURE0+ae-1:we=ue);let Fe=se[we];Fe===void 0&&(Fe={type:void 0,texture:void 0},se[we]=Fe),(Fe.type!==G||Fe.texture!==ye)&&(ue!==we&&(s.activeTexture(we),ue=we),s.bindTexture(G,ye||Z[G]),Fe.type=G,Fe.texture=ye)}function P(){const G=se[ue];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{s.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{s.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{s.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ze(){try{s.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{s.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(){try{s.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Qe(){try{s.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{s.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(G){Ae.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ae.copy(G))}function st(G){Re.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Re.copy(G))}function $e(G,ye){let we=p.get(ye);we===void 0&&(we=new WeakMap,p.set(ye,we));let Fe=we.get(G);Fe===void 0&&(Fe=s.getUniformBlockIndex(ye,G.name),we.set(G,Fe))}function be(G,ye){const Fe=p.get(ye).get(G);m.get(ye)!==Fe&&(s.uniformBlockBinding(ye,Fe,G.__bindingPointIndex),m.set(ye,Fe))}function dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ue=null,se={},g={},x=new WeakMap,S=[],T=null,A=!1,y=null,v=null,F=null,U=null,b=null,V=null,z=null,k=new Ut(0,0,0),O=0,C=!1,R=null,H=null,K=null,te=null,de=null,Ae.set(0,0,s.canvas.width,s.canvas.height),Re.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:ee,disable:_e,bindFramebuffer:De,drawBuffers:Ue,useProgram:ht,setBlending:Dt,setMaterial:ft,setFlipSided:rt,setCullFace:Xe,setLineWidth:Nt,setPolygonOffset:je,setScissorTest:ut,activeTexture:zt,bindTexture:Bt,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:Qe,texImage3D:Me,updateUBOMapping:$e,uniformBlockBinding:be,texStorage2D:Te,texStorage3D:Be,texSubImage2D:fe,texSubImage3D:me,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ze,scissor:Ne,viewport:st,reset:dt}}function lT(s,e,n,r,a,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new yt,_=new WeakMap;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,E){return S?new OffscreenCanvas(P,E):Ol("canvas")}function A(P,E,q){let fe=1;const me=Bt(P);if((me.width>q||me.height>q)&&(fe=q/Math.max(me.width,me.height)),fe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ce=Math.floor(fe*me.width),Ze=Math.floor(fe*me.height);g===void 0&&(g=T(ce,Ze));const Te=E?T(ce,Ze):g;return Te.width=ce,Te.height=Ze,Te.getContext("2d").drawImage(P,0,0,ce,Ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ce+"x"+Ze+")."),Te}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),P;return P}function y(P){return P.generateMipmaps}function v(P){s.generateMipmap(P)}function F(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(P,E,q,fe,me=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ce=E;if(E===s.RED&&(q===s.FLOAT&&(ce=s.R32F),q===s.HALF_FLOAT&&(ce=s.R16F),q===s.UNSIGNED_BYTE&&(ce=s.R8)),E===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(ce=s.R8UI),q===s.UNSIGNED_SHORT&&(ce=s.R16UI),q===s.UNSIGNED_INT&&(ce=s.R32UI),q===s.BYTE&&(ce=s.R8I),q===s.SHORT&&(ce=s.R16I),q===s.INT&&(ce=s.R32I)),E===s.RG&&(q===s.FLOAT&&(ce=s.RG32F),q===s.HALF_FLOAT&&(ce=s.RG16F),q===s.UNSIGNED_BYTE&&(ce=s.RG8)),E===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(ce=s.RG8UI),q===s.UNSIGNED_SHORT&&(ce=s.RG16UI),q===s.UNSIGNED_INT&&(ce=s.RG32UI),q===s.BYTE&&(ce=s.RG8I),q===s.SHORT&&(ce=s.RG16I),q===s.INT&&(ce=s.RG32I)),E===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),q===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),q===s.UNSIGNED_INT&&(ce=s.RGB32UI),q===s.BYTE&&(ce=s.RGB8I),q===s.SHORT&&(ce=s.RGB16I),q===s.INT&&(ce=s.RGB32I)),E===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),q===s.UNSIGNED_INT&&(ce=s.RGBA32UI),q===s.BYTE&&(ce=s.RGBA8I),q===s.SHORT&&(ce=s.RGBA16I),q===s.INT&&(ce=s.RGBA32I)),E===s.RGB&&(q===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(ce=s.R11F_G11F_B10F)),E===s.RGBA){const Ze=me?Nl:Rt.getTransfer(fe);q===s.FLOAT&&(ce=s.RGBA32F),q===s.HALF_FLOAT&&(ce=s.RGBA16F),q===s.UNSIGNED_BYTE&&(ce=Ze===It?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function b(P,E){let q;return P?E===null||E===Qr||E===Go?q=s.DEPTH24_STENCIL8:E===Si?q=s.DEPTH32F_STENCIL8:E===Ho&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Qr||E===Go?q=s.DEPTH_COMPONENT24:E===Si?q=s.DEPTH_COMPONENT32F:E===Ho&&(q=s.DEPTH_COMPONENT16),q}function V(P,E){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==mi&&P.minFilter!==Jt?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function z(P){const E=P.target;E.removeEventListener("dispose",z),O(E),E.isVideoTexture&&_.delete(E)}function k(P){const E=P.target;E.removeEventListener("dispose",k),R(E)}function O(P){const E=r.get(P);if(E.__webglInit===void 0)return;const q=P.source,fe=x.get(q);if(fe){const me=fe[E.__cacheKey];me.usedTimes--,me.usedTimes===0&&C(P),Object.keys(fe).length===0&&x.delete(q)}r.remove(P)}function C(P){const E=r.get(P);s.deleteTexture(E.__webglTexture);const q=P.source,fe=x.get(q);delete fe[E.__cacheKey],c.memory.textures--}function R(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(E.__webglFramebuffer[fe]))for(let me=0;me<E.__webglFramebuffer[fe].length;me++)s.deleteFramebuffer(E.__webglFramebuffer[fe][me]);else s.deleteFramebuffer(E.__webglFramebuffer[fe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[fe])}else{if(Array.isArray(E.__webglFramebuffer))for(let fe=0;fe<E.__webglFramebuffer.length;fe++)s.deleteFramebuffer(E.__webglFramebuffer[fe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let fe=0;fe<E.__webglColorRenderbuffer.length;fe++)E.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[fe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=P.textures;for(let fe=0,me=q.length;fe<me;fe++){const ce=r.get(q[fe]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),c.memory.textures--),r.remove(q[fe])}r.remove(P)}let H=0;function K(){H=0}function te(){const P=H;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),H+=1,P}function de(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function ae(P,E){const q=r.get(P);if(P.isVideoTexture&&ut(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){const fe=P.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(q,P,E);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+E)}function re(P,E){const q=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){Z(q,P,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+E)}function le(P,E){const q=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){Z(q,P,E);return}n.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+E)}function D(P,E){const q=r.get(P);if(P.version>0&&q.__version!==P.version){ee(q,P,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+E)}const ue={[_f]:s.REPEAT,[$r]:s.CLAMP_TO_EDGE,[xf]:s.MIRRORED_REPEAT},se={[mi]:s.NEAREST,[H0]:s.NEAREST_MIPMAP_NEAREST,[al]:s.NEAREST_MIPMAP_LINEAR,[Jt]:s.LINEAR,[wc]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},I={[Y0]:s.NEVER,[J0]:s.ALWAYS,[q0]:s.LESS,[pg]:s.LEQUAL,[$0]:s.EQUAL,[Q0]:s.GEQUAL,[K0]:s.GREATER,[Z0]:s.NOTEQUAL};function Q(P,E){if(E.type===Si&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Jt||E.magFilter===wc||E.magFilter===al||E.magFilter===Kr||E.minFilter===Jt||E.minFilter===wc||E.minFilter===al||E.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ue[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ue[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ue[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,se[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,se[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===mi||E.minFilter!==al&&E.minFilter!==Kr||E.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ae(P,E){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",z));const fe=E.source;let me=x.get(fe);me===void 0&&(me={},x.set(fe,me));const ce=de(E);if(ce!==P.__cacheKey){me[ce]===void 0&&(me[ce]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,q=!0),me[ce].usedTimes++;const Ze=me[P.__cacheKey];Ze!==void 0&&(me[P.__cacheKey].usedTimes--,Ze.usedTimes===0&&C(E)),P.__cacheKey=ce,P.__webglTexture=me[ce].texture}return q}function Re(P,E,q){return Math.floor(Math.floor(P/q)/E)}function Ie(P,E,q,fe){const ce=P.updateRanges;if(ce.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,q,fe,E.data);else{ce.sort((Me,Ne)=>Me.start-Ne.start);let Ze=0;for(let Me=1;Me<ce.length;Me++){const Ne=ce[Ze],st=ce[Me],$e=Ne.start+Ne.count,be=Re(st.start,E.width,4),dt=Re(Ne.start,E.width,4);st.start<=$e+1&&be===dt&&Re(st.start+st.count-1,E.width,4)===be?Ne.count=Math.max(Ne.count,st.start+st.count-Ne.start):(++Ze,ce[Ze]=st)}ce.length=Ze+1;const Te=s.getParameter(s.UNPACK_ROW_LENGTH),Be=s.getParameter(s.UNPACK_SKIP_PIXELS),Qe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Me=0,Ne=ce.length;Me<Ne;Me++){const st=ce[Me],$e=Math.floor(st.start/4),be=Math.ceil(st.count/4),dt=$e%E.width,G=Math.floor($e/E.width),ye=be,we=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,dt),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),n.texSubImage2D(s.TEXTURE_2D,0,dt,G,ye,we,q,fe,E.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Te),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Be),s.pixelStorei(s.UNPACK_SKIP_ROWS,Qe)}}function Z(P,E,q){let fe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=s.TEXTURE_3D);const me=Ae(P,E),ce=E.source;n.bindTexture(fe,P.__webglTexture,s.TEXTURE0+q);const Ze=r.get(ce);if(ce.version!==Ze.__version||me===!0){n.activeTexture(s.TEXTURE0+q);const Te=Rt.getPrimaries(Rt.workingColorSpace),Be=E.colorSpace===xr?null:Rt.getPrimaries(E.colorSpace),Qe=E.colorSpace===xr||Te===Be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let Me=A(E.image,!1,a.maxTextureSize);Me=zt(E,Me);const Ne=l.convert(E.format,E.colorSpace),st=l.convert(E.type);let $e=U(E.internalFormat,Ne,st,E.colorSpace,E.isVideoTexture);Q(fe,E);let be;const dt=E.mipmaps,G=E.isVideoTexture!==!0,ye=Ze.__version===void 0||me===!0,we=ce.dataReady,Fe=V(E,Me);if(E.isDepthTexture)$e=b(E.format===Xo,E.type),ye&&(G?n.texStorage2D(s.TEXTURE_2D,1,$e,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,$e,Me.width,Me.height,0,Ne,st,null));else if(E.isDataTexture)if(dt.length>0){G&&ye&&n.texStorage2D(s.TEXTURE_2D,Fe,$e,dt[0].width,dt[0].height);for(let xe=0,he=dt.length;xe<he;xe++)be=dt[xe],G?we&&n.texSubImage2D(s.TEXTURE_2D,xe,0,0,be.width,be.height,Ne,st,be.data):n.texImage2D(s.TEXTURE_2D,xe,$e,be.width,be.height,0,Ne,st,be.data);E.generateMipmaps=!1}else G?(ye&&n.texStorage2D(s.TEXTURE_2D,Fe,$e,Me.width,Me.height),we&&Ie(E,Me,Ne,st)):n.texImage2D(s.TEXTURE_2D,0,$e,Me.width,Me.height,0,Ne,st,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){G&&ye&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,$e,dt[0].width,dt[0].height,Me.depth);for(let xe=0,he=dt.length;xe<he;xe++)if(be=dt[xe],E.format!==Cn)if(Ne!==null)if(G){if(we)if(E.layerUpdates.size>0){const Ye=gm(be.width,be.height,E.format,E.type);for(const ct of E.layerUpdates){const bt=be.data.subarray(ct*Ye/be.data.BYTES_PER_ELEMENT,(ct+1)*Ye/be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,ct,be.width,be.height,1,Ne,bt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,be.width,be.height,Me.depth,Ne,be.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,$e,be.width,be.height,Me.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?we&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,be.width,be.height,Me.depth,Ne,st,be.data):n.texImage3D(s.TEXTURE_2D_ARRAY,xe,$e,be.width,be.height,Me.depth,0,Ne,st,be.data)}else{G&&ye&&n.texStorage2D(s.TEXTURE_2D,Fe,$e,dt[0].width,dt[0].height);for(let xe=0,he=dt.length;xe<he;xe++)be=dt[xe],E.format!==Cn?Ne!==null?G?we&&n.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,be.width,be.height,Ne,be.data):n.compressedTexImage2D(s.TEXTURE_2D,xe,$e,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?we&&n.texSubImage2D(s.TEXTURE_2D,xe,0,0,be.width,be.height,Ne,st,be.data):n.texImage2D(s.TEXTURE_2D,xe,$e,be.width,be.height,0,Ne,st,be.data)}else if(E.isDataArrayTexture)if(G){if(ye&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,$e,Me.width,Me.height,Me.depth),we)if(E.layerUpdates.size>0){const xe=gm(Me.width,Me.height,E.format,E.type);for(const he of E.layerUpdates){const Ye=Me.data.subarray(he*xe/Me.data.BYTES_PER_ELEMENT,(he+1)*xe/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,Ne,st,Ye)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ne,st,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,$e,Me.width,Me.height,Me.depth,0,Ne,st,Me.data);else if(E.isData3DTexture)G?(ye&&n.texStorage3D(s.TEXTURE_3D,Fe,$e,Me.width,Me.height,Me.depth),we&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ne,st,Me.data)):n.texImage3D(s.TEXTURE_3D,0,$e,Me.width,Me.height,Me.depth,0,Ne,st,Me.data);else if(E.isFramebufferTexture){if(ye)if(G)n.texStorage2D(s.TEXTURE_2D,Fe,$e,Me.width,Me.height);else{let xe=Me.width,he=Me.height;for(let Ye=0;Ye<Fe;Ye++)n.texImage2D(s.TEXTURE_2D,Ye,$e,xe,he,0,Ne,st,null),xe>>=1,he>>=1}}else if(dt.length>0){if(G&&ye){const xe=Bt(dt[0]);n.texStorage2D(s.TEXTURE_2D,Fe,$e,xe.width,xe.height)}for(let xe=0,he=dt.length;xe<he;xe++)be=dt[xe],G?we&&n.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ne,st,be):n.texImage2D(s.TEXTURE_2D,xe,$e,Ne,st,be);E.generateMipmaps=!1}else if(G){if(ye){const xe=Bt(Me);n.texStorage2D(s.TEXTURE_2D,Fe,$e,xe.width,xe.height)}we&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ne,st,Me)}else n.texImage2D(s.TEXTURE_2D,0,$e,Ne,st,Me);y(E)&&v(fe),Ze.__version=ce.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ee(P,E,q){if(E.image.length!==6)return;const fe=Ae(P,E),me=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+q);const ce=r.get(me);if(me.version!==ce.__version||fe===!0){n.activeTexture(s.TEXTURE0+q);const Ze=Rt.getPrimaries(Rt.workingColorSpace),Te=E.colorSpace===xr?null:Rt.getPrimaries(E.colorSpace),Be=E.colorSpace===xr||Ze===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const Qe=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,Ne=[];for(let he=0;he<6;he++)!Qe&&!Me?Ne[he]=A(E.image[he],!0,a.maxCubemapSize):Ne[he]=Me?E.image[he].image:E.image[he],Ne[he]=zt(E,Ne[he]);const st=Ne[0],$e=l.convert(E.format,E.colorSpace),be=l.convert(E.type),dt=U(E.internalFormat,$e,be,E.colorSpace),G=E.isVideoTexture!==!0,ye=ce.__version===void 0||fe===!0,we=me.dataReady;let Fe=V(E,st);Q(s.TEXTURE_CUBE_MAP,E);let xe;if(Qe){G&&ye&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,dt,st.width,st.height);for(let he=0;he<6;he++){xe=Ne[he].mipmaps;for(let Ye=0;Ye<xe.length;Ye++){const ct=xe[Ye];E.format!==Cn?$e!==null?G?we&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ye,0,0,ct.width,ct.height,$e,ct.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ye,dt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?we&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ye,0,0,ct.width,ct.height,$e,be,ct.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ye,dt,ct.width,ct.height,0,$e,be,ct.data)}}}else{if(xe=E.mipmaps,G&&ye){xe.length>0&&Fe++;const he=Bt(Ne[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,dt,he.width,he.height)}for(let he=0;he<6;he++)if(Me){G?we&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ne[he].width,Ne[he].height,$e,be,Ne[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,Ne[he].width,Ne[he].height,0,$e,be,Ne[he].data);for(let Ye=0;Ye<xe.length;Ye++){const bt=xe[Ye].image[he].image;G?we&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ye+1,0,0,bt.width,bt.height,$e,be,bt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ye+1,dt,bt.width,bt.height,0,$e,be,bt.data)}}else{G?we&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,$e,be,Ne[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,$e,be,Ne[he]);for(let Ye=0;Ye<xe.length;Ye++){const ct=xe[Ye];G?we&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ye+1,0,0,$e,be,ct.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ye+1,dt,$e,be,ct.image[he])}}}y(E)&&v(s.TEXTURE_CUBE_MAP),ce.__version=me.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function _e(P,E,q,fe,me,ce){const Ze=l.convert(q.format,q.colorSpace),Te=l.convert(q.type),Be=U(q.internalFormat,Ze,Te,q.colorSpace),Qe=r.get(E),Me=r.get(q);if(Me.__renderTarget=E,!Qe.__hasExternalTextures){const Ne=Math.max(1,E.width>>ce),st=Math.max(1,E.height>>ce);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?n.texImage3D(me,ce,Be,Ne,st,E.depth,0,Ze,Te,null):n.texImage2D(me,ce,Be,Ne,st,0,Ze,Te,null)}n.bindFramebuffer(s.FRAMEBUFFER,P),je(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,me,Me.__webglTexture,0,Nt(E)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,me,Me.__webglTexture,ce),n.bindFramebuffer(s.FRAMEBUFFER,null)}function De(P,E,q){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){const fe=E.depthTexture,me=fe&&fe.isDepthTexture?fe.type:null,ce=b(E.stencilBuffer,me),Ze=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=Nt(E);je(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,ce,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,ce,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ce,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ze,s.RENDERBUFFER,P)}else{const fe=E.textures;for(let me=0;me<fe.length;me++){const ce=fe[me],Ze=l.convert(ce.format,ce.colorSpace),Te=l.convert(ce.type),Be=U(ce.internalFormat,Ze,Te,ce.colorSpace),Qe=Nt(E);q&&je(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Be,E.width,E.height):je(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qe,Be,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Be,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ue(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=r.get(E.depthTexture);fe.__renderTarget=E,(!fe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ae(E.depthTexture,0);const me=fe.__webglTexture,ce=Nt(E);if(E.depthTexture.format===Wo)je(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0);else if(E.depthTexture.format===Xo)je(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0,ce):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function ht(P){const E=r.get(P),q=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const fe=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),fe){const me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,fe.removeEventListener("dispose",me)};fe.addEventListener("dispose",me),E.__depthDisposeCallback=me}E.__boundDepthTexture=fe}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const fe=P.texture.mipmaps;fe&&fe.length>0?Ue(E.__webglFramebuffer[0],P):Ue(E.__webglFramebuffer,P)}else if(q){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]===void 0)E.__webglDepthbuffer[fe]=s.createRenderbuffer(),De(E.__webglDepthbuffer[fe],P,!1);else{const me=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ce)}}else{const fe=P.texture.mipmaps;if(fe&&fe.length>0?n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),De(E.__webglDepthbuffer,P,!1);else{const me=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ce)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Gt(P,E,q){const fe=r.get(P);E!==void 0&&_e(fe.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&ht(P)}function N(P){const E=P.texture,q=r.get(P),fe=r.get(E);P.addEventListener("dispose",k);const me=P.textures,ce=P.isWebGLCubeRenderTarget===!0,Ze=me.length>1;if(Ze||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=E.version,c.memory.textures++),ce){q.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Te]=[];for(let Be=0;Be<E.mipmaps.length;Be++)q.__webglFramebuffer[Te][Be]=s.createFramebuffer()}else q.__webglFramebuffer[Te]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Te=0;Te<E.mipmaps.length;Te++)q.__webglFramebuffer[Te]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Ze)for(let Te=0,Be=me.length;Te<Be;Te++){const Qe=r.get(me[Te]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=s.createTexture(),c.memory.textures++)}if(P.samples>0&&je(P)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Te=0;Te<me.length;Te++){const Be=me[Te];q.__webglColorRenderbuffer[Te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[Te]);const Qe=l.convert(Be.format,Be.colorSpace),Me=l.convert(Be.type),Ne=U(Be.internalFormat,Qe,Me,Be.colorSpace,P.isXRRenderTarget===!0),st=Nt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,st,Ne,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,q.__webglColorRenderbuffer[Te])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),De(q.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){n.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),Q(s.TEXTURE_CUBE_MAP,E);for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0)for(let Be=0;Be<E.mipmaps.length;Be++)_e(q.__webglFramebuffer[Te][Be],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Be);else _e(q.__webglFramebuffer[Te],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);y(E)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ze){for(let Te=0,Be=me.length;Te<Be;Te++){const Qe=me[Te],Me=r.get(Qe);let Ne=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ne=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ne,Me.__webglTexture),Q(Ne,Qe),_e(q.__webglFramebuffer,P,Qe,s.COLOR_ATTACHMENT0+Te,Ne,0),y(Qe)&&v(Ne)}n.unbindTexture()}else{let Te=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Te=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Te,fe.__webglTexture),Q(Te,E),E.mipmaps&&E.mipmaps.length>0)for(let Be=0;Be<E.mipmaps.length;Be++)_e(q.__webglFramebuffer[Be],P,E,s.COLOR_ATTACHMENT0,Te,Be);else _e(q.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,Te,0);y(E)&&v(Te),n.unbindTexture()}P.depthBuffer&&ht(P)}function Dt(P){const E=P.textures;for(let q=0,fe=E.length;q<fe;q++){const me=E[q];if(y(me)){const ce=F(P),Ze=r.get(me).__webglTexture;n.bindTexture(ce,Ze),v(ce),n.unbindTexture()}}}const ft=[],rt=[];function Xe(P){if(P.samples>0){if(je(P)===!1){const E=P.textures,q=P.width,fe=P.height;let me=s.COLOR_BUFFER_BIT;const ce=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ze=r.get(P),Te=E.length>1;if(Te)for(let Qe=0;Qe<E.length;Qe++)n.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer);const Be=P.texture.mipmaps;Be&&Be.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let Qe=0;Qe<E.length;Qe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[Qe]);const Me=r.get(E[Qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Me,0)}s.blitFramebuffer(0,0,q,fe,0,0,q,fe,me,s.NEAREST),m===!0&&(ft.length=0,rt.length=0,ft.push(s.COLOR_ATTACHMENT0+Qe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ft.push(ce),rt.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,rt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ft))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Te)for(let Qe=0;Qe<E.length;Qe++){n.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,Ze.__webglColorRenderbuffer[Qe]);const Me=r.get(E[Qe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,Me,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Nt(P){return Math.min(a.maxSamples,P.samples)}function je(P){const E=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ut(P){const E=c.render.frame;_.get(P)!==E&&(_.set(P,E),P.update())}function zt(P,E){const q=P.colorSpace,fe=P.format,me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==js&&q!==xr&&(Rt.getTransfer(q)===It?(fe!==Cn||me!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}function Bt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=te,this.resetTextureUnits=K,this.setTexture2D=ae,this.setTexture2DArray=re,this.setTexture3D=le,this.setTextureCube=D,this.rebindTextures=Gt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=je}function uT(s,e){function n(r,a=xr){let l;const c=Rt.getTransfer(a);if(r===wi)return s.UNSIGNED_BYTE;if(r===ed)return s.UNSIGNED_SHORT_4_4_4_4;if(r===td)return s.UNSIGNED_SHORT_5_5_5_1;if(r===lg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ug)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===og)return s.BYTE;if(r===ag)return s.SHORT;if(r===Ho)return s.UNSIGNED_SHORT;if(r===Jf)return s.INT;if(r===Qr)return s.UNSIGNED_INT;if(r===Si)return s.FLOAT;if(r===Ks)return s.HALF_FLOAT;if(r===cg)return s.ALPHA;if(r===fg)return s.RGB;if(r===Cn)return s.RGBA;if(r===Wo)return s.DEPTH_COMPONENT;if(r===Xo)return s.DEPTH_STENCIL;if(r===dg)return s.RED;if(r===nd)return s.RED_INTEGER;if(r===hg)return s.RG;if(r===id)return s.RG_INTEGER;if(r===rd)return s.RGBA_INTEGER;if(r===Pl||r===Dl||r===Ll||r===Il)if(c===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Pl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ll)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Il)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Pl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Dl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ll)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Il)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yf||r===Sf||r===Mf||r===Ef)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===yf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Sf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ef)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tf||r===wf||r===Af)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Tf||r===wf)return c===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Af)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Rf||r===Cf||r===bf||r===Pf||r===Df||r===Lf||r===If||r===Uf||r===Nf||r===Ff||r===Of||r===kf||r===zf||r===Bf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Rf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Pf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Df)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===If)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Uf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Nf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ff)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Of)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bf)return c===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vf||r===Hf||r===Gf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Vf)return c===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wf||r===Xf||r===jf||r===Yf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Wf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Xf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Go?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const cT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Rg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new ni({vertexShader:cT,fragmentShader:fT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ei(new Zo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hT extends Zs{constructor(e,n){super();const r=this;let a=null,l=1,c=null,d="local-floor",m=1,p=null,_=null,g=null,x=null,S=null,T=null;const A=typeof XRWebGLBinding<"u",y=new dT,v={},F=n.getContextAttributes();let U=null,b=null;const V=[],z=[],k=new yt;let O=null;const C=new hi;C.viewport=new Kt;const R=new hi;R.viewport=new Kt;const H=[C,R],K=new Ux;let te=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=V[Z];return ee===void 0&&(ee=new qc,V[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=V[Z];return ee===void 0&&(ee=new qc,V[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=V[Z];return ee===void 0&&(ee=new qc,V[Z]=ee),ee.getHandSpace()};function ae(Z){const ee=z.indexOf(Z.inputSource);if(ee===-1)return;const _e=V[ee];_e!==void 0&&(_e.update(Z.inputSource,Z.frame,p||c),_e.dispatchEvent({type:Z.type,data:Z.inputSource}))}function re(){a.removeEventListener("select",ae),a.removeEventListener("selectstart",ae),a.removeEventListener("selectend",ae),a.removeEventListener("squeeze",ae),a.removeEventListener("squeezestart",ae),a.removeEventListener("squeezeend",ae),a.removeEventListener("end",re),a.removeEventListener("inputsourceschange",le);for(let Z=0;Z<V.length;Z++){const ee=z[Z];ee!==null&&(z[Z]=null,V[Z].disconnect(ee))}te=null,de=null,y.reset();for(const Z in v)delete v[Z];e.setRenderTarget(U),S=null,x=null,g=null,a=null,b=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(a,n)),g},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(U=e.getRenderTarget(),a.addEventListener("select",ae),a.addEventListener("selectstart",ae),a.addEventListener("selectend",ae),a.addEventListener("squeeze",ae),a.addEventListener("squeezestart",ae),a.addEventListener("squeezeend",ae),a.addEventListener("end",re),a.addEventListener("inputsourceschange",le),F.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(k),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,De=null,Ue=null;F.depth&&(Ue=F.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_e=F.stencil?Xo:Wo,De=F.stencil?Go:Qr);const ht={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:l};g=this.getBinding(),x=g.createProjectionLayer(ht),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),b=new ti(x.textureWidth,x.textureHeight,{format:Cn,type:wi,depthTexture:new Ag(x.textureWidth,x.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const _e={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,n,_e),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),b=new ti(S.framebufferWidth,S.framebufferHeight,{format:Cn,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(m),p=null,c=await a.requestReferenceSpace(d),Ie.setContext(a),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function le(Z){for(let ee=0;ee<Z.removed.length;ee++){const _e=Z.removed[ee],De=z.indexOf(_e);De>=0&&(z[De]=null,V[De].disconnect(_e))}for(let ee=0;ee<Z.added.length;ee++){const _e=Z.added[ee];let De=z.indexOf(_e);if(De===-1){for(let ht=0;ht<V.length;ht++)if(ht>=z.length){z.push(_e),De=ht;break}else if(z[ht]===null){z[ht]=_e,De=ht;break}if(De===-1)break}const Ue=V[De];Ue&&Ue.connect(_e)}}const D=new oe,ue=new oe;function se(Z,ee,_e){D.setFromMatrixPosition(ee.matrixWorld),ue.setFromMatrixPosition(_e.matrixWorld);const De=D.distanceTo(ue),Ue=ee.projectionMatrix.elements,ht=_e.projectionMatrix.elements,Gt=Ue[14]/(Ue[10]-1),N=Ue[14]/(Ue[10]+1),Dt=(Ue[9]+1)/Ue[5],ft=(Ue[9]-1)/Ue[5],rt=(Ue[8]-1)/Ue[0],Xe=(ht[8]+1)/ht[0],Nt=Gt*rt,je=Gt*Xe,ut=De/(-rt+Xe),zt=ut*-rt;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(zt),Z.translateZ(ut),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ue[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Bt=Gt+ut,P=N+ut,E=Nt-zt,q=je+(De-zt),fe=Dt*N/P*Bt,me=ft*N/P*Bt;Z.projectionMatrix.makePerspective(E,q,fe,me,Bt,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function I(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let ee=Z.near,_e=Z.far;y.texture!==null&&(y.depthNear>0&&(ee=y.depthNear),y.depthFar>0&&(_e=y.depthFar)),K.near=R.near=C.near=ee,K.far=R.far=C.far=_e,(te!==K.near||de!==K.far)&&(a.updateRenderState({depthNear:K.near,depthFar:K.far}),te=K.near,de=K.far),K.layers.mask=Z.layers.mask|6,C.layers.mask=K.layers.mask&3,R.layers.mask=K.layers.mask&5;const De=Z.parent,Ue=K.cameras;I(K,De);for(let ht=0;ht<Ue.length;ht++)I(Ue[ht],De);Ue.length===2?se(K,C,R):K.projectionMatrix.copy(C.projectionMatrix),Q(Z,K,De)};function Q(Z,ee,_e){_e===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(_e.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=qf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(Z){m=Z,x!==null&&(x.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(Z){return v[Z]};let Ae=null;function Re(Z,ee){if(_=ee.getViewerPose(p||c),T=ee,_!==null){const _e=_.views;S!==null&&(e.setRenderTargetFramebuffer(b,S.framebuffer),e.setRenderTarget(b));let De=!1;_e.length!==K.cameras.length&&(K.cameras.length=0,De=!0);for(let N=0;N<_e.length;N++){const Dt=_e[N];let ft=null;if(S!==null)ft=S.getViewport(Dt);else{const Xe=g.getViewSubImage(x,Dt);ft=Xe.viewport,N===0&&(e.setRenderTargetTextures(b,Xe.colorTexture,Xe.depthStencilTexture),e.setRenderTarget(b))}let rt=H[N];rt===void 0&&(rt=new hi,rt.layers.enable(N),rt.viewport=new Kt,H[N]=rt),rt.matrix.fromArray(Dt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Dt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(ft.x,ft.y,ft.width,ft.height),N===0&&(K.matrix.copy(rt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),De===!0&&K.cameras.push(rt)}const Ue=a.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&A){g=r.getBinding();const N=g.getDepthInformation(_e[0]);N&&N.isValid&&N.texture&&y.init(N,a.renderState)}if(Ue&&Ue.includes("camera-access")&&A){e.state.unbindTexture(),g=r.getBinding();for(let N=0;N<_e.length;N++){const Dt=_e[N].camera;if(Dt){let ft=v[Dt];ft||(ft=new Rg,v[Dt]=ft);const rt=g.getCameraImage(Dt);ft.sourceTexture=rt}}}}for(let _e=0;_e<V.length;_e++){const De=z[_e],Ue=V[_e];De!==null&&Ue!==void 0&&Ue.update(De,ee,p||c)}Ae&&Ae(Z,ee),ee.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ee}),T=null}const Ie=new bg;Ie.setAnimationLoop(Re),this.setAnimationLoop=function(Z){Ae=Z},this.dispose=function(){}}}const Wr=new Xi,pT=new sn;function mT(s,e){function n(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,Mg(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function a(y,v,F,U,b){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),g(y,v)):v.isMeshPhongMaterial?(l(y,v),_(y,v)):v.isMeshStandardMaterial?(l(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,b)):v.isMeshMatcapMaterial?(l(y,v),T(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),A(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(c(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,F,U):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,n(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Fn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,n(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Fn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,n(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,n(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const F=e.get(v),U=F.envMap,b=F.envMapRotation;U&&(y.envMap.value=U,Wr.copy(b),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),y.envMapRotation.value.setFromMatrix4(pT.makeRotationFromEuler(Wr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,y.aoMapTransform))}function c(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,F,U){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*F,y.scale.value=U*.5,v.map&&(y.map.value=v.map,n(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,F){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Fn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=F.texture,y.transmissionSamplerSize.value.set(F.width,F.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,v){v.matcap&&(y.matcap.value=v.matcap)}function A(y,v){const F=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(F.matrixWorld),y.nearDistance.value=F.shadow.camera.near,y.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function gT(s,e,n,r){let a={},l={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,U){const b=U.program;r.uniformBlockBinding(F,b)}function p(F,U){let b=a[F.id];b===void 0&&(T(F),b=_(F),a[F.id]=b,F.addEventListener("dispose",y));const V=U.program;r.updateUBOMapping(F,V);const z=e.render.frame;l[F.id]!==z&&(x(F),l[F.id]=z)}function _(F){const U=g();F.__bindingPointIndex=U;const b=s.createBuffer(),V=F.__size,z=F.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,V,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,b),b}function g(){for(let F=0;F<d;F++)if(c.indexOf(F)===-1)return c.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(F){const U=a[F.id],b=F.uniforms,V=F.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let z=0,k=b.length;z<k;z++){const O=Array.isArray(b[z])?b[z]:[b[z]];for(let C=0,R=O.length;C<R;C++){const H=O[C];if(S(H,z,C,V)===!0){const K=H.__offset,te=Array.isArray(H.value)?H.value:[H.value];let de=0;for(let ae=0;ae<te.length;ae++){const re=te[ae],le=A(re);typeof re=="number"||typeof re=="boolean"?(H.__data[0]=re,s.bufferSubData(s.UNIFORM_BUFFER,K+de,H.__data)):re.isMatrix3?(H.__data[0]=re.elements[0],H.__data[1]=re.elements[1],H.__data[2]=re.elements[2],H.__data[3]=0,H.__data[4]=re.elements[3],H.__data[5]=re.elements[4],H.__data[6]=re.elements[5],H.__data[7]=0,H.__data[8]=re.elements[6],H.__data[9]=re.elements[7],H.__data[10]=re.elements[8],H.__data[11]=0):(re.toArray(H.__data,de),de+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(F,U,b,V){const z=F.value,k=U+"_"+b;if(V[k]===void 0)return typeof z=="number"||typeof z=="boolean"?V[k]=z:V[k]=z.clone(),!0;{const O=V[k];if(typeof z=="number"||typeof z=="boolean"){if(O!==z)return V[k]=z,!0}else if(O.equals(z)===!1)return O.copy(z),!0}return!1}function T(F){const U=F.uniforms;let b=0;const V=16;for(let k=0,O=U.length;k<O;k++){const C=Array.isArray(U[k])?U[k]:[U[k]];for(let R=0,H=C.length;R<H;R++){const K=C[R],te=Array.isArray(K.value)?K.value:[K.value];for(let de=0,ae=te.length;de<ae;de++){const re=te[de],le=A(re),D=b%V,ue=D%le.boundary,se=D+ue;b+=ue,se!==0&&V-se<le.storage&&(b+=V-se),K.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=b,b+=le.storage}}}const z=b%V;return z>0&&(b+=V-z),F.__size=b,F.__cache={},this}function A(F){const U={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(U.boundary=4,U.storage=4):F.isVector2?(U.boundary=8,U.storage=8):F.isVector3||F.isColor?(U.boundary=16,U.storage=12):F.isVector4?(U.boundary=16,U.storage=16):F.isMatrix3?(U.boundary=48,U.storage=48):F.isMatrix4?(U.boundary=64,U.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),U}function y(F){const U=F.target;U.removeEventListener("dispose",y);const b=c.indexOf(U.__bindingPointIndex);c.splice(b,1),s.deleteBuffer(a[U.id]),delete a[U.id],delete l[U.id]}function v(){for(const F in a)s.deleteBuffer(a[F]);c=[],a={},l={}}return{bind:m,update:p,dispose:v}}class vT{constructor(e={}){const{canvas:n=tx(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const T=new Uint32Array(4),A=new Int32Array(4);let y=null,v=null;const F=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let V=!1;this._outputColorSpace=ei;let z=0,k=0,O=null,C=-1,R=null;const H=new Kt,K=new Kt;let te=null;const de=new Ut(0);let ae=0,re=n.width,le=n.height,D=1,ue=null,se=null;const I=new Kt(0,0,re,le),Q=new Kt(0,0,re,le);let Ae=!1;const Re=new wg;let Ie=!1,Z=!1;const ee=new sn,_e=new oe,De=new Kt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Gt(){return O===null?D:1}let N=r;function Dt(w,j){return n.getContext(w,j)}try{const w={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qf}`),n.addEventListener("webglcontextlost",we,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",xe,!1),N===null){const j="webgl2";if(N=Dt(j,w),N===null)throw Dt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ft,rt,Xe,Nt,je,ut,zt,Bt,P,E,q,fe,me,ce,Ze,Te,Be,Qe,Me,Ne,st,$e,be,dt;function G(){ft=new RM(N),ft.init(),$e=new uT(N,ft),rt=new yM(N,ft,e,$e),Xe=new aT(N,ft),rt.reversedDepthBuffer&&x&&Xe.buffers.depth.setReversed(!0),Nt=new PM(N),je=new qE,ut=new lT(N,ft,Xe,je,rt,$e,Nt),zt=new MM(b),Bt=new AM(b),P=new Fx(N),be=new _M(N,P),E=new CM(N,P,Nt,be),q=new LM(N,E,P,Nt),Me=new DM(N,rt,ut),Te=new SM(je),fe=new YE(b,zt,Bt,ft,rt,be,Te),me=new mT(b,je),ce=new KE,Ze=new nT(ft),Qe=new vM(b,zt,Bt,Xe,q,S,m),Be=new sT(b,q,rt),dt=new gT(N,Nt,rt,Xe),Ne=new xM(N,ft,Nt),st=new bM(N,ft,Nt),Nt.programs=fe.programs,b.capabilities=rt,b.extensions=ft,b.properties=je,b.renderLists=ce,b.shadowMap=Be,b.state=Xe,b.info=Nt}G();const ye=new hT(b,N);this.xr=ye,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=ft.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ft.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(w){w!==void 0&&(D=w,this.setSize(re,le,!1))},this.getSize=function(w){return w.set(re,le)},this.setSize=function(w,j,ne=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=w,le=j,n.width=Math.floor(w*D),n.height=Math.floor(j*D),ne===!0&&(n.style.width=w+"px",n.style.height=j+"px"),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(re*D,le*D).floor()},this.setDrawingBufferSize=function(w,j,ne){re=w,le=j,D=ne,n.width=Math.floor(w*ne),n.height=Math.floor(j*ne),this.setViewport(0,0,w,j)},this.getCurrentViewport=function(w){return w.copy(H)},this.getViewport=function(w){return w.copy(I)},this.setViewport=function(w,j,ne,ie){w.isVector4?I.set(w.x,w.y,w.z,w.w):I.set(w,j,ne,ie),Xe.viewport(H.copy(I).multiplyScalar(D).round())},this.getScissor=function(w){return w.copy(Q)},this.setScissor=function(w,j,ne,ie){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,j,ne,ie),Xe.scissor(K.copy(Q).multiplyScalar(D).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(w){Xe.setScissorTest(Ae=w)},this.setOpaqueSort=function(w){ue=w},this.setTransparentSort=function(w){se=w},this.getClearColor=function(w){return w.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(w=!0,j=!0,ne=!0){let ie=0;if(w){let X=!1;if(O!==null){const Se=O.texture.format;X=Se===rd||Se===id||Se===nd}if(X){const Se=O.texture.type,Pe=Se===wi||Se===Qr||Se===Ho||Se===Go||Se===ed||Se===td,Ve=Qe.getClearColor(),Oe=Qe.getClearAlpha(),it=Ve.r,ot=Ve.g,Je=Ve.b;Pe?(T[0]=it,T[1]=ot,T[2]=Je,T[3]=Oe,N.clearBufferuiv(N.COLOR,0,T)):(A[0]=it,A[1]=ot,A[2]=Je,A[3]=Oe,N.clearBufferiv(N.COLOR,0,A))}else ie|=N.COLOR_BUFFER_BIT}j&&(ie|=N.DEPTH_BUFFER_BIT),ne&&(ie|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",we,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),Qe.dispose(),ce.dispose(),Ze.dispose(),je.dispose(),zt.dispose(),Bt.dispose(),q.dispose(),be.dispose(),dt.dispose(),fe.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",pn),ye.removeEventListener("sessionend",es),kn.stop()};function we(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const w=Nt.autoReset,j=Be.enabled,ne=Be.autoUpdate,ie=Be.needsUpdate,X=Be.type;G(),Nt.autoReset=w,Be.enabled=j,Be.autoUpdate=ne,Be.needsUpdate=ie,Be.type=X}function xe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function he(w){const j=w.target;j.removeEventListener("dispose",he),Ye(j)}function Ye(w){ct(w),je.remove(w)}function ct(w){const j=je.get(w).programs;j!==void 0&&(j.forEach(function(ne){fe.releaseProgram(ne)}),w.isShaderMaterial&&fe.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,ne,ie,X,Se){j===null&&(j=Ue);const Pe=X.isMesh&&X.matrixWorld.determinant()<0,Ve=Ri(w,j,ne,ie,X);Xe.setMaterial(ie,Pe);let Oe=ne.index,it=1;if(ie.wireframe===!0){if(Oe=E.getWireframeAttribute(ne),Oe===void 0)return;it=2}const ot=ne.drawRange,Je=ne.attributes.position;let at=ot.start*it,Ct=(ot.start+ot.count)*it;Se!==null&&(at=Math.max(at,Se.start*it),Ct=Math.min(Ct,(Se.start+Se.count)*it)),Oe!==null?(at=Math.max(at,0),Ct=Math.min(Ct,Oe.count)):Je!=null&&(at=Math.max(at,0),Ct=Math.min(Ct,Je.count));const Tt=Ct-at;if(Tt<0||Tt===1/0)return;be.setup(X,ie,Ve,ne,Oe);let Ft,Pt=Ne;if(Oe!==null&&(Ft=P.get(Oe),Pt=st,Pt.setIndex(Ft)),X.isMesh)ie.wireframe===!0?(Xe.setLineWidth(ie.wireframeLinewidth*Gt()),Pt.setMode(N.LINES)):Pt.setMode(N.TRIANGLES);else if(X.isLine){let et=ie.linewidth;et===void 0&&(et=1),Xe.setLineWidth(et*Gt()),X.isLineSegments?Pt.setMode(N.LINES):X.isLineLoop?Pt.setMode(N.LINE_LOOP):Pt.setMode(N.LINE_STRIP)}else X.isPoints?Pt.setMode(N.POINTS):X.isSprite&&Pt.setMode(N.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)jo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))Pt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const et=X._multiDrawStarts,Lt=X._multiDrawCounts,_t=X._multiDrawCount,en=Oe?P.get(Oe).bytesPerElement:1,ii=je.get(ie).currentProgram.getUniforms();for(let En=0;En<_t;En++)ii.setValue(N,"_gl_DrawID",En),Pt.render(et[En]/en,Lt[En])}else if(X.isInstancedMesh)Pt.renderInstances(at,Tt,X.count);else if(ne.isInstancedBufferGeometry){const et=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Lt=Math.min(ne.instanceCount,et);Pt.renderInstances(at,Tt,Lt)}else Pt.render(at,Tt)};function bt(w,j,ne){w.transparent===!0&&w.side===Gi&&w.forceSinglePass===!1?(w.side=Fn,w.needsUpdate=!0,ns(w,j,ne),w.side=Mr,w.needsUpdate=!0,ns(w,j,ne),w.side=Gi):ns(w,j,ne)}this.compile=function(w,j,ne=null){ne===null&&(ne=w),v=Ze.get(ne),v.init(j),U.push(v),ne.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(v.pushLight(X),X.castShadow&&v.pushShadow(X))}),w!==ne&&w.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(v.pushLight(X),X.castShadow&&v.pushShadow(X))}),v.setupLights();const ie=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Se=X.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){const Ve=Se[Pe];bt(Ve,ne,X),ie.add(Ve)}else bt(Se,ne,X),ie.add(Se)}),v=U.pop(),ie},this.compileAsync=function(w,j,ne=null){const ie=this.compile(w,j,ne);return new Promise(X=>{function Se(){if(ie.forEach(function(Pe){je.get(Pe).currentProgram.isReady()&&ie.delete(Pe)}),ie.size===0){X(w);return}setTimeout(Se,10)}ft.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Et=null;function jn(w){Et&&Et(w)}function pn(){kn.stop()}function es(){kn.start()}const kn=new bg;kn.setAnimationLoop(jn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(w){Et=w,ye.setAnimationLoop(w),w===null?kn.stop():kn.start()},ye.addEventListener("sessionstart",pn),ye.addEventListener("sessionend",es),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(j),j=ye.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,j,O),v=Ze.get(w,U.length),v.init(j),U.push(v),ee.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Re.setFromProjectionMatrix(ee,Mi,j.reversedDepth),Z=this.localClippingEnabled,Ie=Te.init(this.clippingPlanes,Z),y=ce.get(w,F.length),y.init(),F.push(y),ye.enabled===!0&&ye.isPresenting===!0){const Se=b.xr.getDepthSensingMesh();Se!==null&&Js(Se,j,-1/0,b.sortObjects)}Js(w,j,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(ue,se),ht=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,ht&&Qe.addToRenderList(y,w),this.info.render.frame++,Ie===!0&&Te.beginShadows();const ne=v.state.shadowsArray;Be.render(ne,w,j),Ie===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=y.opaque,X=y.transmissive;if(v.setupLights(),j.isArrayCamera){const Se=j.cameras;if(X.length>0)for(let Pe=0,Ve=Se.length;Pe<Ve;Pe++){const Oe=Se[Pe];Er(ie,X,w,Oe)}ht&&Qe.render(w);for(let Pe=0,Ve=Se.length;Pe<Ve;Pe++){const Oe=Se[Pe];ji(y,w,Oe,Oe.viewport)}}else X.length>0&&Er(ie,X,w,j),ht&&Qe.render(w),ji(y,w,j);O!==null&&k===0&&(ut.updateMultisampleRenderTarget(O),ut.updateRenderTargetMipmap(O)),w.isScene===!0&&w.onAfterRender(b,w,j),be.resetDefaultState(),C=-1,R=null,U.pop(),U.length>0?(v=U[U.length-1],Ie===!0&&Te.setGlobalState(b.clippingPlanes,v.state.camera)):v=null,F.pop(),F.length>0?y=F[F.length-1]:y=null};function Js(w,j,ne,ie){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)ne=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLight)v.pushLight(w),w.castShadow&&v.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Re.intersectsSprite(w)){ie&&De.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ee);const Pe=q.update(w),Ve=w.material;Ve.visible&&y.push(w,Pe,Ve,ne,De.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Re.intersectsObject(w))){const Pe=q.update(w),Ve=w.material;if(ie&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),De.copy(w.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),De.copy(Pe.boundingSphere.center)),De.applyMatrix4(w.matrixWorld).applyMatrix4(ee)),Array.isArray(Ve)){const Oe=Pe.groups;for(let it=0,ot=Oe.length;it<ot;it++){const Je=Oe[it],at=Ve[Je.materialIndex];at&&at.visible&&y.push(w,Pe,at,ne,De.z,Je)}}else Ve.visible&&y.push(w,Pe,Ve,ne,De.z,null)}}const Se=w.children;for(let Pe=0,Ve=Se.length;Pe<Ve;Pe++)Js(Se[Pe],j,ne,ie)}function ji(w,j,ne,ie){const X=w.opaque,Se=w.transmissive,Pe=w.transparent;v.setupLightsView(ne),Ie===!0&&Te.setGlobalState(b.clippingPlanes,ne),ie&&Xe.viewport(H.copy(ie)),X.length>0&&Ai(X,j,ne),Se.length>0&&Ai(Se,j,ne),Pe.length>0&&Ai(Pe,j,ne),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Er(w,j,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ie.id]===void 0&&(v.state.transmissionRenderTarget[ie.id]=new ti(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Ks:wi,minFilter:Kr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const Se=v.state.transmissionRenderTarget[ie.id],Pe=ie.viewport||H;Se.setSize(Pe.z*b.transmissionResolutionScale,Pe.w*b.transmissionResolutionScale);const Ve=b.getRenderTarget(),Oe=b.getActiveCubeFace(),it=b.getActiveMipmapLevel();b.setRenderTarget(Se),b.getClearColor(de),ae=b.getClearAlpha(),ae<1&&b.setClearColor(16777215,.5),b.clear(),ht&&Qe.render(ne);const ot=b.toneMapping;b.toneMapping=Sr;const Je=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),v.setupLightsView(ie),Ie===!0&&Te.setGlobalState(b.clippingPlanes,ie),Ai(w,ne,ie),ut.updateMultisampleRenderTarget(Se),ut.updateRenderTargetMipmap(Se),ft.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Ct=0,Tt=j.length;Ct<Tt;Ct++){const Ft=j[Ct],Pt=Ft.object,et=Ft.geometry,Lt=Ft.material,_t=Ft.group;if(Lt.side===Gi&&Pt.layers.test(ie.layers)){const en=Lt.side;Lt.side=Fn,Lt.needsUpdate=!0,ts(Pt,ne,ie,et,Lt,_t),Lt.side=en,Lt.needsUpdate=!0,at=!0}}at===!0&&(ut.updateMultisampleRenderTarget(Se),ut.updateRenderTargetMipmap(Se))}b.setRenderTarget(Ve,Oe,it),b.setClearColor(de,ae),Je!==void 0&&(ie.viewport=Je),b.toneMapping=ot}function Ai(w,j,ne){const ie=j.isScene===!0?j.overrideMaterial:null;for(let X=0,Se=w.length;X<Se;X++){const Pe=w[X],Ve=Pe.object,Oe=Pe.geometry,it=Pe.group;let ot=Pe.material;ot.allowOverride===!0&&ie!==null&&(ot=ie),Ve.layers.test(ne.layers)&&ts(Ve,j,ne,Oe,ot,it)}}function ts(w,j,ne,ie,X,Se){w.onBeforeRender(b,j,ne,ie,X,Se),w.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(b,j,ne,ie,w,Se),X.transparent===!0&&X.side===Gi&&X.forceSinglePass===!1?(X.side=Fn,X.needsUpdate=!0,b.renderBufferDirect(ne,j,ie,X,w,Se),X.side=Mr,X.needsUpdate=!0,b.renderBufferDirect(ne,j,ie,X,w,Se),X.side=Gi):b.renderBufferDirect(ne,j,ie,X,w,Se),w.onAfterRender(b,j,ne,ie,X,Se)}function ns(w,j,ne){j.isScene!==!0&&(j=Ue);const ie=je.get(w),X=v.state.lights,Se=v.state.shadowsArray,Pe=X.state.version,Ve=fe.getParameters(w,X.state,Se,j,ne),Oe=fe.getProgramCacheKey(Ve);let it=ie.programs;ie.environment=w.isMeshStandardMaterial?j.environment:null,ie.fog=j.fog,ie.envMap=(w.isMeshStandardMaterial?Bt:zt).get(w.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,it===void 0&&(w.addEventListener("dispose",he),it=new Map,ie.programs=it);let ot=it.get(Oe);if(ot!==void 0){if(ie.currentProgram===ot&&ie.lightsStateVersion===Pe)return Jo(w,Ve),ot}else Ve.uniforms=fe.getUniforms(w),w.onBeforeCompile(Ve,b),ot=fe.acquireProgram(Ve,Oe),it.set(Oe,ot),ie.uniforms=Ve.uniforms;const Je=ie.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Je.clippingPlanes=Te.uniform),Jo(w,Ve),ie.needsLights=ta(w),ie.lightsStateVersion=Pe,ie.needsLights&&(Je.ambientLightColor.value=X.state.ambient,Je.lightProbe.value=X.state.probe,Je.directionalLights.value=X.state.directional,Je.directionalLightShadows.value=X.state.directionalShadow,Je.spotLights.value=X.state.spot,Je.spotLightShadows.value=X.state.spotShadow,Je.rectAreaLights.value=X.state.rectArea,Je.ltc_1.value=X.state.rectAreaLTC1,Je.ltc_2.value=X.state.rectAreaLTC2,Je.pointLights.value=X.state.point,Je.pointLightShadows.value=X.state.pointShadow,Je.hemisphereLights.value=X.state.hemi,Je.directionalShadowMap.value=X.state.directionalShadowMap,Je.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Je.spotShadowMap.value=X.state.spotShadowMap,Je.spotLightMatrix.value=X.state.spotLightMatrix,Je.spotLightMap.value=X.state.spotLightMap,Je.pointShadowMap.value=X.state.pointShadowMap,Je.pointShadowMatrix.value=X.state.pointShadowMatrix),ie.currentProgram=ot,ie.uniformsList=null,ot}function Qo(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=Ul.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function Jo(w,j){const ne=je.get(w);ne.outputColorSpace=j.outputColorSpace,ne.batching=j.batching,ne.batchingColor=j.batchingColor,ne.instancing=j.instancing,ne.instancingColor=j.instancingColor,ne.instancingMorph=j.instancingMorph,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function Ri(w,j,ne,ie,X){j.isScene!==!0&&(j=Ue),ut.resetTextureUnits();const Se=j.fog,Pe=ie.isMeshStandardMaterial?j.environment:null,Ve=O===null?b.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:js,Oe=(ie.isMeshStandardMaterial?Bt:zt).get(ie.envMap||Pe),it=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,ot=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Je=!!ne.morphAttributes.position,at=!!ne.morphAttributes.normal,Ct=!!ne.morphAttributes.color;let Tt=Sr;ie.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Tt=b.toneMapping);const Ft=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Pt=Ft!==void 0?Ft.length:0,et=je.get(ie),Lt=v.state.lights;if(Ie===!0&&(Z===!0||w!==R)){const qt=w===R&&ie.id===C;Te.setState(ie,w,qt)}let _t=!1;ie.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Lt.state.version||et.outputColorSpace!==Ve||X.isBatchedMesh&&et.batching===!1||!X.isBatchedMesh&&et.batching===!0||X.isBatchedMesh&&et.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&et.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&et.instancing===!1||!X.isInstancedMesh&&et.instancing===!0||X.isSkinnedMesh&&et.skinning===!1||!X.isSkinnedMesh&&et.skinning===!0||X.isInstancedMesh&&et.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&et.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&et.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&et.instancingMorph===!1&&X.morphTexture!==null||et.envMap!==Oe||ie.fog===!0&&et.fog!==Se||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Te.numPlanes||et.numIntersection!==Te.numIntersection)||et.vertexAlphas!==it||et.vertexTangents!==ot||et.morphTargets!==Je||et.morphNormals!==at||et.morphColors!==Ct||et.toneMapping!==Tt||et.morphTargetsCount!==Pt)&&(_t=!0):(_t=!0,et.__version=ie.version);let en=et.currentProgram;_t===!0&&(en=ns(ie,j,X));let ii=!1,En=!1,Tr=!1;const Ot=en.getUniforms(),Tn=et.uniforms;if(Xe.useProgram(en.program)&&(ii=!0,En=!0,Tr=!0),ie.id!==C&&(C=ie.id,En=!0),ii||R!==w){Xe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ot.setValue(N,"projectionMatrix",w.projectionMatrix),Ot.setValue(N,"viewMatrix",w.matrixWorldInverse);const gn=Ot.map.cameraPosition;gn!==void 0&&gn.setValue(N,_e.setFromMatrixPosition(w.matrixWorld)),rt.logarithmicDepthBuffer&&Ot.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ot.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,En=!0,Tr=!0)}if(X.isSkinnedMesh){Ot.setOptional(N,X,"bindMatrix"),Ot.setOptional(N,X,"bindMatrixInverse");const qt=X.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Ot.setValue(N,"boneTexture",qt.boneTexture,ut))}X.isBatchedMesh&&(Ot.setOptional(N,X,"batchingTexture"),Ot.setValue(N,"batchingTexture",X._matricesTexture,ut),Ot.setOptional(N,X,"batchingIdTexture"),Ot.setValue(N,"batchingIdTexture",X._indirectTexture,ut),Ot.setOptional(N,X,"batchingColorTexture"),X._colorsTexture!==null&&Ot.setValue(N,"batchingColorTexture",X._colorsTexture,ut));const mn=ne.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Me.update(X,ne,en),(En||et.receiveShadow!==X.receiveShadow)&&(et.receiveShadow=X.receiveShadow,Ot.setValue(N,"receiveShadow",X.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Tn.envMap.value=Oe,Tn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&j.environment!==null&&(Tn.envMapIntensity.value=j.environmentIntensity),En&&(Ot.setValue(N,"toneMappingExposure",b.toneMappingExposure),et.needsLights&&ea(Tn,Tr),Se&&ie.fog===!0&&me.refreshFogUniforms(Tn,Se),me.refreshMaterialUniforms(Tn,ie,D,le,v.state.transmissionRenderTarget[w.id]),Ul.upload(N,Qo(et),Tn,ut)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Ul.upload(N,Qo(et),Tn,ut),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ot.setValue(N,"center",X.center),Ot.setValue(N,"modelViewMatrix",X.modelViewMatrix),Ot.setValue(N,"normalMatrix",X.normalMatrix),Ot.setValue(N,"modelMatrix",X.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const qt=ie.uniformsGroups;for(let gn=0,wr=qt.length;gn<wr;gn++){const xt=qt[gn];dt.update(xt,en),dt.bind(xt,en)}}return en}function ea(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function ta(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(w,j,ne){const ie=je.get(w);ie.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),je.get(w.texture).__webglTexture=j,je.get(w.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ne,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,j){const ne=je.get(w);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0};const Vl=N.createFramebuffer();this.setRenderTarget=function(w,j=0,ne=0){O=w,z=j,k=ne;let ie=!0,X=null,Se=!1,Pe=!1;if(w){const Oe=je.get(w);if(Oe.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(N.FRAMEBUFFER,null),ie=!1;else if(Oe.__webglFramebuffer===void 0)ut.setupRenderTarget(w);else if(Oe.__hasExternalTextures)ut.rebindTextures(w,je.get(w.texture).__webglTexture,je.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Je=w.depthTexture;if(Oe.__boundDepthTexture!==Je){if(Je!==null&&je.has(Je)&&(w.width!==Je.image.width||w.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(w)}}const it=w.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Pe=!0);const ot=je.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ot[j])?X=ot[j][ne]:X=ot[j],Se=!0):w.samples>0&&ut.useMultisampledRTT(w)===!1?X=je.get(w).__webglMultisampledFramebuffer:Array.isArray(ot)?X=ot[ne]:X=ot,H.copy(w.viewport),K.copy(w.scissor),te=w.scissorTest}else H.copy(I).multiplyScalar(D).floor(),K.copy(Q).multiplyScalar(D).floor(),te=Ae;if(ne!==0&&(X=Vl),Xe.bindFramebuffer(N.FRAMEBUFFER,X)&&ie&&Xe.drawBuffers(w,X),Xe.viewport(H),Xe.scissor(K),Xe.setScissorTest(te),Se){const Oe=je.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+j,Oe.__webglTexture,ne)}else if(Pe){const Oe=j;for(let it=0;it<w.textures.length;it++){const ot=je.get(w.textures[it]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+it,ot.__webglTexture,ne,Oe)}}else if(w!==null&&ne!==0){const Oe=je.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Oe.__webglTexture,ne)}C=-1},this.readRenderTargetPixels=function(w,j,ne,ie,X,Se,Pe,Ve=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=je.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe){Xe.bindFramebuffer(N.FRAMEBUFFER,Oe);try{const it=w.textures[Ve],ot=it.format,Je=it.type;if(!rt.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-ie&&ne>=0&&ne<=w.height-X&&(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ve),N.readPixels(j,ne,ie,X,$e.convert(ot),$e.convert(Je),Se))}finally{const it=O!==null?je.get(O).__webglFramebuffer:null;Xe.bindFramebuffer(N.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(w,j,ne,ie,X,Se,Pe,Ve=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=je.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe)if(j>=0&&j<=w.width-ie&&ne>=0&&ne<=w.height-X){Xe.bindFramebuffer(N.FRAMEBUFFER,Oe);const it=w.textures[Ve],ot=it.format,Je=it.type;if(!rt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,at),N.bufferData(N.PIXEL_PACK_BUFFER,Se.byteLength,N.STREAM_READ),w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ve),N.readPixels(j,ne,ie,X,$e.convert(ot),$e.convert(Je),0);const Ct=O!==null?je.get(O).__webglFramebuffer:null;Xe.bindFramebuffer(N.FRAMEBUFFER,Ct);const Tt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await nx(N,Tt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,at),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Se),N.deleteBuffer(at),N.deleteSync(Tt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,j=null,ne=0){const ie=Math.pow(2,-ne),X=Math.floor(w.image.width*ie),Se=Math.floor(w.image.height*ie),Pe=j!==null?j.x:0,Ve=j!==null?j.y:0;ut.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,ne,0,0,Pe,Ve,X,Se),Xe.unbindTexture()};const na=N.createFramebuffer(),ia=N.createFramebuffer();this.copyTextureToTexture=function(w,j,ne=null,ie=null,X=0,Se=null){Se===null&&(X!==0?(jo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=X,X=0):Se=0);let Pe,Ve,Oe,it,ot,Je,at,Ct,Tt;const Ft=w.isCompressedTexture?w.mipmaps[Se]:w.image;if(ne!==null)Pe=ne.max.x-ne.min.x,Ve=ne.max.y-ne.min.y,Oe=ne.isBox3?ne.max.z-ne.min.z:1,it=ne.min.x,ot=ne.min.y,Je=ne.isBox3?ne.min.z:0;else{const mn=Math.pow(2,-X);Pe=Math.floor(Ft.width*mn),Ve=Math.floor(Ft.height*mn),w.isDataArrayTexture?Oe=Ft.depth:w.isData3DTexture?Oe=Math.floor(Ft.depth*mn):Oe=1,it=0,ot=0,Je=0}ie!==null?(at=ie.x,Ct=ie.y,Tt=ie.z):(at=0,Ct=0,Tt=0);const Pt=$e.convert(j.format),et=$e.convert(j.type);let Lt;j.isData3DTexture?(ut.setTexture3D(j,0),Lt=N.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ut.setTexture2DArray(j,0),Lt=N.TEXTURE_2D_ARRAY):(ut.setTexture2D(j,0),Lt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,j.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,j.unpackAlignment);const _t=N.getParameter(N.UNPACK_ROW_LENGTH),en=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ii=N.getParameter(N.UNPACK_SKIP_PIXELS),En=N.getParameter(N.UNPACK_SKIP_ROWS),Tr=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ft.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ft.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,it),N.pixelStorei(N.UNPACK_SKIP_ROWS,ot),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Je);const Ot=w.isDataArrayTexture||w.isData3DTexture,Tn=j.isDataArrayTexture||j.isData3DTexture;if(w.isDepthTexture){const mn=je.get(w),qt=je.get(j),gn=je.get(mn.__renderTarget),wr=je.get(qt.__renderTarget);Xe.bindFramebuffer(N.READ_FRAMEBUFFER,gn.__webglFramebuffer),Xe.bindFramebuffer(N.DRAW_FRAMEBUFFER,wr.__webglFramebuffer);for(let xt=0;xt<Oe;xt++)Ot&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,je.get(w).__webglTexture,X,Je+xt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,je.get(j).__webglTexture,Se,Tt+xt)),N.blitFramebuffer(it,ot,Pe,Ve,at,Ct,Pe,Ve,N.DEPTH_BUFFER_BIT,N.NEAREST);Xe.bindFramebuffer(N.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||je.has(w)){const mn=je.get(w),qt=je.get(j);Xe.bindFramebuffer(N.READ_FRAMEBUFFER,na),Xe.bindFramebuffer(N.DRAW_FRAMEBUFFER,ia);for(let gn=0;gn<Oe;gn++)Ot?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,mn.__webglTexture,X,Je+gn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,mn.__webglTexture,X),Tn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,qt.__webglTexture,Se,Tt+gn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,qt.__webglTexture,Se),X!==0?N.blitFramebuffer(it,ot,Pe,Ve,at,Ct,Pe,Ve,N.COLOR_BUFFER_BIT,N.NEAREST):Tn?N.copyTexSubImage3D(Lt,Se,at,Ct,Tt+gn,it,ot,Pe,Ve):N.copyTexSubImage2D(Lt,Se,at,Ct,it,ot,Pe,Ve);Xe.bindFramebuffer(N.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Tn?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Lt,Se,at,Ct,Tt,Pe,Ve,Oe,Pt,et,Ft.data):j.isCompressedArrayTexture?N.compressedTexSubImage3D(Lt,Se,at,Ct,Tt,Pe,Ve,Oe,Pt,Ft.data):N.texSubImage3D(Lt,Se,at,Ct,Tt,Pe,Ve,Oe,Pt,et,Ft):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Se,at,Ct,Pe,Ve,Pt,et,Ft.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Se,at,Ct,Ft.width,Ft.height,Pt,Ft.data):N.texSubImage2D(N.TEXTURE_2D,Se,at,Ct,Pe,Ve,Pt,et,Ft);N.pixelStorei(N.UNPACK_ROW_LENGTH,_t),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,en),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ii),N.pixelStorei(N.UNPACK_SKIP_ROWS,En),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Tr),Se===0&&j.generateMipmaps&&N.generateMipmap(Lt),Xe.unbindTexture()},this.initRenderTarget=function(w){je.get(w).__webglFramebuffer===void 0&&ut.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ut.setTextureCube(w,0):w.isData3DTexture?ut.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ut.setTexture2DArray(w,0):ut.setTexture2D(w,0),Xe.unbindTexture()},this.resetState=function(){z=0,k=0,O=null,Xe.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Rt._getUnpackColorSpace()}}const bl=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,_T=`
  uniform sampler2D velocityTexture;
  uniform sampler2D pressureTexture;
  uniform vec2 resolution;
  uniform vec2 mousePos;
  uniform vec2 mouseVelocity;
  uniform float mouseInfluence;
  uniform float mouseSpeed;
  uniform float time;
  uniform float viscosity;
  varying vec2 vUv;

  void main() {
    vec2 texel = 1.0 / resolution;
    
    // Sample neighboring velocity values
    vec2 velocity = texture2D(velocityTexture, vUv).xy;
    
    // Mouse interaction - enhanced force injection
    vec2 mouseDir = vUv - mousePos;
    float mouseDist = length(mouseDir);
    
    if (mouseDist < mouseInfluence) {
      float influence = 1.0 - (mouseDist / mouseInfluence);
      influence = influence * influence; // Quadratic falloff for sharper boundaries
      
      // Speed-dependent force multiplier
      float speedMultiplier = 1.0 + mouseSpeed * 8.0; // Much stronger speed response
      
      // Create powerful vorticity around mouse
      vec2 tangent = vec2(-mouseDir.y, mouseDir.x);
      velocity += tangent * influence * speedMultiplier * 0.08; // 4x stronger
      
      // Add directional force based on mouse movement
      velocity += mouseVelocity * influence * speedMultiplier * 0.12;
      
      // Radial pressure waves for ripple effect
      float ripple = sin(mouseDist * 40.0 - time * 8.0) * 0.5 + 0.5;
      velocity += normalize(mouseDir) * influence * ripple * speedMultiplier * 0.06;
      
      // Surface tension simulation - repel when very close
      if (mouseDist < mouseInfluence * 0.3) {
        float repel = (mouseInfluence * 0.3 - mouseDist) / (mouseInfluence * 0.3);
        velocity += normalize(mouseDir) * repel * speedMultiplier * 0.15;
      }
    }
    
    // Enhanced self-advection with turbulence
    vec2 coord = vUv - velocity * texel * 0.8; // Stronger advection
    vec2 selfAdvected = texture2D(velocityTexture, coord).xy;
    velocity = mix(velocity, selfAdvected, 0.92);
    
    // Add subtle turbulence for organic motion
    float noise = sin(vUv.x * 15.0 + time) * cos(vUv.y * 12.0 + time * 0.7) * 0.002;
    velocity += vec2(noise, -noise);
    
    // Apply viscosity with speed-dependent damping
    float dynamicViscosity = viscosity * (1.0 + mouseSpeed * 0.5);
    velocity *= (1.0 - dynamicViscosity);
    
    gl_FragColor = vec4(velocity, 0.0, 1.0);
  }
`,xT=`
  uniform sampler2D pressureTexture;
  uniform sampler2D velocityTexture;
  uniform vec2 resolution;
  varying vec2 vUv;

  void main() {
    vec2 texel = 1.0 / resolution;
    
    // Jacobi iteration for pressure solving
    float pressure = texture2D(pressureTexture, vUv).x;
    
    float left = texture2D(pressureTexture, vUv - vec2(texel.x, 0.0)).x;
    float right = texture2D(pressureTexture, vUv + vec2(texel.x, 0.0)).x;
    float bottom = texture2D(pressureTexture, vUv - vec2(0.0, texel.y)).x;
    float top = texture2D(pressureTexture, vUv + vec2(0.0, texel.y)).x;
    
    // Divergence of velocity field
    vec2 velLeft = texture2D(velocityTexture, vUv - vec2(texel.x, 0.0)).xy;
    vec2 velRight = texture2D(velocityTexture, vUv + vec2(texel.x, 0.0)).xy;
    vec2 velBottom = texture2D(velocityTexture, vUv - vec2(0.0, texel.y)).xy;
    vec2 velTop = texture2D(velocityTexture, vUv + vec2(0.0, texel.y)).xy;
    
    float divergence = 0.5 * ((velRight.x - velLeft.x) + (velTop.y - velBottom.y));
    
    pressure = (left + right + bottom + top - divergence) * 0.25;
    
    gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
  }
`,yT=`
  uniform sampler2D velocityTexture;
  uniform sampler2D pressureTexture;
  uniform vec2 resolution;
  uniform vec2 mousePos;
  uniform vec2 mouseVelocity;
  uniform float mouseSpeed;
  uniform float time;
  uniform float mouseInfluence;
  uniform float aspectRatio; // Screen aspect ratio for perfect circles
  varying vec2 vUv;

  // Enhanced noise functions
  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for(int i = 0; i < 8; i++) { // More octaves for detail
      value += amplitude * noise(p);
      p *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  // Perfect circular SDF that accounts for aspect ratio to prevent warping
  float dropletSDF(vec2 p, vec2 center, float radius) {
    // Convert to aspect ratio corrected space for perfect circles
    vec2 aspectCorrectedP = p;
    vec2 aspectCorrectedCenter = center;
    
    // Apply aspect ratio correction - make coordinates square
    if (aspectRatio > 1.0) {
      // Wide screen - compress X
      aspectCorrectedP.x *= aspectRatio;
      aspectCorrectedCenter.x *= aspectRatio;
    } else {
      // Tall screen - compress Y  
      aspectCorrectedP.y /= aspectRatio;
      aspectCorrectedCenter.y /= aspectRatio;
    }
    
    return length(aspectCorrectedP - aspectCorrectedCenter) - radius;
  }

  void main() {
    vec2 velocity = texture2D(velocityTexture, vUv).xy;
    float pressure = texture2D(pressureTexture, vUv).x;
    
    // Balanced background with dynamic elements
    vec3 color = vec3(0.04, 0.06, 0.10);
    
    // Displacement distortion based on velocity field
    vec2 distortedUV = vUv + velocity * 0.05;
    
    // Generate 2D droplets with mouse interaction
    for(int i = 0; i < 8; i++) { // Fewer droplets for cleaner look
      float fi = float(i);
      
      // Simple 2D movement pattern
      vec2 basePos = vec2(
        0.5 + 0.25 * sin(time * 0.3 + fi * 1.5),
        0.5 + 0.25 * cos(time * 0.2 + fi * 1.2)
      );
      
      // Mouse interaction - repulsion and attraction
      vec2 mouseDir = basePos - mousePos;
      float mouseDist = length(mouseDir);
      if (mouseDist < mouseInfluence * 1.2) {
        float influence = (mouseInfluence * 1.2 - mouseDist) / (mouseInfluence * 1.2);
        // Simple 2D displacement
        basePos += normalize(mouseDir) * influence * 0.2;
      }
      
      // Apply 2D velocity field influence (flattened)
      vec2 dropletPos = basePos + velocity * 0.08;
      float radius = 0.05 + 0.02 * sin(time * 0.6 + fi);
      
      float sdf = dropletSDF(distortedUV, dropletPos, radius);
      
      // Simple droplet rendering without complex lighting
      if(sdf < 0.02) {
        // Simple gradient based on distance from center
        float gradient = smoothstep(0.02, -0.01, sdf);
        
        // Clean mercury colors without velocity dependency
        vec3 baseColor = vec3(0.12, 0.14, 0.18);
        vec3 highlight = vec3(0.4, 0.45, 0.55);
        
        // Aspect-corrected radial gradient for consistent circular appearance
        vec2 aspectCorrectedUV = distortedUV;
        vec2 aspectCorrectedDropletPos = dropletPos;
        
        if (aspectRatio > 1.0) {
          aspectCorrectedUV.x *= aspectRatio;
          aspectCorrectedDropletPos.x *= aspectRatio;
        } else {
          aspectCorrectedUV.y /= aspectRatio;
          aspectCorrectedDropletPos.y /= aspectRatio;
        }
        
        float radial = 1.0 - length(aspectCorrectedUV - aspectCorrectedDropletPos) / radius;
        color = mix(baseColor, highlight, radial * gradient);
      }
    }
    
    // Balanced velocity visualization
    float velocityMagnitude = length(velocity);
    vec3 velocityColor = vec3(
      velocity.x * 0.35 + 0.12, 
      velocityMagnitude * 0.45, 
      velocity.y * 0.35 + 0.18
    ) * velocityMagnitude * 3.2;
    color += velocityColor;
    
    // Balanced pressure field visualization
    color += vec3(0.08, 0.12, 0.16) * abs(pressure) * 2.2;
    
    // Enhanced mouse interaction effects
    float mouseDist = length(vUv - mousePos);
    if(mouseDist < mouseInfluence) {
      float influence = 1.0 - (mouseDist / mouseInfluence);
      
      // Subtle reactive glow trails
      vec3 mouseGlow = vec3(0.12, 0.18, 0.25) * influence * influence;
      mouseGlow += vec3(0.15, 0.2, 0.28) * mouseSpeed * influence * 0.5; // Reduced brightness
      
      // Subtle pressure rings
      float rings = sin(mouseDist * 60.0 - time * 10.0) * 0.3 + 0.7;
      mouseGlow += vec3(0.08, 0.12, 0.16) * rings * influence * mouseSpeed * 0.5;
      
      color += mouseGlow;
      
      // Displacement distortion near cursor
      vec2 distortion = normalize(vUv - mousePos) * influence * mouseSpeed * 0.02;
      color += texture2D(velocityTexture, vUv + distortion).xyz * 0.1;
    }
    
    // Enhanced organic texture with movement
    float noiseValue = fbm(vUv * 12.0 + velocity * 2.0 + time * 0.2);
    color += vec3(noiseValue * 0.05);
    
    // Subtle dynamic vignette
    float vignette = smoothstep(0.8, 0.2, length(vUv - 0.5));
    vignette += mouseSpeed * 0.05; // Much less mouse influence
    color *= vignette * 0.75 + 0.35;
    
    gl_FragColor = vec4(color, 1.0);
  }
`,ST=`
  uniform sampler2D inputTexture;
  uniform vec2 resolution;
  uniform vec2 mousePos;
  uniform float mouseSpeed;
  uniform float time;
  varying vec2 vUv;

  void main() {
    vec2 texel = 1.0 / resolution;
    
    float distFromCenter = length(vUv - 0.5);
    float mouseDist = length(vUv - mousePos);
    
    // Sample color normally without chromatic aberration
    vec3 color = texture2D(inputTexture, vUv).rgb;
    
    // Enhanced bloom with multiple passes
    vec3 bloom = vec3(0.0);
    float bloomRadius = 2.0 + mouseSpeed * 1.5;
    
    for(int i = -3; i <= 3; i++) {
      for(int j = -3; j <= 3; j++) {
        vec2 offset = vec2(float(i), float(j)) * texel * bloomRadius;
        vec3 texSample = texture2D(inputTexture, vUv + offset).rgb;
        float weight = 1.0 / (1.0 + length(offset) * 80.0);
        bloom += texSample * weight;
      }
    }
    bloom /= 49.0;
    
    // Balanced bloom mix
    color = mix(color, bloom, 0.35 + mouseSpeed * 0.05);
    
    // Subtle film grain with movement
    float grain = (fract(sin(dot(vUv + time * 0.1, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.03;
    grain += (fract(sin(dot(vUv.yx + mouseSpeed, vec2(78.233, 12.9898))) * 43758.5453) - 0.5) * 0.02;
    color += grain;
    
    // Moderate brightness enhancement
    color *= 1.3 + mouseSpeed * 0.1;
    
    // Balanced contrast and saturation
    color = (color - 0.4) * (1.35 + mouseSpeed * 0.08) + 0.5;
    
    // Color grading for balanced look
    color.r = pow(color.r, 0.9);
    color.g = pow(color.g, 0.92);
    color.b = pow(color.b, 0.98);
    
    // Balanced vignette with mouse interaction
    float vignette = 1.0 - distFromCenter * 0.6;
    vignette += mouseSpeed * 0.05;
    color *= vignette;
    
    gl_FragColor = vec4(color, 1.0);
  }
`;function MT(){const s=St.useRef(null),e=St.useRef(),n=St.useRef(),r=St.useRef({x:0,y:0}),a=St.useRef({x:0,y:0}),l=St.useRef({x:0,y:0}),c=St.useRef(0),[d,m]=St.useState(!1);return St.useEffect(()=>{if(!s.current)return;const p=new Cx,_=new Cg(-1,1,1,-1,0,1);try{const g=new vT({antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1,alpha:!1});g.setSize(window.innerWidth,window.innerHeight),g.setPixelRatio(Math.min(window.devicePixelRatio,2));const x=g.getContext(),S=x.getExtension("OES_texture_float")||x.getExtension("WEBGL_color_buffer_float"),T=x.getExtension("OES_texture_half_float")||x.getExtension("WEBGL_color_buffer_float");let A=wi,y="standard";S?(A=Si,y="high"):T&&(A=Ks,y="medium"),console.log(`Fluid simulation initialized with ${y} precision`),s.current.appendChild(g.domElement),e.current=p,n.current=g;const v=new ti(512,512,{minFilter:Jt,magFilter:Jt,format:Cn,type:A,generateMipmaps:!1,depthBuffer:!1,stencilBuffer:!1}),F=new ti(512,512,{minFilter:Jt,magFilter:Jt,format:Cn,type:A,generateMipmaps:!1,depthBuffer:!1,stencilBuffer:!1}),U=new ti(512,512,{minFilter:Jt,magFilter:Jt,format:Cn,type:A,generateMipmaps:!1,depthBuffer:!1,stencilBuffer:!1}),b=new ti(512,512,{minFilter:Jt,magFilter:Jt,format:Cn,type:A,generateMipmaps:!1,depthBuffer:!1,stencilBuffer:!1}),V=new ti(window.innerWidth,window.innerHeight,{minFilter:Jt,magFilter:Jt}),k={high:{mouseInfluence:.2,viscosity:.002,iterations:5,renderInfluence:.25},medium:{mouseInfluence:.15,viscosity:.004,iterations:4,renderInfluence:.2},standard:{mouseInfluence:.1,viscosity:.008,iterations:3,renderInfluence:.15}}[y],O=new ni({vertexShader:bl,fragmentShader:_T,uniforms:{velocityTexture:{value:null},pressureTexture:{value:null},resolution:{value:new yt(512,512)},mousePos:{value:new yt(.5,.5)},mouseVelocity:{value:new yt(0,0)},mouseInfluence:{value:k.mouseInfluence},mouseSpeed:{value:0},time:{value:0},viscosity:{value:k.viscosity}}}),C=new ni({vertexShader:bl,fragmentShader:xT,uniforms:{pressureTexture:{value:null},velocityTexture:{value:null},resolution:{value:new yt(512,512)}}}),R=new ni({vertexShader:bl,fragmentShader:yT,uniforms:{velocityTexture:{value:null},pressureTexture:{value:null},resolution:{value:new yt(window.innerWidth,window.innerHeight)},mousePos:{value:new yt(.5,.5)},mouseVelocity:{value:new yt(0,0)},mouseSpeed:{value:0},mouseInfluence:{value:k.renderInfluence},time:{value:0},aspectRatio:{value:window.innerWidth/window.innerHeight}}}),H=new ni({vertexShader:bl,fragmentShader:ST,uniforms:{inputTexture:{value:null},resolution:{value:new yt(window.innerWidth,window.innerHeight)},mousePos:{value:new yt(.5,.5)},mouseSpeed:{value:0},time:{value:0}}}),K=new Zo(2,2),te=new Ei(K,O),de=Re=>{const Ie=Re.clientX/window.innerWidth,Z=1-Re.clientY/window.innerHeight;l.current.x=(Ie-r.current.x)*60,l.current.y=(Z-r.current.y)*60,c.current=Math.sqrt(l.current.x*l.current.x+l.current.y*l.current.y),c.current=Math.min(c.current*.5,5),a.current.x=r.current.x,a.current.y=r.current.y,r.current.x=Ie,r.current.y=Z};window.addEventListener("mousemove",de,{passive:!0});let ae=0,re=v,le=F,D=U,ue=b,se,I=!0;const Q=()=>{if(I)try{ae++;const Re=ae*.016;l.current.x*=.95,l.current.y*=.95,c.current*=.98,O.uniforms.time.value=Re,O.uniforms.mousePos.value.set(r.current.x,r.current.y),O.uniforms.mouseVelocity.value.set(l.current.x,l.current.y),O.uniforms.mouseSpeed.value=c.current,R.uniforms.time.value=Re,R.uniforms.mousePos.value.set(r.current.x,r.current.y),R.uniforms.mouseVelocity.value.set(l.current.x,l.current.y),R.uniforms.mouseSpeed.value=c.current,R.uniforms.aspectRatio.value=window.innerWidth/window.innerHeight,H.uniforms.time.value=Re,H.uniforms.mousePos.value.set(r.current.x,r.current.y),H.uniforms.mouseSpeed.value=c.current,O.uniforms.velocityTexture.value=le.texture,O.uniforms.pressureTexture.value=ue.texture,te.material=O,g.setRenderTarget(re),g.render(p,_);for(let Ie=0;Ie<k.iterations;Ie++)C.uniforms.pressureTexture.value=ue.texture,C.uniforms.velocityTexture.value=re.texture,te.material=C,g.setRenderTarget(D),g.render(p,_),[D,ue]=[ue,D];R.uniforms.velocityTexture.value=re.texture,R.uniforms.pressureTexture.value=D.texture,te.material=R,g.setRenderTarget(V),g.render(p,_),H.uniforms.inputTexture.value=V.texture,te.material=H,g.setRenderTarget(null),g.render(p,_),[re,le]=[le,re],se=requestAnimationFrame(Q)}catch(Re){console.error("Animation frame error:",Re),I=!1}},Ae=()=>{g.setSize(window.innerWidth,window.innerHeight),R.uniforms.resolution.value.set(window.innerWidth,window.innerHeight),R.uniforms.aspectRatio.value=window.innerWidth/window.innerHeight,H.uniforms.resolution.value.set(window.innerWidth,window.innerHeight),V.setSize(window.innerWidth,window.innerHeight),r.current={x:.5,y:.5},l.current={x:0,y:0},c.current=0};return window.addEventListener("resize",Ae),p.add(te),Q(),m(!0),()=>{I=!1,se&&cancelAnimationFrame(se),window.removeEventListener("mousemove",de),window.removeEventListener("resize",Ae),s.current&&g.domElement&&s.current.removeChild(g.domElement),g.dispose(),v.dispose(),F.dispose(),U.dispose(),b.dispose(),V.dispose()}}catch(g){return console.error("Failed to initialize WebGL fluid simulation:",g),m(!1),()=>{}}},[]),Ce.jsxs("div",{className:"absolute inset-0 bg-gray-900",children:[Ce.jsx("div",{ref:s,className:"absolute inset-0 w-full h-full",style:{background:"radial-gradient(circle at center, #0f0f0f 0%, #000000 100%)",opacity:d?1:0,transition:"opacity 1s ease-in-out"}}),!d&&Ce.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-900",children:Ce.jsx("div",{className:"text-white text-lg font-mono",children:"Loading fluid simulation..."})})]})}const ET=Xm("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function zo({className:s,variant:e,asChild:n=!1,...r}){const a=n?Hm:"span";return Ce.jsx(a,{"data-slot":"badge",className:ng(ET({variant:e}),s),...r})}const TT="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function wT(s){const[e,n]=St.useState(!1),r=()=>{n(!0)},{src:a,alt:l,style:c,className:d,...m}=s;return e?Ce.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${d??""}`,style:c,children:Ce.jsx("div",{className:"flex items-center justify-center w-full h-full",children:Ce.jsx("img",{src:TT,alt:"Error loading image",...m,"data-original-url":a})})}):Ce.jsx("img",{src:a,alt:l,className:d,style:c,...m,onError:r})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),RT=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Vm=s=>{const e=RT(s);return e.charAt(0).toUpperCase()+e.slice(1)},Ug=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var CT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=St.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:c,...d},m)=>St.createElement("svg",{ref:m,...CT,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:Ug("lucide",a),...d},[...c.map(([p,_])=>St.createElement(p,_)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=(s,e)=>{const n=St.forwardRef(({className:r,...a},l)=>St.createElement(bT,{ref:l,iconNode:e,className:Ug(`lucide-${AT(Vm(s))}`,`lucide-${s}`,r),...a}));return n.displayName=Vm(s),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],LT=PT("linkedin",DT),IT="/assets/11268d89fa300e0416dc926c27548ccc20c6653f-xWPWqymu.png";function UT(){const[s,e]=St.useState("home"),n={home:St.useRef(null),about:St.useRef(null),projects:St.useRef(null),contact:St.useRef(null)},r=l=>{e(l);const c=n[l]?.current;c&&c.scrollIntoView({behavior:"smooth"})},a=[{title:"Monty - iOS Card Game",description:"Built with SwiftUI. Features animations, swipe gestures, and game logic mimicking the Monty Hall problem.",tech:["SwiftUI","iOS","Game Logic"]},{title:"ImageR - AI Photo Enhancer",description:"Uses Stable Diffusion 3 to denoise and enhance low-quality photos. Clean UI + Apple-native transitions.",tech:["AI/ML","Photo Processing","iOS"]},{title:"Meme Generator",description:"Built with SwiftUI. Takes templates + user text and exports high-res memes. Inspired by college life.",tech:["SwiftUI","Image Processing","Social"]}];return Ce.jsxs("div",{className:"min-h-screen bg-gray-900 dark",children:[Ce.jsx(f0,{activeSection:s,onSectionChange:r}),Ce.jsxs("section",{ref:n.home,className:"relative min-h-screen flex items-center justify-center overflow-hidden",children:[Ce.jsx(MT,{}),Ce.jsx("div",{className:"relative z-10 text-center px-6 max-w-4xl mx-auto pt-24",children:Ce.jsxs(Bo,{intensity:"strong",blur:"xl",className:"p-12",children:[Ce.jsxs("h1",{className:"text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-thin",children:["Engineer by Logic.",Ce.jsx("br",{}),Ce.jsx("span",{className:"text-blue-400",children:"Dreamer by Choice."})]}),Ce.jsx("p",{className:"text-xl md:text-2xl text-gray-200 mb-8 font-thin",children:"CS @ Rochester • iOS Dev • Photographer • AI Explorer"}),Ce.jsxs("div",{className:"flex flex-wrap gap-3 justify-center",children:[Ce.jsx(zo,{variant:"secondary",className:"px-4 py-2 text-base",children:"Rochester"}),Ce.jsx(zo,{variant:"secondary",className:"px-4 py-2 text-base",children:"iOS Development"}),Ce.jsx(zo,{variant:"secondary",className:"px-4 py-2 text-base",children:"Photography"}),Ce.jsx(zo,{variant:"secondary",className:"px-4 py-2 text-base",children:"AI Explorer"})]})]})})]}),Ce.jsx("section",{ref:n.about,className:"py-20 px-6 bg-gray-900",children:Ce.jsxs("div",{className:"max-w-6xl mx-auto",children:[Ce.jsx("h2",{className:"text-4xl font-bold text-white mb-12 text-center font-thin",children:"About Me"}),Ce.jsx(Bo,{intensity:"medium",blur:"lg",className:"max-w-4xl mx-auto p-8",children:Ce.jsxs("div",{className:"flex flex-col md:flex-row gap-8 items-start",children:[Ce.jsx("div",{className:"flex-shrink-0",children:Ce.jsx("div",{className:"w-48 h-48 rounded-2xl overflow-hidden",children:Ce.jsx(wT,{src:IT,alt:"Tom Yan Profile",className:"w-full h-full object-cover object-center",style:{objectPosition:"50% 20%"}})})}),Ce.jsxs("div",{className:"flex-1",children:[Ce.jsx("p",{className:"text-lg text-gray-300 mb-6 leading-relaxed font-thin",children:"Hello! I'm Tom — a computer science student currently based in Rochester. With a background in military reconnaissance, I approach challenges with both tactical precision and creative flair. When I'm not writing code, you'll find me capturing life through my lens, whether it's street photography or experimenting with new recipes."}),Ce.jsx("h3",{className:"text-xl font-semibold text-white mb-4 font-thin",children:"Fun Facts"}),Ce.jsxs("ul",{className:"space-y-2 text-gray-300 font-thin",children:[Ce.jsxs("li",{className:"flex items-center",children:[Ce.jsx("span",{className:"w-2 h-2 bg-blue-400 rounded-full mr-3"}),"Signs ASL and speaks Mandarin"]}),Ce.jsxs("li",{className:"flex items-center",children:[Ce.jsx("span",{className:"w-2 h-2 bg-blue-400 rounded-full mr-3"}),"I want to help others achieve their goals"]}),Ce.jsxs("li",{className:"flex items-center",children:[Ce.jsx("span",{className:"w-2 h-2 bg-blue-400 rounded-full mr-3"}),"Buy me a latte and I will think of you for the day"]}),Ce.jsxs("li",{className:"flex items-center",children:[Ce.jsx("span",{className:"w-2 h-2 bg-blue-400 rounded-full mr-3"}),"Enjoys skiing, badminton, and photography"]})]})]})]})})]})}),Ce.jsx("section",{ref:n.projects,className:"py-20 px-6 bg-gray-800",children:Ce.jsxs("div",{className:"max-w-6xl mx-auto",children:[Ce.jsx("h2",{className:"text-4xl font-bold text-white mb-12 text-center font-thin",children:"Projects"}),Ce.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:a.map((l,c)=>Ce.jsx(Bo,{intensity:"light",blur:"md",className:"h-full p-6",children:Ce.jsxs("div",{className:"h-full flex flex-col",children:[Ce.jsx("h3",{className:"text-xl font-semibold text-white mb-3 font-thin",children:l.title}),Ce.jsx("p",{className:"text-gray-300 mb-4 flex-1 leading-relaxed font-thin",children:l.description}),Ce.jsx("div",{className:"flex flex-wrap gap-2",children:l.tech.map((d,m)=>Ce.jsx(zo,{variant:"outline",className:"text-xs",children:d},m))})]})},c))})]})}),Ce.jsx("section",{ref:n.contact,className:"py-20 px-6 bg-gray-800",children:Ce.jsxs("div",{className:"max-w-6xl mx-auto",children:[Ce.jsx("h2",{className:"text-4xl font-bold text-white mb-12 text-center font-thin",children:"Contact"}),Ce.jsxs(Bo,{intensity:"medium",blur:"lg",className:"max-w-2xl mx-auto text-center p-8",children:[Ce.jsx("h3",{className:"text-2xl font-semibold text-white mb-6 font-thin",children:"Let's Connect"}),Ce.jsx("p",{className:"text-lg text-gray-300 mb-4 font-thin",children:"📧 Email: zhiyuan@rochester.edu"}),Ce.jsx("div",{className:"mb-6",children:Ce.jsxs("a",{href:"https://www.linkedin.com/in/tomyanzhiyuan/",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-3 text-lg text-gray-300 hover:text-blue-400 transition-colors duration-300 group",children:[Ce.jsx(LT,{className:"w-5 h-5 group-hover:scale-110 transition-transform duration-300"}),Ce.jsx("span",{className:"font-thin",children:"LinkedIn: tomyanzhiyuan"})]})}),Ce.jsx("p",{className:"text-gray-400 mb-8 font-thin",children:"Get in touch! I'm always excited to chat about technology, photography, or life in general."}),Ce.jsx("a",{href:"https://www.linkedin.com/messaging/compose/?recipient=tomyanzhiyuan",target:"_blank",rel:"noopener noreferrer",children:Ce.jsx(of,{size:"lg",className:"bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-thin border border-blue-500/30 w-full",children:"Send a Message"})})]})]})})]})}S_.createRoot(document.getElementById("root")).render(Ce.jsx(UT,{}));
