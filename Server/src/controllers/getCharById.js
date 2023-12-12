const axios = require("axios");

const URL = "https://rym2.up.railway.app/api/character/";

const getCharById = (req, res) => {
  const { id } = req.params;
  axios(`${URL}${id}?key=santiagoheredia9`)
    .then((response) => {
      if (response) {
        const { id, status, name, species, origin, image, gender } =
          response.data;
        res.json({ id, status, name, species, origin, image, gender });
      } else {
        res.status(404).send("Not found");
      }
    })
    .catch((error) => res.status(500).send(error.message));
};

module.exports = getCharById;
