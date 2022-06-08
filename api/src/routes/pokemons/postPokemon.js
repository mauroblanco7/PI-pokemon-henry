const { Router } = require("express");
const { Pokemon, Type } = require("../../db.js");
const router = Router();

router.post("/", async (req, res) => {
  let {
    name,
    img,
    hp,
    strength,
    defense,
    speed,
    height,
    weight,
    type,
    itsCreated,
  } = req.body;
  try {
    if (name && typeof name === "string") {
      if (
        hp < 101 &&
        hp > 0 &&
        strength < 101 &&
        strength > 0 &&
        defense > 0 &&
        defense < 101 &&
        speed > 0 &&
        speed < 101 &&
        height > 0 &&
        height < 101 &&
        weight > 0 &&
        weight < 101
      ) {
        let createPokemon = await Pokemon.create({
          name,
          img,
          hp,
          strength,
          defense,
          speed,
          height,
          weight,
          itsCreated,
        });
        let typeofPokemon = await Type.findAll({ where: { name: type } });
        createPokemon.addType(typeofPokemon);
        res.send("El pokemon fue creado con exito");
      } else {
        res
          .status(404)
          .send("Todos los campos son requeridos, con valores de 0 a 100");
      }
    } else {
      res.status(400).send("Todos los pokemons deben crearse con un nombre");
    }
  } catch (error) {
    res.status(400).send({ msg: `Hubo un error ${error}` });
  }
});
module.exports = router;
