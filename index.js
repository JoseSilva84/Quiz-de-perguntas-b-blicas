pergunta1 = {
    "A": "Adão", 
    "B": "Caim",
    "C": "Abraão",
    "D": "Moisés",
};

resposta1 = {"B": "Caim"}

pergunta = document.getElementById("pergunta");
pergunta.innerHTML = `
    <h1>Quem matou Abel?</h1>
    <ul>
        <li></li><br></li>
        <li class="liA">A - ${pergunta1.A}</li>
        <li class="liB">B - ${pergunta1.B}</li>
        <li class="liC">C - ${pergunta1.C}</li>
        <li class="liD">D - ${pergunta1.D}</li>
    </ul>`;
