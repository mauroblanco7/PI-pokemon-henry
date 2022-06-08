const { Type } = require("../../db.js");
const saveAllTypes = require("./getDbType");
const getAllTypes = async () => {
  const save = await saveAllTypes();
  const allTypes = await Type.findAll();

  return allTypes;
};
module.exports = getAllTypes;
