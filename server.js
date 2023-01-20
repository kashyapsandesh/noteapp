const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Note = require("./src/model/Note");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose
  .connect(
    "mongodb+srv://sandeshghimire:Kashyap000@cluster0.ro7u9iy.mongodb.net/notes"
  )
  .then(function () {
    app.get("/", function (req, res) {
      res.send("The is a Home ");
    });
    app.get("/notes/list/:userid", async function (req, res) {
      var notes = await Note.find({ userid: req.params.userid });
      res.json(notes);
    });
    // app.post("/notes/add", async function (req, res) {
    //   var newNote = new Note({
    //     id: "2",
    //     userid: "Aashish",
    //     title: "My first note",
    //     content: "This is my first note of second user",
    //   });
    //   await newNote.save();
    //   const response = { message: "New Note Created" };
    //   res.json(response);
    // });
    app.post("/notes/add", async function (req, res) {
      res.json(req.body);
      // var newNote = new Note({
      //     id: "2",
      //     userid: "Aashish",
      //     title: "My first note",
      //     content: "This is my first note of second user",
      //   });
      //   await newNote.save();
      //   const response = { message: "New Note Created" };
      //   res.json(response);
      // });
      var newNote = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content,
      });
      await newNote.save();
      const response = { message: "New Note Created" };
      res.json(response);
    });
  });

app.listen(4000, function () {
  console.log("Service running in port 3000");
});
