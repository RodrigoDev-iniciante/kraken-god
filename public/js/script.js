const form = document.getElementById("applyForm");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const nick = document.getElementById("nick").value;
    const damage = Number(document.getElementById("damage").value);
    const hours = Number(document.getElementById("hours").value);
    const bounty = Number(document.getElementById("bounty").value);

    let rank = "";
    let message = "";
    let color = "";

    if (
        damage >= 750000 &&
        bounty >= 10000000 &&
        hours >= 4
    ) {

        rank = "ACEITO";
        color = "#00ff88";

        message = `
        <h2>🏴‍☠️ ACEITO PARA O KRAKEN</h2>

        <p>
        Compatibilidade: 97%
        </p>

        <p>
        Jogador extremamente forte.
        </p>

        <a class="discordBtn" href="SEU_LINK_DISCORD" target="_blank">
        ENTRAR NO DISCORD
        </a>
        `;

    } else if (
        damage >= 350000 &&
        bounty >= 5000000
    ) {

        rank = "EM TESTE";
        color = "#ffd000";

        message = `
        <h2>⚔ TESTE FINAL NECESSÁRIO</h2>

        <p>
        Compatibilidade: 68%
        </p>

        <p>
        Você possui potencial.
        </p>

        <a class="discordBtn" href="SEU_LINK_DISCORD" target="_blank">
        IR PARA TESTES
        </a>
        `;

    } else {

        rank = "RECUSADO";
        color = "#ff3b3b";

        message = `
        <h2>❌ REQUISITOS INSUFICIENTES</h2>

        <p>
        Compatibilidade: 24%
        </p>

        <p>
        Continue evoluindo e tente novamente.
        </p>

        <a class="discordBtn" href="SEU_LINK_CAPITAO" target="_blank">
        FALAR COM LÍDER
        </a>
        `;
    }

    result.innerHTML = `
        <div class="resultCard" style="border-color:${color}">
            ${message}
        </div>
    `;

});