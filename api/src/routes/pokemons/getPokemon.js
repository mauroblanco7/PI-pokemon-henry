const { Router } = require("express");
const getAll = require("../../controllers/pokemons/getAllInfo");
const getByName = require("../../controllers/pokemons/getByName");

const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const n = name.toLowerCase();
      const byName = await getByName(n);
      res.json([byName]);
    } else {
      const allPoke = await getAll();
      res.json(allPoke);
    }
  } catch (error) {
    res.status(400).json({ msg: "No se encontro el pokemon solicitado" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const allPokemonsId = await getAll();
    if (id) {
      const filterId = allPokemonsId.filter((e) => e.id == id);
      if (filterId) {
        res.json(filterId);
      } else res.status(404).send("No se encontro el id");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = router;
