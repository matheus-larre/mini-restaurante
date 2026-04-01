// HEADER: efeito ao rolar a página
// =============================================

const header = document.getElementById('header');

// Função chamada toda vez que o usuário rola a página
function atualizarHeader() {
  // Se rolou mais de 50px, adiciona a classe 'rolado'
  if (window.scrollY > 50) {
    header.classList.add('rolado');
  } else {
    header.classList.remove('rolado');
  }
}

// Escuta o evento de scroll (rolagem)
window.addEventListener('scroll', atualizarHeader);

// Roda uma vez ao carregar, caso a página já esteja rolada
atualizarHeader();


// =============================================
// MENU HAMBURGUER (mobile)
// =============================================

const hamburguer = document.getElementById('hamburguer');
const nav = document.getElementById('nav');

hamburguer.addEventListener('click', function () {
  // Alterna a classe 'aberto' no botão e no menu
  hamburguer.classList.toggle('aberto');
  nav.classList.toggle('aberto');
});

// Fecha o menu ao clicar em qualquer link
const linksNav = document.querySelectorAll('.header__link');

linksNav.forEach(function (link) {
  link.addEventListener('click', function () {
    hamburguer.classList.remove('aberto');
    nav.classList.remove('aberto');
  });
});

// =============================================
// ANIMAÇÕES AO ROLAR (Intersection Observer)
// =============================================

// Seleciona todos os elementos com a classe 'animar'
// (vamos adicionar essa classe nos cards e seções)
const elementosAnimados = document.querySelectorAll('.animar');

// O Observer "observa" quando um elemento entra na viewport
const observer = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    if (entrada.isIntersecting) {
      // Quando o elemento aparece na tela, adiciona a classe 'visivel'
      entrada.target.classList.add('visivel');
      // Para de observar — a animação só acontece uma vez
      observer.unobserve(entrada.target);
    }
  });
}, {
  threshold: 0.15 // dispara quando 15% do elemento está visível
});

// Registra cada elemento para ser observado
elementosAnimados.forEach(function (el) {
  observer.observe(el);
});