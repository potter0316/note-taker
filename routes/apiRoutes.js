const router = require("express").Router();
const database = require("../db/db.json");
const fs = require("fs");
const path = require("path");

router.get("/notes", (req, res) => {
  console.info(`Getting notes from the database...`);
  res.json(database);
});

router.post("/notes", (req, res) => {
    let jsonPath = path.join(__dirname, "/db/db.json");
    console.ing(req.body);
    database.push(newNote)
    fs.writeFile(jsonPath, JSON.stringify(database), function (err) { (err) ? console.log(err) : console.log("Success!") });
    res.json(req.body);
})
module.exports = router;
