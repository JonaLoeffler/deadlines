importScripts("/deadlines/precache-manifest.7c052d9168a8c9f0791bcc18b24223fe.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.setConfig({
    debug: true,
});

workbox.core.setCacheNameDetails({
    prefix: 'deadlines',
    suffix: 'v0.1.4'
  });

workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'images',
    }),
);

workbox.routing.registerRoute(
    /\.(?:ttf|woff|woff2)$/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'fonts',
    }),
);

workbox.routing.registerRoute(
    new RegExp('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'bootstrap',
    }),
);
workbox.routing.registerRoute(
    new RegExp('https://use.fontawesome.com/releases/v5.8.1/css/all.css'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'fontawesome',
    }),
);

workbox.precaching.precacheAndRoute(self.__precacheManifest);



