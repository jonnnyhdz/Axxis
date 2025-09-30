// runtimeCaching.ts

const runtimeCaching: any[] = [
  {
    urlPattern: /^https?.*/,
    handler: "NetworkFirst",
    options: {
      cacheName: "html-cache",
      expiration: { maxEntries: 50, maxAgeSeconds: 24 * 60 * 60 },
    },
  },
  {
    urlPattern: /\.(?:js|css)$/,
    handler: "StaleWhileRevalidate",
    options: { cacheName: "static-resources" },
  },
  {
    urlPattern: /\/img\/.*\.(?:png|jpg|jpeg|svg|gif|webp)$/,
    handler: "CacheFirst",
    options: {
      cacheName: "image-cache",
      expiration: { maxEntries: 100, maxAgeSeconds: 7 * 24 * 60 * 60 },
    },
  },
  {
    urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
    handler: "StaleWhileRevalidate",
    options: { cacheName: "google-fonts-stylesheets" },
  },
  {
    urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
    handler: "CacheFirst",
    options: {
      cacheName: "google-fonts-webfonts",
      expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
    },
  },
];

export default runtimeCaching;
