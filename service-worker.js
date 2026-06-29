const CACHE_NAME = "sound-timer-v1";

const FILES = [

"./",
"./index.html",
"./background.gif",

"./sound1.mp3",
"./sound2.mp3",
"./sound3.mp3",
"./sound4.mp3",
"./sound5.mp3",

"./special.mp3",

"./icon.png"

];


self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)

        .then(cache => cache.addAll(FILES))

    );

});


self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)

        .then(response => response || fetch(event.request))

    );

});