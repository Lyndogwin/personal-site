import{S as a,i as e,s as r,e as n,a as l,c as t,b as s,f as o,d as f,g as c,h as i,m,q as p,A as d,p as y,r as u,z as h,v,B as g,t as $,j as P,n as b}from"./chunk.ad9b5abb.js";import"./token.d7a678da.js";import"./addToken.8f1a726d.js";import"./tabLink.8b7ec6be.js";import j from"./player.275099e4.js";import k from"./addPlayer.13151c56.js";function E(a,e,r){const n=Object.create(a);return n.player=e[r],n}function N(a){for(var e,r,n=a.players,l=[],t=0;t<n.length;t+=1)l[t]=x(E(a,n,t));const s=a=>p(l[a],1,()=>{l[a]=null});return{c(){for(var a=0;a<l.length;a+=1)l[a].c();e=v()},l(a){for(var r=0;r<l.length;r+=1)l[r].l(a);e=v()},m(a,n){for(var t=0;t<l.length;t+=1)l[t].m(a,n);i(a,e,n),r=!0},p(a,r){if(a.players){n=r.players;for(var t=0;t<n.length;t+=1){const s=E(r,n,t);l[t]?(l[t].p(a,s),y(l[t],1)):(l[t]=x(s),l[t].c(),y(l[t],1),l[t].m(e.parentNode,e))}for(h(),t=n.length;t<l.length;t+=1)s(t);d()}},i(a){if(!r){for(var e=0;e<n.length;e+=1)y(l[e]);r=!0}},o(a){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)p(l[a]);r=!1},d(a){g(l,a),a&&o(e)}}}function w(a){var e,r;return{c(){e=n("h1"),r=$("No Players")},l(a){e=t(a,"H1",{},!1);var n=s(e);r=f(n,"No Players"),n.forEach(o)},m(a,n){i(a,e,n),P(e,r)},p:b,i:b,o:b,d(a){a&&o(e)}}}function x(a){var e,r=new j({props:{name:a.player.name,life:a.player.life}});return r.$on("removeplayer",a.removePlayer),{c(){r.$$.fragment.c()},l(a){r.$$.fragment.l(a)},m(a,n){m(r,a,n),e=!0},p(a,e){var n={};a.players&&(n.name=e.player.name),a.players&&(n.life=e.player.life),r.$set(n)},i(a){e||(y(r.$$.fragment,a),e=!0)},o(a){p(r.$$.fragment,a),e=!1},d(a){u(r,a)}}}function B(a){var e,r,v,g,$,P,b=new k({});b.$on("addplayer",a.addPlayer);var j=[w,N],E=[];function x(a){return 0===a.players.length?0:1}return g=x(a),$=E[g]=j[g](a),{c(){e=n("div"),b.$$.fragment.c(),r=l(),v=n("div"),$.c(),this.h()},l(a){e=t(a,"DIV",{class:!0},!1);var n=s(e);b.$$.fragment.l(n),n.forEach(o),r=f(a,"\n    \n"),v=t(a,"DIV",{class:!0},!1);var l=s(v);$.l(l),l.forEach(o),this.h()},h(){c(e,"class","container"),c(v,"class","container")},m(a,n){i(a,e,n),m(b,e,null),i(a,r,n),i(a,v,n),E[g].m(v,null),P=!0},p(a,e){var r=g;(g=x(e))===r?E[g].p(a,e):(h(),p(E[r],1,()=>{E[r]=null}),d(),($=E[g])||($=E[g]=j[g](e)).c(),y($,1),$.m(v,null))},i(a){P||(y(b.$$.fragment,a),y($),P=!0)},o(a){p(b.$$.fragment,a),p($),P=!1},d(a){a&&o(e),u(b),a&&(o(r),o(v)),E[g].d()}}}function D(a,e,r){let n=[{name:"Player1",life:20},{name:"Player2",life:20}];return{players:n,addPlayer:a=>{const e=a.detail;r("players",n=[...n,e])},removePlayer:a=>{r("players",n=n.filter(e=>e.name!==a.detail))}}}export default class extends a{constructor(a){super(),e(this,a,D,B,r,[])}}
//# sourceMappingURL=index.e51b1a14.js.map