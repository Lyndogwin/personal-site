!function(){"use strict";const e=["client/about.a7b4a542.js","client/[slug].55901d2a.js","client/addPlayer.47213db3.js","client/index.7b282c3e.js","client/index.8f425eaf.js","client/player.a1e1c319.js","client/index.b18ae909.js","client/chunk.5e1e39cf.js","client/client.01e3045e.js"].concat(["service-worker-index.html","BMS-logo.png","dark-mage-small.gif","dark-mage.gif","favicon.png","global.css","great-success.png","logo-192.png","logo-512.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1561167383391").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1561167383391"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1561167383391").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
