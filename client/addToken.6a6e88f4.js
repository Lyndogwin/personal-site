import{S as t,i as e,s as l,e as a,t as n,a as o,b as i,f as s,g as r,c as u,d as c,j as p,k as h,n as d,h as f,v as m,w as y,p as v,m as g,r as b,u as x,x as T,y as w,z as N}from"./client.d71c8458.js";function P(t,e,l){const a=t.slice();return a[11]=e[l],a}function I(t){let e,l,f,m,y=t[11].text+"";return{c(){e=a("option"),l=n(y),f=o(),this.h()},l(t){e=i(t,"OPTION",{selected:!0,value:!0});var a=s(e);l=r(a,y),f=u(a),a.forEach(c),this.h()},h(){e.selected="selected",e.__value=m="\n\t\t\t\t"+t[11].text+"\n\t\t\t",e.value=e.__value},m(t,a){p(t,e,a),h(e,l),h(e,f)},p:d,d(t){t&&c(e)}}}function U(t){let e,l,n,r,x,w,N,U,k,C,E,_,O,j,A,B=!1,R=!1,S=!1,q=t[3],z=[];for(let e=0;e<q.length;e+=1)z[e]=I(P(t,q,e));function D(){B=!0,t[7].call(w)}function F(){R=!0,t[8].call(U)}function G(){S=!0,t[10].call(_)}return{c(){e=a("form"),l=a("input"),n=o(),r=a("select");for(let t=0;t<z.length;t+=1)z[t].c();x=o(),w=a("input"),N=o(),U=a("input"),k=o(),C=a("input"),E=o(),_=a("input"),O=o(),j=a("input"),this.h()},l(t){e=i(t,"FORM",{class:!0});var a=s(e);l=i(a,"INPUT",{type:!0,placeholder:!0}),n=u(a),r=i(a,"SELECT",{type:!0,class:!0});var o=s(r);for(let t=0;t<z.length;t+=1)z[t].l(o);o.forEach(c),x=u(a),w=i(a,"INPUT",{type:!0,placeholder:!0}),N=u(a),U=i(a,"INPUT",{type:!0,placeholder:!0}),k=u(a),C=i(a,"INPUT",{type:!0,placeholder:!0}),E=u(a),_=i(a,"INPUT",{type:!0,placeholder:!0}),O=u(a),j=i(a,"INPUT",{type:!0,class:!0,value:!0}),a.forEach(c),this.h()},h(){f(l,"type","text"),f(l,"placeholder","Token Name"),f(r,"type","text"),f(r,"class","form-group bg-white svelte-1tlqvlh"),void 0===t[1].color&&T(()=>t[6].call(r)),f(w,"type","number"),f(w,"placeholder","Power"),f(U,"type","number"),f(U,"placeholder","Toughnes"),f(C,"type","text"),f(C,"placeholder","Abilities"),f(_,"type","number"),f(_,"placeholder","Copies"),f(j,"type","submit"),f(j,"class","btn btn-primary"),j.value="Add Token",f(e,"class","grid-3 form-container form-group")},m(a,o){p(a,e,o),h(e,l),m(l,t[1].name),h(e,n),h(e,r);for(let t=0;t<z.length;t+=1)z[t].m(r,null);y(r,t[1].color),h(e,x),h(e,w),m(w,t[1].power),h(e,N),h(e,U),m(U,t[1].tough),h(e,k),h(e,C),m(C,t[1].ability),h(e,E),h(e,_),m(_,t[0]),h(e,O),h(e,j),A=[v(l,"input",t[5]),v(r,"change",t[6]),v(w,"input",D),v(U,"input",F),v(C,"input",t[9]),v(_,"input",G),v(e,"submit",t[2])]},p(t,[e]){if(2&e&&l.value!==t[1].name&&m(l,t[1].name),8&e){let l;for(q=t[3],l=0;l<q.length;l+=1){const a=P(t,q,l);z[l]?z[l].p(a,e):(z[l]=I(a),z[l].c(),z[l].m(r,null))}for(;l<z.length;l+=1)z[l].d(1);z.length=q.length}2&e&&y(r,t[1].color),!B&&2&e&&m(w,t[1].power),B=!1,!R&&2&e&&m(U,t[1].tough),R=!1,2&e&&C.value!==t[1].ability&&m(C,t[1].ability),!S&&1&e&&m(_,t[0]),S=!1},i:d,o:d,d(t){t&&c(e),g(z,t),b(A)}}}function k(t,e,l){const a=x();let n=1,o={name:"",color:"Colorless",power:null,tough:null,ability:"",tapped:!1,id:0};let i=[{id:1,text:"Black"},{id:2,text:"White"},{id:3,text:"Red"},{id:4,text:"Green"},{id:5,text:"Blue"},{id:6,text:"Colorless"}];return[n,o,t=>{t.preventDefault(),a("addtoken",[o,n]),l(1,o={name:"",color:"Colorless",power:null,tough:null,ability:"",tapped:!1,id:0}),l(0,n=1)},i,a,function(){o.name=this.value,l(1,o),l(3,i)},function(){o.color=w(this),l(1,o),l(3,i)},function(){o.power=N(this.value),l(1,o),l(3,i)},function(){o.tough=N(this.value),l(1,o),l(3,i)},function(){o.ability=this.value,l(1,o),l(3,i)},function(){n=N(this.value),l(0,n)}]}export default class extends t{constructor(t){super(),e(this,t,k,U,l,{})}}