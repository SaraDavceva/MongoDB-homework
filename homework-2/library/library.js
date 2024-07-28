const mongoose = require("mongoose");

const librarySchema = new mongoose.Schema({
  title: String,
  author: String,
  year: {
    type: Number,
    min: 1800,
    max: 2024,
  },
});

const LibraryModel = mongoose.model("Library", librarySchema, "library");
module.exports = LibraryModel;
