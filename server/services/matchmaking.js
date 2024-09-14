const players = new Map();

function addPlayer(playerId, socket) {
  players.set(playerId, socket);
  console.log(`Player ${playerId} added`);
}

function removePlayer(playerId) {
  players.delete(playerId);
  console.log(`Player ${playerId} removed`);
}

function getPlayerSocket(playerId) {
  return players.get(playerId);
}

module.exports = { addPlayer, removePlayer, getPlayerSocket };
