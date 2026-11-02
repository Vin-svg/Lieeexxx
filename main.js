// Tabs — show one section at a time instead of scrolling to it
const navLinks = document.querySelectorAll('.tabs a');
const sections = document.querySelectorAll('main > section');

function activateTab(id) {
  sections.forEach(s => {
    if (s.id === id) {
      s.hidden = false;
      s.style.opacity = '0';
      requestAnimationFrame(() => {
        s.style.transition = 'opacity 0.25s ease';
        s.style.opacity = '1';
      });
    } else {
      s.hidden = true;
    }
  });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    if (!document.querySelector(`main > section#${id}`)) return;
    e.preventDefault();
    activateTab(id);
    history.replaceState(null, '', `#${id}`);
  });
});

const startId = location.hash.slice(1);
if (document.getElementById(startId)) activateTab(startId);

// Scroll fade-in
const targets = document.querySelectorAll('section, .project, footer');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
targets.forEach(el => observer.observe(el));

// Konami code
const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiProgress = 0;
document.addEventListener('keydown', e => {
  konamiProgress = e.key === konami[konamiProgress] ? konamiProgress + 1 : (e.key === konami[0] ? 1 : 0);
  if (konamiProgress === konami.length) {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }
});
