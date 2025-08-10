document.getElementById("botaoMensagem").addEventListener("click", function() {
    let mensagem = document.getElementById("mensagemOculta");

    if (mensagem.classList.contains("oculto")) {
        mensagem.classList.remove("oculto");
        this.textContent = "Esconder Mensagem";
    } else {
        mensagem.classList.add("oculto");
        this.textContent = "Mostrar Mensagem";
    }
});function mostrarSurpresa() {
    const surpresaDiv = document.getElementById("surpresa");
    surpresaDiv.innerHTML = "🎉 Pai do Léo, você é minha inspiração! Te amo muito! ❤️";
    surpresaDiv.style.animation = "piscar 1.5s infinite";
}