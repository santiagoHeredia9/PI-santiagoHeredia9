const axios = require("axios");
const APIKEY = "pi-santiagoheredia9";

async function getCharById(req, res) {
  try {
    const id = Number(req.params.id);
    const response = await axios(
      `https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`
    );

    if (response) {
      const { status, name, species, origin, image, gender } = response.data;
      res
        .status(200)
        .json({ id, status, name, species, origin, image, gender });
    } else {
      res.status(404).send("Not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = getCharById;
