import{S as a,i as s,s as e,e as n,t as i,c as l,b as c,d as f,f as t,g as r,C as h,h as u,j as o,n as m,a as d,u as b}from"./chunk.dbc27faf.js";function v(a){var s,e,d;return{c(){s=n("button"),e=i("-1"),this.h()},l(a){s=l(a,"BUTTON",{class:!0},!1);var n=c(s);e=f(n,"-1"),n.forEach(t),this.h()},h(){r(s,"class","btn btn-dark"),d=h(s,"click",a.subLife)},m(a,n){u(a,s,n),o(s,e)},p:m,d(a){a&&t(s),d()}}}function p(a){var s,e,p,E,k,L,T,j,x,B,H,N=0!=a.life&&v(a);return{c(){s=n("div"),e=n("h1"),p=i(a.name),E=d(),k=n("h3"),L=i(a.life),T=d(),j=n("button"),x=i("+1"),B=d(),N&&N.c(),this.h()},l(n){s=l(n,"DIV",{class:!0},!1);var i=c(s);e=l(i,"H1",{},!1);var r=c(e);p=f(r,a.name),r.forEach(t),E=f(i,"\n    "),k=l(i,"H3",{},!1);var h=c(k);L=f(h,a.life),h.forEach(t),T=f(i,"\n    "),j=l(i,"BUTTON",{class:!0},!1);var u=c(j);x=f(u,"+1"),u.forEach(t),B=f(i,"\n    "),N&&N.l(i),i.forEach(t),this.h()},h(){r(j,"class","btn"),r(s,"class","card"),H=h(j,"click",a.addLife)},m(a,n){u(a,s,n),o(s,e),o(e,p),o(s,E),o(s,k),o(k,L),o(s,T),o(s,j),o(j,x),o(s,B),N&&N.m(s,null)},p(a,e){a.name&&b(p,e.name),a.life&&b(L,e.life),0!=e.life?N?N.p(a,e):((N=v(e)).c(),N.m(s,null)):N&&(N.d(1),N=null)},i:m,o:m,d(a){a&&t(s),N&&N.d(),H()}}}function E(a,s,e){let{name:n,life:i}=s;return a.$set=(a=>{"name"in a&&e("name",n=a.name),"life"in a&&e("life",i=a.life)}),{name:n,life:i,addLife:()=>{const a=i+=1;return e("life",i),a},subLife:()=>{const a=i-=1;return e("life",i),a}}}export default class extends a{constructor(a){super(),s(this,a,E,p,e,["name","life"])}}
//# sourceMappingURL=player.f1cdccca.js.map
