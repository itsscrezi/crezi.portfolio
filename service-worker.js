const CACHE="crezi-static-v1";
const FILES=["./","./index.html","./styles.css","./script.js","./content.js","./favicon.svg","./404.html","./credits.html","./assets/crezi-portrait.png"];
self.addEventListener("install",event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES))));
self.addEventListener("activate",event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",event=>{
  const req=event.request;
  if(req.method!=="GET" || new URL(req.url).origin!==location.origin) return;
  event.respondWith(caches.match(req).then(cached=>cached || fetch(req).then(response=>{
    const copy=response.clone(); caches.open(CACHE).then(cache=>cache.put(req,copy)); return response;
  }).catch(()=>caches.match("./404.html"))));
});