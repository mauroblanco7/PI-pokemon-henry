const getDBInfo = require("./getDBInfo");
const getInfo = require("./getApiInfo");

const getAllInfo = async () => {
  try {
    const dbInfo = await getDBInfo();
    const apiInfo = await getInfo();
    const allInfo = dbInfo.concat(apiInfo);
    return allInfo;
  } catch (error) {
    console.log(error);
  }
};
module.exports = getAllInfo;
