// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => io.observe(el));

// Active nav link on scroll
const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      const anchor = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (!anchor) return;
      if (entry.isIntersecting) {
        navAnchors.forEach((a) => a.classList.remove('active'));
        anchor.classList.add('active');
      }
    });
  },
  { rootMargin: '-45% 0px -45% 0px' }
);
sections.forEach((section) => sectionObserver.observe(section));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
