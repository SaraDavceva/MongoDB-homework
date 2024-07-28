const mongoose = require("mongoose");

const Library = require("./library");
mongoose.connect(
  "mongodb+srv://saradavceva:sara123%40@cluster0.l6sevex.mongodb.net/mongo-hw",
  console.log("connected")
);

const run = async () => {
  try {
    // const book = new Library({
    //   title: "To Kill a Mockingbird",
    //   author: "Harper Lee",
    //   year: 1960,
    // });

    // await book.save();

    // await Library.create({
    //   title: "1984",
    //   author: "George Orwell",
    //   year: 1949,
    // });

    // await Library.deleteOne({ title: "To Kill a Mockingbird" });
    // await Library.updateOne(
    //   { title: "To Kill a Mockingbird" },
    //   { title: "Pride and Prejudice" }
    // );
    const getBook = await Library.find();
    console.log(getBook);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

run();
