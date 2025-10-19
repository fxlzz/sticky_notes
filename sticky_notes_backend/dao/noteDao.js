// 增删改查
const Note = require("../modules/Note");

// 获取所有文档
const getAllNotes = async () => {
  const notes = await Note.find();
  return notes;
};

// 添加文档
const addNote = async (note) => {
  const newNote = new Note(note);
  await newNote.save();
  return newNote;
};

// 删除文档
const deleteNote = async (id) => {
  await Note.findByIdAndDelete(id);
  return true;
};

// 修改文档
const updateNote = async (id, note) => {
  const updatedNote = await Note.findByIdAndUpdate(id, note, { new: true });
  return updatedNote;
};

// 通过id获取文档
const getNoteById = async (id) => {
  const note = await Note.findById(id);
  return note;
};

module.exports = {
  getAllNotes,
  addNote,
  deleteNote,
  getNoteById,
  updateNote,
};
