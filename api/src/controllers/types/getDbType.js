const { Type } = require("../../db.js");
const onlyAllTypes = require("./allApi.js");

const saveAllTypes = async () => {
  const types = await onlyAllTypes();
  types.forEach((type) => {
    Type.findOrCreate({ where: { name: type } });
  });
};
module.exports = saveAllTypes;
