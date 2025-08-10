document.addEventListener("DOMContentLoaded", function () {
    let mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Feliz Dia dos Pais, Pai do Léo! ❤️";

    // Criar corações/emoji subindo
    function criarBalao() {
        const balao = document.createElement("div");
        balao.classList.add("balao");
        balao.style.left = Math.random() * 100 + "vw";
        balao.style.animationDuration = (Math.random() * 3 + 2) + "s";
        balao.textContent = Math.random() > 0.5 ? "❤️" : "💙";
        document.body.appendChild(balao);

        setTimeout(() => {
            balao.remove();
        }, 5000);
    }

    setInterval(criarBalao, 500);

    // Controle do áudio
    const audio = document.getElementById("musicaFundo");
    audio.volume = 0.1; // volume baixo para não incomodar

    // Opcional: pause/play clicando na página
    document.body.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});
