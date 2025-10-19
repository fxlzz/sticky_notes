const noteDao = require("../dao/noteDao.js");
const { ValidationError } = require("../utils/error.js");
const getAllNotesService = async () => {
  return await noteDao.getAllNotes();
};

const addNoteService = async (note) => {
  if (!note) {
    return new ValidationError("Note is required");
  }
  return await noteDao.addNote(note);
};

const deleteNoteService = async (id) => {
  if (!id) {
    return new ValidationError("Id is required");
  }
  return await noteDao.deleteNote(id);
};

const updateNoteService = async (id, note) => {
  return await noteDao.updateNote(id, note);
};

module.exports = { getAllNotesService, addNoteService, deleteNoteService, updateNoteService };
