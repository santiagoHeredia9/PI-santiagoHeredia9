const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;

  if (!name || !origin || !status || !image || !species || !gender) {
    return res.status(401).send("Faltan datos");
  }

  try {
    // Intentar crear un nuevo favorito
    const newFavorite = await Favorite.create({
      name,
      origin,
      status,
      image,
      species,
      gender,
    });

    // Obtener todos los favoritos después de la creación
    const allFavorites = await Favorite.findAll();

    return res.status(200).json(allFavorites); // Responder con los favoritos
  } catch (error) {
    console.error("Error creating favorite:", error); // Agregar información al error
    return res.status(500).json({ message: "Internal Server Error" }); // Manejo de errores 500
  }
};

module.exports = {
  postFav,
};
