let perguntas = [];
let perguntaAtual = 0;
let acertos = [];
let erros = [];
let selecao = null;
let pontuacao = 0;

fetch('./perguntas.json')
    .then(response => response.json())
    .then(data => {
        perguntas = embaralharArray(data);
        mostrarPergunta();
    });

// Função para embaralhar um array (Fisher-Yates)
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Adiciona o evento ao botão "Próximo" apenas uma vez
const botaoProximo = document.getElementById('buttonProximo');
const resultadoAcertos = document.getElementById('acertos');
const resultadoErros = document.getElementById('erros');

botaoProximo.onclick = function() {
    if (selecao === perguntas[perguntaAtual].resposta) {
        pontuacao++;
        acertos.push(perguntaAtual);
        resultadoAcertos.innerHTML = `Acertos: ${acertos.length}`;
    } else {
        erros.push(perguntaAtual);
        resultadoErros.innerHTML = `Erros: ${erros.length}`;
    }

    if (perguntaAtual < perguntas.length - 1) {
        perguntaAtual++;
        mostrarPergunta();
        this.disabled = true;
        this.style.visibility = 'hidden';
        if (perguntaAtual === perguntas.length - 1) {
            botaoProximo.innerHTML = "Finalizar";
        }
    } else {
        alert("Você finalizou o quiz!");
        window.location.href = "index.html";
    }
};

function mostrarPergunta() {
    selecao = null; // Limpa a seleção ao mostrar nova pergunta

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
            selecao = this.getAttribute('data-alt');
            botaoProximo.disabled = false;
            botaoProximo.style.visibility = 'visible';
        };
    });
}