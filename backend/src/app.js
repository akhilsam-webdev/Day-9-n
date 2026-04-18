const express = require("express");
const noteModel = require("./models/note.model");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())

app.post("/api/note", async (req, res) => {
  const { titel, diss } = req.body;

  const note = await noteModel.create({
    titel,
    diss,
  });

  res.status(201).json({
    msg: "note created suff",
    note,
  });
});

app.get("/api/note", async (req, res) => {
  const allNotes = await noteModel.find();

  res.status(200).json({
    msg: "all notes fetched suff",
    allNotes,
  });
});

app.delete("/api/note/:id", async (req, res) => {
  const id = req.params.id;

  const deleteNote = await noteModel.findByIdAndDelete(id);

  res.status(200).json({
    msg: "selected note deleted suff",
    deleteNote,
  });
});

app.patch("/api/note/:id", async (req, res) => {
  const id = req.params.id;
  const { titel } = req.body;

  const updateTitel = await noteModel.findByIdAndUpdate(
    id,
    {titel}
  )

  res.status(200).json({
    msg:"titel updated suff",
    updateTitel
  })
});

app.put("/api/note/:id",async(req,res)=>{
    const id = req.params.id
    const {titel,diss} = req.body

    const updateFullNote = await noteModel.findByIdAndUpdate(
        id,
        {titel,diss}
    )

    res.status(200).json({
        msg:"titel and diss updated suff",
        updateFullNote
    })
})
module.exports = app;
