async function login(){

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const req = await fetch('/api/login',{

    method:'POST',

    headers:{
      'Content-Type':'application/json'
    },

    body:JSON.stringify({
      username,
      password
    })

  });

  const data = await req.json();

  if(data.success){

    document.getElementById('loginBox').style.display='none';

    document.getElementById('dashboard').style.display='block';

    loadPlayers();

  }

  else{

    alert('Login inválido');

  }

}

async function loadPlayers(){

  const req = await fetch('/api/players');

  const players = await req.json();

  const html = players.map(player=>`

    <div class="playerCard">

      <h3>${player.nick}</h3>

      <p>Status: ${player.status}</p>

      <p>Damage: ${player.damage}</p>

      <p>Horas: ${player.hours}</p>

      <p>Guild Points: ${player.guildPoints}</p>

    </div>

  `).join('');

  document.getElementById('players').innerHTML = html;

}