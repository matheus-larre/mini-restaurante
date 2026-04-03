# 🍽️ Restaurante Sabor & Arte

> Site institucional de restaurante fictício desenvolvido como projeto de estudo,
> evoluído de uma versão básica para uma aplicação frontend profissional e responsiva.

## 🔗 Acesse o projeto

**[→ Ver site ao vivo](https://matheus-larre.github.io/restaurante-sabor-arte-website/)**

---

## 📸 Páginas

| Página | Descrição |
|---|---|
| **Home** | Hero em tela cheia, diferenciais, história do restaurante e footer |
| **Cardápio** | Cards de pratos com filtro por categoria e sugestão do chef |
| **Contato** | Formulário com validação JS, informações e mapa |

---

## 🛠️ Tecnologias

- **HTML5** — estrutura semântica com tags corretas (`header`, `section`, `article`, `footer`)
- **CSS3** — variáveis customizadas, Flexbox, Grid, animações e design responsivo
- **JavaScript** — menu hamburguer, efeito de scroll no header, filtro de cardápio, validação de formulário e Intersection Observer
- **Google Fonts** — Playfair Display (títulos) + Lato (corpo)

---

## ✨ Melhorias implementadas (v1 → v2)

- ✅ `meta viewport` adicionado — site agora é responsivo em mobile
- ✅ Variáveis CSS globais — identidade visual consistente e fácil de alterar
- ✅ Header fixo com efeito de transparência ao rolar
- ✅ Menu hamburguer funcional para mobile
- ✅ Hero section em tela cheia na home
- ✅ Grid de cards substituiu a tabela estática do cardápio
- ✅ Filtro de pratos por categoria (sem recarregar a página)
- ✅ Formulário de contato com validação em tempo real
- ✅ Animações de entrada com Intersection Observer
- ✅ Footer completo em todas as páginas
- ✅ Semântica HTML corrigida em todas as páginas
- ✅ CSS inline removido e centralizado em `styles.css`
- ✅ Versionamento com branches e commits semânticos

---

## 📁 Estrutura de pastas
```
restaurante-sabor-arte/
├── index.html          ← Página inicial
├── cardapio.html       ← Cardápio com filtro
├── contato.html        ← Formulário de contato
├── README.md
└── src/
    ├── css/
    │   ├── reset.css   ← Normalização de estilos
    │   └── styles.css  ← Todos os estilos do projeto
    ├── js/
    │   └── script.js   ← Toda a interatividade
    └── img/
        ├── Sabor&Arte - Logo.png
        ├── RisotoCamarao.png
        └── FileaoMolhoMadeira.png
```

---

## 🚀 Como rodar localmente
```bash
# 1. Clone o repositório
git clone https://github.com/matheus-larre/mini-restaurante.git

# 2. Entre na pasta
cd mini-restaurante

# 3. Abra o index.html no navegador
# Não há dependências ou build necessários — é frontend puro!
```

> **Dica:** Use a extensão **Live Server** no VS Code para ter recarregamento automático ao salvar.

---

## 🌿 Fluxo de desenvolvimento (Git)

Este projeto foi desenvolvido com branches por feature e commits semânticos:
```
main
 ├── feature/setup-e-base        → variáveis CSS, reset, fontes, viewport
 ├── feature/header-e-nav        → header fixo e menu hamburguer
 ├── feature/home-hero           → hero, diferenciais, história, footer
 ├── feature/cardapio            → cards, filtro por categoria, sugestão do chef
 └── feature/contato-e-readme    → formulário validado e documentação
```

**Prefixos de commit utilizados:**
- `feat:` — nova funcionalidade
- `fix:` — correção de bug
- `style:` — ajuste visual sem mudança de lógica
- `refactor:` — reorganização de código
- `docs:` — documentação

---

## 👨‍💻 Autor

Desenvolvido por **Matheus Larré** como projeto de estudo de HTML5, CSS3 e JavaScript.

[![GitHub](https://img.shields.io/badge/GitHub-matheus--larre-181717?style=flat&logo=github)](https://github.com/matheus-larre)
