let version = 'version1';

this.addEventListener('install', event => {
    event.waitUntil(
        caches.open(version).then(cache => {
            cache.addAll([
                'static/js/main.a3588660.js',
                'static/js/main.a3588660.js.map',
                'static/css/main.b9bfe269.css',
                'static/css/main.b9bfe269.css.map',
                'index.html',
                '/'
            ])
        })
    )
})

this.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response ? response : null;
        })
    )
})