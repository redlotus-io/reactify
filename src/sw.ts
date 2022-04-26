import { precacheAndRoute, cleanupOutdatedCaches } from "workbox-precaching";
import { setDefaultHandler } from "workbox-routing";
import { NetworkOnly } from "workbox-strategies";

declare let self: ServiceWorkerGlobalScope;

self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting().then();
});

setDefaultHandler(new NetworkOnly());

precacheAndRoute(self.__WB_MANIFEST);

cleanupOutdatedCaches();
