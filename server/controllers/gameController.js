const Character = require('../models/character');
const DungeonGenerator = require('../services/dungeonGenerator');

const startGame = async (req, res) => {
  const { userId } = req.body;
  const character = await Character.findOne({ userId });
  const dungeon = DungeonGenerator.generateDungeon();

  // Set up initial game state
  res.json({ character, dungeon });
};

// Additional game control logic here

module.exports = { startGame };
