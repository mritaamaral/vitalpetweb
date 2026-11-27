
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-list a");

menuToggle.addEventListener("click", () => {
    const menuAberto = navMenu.classList.toggle("active");

    menuToggle.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", menuAberto);
    menuToggle.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
    });
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
    }
});
