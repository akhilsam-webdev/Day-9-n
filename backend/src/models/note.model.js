const mongoose = require("mongoose")

const  noteSchema = new mongoose.Schema({
    titel:String,
    diss:String,
})

const noteModel = mongoose.model("note",noteSchema)

module.exports = noteModel