const express = require('express');

const app = express();

app.post('/recruit', async (req, res) => {
  const { nick, damage, hours, guildPoints, status, link } = req.body;
  
  await db.write();

  if(process.env.DISCORD_WEBHOOK){

    try{

      await axios.post(process.env.DISCORD_WEBHOOK,{

        embeds:[{

          title:'🐙 Novo Recrutamento',

          color:16711680,

          fields:[
            {
              name:'Nick',
              value:nick
            },
            {
              name:'Damage',
              value:String(damage)
            },
            {
              name:'Horas',
              value:String(hours)
            },
            {
              name:'Guild Points',
              value:String(guildPoints)
            },
            {
              name:'Resultado',
              value:status
            }
          ]

        }]

      });

    }catch(err){

      console.log('Webhook error');

    }

  }

  res.json({
    status,
    link
  });

});

app.listen(process.env.PORT || 3000,()=>{

  console.log('🐙 Kraken GOD Online');

});