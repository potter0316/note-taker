const router = require("express").Router();
const database = require("../db/db.json");
router.get("/notes", (req, res) => {
  console.info(`Getting notes from ${database}`);
  res.json(database);
});

module.exports = router;
