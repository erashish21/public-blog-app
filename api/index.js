const express = require("express");
const PORT = 3000;
const mongoose = require("mongoose");
const app = express();
require("dotenv").config({ path: "./.env" });
const userRoutes = require('./routes/user.route.js');
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URL, {
   
  })
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

