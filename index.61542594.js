// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fMcV0":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "dfbb1b1861542594";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"ahc7M":[function(require,module,exports) {
var _controller = require("./controller");
new (0, _controller.Controller)();

},{"./controller":"9o3OS"}],"9o3OS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Controller", ()=>Controller);
var _view = require("./view/view");
var _model = require("./model/model");
var _constants = require("./constants");
class Controller {
    constructor(){
        this.model = new (0, _model.Model)();
        this.view = new (0, _view.View)({
            products: this.model.products,
            productsInBasket: this.model.getProductsInBasket(),
            onProductAction: this.onProductAction,
            onClearProductsFromBasket: this.onClearProductsFromBasket,
            totalPrice: this.model.getTotalPrice(),
            onProductsSearch: this.onProductsSearch,
            onClearSearch: this.onClearSearch
        });
    }
    setProductStatus = (productId, productStatus)=>{
        this.model.setProductStatus(productId, productStatus);
    };
    onProductAction = (action, payload)=>{
        if (action === (0, _constants.ProductAction).AddToCart || action === (0, _constants.ProductAction).RemoveFromCart) this.setProductStatus(payload, action === (0, _constants.ProductAction).AddToCart ? (0, _constants.ProductStatus).InCart : (0, _constants.ProductStatus).NotInCart);
        if (action === (0, _constants.ProductAction).QuickView) this.view.quickViewModal.onQuickView(payload);
        this.view.renderProductsInBasket(this.model.getProductsInBasket());
        this.view.setTotalPrice(this.model.getTotalPrice());
        this.onClearSearch();
    };
    onClearProductsFromBasket = ()=>{
        this.model.removeProductsFromBasket();
        this.view.renderProductsInBasket(this.model.getProductsInBasket());
        this.view.setTotalPrice(this.model.getTotalPrice());
        this.onClearSearch();
    };
    onProductsSearch = (searchText)=>{
        this.view.renderProducts(this.model.searchProduct(searchText));
        if (Object.keys(this.model.searchProduct(searchText)).length === 0 || Object.keys(this.model.searchProduct(searchText)) === undefined) this.view.SearchForm.searchRequest.textContent = "По вашему запросу ничего не найдено";
        else this.view.SearchForm.searchRequest.textContent = searchText;
    };
    onClearSearch = ()=>{
        this.view.SearchForm.searchForm.reset();
        this.view.SearchForm.searchRequest.textContent = "Хиты продаж";
        this.view.renderProducts(this.model.products);
    };
}

},{"./view/view":"gxKv6","./model/model":"fApl5","./constants":"hddiL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gxKv6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "View", ()=>View);
var _basket = require("./basket/basket");
var _products = require("./products/products");
var _slider = require("./slider/slider");
var _quickView = require("./quickView/quickView");
var _search = require("./search/search");
class View {
    constructor({ products , onProductAction , productsInBasket , onClearProductsFromBasket , totalPrice , onProductsSearch , onClearSearch  }){
        this.Basket = new (0, _basket.Basket)({
            productsInBasket,
            onClearProductsFromBasket,
            totalPrice
        });
        this.Slider = new (0, _slider.Slider)();
        this.quickViewModal = new (0, _quickView.quickViewModal)(products);
        this.Products = new (0, _products.Products)({
            products,
            onProductAction
        });
        this.SearchForm = new (0, _search.SearchForm)({
            onProductsSearch,
            onClearSearch
        });
        const container = document.getElementById("goods-container");
        container.append(this.Products.productsWrap);
    }
    renderProductsInBasket = (productsInBasket)=>{
        this.Basket.renderProductsInBasket(productsInBasket);
    };
    renderProducts = (products)=>{
        this.Products.renderProducts(products);
    };
    setTotalPrice = (totalPrice)=>{
        this.Basket.setTotalPrice(totalPrice);
    };
}

},{"./basket/basket":"aSdlZ","./products/products":"8s4z3","./slider/slider":"4GhZn","./quickView/quickView":"lS3ra","./search/search":"01R4p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aSdlZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Basket", ()=>Basket);
var _utils = require("./utils");
class Basket {
    constructor({ productsInBasket , onClearProductsFromBasket , totalPrice  }){
        this.basketModalWindow = document.querySelector(".basket__modal");
        this.basketContent = document.querySelector(".basket__content");
        this.productsWrap = document.querySelector(".purchases");
        this.tableHeader = (0, _utils.createTableHeader)();
        this.tableBody = document.createElement("tbody");
        this.clearButton = document.querySelector(".clear");
        this.totalPrice = document.querySelector(".result");
        this.totalPrice.textContent = `Итого: ${totalPrice} р.`;
        this.ascentBasket = this.ascentBasket();
        this.escBasket = this.escBasket();
        this.renderProductsInBasket(productsInBasket);
        this.productsWrap.append(this.tableHeader, this.tableBody);
        this.clearButton.addEventListener("click", onClearProductsFromBasket);
    }
    ascentBasket() {
        document.addEventListener("click", (event)=>{
            const className = event.target.className;
            if (className === "header__basket-img") this.onOpen();
            else if (className === "close") this.onClose();
            else if (!event.composedPath().includes(this.basketContent)) this.onClose();
        });
    }
    escBasket() {
        document.addEventListener("keyup", (event)=>{
            if (event.key === "Escape") this.onClose();
        });
    }
    onOpen() {
        this.basketModalWindow.style.display = "block";
    }
    onClose() {
        this.basketModalWindow.style.display = "none";
    }
    renderProductsInBasket = (productsInBasket)=>{
        this.tableBody.innerHTML = "";
        if (productsInBasket.length > 0) {
            for (const product of productsInBasket)this.tableBody.append((0, _utils.createRow)(product));
            return;
        }
        this.tableBody.append((0, _utils.createEmptyRow)());
    };
    setTotalPrice = (totalPrice)=>{
        this.totalPrice.textContent = `Итого: ${totalPrice} р.`;
    };
}

},{"./utils":"5V9ok","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5V9ok":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createTableHeader", ()=>createTableHeader);
parcelHelpers.export(exports, "createEmptyRow", ()=>createEmptyRow);
parcelHelpers.export(exports, "createRow", ()=>createRow);
const tableHeaders = [
    "Название товара",
    "Цена"
];
function createTableHeader() {
    const tableHead = document.createElement("thead");
    const tableHeadRow = document.createElement("tr");
    for (const header of tableHeaders){
        const th = document.createElement("th");
        th.textContent = header;
        tableHeadRow.append(th);
    }
    tableHead.append(tableHeadRow);
    return tableHead;
}
function createEmptyRow() {
    const tableRow = document.createElement("tr");
    const tableCell = document.createElement("td");
    tableCell.textContent = "В корзине пока нет товаров";
    tableCell.style.width = "100%";
    tableCell.style.textAlign = "center";
    tableCell.style.fontStyle = "italic";
    tableRow.append(tableCell);
    return tableRow;
}
function createRow({ name , price  }) {
    const tableRow = document.createElement("tr");
    for (const header of tableHeaders){
        const tableCell = document.createElement("td");
        if (header === "Название товара") tableCell.textContent = name;
        if (header === "Цена") tableCell.textContent = price;
        tableRow.append(tableCell);
    }
    return tableRow;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8s4z3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Products", ()=>Products);
var _utils = require("./utils");
var _utils1 = require("../utils");
var _constants = require("../../constants");
class Products {
    constructor({ products , onProductAction  }){
        this.productsWrap = (0, _utils1.createDiv)({
            class: "goods__cards"
        });
        this.productsWrap.id = "cards";
        this.productsWrap.addEventListener("click", ({ target  })=>{
            if (Object.values((0, _constants.ProductAction)).includes(target.dataset.productAction)) onProductAction(target.dataset.productAction, target.dataset.productId);
        });
        this.renderProducts(products);
    }
    renderProducts = (products)=>{
        this.productsWrap.innerHTML = "";
        if (products.length > 0) {
            for (const product of products)this.productsWrap.append((0, _utils.createProduct)(product));
            return;
        }
    };
}

},{"./utils":"bl3BJ","../utils":"67ZGx","../../constants":"hddiL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bl3BJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createProduct", ()=>createProduct);
var _utils = require("../utils");
var _constants = require("../../constants");
function createProduct({ id , name , price , img , status  }) {
    const productContainer = (0, _utils.createDiv)({
        class: "card"
    });
    productContainer.id = id;
    const productImageWrap = (0, _utils.createDiv)({
        class: "card__image"
    });
    const productImage = document.createElement("img");
    productImage.src = img;
    productImage.classList.add("img");
    const priceAndNameWrap = (0, _utils.createDiv)({
        class: "price-name-wrap"
    });
    const productPrice = (0, _utils.createDiv)({
        class: "price"
    });
    productPrice.textContent = `${price} р.`;
    const productName = (0, _utils.createDiv)({
        class: "name"
    });
    productName.textContent = `${name}`;
    const isInCart = status === (0, _constants.ProductStatus).InCart;
    const addToCartButton = (0, _utils.createButton)(isInCart ? "В корзине" : "В корзину", {
        class: "add-to-cart-button",
        type: "button",
        "data-product-action": isInCart ? (0, _constants.ProductAction).RemoveFromCart : (0, _constants.ProductAction).AddToCart,
        "data-product-id": id
    });
    addToCartButton.classList.add(isInCart ? "add-to-cart-button-gray" : "add-to-cart-button");
    const quickViewButton = (0, _utils.createButton)("Быстрый просмотр", {
        class: "quick-view-button",
        type: "button",
        "data-product-action": (0, _constants.ProductAction).QuickView,
        "data-product-id": id
    });
    productContainer.addEventListener("mouseover", (event)=>{
        const target = event.target;
        if (target.className === "img" || target.className === "quick-view-button") quickViewButton.classList.add("quick-view-button-active");
    });
    productContainer.addEventListener("mouseout", (event)=>{
        const target = event.target;
        if (target.className === "img" || target.className === "quick-view-button") quickViewButton.classList.remove("quick-view-button-active");
    });
    priceAndNameWrap.append(productPrice, productName, addToCartButton);
    productImageWrap.append(productImage);
    productContainer.append(productImageWrap, priceAndNameWrap, quickViewButton);
    return productContainer;
}

},{"../utils":"67ZGx","../../constants":"hddiL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"67ZGx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDiv", ()=>createDiv);
parcelHelpers.export(exports, "createButton", ()=>createButton);
function createDiv(divProps) {
    const div = document.createElement("div");
    for(const key in divProps)div.setAttribute(key, divProps[key]);
    return div;
}
function createButton(title, buttonProps) {
    const button = document.createElement("button");
    button.textContent = title;
    for(const key in buttonProps)button.setAttribute(key, buttonProps[key]);
    return button;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hddiL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProductAction", ()=>ProductAction);
parcelHelpers.export(exports, "ProductStatus", ()=>ProductStatus);
parcelHelpers.export(exports, "getDefaultProducts", ()=>getDefaultProducts);
var _1Jpeg = require("../img/cards/1.jpeg");
var _1JpegDefault = parcelHelpers.interopDefault(_1Jpeg);
var _2Jpeg = require("../img/cards/2.jpeg");
var _2JpegDefault = parcelHelpers.interopDefault(_2Jpeg);
var _tshirt1Jpeg = require("../img/cards/tshirt1.jpeg");
var _tshirt1JpegDefault = parcelHelpers.interopDefault(_tshirt1Jpeg);
var _4Jpeg = require("../img/cards/4.jpeg");
var _4JpegDefault = parcelHelpers.interopDefault(_4Jpeg);
var _5Jpeg = require("../img/cards/5.jpeg");
var _5JpegDefault = parcelHelpers.interopDefault(_5Jpeg);
var _6Jpeg = require("../img/cards/6.jpeg");
var _6JpegDefault = parcelHelpers.interopDefault(_6Jpeg);
var _7Jpeg = require("../img/cards/7.jpeg");
var _7JpegDefault = parcelHelpers.interopDefault(_7Jpeg);
var _8Jpeg = require("../img/cards/8.jpeg");
var _8JpegDefault = parcelHelpers.interopDefault(_8Jpeg);
var _9Jpeg = require("../img/cards/9.jpeg");
var _9JpegDefault = parcelHelpers.interopDefault(_9Jpeg);
var _10Jpeg = require("../img/cards/10.jpeg");
var _10JpegDefault = parcelHelpers.interopDefault(_10Jpeg);
var _11Jpeg = require("../img/cards/11.jpeg");
var _11JpegDefault = parcelHelpers.interopDefault(_11Jpeg);
var _12Jpeg = require("../img/cards/12.jpeg");
var _12JpegDefault = parcelHelpers.interopDefault(_12Jpeg);
var _13Jpeg = require("../img/cards/13.jpeg");
var _13JpegDefault = parcelHelpers.interopDefault(_13Jpeg);
var _14Jpeg = require("../img/cards/14.jpeg");
var _14JpegDefault = parcelHelpers.interopDefault(_14Jpeg);
var _15Jpeg = require("../img/cards/15.jpeg");
var _15JpegDefault = parcelHelpers.interopDefault(_15Jpeg);
const ProductAction = {
    QuickView: " quick-view",
    AddToCart: "add-to-cart",
    RemoveFromCart: "remove-from-cart"
};
const ProductStatus = {
    InCart: "in-cart",
    NotInCart: "not-in-cart"
};
const getDefaultProducts = ()=>{
    return [
        {
            id: window.crypto.randomUUID(),
            name: "Брюки",
            price: 100,
            img: (0, _1JpegDefault.default),
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Кеды",
            price: 250,
            img: (0, _2JpegDefault.default),
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Футболка",
            price: 70,
            img: (0, _tshirt1JpegDefault.default),
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Куртка",
            price: 300,
            img: (0, _4JpegDefault.default),
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Джинсы",
            price: 150,
            img: (0, _5JpegDefault.default),
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Туфли",
            price: 100,
            img: (0, _6JpegDefault.default),
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Полотенце",
            price: 15,
            img: (0, _7JpegDefault.default),
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Расческа",
            price: 50,
            img: (0, _8JpegDefault.default),
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Сумка",
            price: 150,
            img: (0, _9JpegDefault.default),
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Носки",
            price: 30,
            img: (0, _10JpegDefault.default),
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Смартфон",
            price: 350,
            img: (0, _11JpegDefault.default),
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Помада",
            price: 50,
            img: (0, _12JpegDefault.default),
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Сумка",
            price: 65,
            img: (0, _13JpegDefault.default),
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Лонгслив",
            price: 60,
            img: (0, _14JpegDefault.default),
            status: ProductStatus.NotInCart
        },
        {
            id: window.crypto.randomUUID(),
            name: "Юбка",
            price: 65,
            img: (0, _15JpegDefault.default),
            status: ProductStatus.NotInCart
        }
    ];
};

},{"../img/cards/1.jpeg":"cejHd","../img/cards/2.jpeg":"ielsg","../img/cards/tshirt1.jpeg":"3JFYs","../img/cards/4.jpeg":"7Vd3c","../img/cards/5.jpeg":"8oczG","../img/cards/6.jpeg":"4ZNsr","../img/cards/7.jpeg":"cFFkU","../img/cards/8.jpeg":"kzqWj","../img/cards/9.jpeg":"fx11M","../img/cards/10.jpeg":"92sh6","../img/cards/11.jpeg":"jvcyF","../img/cards/12.jpeg":"hieZU","../img/cards/13.jpeg":"by6HS","../img/cards/14.jpeg":"b2cmt","../img/cards/15.jpeg":"amgov","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cejHd":[function(require,module,exports) {
module.exports = require("5c11fd4e193b4706").getBundleURL("jcUGk") + "1.7403a3b0.jpeg" + "?" + Date.now();

},{"5c11fd4e193b4706":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"ielsg":[function(require,module,exports) {
module.exports = require("eab90672445fe55c").getBundleURL("jcUGk") + "2.2303b604.jpeg" + "?" + Date.now();

},{"eab90672445fe55c":"lgJ39"}],"3JFYs":[function(require,module,exports) {
module.exports = require("c4c0f53886c434fb").getBundleURL("jcUGk") + "tshirt1.12fbfd11.jpeg" + "?" + Date.now();

},{"c4c0f53886c434fb":"lgJ39"}],"7Vd3c":[function(require,module,exports) {
module.exports = require("9194fab4c14fca02").getBundleURL("jcUGk") + "4.d10a8092.jpeg" + "?" + Date.now();

},{"9194fab4c14fca02":"lgJ39"}],"8oczG":[function(require,module,exports) {
module.exports = require("f1c9dc48d94e4608").getBundleURL("jcUGk") + "5.f545f062.jpeg" + "?" + Date.now();

},{"f1c9dc48d94e4608":"lgJ39"}],"4ZNsr":[function(require,module,exports) {
module.exports = require("4d4e7302c2e3b6a4").getBundleURL("jcUGk") + "6.9a4f8329.jpeg" + "?" + Date.now();

},{"4d4e7302c2e3b6a4":"lgJ39"}],"cFFkU":[function(require,module,exports) {
module.exports = require("b6719eaa5728c479").getBundleURL("jcUGk") + "7.8f3c6ff3.jpeg" + "?" + Date.now();

},{"b6719eaa5728c479":"lgJ39"}],"kzqWj":[function(require,module,exports) {
module.exports = require("32cb6ae8b8edd6ff").getBundleURL("jcUGk") + "8.c1f2e388.jpeg" + "?" + Date.now();

},{"32cb6ae8b8edd6ff":"lgJ39"}],"fx11M":[function(require,module,exports) {
module.exports = require("b77e78acbf409407").getBundleURL("jcUGk") + "9.28535be9.jpeg" + "?" + Date.now();

},{"b77e78acbf409407":"lgJ39"}],"92sh6":[function(require,module,exports) {
module.exports = require("ae10c38c25e48c90").getBundleURL("jcUGk") + "10.f8f4816c.jpeg" + "?" + Date.now();

},{"ae10c38c25e48c90":"lgJ39"}],"jvcyF":[function(require,module,exports) {
module.exports = require("e739cda9c910e78b").getBundleURL("jcUGk") + "11.a7f3d886.jpeg" + "?" + Date.now();

},{"e739cda9c910e78b":"lgJ39"}],"hieZU":[function(require,module,exports) {
module.exports = require("6b559d04f81d6ce7").getBundleURL("jcUGk") + "12.d3654f50.jpeg" + "?" + Date.now();

},{"6b559d04f81d6ce7":"lgJ39"}],"by6HS":[function(require,module,exports) {
module.exports = require("bdaad0f573ed7b29").getBundleURL("jcUGk") + "13.8195c62e.jpeg" + "?" + Date.now();

},{"bdaad0f573ed7b29":"lgJ39"}],"b2cmt":[function(require,module,exports) {
module.exports = require("42953b218ae35fc0").getBundleURL("jcUGk") + "14.c258669d.jpeg" + "?" + Date.now();

},{"42953b218ae35fc0":"lgJ39"}],"amgov":[function(require,module,exports) {
module.exports = require("d912559f393bb113").getBundleURL("jcUGk") + "15.37f5b09a.jpeg" + "?" + Date.now();

},{"d912559f393bb113":"lgJ39"}],"4GhZn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Slider", ()=>Slider);
class Slider {
    constructor(){
        this.prevBtn = document.getElementById("btn-prev");
        this.nextBtn = document.getElementById("btn-next");
        this.dots = document.querySelectorAll(".dot");
        this.slides = document.querySelectorAll(".slide");
        this.slides.forEach((el)=>{
            el.addEventListener("touchstart", this.handleTouchStart);
            el.addEventListener("touchmove", this.handleTouchMove);
        });
        this.index = 0;
        this.x1 = null;
        this.y1 = null;
        this.clickOnDots = this.clickOnDots();
        this.slider = this.slider();
        this.nextBtn.addEventListener("click", this.nextSlide);
        this.prevBtn.addEventListener("click", this.prevSlide);
    }
    clickOnDots() {
        this.dots.forEach((item, indexDot)=>{
            item.addEventListener("click", ()=>{
                this.index = indexDot;
                this.prepareCurrentSlide(this.index);
            });
        });
    }
    prevSlide = ()=>{
        if (this.index === 0) {
            this.index = this.slides.length - 1;
            this.prepareCurrentSlide(this.index);
        } else {
            this.index--;
            this.prepareCurrentSlide(this.index);
        }
    };
    nextSlide = ()=>{
        if (this.index === this.slides.length - 1) {
            this.index = 0;
            this.prepareCurrentSlide(this.index);
        } else {
            this.index++;
            this.prepareCurrentSlide(this.index);
        }
    };
    prepareCurrentSlide = (ind)=>{
        this.activeSlide(ind);
        this.activeDot(ind);
    };
    activeSlide = (el)=>{
        for (let slide of this.slides)slide.classList.remove("active");
        this.slides[el].classList.add("active");
    };
    activeDot = (el)=>{
        for (let dot of this.dots)dot.classList.remove("active");
        this.dots[el].classList.add("active");
    };
    slider() {
        setInterval(this.nextSlide, 5000);
    }
    handleTouchStart = (event)=>{
        const firstTouch = event.touches[0];
        this.x1 = firstTouch.clientX;
        this.y1 = firstTouch.clientY;
    };
    handleTouchMove = (event)=>{
        if (!this.x1 || !this.y1) return false;
        let x2 = event.touches[0].clientX;
        let y2 = event.touches[0].clientY;
        let xDiff = x2 - this.x1;
        let yDiff = y2 - this.y1;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) this.prevSlide();
            else this.nextSlide();
        }
        this.x1 = null;
        this.y1 = null;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lS3ra":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "qVContainer", ()=>qVContainer);
parcelHelpers.export(exports, "quickViewModal", ()=>quickViewModal);
var _utils = require("./utils");
const qVContainer = document.getElementById("quick-view-modal");
class quickViewModal {
    constructor(products){
        this.products = products;
        this.container = qVContainer;
        document.addEventListener("click", ({ target  })=>{
            if (target.classList.contains("quick-view__content-close") || target.id === "quick-view-modal") this.container.style.display = "none";
        });
    }
    onQuickView = (productId)=>{
        this.container.style.display = "block";
        const product = this.products.find(({ id  })=>id === productId);
        if (product) this.renderQuickView(this.container, product);
    };
    renderQuickView = (container, product)=>{
        container.innerHTML = "";
        if (product) (0, _utils.createModalQuickView)(product);
    };
}

},{"./utils":"2v6B7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2v6B7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createModalQuickView", ()=>createModalQuickView);
var _quickView = require("./quickView");
function createModalQuickView({ img  }) {
    const modal = (0, _quickView.qVContainer);
    modal.insertAdjacentHTML("afterBegin", `
        <div class="quick-view__content">
        <button class="quick-view__content-close" id="close-btn" type="button">X</button>
        <img class="quick-view__content-image" src="${img}" alt="goods">
        </div>
        `);
    return modal;
}

},{"./quickView":"lS3ra","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"01R4p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SearchForm", ()=>SearchForm);
const searchInputName = "search-input";
class SearchForm {
    constructor({ onProductsSearch , onClearSearch  }){
        this.searchForm = document.getElementById("search__id");
        this.searchRequest = document.getElementById("goods__text");
        this.clearSearchButton = document.getElementById("clear-search-button");
        this.onProductsSearch = onProductsSearch;
        this.onClearSearch = onClearSearch;
        this.searchForm.addEventListener("submit", this.onSearchFormSubmit);
        this.clearSearchButton.addEventListener("click", this.onClearSearch);
    }
    onSearchFormSubmit = (event)=>{
        event.preventDefault();
        const { value  } = this.searchForm.elements[searchInputName];
        const formattedValue = value.trim().toLowerCase();
        const formattedValueToUpper = formattedValue[0].toUpperCase() + formattedValue.slice(1);
        if (formattedValueToUpper) this.onProductsSearch(formattedValueToUpper);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fApl5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Model", ()=>Model);
var _constants = require("../constants");
const LocalStorageKey = {
    Products: "products"
};
class Model {
    constructor(){
        this.products = this.getSaveProducts();
    }
    setProductStatus = (productId, productStatus)=>{
        const productIndex = this.products.findIndex(({ id  })=>id === productId);
        if (productIndex > -1) {
            this.products[productIndex] = {
                ...this.products[productIndex],
                status: productStatus
            };
            localStorage.setItem(LocalStorageKey.Products, JSON.stringify(this.products));
        }
    };
    getSaveProducts = ()=>{
        const savedProducts = localStorage.getItem(LocalStorageKey.Products);
        if (!savedProducts) return (0, _constants.getDefaultProducts)();
        return JSON.parse(savedProducts);
    };
    getProductsInBasket = ()=>{
        return this.products.filter(({ status  })=>status === (0, _constants.ProductStatus).InCart);
    };
    removeProductsFromBasket = ()=>{
        this.products.forEach((product)=>{
            product.status = (0, _constants.ProductStatus).NotInCart;
        });
        localStorage.setItem(LocalStorageKey.Products, JSON.stringify(this.products));
        return this.products;
    };
    getTotalPrice = ()=>{
        const productsInBasket = this.getProductsInBasket();
        if (productsInBasket === undefined) return 0;
        else if (productsInBasket.length === 0) return 0;
        else return productsInBasket.reduce((acc, curr)=>{
            return acc + curr.price;
        }, 0);
    };
    searchProduct = (searchText)=>{
        return this.products.filter(({ name  })=>name === searchText);
    };
}

},{"../constants":"hddiL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fMcV0","ahc7M"], "ahc7M", "parcelRequireb154")

//# sourceMappingURL=index.61542594.js.map
