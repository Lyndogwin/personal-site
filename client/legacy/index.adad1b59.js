import{_ as t,a as n,b as s,c as o,i as r,s as e,d as a,S as f,e as c,t as u,g as i,h,j as l,k as p,l as g,m as v,o as m,y as b,f as d,n as j,G as E}from"./chunk.4abef414.js";function R(t,n,s){var o=Object.create(t);return o.post=n[s],o}function k(t){var n,s,o,r,e=t.post.title;return{c:function(){n=c("li"),s=c("a"),o=u(e),this.h()},l:function(t){n=i(t,"LI",{},!1);var r=h(n);s=i(r,"A",{rel:!0,href:!0},!1);var a=h(s);o=l(a,e),a.forEach(p),r.forEach(p),this.h()},h:function(){g(s,"rel","prefetch"),g(s,"href",r="blog/"+t.post.slug)},m:function(t,r){v(t,n,r),m(n,s),m(s,o)},p:function(t,n){t.posts&&e!==(e=n.post.title)&&b(o,e),t.posts&&r!==(r="blog/"+n.post.slug)&&g(s,"href",r)},d:function(t){t&&p(n)}}}function x(t){for(var n,s,o,r,e,a=t.posts,f=[],b=0;b<a.length;b+=1)f[b]=k(R(t,a,b));return{c:function(){n=d(),s=c("h1"),o=u("Recent Reports"),r=d(),e=c("ul");for(var t=0;t<f.length;t+=1)f[t].c();this.h()},l:function(t){n=l(t,"\n\n"),s=i(t,"H1",{},!1);var a=h(s);o=l(a,"Recent Reports"),a.forEach(p),r=l(t,"\n\n"),e=i(t,"UL",{class:!0},!1);for(var c=h(e),u=0;u<f.length;u+=1)f[u].l(c);c.forEach(p),this.h()},h:function(){document.title="Blog",g(e,"class","svelte-1frg2tf")},m:function(t,a){v(t,n,a),v(t,s,a),m(s,o),v(t,r,a),v(t,e,a);for(var c=0;c<f.length;c+=1)f[c].m(e,null)},p:function(t,n){if(t.posts){a=n.posts;for(var s=0;s<a.length;s+=1){var o=R(n,a,s);f[s]?f[s].p(t,o):(f[s]=k(o),f[s].c(),f[s].m(e,null))}for(;s<f.length;s+=1)f[s].d(1);f.length=a.length}},i:j,o:j,d:function(t){t&&(p(n),p(s),p(r),p(e)),E(f,t)}}}function y(t){t.params,t.query;return this.fetch("blog.json").then(function(t){return t.json()}).then(function(t){return{posts:t}})}function L(t,n,s){var o=n.posts;return t.$set=function(t){"posts"in t&&s("posts",o=t.posts)},{posts:o}}export default(function(c){function u(t){var f;return n(this,u),f=s(this,o(u).call(this)),r(a(f),t,L,x,e,["posts"]),f}return t(u,f),u}());export{y as preload};
//# sourceMappingURL=index.adad1b59.js.map
