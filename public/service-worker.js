const FILES_TO_CACHE = [
	'/',
	'/index.html',
	'/style.css',
	'/index.js',
	'/app.js'
];
const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

self.addEventListener('install', (evt) => {
	evt.waitUntil(
		caches.open(PRECACHE).then((cache) => {
			cache.addAll(FILES_TO_CACHE);
		})
	);
	// self.skipWaiting();
});

self.addEventListener('activate', function(evt) {
	// evt.waitUntil(
	// 	caches.keys().then((keyList) => {
	// 		return Promise.all(
	// 			keyList.map((key) => {
	// 				if (key !== PRECACHE && key !== RUNTIME) {
	// 					console.log('Removing old cache data', key);
	// 					return caches.delete(key);
	// 				}
	// 			})
	// 		);
	// 	})
	// );
	// self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
	// if (evt.request.url.startsWith(self.location.origin)) {
	// 	evt.respondWith(
	// 		caches.match(evt.request).then((cachedResponse) => {
	// 			if (cachedResponse) {
	// 				return cachedResponse;
	// 			}
	// 			return caches.open(RUNTIME).then((cache) => {
	// 				return fetch(evt.request).then((response) => {
	// 					return cache.put(evt.request, response.clone()).then(() => {
	// 						return response;
	// 					});
	// 				});
	// 			});
	// 		})
	// 	);
	// }
});
