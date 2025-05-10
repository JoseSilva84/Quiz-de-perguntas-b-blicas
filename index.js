fetch('./perguntas.json')
    .then(response => response.json())
    .then(perguntas => {
        // Seleciona uma pergunta aleatória
        const perguntaAleatoria = perguntas[Math.floor(Math.random() * perguntas.length)];

        // Renderiza a pergunta no HTML
        const textPergunta = document.getElementById("text-pergunta");
        const pergunta = document.getElementById("pergunta");
        if (pergunta) {
            textPergunta.innerHTML = `Pergunta ${perguntaAleatoria.id}`;
            pergunta.innerHTML = `
                <h1>${perguntaAleatoria.pergunta}</h1>
                <ul>
                    <li class="liA">A - ${perguntaAleatoria.A}</li>
                    <li class="liB">B - ${perguntaAleatoria.B}</li>
                    <li class="liC">C - ${perguntaAleatoria.C}</li>
                    <li class="liD">D - ${perguntaAleatoria.D}</li>
                </ul>`;
        } else {
            console.error("Elemento com ID 'pergunta' não encontrado.");
        }
    })
    .catch(error => console.error("Erro ao carregar o JSON:", error));