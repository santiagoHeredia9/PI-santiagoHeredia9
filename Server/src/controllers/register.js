const { User } = require("../DB_connection");

const register = async (req, res) => {
  const { name, email, password, repeatPassword } = req.body;
  if (password.trim() !== repeatPassword.trim()) {
    res.status(400).json({ message: "The passwords don't match." });
  }

  try {
    const newUser = await User.create({ name, email, password });
    res.status(201).json({ message: "User registered.", user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
};
