function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n,e){if(t){const o=i(t,n,e);return t[0](o)}}function i(t,e,o){return t[1]?n({},n(e.$$scope.ctx,t[1](o?o(e):{}))):e.$$scope.ctx}function u(t,e,o,r){return t[1]?n({},n(e.$$scope.changed||{},t[1](r?r(o):{}))):e.$$scope.changed||{}}function f(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function $(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function h(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function g(){return p("")}function b(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function y(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function x(t){return Array.from(t.childNodes)}function _(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){for(let t=0;t<r.attributes.length;t+=1){const n=r.attributes[t];e[n.name]||r.removeAttribute(n.name)}return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):h(n)}function w(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=n,t.splice(e,1)[0]}return p(n)}function v(t,n){n=""+n,t.data!==n&&(t.data=n)}let E;function k(t){E=t}function A(t,n){(function(){if(!E)throw new Error("Function called outside component initialization");return E})().$$.context.set(t,n)}const N=[],S=Promise.resolve();let j=!1;const C=[],q=[],z=[];function B(t){q.push(t)}function L(){const t=new Set;do{for(;N.length;){const t=N.shift();k(t),O(t.$$)}for(;C.length;)C.shift()();for(;q.length;){const n=q.pop();t.has(n)||(n(),t.add(n))}}while(N.length);for(;z.length;)z.pop()();j=!1}function O(t){t.fragment&&(t.update(t.dirty),r(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(B))}const T=new Set;let D;function F(){D={remaining:0,callbacks:[]}}function M(){D.remaining||r(D.callbacks)}function P(t,n){t&&t.i&&(T.delete(t),t.i(n))}function G(t,n,e){if(t&&t.o){if(T.has(t))return;T.add(t),D.callbacks.push(()=>{T.delete(t),e&&(t.d(1),e())}),t.o(n)}}function H(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],a=n[c];if(a){for(const t in s)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[c]=a}else for(const t in s)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function I(t,n,o){const{fragment:s,on_mount:a,on_destroy:i,after_render:u}=t.$$;s.m(n,o),B(()=>{const n=a.map(e).filter(c);i?i.push(...n):r(n),t.$$.on_mount=[]}),u.forEach(B)}function J(t,n){t.$$.fragment&&(r(t.$$.on_destroy),n&&t.$$.fragment.d(1),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function K(t,n){t.$$.dirty||(N.push(t),j||(j=!0,S.then(L)),t.$$.dirty=o()),t.$$.dirty[n]=!0}function Q(n,e,c,s,a,i){const u=E;k(n);const f=e.props||{},l=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:null};let d=!1;l.ctx=c?c(n,f,(t,e)=>{l.ctx&&a(l.ctx[t],l.ctx[t]=e)&&(l.bound[t]&&l.bound[t](e),d&&K(n,t))}):f,l.update(),d=!0,r(l.before_render),l.fragment=s(l.ctx),e.target&&(e.hydrate?l.fragment.l(x(e.target)):l.fragment.c(),e.intro&&P(n.$$.fragment),I(n,e.target,e.anchor),L()),k(u)}class R{$destroy(){J(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{M as A,$ as B,b as C,r as D,R as S,m as a,x as b,_ as c,w as d,h as e,d as f,y as g,l as h,Q as i,f as j,a as k,u as l,I as m,t as n,i as o,P as p,G as q,J as r,s,p as t,v as u,g as v,n as w,H as x,A as y,F as z};
//# sourceMappingURL=chunk.3cffbdbe.js.map