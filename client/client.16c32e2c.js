import{s as e,n as t,S as s,i as r,e as n,t as a,a as o,c as l,b as c,d as i,f as u,g as p,h as f,j as m,k as h,m as g,l as d,o as v,p as $,q as E,r as b,u as _,v as y,w as S,x as w,y as x,z as P,A as R}from"./chunk.dbc27faf.js";function A(s,r=t){let n;const a=[];function o(t){if(e(s,t)){if(s=t,!n)return;a.forEach(e=>e[1]()),a.forEach(e=>e[0](s))}}return{set:o,update:function(e){o(e(s))},subscribe:function(e,l=t){const c=[e,l];return a.push(c),1===a.length&&(n=r(o)||t),e(s),()=>{const e=a.indexOf(c);-1!==e&&a.splice(e,1),0===a.length&&n()}}}}const L={},k=()=>({});function C(e){var s,r,h,g,d,v,$,E,b,_,y,S,w,x,P,R,A,L,k,C,j;return{c(){s=n("nav"),r=n("ul"),h=n("li"),g=n("a"),d=a("Home"),$=o(),E=n("li"),b=n("a"),_=a("About"),S=o(),w=n("li"),x=n("a"),P=a("Reports"),A=o(),L=n("li"),k=n("a"),C=a("MTG Manager"),this.h()},l(e){s=l(e,"NAV",{class:!0},!1);var t=c(s);r=l(t,"UL",{class:!0},!1);var n=c(r);h=l(n,"LI",{class:!0},!1);var a=c(h);g=l(a,"A",{class:!0,href:!0},!1);var o=c(g);d=i(o,"Home"),o.forEach(u),a.forEach(u),$=i(n,"\n\t\t"),E=l(n,"LI",{class:!0},!1);var p=c(E);b=l(p,"A",{class:!0,href:!0},!1);var f=c(b);_=i(f,"About"),f.forEach(u),p.forEach(u),S=i(n,"\n\n\t\t\n\t\t"),w=l(n,"LI",{class:!0},!1);var m=c(w);x=l(m,"A",{rel:!0,class:!0,href:!0},!1);var v=c(x);P=i(v,"Reports"),v.forEach(u),m.forEach(u),A=i(n,"\n\n\t\t"),L=l(n,"LI",{class:!0},!1);var y=c(L);k=l(y,"A",{class:!0,href:!0},!1);var R=c(k);C=i(R,"MTG Manager"),R.forEach(u),y.forEach(u),n.forEach(u),t.forEach(u),this.h()},h(){p(g,"class",v=(void 0===e.segment?"selected":"")+" svelte-11kwxiv"),p(g,"href","."),p(h,"class","svelte-11kwxiv"),p(b,"class",y=("about"===e.segment?"selected":"")+" svelte-11kwxiv"),p(b,"href","about"),p(E,"class","svelte-11kwxiv"),p(x,"rel","prefetch"),p(x,"class",R=("blog"===e.segment?"selected":"")+" svelte-11kwxiv"),p(x,"href","blog"),p(w,"class","svelte-11kwxiv"),p(k,"class",j=("mtg"===e.segment?"selected":"")+" svelte-11kwxiv"),p(k,"href","mtg"),p(L,"class","svelte-11kwxiv"),p(r,"class","svelte-11kwxiv"),p(s,"class","svelte-11kwxiv")},m(e,t){f(e,s,t),m(s,r),m(r,h),m(h,g),m(g,d),m(r,$),m(r,E),m(E,b),m(b,_),m(r,S),m(r,w),m(w,x),m(x,P),m(r,A),m(r,L),m(L,k),m(k,C)},p(e,t){e.segment&&v!==(v=(void 0===t.segment?"selected":"")+" svelte-11kwxiv")&&p(g,"class",v),e.segment&&y!==(y=("about"===t.segment?"selected":"")+" svelte-11kwxiv")&&p(b,"class",y),e.segment&&R!==(R=("blog"===t.segment?"selected":"")+" svelte-11kwxiv")&&p(x,"class",R),e.segment&&j!==(j=("mtg"===t.segment?"selected":"")+" svelte-11kwxiv")&&p(k,"class",j)},i:t,o:t,d(e){e&&u(s)}}}function j(e,t,s){let{segment:r}=t;return e.$set=(e=>{"segment"in e&&s("segment",r=e.segment)}),{segment:r}}class O extends s{constructor(t){super(),r(this,t,j,C,e,["segment"])}}function U(e){var t,s,r,a=new O({props:{segment:e.segment}});const m=e.$$slots.default,_=h(m,e,null);return{c(){a.$$.fragment.c(),t=o(),s=n("main"),_&&_.c(),this.h()},l(e){a.$$.fragment.l(e),t=i(e,"\n\n"),s=l(e,"MAIN",{class:!0},!1);var r=c(s);_&&_.l(r),r.forEach(u),this.h()},h(){p(s,"class","svelte-1uhnsl8")},m(e,n){g(a,e,n),f(e,t,n),f(e,s,n),_&&_.m(s,null),r=!0},p(e,t){var s={};e.segment&&(s.segment=t.segment),a.$set(s),_&&_.p&&e.$$scope&&_.p(d(m,t,e,null),v(m,t,null))},i(e){r||($(a.$$.fragment,e),$(_,e),r=!0)},o(e){E(a.$$.fragment,e),E(_,e),r=!1},d(e){b(a,e),e&&(u(t),u(s)),_&&_.d(e)}}}function q(e,t,s){let{segment:r}=t,{$$slots:n={},$$scope:a}=t;return e.$set=(e=>{"segment"in e&&s("segment",r=e.segment),"$$scope"in e&&s("$$scope",a=e.$$scope)}),{segment:r,$$slots:n,$$scope:a}}class N extends s{constructor(t){super(),r(this,t,q,U,e,["segment"])}}function H(e){var t,s,r=e.error.stack;return{c(){t=n("pre"),s=a(r)},l(e){t=l(e,"PRE",{},!1);var n=c(t);s=i(n,r),n.forEach(u)},m(e,r){f(e,t,r),m(t,s)},p(e,t){e.error&&r!==(r=t.error.stack)&&_(s,r)},d(e){e&&u(t)}}}function I(e){var s,r,h,g,d,v,$,E,b,S=e.error.message;document.title=s=e.status;var w=e.dev&&e.error.stack&&H(e);return{c(){r=o(),h=n("h1"),g=a(e.status),d=o(),v=n("p"),$=a(S),E=o(),w&&w.c(),b=y(),this.h()},l(t){r=i(t,"\n\n"),h=l(t,"H1",{class:!0},!1);var s=c(h);g=i(s,e.status),s.forEach(u),d=i(t,"\n\n"),v=l(t,"P",{class:!0},!1);var n=c(v);$=i(n,S),n.forEach(u),E=i(t,"\n\n"),w&&w.l(t),b=y(),this.h()},h(){p(h,"class","svelte-8od9u6"),p(v,"class","svelte-8od9u6")},m(e,t){f(e,r,t),f(e,h,t),m(h,g),f(e,d,t),f(e,v,t),m(v,$),f(e,E,t),w&&w.m(e,t),f(e,b,t)},p(e,t){e.status&&s!==(s=t.status)&&(document.title=s),e.status&&_(g,t.status),e.error&&S!==(S=t.error.message)&&_($,S),t.dev&&t.error.stack?w?w.p(e,t):((w=H(t)).c(),w.m(b.parentNode,b)):w&&(w.d(1),w=null)},i:t,o:t,d(e){e&&(u(r),u(h),u(d),u(v),u(E)),w&&w.d(e),e&&u(b)}}}function D(e,t,s){let{status:r,error:n}=t;return e.$set=(e=>{"status"in e&&s("status",r=e.status),"error"in e&&s("error",n=e.error)}),{status:r,error:n,dev:!1}}class M extends s{constructor(t){super(),r(this,t,D,I,e,["status","error"])}}function T(e){var t,s,r=[e.level1.props],n=e.level1.component;function a(e){let t={};for(var s=0;s<r.length;s+=1)t=S(t,r[s]);return{props:t}}if(n)var o=new n(a());return{c(){o&&o.$$.fragment.c(),t=y()},l(e){o&&o.$$.fragment.l(e),t=y()},m(e,r){o&&g(o,e,r),f(e,t,r),s=!0},p(e,s){var l=e.level1?w(r,[s.level1.props]):{};if(n!==(n=s.level1.component)){if(o){P();const e=o;E(e.$$.fragment,1,()=>{b(e)}),R()}n?((o=new n(a())).$$.fragment.c(),$(o.$$.fragment,1),g(o,t.parentNode,t)):o=null}else n&&o.$set(l)},i(e){s||($(o.$$.fragment,e),s=!0)},o(e){o&&E(o.$$.fragment,e),s=!1},d(e){e&&u(t),o&&b(o,e)}}}function J(e){var t,s=new M({props:{error:e.error,status:e.status}});return{c(){s.$$.fragment.c()},l(e){s.$$.fragment.l(e)},m(e,r){g(s,e,r),t=!0},p(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),s.$set(r)},i(e){t||($(s.$$.fragment,e),t=!0)},o(e){E(s.$$.fragment,e),t=!1},d(e){b(s,e)}}}function V(e){var t,s,r,n,a=[J,T],o=[];function l(e){return e.error?0:1}return t=l(e),s=o[t]=a[t](e),{c(){s.c(),r=y()},l(e){s.l(e),r=y()},m(e,s){o[t].m(e,s),f(e,r,s),n=!0},p(e,n){var c=t;(t=l(n))===c?o[t].p(e,n):(P(),E(o[c],1,()=>{o[c]=null}),R(),(s=o[t])||(s=o[t]=a[t](n)).c(),$(s,1),s.m(r.parentNode,r))},i(e){n||($(s),n=!0)},o(e){E(s),n=!1},d(e){o[t].d(e),e&&u(r)}}}function B(e){var t,s=[{segment:e.segments[0]},e.level0.props];let r={$$slots:{default:[V]},$$scope:{ctx:e}};for(var n=0;n<s.length;n+=1)r=S(r,s[n]);var a=new N({props:r});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,s){g(a,e,s),t=!0},p(e,t){var r=e.segments||e.level0?w(s,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(r.$$scope={changed:e,ctx:t}),a.$set(r)},i(e){t||($(a.$$.fragment,e),t=!0)},o(e){E(a.$$.fragment,e),t=!1},d(e){b(a,e)}}}function G(e,t,s){let{stores:r,error:n,status:a,segments:o,level0:l,level1:c=null}=t;return x(L,r),e.$set=(e=>{"stores"in e&&s("stores",r=e.stores),"error"in e&&s("error",n=e.error),"status"in e&&s("status",a=e.status),"segments"in e&&s("segments",o=e.segments),"level0"in e&&s("level0",l=e.level0),"level1"in e&&s("level1",c=e.level1)}),{stores:r,error:n,status:a,segments:o,level0:l,level1:c}}class K extends s{constructor(t){super(),r(this,t,G,B,e,["stores","error","status","segments","level0","level1"])}}const z=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],W=[{js:()=>import("./index.88a2816c.js"),css:["index.88a2816c.css"]},{js:()=>import("./about.30712c65.js"),css:[]},{js:()=>import("./index.62512d43.js"),css:["index.62512d43.css"]},{js:()=>import("./[slug].6dd61c4f.js"),css:["[slug].6dd61c4f.css"]},{js:()=>import("./index.d657d08e.js"),css:[]},{js:()=>import("./addPlayer.5e43e81a.js"),css:[]},{js:()=>import("./player.f1cdccca.js"),css:[]}],X=(e=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:e(t[1])})}]},{pattern:/^\/mtg\/?$/,parts:[{i:4}]},{pattern:/^\/mtg\/addPlayer\/?$/,parts:[null,{i:5}]},{pattern:/^\/mtg\/player\/?$/,parts:[null,{i:6}]}])(decodeURIComponent);const Y="undefined"!=typeof __SAPPER__&&__SAPPER__;let F,Q,Z,ee=!1,te=[],se="{}";const re={page:A({}),preloading:A(null),session:A(Y&&Y.session)};let ne,ae;re.session.subscribe(async e=>{if(ne=e,!ee)return;ae=!0;const t=me(new URL(location.href)),s=Q={},{redirect:r,props:n,branch:a}=await ve(t);s===Q&&await de(r,a,n,t.page)});let oe,le=null;let ce,ie=1;const ue="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},pe={};function fe(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function me(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Y.baseUrl))return null;let t=e.pathname.slice(Y.baseUrl.length);if(""===t&&(t="/"),!z.some(e=>e.test(t)))for(let s=0;s<X.length;s+=1){const r=X[s],n=r.pattern.exec(t);if(n){const s=fe(e.search),a=r.parts[r.parts.length-1],o=a.params?a.params(n):{},l={path:t,query:s,params:o};return{href:e.href,route:r,match:n,page:l}}}}function he(){return{x:pageXOffset,y:pageYOffset}}async function ge(e,t,s,r){if(t)ce=t;else{const e=he();pe[ce]=e,t=ce=++ie,pe[ce]=s?e:{x:0,y:0}}ce=t,F&&re.preloading.set(!0);const n=le&&le.href===e.href?le.promise:ve(e);le=null;const a=Q={},{redirect:o,props:l,branch:c}=await n;if(a===Q&&(await de(o,c,l,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=pe[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}pe[ce]=e,e&&scrollTo(e.x,e.y)}}async function de(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=me(new URL(e,document.baseURI));return s?(ue[t.replaceState?"replaceState":"pushState"]({id:ce},"",e),ge(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(re.page.set(r),re.preloading.set(!1),F)F.$set(s);else{s.stores={page:{subscribe:re.page.subscribe},preloading:{subscribe:re.preloading.subscribe},session:re.session},s.level0={props:await Z};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)Ee(e.nextSibling);Ee(e),Ee(t)}F=new K({target:oe,props:s,hydrate:!0})}te=t,se=JSON.stringify(r.query),ee=!0,ae=!1}async function ve(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[r[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let l;Z||(Z=Y.preloaded[0]||k.call(o,{path:s.path,query:s.query,params:{}},ne));let c=1;try{const n=JSON.stringify(s.query),i=t.pattern.exec(s.path);let u=!1;l=await Promise.all(t.parts.map(async(t,l)=>{const p=r[l];if(function(e,t,s,r){if(r!==se)return!0;const n=te[e];return!!n&&(t!==n.segment||!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0)}(l,p,i,n)&&(u=!0),a.segments[c]=r[l+1],!t)return{segment:p};const f=c++;if(!ae&&!u&&te[l]&&te[l].part===t.i)return te[l];u=!1;const{default:m,preload:h}=await function(e){const t="string"==typeof e.css?[]:e.css.map($e);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(W[t.i]);let g;return g=ee||!Y.preloaded[l+1]?h?await h.call(o,{path:s.path,query:s.query,params:t.params?t.params(e.match):{}},ne):{}:Y.preloaded[l+1],a[`level${f}`]={component:m,props:g,segment:p,match:i,part:t.i}}))}catch(e){a.error=e,a.status=500,l=[]}return{redirect:n,props:a,branch:l}}function $e(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=(()=>e()),r.onerror=s,document.head.appendChild(r)})}function Ee(e){e.parentNode.removeChild(e)}function be(e){const t=me(new URL(e,document.baseURI));if(t)return le&&e===le.href||function(e,t){le={href:e,promise:t}}(e,ve(t)),le.promise}let _e;function ye(e){clearTimeout(_e),_e=setTimeout(()=>{Se(e)},20)}function Se(e){const t=xe(e.target);t&&"prefetch"===t.rel&&be(t.href)}function we(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=xe(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const a=me(n);if(a){ge(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),ue.pushState({id:ce},"",n.href)}}function xe(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Pe(e){if(pe[ce]=he(),e.state){const t=me(new URL(location.href));t?ge(t,e.state.id):location.href=location.href}else(function(e){ce=e})(ie=ie+1),ue.replaceState({id:ce},"",location.href)}!function(e){var t;"scrollRestoration"in ue&&(ue.scrollRestoration="manual"),t=e.target,oe=t,addEventListener("click",we),addEventListener("popstate",Pe),addEventListener("touchstart",Se),addEventListener("mousemove",ye),Promise.resolve().then(()=>{const{hash:e,href:t}=location;ue.replaceState({id:ie},"",t);const s=new URL(location.href);if(Y.error)return function(e){const{pathname:t,search:s}=location,{session:r,preloaded:n,status:a,error:o}=Y;Z||(Z=n&&n[0]),de(null,[],{error:o,status:a,session:r,level0:{props:Z},level1:{props:{status:a,error:o},component:M},segments:n},{path:t,query:fe(s),params:{}})}();const r=me(s);return r?ge(r,ie,!0,e):void 0})}({target:document.querySelector("#sapper")});
//# sourceMappingURL=client.16c32e2c.js.map
