const FILES_TO_CACHE = [ '/', 'index.html', 'style.css', 'index.js' ];
const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

console.log(FILES_TO_CACHE);

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

// self.addEventListener('fetch', (evt) => {
// 	evt.respondWith(
// 		caches.match(evt.request).then((cacheRes) => {
// 			if (cacheRes) {
// 				return cacheRes;
// 			}
// 		})
// 	);
// });

self.addEventListener('fetch', (event) => {
	if (event.request.url.startsWith(self.location.origin)) {
		event.respondWith(
			caches.match(event.request).then((cachedResponse) => {
				if (cachedResponse) {
					return cachedResponse;
				}

				return caches.open(RUNTIME).then((cache) => {
					return fetch(event.request).then((response) => {
						return cache.put(event.request, response.clone()).then(() => {
							return response;
						});
					});
				});
			})
		);
	}
});
