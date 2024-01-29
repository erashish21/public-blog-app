const express = require('express');
const PORT = 3000;
const { default: mongoose } = require('mongoose');
const app = express();
const env = require('dotenv');
env.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server is Running on port http://localhost:${PORT}`);
});