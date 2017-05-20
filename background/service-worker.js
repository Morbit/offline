self.addEventListener('install', function(event) {
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    if (self.clients && clients.claim) {
        clients.claim();
    }
});

self.addEventListener('sync', function(event) {
  if (event.tag == 'image-fetch') {
    event.waitUntil(fetchImage());
  }
});

function fetchImage()
{
  fetch('https://jakearchibald.com/static/imgs/me.439a7c69520f.jpg')
    .then(function(response) {
      return response;
    })
    .then(function(text) {
      console.log('Request successful', text);
    })
    .catch(function(error) {
      console.log('Request failed', error);
    });
}
