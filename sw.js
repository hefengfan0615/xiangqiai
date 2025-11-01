if (!self.define) {
    let s, e = {};
    const i = (i, a) => (i = new URL(i + ".js",a).href,
    e[i] || new Promise((e => {
        if ("document"in self) {
            const s = document.createElement("script");
            s.src = i,
            s.onload = e,
            document.head.appendChild(s)
        } else
            s = i,
            importScripts(i),
            e()
    }
    )).then(( () => {
        let s = e[i];
        if (!s)
            throw new Error(`Module ${i} didn’t register its module`);
        return s
    }
    )));
    self.define = (a, n) => {
        const r = s || ("document"in self ? document.currentScript.src : "") || location.href;
        if (e[r])
            return;
        let l = {};
        const d = s => i(s, r)
          , f = {
            module: {
                uri: r
            },
            exports: l,
            require: d
        };
        e[r] = Promise.all(a.map((s => f[s] || d(s)))).then((s => (n(...s),
        l)))
    }
}
define(["./workbox-f27e9973"], (function(s) {
    "use strict";
    self.addEventListener("message", (s => {
        s.data && "SKIP_WAITING" === s.data.type && self.skipWaiting()
    }
    )),
    s.precacheAndRoute([{
        url: "assets/BoardTestView.1646e4b5.js",
        revision: null
    }, {
        url: "assets/ChessBoard.46291e70.js",
        revision: null
    }, {
        url: "assets/ChessBoard.9232dc69.css",
        revision: null
    }, {
        url: "assets/EngineHelper.worker.881f7921.js",
        revision: null
    }, {
        url: "assets/howler.5cf60c4f.js",
        revision: null
    }, {
        url: "assets/index.65062099.css",
        revision: null
    }, {
        url: "assets/index.b58f0dd0.js",
        revision: null
    }, {
        url: "assets/MainView.4ccb1b33.css",
        revision: null
    }, {
        url: "assets/MainView.7b2ba2e8.js",
        revision: null
    }, {
        url: "assets/vschess.function.e5de4338.js",
        revision: null
    }, {
        url: "assets/VschessTestView.b918d83e.css",
        revision: null
    }, {
        url: "assets/VschessTestView.cec5aaa8.js",
        revision: null
    }, {
        url: "assets/workbox-window.prod.es5.983a7963.js",
        revision: null
    }, {
        url: "assets/xqf.2e5d5959.js",
        revision: null
    }, {
        url: "engine/main_20240816v4/multi_simd_relaxed/pikafish.js",
        revision: "8dfd22fb285f8fa334951c52af4a19c1"
    }, {
        url: "engine/main_20240816v4/multi_simd/pikafish.js",
        revision: "8dfd22fb285f8fa334951c52af4a19c1"
    }, {
        url: "engine/main_20240816v4/multi/pikafish.js",
        revision: "8dfd22fb285f8fa334951c52af4a19c1"
    }, {
        url: "engine/main_20240816v4/single_simd/pikafish.js",
        revision: "a953246e60d323b2ea9e95c8a351f1cc"
    }, {
        url: "engine/main_20240816v4/single/pikafish.js",
        revision: "44d5935b27dd8aad75e247c7d346ee13"
    }, {
        url: "engine/main_20240816v7/multi_simd_relaxed/pikafish.js",
        revision: "bc5c65a5a78d4edb8efb8dc245b8105c"
    }, {
        url: "engine/main_20240816v7/multi_simd/pikafish.js",
        revision: "bc5c65a5a78d4edb8efb8dc245b8105c"
    }, {
        url: "engine/main_20240816v7/multi/pikafish.js",
        revision: "51437ad46f5e9abf8cfe48dc47e7950e"
    }, {
        url: "engine/main_20240816v7/single_simd/pikafish.js",
        revision: "44d5935b27dd8aad75e247c7d346ee13"
    }, {
        url: "engine/main_20240816v7/single/pikafish.js",
        revision: "44d5935b27dd8aad75e247c7d346ee13"
    }, {
        url: "gif.worker.js",
        revision: "36bc84d42572d9bb793507e7f5f7d691"
    }, {
        url: "index.html",
        revision: "14dfdf66352267db406b06db3c96647c"
    }, {
        url: "wasm/multi_simd_relaxed/pikafish.js",
        revision: "8ff16b28e2e3ff7353d2838e5e4ca3c9"
    }, {
        url: "wasm/multi_simd_relaxed/pikafish.worker.js",
        revision: "2bc326b784b8f46eda46699a344f1a71"
    }, {
        url: "wasm/multi_simd/pikafish.js",
        revision: "106a033640c10ad2cb4d285b6f8d71f0"
    }, {
        url: "wasm/multi_simd/pikafish.worker.js",
        revision: "2bc326b784b8f46eda46699a344f1a71"
    }, {
        url: "wasm/multi/pikafish.js",
        revision: "2793ef87683ecea38b84824cbb865d47"
    }, {
        url: "wasm/multi/pikafish.worker.js",
        revision: "2bc326b784b8f46eda46699a344f1a71"
    }, {
        url: "wasm/single_simd/pikafish.js",
        revision: "57f19cd6ad6891c96baeb1c383893431"
    }, {
        url: "wasm/single_simd/pikafish.worker.js",
        revision: "2bc326b784b8f46eda46699a344f1a71"
    }, {
        url: "wasm/single/pikafish.js",
        revision: "57f19cd6ad6891c96baeb1c383893431"
    }, {
        url: "wasm/single/pikafish.worker.js",
        revision: "2bc326b784b8f46eda46699a344f1a71"
    }, {
        url: "favicon.ico",
        revision: "ef5e3ff6bf1e3d78832a3ef2b2149142"
    }, {
        url: "robots.txt",
        revision: "cd9cd94aaa699e0a16e692b6bb16f672"
    }, {
        url: "manifest/icons/pwa-192x192.png",
        revision: "2e7c4316e77085f9c072a44081e416a5"
    }, {
        url: "manifest/icons/pwa-512x512.png",
        revision: "d0b50f9b9417375413d29770887866e7"
    }, {
        url: "manifest/icons/pwa-maskable-192x192.png",
        revision: "dce4923da6f66f0a876f79cdad5e51b2"
    }, {
        url: "manifest/icons/pwa-maskable-512x512.png",
        revision: "37422551a21e8bbad2d62d57a6f044c5"
    }, {
        url: "manifest.webmanifest",
        revision: "9c3d034921d7dbc2d748c4e80337a2fd"
    }], {}),
    s.cleanupOutdatedCaches(),
    s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),
    s.registerRoute(/\.(webp)$/, new s.StaleWhileRevalidate, "GET"),
    s.registerRoute(/\.(js|css|svg|data|wasm)$/, new s.CacheFirst, "GET")
}
));
