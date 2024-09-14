const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./models/user'); // Mongoose model for user

const register = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  res.json({ message: 'User registered successfully' });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user._id }, 'secretkey');
    res.json({ token });
  } else {
    res.status(400).json({ message: 'Invalid credentials' });
  }
};

module.exports = { register, login };
