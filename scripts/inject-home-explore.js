'use strict';

hexo.extend.filter.register('theme_inject', function (injects) {
  injects.head.raw('home-explore-css',
    '<link rel="stylesheet" href="/css/home-explore.css">');
  injects.bodyEnd.raw('home-explore-js',
    '<script src="/js/home-explore.js" defer></script>');
});
