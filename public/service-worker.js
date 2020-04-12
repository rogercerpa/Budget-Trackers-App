const FILES_TO_CACHE = [ '/', 'index.html', 'style.css', 'index.js' ];
const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

self.addEventListener('install', (evt) => {
	evt.waitUntil(
		caches
			.open(PRECACHE)
			.then((cache) => cache.addAll(FILES_TO_CACHE))
			.then(self.skipWaiting())
	);
});

self.addEventListener('activate', (evt) => {
	console.log('service worker activated');
});
self.addEventListener('fetch', (evt) => {
	evt.respondWith(
		caches.match(evt.request).then((cacheRes) => {
			if (cacheRes) {
				return cacheRes;
			}
		})
	);
});
