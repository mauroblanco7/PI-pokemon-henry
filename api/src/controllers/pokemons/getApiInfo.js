const axios = require("axios");

const getInfo = async () => {
  try {
    // aca me traigo todos los 40 pokemones
    const apiResults = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
    const apiNext = await axios.get(apiResults.data.next);
    const allPokemons = apiResults.data.results.concat(apiNext.data.results);
    for (let p of allPokemons) {
      let url = await axios.get(p.url);
      delete p.url;
      p.id = url.data.id;
      p.img = url.data.sprites.other.home.front_default;
      p.hp = url.data.stats[0].base_stat;
      p.strength = url.data.stats[1].base_stat;
      p.defense = url.data.stats[2].base_stat;
      p.speed = url.data.stats[5].base_stat;
      p.height = url.data.height;
      p.weight = url.data.weight;
      p.type = url.data.types.map((el) => el.type.name);
    }
    return allPokemons;
  } catch (error) {
    console.log(error);
  }
};
module.exports = getInfo;
