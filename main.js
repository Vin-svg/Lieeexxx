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
