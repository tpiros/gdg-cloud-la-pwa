importScripts(
  'node_modules/cloudinary-workbox-plugin/dist/cloudinaryPlugin.min.js'
);
import 'regenerator-runtime/runtime';
import { generateCard, generateArticle } from './utils.mjs';

import { clientsClaim, skipWaiting } from 'workbox-core';
import {
  precacheAndRoute,
  getCacheKeyForURL,
  cleanupOutdatedCaches,
  matchPrecache,
} from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';
import { strategy as streamsStrategy } from 'workbox-streams';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';

precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

const apiRoute = `http://localhost:3000/api/news`;

const cacheStrategy = new CacheFirst();
const apiStrategy = new StaleWhileRevalidate({
  cacheName: 'api-cache',
});

registerRoute(
  // new RegExp('^https://res.cloudinary.com'),
  ({ url }) => url.origin === 'https://res.cloudinary.com',
  new CacheFirst({
    cacheName: 'cloudinary-images',
    plugins: [
      {
        requestWillFetch: async ({ request }) =>
          cloudinaryPlugin.requestWillFetch(request),
      },
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        purgeOnQuotaError: true,
      }),
    ],
  })
);

registerRoute(
  '/',
  streamsStrategy([
    () => matchPrecache('partials/header.html'),
    () => matchPrecache('partials/info.html'),
    () => matchPrecache('partials/hero.html'),
    () => matchPrecache('partials/articles.html'),
    async ({ event, url }) => {
      try {
        const response = await apiStrategy.handle({
          event,
          request: apiRoute,
        });
        const articles = await response.json();
        let cards = '';
        articles.forEach((article) => {
          cards += generateCard(article);
        });
        return cards;
      } catch (error) {
        console.error(error);
      }
    },
    () => matchPrecache('partials/articles-close.html'),
    () => matchPrecache('partials/footer.html'),
  ])
);

registerRoute(
  new RegExp('/news/[0-9]+'),
  streamsStrategy([
    () => matchPrecache('partials/header.html'),
    () => matchPrecache('partials/info.html'),
    () => matchPrecache('partials/hero.html'),
    async ({ event, url }) => {
      const id = url.pathname.split('/')[2];
      try {
        const response = await apiStrategy.handle({
          event,
          request: `${apiRoute}/${id}`,
        });
        const article = await response.json();
        return generateArticle(article[0]);
      } catch (error) {
        console.error(error);
      }
    },
    () => matchPrecache('partials/articles-close.html'),
    () => matchPrecache('partials/footer.html'),
  ])
);

registerRoute(
  new RegExp(`/about.html`),
  streamsStrategy([
    () => matchPrecache('partials/header.html'),
    () => matchPrecache('partials/info.html'),
    () => matchPrecache('partials/about.html'),
    () => matchPrecache('partials/footer.html'),
  ])
);
skipWaiting();
clientsClaim();
