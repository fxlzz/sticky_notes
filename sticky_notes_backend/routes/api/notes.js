// 增删改查
const express = require("express");
const router = express.Router();
const noteService = require("../../services/noteSevice");
const { formatResponse } = require("../../utils/tools");

router.get("/", async (req, res) => {
  const notes = await noteService.getAllNotesService();
  res.send(formatResponse(200, "ok", notes));
});

router.post("/", async (req, res) => {
  const note = await noteService.addNoteService(req.body);
  if (note && note._id) {
    res.send(formatResponse(0, "create note successful", note));
  } else {
    res.send(formatResponse(500, "Failed to create note", null));
  }
});

router.put("/:id", async (req, res) => {
  const note = await noteService.updateNoteService(req.params.id, req.body);
  res.send(formatResponse(0, "update note successful", note));
});

router.delete("/:id", async (req, res) => {
  const note = await noteService.deleteNoteService(req.params.id);
  res.send(formatResponse(0, "delete note successful", note));
});

module.exports = router;
