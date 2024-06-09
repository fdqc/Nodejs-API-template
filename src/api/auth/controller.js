const authService = require('./service');

const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  const token = await authService.registerUser({ username, email, password });
  return res.status(201).json({ token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const token = await authService.logUser({ email, password });
  return res.status(200).json({ token });
};

module.exports = {
  signUp,
  login,
};
