import {precacheAndRoute} from 'workbox-precaching';
import {clientsClaim} from 'workbox-core';


clientsClaim();
self.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST);

