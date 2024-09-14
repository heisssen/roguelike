function generateDungeon() {
  const dungeon = [];
  // Generate rooms, connections, and populate with enemies and traps
  for (let i = 0; i < 10; i++) {
    dungeon.push({
      room: `Room ${i + 1}`,
      enemies: Math.floor(Math.random() * 5),
      traps: Math.random() > 0.5 ? 'Spikes' : 'None',
    });
  }
  return dungeon;
}

module.exports = { generateDungeon };
