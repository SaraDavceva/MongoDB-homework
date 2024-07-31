const {
  getAll,
  create,
  update,
  remove,
  getBookById,
} = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const books = await getAll();
    return res.status(200).send(books);
  } catch (err) {
    return res.status(500).send("Invalid server error");
  }
};

const createBook = async (req, res) => {
  try {
    const newBook = await create(req.body);
    return res.status(200).send(newBook);
  } catch (err) {
    return res.status(500).send("Invalid server error");
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBook = await update(req.params.id, req.body);
    return res.status(200).send(updatedBook);
  } catch (err) {
    return res.status(500).send("Invalid server error");
  }
};

const removeBook = async (req, res) => {
  try {
    const removedBook = await remove(req.params.id);
    return res.status(200).send(removedBook);
  } catch (err) {
    return res.status(500).send("Invalid server error");
  }
};

const getSingleBookById = async (req, res) => {
  try {
    const foundBook = await getBookById(req.params.id);
    return res.status(200).send(foundBook);
  } catch (err) {
    return res.status(500).send("Invalid server error");
  }
};

module.exports = {
  getAllBooks,
  createBook,
  updateBook,
  removeBook,
  getSingleBookById,
};
