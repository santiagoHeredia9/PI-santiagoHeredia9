const express = require("express");
const router = express.Router();
const getCharById = require("../controllers/getCharById");
const { login } = require("../controllers/login");
const { postFav } = require("../controllers/postFav");
const { deleteFav } = require("../controllers/deleteFav");
const { postUser } = require("../controllers/postUser");
const { register } = require("../controllers/register");

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.post("/register", register);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
