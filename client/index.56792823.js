import{S as s,i as a,s as c,e as l,t as r,c as t,b as i,d as n,f as e,g as f,C as h,h as o,j as u,n as d,a as v,u as b}from"./chunk.c0c8514a.js";function m(s){var a,c,v;return{c(){a=l("button"),c=r("-1"),this.h()},l(s){a=t(s,"BUTTON",{class:!0},!1);var l=i(a);c=n(l,"-1"),l.forEach(e),this.h()},h(){f(a,"class","btn"),v=h(a,"click",s.subLife)},m(s,l){o(s,a,l),u(a,c)},p:d,d(s){s&&e(a),v()}}}function p(s){var a,c,p,L,T,k,j,x,B,D,H,I,N=0!=s.life&&m(s);return{c(){a=l("div"),c=l("div"),p=l("h1"),L=r(E),T=v(),k=l("h3"),j=r(s.life),x=v(),B=l("button"),D=r("+1"),H=v(),N&&N.c(),this.h()},l(l){a=t(l,"DIV",{class:!0},!1);var r=i(a);c=t(r,"DIV",{class:!0},!1);var f=i(c);p=t(f,"H1",{},!1);var h=i(p);L=n(h,E),h.forEach(e),T=n(f,"\n        "),k=t(f,"H3",{},!1);var o=i(k);j=n(o,s.life),o.forEach(e),x=n(f,"\n        "),B=t(f,"BUTTON",{class:!0},!1);var u=i(B);D=n(u,"+1"),u.forEach(e),H=n(f,"\n        "),N&&N.l(f),f.forEach(e),r.forEach(e),this.h()},h(){f(B,"class","btn"),f(c,"class","card"),f(a,"class","container"),I=h(B,"click",s.addLife)},m(s,l){o(s,a,l),u(a,c),u(c,p),u(p,L),u(c,T),u(c,k),u(k,j),u(c,x),u(c,B),u(B,D),u(c,H),N&&N.m(c,null)},p(s,a){s.life&&b(j,a.life),0!=a.life?N?N.p(s,a):((N=m(a)).c(),N.m(c,null)):N&&(N.d(1),N=null)},i:d,o:d,d(s){s&&e(a),N&&N.d(),I()}}}let E="Player1";function L(s,a,c){let l=20;return{life:l,addLife:()=>{const s=l+=1;return c("life",l),s},subLife:()=>{const s=l-=1;return c("life",l),s}}}export default class extends s{constructor(s){super(),a(this,s,L,p,c,[])}}
//# sourceMappingURL=index.56792823.js.map
