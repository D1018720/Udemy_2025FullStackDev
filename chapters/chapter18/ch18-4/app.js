const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.set("view engine", "ejs");

mongoose.connect('mongodb://root:root@mongo:27017/app?authSource=admin')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(e => {
    console.error("MongoDB connection error:", e);
  });

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});