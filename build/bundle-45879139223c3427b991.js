!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,n){if(!g[e]||!b[e])return;for(var r in b[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(h[r]=n[r]);0==--y&&0===m&&E()}(e,r),n&&n(e,r)};var r,t=!0,o="45879139223c3427b991",c=1e4,i={},d=[],a=[];function s(e){var n=H[e];if(!n)return P;var t=function(t){return n.hot.active?(H[t]?H[t].parents.includes(e)||H[t].parents.push(e):(d=[e],r=t),n.children.includes(t)||n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),d=[]),P(t)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(n){P[e]=n}}};for(var c in P)Object.prototype.hasOwnProperty.call(P,c)&&"e"!==c&&Object.defineProperty(t,c,o(c));return t.e=function(e){return"ready"===u&&p("prepare"),m++,P.e(e).then(n,function(e){throw n(),e});function n(){m--,"prepare"===u&&(w[e]||D(e),0===m&&0===y&&E())}},t}var l=[],u="idle";function p(e){u=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var f,h,v,y=0,m=0,w={},b={},g={};function _(e){return+e+""===e?+e:e}function O(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return t=e,p("check"),(n=c,n=n||1e4,new Promise(function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,c=P.p+""+o+".hot-update.json";t.open("GET",c,!0),t.timeout=n,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+c+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+c+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(e){return void r(e)}e(n)}}})).then(function(e){if(!e)return p("idle"),null;b={},w={},g=e.c,v=e.h,p("prepare");var n=new Promise(function(e,n){f={resolve:e,reject:n}});h={};return D(0),"prepare"===u&&0===m&&0===y&&E(),n});var n}function D(e){g[e]?(b[e]=!0,y++,function(e){var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.charset="utf-8",r.src=P.p+""+e+"."+o+".hot-update.js",n.appendChild(r)}(e)):w[e]=!0}function E(){p("ready");var e=f;if(f=null,e)if(t)Promise.resolve().then(function(){return j(t)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&n.push(_(r));e.resolve(n)}}function j(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var r,t,c,a,s;function l(e){for(var n=[e],r={},t=n.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),c=o.id,i=o.chain;if((a=H[c])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(a.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var d=0;d<a.parents.length;d++){var s=a.parents[d],l=H[s];if(l){if(l.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([s]),moduleId:c,parentId:s};n.includes(s)||(l.hot._acceptedDependencies[c]?(r[s]||(r[s]=[]),f(r[s],[c])):(delete r[s],n.push(s),t.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function f(e,n){for(var r=0;r<n.length;r++){var t=n[r];e.includes(t)||e.push(t)}}n=n||{};var y={},m=[],w={},b=function(){console.warn("[HMR] unexpected require("+D.moduleId+") to disposed module")};for(var O in h)if(Object.prototype.hasOwnProperty.call(h,O)){var D;s=_(O);var E=!1,j=!1,I=!1,x="";switch((D=h[O]?l(s):{type:"disposed",moduleId:O}).chain&&(x="\nUpdate propagation: "+D.chain.join(" -> ")),D.type){case"self-declined":n.onDeclined&&n.onDeclined(D),n.ignoreDeclined||(E=new Error("Aborted because of self decline: "+D.moduleId+x));break;case"declined":n.onDeclined&&n.onDeclined(D),n.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+D.moduleId+" in "+D.parentId+x));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(D),n.ignoreUnaccepted||(E=new Error("Aborted because "+s+" is not accepted"+x));break;case"accepted":n.onAccepted&&n.onAccepted(D),j=!0;break;case"disposed":n.onDisposed&&n.onDisposed(D),I=!0;break;default:throw new Error("Unexception type "+D.type)}if(E)return p("abort"),Promise.reject(E);if(j)for(s in w[s]=h[s],f(m,D.outdatedModules),D.outdatedDependencies)Object.prototype.hasOwnProperty.call(D.outdatedDependencies,s)&&(y[s]||(y[s]=[]),f(y[s],D.outdatedDependencies[s]));I&&(f(m,[D.moduleId]),w[s]=b)}var k,A=[];for(t=0;t<m.length;t++)s=m[t],H[s]&&H[s].hot._selfAccepted&&A.push({module:s,errorHandler:H[s].hot._selfAccepted});p("dispose"),Object.keys(g).forEach(function(e){!1===g[e]&&function(e){delete installedChunks[e]}(e)});for(var M,U,q=m.slice();q.length>0;)if(s=q.pop(),a=H[s]){var R={},S=a.hot._disposeHandlers;for(c=0;c<S.length;c++)(r=S[c])(R);for(i[s]=R,a.hot.active=!1,delete H[s],delete y[s],c=0;c<a.children.length;c++){var T=H[a.children[c]];T&&((k=T.parents.indexOf(s))>=0&&T.parents.splice(k,1))}}for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(a=H[s]))for(U=y[s],c=0;c<U.length;c++)M=U[c],(k=a.children.indexOf(M))>=0&&a.children.splice(k,1);for(s in p("apply"),o=v,w)Object.prototype.hasOwnProperty.call(w,s)&&(e[s]=w[s]);var L=null;for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(a=H[s])){U=y[s];var N=[];for(t=0;t<U.length;t++)if(M=U[t],r=a.hot._acceptedDependencies[M]){if(N.includes(r))continue;N.push(r)}for(t=0;t<N.length;t++){r=N[t];try{r(U)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:s,dependencyId:U[t],error:e}),n.ignoreErrored||L||(L=e)}}}for(t=0;t<A.length;t++){var B=A[t];s=B.module,d=[s];try{P(s)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(r){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:r,originalError:e}),n.ignoreErrored||L||(L=r),L||(L=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:s,error:e}),n.ignoreErrored||L||(L=e)}}return L?(p("fail"),Promise.reject(L)):(p("idle"),new Promise(function(e){e(m)}))}var H={};function P(n){if(H[n])return H[n].exports;var t=H[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:O,apply:j,status:function(e){if(!e)return u;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:i[e]};return r=void 0,n}(n),parents:(a=d,d=[],a),children:[]};return e[n].call(t.exports,t,t.exports,s(n)),t.l=!0,t.exports}P.m=e,P.c=H,P.d=function(e,n,r){P.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},P.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},P.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(n,"a",n),n},P.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},P.p="/dist/",P.h=function(){return o},s(1)(P.s=1)}([function(e,n){e.exports=function(e){var n,r="";return r+="<h1> "+(null==(n=e.name)?"":n)+" </h1>\r\n"}},function(e,n,r){"use strict";var t=r(0);document.getElementById("header").innerHTML=t({name:"杨舟"})}]);