import{S as a,i as n,s,e as o,t as e,c as i,b as c,d as t,f as l,h as r,G as d,k as m,l as b,w as h,n as u,I as p}from"./index.62296c73.js";function f(a){var n,s,p,f,k;return{c(){n=o("button"),s=e(a.name),this.h()},l(o){n=i(o,"BUTTON",{class:!0,disabled:!0},!1);var e=c(n);s=t(e,a.name),e.forEach(l),this.h()},h(){r(n,"class",p="btn btn-link "+a.color),n.disabled=f=!a.id,k=d(n,"click",a.onOpen)},m(a,o){m(a,n,o),b(n,s)},p(a,o){a.name&&h(s,o.name),a.color&&p!==(p="btn btn-link "+o.color)&&r(n,"class",p),a.id&&f!==(f=!o.id)&&(n.disabled=f)},i:u,o:u,d(a){a&&l(n),k()}}}function k(a,n,s){const o=p();let{name:e,color:i,id:c}=n;return a.$set=(a=>{"name"in a&&s("name",e=a.name),"color"in a&&s("color",i=a.color),"id"in a&&s("id",c=a.id)}),{name:e,color:i,id:c,onOpen:()=>o("opentoken",c)}}export default class extends a{constructor(a){super(),n(this,a,k,f,s,["name","color","id"])}}