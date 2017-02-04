
'use strict';
importScripts('sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'my-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    'index.html',
    'manifest.json',
    'sw.js'
  ]
);

// dynamically cache for Offline First
self.toolbox.router.any('/*', self.toolbox.cacheFirst);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;