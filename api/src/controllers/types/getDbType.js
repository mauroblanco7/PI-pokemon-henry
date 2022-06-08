const { Type } = require("../../db.js");
const onlyAllTypes = require("./allApi.js");

const saveAllTypes = async () => {
  try {
    const types = await onlyAllTypes();
    types.forEach((type) => {
      Type.findOrCreate({ where: { name: type } });
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = saveAllTypes;
