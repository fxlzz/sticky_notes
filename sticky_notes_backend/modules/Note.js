// Note.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  body: String,
  colors: {
    type: Object,
    required: true,
  },
  position: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("note", NoteSchema);
