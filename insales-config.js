'use strict';

/**
 * my shitty settings
 */
module.exports = {
  account: {
    id: '91ce7cd60277bb479983b6c068a3f025',
    token: '1f2af060bdbb37dd2563f3df924c3eea',
    url: 'https://myshop-btk563.myinsales.ru/',
    http: true
  },
  theme: {
    id: '1880818',
    root: '.',
    backup: true,
    assetsSync: true,
    excludeFiles: [],
    onUpdate: function onUpdate() {
      // theme update
    },
    assetsDomain: 'https://assets.insales.ru'
  },
  util: {
    openBrowser: true
  },
  plugins: {
    exclude: ['*.min.js', '*.min.css', '*.liquid']
  },
  chokidarOptions: {
    ignored: /[\/\\]\./,
    ignoreInitial: true,
    followSymlinks: true,
    usePolling: false,
    interval: 200,
    delay: 0,
    binaryInterval: 300,
    alwaysStat: true,
    depth: 99,
    awaitWriteFinish: {
      stabilityThreshold: 100,
      pollInterval: 100
    },
    ignorePermissionErrors: true
  }
};