const axios = require("axios");

const onlyAllTypes = async () => {
  try {
    const types1 = await axios.get("https://pokeapi.co/api/v2/type");
    const types2 = types1.data.results;
    const onlyTypes = types2.map((el) => el.name);
    return onlyTypes;
  } catch (error) {
    console.log(error);
  }
};

module.exports = onlyAllTypes;
