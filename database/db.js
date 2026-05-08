const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');

const adapter = new JSONFile('database/db.json');

const db = new Low(adapter, {
  players: []
});

async function initDB(){

  await db.read();

  db.data ||= {
    players: []
  };

  await db.write();

}

module.exports = {
  db,
  initDB
};