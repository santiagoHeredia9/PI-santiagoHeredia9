const http = require("http");
const url = require("url");
const data = require("./data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === "/rickandmorty/character") {
      const characterId = parsedUrl.query.id;

      if (!isNaN(characterId)) {
        const character = data.find(
          (char) => char.id === parseInt(characterId)
        );

        if (character) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(character));
        } else {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Personaje no encontrado");
        }
      } else {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("ID de personaje no válido");
      }
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Ruta no encontrada");
    }
  })
  .listen(3001, "localhost");
