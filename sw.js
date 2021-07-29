// on install - the application shell cached
self.addEventLIstener('install', function(event) {
    event.waitUntil(
    caches.open('sw-cache').then(function(cache) {
        // static files thatt make up aplication are cached
        return cache.add('index.html');
        
        })
    
    );

});


// with request network
self.addEventListener('fetch', funtion(event) {
    evnet.respondWith(
    // try the chache
    caches.match(event.request).then(function(response) {
        //return it if there is a response, or else fetch it again
        return resonse || fetch(event.request);
        
        })

    
    );



});