const { Router } = require("express");
const getAllTypes = require("../../controllers/types/all.js");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const allTypes = await getAllTypes();
    res.send(allTypes);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
