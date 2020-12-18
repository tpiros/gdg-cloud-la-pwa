(async () => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./service-worker.js');
      console.log('Service Worker is good to go 🎉');
      const cache = await caches.open('video-cache');
      await cache.add(
        'https://res.cloudinary.com/tamas-demo/video/upload/w_800/tuwygstgfcghkpkqmfvs.mp4'
      );
    } catch (error) {
      console.log(error);
    }
  }
})();
