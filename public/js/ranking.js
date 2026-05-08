async function loadRanking(){

  const req = await fetch('/api/players');

  const players = await req.json();

  players.sort((a,b)=>b.damage - a.damage);

  const html = players.map((player,index)=>`

    <div class="playerCard">

      <h2>#${index+1} ${player.nick}</h2>

      <p>Damage: ${player.damage}</p>

      <p>Status: ${player.status}</p>

    </div>

  `).join('');

  document.getElementById('ranking').innerHTML = html;

}

loadRanking();