const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  it("Responde con status: 200", async () => {
    await agent.get("/rickandmorty/character/1").expect(200);
  });
  it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
    const response = await agent.get("/rickandmorty/character/1").expect(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("species");
    expect(response.body).toHaveProperty("gender");
    expect(response.body).toHaveProperty("status");
    expect(response.body).toHaveProperty("origin");
    expect(response.body).toHaveProperty("image");
  });

  it("Si hay un error responde con status: 500", async () => {
    await agent.get("/rickandmorty/character/1234").expect(500);
    await agent.get("/rickandmorty/character/999").expect(500);
  });
});

describe("GET /rickandmorty/login", () => {
  it("Validar login exitoso", async () => {
    const response = await agent
      .get("/rickandmorty/login")
      .query({
        email: "santiagoherediabrandolini@gmail.com",
        password: "123456789s",
      })
      .expect(200);

    expect(response.body).toEqual({ access: true });
  });

  it("Validar login fallido", async () => {
    const response = await agent
      .get("/rickandmorty/login")
      .query({ email: "holachau@gmail.com", password: "contrasenaincorrecta" })
      .expect(200);

    expect(response.body).toEqual({ access: false });
  });
});

describe("POST /rickandmorty/fav", () => {
  it("Lo que se envia por body debe ser devuelto en un arreglo", async () => {
    const infoToSend = { id: 1, name: "Rick Sanchez" };
    const response = await agent
      .post("/rickandmorty/fav")
      .send(infoToSend)
      .expect(200);

    expect(response.body).toEqual([infoToSend]);
  });

  it("Si se vuelve a enviar un nuevo elemento, tiene que incluir el previo", async () => {
    const infoToSend = { id: 1, name: "Rick Sanchez" };
    const infoToSend2 = { id: 2, name: "Morty Smith" };

    await agent.post("/rickandmorty/fav").send(infoToSend).expect(200);
    const response = await agent
      .post("/rickandmorty/fav")
      .send(infoToSend2)
      .expect(200);

    expect(response.body).toEqual([infoToSend, infoToSend2]);
  });
});

describe("DELETE /rickandmorty/fav/:id", () => {
  it("Si el id no existe, devuelvo el mismo array", async () => {
    const array = [
      { id: 1, name: "Rick Sanchez" },
      { id: 2, name: "Morty Smith" },
    ];
    const response = await agent.delete("/rickandmorty/fav/999").expect(200);

    expect(response.body).toEqual(array);
  });

  it("Si el Id coincide, que se elimine correctamente", async () => {
    const array = [
      { id: 1, name: "Rick Sanchez" },
      { id: 2, name: "Morty Smith" },
    ];
    const idToDelete = 2;
    const response = await agent.delete("/rickandmorty/fav/2").expect(200);
    const newArray = array.filter((character) => character.id !== idToDelete);
    expect(response.body).toEqual(newArray);
  });
});
