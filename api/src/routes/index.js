const { Router } = require("express");
const pokemons = require("./pokemons/getPokemon");
const postPokemons = require("./pokemons/postPokemon");
const type = require("./types/getTypes.js");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemons", pokemons);
router.use("/pokemons", postPokemons);
router.use("/types", type);

module.exports = router;
