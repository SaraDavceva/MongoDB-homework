const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: {
    type: Number,
    min: 1800,
    max: 2024,
  },
});

const BookModel = mongoose.model("Book", bookSchema, "book");

const getAll = async () => {
  return await BookModel.find();
};

const create = async (data) => {
  const newBook = new BookModel(data);
  return await newBook.save();
};

const update = async (bookId, data) => {
  return await BookModel.updateOne({ _id: bookId }, data);
};

const remove = async (bookId) => {
  return await BookModel.deleteOne({ _id: bookId });
};

const getBookById = async (bookId) => {
  return await BookModel.findOne({ _id: bookId });
  // .populate({
  //   path: "bestFriend",
  //   select: "-_id email name",
  // });
};

module.exports = {
  getAll,
  create,
  update,
  remove,
  getBookById,
};
