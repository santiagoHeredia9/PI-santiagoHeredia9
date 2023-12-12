let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  res.json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  const favs = myFavorites.filter((fav) => fav.id !== Number(id));
  res.json(favs);
};

module.exports = {
  postFav,
  deleteFav,
};
