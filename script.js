const botaoTema = document.getElementById("botao-tema");
const body = document.body;

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "claro") {
    body.classList.add("modo-claro");
    botaoTema.textContent = "🌙";
    botaoTema.setAttribute("aria-label", "Ativar modo escuro");
} else {
    botaoTema.textContent = "☀️";
    botaoTema.setAttribute("aria-label", "Ativar modo claro");
}

botaoTema.addEventListener("click", () => {
    body.classList.toggle("modo-claro");

    const modoClaro = body.classList.contains("modo-claro");

    if (modoClaro) {
        botaoTema.textContent = "🌙";
        botaoTema.setAttribute("aria-label", "Ativar modo escuro");

        localStorage.setItem("tema", "claro");
    } else {
        botaoTema.textContent = "☀️";
        botaoTema.setAttribute("aria-label", "Ativar modo claro");

        localStorage.setItem("tema", "escuro");
    }
});