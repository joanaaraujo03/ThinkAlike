// Smooth scroll para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// Menu responsivo
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('nav-menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Fade-in body on load
  document.body.classList.add('loaded');

  // Section scroll/fade-in animation
  const animatedSections = document.querySelectorAll('.hero, .partners, .feature-grid, .testimonial, .cta-bottom');
  animatedSections.forEach(section => {
    section.classList.add('section-animate');
  });

  function revealOnScroll() {
    animatedSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        section.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});

