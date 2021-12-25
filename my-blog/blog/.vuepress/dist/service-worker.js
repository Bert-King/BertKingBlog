/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1970/01/01/posts/index.html",
    "revision": "4e58595e4229198546f1ed8f6f6984a0"
  },
  {
    "url": "1970/01/01/学习数据库/index.html",
    "revision": "d62297c34426a19fd0ea6b77dd6a1b33"
  },
  {
    "url": "1970/01/01/张九龄-感遇四首之一/index.html",
    "revision": "9a151fe63a1e2ebd0c67a5b5b69290fe"
  },
  {
    "url": "1970/01/01/张九龄-感遇四首之三/index.html",
    "revision": "d4f4068afd3caf6df9029705a5d5d94e"
  },
  {
    "url": "1970/01/01/张九龄-感遇四首之二/index.html",
    "revision": "e38807241c5189de4e663957827e96da"
  },
  {
    "url": "1970/01/01/张九龄-感遇四首之四/index.html",
    "revision": "fca2104cf5153739369eb0d0b1844b2c"
  },
  {
    "url": "1970/01/01/望岳/index.html",
    "revision": "294ba6af5cdf5d5d10169d8dc0a65186"
  },
  {
    "url": "1970/01/01/李白-月下独酌/index.html",
    "revision": "ae442461321f4bc2762e35b005f95551"
  },
  {
    "url": "1970/01/01/李白-金陵酒肆留别/index.html",
    "revision": "c1b444e492ca45d2f97cfdcce165e265"
  },
  {
    "url": "1970/01/01/王维-送别/index.html",
    "revision": "c5f0773d2ae04399b4f245cf5d9aabbf"
  },
  {
    "url": "1970/01/01/面试题总结1/index.html",
    "revision": "07b84447379636b0a598646c762ce2b6"
  },
  {
    "url": "1970/01/01/面试题目总结1/index.html",
    "revision": "e89151dc70e0c2d64d4fd9468f66db6b"
  },
  {
    "url": "2021/12/25/搭建博客/index.html",
    "revision": "fc80608e63b4dcfc4003f5477db0f09a"
  },
  {
    "url": "404.html",
    "revision": "b4c0917e0ea0249d85db129da8b48fc3"
  },
  {
    "url": "assets/css/0.styles.521649cb.css",
    "revision": "f77b8aef689d43128ea60b3913f308ee"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e98a7f60.js",
    "revision": "b4a48e2c2d498ddb4bc3e5338bec7471"
  },
  {
    "url": "assets/js/11.d6491d93.js",
    "revision": "141114a9e247dfd4f083194a3637ccd5"
  },
  {
    "url": "assets/js/12.40910318.js",
    "revision": "4bbb1d8166c32a9a657cdc08a4c61461"
  },
  {
    "url": "assets/js/13.6a91bc7e.js",
    "revision": "96b629f332cd4bb9367544e315dc132e"
  },
  {
    "url": "assets/js/14.385f73fa.js",
    "revision": "da91f41b3b624a0c6410b7efe5964fde"
  },
  {
    "url": "assets/js/15.9d1a9ce4.js",
    "revision": "562bdecea019ac94c2f84d6d13c47611"
  },
  {
    "url": "assets/js/16.3b6be617.js",
    "revision": "71281756c882a672f2250e15aec22de2"
  },
  {
    "url": "assets/js/17.0e57cfa4.js",
    "revision": "abd0c38ee2c045b2b038130f73bec474"
  },
  {
    "url": "assets/js/18.6c5eabbd.js",
    "revision": "2093bccf8001a3841cdc9ae1a8a71720"
  },
  {
    "url": "assets/js/19.f6a53e5c.js",
    "revision": "ee3cb50cbdccec1fea20e9da4af57aeb"
  },
  {
    "url": "assets/js/20.500de436.js",
    "revision": "ed29c73b50b18925bb1b7543c3acf235"
  },
  {
    "url": "assets/js/21.331d8f2b.js",
    "revision": "e8c727ba6015dc9dce97c3c8039bd056"
  },
  {
    "url": "assets/js/22.8581f0d6.js",
    "revision": "244b6fe17ca229de97ba91587b60a8dd"
  },
  {
    "url": "assets/js/23.93b3a9be.js",
    "revision": "3c4039d13f27076e1bba6ca750d14c94"
  },
  {
    "url": "assets/js/24.3bd595cc.js",
    "revision": "654eaa79639847f358c3c8761b9e9ad3"
  },
  {
    "url": "assets/js/25.f52ebcc7.js",
    "revision": "b6ec18dc446385c4a06637fcbb381543"
  },
  {
    "url": "assets/js/26.9dfa5ff4.js",
    "revision": "cfb62029306064f4dac0b5de71c0fcb8"
  },
  {
    "url": "assets/js/3.4af8d0b8.js",
    "revision": "4e30f70f72995f4baace3daf6c2908da"
  },
  {
    "url": "assets/js/4.9f5f2e6f.js",
    "revision": "51a59f03e02e10f37cc0b747f58408ee"
  },
  {
    "url": "assets/js/5.7d0b74f3.js",
    "revision": "9009580db339fb2d582c240b55c1ad13"
  },
  {
    "url": "assets/js/6.cc3ca6da.js",
    "revision": "ab254d69fe1576cca25635ec60768921"
  },
  {
    "url": "assets/js/7.a1468967.js",
    "revision": "ebf249193ca0c3530a0ef83e6215d90b"
  },
  {
    "url": "assets/js/8.a24830f6.js",
    "revision": "ddae6b8c193f04f53a0694bf06bfdf80"
  },
  {
    "url": "assets/js/9.98181d3c.js",
    "revision": "494ad458fd9bf59b175440bb9359c412"
  },
  {
    "url": "assets/js/app.50dd11c3.js",
    "revision": "3777159a324ac2ca7b415c0340adb970"
  },
  {
    "url": "assets/js/vuejs-paginate.d4404b13.js",
    "revision": "c773acb2e0cceab5c112b9c3e520eb65"
  },
  {
    "url": "database/index.html",
    "revision": "c348b03e7aacac9aa7f5ea278ad7072e"
  },
  {
    "url": "index.html",
    "revision": "220ec5feaabdd0c6b0a834394fab171c"
  },
  {
    "url": "interview/index.html",
    "revision": "5788601679fc9cc3dbf83c16f492c31f"
  },
  {
    "url": "mobile/index.html",
    "revision": "a634966111860c7d36dc893641d74076"
  },
  {
    "url": "page/2/index.html",
    "revision": "2f1e6d2685502078d49ada8eefa27f53"
  },
  {
    "url": "servers/index.html",
    "revision": "7aaf4f6162e6f8488577da7d5ea0bf6d"
  },
  {
    "url": "tag/index.html",
    "revision": "bde5ed167389ea120201bc515f2458ef"
  },
  {
    "url": "webs/index.html",
    "revision": "a36ce08e383da11e8fcf9309a639b47f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
