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
