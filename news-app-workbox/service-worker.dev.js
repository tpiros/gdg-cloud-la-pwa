import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

console.log('Workbox loaded');
precacheAndRoute(self.__WB_MANIFEST);

const apiRoute = 'http://localhost:3000/api/news';
registerRoute(
  apiRoute,
  new StaleWhileRevalidate({
    cacheName: 'api-cache',
  })
);
