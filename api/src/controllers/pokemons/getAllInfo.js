const getDBInfo = require("./getDBInfo");
const getInfo = require("./getApiInfo");

const getAllInfo = async () => {
  const dbInfo = await getDBInfo();
  const apiInfo = await getInfo();
  const allInfo = dbInfo.concat(apiInfo);
  return allInfo;
};
module.exports = getAllInfo;
