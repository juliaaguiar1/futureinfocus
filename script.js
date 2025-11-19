document.addEventListener("DOMContentLoaded", () => {

  // Scroll suave para âncoras
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", e => {
      const destino = link.getAttribute("href");
      if (destino && destino !== "#") {
        e.preventDefault();
        document.querySelector(destino)?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Menu mobile
  const botaoMenu = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#menu-principal");

  if (botaoMenu) {
    botaoMenu.addEventListener("click", () => {
      const aberto = botaoMenu.getAttribute("aria-expanded") === "true";
      botaoMenu.setAttribute("aria-expanded", String(!aberto));
      menu.classList.toggle("menu-aberto");
    });
  }

  // Formulário
  const form = document.querySelector(".form-cta");
  const emailInput = document.querySelector("#email");
  const mensagem = document.querySelector("#mensagem-form");

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();

      mensagem.classList.remove("erro", "sucesso");
      mensagem.textContent = "";

      const email = emailInput.value.trim();

      if (!email || !email.includes("@") || !email.includes(".")) {
        mensagem.textContent = "Digite um e-mail válido!";
        mensagem.classList.add("erro");
        return;
      }

      mensagem.textContent = "Guia enviado com sucesso! Verifique seu e-mail.";
      mensagem.classList.add("sucesso");

      form.reset();
    });
  }
});
