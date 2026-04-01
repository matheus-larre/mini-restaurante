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

// =============================================
// VALIDAÇÃO DO FORMULÁRIO DE CONTATO
// =============================================

const contatoForm = document.getElementById('contato-form');

if (contatoForm) {

  // --- Funções auxiliares de validação ---

  // Marca campo como erro e exibe mensagem
  function marcarErro(input, mensagem, idErro) {
    input.classList.add('erro');
    input.classList.remove('sucesso');
    document.getElementById(idErro).textContent = mensagem;
  }

  // Marca campo como válido
  function marcarSucesso(input, idErro) {
    input.classList.remove('erro');
    input.classList.add('sucesso');
    document.getElementById(idErro).textContent = '';
  }

  // Valida todos os campos e retorna true se tudo estiver ok
  function validarFormulario() {
    let valido = true;

    const nome     = document.getElementById('nome');
    const email    = document.getElementById('email');
    const assunto  = document.getElementById('assunto');
    const mensagem = document.getElementById('mensagem');

    // Valida nome (mínimo 3 caracteres)
    if (nome.value.trim().length < 3) {
      marcarErro(nome, 'Por favor, informe seu nome completo.', 'erro-nome');
      valido = false;
    } else {
      marcarSucesso(nome, 'erro-nome');
    }

    // Valida e-mail com regex simples
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value.trim())) {
      marcarErro(email, 'Informe um e-mail válido.', 'erro-email');
      valido = false;
    } else {
      marcarSucesso(email, 'erro-email');
    }

    // Valida assunto
    if (!assunto.value) {
      marcarErro(assunto, 'Selecione um assunto.', 'erro-assunto');
      valido = false;
    } else {
      marcarSucesso(assunto, 'erro-assunto');
    }

    // Valida mensagem (mínimo 10 caracteres)
    if (mensagem.value.trim().length < 10) {
      marcarErro(mensagem, 'A mensagem deve ter pelo menos 10 caracteres.', 'erro-mensagem');
      valido = false;
    } else {
      marcarSucesso(mensagem, 'erro-mensagem');
    }

    return valido;
  }

  // --- Validação em tempo real ao sair de cada campo ---
  // O usuário vê o feedback enquanto preenche, não só ao enviar

  ['nome', 'email', 'assunto', 'mensagem'].forEach(function (id) {
    const campo = document.getElementById(id);
    if (campo) {
      campo.addEventListener('blur', validarFormulario);
      // 'blur' dispara quando o usuário sai do campo
    }
  });

  // --- Envio do formulário ---

  contatoForm.addEventListener('submit', function (evento) {
    evento.preventDefault(); // impede o reload da página

    if (!validarFormulario()) return; // para aqui se inválido

    const btn      = document.getElementById('form-btn');
    const sucesso  = document.getElementById('form-sucesso');

    // Estado de carregamento
    btn.classList.add('carregando');
    btn.textContent = 'Enviando...';

    // Simula envio (em produção, aqui viria um fetch para uma API)
    setTimeout(function () {
      btn.classList.remove('carregando');
      btn.textContent = 'Enviar Mensagem';

      // Exibe mensagem de sucesso
      sucesso.classList.add('visivel');

      // Reseta o formulário
      contatoForm.reset();

      // Remove classes de validação dos campos
      contatoForm.querySelectorAll('.form-input').forEach(function (input) {
        input.classList.remove('sucesso', 'erro');
      });

      // Esconde a mensagem de sucesso após 5 segundos
      setTimeout(function () {
        sucesso.classList.remove('visivel');
      }, 5000);

    }, 1500); // simula 1.5s de "chamada de API"
  });
}