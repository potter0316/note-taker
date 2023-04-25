const router = require("express").Router();
const db = require("../db/db");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid");

//Grabs the note list.

router.get("/notes", (req, res) => {
  console.info(`Getting notes from the database...`);
  res.json(db);
});

router.delete("/notes/:id", (req, res) => {
  let jsonPath = path.join(__dirname, "../db/db.json");
  for (i = 0; i < db.length; i++) {
    if (db[i].id == req.params.id) {
      db.splice(i, 1);
      break;
    } else {
      return "Error";
    }
  }
  fs.writeFileSync(jsonPath, JSON.stringify(db), (err) => {
    console.info(`Opps Something Went Wrong with ID: ${req.params.id}`);
    console.error(err);
  });
  console.info(`Delete note ${req.body}`);
  res.json(db);
});

router.post("/notes", (req, res) => {
  let jsonFilePath = path.join(__dirname, "../db/db.json");

  let note = req.body;
  note.id = uuid.v4();
  console.log(`Note ID: ${note.id}`);
  console.info(
    `New note: ${note.title} is saved to the database with an id of ${note.id}`
  );
  db.push(note);

  fs.writeFile(jsonFilePath, JSON.stringify(db), function (err) {
    err ? console.log(err) : console.log("Success");
  });

  res.json(note);
});

module.exports = router;
