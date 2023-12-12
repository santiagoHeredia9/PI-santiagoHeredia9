const login = (req, res) => {
  const users = require("../utils/users");

  const { email, password } = req.query;

  const userFound = users.find(
    (user) => user.email === email && user.password === password
  );

  if (userFound) {
    res.status(200).json({ access: true });
  } else {

    res.status(200).json({ access: false });
  }
};

module.exports = login;
