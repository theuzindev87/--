// script.js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.reveal-up, .pop')
  .forEach(el => {
    observer.observe(el);
  });

// Scroll effect para topbar
window.addEventListener('scroll', () => {
  const topbar = document.querySelector('.topbar');
  if (window.scrollY > 10) {
    topbar.classList.add('scrolled');
  } else {
    topbar.classList.remove('scrolled');
  }
});
