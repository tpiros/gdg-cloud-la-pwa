(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    // @ts-ignore
    try {
        self['workbox:core:6.0.2'] && _();
    }
    catch (e) { }

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    const fallback = (code, ...args) => {
        let msg = code;
        if (args.length > 0) {
            msg += ` :: ${JSON.stringify(args)}`;
        }
        return msg;
    };
    const messageGenerator = 
        fallback ;

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * Workbox errors should be thrown with this class.
     * This allows use to ensure the type easily in tests,
     * helps developers identify errors from workbox
     * easily and allows use to optimise error
     * messages correctly.
     *
     * @private
     */
    class WorkboxError extends Error {
        /**
         *
         * @param {string} errorCode The error code that
         * identifies this particular error.
         * @param {Object=} details Any relevant arguments
         * that will help developers identify issues should
         * be added as a key on the context object.
         */
        constructor(errorCode, details) {
            const message = messageGenerator(errorCode, details);
            super(message);
            this.name = errorCode;
            this.details = details;
        }
    }

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    const _cacheNameDetails = {
        googleAnalytics: 'googleAnalytics',
        precache: 'precache-v2',
        prefix: 'workbox',
        runtime: 'runtime',
        suffix: typeof registration !== 'undefined' ? registration.scope : '',
    };
    const _createCacheName = (cacheName) => {
        return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
            .filter((value) => value && value.length > 0)
            .join('-');
    };
    const eachCacheNameDetail = (fn) => {
        for (const key of Object.keys(_cacheNameDetails)) {
            fn(key);
        }
    };
    const cacheNames = {
        updateDetails: (details) => {
            eachCacheNameDetail((key) => {
                if (typeof details[key] === 'string') {
                    _cacheNameDetails[key] = details[key];
                }
            });
        },
        getGoogleAnalyticsName: (userCacheName) => {
            return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
        },
        getPrecacheName: (userCacheName) => {
            return userCacheName || _createCacheName(_cacheNameDetails.precache);
        },
        getPrefix: () => {
            return _cacheNameDetails.prefix;
        },
        getRuntimeName: (userCacheName) => {
            return userCacheName || _createCacheName(_cacheNameDetails.runtime);
        },
        getSuffix: () => {
            return _cacheNameDetails.suffix;
        },
    };

    /*
      Copyright 2019 Google LLC
      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    const logger = ( null );

    /*
      Copyright 2020 Google LLC
      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * A utility method that makes it easier to use `event.waitUntil` with
     * async functions and return the result.
     *
     * @param {ExtendableEvent} event
     * @param {Function} asyncFn
     * @return {Function}
     * @private
     */
    function waitUntil(event, asyncFn) {
        const returnPromise = asyncFn();
        event.waitUntil(returnPromise);
        return returnPromise;
    }

    // @ts-ignore
    try {
        self['workbox:precaching:6.0.2'] && _();
    }
    catch (e) { }

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    // Name of the search parameter used to store revision info.
    const REVISION_SEARCH_PARAM = '__WB_REVISION__';
    /**
     * Converts a manifest entry into a versioned URL suitable for precaching.
     *
     * @param {Object|string} entry
     * @return {string} A URL with versioning info.
     *
     * @private
     * @memberof module:workbox-precaching
     */
    function createCacheKey(entry) {
        if (!entry) {
            throw new WorkboxError('add-to-cache-list-unexpected-type', { entry });
        }
        // If a precache manifest entry is a string, it's assumed to be a versioned
        // URL, like '/app.abcd1234.js'. Return as-is.
        if (typeof entry === 'string') {
            const urlObject = new URL(entry, location.href);
            return {
                cacheKey: urlObject.href,
                url: urlObject.href,
            };
        }
        const { revision, url } = entry;
        if (!url) {
            throw new WorkboxError('add-to-cache-list-unexpected-type', { entry });
        }
        // If there's just a URL and no revision, then it's also assumed to be a
        // versioned URL.
        if (!revision) {
            const urlObject = new URL(url, location.href);
            return {
                cacheKey: urlObject.href,
                url: urlObject.href,
            };
        }
        // Otherwise, construct a properly versioned URL using the custom Workbox
        // search parameter along with the revision info.
        const cacheKeyURL = new URL(url, location.href);
        const originalURL = new URL(url, location.href);
        cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
        return {
            cacheKey: cacheKeyURL.href,
            url: originalURL.href,
        };
    }

    /*
      Copyright 2020 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * A plugin, designed to be used with PrecacheController, to determine the
     * of assets that were updated (or not updated) during the install event.
     *
     * @private
     */
    class PrecacheInstallReportPlugin {
        constructor() {
            this.updatedURLs = [];
            this.notUpdatedURLs = [];
            this.handlerWillStart = async ({ request, state, }) => {
                // TODO: `state` should never be undefined...
                if (state) {
                    state.originalRequest = request;
                }
            };
            this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
                if (event.type === 'install') {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
                return cachedResponse;
            };
        }
    }

    /*
      Copyright 2020 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * A plugin, designed to be used with PrecacheController, to translate URLs into
     * the corresponding cache key, based on the current revision info.
     *
     * @private
     */
    class PrecacheCacheKeyPlugin {
        constructor({ precacheController }) {
            this.cacheKeyWillBeUsed = async ({ request, params, }) => {
                const cacheKey = params && params.cacheKey ||
                    this._precacheController.getCacheKeyForURL(request.url);
                return cacheKey ? new Request(cacheKey) : request;
            };
            this._precacheController = precacheController;
        }
    }

    /*
      Copyright 2019 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    let supportStatus;
    /**
     * A utility function that determines whether the current browser supports
     * constructing a new `Response` from a `response.body` stream.
     *
     * @return {boolean} `true`, if the current browser can successfully
     *     construct a `Response` from a `response.body` stream, `false` otherwise.
     *
     * @private
     */
    function canConstructResponseFromBodyStream() {
        if (supportStatus === undefined) {
            const testResponse = new Response('');
            if ('body' in testResponse) {
                try {
                    new Response(testResponse.body);
                    supportStatus = true;
                }
                catch (error) {
                    supportStatus = false;
                }
            }
            supportStatus = false;
        }
        return supportStatus;
    }

    /*
      Copyright 2019 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * Allows developers to copy a response and modify its `headers`, `status`,
     * or `statusText` values (the values settable via a
     * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
     * object in the constructor).
     * To modify these values, pass a function as the second argument. That
     * function will be invoked with a single object with the response properties
     * `{headers, status, statusText}`. The return value of this function will
     * be used as the `ResponseInit` for the new `Response`. To change the values
     * either modify the passed parameter(s) and return it, or return a totally
     * new object.
     *
     * This method is intentionally limited to same-origin responses, regardless of
     * whether CORS was used or not.
     *
     * @param {Response} response
     * @param {Function} modifier
     * @memberof module:workbox-core
     */
    async function copyResponse(response, modifier) {
        let origin = null;
        // If response.url isn't set, assume it's cross-origin and keep origin null.
        if (response.url) {
            const responseURL = new URL(response.url);
            origin = responseURL.origin;
        }
        if (origin !== self.location.origin) {
            throw new WorkboxError('cross-origin-copy-response', { origin });
        }
        const clonedResponse = response.clone();
        // Create a fresh `ResponseInit` object by cloning the headers.
        const responseInit = {
            headers: new Headers(clonedResponse.headers),
            status: clonedResponse.status,
            statusText: clonedResponse.statusText,
        };
        // Apply any user modifications.
        const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
        // Create the new response from the body stream and `ResponseInit`
        // modifications. Note: not all browsers support the Response.body stream,
        // so fall back to reading the entire body into memory as a blob.
        const body = canConstructResponseFromBodyStream() ?
            clonedResponse.body : await clonedResponse.blob();
        return new Response(body, modifiedResponseInit);
    }

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    const getFriendlyURL = (url) => {
        const urlObj = new URL(String(url), location.href);
        // See https://github.com/GoogleChrome/workbox/issues/2323
        // We want to include everything, except for the origin if it's same-origin.
        return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
    };

    /*
      Copyright 2020 Google LLC
      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    function stripParams(fullURL, ignoreParams) {
        const strippedURL = new URL(fullURL);
        for (const param of ignoreParams) {
            strippedURL.searchParams.delete(param);
        }
        return strippedURL.href;
    }
    /**
     * Matches an item in the cache, ignoring specific URL params. This is similar
     * to the `ignoreSearch` option, but it allows you to ignore just specific
     * params (while continuing to match on the others).
     *
     * @private
     * @param {Cache} cache
     * @param {Request} request
     * @param {Object} matchOptions
     * @param {Array<string>} ignoreParams
     * @return {Promise<Response|undefined>}
     */
    async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
        const strippedRequestURL = stripParams(request.url, ignoreParams);
        // If the request doesn't include any ignored params, match as normal.
        if (request.url === strippedRequestURL) {
            return cache.match(request, matchOptions);
        }
        // Otherwise, match by comparing keys
        const keysOptions = { ...matchOptions, ignoreSearch: true };
        const cacheKeys = await cache.keys(request, keysOptions);
        for (const cacheKey of cacheKeys) {
            const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
            if (strippedRequestURL === strippedCacheKeyURL) {
                return cache.match(cacheKey, matchOptions);
            }
        }
        return;
    }

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * The Deferred class composes Promises in a way that allows for them to be
     * resolved or rejected from outside the constructor. In most cases promises
     * should be used directly, but Deferreds can be necessary when the logic to
     * resolve a promise must be separate.
     *
     * @private
     */
    class Deferred {
        /**
         * Creates a promise and exposes its resolve and reject functions as methods.
         */
        constructor() {
            this.promise = new Promise((resolve, reject) => {
                this.resolve = resolve;
                this.reject = reject;
            });
        }
    }

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    // Callbacks to be executed whenever there's a quota error.
    const quotaErrorCallbacks = new Set();

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * Runs all of the callback functions, one at a time sequentially, in the order
     * in which they were registered.
     *
     * @memberof module:workbox-core
     * @private
     */
    async function executeQuotaErrorCallbacks() {
        for (const callback of quotaErrorCallbacks) {
            await callback();
        }
    }

    /*
      Copyright 2019 Google LLC
      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * Returns a promise that resolves and the passed number of milliseconds.
     * This utility is an async/await-friendly version of `setTimeout`.
     *
     * @param {number} ms
     * @return {Promise}
     * @private
     */
    function timeout(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    // @ts-ignore
    try {
        self['workbox:strategies:6.0.2'] && _();
    }
    catch (e) { }

    /*
      Copyright 2020 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    function toRequest(input) {
        return (typeof input === 'string') ? new Request(input) : input;
    }
    /**
     * A class created every time a Strategy instance instance calls
     * [handle()]{@link module:workbox-strategies.Strategy~handle} or
     * [handleAll()]{@link module:workbox-strategies.Strategy~handleAll} that wraps all fetch and
     * cache actions around plugin callbacks and keeps track of when the strategy
     * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
     *
     * @memberof module:workbox-strategies
     */
    class StrategyHandler {
        /**
         * Creates a new instance associated with the passed strategy and event
         * that's handling the request.
         *
         * The constructor also initializes the state that will be passed to each of
         * the plugins handling this request.
         *
         * @param {module:workbox-strategies.Strategy} strategy
         * @param {Object} options
         * @param {Request|string} options.request A request to run this strategy for.
         * @param {ExtendableEvent} options.event The event associated with the
         *     request.
         * @param {URL} [options.url]
         * @param {*} [options.params]
         *     [match callback]{@link module:workbox-routing~matchCallback},
         *     (if applicable).
         */
        constructor(strategy, options) {
            this._cacheKeys = {};
            Object.assign(this, options);
            this.event = options.event;
            this._strategy = strategy;
            this._handlerDeferred = new Deferred();
            this._extendLifetimePromises = [];
            // Copy the plugins list (since it's mutable on the strategy),
            // so any mutations don't affect this handler instance.
            this._plugins = [...strategy.plugins];
            this._pluginStateMap = new Map();
            for (const plugin of this._plugins) {
                this._pluginStateMap.set(plugin, {});
            }
            this.event.waitUntil(this._handlerDeferred.promise);
        }
        /**
         * Fetches a given request (and invokes any applicable plugin callback
         * methods) using the `fetchOptions` and `plugins` defined on the strategy
         * object.
         *
         * The following plugin lifecycle methods are invoked when using this method:
         * - `requestWillFetch()`
         * - `fetchDidSucceed()`
         * - `fetchDidFail()`
         *
         * @param {Request|string} input The URL or request to fetch.
         * @return {Promise<Response>}
         */
        fetch(input) {
            return this.waitUntil((async () => {
                const { event } = this;
                let request = toRequest(input);
                if (request.mode === 'navigate' &&
                    event instanceof FetchEvent &&
                    event.preloadResponse) {
                    const possiblePreloadResponse = await event.preloadResponse;
                    if (possiblePreloadResponse) {
                        return possiblePreloadResponse;
                    }
                }
                // If there is a fetchDidFail plugin, we need to save a clone of the
                // original request before it's either modified by a requestWillFetch
                // plugin or before the original request's body is consumed via fetch().
                const originalRequest = this.hasCallback('fetchDidFail') ?
                    request.clone() : null;
                try {
                    for (const cb of this.iterateCallbacks('requestWillFetch')) {
                        request = await cb({ request: request.clone(), event });
                    }
                }
                catch (err) {
                    throw new WorkboxError('plugin-error-request-will-fetch', {
                        thrownError: err,
                    });
                }
                // The request can be altered by plugins with `requestWillFetch` making
                // the original request (most likely from a `fetch` event) different
                // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
                const pluginFilteredRequest = request.clone();
                try {
                    let fetchResponse;
                    // See https://github.com/GoogleChrome/workbox/issues/1796
                    fetchResponse = await fetch(request, request.mode === 'navigate' ?
                        undefined : this._strategy.fetchOptions);
                    if ("production" !== 'production') ;
                    for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                        fetchResponse = await callback({
                            event,
                            request: pluginFilteredRequest,
                            response: fetchResponse,
                        });
                    }
                    return fetchResponse;
                }
                catch (error) {
                    // `originalRequest` will only exist if a `fetchDidFail` callback
                    // is being used (see above).
                    if (originalRequest) {
                        await this.runCallbacks('fetchDidFail', {
                            error,
                            event,
                            originalRequest: originalRequest.clone(),
                            request: pluginFilteredRequest.clone(),
                        });
                    }
                    throw error;
                }
            })());
        }
        /**
         * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
         * the response generated by `this.fetch()`.
         *
         * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
         * so you do not have to manually call `waitUntil()` on the event.
         *
         * @param {Request|string} input The request or URL to fetch and cache.
         * @return {Promise<Response>}
         */
        async fetchAndCachePut(input) {
            const response = await this.fetch(input);
            const responseClone = response.clone();
            this.waitUntil(this.cachePut(input, responseClone));
            return response;
        }
        /**
         * Matches a request from the cache (and invokes any applicable plugin
         * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
         * defined on the strategy object.
         *
         * The following plugin lifecycle methods are invoked when using this method:
         * - cacheKeyWillByUsed()
         * - cachedResponseWillByUsed()
         *
         * @param {Request|string} key The Request or URL to use as the cache key.
         * @return {Promise<Response|undefined>} A matching response, if found.
         */
        cacheMatch(key) {
            return this.waitUntil((async () => {
                const request = toRequest(key);
                let cachedResponse;
                const { cacheName, matchOptions } = this._strategy;
                const effectiveRequest = await this.getCacheKey(request, 'read');
                const multiMatchOptions = { ...matchOptions, ...{ cacheName } };
                cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
                for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
                    cachedResponse = (await callback({
                        cacheName,
                        matchOptions,
                        cachedResponse,
                        request: effectiveRequest,
                        event: this.event,
                    })) || undefined;
                }
                return cachedResponse;
            })());
        }
        /**
         * Puts a request/response pair in the cache (and invokes any applicable
         * plugin callback methods) using the `cacheName` and `plugins` defined on
         * the strategy object.
         *
         * The following plugin lifecycle methods are invoked when using this method:
         * - cacheKeyWillByUsed()
         * - cacheWillUpdate()
         * - cacheDidUpdate()
         *
         * @param {Request|string} key The request or URL to use as the cache key.
         * @param {Promise<void>} response The response to cache.
         */
        async cachePut(key, response) {
            const request = toRequest(key);
            // Run in the next task to avoid blocking other cache reads.
            // https://github.com/w3c/ServiceWorker/issues/1397
            await timeout(0);
            const effectiveRequest = await this.getCacheKey(request, 'write');
            if (!response) {
                throw new WorkboxError('cache-put-with-no-response', {
                    url: getFriendlyURL(effectiveRequest.url),
                });
            }
            const responseToCache = await this._ensureResponseSafeToCache(response);
            if (!responseToCache) {
                return;
            }
            const { cacheName, matchOptions } = this._strategy;
            const cache = await self.caches.open(cacheName);
            const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
            const oldResponse = hasCacheUpdateCallback ? await cacheMatchIgnoreParams(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions) :
                null;
            try {
                await cache.put(effectiveRequest, hasCacheUpdateCallback ?
                    responseToCache.clone() : responseToCache);
            }
            catch (error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await executeQuotaErrorCallbacks();
                }
                throw error;
            }
            for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
                await callback({
                    cacheName,
                    oldResponse,
                    newResponse: responseToCache.clone(),
                    request: effectiveRequest,
                    event: this.event,
                });
            }
        }
        /**
         * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
         * executes any of those callbacks found in sequence. The final `Request`
         * object returned by the last plugin is treated as the cache key for cache
         * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
         * been registered, the passed request is returned unmodified
         *
         * @param {Request} request
         * @param {string} mode
         * @return {Promise<Request>}
         */
        async getCacheKey(request, mode) {
            if (!this._cacheKeys[mode]) {
                let effectiveRequest = request;
                for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                    effectiveRequest = toRequest(await callback({
                        mode,
                        request: effectiveRequest,
                        event: this.event,
                        params: this.params,
                    }));
                }
                this._cacheKeys[mode] = effectiveRequest;
            }
            return this._cacheKeys[mode];
        }
        /**
         * Returns true if the strategy has at least one plugin with the given
         * callback.
         *
         * @param {string} name The name of the callback to check for.
         * @return {boolean}
         */
        hasCallback(name) {
            for (const plugin of this._strategy.plugins) {
                if (name in plugin) {
                    return true;
                }
            }
            return false;
        }
        /**
         * Runs all plugin callbacks matching the given name, in order, passing the
         * given param object (merged ith the current plugin state) as the only
         * argument.
         *
         * Note: since this method runs all plugins, it's not suitable for cases
         * where the return value of a callback needs to be applied prior to calling
         * the next callback. See
         * [`iterateCallbacks()`]{@link module:workbox-strategies.StrategyHandler#iterateCallbacks}
         * below for how to handle that case.
         *
         * @param {string} name The name of the callback to run within each plugin.
         * @param {Object} param The object to pass as the first (and only) param
         *     when executing each callback. This object will be merged with the
         *     current plugin state prior to callback execution.
         */
        async runCallbacks(name, param) {
            for (const callback of this.iterateCallbacks(name)) {
                // TODO(philipwalton): not sure why `any` is needed. It seems like
                // this should work with `as WorkboxPluginCallbackParam[C]`.
                await callback(param);
            }
        }
        /**
         * Accepts a callback and returns an iterable of matching plugin callbacks,
         * where each callback is wrapped with the current handler state (i.e. when
         * you call each callback, whatever object parameter you pass it will
         * be merged with the plugin's current state).
         *
         * @param {string} name The name fo the callback to run
         * @return {Array<Function>}
         */
        *iterateCallbacks(name) {
            for (const plugin of this._strategy.plugins) {
                if (typeof plugin[name] === 'function') {
                    const state = this._pluginStateMap.get(plugin);
                    const statefulCallback = (param) => {
                        const statefulParam = { ...param, state };
                        // TODO(philipwalton): not sure why `any` is needed. It seems like
                        // this should work with `as WorkboxPluginCallbackParam[C]`.
                        return plugin[name](statefulParam);
                    };
                    yield statefulCallback;
                }
            }
        }
        /**
         * Adds a promise to the
         * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
         * of the event event associated with the request being handled (usually a
         * `FetchEvent`).
         *
         * Note: you can await
         * [`doneWaiting()`]{@link module:workbox-strategies.StrategyHandler~doneWaiting}
         * to know when all added promises have settled.
         *
         * @param {Promise} promise A promise to add to the extend lifetime promises
         *     of the event that triggered the request.
         */
        waitUntil(promise) {
            this._extendLifetimePromises.push(promise);
            return promise;
        }
        /**
         * Returns a promise that resolves once all promises passed to
         * [`waitUntil()`]{@link module:workbox-strategies.StrategyHandler~waitUntil}
         * have settled.
         *
         * Note: any work done after `doneWaiting()` settles should be manually
         * passed to an event's `waitUntil()` method (not this handler's
         * `waitUntil()` method), otherwise the service worker thread my be killed
         * prior to your work completing.
         */
        async doneWaiting() {
            let promise;
            while (promise = this._extendLifetimePromises.shift()) {
                await promise;
            }
        }
        /**
         * Stops running the strategy and immediately resolves any pending
         * `waitUntil()` promises.
         */
        destroy() {
            this._handlerDeferred.resolve();
        }
        /**
         * This method will call cacheWillUpdate on the available plugins (or use
         * status === 200) to determine if the Response is safe and valid to cache.
         *
         * @param {Request} options.request
         * @param {Response} options.response
         * @return {Promise<Response|undefined>}
         *
         * @private
         */
        async _ensureResponseSafeToCache(response) {
            let responseToCache = response;
            let pluginsUsed = false;
            for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
                responseToCache = (await callback({
                    request: this.request,
                    response: responseToCache,
                    event: this.event,
                })) || undefined;
                pluginsUsed = true;
                if (!responseToCache) {
                    break;
                }
            }
            if (!pluginsUsed) {
                if (responseToCache && responseToCache.status !== 200) {
                    responseToCache = undefined;
                }
            }
            return responseToCache;
        }
    }

    /*
      Copyright 2020 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * An abstract base class that all other strategy classes must extend from:
     *
     * @memberof module:workbox-strategies
     */
    class Strategy {
        /**
         * Creates a new instance of the strategy and sets all documented option
         * properties as public instance properties.
         *
         * Note: if a custom strategy class extends the base Strategy class and does
         * not need more than these properties, it does not need to define its own
         * constructor.
         *
         * @param {Object} [options]
         * @param {string} [options.cacheName] Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * [workbox-core]{@link module:workbox-core.cacheNames}.
         * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * to use in conjunction with this caching strategy.
         * @param {Object} [options.fetchOptions] Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         * @param {Object} [options.matchOptions] The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         */
        constructor(options = {}) {
            /**
             * Cache name to store and retrieve
             * requests. Defaults to the cache names provided by
             * [workbox-core]{@link module:workbox-core.cacheNames}.
             *
             * @type {string}
             */
            this.cacheName = cacheNames.getRuntimeName(options.cacheName);
            /**
             * The list
             * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
             * used by this strategy.
             *
             * @type {Array<Object>}
             */
            this.plugins = options.plugins || [];
            /**
             * Values passed along to the
             * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
             * of all fetch() requests made by this strategy.
             *
             * @type {Object}
             */
            this.fetchOptions = options.fetchOptions;
            /**
             * The
             * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
             * for any `cache.match()` or `cache.put()` calls made by this strategy.
             *
             * @type {Object}
             */
            this.matchOptions = options.matchOptions;
        }
        /**
         * Perform a request strategy and returns a `Promise` that will resolve with
         * a `Response`, invoking all relevant plugin callbacks.
         *
         * When a strategy instance is registered with a Workbox
         * [route]{@link module:workbox-routing.Route}, this method is automatically
         * called when the route matches.
         *
         * Alternatively, this method can be used in a standalone `FetchEvent`
         * listener by passing it to `event.respondWith()`.
         *
         * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
         *     properties listed below.
         * @param {Request|string} options.request A request to run this strategy for.
         * @param {ExtendableEvent} options.event The event associated with the
         *     request.
         * @param {URL} [options.url]
         * @param {*} [options.params]
         */
        handle(options) {
            const [responseDone] = this.handleAll(options);
            return responseDone;
        }
        /**
         * Similar to [`handle()`]{@link module:workbox-strategies.Strategy~handle}, but
         * instead of just returning a `Promise` that resolves to a `Response` it
         * it will return an tuple of [response, done] promises, where the former
         * (`response`) is equivalent to what `handle()` returns, and the latter is a
         * Promise that will resolve once any promises that were added to
         * `event.waitUntil()` as part of performing the strategy have completed.
         *
         * You can await the `done` promise to ensure any extra work performed by
         * the strategy (usually caching responses) completes successfully.
         *
         * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
         *     properties listed below.
         * @param {Request|string} options.request A request to run this strategy for.
         * @param {ExtendableEvent} options.event The event associated with the
         *     request.
         * @param {URL} [options.url]
         * @param {*} [options.params]
         * @return {Array<Promise>} A tuple of [response, done]
         *     promises that can be used to determine when the response resolves as
         *     well as when the handler has completed all its work.
         */
        handleAll(options) {
            // Allow for flexible options to be passed.
            if (options instanceof FetchEvent) {
                options = {
                    event: options,
                    request: options.request,
                };
            }
            const event = options.event;
            const request = typeof options.request === 'string' ?
                new Request(options.request) :
                options.request;
            const params = 'params' in options ? options.params : undefined;
            const handler = new StrategyHandler(this, { event, request, params });
            const responseDone = this._getResponse(handler, request, event);
            const handlerDone = this._awaitComplete(responseDone, handler, request, event);
            // Return an array of promises, suitable for use with Promise.all().
            return [responseDone, handlerDone];
        }
        async _getResponse(handler, request, event) {
            await handler.runCallbacks('handlerWillStart', { event, request });
            let response = undefined;
            try {
                response = await this._handle(request, handler);
                // The "official" Strategy subclasses all throw this error automatically,
                // but in case a third-party Strategy doesn't, ensure that we have a
                // consistent failure when there's no response or an error response.
                if (!response || response.type === 'error') {
                    throw new WorkboxError('no-response', { url: request.url });
                }
            }
            catch (error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
                if (!response) {
                    throw error;
                }
            }
            for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
                response = await callback({ event, request, response });
            }
            return response;
        }
        async _awaitComplete(responseDone, handler, request, event) {
            let response;
            let error;
            try {
                response = await responseDone;
            }
            catch (error) {
                // Ignore errors, as response errors should be caught via the `response`
                // promise above. The `done` promise will only throw for errors in
                // promises passed to `handler.waitUntil()`.
            }
            try {
                await handler.runCallbacks('handlerDidRespond', {
                    event,
                    request,
                    response,
                });
                await handler.doneWaiting();
            }
            catch (waitUntilError) {
                error = waitUntilError;
            }
            await handler.runCallbacks('handlerDidComplete', {
                event,
                request,
                response,
                error,
            });
            handler.destroy();
            if (error) {
                throw error;
            }
        }
    }
    /**
     * Classes extending the `Strategy` based class should implement this method,
     * and leverage the [`handler`]{@link module:workbox-strategies.StrategyHandler}
     * arg to perform all fetching and cache logic, which will ensure all relevant
     * cache, cache options, fetch options and plugins are used (per the current
     * strategy instance).
     *
     * @name _handle
     * @instance
     * @abstract
     * @function
     * @param {Request} request
     * @param {module:workbox-strategies.StrategyHandler} handler
     * @return {Promise<Response>}
     *
     * @memberof module:workbox-strategies.Strategy
     */

    /*
      Copyright 2020 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    const copyRedirectedCacheableResponsesPlugin = {
        async cacheWillUpdate({ response }) {
            return response.redirected ? await copyResponse(response) : response;
        }
    };
    /**
     * A [Strategy]{@link module:workbox-strategies.Strategy} implementation
     * specifically designed to work with
     * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
     * to both cache and fetch precached assets.
     *
     * Note: an instance of this class is created automatically when creating a
     * `PrecacheController`; it's generally not necessary to create this yourself.
     *
     * @extends module:workbox-strategies.Strategy
     * @memberof module:workbox-precaching
     */
    class PrecacheStrategy extends Strategy {
        /**
         *
         * @param {Object} [options]
         * @param {string} [options.cacheName] Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * [workbox-core]{@link module:workbox-core.cacheNames}.
         * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * to use in conjunction with this caching strategy.
         * @param {Object} [options.fetchOptions] Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         * @param {Object} [options.matchOptions] The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
         * get the response from the network if there's a precache miss.
         */
        constructor(options = {}) {
            options.cacheName = cacheNames.getPrecacheName(options.cacheName);
            super(options);
            this._fallbackToNetwork = options.fallbackToNetwork === false ? false : true;
            // Redirected responses cannot be used to satisfy a navigation request, so
            // any redirected response must be "copied" rather than cloned, so the new
            // response doesn't contain the `redirected` flag. See:
            // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
            this.plugins.push(copyRedirectedCacheableResponsesPlugin);
        }
        /**
         * @private
         * @param {Request|string} request A request to run this strategy for.
         * @param {module:workbox-strategies.StrategyHandler} handler The event that
         *     triggered the request.
         * @return {Promise<Response>}
         */
        async _handle(request, handler) {
            const response = await handler.cacheMatch(request);
            if (!response) {
                // If this is an `install` event then populate the cache. If this is a
                // `fetch` event (or any other event) then respond with the cached
                // response.
                if (handler.event && handler.event.type === 'install') {
                    return await this._handleInstall(request, handler);
                }
                return await this._handleFetch(request, handler);
            }
            return response;
        }
        async _handleFetch(request, handler) {
            let response;
            // Fall back to the network if we don't have a cached response
            // (perhaps due to manual cache cleanup).
            if (this._fallbackToNetwork) {
                response = await handler.fetch(request);
            }
            else {
                // This shouldn't normally happen, but there are edge cases:
                // https://github.com/GoogleChrome/workbox/issues/1441
                throw new WorkboxError('missing-precache-entry', {
                    cacheName: this.cacheName,
                    url: request.url,
                });
            }
            return response;
        }
        async _handleInstall(request, handler) {
            const response = await handler.fetchAndCachePut(request);
            // Any time there's no response, consider it a precaching error.
            let responseSafeToPrecache = Boolean(response);
            // Also consider it an error if the user didn't pass their own
            // cacheWillUpdate plugin, and the response is a 400+ (note: this means
            // that by default opaque responses can be precached).
            if (response && response.status >= 400 &&
                !this._usesCustomCacheableResponseLogic()) {
                responseSafeToPrecache = false;
            }
            if (!responseSafeToPrecache) {
                // Throwing here will lead to the `install` handler failing, which
                // we want to do if *any* of the responses aren't safe to cache.
                throw new WorkboxError('bad-precaching-response', {
                    url: request.url,
                    status: response.status,
                });
            }
            return response;
        }
        /**
         * Returns true if any users plugins were added containing their own
         * `cacheWillUpdate` callback.
         *
         * This method indicates whether the default cacheable response logic (i.e.
         * <400, including opaque responses) should be used. If a custom plugin
         * with a `cacheWillUpdate` callback is passed, then the strategy should
         * defer to that plugin's logic.
         *
         * @private
         */
        _usesCustomCacheableResponseLogic() {
            return this.plugins.some((plugin) => plugin.cacheWillUpdate &&
                plugin !== copyRedirectedCacheableResponsesPlugin);
        }
    }

    /*
      Copyright 2019 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * Performs efficient precaching of assets.
     *
     * @memberof module:workbox-precaching
     */
    class PrecacheController {
        /**
         * Create a new PrecacheController.
         *
         * @param {Object} [options]
         * @param {string} [options.cacheName] The cache to use for precaching.
         * @param {string} [options.plugins] Plugins to use when precaching as well
         * as responding to fetch events for precached assets.
         * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
         * get the response from the network if there's a precache miss.
         */
        constructor({ cacheName, plugins = [], fallbackToNetwork = true } = {}) {
            this._urlsToCacheKeys = new Map();
            this._urlsToCacheModes = new Map();
            this._cacheKeysToIntegrities = new Map();
            this._strategy = new PrecacheStrategy({
                cacheName: cacheNames.getPrecacheName(cacheName),
                plugins: [
                    ...plugins,
                    new PrecacheCacheKeyPlugin({ precacheController: this }),
                ],
                fallbackToNetwork,
            });
            // Bind the install and activate methods to the instance.
            this.install = this.install.bind(this);
            this.activate = this.activate.bind(this);
        }
        /**
         * @type {module:workbox-precaching.PrecacheStrategy} The strategy created by this controller and
         * used to cache assets and respond to fetch events.
         */
        get strategy() {
            return this._strategy;
        }
        /**
         * Adds items to the precache list, removing any duplicates and
         * stores the files in the
         * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
         * worker installs.
         *
         * This method can be called multiple times.
         *
         * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
         */
        precache(entries) {
            this.addToCacheList(entries);
            if (!this._installAndActiveListenersAdded) {
                self.addEventListener('install', this.install);
                self.addEventListener('activate', this.activate);
                this._installAndActiveListenersAdded = true;
            }
        }
        /**
         * This method will add items to the precache list, removing duplicates
         * and ensuring the information is valid.
         *
         * @param {Array<module:workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
         *     Array of entries to precache.
         */
        addToCacheList(entries) {
            const urlsToWarnAbout = [];
            for (const entry of entries) {
                // See https://github.com/GoogleChrome/workbox/issues/2259
                if (typeof entry === 'string') {
                    urlsToWarnAbout.push(entry);
                }
                else if (entry && entry.revision === undefined) {
                    urlsToWarnAbout.push(entry.url);
                }
                const { cacheKey, url } = createCacheKey(entry);
                const cacheMode = (typeof entry !== 'string' && entry.revision) ?
                    'reload' : 'default';
                if (this._urlsToCacheKeys.has(url) &&
                    this._urlsToCacheKeys.get(url) !== cacheKey) {
                    throw new WorkboxError('add-to-cache-list-conflicting-entries', {
                        firstEntry: this._urlsToCacheKeys.get(url),
                        secondEntry: cacheKey,
                    });
                }
                if (typeof entry !== 'string' && entry.integrity) {
                    if (this._cacheKeysToIntegrities.has(cacheKey) &&
                        this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                        throw new WorkboxError('add-to-cache-list-conflicting-integrities', {
                            url,
                        });
                    }
                    this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
                }
                this._urlsToCacheKeys.set(url, cacheKey);
                this._urlsToCacheModes.set(url, cacheMode);
                if (urlsToWarnAbout.length > 0) {
                    const warningMessage = `Workbox is precaching URLs without revision ` +
                        `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                        `Learn more at https://bit.ly/wb-precache`;
                    {
                        // Use console directly to display this warning without bloating
                        // bundle sizes by pulling in all of the logger codebase in prod.
                        console.warn(warningMessage);
                    }
                }
            }
        }
        /**
         * Precaches new and updated assets. Call this method from the service worker
         * install event.
         *
         * Note: this method calls `event.waitUntil()` for you, so you do not need
         * to call it yourself in your event handlers.
         *
         * @param {Object} options
         * @param {Event} options.event The install event.
         * @return {Promise<module:workbox-precaching.InstallResult>}
         */
        install(event) {
            return waitUntil(event, async () => {
                const installReportPlugin = new PrecacheInstallReportPlugin();
                this.strategy.plugins.push(installReportPlugin);
                // Cache entries one at a time.
                // See https://github.com/GoogleChrome/workbox/issues/2528
                for (const [url, cacheKey] of this._urlsToCacheKeys) {
                    const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                    const cacheMode = this._urlsToCacheModes.get(url);
                    const request = new Request(url, {
                        integrity,
                        cache: cacheMode,
                        credentials: 'same-origin',
                    });
                    await Promise.all(this.strategy.handleAll({
                        params: { cacheKey },
                        request,
                        event,
                    }));
                }
                const { updatedURLs, notUpdatedURLs } = installReportPlugin;
                return { updatedURLs, notUpdatedURLs };
            });
        }
        /**
         * Deletes assets that are no longer present in the current precache manifest.
         * Call this method from the service worker activate event.
         *
         * Note: this method calls `event.waitUntil()` for you, so you do not need
         * to call it yourself in your event handlers.
         *
         * @param {ExtendableEvent}
         * @return {Promise<module:workbox-precaching.CleanupResult>}
         */
        activate(event) {
            return waitUntil(event, async () => {
                const cache = await self.caches.open(this.strategy.cacheName);
                const currentlyCachedRequests = await cache.keys();
                const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
                const deletedURLs = [];
                for (const request of currentlyCachedRequests) {
                    if (!expectedCacheKeys.has(request.url)) {
                        await cache.delete(request);
                        deletedURLs.push(request.url);
                    }
                }
                return { deletedURLs };
            });
        }
        /**
         * Returns a mapping of a precached URL to the corresponding cache key, taking
         * into account the revision information for the URL.
         *
         * @return {Map<string, string>} A URL to cache key mapping.
         */
        getURLsToCacheKeys() {
            return this._urlsToCacheKeys;
        }
        /**
         * Returns a list of all the URLs that have been precached by the current
         * service worker.
         *
         * @return {Array<string>} The precached URLs.
         */
        getCachedURLs() {
            return [...this._urlsToCacheKeys.keys()];
        }
        /**
         * Returns the cache key used for storing a given URL. If that URL is
         * unversioned, like `/index.html', then the cache key will be the original
         * URL with a search parameter appended to it.
         *
         * @param {string} url A URL whose cache key you want to look up.
         * @return {string} The versioned URL that corresponds to a cache key
         * for the original URL, or undefined if that URL isn't precached.
         */
        getCacheKeyForURL(url) {
            const urlObject = new URL(url, location.href);
            return this._urlsToCacheKeys.get(urlObject.href);
        }
        /**
         * This acts as a drop-in replacement for
         * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
         * with the following differences:
         *
         * - It knows what the name of the precache is, and only checks in that cache.
         * - It allows you to pass in an "original" URL without versioning parameters,
         * and it will automatically look up the correct cache key for the currently
         * active revision of that URL.
         *
         * E.g., `matchPrecache('index.html')` will find the correct precached
         * response for the currently active service worker, even if the actual cache
         * key is `'/index.html?__WB_REVISION__=1234abcd'`.
         *
         * @param {string|Request} request The key (without revisioning parameters)
         * to look up in the precache.
         * @return {Promise<Response|undefined>}
         */
        async matchPrecache(request) {
            const url = request instanceof Request ? request.url : request;
            const cacheKey = this.getCacheKeyForURL(url);
            if (cacheKey) {
                const cache = await self.caches.open(this.strategy.cacheName);
                return cache.match(cacheKey);
            }
            return undefined;
        }
        /**
         * Returns a function that looks up `url` in the precache (taking into
         * account revision information), and returns the corresponding `Response`.
         *
         * @param {string} url The precached URL which will be used to lookup the
         * `Response`.
         * @return {module:workbox-routing~handlerCallback}
         */
        createHandlerBoundToURL(url) {
            const cacheKey = this.getCacheKeyForURL(url);
            if (!cacheKey) {
                throw new WorkboxError('non-precached-url', { url });
            }
            return (options) => {
                options.request = new Request(url);
                options.params = { cacheKey, ...options.params };
                return this.strategy.handle(options);
            };
        }
    }

    /*
      Copyright 2019 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    let precacheController;
    /**
     * @return {PrecacheController}
     * @private
     */
    const getOrCreatePrecacheController = () => {
        if (!precacheController) {
            precacheController = new PrecacheController();
        }
        return precacheController;
    };

    // @ts-ignore
    try {
        self['workbox:routing:6.0.2'] && _();
    }
    catch (e) { }

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * The default HTTP method, 'GET', used when there's no specific method
     * configured for a route.
     *
     * @type {string}
     *
     * @private
     */
    const defaultMethod = 'GET';

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * @param {function()|Object} handler Either a function, or an object with a
     * 'handle' method.
     * @return {Object} An object with a handle method.
     *
     * @private
     */
    const normalizeHandler = (handler) => {
        if (handler && typeof handler === 'object') {
            return handler;
        }
        else {
            return { handle: handler };
        }
    };

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * A `Route` consists of a pair of callback functions, "match" and "handler".
     * The "match" callback determine if a route should be used to "handle" a
     * request by returning a non-falsy value if it can. The "handler" callback
     * is called when there is a match and should return a Promise that resolves
     * to a `Response`.
     *
     * @memberof module:workbox-routing
     */
    class Route {
        /**
         * Constructor for Route class.
         *
         * @param {module:workbox-routing~matchCallback} match
         * A callback function that determines whether the route matches a given
         * `fetch` event by returning a non-falsy value.
         * @param {module:workbox-routing~handlerCallback} handler A callback
         * function that returns a Promise resolving to a Response.
         * @param {string} [method='GET'] The HTTP method to match the Route
         * against.
         */
        constructor(match, handler, method = defaultMethod) {
            // These values are referenced directly by Router so cannot be
            // altered by minificaton.
            this.handler = normalizeHandler(handler);
            this.match = match;
            this.method = method;
        }
    }

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * RegExpRoute makes it easy to create a regular expression based
     * [Route]{@link module:workbox-routing.Route}.
     *
     * For same-origin requests the RegExp only needs to match part of the URL. For
     * requests against third-party servers, you must define a RegExp that matches
     * the start of the URL.
     *
     * [See the module docs for info.]{@link https://developers.google.com/web/tools/workbox/modules/workbox-routing}
     *
     * @memberof module:workbox-routing
     * @extends module:workbox-routing.Route
     */
    class RegExpRoute extends Route {
        /**
         * If the regular expression contains
         * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
         * the captured values will be passed to the
         * [handler's]{@link module:workbox-routing~handlerCallback} `params`
         * argument.
         *
         * @param {RegExp} regExp The regular expression to match against URLs.
         * @param {module:workbox-routing~handlerCallback} handler A callback
         * function that returns a Promise resulting in a Response.
         * @param {string} [method='GET'] The HTTP method to match the Route
         * against.
         */
        constructor(regExp, handler, method) {
            const match = ({ url }) => {
                const result = regExp.exec(url.href);
                // Return immediately if there's no match.
                if (!result) {
                    return;
                }
                // Require that the match start at the first character in the URL string
                // if it's a cross-origin request.
                // See https://github.com/GoogleChrome/workbox/issues/281 for the context
                // behind this behavior.
                if ((url.origin !== location.origin) && (result.index !== 0)) {
                    return;
                }
                // If the route matches, but there aren't any capture groups defined, then
                // this will return [], which is truthy and therefore sufficient to
                // indicate a match.
                // If there are capture groups, then it will return their values.
                return result.slice(1);
            };
            super(match, handler, method);
        }
    }

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * The Router can be used to process a FetchEvent through one or more
     * [Routes]{@link module:workbox-routing.Route} responding  with a Request if
     * a matching route exists.
     *
     * If no route matches a given a request, the Router will use a "default"
     * handler if one is defined.
     *
     * Should the matching Route throw an error, the Router will use a "catch"
     * handler if one is defined to gracefully deal with issues and respond with a
     * Request.
     *
     * If a request matches multiple routes, the **earliest** registered route will
     * be used to respond to the request.
     *
     * @memberof module:workbox-routing
     */
    class Router {
        /**
         * Initializes a new Router.
         */
        constructor() {
            this._routes = new Map();
            this._defaultHandlerMap = new Map();
        }
        /**
         * @return {Map<string, Array<module:workbox-routing.Route>>} routes A `Map` of HTTP
         * method name ('GET', etc.) to an array of all the corresponding `Route`
         * instances that are registered.
         */
        get routes() {
            return this._routes;
        }
        /**
         * Adds a fetch event listener to respond to events when a route matches
         * the event's request.
         */
        addFetchListener() {
            // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
            self.addEventListener('fetch', ((event) => {
                const { request } = event;
                const responsePromise = this.handleRequest({ request, event });
                if (responsePromise) {
                    event.respondWith(responsePromise);
                }
            }));
        }
        /**
         * Adds a message event listener for URLs to cache from the window.
         * This is useful to cache resources loaded on the page prior to when the
         * service worker started controlling it.
         *
         * The format of the message data sent from the window should be as follows.
         * Where the `urlsToCache` array may consist of URL strings or an array of
         * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
         *
         * ```
         * {
         *   type: 'CACHE_URLS',
         *   payload: {
         *     urlsToCache: [
         *       './script1.js',
         *       './script2.js',
         *       ['./script3.js', {mode: 'no-cors'}],
         *     ],
         *   },
         * }
         * ```
         */
        addCacheListener() {
            // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
            self.addEventListener('message', ((event) => {
                if (event.data && event.data.type === 'CACHE_URLS') {
                    const { payload } = event.data;
                    const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                        if (typeof entry === 'string') {
                            entry = [entry];
                        }
                        const request = new Request(...entry);
                        return this.handleRequest({ request, event });
                        // TODO(philipwalton): TypeScript errors without this typecast for
                        // some reason (probably a bug). The real type here should work but
                        // doesn't: `Array<Promise<Response> | undefined>`.
                    })); // TypeScript
                    event.waitUntil(requestPromises);
                    // If a MessageChannel was used, reply to the message on success.
                    if (event.ports && event.ports[0]) {
                        requestPromises.then(() => event.ports[0].postMessage(true));
                    }
                }
            }));
        }
        /**
         * Apply the routing rules to a FetchEvent object to get a Response from an
         * appropriate Route's handler.
         *
         * @param {Object} options
         * @param {Request} options.request The request to handle.
         * @param {ExtendableEvent} options.event The event that triggered the
         *     request.
         * @return {Promise<Response>|undefined} A promise is returned if a
         *     registered route can handle the request. If there is no matching
         *     route and there's no `defaultHandler`, `undefined` is returned.
         */
        handleRequest({ request, event }) {
            const url = new URL(request.url, location.href);
            if (!url.protocol.startsWith('http')) {
                return;
            }
            const sameOrigin = url.origin === location.origin;
            const { params, route } = this.findMatchingRoute({
                event,
                request,
                sameOrigin,
                url,
            });
            let handler = route && route.handler;
            // If we don't have a handler because there was no matching route, then
            // fall back to defaultHandler if that's defined.
            const method = request.method;
            if (!handler && this._defaultHandlerMap.has(method)) {
                handler = this._defaultHandlerMap.get(method);
            }
            if (!handler) {
                return;
            }
            // Wrap in try and catch in case the handle method throws a synchronous
            // error. It should still callback to the catch handler.
            let responsePromise;
            try {
                responsePromise = handler.handle({ url, request, event, params });
            }
            catch (err) {
                responsePromise = Promise.reject(err);
            }
            if (responsePromise instanceof Promise && this._catchHandler) {
                responsePromise = responsePromise.catch((err) => {
                    return this._catchHandler.handle({ url, request, event });
                });
            }
            return responsePromise;
        }
        /**
         * Checks a request and URL (and optionally an event) against the list of
         * registered routes, and if there's a match, returns the corresponding
         * route along with any params generated by the match.
         *
         * @param {Object} options
         * @param {URL} options.url
         * @param {Request} options.request The request to match.
         * @param {Event} options.event The corresponding event.
         * @return {Object} An object with `route` and `params` properties.
         *     They are populated if a matching route was found or `undefined`
         *     otherwise.
         */
        findMatchingRoute({ url, sameOrigin, request, event }) {
            const routes = this._routes.get(request.method) || [];
            for (const route of routes) {
                let params;
                const matchResult = route.match({ url, sameOrigin, request, event });
                if (matchResult) {
                    // See https://github.com/GoogleChrome/workbox/issues/2079
                    params = matchResult;
                    if (Array.isArray(matchResult) && matchResult.length === 0) {
                        // Instead of passing an empty array in as params, use undefined.
                        params = undefined;
                    }
                    else if ((matchResult.constructor === Object &&
                        Object.keys(matchResult).length === 0)) {
                        // Instead of passing an empty object in as params, use undefined.
                        params = undefined;
                    }
                    else if (typeof matchResult === 'boolean') {
                        // For the boolean value true (rather than just something truth-y),
                        // don't set params.
                        // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                        params = undefined;
                    }
                    // Return early if have a match.
                    return { route, params };
                }
            }
            // If no match was found above, return and empty object.
            return {};
        }
        /**
         * Define a default `handler` that's called when no routes explicitly
         * match the incoming request.
         *
         * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
         *
         * Without a default handler, unmatched requests will go against the
         * network as if there were no service worker present.
         *
         * @param {module:workbox-routing~handlerCallback} handler A callback
         * function that returns a Promise resulting in a Response.
         * @param {string} [method='GET'] The HTTP method to associate with this
         * default handler. Each method has its own default.
         */
        setDefaultHandler(handler, method = defaultMethod) {
            this._defaultHandlerMap.set(method, normalizeHandler(handler));
        }
        /**
         * If a Route throws an error while handling a request, this `handler`
         * will be called and given a chance to provide a response.
         *
         * @param {module:workbox-routing~handlerCallback} handler A callback
         * function that returns a Promise resulting in a Response.
         */
        setCatchHandler(handler) {
            this._catchHandler = normalizeHandler(handler);
        }
        /**
         * Registers a route with the router.
         *
         * @param {module:workbox-routing.Route} route The route to register.
         */
        registerRoute(route) {
            if (!this._routes.has(route.method)) {
                this._routes.set(route.method, []);
            }
            // Give precedence to all of the earlier routes by adding this additional
            // route to the end of the array.
            this._routes.get(route.method).push(route);
        }
        /**
         * Unregisters a route with the router.
         *
         * @param {module:workbox-routing.Route} route The route to unregister.
         */
        unregisterRoute(route) {
            if (!this._routes.has(route.method)) {
                throw new WorkboxError('unregister-route-but-not-found-with-method', {
                    method: route.method,
                });
            }
            const routeIndex = this._routes.get(route.method).indexOf(route);
            if (routeIndex > -1) {
                this._routes.get(route.method).splice(routeIndex, 1);
            }
            else {
                throw new WorkboxError('unregister-route-route-not-registered');
            }
        }
    }

    /*
      Copyright 2019 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    let defaultRouter;
    /**
     * Creates a new, singleton Router instance if one does not exist. If one
     * does already exist, that instance is returned.
     *
     * @private
     * @return {Router}
     */
    const getOrCreateDefaultRouter = () => {
        if (!defaultRouter) {
            defaultRouter = new Router();
            // The helpers that use the default Router assume these listeners exist.
            defaultRouter.addFetchListener();
            defaultRouter.addCacheListener();
        }
        return defaultRouter;
    };

    /*
      Copyright 2019 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * Easily register a RegExp, string, or function with a caching
     * strategy to a singleton Router instance.
     *
     * This method will generate a Route for you if needed and
     * call [registerRoute()]{@link module:workbox-routing.Router#registerRoute}.
     *
     * @param {RegExp|string|module:workbox-routing.Route~matchCallback|module:workbox-routing.Route} capture
     * If the capture param is a `Route`, all other arguments will be ignored.
     * @param {module:workbox-routing~handlerCallback} [handler] A callback
     * function that returns a Promise resulting in a Response. This parameter
     * is required if `capture` is not a `Route` object.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     * @return {module:workbox-routing.Route} The generated `Route`(Useful for
     * unregistering).
     *
     * @memberof module:workbox-routing
     */
    function registerRoute(capture, handler, method) {
        let route;
        if (typeof capture === 'string') {
            const captureUrl = new URL(capture, location.href);
            const matchCallback = ({ url }) => {
                return url.href === captureUrl.href;
            };
            // If `capture` is a string then `handler` and `method` must be present.
            route = new Route(matchCallback, handler, method);
        }
        else if (capture instanceof RegExp) {
            // If `capture` is a `RegExp` then `handler` and `method` must be present.
            route = new RegExpRoute(capture, handler, method);
        }
        else if (typeof capture === 'function') {
            // If `capture` is a function then `handler` and `method` must be present.
            route = new Route(capture, handler, method);
        }
        else if (capture instanceof Route) {
            route = capture;
        }
        else {
            throw new WorkboxError('unsupported-route-type', {
                moduleName: 'workbox-routing',
                funcName: 'registerRoute',
                paramName: 'capture',
            });
        }
        const defaultRouter = getOrCreateDefaultRouter();
        defaultRouter.registerRoute(route);
        return route;
    }

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * Removes any URL search parameters that should be ignored.
     *
     * @param {URL} urlObject The original URL.
     * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
     * each search parameter name. Matches mean that the search parameter should be
     * ignored.
     * @return {URL} The URL with any ignored search parameters removed.
     *
     * @private
     * @memberof module:workbox-precaching
     */
    function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
        // Convert the iterable into an array at the start of the loop to make sure
        // deletion doesn't mess up iteration.
        for (const paramName of [...urlObject.searchParams.keys()]) {
            if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
                urlObject.searchParams.delete(paramName);
            }
        }
        return urlObject;
    }

    /*
      Copyright 2019 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * Generator function that yields possible variations on the original URL to
     * check, one at a time.
     *
     * @param {string} url
     * @param {Object} options
     *
     * @private
     * @memberof module:workbox-precaching
     */
    function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
        const urlObject = new URL(url, location.href);
        urlObject.hash = '';
        yield urlObject.href;
        const urlWithoutIgnoredParams = removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching);
        yield urlWithoutIgnoredParams.href;
        if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
            const directoryURL = new URL(urlWithoutIgnoredParams.href);
            directoryURL.pathname += directoryIndex;
            yield directoryURL.href;
        }
        if (cleanURLs) {
            const cleanURL = new URL(urlWithoutIgnoredParams.href);
            cleanURL.pathname += '.html';
            yield cleanURL.href;
        }
        if (urlManipulation) {
            const additionalURLs = urlManipulation({ url: urlObject });
            for (const urlToAttempt of additionalURLs) {
                yield urlToAttempt.href;
            }
        }
    }

    /*
      Copyright 2020 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * A subclass of [Route]{@link module:workbox-routing.Route} that takes a
     * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
     * instance and uses it to match incoming requests and handle fetching
     * responses from the precache.
     *
     * @memberof module:workbox-precaching
     * @extends module:workbox-routing.Route
     */
    class PrecacheRoute extends Route {
        /**
         * @param {PrecacheController} precacheController A `PrecacheController`
         * instance used to both match requests and respond to fetch events.
         * @param {Object} [options] Options to control how requests are matched
         * against the list of precached URLs.
         * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
         * check cache entries for a URLs ending with '/' to see if there is a hit when
         * appending the `directoryIndex` value.
         * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
         * array of regex's to remove search params when looking for a cache match.
         * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
         * check the cache for the URL with a `.html` added to the end of the end.
         * @param {module:workbox-precaching~urlManipulation} [options.urlManipulation]
         * This is a function that should take a URL and return an array of
         * alternative URLs that should be checked for precache matches.
         */
        constructor(precacheController, options) {
            const match = ({ request }) => {
                const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
                for (const possibleURL of generateURLVariations(request.url, options)) {
                    const cacheKey = urlsToCacheKeys.get(possibleURL);
                    if (cacheKey) {
                        return { cacheKey };
                    }
                }
                return;
            };
            super(match, precacheController.strategy);
        }
    }

    /*
      Copyright 2019 Google LLC
      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * Add a `fetch` listener to the service worker that will
     * respond to
     * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
     * with precached assets.
     *
     * Requests for assets that aren't precached, the `FetchEvent` will not be
     * responded to, allowing the event to fall through to other `fetch` event
     * listeners.
     *
     * @param {Object} [options] See
     * [PrecacheRoute options]{@link module:workbox-precaching.PrecacheRoute}.
     *
     * @memberof module:workbox-precaching
     */
    function addRoute(options) {
        const precacheController = getOrCreatePrecacheController();
        const precacheRoute = new PrecacheRoute(precacheController, options);
        registerRoute(precacheRoute);
    }

    /*
      Copyright 2019 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * Please note: This method **will not** serve any of the cached files for you.
     * It only precaches files. To respond to a network request you call
     * [addRoute()]{@link module:workbox-precaching.addRoute}.
     *
     * If you have a single array of files to precache, you can just call
     * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     *
     * @memberof module:workbox-precaching
     */
    function precache(entries) {
        const precacheController = getOrCreatePrecacheController();
        precacheController.precache(entries);
    }

    /*
      Copyright 2019 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * This method will add entries to the precache list and add a route to
     * respond to fetch events.
     *
     * This is a convenience method that will call
     * [precache()]{@link module:workbox-precaching.precache} and
     * [addRoute()]{@link module:workbox-precaching.addRoute} in a single call.
     *
     * @param {Array<Object|string>} entries Array of entries to precache.
     * @param {Object} [options] See
     * [PrecacheRoute options]{@link module:workbox-precaching.PrecacheRoute}.
     *
     * @memberof module:workbox-precaching
     */
    function precacheAndRoute(entries, options) {
        precache(entries);
        addRoute(options);
    }

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    const cacheOkAndOpaquePlugin = {
        /**
         * Returns a valid response (to allow caching) if the status is 200 (OK) or
         * 0 (opaque).
         *
         * @param {Object} options
         * @param {Response} options.response
         * @return {Response|null}
         *
         * @private
         */
        cacheWillUpdate: async ({ response }) => {
            if (response.status === 200 || response.status === 0) {
                return response;
            }
            return null;
        },
    };

    /*
      Copyright 2018 Google LLC

      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
    */
    /**
     * An implementation of a
     * [stale-while-revalidate]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#stale-while-revalidate}
     * request strategy.
     *
     * Resources are requested from both the cache and the network in parallel.
     * The strategy will respond with the cached version if available, otherwise
     * wait for the network response. The cache is updated with the network response
     * with each successful request.
     *
     * By default, this strategy will cache responses with a 200 status code as
     * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
     * Opaque responses are cross-origin requests where the response doesn't
     * support [CORS]{@link https://enable-cors.org/}.
     *
     * If the network request fails, and there is no cache match, this will throw
     * a `WorkboxError` exception.
     *
     * @extends module:workbox-strategies.Strategy
     * @memberof module:workbox-strategies
     */
    class StaleWhileRevalidate extends Strategy {
        /**
         * @param {Object} options
         * @param {string} options.cacheName Cache name to store and retrieve
         * requests. Defaults to cache names provided by
         * [workbox-core]{@link module:workbox-core.cacheNames}.
         * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * to use in conjunction with this caching strategy.
         * @param {Object} options.fetchOptions Values passed along to the
         * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
         * of all fetch() requests made by this strategy.
         * @param {Object} options.matchOptions [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
         */
        constructor(options) {
            super(options);
            // If this instance contains no plugins with a 'cacheWillUpdate' callback,
            // prepend the `cacheOkAndOpaquePlugin` plugin to the plugins list.
            if (!this.plugins.some((p) => 'cacheWillUpdate' in p)) {
                this.plugins.unshift(cacheOkAndOpaquePlugin);
            }
        }
        /**
         * @private
         * @param {Request|string} request A request to run this strategy for.
         * @param {module:workbox-strategies.StrategyHandler} handler The event that
         *     triggered the request.
         * @return {Promise<Response>}
         */
        async _handle(request, handler) {
            const fetchAndCachePromise = handler
                .fetchAndCachePut(request)
                .catch(() => {
                // Swallow this error because a 'no-response' error will be thrown in
                // main handler return flow. This will be in the `waitUntil()` flow.
            });
            let response = await handler.cacheMatch(request);
            let error;
            if (response) ;
            else {
                try {
                    // NOTE(philipwalton): Really annoying that we have to type cast here.
                    // https://github.com/microsoft/TypeScript/issues/20006
                    response = await fetchAndCachePromise;
                }
                catch (err) {
                    error = err;
                }
            }
            if (!response) {
                throw new WorkboxError('no-response', { url: request.url, error });
            }
            return response;
        }
    }

    console.log('Workbox loaded');
    precacheAndRoute([{"revision":"023b3876bb73aa541367fc40a193d2b7","url":"node_modules/bootstrap/dist/css/bootstrap.min.css"},{"revision":"7f389f5d2622ce2090eca7c36bcb90bc","url":"node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"},{"revision":"dc5e7f18c8d36ac1d3d4753a87c98d0a","url":"node_modules/jquery/dist/jquery.min.js"},{"revision":"bef8804ac792065d0979fe124e99132f","url":"assets/icons/android-icon-144x144.png"},{"revision":"14955c89fbbb488a6f42bccfdff500a9","url":"assets/icons/android-icon-192x192.png"},{"revision":"9119b8498a1cf558b9c8a453b18bdcc2","url":"assets/icons/android-icon-36x36.png"},{"revision":"ebfd8c223bef69a29e77c4cb33b3b968","url":"assets/icons/android-icon-48x48.png"},{"revision":"3a89376f3c8b29886eca32b5d363f03d","url":"assets/icons/android-icon-72x72.png"},{"revision":"1cd347774ecceae5a1d58c6cda110e6b","url":"assets/icons/android-icon-96x96.png"},{"revision":"61e7f5e1e93d52c90df455a8c922a9a5","url":"assets/icons/apple-icon-114x114.png"},{"revision":"accabae3409ba247f42ff040b8fedbc6","url":"assets/icons/apple-icon-120x120.png"},{"revision":"bef8804ac792065d0979fe124e99132f","url":"assets/icons/apple-icon-144x144.png"},{"revision":"1178f37d7c7aa523d443fd9c91d7d840","url":"assets/icons/apple-icon-152x152.png"},{"revision":"4c9bdb47ef728e33d8bffa4bb47b736f","url":"assets/icons/apple-icon-180x180.png"},{"revision":"8caffd092dd5139981ac228f0953b7c2","url":"assets/icons/apple-icon-57x57.png"},{"revision":"30dc13ba1e39720d7a5013ead866344f","url":"assets/icons/apple-icon-60x60.png"},{"revision":"3a89376f3c8b29886eca32b5d363f03d","url":"assets/icons/apple-icon-72x72.png"},{"revision":"3e9ca1af32ffd73cfea86cb33218bc2c","url":"assets/icons/apple-icon-76x76.png"},{"revision":"4ff2d1147023f526309bcbdef4ef6ada","url":"assets/icons/apple-icon-precomposed.png"},{"revision":"4ff2d1147023f526309bcbdef4ef6ada","url":"assets/icons/apple-icon.png"},{"revision":"624d2a0f99f3cd064546c4bb0edf6383","url":"assets/icons/favicon-16x16.png"},{"revision":"d8b2e8faab65187d013716f9e9d81cc5","url":"assets/icons/favicon-32x32.png"},{"revision":"1cd347774ecceae5a1d58c6cda110e6b","url":"assets/icons/favicon-96x96.png"},{"revision":"4ff2d1147023f526309bcbdef4ef6ada","url":"assets/icons/icon.png"},{"revision":"bef8804ac792065d0979fe124e99132f","url":"assets/icons/ms-icon-144x144.png"},{"revision":"9156c4852adc113f83009213c14861ab","url":"assets/icons/ms-icon-150x150.png"},{"revision":"b03a3c761218e60f9f57a89c41c3f17b","url":"assets/icons/ms-icon-310x310.png"},{"revision":"c5f25fa6a93484231f681a6a8d4ef7cd","url":"assets/icons/ms-icon-70x70.png"},{"revision":"43c831a29c15e33671f438004378c2f0","url":"about.html"},{"revision":"c0b1d7a32d300c2a65c67a8fbd6d7c20","url":"app.css"},{"revision":"9273717dc3e689dce30ad19b09ec46b9","url":"app.js"},{"revision":"780056d9f63126ddc0f257a42787bc26","url":"index.html"},{"revision":"73d3c1b97338a0c622481adf4f689046","url":"rollup.config.js"}]);

    const apiRoute = 'http://localhost:3000/api/news';
    registerRoute(
      apiRoute,
      new StaleWhileRevalidate({
        cacheName: 'api-cache',
      })
    );

})));
//# sourceMappingURL=service-worker.js.map
