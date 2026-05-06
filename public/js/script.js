const form = document.getElementById('applyForm');

form.addEventListener('submit', async (e)=>{

  e.preventDefault();

  const data = {

    nick:nick.value,
    damage:+damage.value,
    hours:+hours.value,
    guildPoints:+gp.value

  };

  const response = await fetch('/api/apply',{

    method:'POST',

    headers:{
      'Content-Type':'application/json'
    },

    body:JSON.stringify(data)

  });

  const resultData = await response.json();

  let html = '';

  if(resultData.status === 'accepted'){

    html = `
      <h2 style="color:#00ff88">
        🔥 ACEITO NA ORDEM DO KRAKEN
      </h2>

      <a href="${resultData.link}" target="_blank">
        Entrar no Discord
      </a>
    `;
  }

  if(resultData.status === 'test'){

    html = `
      <h2 style="color:orange">
        ⚔️ FASE FINAL DE TESTE
      </h2>

      <a href="${resultData.link}" target="_blank">
        Entrar no Discord
      </a>
    `;
  }

  if(resultData.status === 'rejected'){

    html = `
      <h2 style="color:red">
        ❌ REQUISITOS INSUFICIENTES
      </h2>

      <a href="${resultData.link}" target="_blank">
        Falar com liderança
      </a>
    `;
  }

  document.getElementById('result').innerHTML = html;

});