import{S as a,i as r,s as e,e as n,a as l,c as s,b as t,f as o,d as f,g as c,h as i,m,q as p,A as u,p as d,r as y,z as h,v as g,B as v,t as $,j as P,n as j}from"./chunk.dbc27faf.js";import b from"./player.f1cdccca.js";import E from"./addPlayer.5e43e81a.js";function N(a,r,e){const n=Object.create(a);return n.Player=r[e],n}function w(a){for(var r,e,n=a.players,l=[],s=0;s<n.length;s+=1)l[s]=B(N(a,n,s));const t=a=>p(l[a],1,()=>{l[a]=null});return{c(){for(var a=0;a<l.length;a+=1)l[a].c();r=g()},l(a){for(var e=0;e<l.length;e+=1)l[e].l(a);r=g()},m(a,n){for(var s=0;s<l.length;s+=1)l[s].m(a,n);i(a,r,n),e=!0},p(a,e){if(a.players){n=e.players;for(var s=0;s<n.length;s+=1){const t=N(e,n,s);l[s]?(l[s].p(a,t),d(l[s],1)):(l[s]=B(t),l[s].c(),d(l[s],1),l[s].m(r.parentNode,r))}for(h();s<l.length;s+=1)t(s);u()}},i(a){if(!e){for(var r=0;r<n.length;r+=1)d(l[r]);e=!0}},o(a){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)p(l[a]);e=!1},d(a){v(l,a),a&&o(r)}}}function x(a){var r,e;return{c(){r=n("h1"),e=$("No Players")},l(a){r=s(a,"H1",{},!1);var n=t(r);e=f(n,"No Players"),n.forEach(o)},m(a,n){i(a,r,n),P(r,e)},p:j,i:j,o:j,d(a){a&&o(r)}}}function B(a){var r,e=new b({props:{name:a.Player.name,life:a.Player.life}});return{c(){e.$$.fragment.c()},l(a){e.$$.fragment.l(a)},m(a,n){m(e,a,n),r=!0},p(a,r){var n={};a.players&&(n.name=r.Player.name),a.players&&(n.life=r.Player.life),e.$set(n)},i(a){r||(d(e.$$.fragment,a),r=!0)},o(a){p(e.$$.fragment,a),r=!1},d(a){y(e,a)}}}function D(a){var r,e,g,v,$,P,j=new E({});j.$on("addplayer",a.addPlayer);var b=[x,w],N=[];function B(a){return 0===a.players.length?0:1}return v=B(a),$=N[v]=b[v](a),{c(){r=n("div"),j.$$.fragment.c(),e=l(),g=n("div"),$.c(),this.h()},l(a){r=s(a,"DIV",{class:!0},!1);var n=t(r);j.$$.fragment.l(n),n.forEach(o),e=f(a,"\n    \n"),g=s(a,"DIV",{class:!0},!1);var l=t(g);$.l(l),l.forEach(o),this.h()},h(){c(r,"class","container"),c(g,"class","container")},m(a,n){i(a,r,n),m(j,r,null),i(a,e,n),i(a,g,n),N[v].m(g,null),P=!0},p(a,r){var e=v;(v=B(r))===e?N[v].p(a,r):(h(),p(N[e],1,()=>{N[e]=null}),u(),($=N[v])||($=N[v]=b[v](r)).c(),d($,1),$.m(g,null))},i(a){P||(d(j.$$.fragment,a),d($),P=!0)},o(a){p(j.$$.fragment,a),p($),P=!1},d(a){a&&o(r),y(j),a&&(o(e),o(g)),N[v].d()}}}function I(a,r,e){let n=[{name:"Player1",life:20},{name:"Player2",life:20}];return{players:n,addPlayer:a=>{const r=a.detail;e("players",n=[...n,r])}}}export default class extends a{constructor(a){super(),r(this,a,I,D,e,[])}}
//# sourceMappingURL=index.d657d08e.js.map
