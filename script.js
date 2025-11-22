// script.js
// Prevenir scroll automático
document.addEventListener('DOMContentLoaded', function() {
  window.scrollTo(0, 0);
  history.scrollRestoration = "manual";
});

// Animação de revelação ao scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, observerOptions);

// Observar todas as seções
document.querySelectorAll('section').forEach((section) => {
  observer.observe(section);
});

// Smooth scroll para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Adicionar estrelas cadentes dinamicamente
function createShootingStars() {
  const starsContainer = document.createElement('div');
  starsContainer.className = 'shooting-stars';
  
  for (let i = 0; i < 6; i++) {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    starsContainer.appendChild(star);
  }
  
  document.body.appendChild(starsContainer);
}

createShootingStars();