console.log("Script carregado!");

function toggleMenu() {
    const mobileNav = document.getElementById("mobileNav");
    mobileNav.classList.toggle("active");
    console.log("Menu clicado");
}

// Scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.scroll-animar').forEach(el => {
    observer.observe(el);
});

// Pega a URL atual
const currentUrl = location.href.split("/").pop().split("?")[0];

// Seleciona todos os links de navegação
const links = document.querySelectorAll("nav a, .mobile-nav a");

// if (
//   linkUrl === currentUrl || 
//   (linkUrl === "inicio.html" && (currentUrl === "" || currentUrl === "inicio.html"))
// ) {
//   link.classList.add("active");
// }

// Verifica cada link
links.forEach(link => {
    const linkUrl = link.getAttribute("href");

    // Adiciona a classe .active se for a página atual
    if (
        linkUrl === currentUrl ||
        (linkUrl === "inicio/" && (currentUrl === "" || currentUrl === "inicio/"))
    ) {
        link.classList.add("active");
    }
});

// Fecha o menu mobile ao clicar em um link
document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("mobileNav").classList.remove("active");
    });
});
// Dados dos serviços (pode ajustar os textos conforme desejar)
const servicosDetalhes = {
  "Suporte Técnico": "Atendimento ágil e eficaz para resolver problemas técnicos, com suporte remoto (HelpDesk) e presencial, garantindo o funcionamento de sua estrutura de TI.",
  "Infraestrutura": "Projetamos e implementamos redes corporativas, servidores e cabeamento estruturado, garantindo conectividade, desempenho e segurança para o seu ambiente de TI.",
  "Desenvolvimento Web": "Gerenciamento e criação e de sites personalizados, responsivos e otimizados para buscadores, com foco na performance, experiência do usuário e presença digital estratégica.",
  "Consultoria": "Analisamos e planejamos soluções tecnológicas sob medida para sua empresa, aumentando a eficiência, reduzindo custos e alinhando a TI com os objetivos do negócio.",
  "Segurança da Informação": "Implementação de políticas, ferramentas e práticas para proteger seus dados e ativos digitais contra ameaças, garantindo confidencialidade, integridade e disponibilidade.",
  "Inventário e Monitoramento": "Gerencie e monitore todos os dispositivos e softwares da sua empresa em tempo real. Tenha controle sobre inventário, atualizações, desempenho e segurança dos ativos.",
  "Serviços Cloud": "Soluções em nuvem seguras e escaláveis para armazenar, compartilhar e acessar seus dados de qualquer lugar. Otimize sua infraestrutura com mais flexibilidade e economia."
};

function abrirPopup(titulo) {
  document.getElementById("popupTitulo").innerText = titulo;
  document.getElementById("popupDescricao").innerText = servicosDetalhes[titulo] || "Descrição em breve.";
  document.getElementById("popup").style.display = "flex";
}

function fecharPopup(event) {
  const content = document.querySelector(".popup-content");
  if (!content.contains(event.target) || event.target.classList.contains("fechar-popup")) {
    document.getElementById("popup").style.display = "none";
  }
}

// Aplica evento a cada serviço
document.querySelectorAll(".servico-box").forEach(box => {
  box.addEventListener("click", () => {
    const titulo = box.querySelector("h3").innerText;
    abrirPopup(titulo);
  });
});
