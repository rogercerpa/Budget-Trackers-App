if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('service-worker.js')
		.then((reg) => console.log('service worker found', reg))
		.catch((err) => console.log('service worker not found', err));
}
