const CACHE_NAME = 'sim-inventario-v1';
const assets = [
  'index.html',
  'logo.jpg',
  'manifest.json'
];

// Instalar el Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Activar el Service Worker
self.addEventListener('activate', e => {
  console.log('Service Worker de SIM activado correctamente.');
});

// Responder peticiones
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});