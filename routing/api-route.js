const router = require('express').Router();
const fs = require("fs");
const uniqid = require("uniqid");

//Routing 

router.get("/notes", (req, res) => {
  console.log("Get Notes Request")

  let data = fs.readFileSync("./db/db.json", "utf8");

  res.json(JSON.parse(data));
});

router.post("/notes", (req, res) => {
  const newNote = {
    ...req.body,
    id: uniqid(),
  };
  console.log("Request for New Notes");

  let data = fs.readFileSync("./db/db.json", "utf8");
  const dataJson = JSON.parse(data);
  dataJson.push(newNote);

  fs.writeFile(
    "./db/db.json",
    JSON.stringify(dataJson),
    (err, text) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('', text);
    }
  );
  console.log("New note added");
  res.json(data);
});

router.delete("/notes/:id", (req, res) => {
  let data = fs.readFileSync("./db/db.json", "utf8");

  const dataJSON = JSON.parse(data);
  const newNotes = dataJSON.filter((note) => {
    return note.id !== req.params.id;
  });

  fs.writeFile("./db/db.json", JSON.stringify(newNotes), (err, text) => {
    if (err) {
      console.error(err);
      return;
    }
  });
  res.json(newNotes);
})

module.exports = router
