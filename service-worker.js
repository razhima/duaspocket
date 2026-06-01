const CACHE_NAME = "duas-pocket-v1";

const FILES_TO_CACHE = [

"./",
"./index.html",
"./login.html",
"./signup.html",
"./favorites.html",
"./duas.html",
"./detail.html",
"./admin.html",

"./css/style.css",

"./js/app.js",
"./js/auth.js",
"./js/data.js",
"./js/duas.js",
"./js/detail.js",
"./js/favorites.js",
"./js/admin.js",
"./js/pwa.js",

"./manifest.json"

];

self.addEventListener(
"install",
event=>{

event.waitUntil(

caches.open(CACHE_NAME)

.then(cache=>{

return cache.addAll(
FILES_TO_CACHE
);

})

);

});

self.addEventListener(
"activate",
event=>{

event.waitUntil(

caches.keys()

.then(keys=>{

return Promise.all(

keys.map(key=>{

if(
key !== CACHE_NAME
){

return caches.delete(
key
);

}

})

);

})

);

});

self.addEventListener(
"fetch",
event=>{

event.respondWith(

caches.match(
event.request
)

.then(response=>{

return response ||
fetch(
event.request
);

})

);

});