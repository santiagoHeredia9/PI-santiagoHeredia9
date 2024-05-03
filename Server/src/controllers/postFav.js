const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;

  if (!name || !origin || !status || !image || !species || !gender) {
    return res.status(401).send("Faltan datos");
  }

  try {
 
    const newFavorite = await Favorite.create({
      name,
      origin,
      status,
      image,
      species,
      gender,
    });

    
    const allFavorites = await Favorite.findAll();

    return res.status(200).json(allFavorites); 
  } catch (error) {
    console.error("Error creating favorite:", error); 
    return res.status(500).json({ message: "Internal Server Error" }); 
  }
};

module.exports = {
  postFav,
};
