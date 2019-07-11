workbox.setConfig({
    debug: true,
});

workbox.core.setCacheNameDetails({
    prefix: 'deadlines',
    suffix: 'v1'
  });

workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'images',
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


