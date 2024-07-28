const mongoose = require("mongoose");

const Recipe = require("./recipes");
mongoose.connect(
  "mongodb+srv://saradavceva:sara123%40@cluster0.l6sevex.mongodb.net/mongo-hw",
  console.log("connected")
);

const run = async () => {
  try {
    // await Recipe.create([
    //   {
    //     name: "Classic Margherita Pizza",
    //     ingredients: [
    //       "Pizza dough",
    //       "Tomato sauce",
    //       "Fresh mozzarella cheese",
    //       "Fresh basil leaves",
    //       "Olive oil",
    //       "Salt and pepper to taste",
    //     ],
    //   },
    //   {
    //     name: "Pepperoni",
    //     ingredients: [
    //       "strong white bread flour",
    //       "fast-action dried yeast",
    //       "olive oil",
    //       "fine polenta",
    //       "pizza sauce",
    //       "grated mozzarella",
    //       "pepperoni",
    //     ],
    //   },
    // ]);

    // await Recipe.updateOne(
    //   { name: "Classic Margherita Pizza" },
    //   { name: "Margherita Pizza" }
    // );

    // await Recipe.deleteOne({ name: "Classic Margherita Pizza" });
    const getRecipe = await Recipe.find();
    console.log(getRecipe);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

run();
