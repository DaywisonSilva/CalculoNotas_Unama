self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('static').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/src/index.js',
        '/script.js',
        '/imagens/atencao.svg',
        '/imagens/happy_face.svg',
        '/imagens/sad_face.svg',
        '/imagens/study.svg',
        '/imagens/undraw_winners_ao2o.svg',
        '/imagens/background.jpg',
        '/imagens/fluxograma.jpeg',
        '/imagens/icone-unama.png',
        '/imagens/unama-logo-site.png',
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});