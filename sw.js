var cacheList = [
  'style.css',
  'img/1.jpeg',
  'img/2.jpeg',
  'img/3.jpeg'
];

this.addEventListener('install', function (event) {
  event.waitUntil(
    caches
      .open('v1')
      .then(function (cache) {
        return cache.addAll(cacheList);
      })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
