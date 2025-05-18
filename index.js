let perguntas = [];
let perguntaAtual = 0;

fetch('./perguntas.json')
    .then(response => response.json())
    .then(data => {
        perguntas = data;
        mostrarPergunta();
    });

function mostrarPergunta() {
    const progress = document.getElementById("progress");
    progress.value = perguntaAtual + 1;
    progress.max = perguntas.length;

    // Exiba a pergunta normalmente
    const pergunta = document.getElementById("pergunta");
    const textPergunta = document.getElementById("text-pergunta");
    textPergunta.innerHTML = `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;
    pergunta.innerHTML = `
        <h1>${perguntas[perguntaAtual].pergunta}</h1>
        <ul>
            <li class="liA">A - ${perguntas[perguntaAtual].A}</li>
            <li class="liB">B - ${perguntas[perguntaAtual].B}</li>
            <li class="liC">C - ${perguntas[perguntaAtual].C}</li>
            <li class="liD">D - ${perguntas[perguntaAtual].D}</li>
        </ul>`;
}

// Exemplo de botão "Próximo"
document.querySelector('.buttonProximo').onclick = function() {
    if (perguntaAtual < perguntas.length - 1) {
        perguntaAtual++;
        mostrarPergunta();
    }
};

