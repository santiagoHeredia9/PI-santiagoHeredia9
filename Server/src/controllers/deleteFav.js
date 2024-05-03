const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send("ID no proporcionado");
  }

  try {
    const deletedCount = await Favorite.destroy({
      where: { id },
    });

    if (!deletedCount) {
      return res.status(404).send("Personaje no encontrado");
    }

    const allFavorites = await Favorite.findAll();

    return res.status(200).json(allFavorites);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  deleteFav,
};
