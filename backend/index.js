require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

async function main() {
  await mongoose.connect(
    process.env.MONGO_DB_URI
  );

  console.log("Mongodb Connected Successfully!");

  app.get("/", (req, res) => {
    res.send("CookBook server is running:!");
  });

  //routes
  const UserRoutes = require("./src/routes/UserRoute");
  const RecipeRoutes = require("./src/routes/RecipeRoute");
  const ProductsRoutes = require("./src/routes/productRoute");

  app.use("/api/user", UserRoutes);
  app.use("/api/recipe", RecipeRoutes);
  app.use("/api/minimart", ProductsRoutes);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main().catch((err) => console.log(err));
