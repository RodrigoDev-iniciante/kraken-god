require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/apply', (req, res) => {

  const { damage, hours, guildPoints } = req.body;

  const score =
    damage +
    (hours * 20000) +
    (guildPoints * 5000);

  if(score >= 1000000){

    return res.json({
      status:'accepted',
      link:process.env.DISCORD_LINK
    });
  }

  if(score >= 700000){

    return res.json({
      status:'test',
      link:process.env.DISCORD_TEST
    });
  }

  return res.json({
    status:'rejected',
    link:process.env.DISCORD_CONTACT
  });

});

app.listen(process.env.PORT || 3000, ()=>{

  console.log('🐙 Kraken GOD Online');

});