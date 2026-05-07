document
  .getElementById("applyForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const nick = document.getElementById("nick").value;
    const damage = Number(document.getElementById("damage").value);
    const hours = Number(document.getElementById("hours").value);
    const gp = Number(document.getElementById("gp").value);

    const result = document.getElementById("result");

    // PLAYER FORTE
    if (damage >= 2000000 && gp >= 20 && hours >= 5) {
      result.innerHTML = `
        <div class="approvedBox">
          <h2>☠️ ACEITO NA ORDEM DO KRAKEN ☠️</h2>
          <p>Você possui força suficiente para entrar na elite.</p>

          <a href="https://discord.com/channels/1501367507964137524/1501367509075493017" target="_blank">
            ENTRAR NO DISCORD
          </a>
        </div>
      `;
    }

    // PLAYER MEDIANO
    else if (damage >= 750000 && gp >= 10) {
      result.innerHTML = `
        <div class="testBox">
          <h2>⚔️ TESTE FINAL NECESSÁRIO ⚔️</h2>
          <p>
            Você passou nos requisitos mínimos.
            Agora precisará fazer a prova final da guild.
          </p>

          <a href="https://discord.com/channels/1501367507964137524/1501367509075493017" target="_blank">
            ENTRAR NA ÁREA DE TESTES
          </a>
        </div>
      `;
    }

    // PLAYER FRACO
    else {
      result.innerHTML = `
        <div class="rejectBox">
          <h2>❌ REQUISITOS INSUFICIENTES ❌</h2>
          <p>
            Atualmente você não atende os requisitos mínimos da Ordem do Kraken.
          </p>

          <a href="https://discord.com/channels/1501367507964137524/1501367509075493017" target="_blank">
            FALAR COM O CAPITÃO
          </a>
        </div>
      `;
    }

    result.style.display = "block";
  });