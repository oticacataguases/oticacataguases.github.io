const CACHE_NAME = 'otccatalogo-v1';
const urlsToCache = [
  '/',
  '/catalogo',
  '/assets/css/main.css',
  '/scripts/main.js',
  '/assets/favicon.ico',
  '/catalogo/print.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
