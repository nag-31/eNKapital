/* eNKapital — main.js
   - Mobile menu
   - IntersectionObserver fade-ins
   - Nav style on scroll
*/

(function () {
  'use strict';

  /* ----- Mobile menu ----- */
  const burger = document.querySelector('.nav__burger');
  const body = document.body;
  if (burger) {
    burger.addEventListener('click', function () {
      body.classList.toggle('menu-open');
    });
    // Close menu when a link is tapped
    document.querySelectorAll('.nav__overlay a').forEach(a => {
      a.addEventListener('click', () => body.classList.remove('menu-open'));
    });
  }

  /* ----- Reveal on scroll ----- */
  const targets = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && targets.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(t => io.observe(t));
  } else {
    targets.forEach(t => t.classList.add('is-visible'));
  }

  /* ----- Nav state on scroll (subtle shadow) ----- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 12) nav.classList.add('is-scrolled');
      else nav.classList.remove('is-scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
