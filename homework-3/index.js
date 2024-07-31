const express = require("express");

const connectDB = require("./db/config");
connectDB();
const {
  getAllBooks,
  createBook,
  updateBook,
  removeBook,
  getSingleBookById,
} = require("./controllers/book");

const app = express();

app.use(express.json());

app.get("/book", getAllBooks);
app.post("/book", createBook);
app.put("/book/:id", updateBook);
app.delete("/book/:id", removeBook);
app.get("/book/:id", getSingleBookById);

app.listen(3000, () => console.log("Server is listening at port 3000!"));
