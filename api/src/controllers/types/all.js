const { Type } = require("../../db.js");
const saveAllTypes = require("./getDbType");

const getAllTypes = async () => {
  try {
    const save = await saveAllTypes();
    const allTypes = await Type.findAll();
    return allTypes;
  } catch (error) {
    console.log(error);
  }
};
module.exports = getAllTypes;
