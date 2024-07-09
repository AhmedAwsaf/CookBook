const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect(
    "mongodb+srv://abonirounak:6ZufqdRLedkqMbCc@cookbook-react-app.yh2pjuw.mongodb.net/cookbook-react-app?retryWrites=true&w=majority&appName=CookBook-react-app"
  );

  console.log("Mongodb Connected Successfully!");

  app.get("/", (req, res) => {
    res.send("CookBook server is running:!");
  });

  //routes
  const UserRoutes = require("./src/routes/UserRoute");

  app.use("/api/user", UserRoutes);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main().catch((err) => console.log(err));
