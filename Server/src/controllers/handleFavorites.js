let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  return res.json(myFavorites);
};

const deleteFav = (req, res) => {
  const id = Number(req.params.id);
  myFavorites = myFavorites.filter((fav) => fav.id !== id);
  return res.json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
