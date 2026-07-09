const CACHE_NAME = "uyp-kurs-v2-guard1-fbauth2-debug3-diag2-v4name";
const CORE_ASSETS = [
  "./index.html",
  "./styles.css",
  "./engine.js",
  "./protect.js",
  "./guard-v4.js",
  "./logo.png",
  "./icon-192.png",
  "./icon-512.png",
  "./manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).catch(()=>{})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const isHTML = event.request.mode === "navigate" ||
    (event.request.headers.get("accept") || "").includes("text/html");

  if (isHTML) {
    // HTML səhifələr üçün: əvvəlcə internetdən son versiyanı gətir, yalnız offline olduqda keşi göstər
    event.respondWith(
      fetch(event.request, { cache: "no-store" })
        .then((networkResponse) => {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Digər fayllar (CSS/JS/şəkil) üçün: keşdən sürətli göstər, arxada yenilə
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && event.request.url.startsWith(self.location.origin)) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
