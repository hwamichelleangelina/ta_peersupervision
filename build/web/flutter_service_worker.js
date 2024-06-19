'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5ca0504c2f0e3906cbdc99f7b61211b3",
"assets/AssetManifest.bin.json": "dc59d59a091b85edfc14fc1da98285bd",
"assets/AssetManifest.json": "a4acf4c9ad1a1065aeff70f8f422a34f",
"assets/assets/fonts/DellaRespira-Regular.ttf": "3b5b10e7cc760b02c3aea78dd08502a9",
"assets/assets/fonts/Montserrat-Bold.ttf": "d3085f686df272f9e1a267cc69b2d24f",
"assets/assets/fonts/Montserrat-Regular.ttf": "07689d4eaaa3d530d58826b5d7f84735",
"assets/assets/images/Add%2520Dampingan.png": "72f0b12c236d00cecf9d5248d169b5a5",
"assets/assets/images/All%2520Report.png": "7a0ffda81d2a0c0cc720219b45936aa0",
"assets/assets/images/BK%2520ITB.png": "0d4b7fda1f5f0fbc42f2d33f2d98a411",
"assets/assets/images/Checklist.png": "541357893a58b8e6a04082bd68385646",
"assets/assets/images/Dampingan.png": "551cbc1a2115c50c99a6d721d59ce4e5",
"assets/assets/images/Download.png": "57f808848a012a63348e20c7cb6b4404",
"assets/assets/images/Edit.png": "97c410ec90e95b10ef4b81edb1d1bd46",
"assets/assets/images/Form%2520Entry.png": "2673148f626f087281d9e1ec74a4c259",
"assets/assets/images/Ganecare.png": "b030397968ba984a69c521e3fa5f100c",
"assets/assets/images/Home.png": "85eefabd0f210d9dca54e79ceafbea45",
"assets/assets/images/Information.png": "14e753cc95e0f9c8fd46f53e3185ed8f",
"assets/assets/images/Laporan.png": "29bf41296fd1972aef12c8461cdb6d09",
"assets/assets/images/Logout.png": "bfebd2b37afaa29a34b379f8003697fd",
"assets/assets/images/Member%2520Profile.png": "7328f9d2b233897f8d8f03b4baed0e43",
"assets/assets/images/Member.png": "d4143d04f410ee9361ab30ff48e8f323",
"assets/assets/images/MyAvatar.png": "1b8e998cdc6f6a4c12fcaa26596d5577",
"assets/assets/images/Password.png": "79b1a1cbbfeef9ec415d6b62bf0ea33c",
"assets/assets/images/Penjadwalan.png": "ec3351ee05bdbb7ef297e344f81788c4",
"assets/assets/images/pig.png": "4e78d10b450c545acac2f0fcc2b5466b",
"assets/assets/images/Profile%2520Icon.png": "522da5dda8d554a8952f62183e9aba13",
"assets/assets/images/PS%2520ITB.png": "25dadeffc682645b96075940239694b8",
"assets/assets/images/PSLogo.png": "f79495f4be1b62238e8a6cefa2a5774b",
"assets/assets/images/Schedule.png": "effc283e9f414b643e1aa64220857ba7",
"assets/assets/images/Search.png": "b02272770438b3f5f57af591f9baa5c2",
"assets/assets/images/Statistic.png": "c8661cfd4f018ad65399547139fbd7aa",
"assets/assets/images/Unchecklist.png": "b4654a8f2a8e89a1b3f22343a6d04beb",
"assets/assets/lightimages/Add%2520Dampingan.png": "5d29bf28f752306ec3c00ea944b613a5",
"assets/assets/lightimages/All%2520Report.png": "22451503b6f33e70ad92962652791621",
"assets/assets/lightimages/BK%2520ITB.png": "beab7de95e99d08c1ab1dfbf873dd40b",
"assets/assets/lightimages/Checklist.png": "24981baf9fec12247434a6d8f6efe44f",
"assets/assets/lightimages/Dampingan.png": "3d985475124703ad83d887b4750fa5b5",
"assets/assets/lightimages/Download.png": "0f954184fa379509e61405b0addf422f",
"assets/assets/lightimages/e024059.full.pdf": "ba9338f48689f3792ad2fa5f06b5856e",
"assets/assets/lightimages/Edit.png": "121369b022bfa1ae76655dd056e21026",
"assets/assets/lightimages/Form%2520Entry.png": "e2d7aaaaff8e28ee54245a41c06c673d",
"assets/assets/lightimages/Ganecare.png": "b030397968ba984a69c521e3fa5f100c",
"assets/assets/lightimages/health%2520information%2520policy.pdf": "22e982c26d33b0962c93da3207479a43",
"assets/assets/lightimages/Home.png": "3b5a3cfaa05a10a5723f710e4372e240",
"assets/assets/lightimages/Information.png": "90b07dfe15a5a3c72d6bad941b53475a",
"assets/assets/lightimages/Laporan.png": "aaa6d334f27d3cb25f4e415969314c5a",
"assets/assets/lightimages/Logout.png": "6b0618397c77c6a3ad6a1e890e696647",
"assets/assets/lightimages/Member%2520Profile.png": "577b9373d3a94f08165b6da8c67a124f",
"assets/assets/lightimages/Member.png": "e9cd13d47605b9bb4f84496fae6cc6d5",
"assets/assets/lightimages/Password.png": "ea97b4319b5eca611e8452d06619eb14",
"assets/assets/lightimages/Peer-to-Peer-Support-Services-In-Integrated-Care-Settings-5.3.16.pdf": "2b4b2f26861bd062c7b4f0955647f22b",
"assets/assets/lightimages/Penjadwalan.png": "ea2a502d909ef359a4bd85cae390c187",
"assets/assets/lightimages/Profile%2520Icon.png": "9dc2988e461894cd788c6d103d7903a9",
"assets/assets/lightimages/PS%2520ITB.png": "6bf20a9f947d8e28f2d4a349c3ed7c99",
"assets/assets/lightimages/Schedule.png": "b8dbdff1e02b88e9036934c0d92f0f26",
"assets/assets/lightimages/Search.png": "ca080040af9920b510ad38b882bcd398",
"assets/assets/lightimages/stas1-1209.pdf": "a03136b129642fd5963c2eccf18b2f54",
"assets/assets/lightimages/Statistic.png": "e4e50d3dbc6051d778a819965973e31a",
"assets/assets/lightimages/tech%2520for%2520mental%2520health%2520treatment.pdf": "228e77a79d679262a4a6ad40030bdf01",
"assets/assets/lightimages/telehealth.pdf": "b30f2f976c8fafad385eb71bc80709af",
"assets/assets/lightimages/Unchecklist.png": "b6c25ba4b6f3d7a0276c9dcbafbfe1ba",
"assets/FontManifest.json": "13a24742a3da44b5b46e79f159d315b3",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "901b78a77d43291eb13fd4a99c0e1ebb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8f1cc61c808e59b4fbf862ff09d91a4a",
"/": "8f1cc61c808e59b4fbf862ff09d91a4a",
"main.dart.js": "4080180acde2bb490bf5131e32a6718e",
"manifest.json": "e743a9f74bce9ac30742dd87a3698bed",
"version.json": "c3931edfd6200adea02591e56e918c73"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
