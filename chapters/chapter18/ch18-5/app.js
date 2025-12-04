const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { Schema } = mongoose;

app.set("view engine", "ejs");

mongoose.connect('mongodb://root:root@mongo:27017/app?authSource=admin')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(e => {
    console.error("MongoDB connection error:", e);
  });

const studentSchema = new Schema({
  name: String,
  age: Number,
  major: String,
  scholarship: {
    merit: Number,
    other: Number,
  },
});

// mongoose.model()的第一個參數是String，且要為單數型的大寫英文字母開頭，
// 像是要製作people的collection，就須使用'Person'(Mongoose會自動轉為複數形式)
const Student = mongoose.model('Student', studentSchema);
const newObject = new Student({
  name: "Esther",
  age: 27,
  major: "Mathematics",
  scholarship: {
    merit: 6000,
    other:7000,
  },
});

// document.save() - 在MongoDB中儲存document。return a Promise。
newObject.save().then(saveObject => {
  console.log("資料已經儲存完畢，儲存的資料是:");
  console.log(saveObject);
}).catch(e => {
  console.error(e);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});