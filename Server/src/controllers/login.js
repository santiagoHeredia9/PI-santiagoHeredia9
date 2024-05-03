const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;

  if (!email.trim() || !password.trim()) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const isPasswordCorrect = user.password === password;

    if (isPasswordCorrect) {
      return res.status(200).json({ access: true });
    } else {
      return res.status(403).json({ message: "Contraseña incorrecta" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = {
  login,
};