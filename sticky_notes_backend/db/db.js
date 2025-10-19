const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/notes").catch((e) => {
  console.log("database connection error", e);
});

mongoose.connection.on("open", () => {
  console.log("database connection successful");
});
