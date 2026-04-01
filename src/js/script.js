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

// =============================================
// FILTRO DO CARDÁPIO
// =============================================

// Só roda se existir a grade do cardápio na página atual
const cardapioGrid = document.getElementById('cardapio-grid');

if (cardapioGrid) {

  const filtros       = document.querySelectorAll('.filtro-btn');
  const pratos        = document.querySelectorAll('.prato-card');
  const mensagemVazia = document.getElementById('cardapio-vazio');

  filtros.forEach(function (btn) {
    btn.addEventListener('click', function () {

      // 1. Atualiza o botão ativo
      filtros.forEach(function (b) { b.classList.remove('ativo'); });
      btn.classList.add('ativo');

      const categoria = btn.dataset.filtro; // lê o data-filtro do botão
      let pratoVisiveis = 0;

      // 2. Mostra ou oculta cada card
      pratos.forEach(function (card) {
        const pertence = categoria === 'todos' ||
                         card.dataset.categoria === categoria;

        if (pertence) {
          card.classList.remove('oculto');
          pratoVisiveis++;
        } else {
          card.classList.add('oculto');
        }
      });

      // 3. Exibe a mensagem se nenhum prato passar no filtro
      if (pratoVisiveis === 0) {
        mensagemVazia.classList.add('visivel');
      } else {
        mensagemVazia.classList.remove('visivel');
      }
    });
  });
}