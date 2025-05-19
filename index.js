let perguntas = [];
let perguntaAtual = 0;

fetch('./perguntas.json')
    .then(response => response.json())
    .then(data => {
        perguntas = data;
        mostrarPergunta();
    });

// Adiciona o evento ao botão "Próximo" apenas uma vez
const botaoProximo = document.getElementById('buttonProximo');
botaoProximo.onclick = function() {
    if (perguntaAtual < perguntas.length - 1) {
        perguntaAtual++;
        mostrarPergunta();
        this.disabled = true;
        this.style.visibility = 'hidden';
    }
};

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
            <li class="alternativa" data-alt="A">A - ${perguntas[perguntaAtual].A}</li>
            <li class="alternativa" data-alt="B">B - ${perguntas[perguntaAtual].B}</li>
            <li class="alternativa" data-alt="C">C - ${perguntas[perguntaAtual].C}</li>
            <li class="alternativa" data-alt="D">D - ${perguntas[perguntaAtual].D}</li>
        </ul>`;

    // Esconde e desabilita o botão "Próximo" até selecionar uma alternativa
    botaoProximo.disabled = true;
    botaoProximo.style.visibility = 'hidden';

    document.querySelectorAll('.alternativa').forEach(item => {
        item.onclick = function() {
            respostaQuestao(this.getAttribute('data-alt'));
            botaoProximo.disabled = false;
            botaoProximo.style.visibility = 'visible';
        };
    });
}

function respostaQuestao(selecao) {
    if (selecao === perguntas[perguntaAtual].resposta) {
        alert("Você acertou!");
    } else {
        alert("Resposta errada");
    }
}