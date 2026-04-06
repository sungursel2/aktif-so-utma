const CACHE = 'aktif-sogutma-v1';
const FILES = ['./index.html','./manifest.json','./products.json'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
