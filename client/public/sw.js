if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),f={module:{uri:n},exports:t,require:r};s[n]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-2e6be583"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/AMPlogo.png",revision:"c75b38dc4f5eb38275cb983eab56a1a9"},{url:"/_next/app-build-manifest.json",revision:"3f1a9aabc95f85bd252b3ee793eeb6e4"},{url:"/_next/static/1EPlX54jqFJ-2E1hBrIc5/_buildManifest.js",revision:"4475ae364dd5fb23996f84c5439bf780"},{url:"/_next/static/1EPlX54jqFJ-2E1hBrIc5/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/09d0bbd3-54a4f0b4b2904b3f.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/25-1bc85857f2b0ca2c.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/327-8a1f0b00bd04b3ed.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/331-110debf005264e7a.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/35-298a4b6ea0f4fb97.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/391-d95750cd4a1c9d21.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/393-58a8c6bd3c5332c7.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/597-0ba8b875c4d21431.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/735-ee8dfd6e589c30ca.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/7c9ab469-9936a2a56e0e4d9d.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/815-6b14c3054f9e8bb9.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/849-64d2133c26b6f330.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/862-39f2f52b7e241ce0.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/964-6c511229e6c2836a.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/9bb1fbd7-445a06032c109bde.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/app/_not-found-262cd5bdae481b7d.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/app/benchmark-review/page-311c2476a6715c93.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/app/benchmark-setup/page-21aa7279f3889638.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/app/benchmark/page-92d89487e87c5802.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/app/dashboard/page-c49af95134fbfeeb.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/app/hardware/page-a55368edeaf298ae.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/app/layout-5605c2cab7048e05.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/app/page-03b2d9ad20421260.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/app/research/page-a76b57b85a13d985.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/framework-f780fd9bae3b8c58.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/main-628afd7943c8f8ee.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/main-app-5ac35031adf73696.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/pages/_app-2e859527831059d4.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/pages/_error-ea5c1f14e7be5039.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-92fcacd6e7cece9f.js",revision:"1EPlX54jqFJ-2E1hBrIc5"},{url:"/_next/static/css/830ff20ce690a180.css",revision:"830ff20ce690a180"},{url:"/_next/static/media/0e4fe491bf84089c-s.p.woff2",revision:"5e22a46c04d947a36ea0cad07afcc9e1"},{url:"/_next/static/media/1c57ca6f5208a29b-s.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/3dbd163d3bb09d47-s.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/42d52f46a26971a3-s.woff2",revision:"b44d0dd122f9146504d444f290252d88"},{url:"/_next/static/media/44c3f6d12248be7f-s.woff2",revision:"705e5297b1a92dac3b13b2705b7156a7"},{url:"/_next/static/media/4a8324e71b197806-s.woff2",revision:"5fba57b10417c946c556545c9f348bbd"},{url:"/_next/static/media/5647e4c23315a2d2-s.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/627622453ef56b0d-s.p.woff2",revision:"e7df3d0942815909add8f9d0c40d00d9"},{url:"/_next/static/media/71ba03c5176fbd9c-s.woff2",revision:"2effa1fe2d0dff3e7b8c35ee120e0d05"},{url:"/_next/static/media/7be645d133f3ee22-s.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b-s.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/7d8c9b0ca4a64a5a-s.p.woff2",revision:"0772a436bbaaaf4381e9d87bab168217"},{url:"/_next/static/media/83e4d81063b4b659-s.woff2",revision:"bd30db6b297b76f3a3a76f8d8ec5aac9"},{url:"/_next/static/media/8fb72f69fba4e3d2-s.woff2",revision:"7a2e2eae214e49b4333030f789100720"},{url:"/_next/static/media/912a9cfe43c928d9-s.woff2",revision:"376ffe2ca0b038d08d5e582ec13a310f"},{url:"/_next/static/media/934c4b7cb736f2a3-s.p.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/HardwareVersionOne.857bcef4.webp",revision:"948dd99b407180452f430ea0be757c47"},{url:"/_next/static/media/a5b77b63ef20339c-s.woff2",revision:"96e992d510ed36aa573ab75df8698b42"},{url:"/_next/static/media/a6d330d7873e7320-s.woff2",revision:"f7ec4e2d6c9f82076c56a871d1d23a2d"},{url:"/_next/static/media/baf12dd90520ae41-s.woff2",revision:"8096f9b1a15c26638179b6c9499ff260"},{url:"/_next/static/media/bbdb6f0234009aba-s.woff2",revision:"5756151c819325914806c6be65088b13"},{url:"/_next/static/media/bd976642b4f7fd99-s.woff2",revision:"cc0ffafe16e997fe75c32c5c6837e781"},{url:"/_next/static/media/cff529cd86cc0276-s.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"},{url:"/_next/static/media/d117eea74e01de14-s.woff2",revision:"4d1e5298f2c7e19ba39a6ac8d88e91bd"},{url:"/_next/static/media/de9eb3a9f0fa9e10-s.woff2",revision:"7155c037c22abdc74e4e6be351c0593c"},{url:"/_next/static/media/dfa8b99978df7bbc-s.woff2",revision:"7a500aa24dccfcf0cc60f781072614f5"},{url:"/_next/static/media/e25729ca87cc7df9-s.woff2",revision:"9a74bbc5f0d651f8f5b6df4fb3c5c755"},{url:"/_next/static/media/eb52b768f62eeeb4-s.woff2",revision:"90687dc5a4b6b6271c9f1c1d4986ca10"},{url:"/_next/static/media/f06116e890b3dadb-s.woff2",revision:"2855f7c90916c37fe4e6bd36205a26a8"},{url:"/_next/static/media/profile.1d4a49e7.jpg",revision:"75ccbbe008f9e89796a72a9ba6874989"},{url:"/icon-192x192.png",revision:"a8ad654168b055ab34762ee6ba6c3b72"},{url:"/icon-256x256.png",revision:"0382fcaa1fd91917d5fdd4121d933aa8"},{url:"/icon-384x384.png",revision:"6b4c44d8800ecd96805765b6585784c6"},{url:"/icon-512x512.png",revision:"621e2ad46219b1a23414915512acdeeb"},{url:"/manifest.json",revision:"3d5f93c8276c1aa1087d72df1cb7ae61"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
