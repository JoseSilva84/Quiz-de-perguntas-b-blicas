# 📖 Quiz Bíblico Interativo

Este projeto é um **quiz bíblico** feito com HTML, CSS e JavaScript, que carrega perguntas de um arquivo JSON externo e apresenta ao usuário de forma interativa.

## 🎯 Funcionalidades

- Carregamento dinâmico de perguntas a partir de um arquivo `perguntas.json`
- Embaralhamento aleatório das perguntas (algoritmo Fisher-Yates)
- Sistema de pontuação com contagem de **acertos** e **erros**
- Interface interativa que exibe uma pergunta por vez
- Barra de progresso visual para indicar o andamento do quiz
- Feedback visual que só habilita o botão "Próximo" após a seleção de uma alternativa
- Redirecionamento para a página inicial ao final do quiz

## 🧠 Como Funciona

1. O código carrega as perguntas usando `fetch()` e as embaralha.
2. A função `mostrarPergunta()` exibe a pergunta atual e as alternativas.
3. O usuário seleciona uma alternativa (A, B, C ou D), o que habilita o botão "Próximo".
4. Ao clicar em "Próximo":
   - Se a resposta estiver correta, a pontuação é incrementada e o índice é salvo na lista de acertos.
   - Caso contrário, o índice é adicionado à lista de erros.
   - A contagem de acertos/erros é atualizada na tela.
5. A próxima pergunta é exibida, e o ciclo se repete até o final do quiz.
6. Ao final, o quiz é encerrado com um alerta e o usuário é redirecionado para `index.html`.

## 📁 Estrutura Esperada

```plaintext
📁 projeto-quiz
├── index.html
├── style.css
├── script.js
└── perguntas.json
