import{S as t,i as e,s as a,e as n,t as o,b as l,f as r,g as s,d as c,h as i,j as d,k as f,p as h,n as m,a as u,A as p,c as g,B as $,C as b,l as v,D as k,E as w,F as E,G as T,r as y,u as N,H as j,I as B,m as D}from"./client.d71c8458.js";import I from"./token.26ada729.js";import H from"./addToken.6a6e88f4.js";import V from"./tabLink.cb24d6ba.js";function L(t,e,a){const n=t.slice();return n[15]=e[a],n}function O(t){let e,a,u;return{c(){e=n("button"),a=o("-1"),this.h()},l(t){e=l(t,"BUTTON",{class:!0});var n=r(e);a=s(n,"-1"),n.forEach(c),this.h()},h(){i(e,"class","btn btn-dark")},m(n,o){d(n,e,o),f(e,a),u=h(e,"click",t[5])},p:m,d(t){t&&c(e),u()}}}function U(t){let e,a,o,s,f=void 0!==t[1].filter(t[14])[0]&&null!=t[3].power,h=t[1],m=[];for(let e=0;e<h.length;e+=1)m[e]=S(L(t,h,e));const p=t=>k(m[t],1,1,()=>{m[t]=null});let $=f&&X(t);return{c(){e=n("div");for(let t=0;t<m.length;t+=1)m[t].c();a=u(),$&&$.c(),o=B(),this.h()},l(t){e=l(t,"DIV",{class:!0});var n=r(e);for(let t=0;t<m.length;t+=1)m[t].l(n);n.forEach(c),a=g(t),$&&$.l(t),o=B(),this.h()},h(){i(e,"class","tabs")},m(t,n){d(t,e,n);for(let t=0;t<m.length;t+=1)m[t].m(e,null);d(t,a,n),$&&$.m(t,n),d(t,o,n),s=!0},p(t,a){if(514&a){let n;for(h=t[1],n=0;n<h.length;n+=1){const o=L(t,h,n);m[n]?(m[n].p(o,a),E(m[n],1)):(m[n]=S(o),m[n].c(),E(m[n],1),m[n].m(e,null))}for(j(),n=h.length;n<m.length;n+=1)p(n);w()}10&a&&(f=void 0!==t[1].filter(t[14])[0]&&null!=t[3].power),f?$?($.p(t,a),E($,1)):($=X(t),$.c(),E($,1),$.m(o.parentNode,o)):$&&(j(),k($,1,1,()=>{$=null}),w())},i(t){if(!s){for(let t=0;t<h.length;t+=1)E(m[t]);E($),s=!0}},o(t){m=m.filter(Boolean);for(let t=0;t<m.length;t+=1)k(m[t]);k($),s=!1},d(t){t&&c(e),D(m,t),t&&c(a),$&&$.d(t),t&&c(o)}}}function x(t){let e,a;return{c(){e=n("h2"),a=o("No Tokens Loaded")},l(t){e=l(t,"H2",{});var n=r(e);a=s(n,"No Tokens Loaded"),n.forEach(c)},m(t,n){d(t,e,n),f(e,a)},p:m,i:m,o:m,d(t){t&&c(e)}}}function S(t){let e;const a=new V({props:{name:t[15].name,color:t[15].color,id:t[15].id}});return a.$on("opentoken",t[9]),{c(){p(a.$$.fragment)},l(t){$(a.$$.fragment,t)},m(t,n){b(a,t,n),e=!0},p(t,e){const n={};2&e&&(n.name=t[15].name),2&e&&(n.color=t[15].color),2&e&&(n.id=t[15].id),a.$set(n)},i(t){e||(E(a.$$.fragment,t),e=!0)},o(t){k(a.$$.fragment,t),e=!1},d(t){T(a,t)}}}function X(t){let e,a;const o=new I({props:{name:t[3].name,color:t[3].color,power:t[3].power,tough:t[3].tough,ability:t[3].ability,tapped:t[3].tapped,id:t[3].id}});return o.$on("removetoken",t[8]),o.$on("update",t[10]),{c(){e=n("div"),p(o.$$.fragment),this.h()},l(t){e=l(t,"DIV",{class:!0});var a=r(e);$(o.$$.fragment,a),a.forEach(c),this.h()},h(){i(e,"class","tabcontent")},m(t,n){d(t,e,n),b(o,e,null),a=!0},p(t,e){const a={};8&e&&(a.name=t[3].name),8&e&&(a.color=t[3].color),8&e&&(a.power=t[3].power),8&e&&(a.tough=t[3].tough),8&e&&(a.ability=t[3].ability),8&e&&(a.tapped=t[3].tapped),8&e&&(a.id=t[3].id),o.$set(a)},i(t){a||(E(o.$$.fragment,t),a=!0)},o(t){k(o.$$.fragment,t),a=!1},d(t){t&&c(e),T(o)}}}function A(t){let e,a,m,N,B,D,I,V,L,S,X,A,C,F,G,M,q,z,J,K,P=t[0]>0&&O(t);const Q=new H({});Q.$on("addtoken",t[7]);const R=[x,U],W=[];function Y(t,e){return t[1].length<1?0:1}return q=Y(t),z=W[q]=R[q](t),{c(){e=n("div"),a=n("h1"),m=o(t[2]),N=u(),B=n("h3"),D=o(t[0]),I=u(),V=n("button"),L=o("+1"),S=u(),P&&P.c(),X=u(),A=n("button"),C=o("X"),F=u(),G=n("div"),p(Q.$$.fragment),M=u(),z.c(),this.h()},l(n){e=l(n,"DIV",{class:!0});var o=r(e);a=l(o,"H1",{});var i=r(a);m=s(i,t[2]),i.forEach(c),N=g(o),B=l(o,"H3",{});var d=r(B);D=s(d,t[0]),d.forEach(c),I=g(o),V=l(o,"BUTTON",{class:!0});var f=r(V);L=s(f,"+1"),f.forEach(c),S=g(o),P&&P.l(o),X=g(o),A=l(o,"BUTTON",{class:!0});var h=r(A);C=s(h,"X"),h.forEach(c),F=g(o),G=l(o,"DIV",{class:!0});var u=r(G);$(Q.$$.fragment,u),u.forEach(c),M=g(o),z.l(o),o.forEach(c),this.h()},h(){i(V,"class","btn btn-success"),i(A,"class","btn btn-danger btn-sm"),i(G,"class","container"),i(e,"class","card")},m(n,o){d(n,e,o),f(e,a),f(a,m),f(e,N),f(e,B),f(B,D),f(e,I),f(e,V),f(V,L),f(e,S),P&&P.m(e,null),f(e,X),f(e,A),f(A,C),f(e,F),f(e,G),b(Q,G,null),f(e,M),W[q].m(e,null),J=!0,K=[h(V,"click",t[4]),h(A,"click",t[6])]},p(t,[a]){(!J||4&a)&&v(m,t[2]),(!J||1&a)&&v(D,t[0]),t[0]>0?P?P.p(t,a):(P=O(t),P.c(),P.m(e,X)):P&&(P.d(1),P=null);let n=q;q=Y(t),q===n?W[q].p(t,a):(j(),k(W[n],1,1,()=>{W[n]=null}),w(),z=W[q],z||(z=W[q]=R[q](t),z.c()),E(z,1),z.m(e,null))},i(t){J||(E(Q.$$.fragment,t),E(z),J=!0)},o(t){k(Q.$$.fragment,t),k(z),J=!1},d(t){t&&c(e),P&&P.d(),T(Q),W[q].d(),y(K)}}}function C(t,e,a){const n=N();let{name:o}=e,{life:l}=e;var r=()=>Math.random().toString(36).substr(2),s=()=>r()+r();let{tokens:c}=e,i=c[0];return t.$set=t=>{"name"in t&&a(2,o=t.name),"life"in t&&a(0,l=t.life),"tokens"in t&&a(1,c=t.tokens)},[l,c,o,i,()=>a(0,l+=1),()=>a(0,l-=1),()=>n("removeplayer",o),t=>{console.log(t.detail[0]);for(var e=0;e<t.detail[1];e++){var n=t.detail[0];a(1,c=[...c,{name:n.name,color:n.color,power:n.power,tough:n.tough,ability:n.ability,tapped:n.tapped,id:s()}]),console.log(c)}},t=>{a(1,c=c.filter(e=>e.id!==t.detail))},t=>{a(3,i=c.filter(e=>e.id===t.detail)[0])},t=>{var e=c.length;a(3,i=t.detail);for(var n=0;n<e;n++)for(var o in c[n])if(c[n][o]===i.id){console.log(i),c.splice(n,1,i),console.log(c);break}},n,r,s,t=>t.id===i.id]}export default class extends t{constructor(t){super(),e(this,t,C,A,a,{name:2,life:0,tokens:1})}}
