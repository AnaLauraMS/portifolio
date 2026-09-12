// Efeito de revelar elementos suavemente ao rolar a página (Scroll Reveal)
window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;
    
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
}

// Aciona a função no carregamento inicial
revealOnScroll();