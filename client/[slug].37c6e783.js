import{S as t,i as s,s as a,a as o,e,t as n,g as r,c as i,b as p,d as c,f as l,h,k as u,l as f,w as m,n as d}from"./index.62296c73.js";function x(t){var s,a,x,g,v,j,w=t.post.title+"",H=t.post.html+"";return document.title=s=t.post.title,{c(){a=o(),x=e("h1"),g=n(w),v=o(),j=e("div"),this.h()},l(t){a=r(t),x=i(t,"H1",{},!1);var s=p(x);g=c(s,w),s.forEach(l),v=r(t),j=i(t,"DIV",{class:!0},!1),p(j).forEach(l),this.h()},h(){h(j,"class","content svelte-gnxal1")},m(t,s){u(t,a,s),u(t,x,s),f(x,g),u(t,v,s),u(t,j,s),j.innerHTML=H},p(t,a){t.post&&s!==(s=a.post.title)&&(document.title=s),t.post&&w!==(w=a.post.title+"")&&m(g,w),t.post&&H!==(H=a.post.html+"")&&(j.innerHTML=H)},i:d,o:d,d(t){t&&(l(a),l(x),l(v),l(j))}}}async function g({params:t,query:s}){const a=await this.fetch(`reports/${t.slug}.json`),o=await a.json();if(200===a.status)return{post:o};this.error(a.status,o.message)}function v(t,s,a){let{post:o}=s;return t.$set=(t=>{"post"in t&&a("post",o=t.post)}),{post:o}}export default class extends t{constructor(t){super(),s(this,t,v,x,a,["post"])}}export{g as preload};