// Effet machine à écrire sur le titre h1
const titre = "Salut, moi c'est Virgil 👋";
const h1 = document.querySelector("header h1");
let index = 0;

function typeWriter() {
  if (index < titre.length) {
    h1.textContent += titre.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}
h1.textContent = "";
typeWriter();

// Animation au scroll avec IntersectionObserver
const sections = document.querySelectorAll("section, .project, footer");

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      obs.unobserve(entry.target); // pour que ça ne rejoue pas à chaque scroll
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});