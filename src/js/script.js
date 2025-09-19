// JS básico: muda cor de fundo ao passar o mouse em elementos do menu

function addHoverEffect(selector, hoverStyle, leaveStyle) {
  document.querySelectorAll(selector).forEach((el) => {
    el.addEventListener("mouseenter", () => {
      Object.assign(el.style, hoverStyle);
    });
    el.addEventListener("mouseleave", () => {
      Object.assign(el.style, leaveStyle);
    });
  });
}

// Menu navegação
addHoverEffect(
  "nav a",
  { backgroundColor: "#ffe5d0", color: "#d35400" },
  { backgroundColor: "", color: "" }
);

// Cardápio (título e menu)
addHoverEffect(
  "h1, h2",
  { color: "#d35400", textShadow: "0 0 8px #ffe5d0" },
  { color: "", textShadow: "" }
);

// Diferenciais no index
addHoverEffect(
  "ul li",
  { backgroundColor: "#fff2e0", borderRadius: "6px" },
  { backgroundColor: "", borderRadius: "" }
);

// Contato (título e menu)
addHoverEffect(
  "h1",
  { color: "#d35400", textShadow: "0 0 8px #ffe5d0" },
  { color: "", textShadow: "" }
);

// Formas de contato
addHoverEffect(
  "ul li",
  { backgroundColor: "#ffe5d0", borderRadius: "6px" },
  { backgroundColor: "", borderRadius: "" }
);

// Localização
addHoverEffect(
  "h2",
  { color: "#a63a2b", textShadow: "0 0 8px #ffe5d0" },
  { color: "", textShadow: "" }
);

// Efeitos de hover na tabela do cardápio
document.addEventListener("DOMContentLoaded", function () {
  const tabela = document.querySelector("table");
  if (!tabela) return;

  // Efeito para linhas
  tabela.querySelectorAll("tr").forEach(function (linha) {
    linha.addEventListener("mouseenter", function () {
      linha.style.backgroundColor = "#ffe5d0";
      linha.style.transition = "background 0.2s";
    });
    linha.addEventListener("mouseleave", function () {
      linha.style.backgroundColor = "";
    });
  });

  // Efeito para células
  tabela.querySelectorAll("td").forEach(function (celula) {
    celula.addEventListener("mouseenter", function () {
      celula.style.backgroundColor = "#ffd8b0";
      celula.style.cursor = "pointer";
      celula.style.transition = "background 0.2s";
    });
    celula.addEventListener("mouseleave", function () {
      celula.style.backgroundColor = "";
      celula.style.cursor = "";
    });
  });
});

// Como fazer seu pedido
addHoverEffect(
  "ol li",
  { backgroundColor: "#fff2e0", borderRadius: "6px" },
  { backgroundColor: "", borderRadius: "" }
);
